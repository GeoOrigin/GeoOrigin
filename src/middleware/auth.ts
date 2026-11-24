import crypto from 'crypto';
import type { NextFunction, Request, Response } from 'express';
import type { DecodedIdToken } from 'firebase-admin/auth';
import { getOrCreateUser } from '../db/repository.ts';
import { adminAuth } from '../lib/firebase-admin.ts';

const SESSION_SIGNING_KEY = process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex');
const ADMIN_TOKEN_TTL_MS = 12 * 60 * 60 * 1000;
const OWNER_EMAIL = (process.env.OWNER_EMAIL || 'linus.klitzner@gmail.com').trim().toLowerCase();

interface AdminTokenPayload {
  role: 'owner';
  jti: string;
  iat: number;
  exp: number;
}

export interface AuthRequest extends Request {
  user?: DecodedIdToken;
  ownerAuthMode?: 'env' | 'claimed' | 'google';
}

const revokedTokenIds = new Set<string>();

export function extractBearerToken(req: Request): string | null {
  const header = req.headers.authorization;
  if (!header || typeof header !== 'string') return null;
  if (!header.startsWith('Bearer ')) return null;
  const token = header.slice(7).trim();
  return token.length > 0 ? token : null;
}

export function issueAdminToken(): string {
  const now = Date.now();
  const payload: AdminTokenPayload = {
    role: 'owner',
    jti: crypto.randomBytes(16).toString('hex'),
    iat: now,
    exp: now + ADMIN_TOKEN_TTL_MS,
  };
  const payloadB64 = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url');
  const sigB64 = crypto
    .createHmac('sha256', SESSION_SIGNING_KEY)
    .update(payloadB64)
    .digest('base64url');
  return `${payloadB64}.${sigB64}`;
}

export function verifyAdminToken(token: string): AdminTokenPayload | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 2) return null;
    const [payloadB64, sigB64] = parts;
    if (!payloadB64 || !sigB64) return null;

    const expectedSig = crypto
      .createHmac('sha256', SESSION_SIGNING_KEY)
      .update(payloadB64)
      .digest();
    const actualSig = Buffer.from(sigB64, 'base64url');
    if (expectedSig.length !== actualSig.length) return null;
    if (!crypto.timingSafeEqual(expectedSig, actualSig)) return null;

    const payload = JSON.parse(
      Buffer.from(payloadB64, 'base64url').toString('utf8')
    ) as AdminTokenPayload;
    if (!payload || payload.role !== 'owner' || !payload.jti) return null;
    if (typeof payload.exp !== 'number' || payload.exp <= Date.now()) return null;
    if (revokedTokenIds.has(payload.jti)) return null;
    return payload;
  } catch {
    return null;
  }
}

export function revokeAdminToken(token: string): void {
  const payload = verifyAdminToken(token);
  if (payload) {
    revokedTokenIds.add(payload.jti);
  }
}

export function isOwnerEmail(decoded: DecodedIdToken): boolean {
  const email = (decoded.email || '').trim().toLowerCase();
  return Boolean(email && email === OWNER_EMAIL && decoded.email_verified !== false);
}

export async function extractOptionalFirebaseUser(req: Request): Promise<DecodedIdToken | null> {
  const token = extractBearerToken(req);
  if (!token) return null;
  // Local HMAC admin tokens contain 2 segments, Firebase ID tokens are 3-segment JWTs
  if (token.split('.').length !== 3) return null;
  try {
    const decoded = await adminAuth.verifyIdToken(token);
    if (decoded.email) {
      await getOrCreateUser(
        decoded.uid,
        decoded.email,
        isOwnerEmail(decoded) ? 'owner' : 'player'
      );
    }
    return decoded;
  } catch {
    return null;
  }
}

export async function resolveOwnerAuth(
  req: Request
): Promise<{ ok: true; mode: 'env' | 'claimed' | 'google'; user?: DecodedIdToken } | { ok: false; status: 401 | 403; error: string }> {
  const token = extractBearerToken(req);
  if (!token) {
    return { ok: false, status: 401, error: 'Nicht autorisiert' };
  }

  const localPayload = verifyAdminToken(token);
  if (localPayload) {
    const envPasscode = (process.env.ADMIN_PASSCODE || '').trim();
    return {
      ok: true,
      mode: envPasscode.length > 0 ? 'env' : 'claimed',
    };
  }

  if (token.split('.').length === 3) {
    try {
      const decoded = await adminAuth.verifyIdToken(token);
      if (decoded.email) {
        await getOrCreateUser(
          decoded.uid,
          decoded.email,
          isOwnerEmail(decoded) ? 'owner' : 'player'
        );
      }
      if (!isOwnerEmail(decoded)) {
        return {
          ok: false,
          status: 403,
          error: 'Dieses Google-Konto ist nicht als Website-Inhaber autorisiert.',
        };
      }
      return { ok: true, mode: 'google', user: decoded };
    } catch {
      return { ok: false, status: 401, error: 'Ungültiges oder abgelaufenes Token' };
    }
  }

  return { ok: false, status: 401, error: 'Nicht autorisiert' };
}

export const requireOwnerAuth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const check = await resolveOwnerAuth(req);
    if (!check.ok) {
      res.status(check.status).json({ error: check.error });
      return;
    }
    req.ownerAuthMode = check.mode;
    if (check.user) {
      req.user = check.user;
    }
    next();
  } catch (error) {
    console.error('Owner auth middleware error:', error);
    res.status(500).json({ error: 'Authentifizierungsprüfung fehlgeschlagen.' });
  }
};
