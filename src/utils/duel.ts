import { AppLanguage } from '../i18n/translations';

export interface DuelChallenge {
  version: 1;
  date: string;
  score: number;
  maxScore: number;
  solvedCount: number;
  roundScores: number[];
  challengerName?: string;
}

interface CompactDuelPayload {
  v: 1;
  d: string;
  s: number;
  m: number;
  c: number;
  r: number[];
  n?: string;
}

const STORAGE_DUEL_PREFIX = 'erfunden_wo_duel_v1_';
const STORAGE_PLAYER_NAME_KEY = 'erfunden_wo_player_name_v1';

function toBase64Url(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function fromBase64Url(token: string): string | null {
  try {
    const padded = token.replace(/-/g, '+').replace(/_/g, '/');
    const padLen = (4 - (padded.length % 4)) % 4;
    const binary = atob(padded + '='.repeat(padLen));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  } catch {
    return null;
  }
}

export function sanitizeChallengerName(name?: string): string | undefined {
  if (!name) return undefined;
  const trimmed = name.replace(/\s+/g, ' ').trim().slice(0, 24);
  return trimmed.length > 0 ? trimmed : undefined;
}

export function encodeDuelToken(challenge: DuelChallenge): string {
  const cleanName = sanitizeChallengerName(challenge.challengerName);
  const payload: CompactDuelPayload = {
    v: 1,
    d: challenge.date,
    s: Math.max(0, Math.min(600, Math.round(challenge.score))),
    m: Math.max(100, Math.min(1000, Math.round(challenge.maxScore))),
    c: Math.max(0, Math.min(5, Math.round(challenge.solvedCount))),
    r: challenge.roundScores
      .slice(0, 5)
      .map((val) => Math.max(0, Math.min(200, Math.round(Number(val) || 0)))),
  };
  if (cleanName) {
    payload.n = cleanName;
  }
  return toBase64Url(JSON.stringify(payload));
}

export function decodeDuelToken(token: string): DuelChallenge | null {
  if (!token || token.length > 400) return null;
  const decoded = fromBase64Url(token.trim());
  if (!decoded) return null;
  try {
    const raw = JSON.parse(decoded) as Partial<CompactDuelPayload>;
    if (!raw || raw.v !== 1) return null;
    if (typeof raw.d !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(raw.d)) return null;
    if (typeof raw.s !== 'number' || !Number.isFinite(raw.s)) return null;
    if (typeof raw.m !== 'number' || !Number.isFinite(raw.m)) return null;
    if (typeof raw.c !== 'number' || !Number.isFinite(raw.c)) return null;
    if (!Array.isArray(raw.r) || raw.r.length !== 5) return null;

    const roundScores = raw.r.map((val) => {
      const n = Number(val);
      return Number.isFinite(n) ? Math.max(0, Math.min(200, Math.round(n))) : 0;
    });

    return {
      version: 1,
      date: raw.d,
      score: Math.max(0, Math.min(600, Math.round(raw.s))),
      maxScore: Math.max(100, Math.min(1000, Math.round(raw.m))),
      solvedCount: Math.max(0, Math.min(5, Math.round(raw.c))),
      roundScores,
      challengerName: typeof raw.n === 'string' ? sanitizeChallengerName(raw.n) : undefined,
    };
  } catch {
    return null;
  }
}

export function buildDuelUrl(challenge: DuelChallenge): string {
  const token = encodeDuelToken(challenge);
  if (typeof window === 'undefined') {
    return `/?duel=${encodeURIComponent(token)}`;
  }
  const url = new URL(window.location.origin + window.location.pathname);
  url.searchParams.set('duel', token);
  return url.toString();
}

export function buildDuelInviteText(challenge: DuelChallenge, lang: AppLanguage): string {
  const isEn = lang === 'en';
  const cleanName = sanitizeChallengerName(challenge.challengerName);
  const score = Math.max(0, Math.round(challenge.score));

  if (isEn) {
    return cleanName
      ? `${cleanName} scored ${score} pts — can you beat ${score} pts today?`
      : `Can you beat ${score} pts today?`;
  }
  return cleanName
    ? `${cleanName} hat heute ${score} Punkte geholt – schaffst du mehr als ${score} Punkte?`
    : `Schaffst du heute mehr als ${score} Punkte?`;
}

export function saveActiveDuel(challenge: DuelChallenge): void {
  try {
    localStorage.setItem(`${STORAGE_DUEL_PREFIX}${challenge.date}`, JSON.stringify(challenge));
  } catch {
    // ignore storage errors
  }
}

export function loadActiveDuel(dateStr: string): DuelChallenge | null {
  try {
    const raw = localStorage.getItem(`${STORAGE_DUEL_PREFIX}${dateStr}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<DuelChallenge>;
    if (
      !parsed ||
      parsed.version !== 1 ||
      parsed.date !== dateStr ||
      typeof parsed.score !== 'number' ||
      !Array.isArray(parsed.roundScores) ||
      parsed.roundScores.length !== 5
    ) {
      return null;
    }
    return {
      version: 1,
      date: parsed.date,
      score: parsed.score,
      maxScore: typeof parsed.maxScore === 'number' ? parsed.maxScore : 600,
      solvedCount: typeof parsed.solvedCount === 'number' ? parsed.solvedCount : 0,
      roundScores: parsed.roundScores.map((n) => Math.max(0, Math.round(Number(n) || 0))),
      challengerName: sanitizeChallengerName(parsed.challengerName),
    };
  } catch {
    return null;
  }
}

export function clearActiveDuel(dateStr: string): void {
  try {
    localStorage.removeItem(`${STORAGE_DUEL_PREFIX}${dateStr}`);
  } catch {
    // ignore
  }
}

export function loadSavedPlayerName(): string {
  try {
    return localStorage.getItem(STORAGE_PLAYER_NAME_KEY) || '';
  } catch {
    return '';
  }
}

export function savePlayerName(name: string): void {
  try {
    const cleaned = sanitizeChallengerName(name) || '';
    if (cleaned) {
      localStorage.setItem(STORAGE_PLAYER_NAME_KEY, cleaned);
    } else {
      localStorage.removeItem(STORAGE_PLAYER_NAME_KEY);
    }
  } catch {
    // ignore
  }
}
