import crypto from 'crypto';
import express from 'express';
import type { Request } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import {
  createAdminCredentialOnce,
  getAdminCredential,
  getAdminMetricsSnapshot,
  getScoresByDate,
  recordTrackEvent,
  upsertDailySubmission,
} from './src/db/repository.ts';
import type { TrackEventName } from './src/db/repository.ts';
import {
  extractBearerToken,
  extractOptionalFirebaseUser,
  issueAdminToken,
  requireOwnerAuth,
  resolveOwnerAuth,
  revokeAdminToken,
} from './src/middleware/auth.ts';
import type { AuthRequest } from './src/middleware/auth.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VISITOR_HASH_SALT = process.env.SESSION_SECRET || 'erfunden-wo-visitor-salt-v1';
const VALID_TRACK_EVENTS = new Set<TrackEventName>([
  'page_view',
  'round_guess',
  'round_solved',
  'round_failed',
  'hint_used',
  'share_opened',
  'share_downloaded',
  'hub_opened',
]);

function getBerlinToday(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Berlin' }).format(new Date());
}

function shiftDate(dateStr: string, deltaDays: number): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + deltaDays));
  return dt.toISOString().slice(0, 10);
}

function hashVisitorId(visitorId: string): string {
  return crypto
    .createHash('sha256')
    .update(`${VISITOR_HASH_SALT}:${visitorId}`)
    .digest('hex')
    .slice(0, 16);
}

function constantTimeStringMatch(a: string, b: string): boolean {
  const digestA = crypto.createHash('sha256').update(a).digest();
  const digestB = crypto.createHash('sha256').update(b).digest();
  return crypto.timingSafeEqual(digestA, digestB);
}

function verifyPasswordAgainstScrypt(
  password: string,
  record: { salt: string; hash: string }
): boolean {
  try {
    const derived = crypto.scryptSync(password, record.salt, 64);
    const stored = Buffer.from(record.hash, 'hex');
    if (derived.length !== stored.length) return false;
    return crypto.timingSafeEqual(derived, stored);
  } catch {
    return false;
  }
}

const failedAuthAttempts = new Map<string, { count: number; resetAt: number }>();

function checkAuthRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = failedAuthAttempts.get(ip);
  if (!entry || entry.resetAt <= now) return true;
  return entry.count < 15;
}

function recordFailedAuthAttempt(ip: string): void {
  const now = Date.now();
  const entry = failedAuthAttempts.get(ip);
  if (!entry || entry.resetAt <= now) {
    failedAuthAttempts.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
  } else {
    entry.count++;
  }
}

function computeRealRankSummary(scores: number[], myScore: number) {
  const totalPlayers = scores.length;
  if (totalPlayers === 0) {
    return {
      rank: 1,
      totalPlayers: 0,
      betterThanPercent: 0,
      worseThanPercent: 0,
    };
  }
  if (totalPlayers === 1) {
    return {
      rank: 1,
      totalPlayers: 1,
      betterThanPercent: 100,
      worseThanPercent: 0,
    };
  }

  let strictlyBetter = 0;
  let strictlyWorse = 0;
  let equalCount = 0;

  for (const s of scores) {
    if (s > myScore) strictlyBetter++;
    else if (s < myScore) strictlyWorse++;
    else equalCount++;
  }

  const rank = strictlyBetter + 1;
  const betterThanPercent =
    Math.round(((strictlyWorse + Math.max(0, equalCount - 1) * 0.5) / (totalPlayers - 1)) * 1000) /
    10;
  const worseThanPercent = Math.round((100 - betterThanPercent) * 10) / 10;

  return {
    rank,
    totalPlayers,
    betterThanPercent,
    worseThanPercent,
  };
}

function computeRealDistributionStats(scores: number[]) {
  const n = scores.length;
  const binSize = 40;
  const binCount = 15;
  const bins = Array.from({ length: binCount }, (_, idx) => ({
    min: idx * binSize,
    max: (idx + 1) * binSize,
    count: 0,
  }));

  if (n === 0) {
    return {
      mean: 0,
      stdDev: 0,
      bins,
    };
  }

  const mean = scores.reduce((acc, v) => acc + v, 0) / n;
  const variance = scores.reduce((acc, v) => acc + (v - mean) ** 2, 0) / n;
  const stdDev = Math.sqrt(variance);

  for (const s of scores) {
    const idx = Math.min(binCount - 1, Math.max(0, Math.floor(s / binSize)));
    bins[idx].count++;
  }

  return {
    mean: Math.round(mean * 10) / 10,
    stdDev: Math.round(stdDev * 10) / 10,
    bins,
  };
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '32kb' }));

  app.get('/api/today', (_req, res) => {
    res.json({ today: getBerlinToday() });
  });

  app.get('/api/stats', async (req, res) => {
    try {
      const date =
        typeof req.query.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(req.query.date)
          ? req.query.date
          : getBerlinToday();
      const myScoreParam = req.query.myScore !== undefined ? Number(req.query.myScore) : null;
      const scores = await getScoresByDate(date);
      const dist = computeRealDistributionStats(scores);
      const rankSummary =
        myScoreParam !== null && !Number.isNaN(myScoreParam)
          ? computeRealRankSummary(scores, myScoreParam)
          : null;

      res.json({
        date,
        totalPlayers: scores.length,
        ...dist,
        rankSummary,
      });
    } catch (error) {
      console.error('Failed to handle GET /api/stats:', error);
      res.status(500).json({ error: 'Tagesstatistiken konnten nicht geladen werden.' });
    }
  });

  app.post('/api/submit-day', async (req, res) => {
    try {
      const { date, playerId, totalScore, totalAttempts, solvedCount } = req.body ?? {};
      const targetDate =
        typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : getBerlinToday();
      const safePlayerId =
        typeof playerId === 'string' && playerId.trim().length > 0
          ? playerId.trim().slice(0, 80)
          : `anon-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

      if (typeof totalScore !== 'number' || Number.isNaN(totalScore)) {
        res.status(400).json({ error: 'Ungültige Tagesdaten' });
        return;
      }

      const clampedScore = Math.max(0, Math.min(600, Math.round(totalScore)));
      const safeAttempts =
        typeof totalAttempts === 'number' && !Number.isNaN(totalAttempts)
          ? Math.max(0, Math.min(35, Math.round(totalAttempts)))
          : 0;
      const safeSolved =
        typeof solvedCount === 'number' && !Number.isNaN(solvedCount)
          ? Math.max(0, Math.min(5, Math.round(solvedCount)))
          : 0;

      const optionalUser = await extractOptionalFirebaseUser(req);
      const scores = await upsertDailySubmission({
        date: targetDate,
        playerId: safePlayerId,
        userUid: optionalUser?.uid ?? null,
        totalScore: clampedScore,
        totalAttempts: safeAttempts,
        solvedCount: safeSolved,
      });

      const rankSummary = computeRealRankSummary(scores, clampedScore);
      const dist = computeRealDistributionStats(scores);

      res.json({
        date: targetDate,
        myScore: clampedScore,
        ...rankSummary,
        ...dist,
      });
    } catch (error) {
      console.error('Failed to handle POST /api/submit-day:', error);
      res.status(500).json({ error: 'Tagesergebnis konnte nicht gespeichert werden.' });
    }
  });

  app.post('/api/track', async (req, res) => {
    try {
      const { event, date, visitorId, deviceType, theme, inventionId } = req.body ?? {};
      if (typeof event !== 'string' || !VALID_TRACK_EVENTS.has(event as TrackEventName)) {
        res.status(400).json({ error: 'Ungültiges Event' });
        return;
      }

      const targetDate =
        typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : getBerlinToday();
      const visitorHash =
        typeof visitorId === 'string' && visitorId.trim().length > 0
          ? hashVisitorId(visitorId.trim().slice(0, 80))
          : null;
      const safeInventionId =
        typeof inventionId === 'string' && /^[a-z0-9-]{2,64}$/i.test(inventionId)
          ? inventionId
          : null;

      await recordTrackEvent({
        event: event as TrackEventName,
        date: targetDate,
        visitorHash,
        deviceType,
        theme,
        inventionId: safeInventionId,
      });

      res.json({ ok: true });
    } catch (error) {
      console.error('Failed to handle POST /api/track:', error);
      res.status(500).json({ error: 'Event konnte nicht gespeichert werden.' });
    }
  });

  // Owner auth status (never returns any secrets)
  app.get('/api/admin/status', async (req, res) => {
    try {
      const envPasscode = (process.env.ADMIN_PASSCODE || '').trim();
      const configured = envPasscode.length > 0;
      const credential = await getAdminCredential();
      const claimed = Boolean(credential?.hash);
      const authCheck = await resolveOwnerAuth(req);
      res.json({
        configured,
        claimed,
        authenticated: authCheck.ok,
        authMethod: authCheck.ok ? authCheck.mode : null,
      });
    } catch (error) {
      console.error('Failed to handle GET /api/admin/status:', error);
      res.status(500).json({ error: 'Status konnte nicht geladen werden.' });
    }
  });

  // One-time first-run owner passcode setup when ADMIN_PASSCODE env var is not configured
  app.post('/api/admin/claim', async (req, res) => {
    try {
      const clientIp = req.ip || 'unknown';
      if (!checkAuthRateLimit(clientIp)) {
        res.status(429).json({ error: 'Zu viele Versuche. Bitte kurz warten.' });
        return;
      }

      const envPasscode = (process.env.ADMIN_PASSCODE || '').trim();
      const existing = await getAdminCredential();
      if (envPasscode.length > 0 || existing?.hash) {
        res.status(403).json({ error: 'Ein Passwort ist bereits eingerichtet.' });
        return;
      }

      const { password } = req.body ?? {};
      if (typeof password !== 'string' || password.length < 6 || password.length > 128) {
        res.status(400).json({ error: 'Das Passwort muss zwischen 6 und 128 Zeichen lang sein.' });
        return;
      }

      const salt = crypto.randomBytes(16).toString('hex');
      const hash = crypto.scryptSync(password, salt, 64).toString('hex');
      const inserted = await createAdminCredentialOnce(salt, hash);
      if (!inserted) {
        res.status(403).json({ error: 'Ein Passwort ist bereits eingerichtet.' });
        return;
      }

      const token = issueAdminToken();
      res.json({ token });
    } catch (error) {
      console.error('Failed to handle POST /api/admin/claim:', error);
      res.status(500).json({ error: 'Passwort konnte nicht gespeichert werden.' });
    }
  });

  app.post('/api/admin/login', async (req, res) => {
    try {
      const clientIp = req.ip || 'unknown';
      if (!checkAuthRateLimit(clientIp)) {
        res.status(429).json({ error: 'Zu viele Fehlversuche. Bitte kurz warten.' });
        return;
      }

      const { password } = req.body ?? {};
      if (typeof password !== 'string' || password.length === 0 || password.length > 128) {
        res.status(400).json({ error: 'Bitte Passwort eingeben.' });
        return;
      }

      const envPasscode = (process.env.ADMIN_PASSCODE || '').trim();
      let valid = false;

      if (envPasscode.length > 0) {
        valid = constantTimeStringMatch(password, envPasscode);
      } else {
        const storedCredential = await getAdminCredential();
        if (!storedCredential) {
          res.status(409).json({ error: 'Noch kein Passwort eingerichtet.' });
          return;
        }
        valid = verifyPasswordAgainstScrypt(password, storedCredential);
      }

      if (!valid) {
        recordFailedAuthAttempt(clientIp);
        res.status(401).json({ error: 'Passwort ist nicht korrekt.' });
        return;
      }

      const token = issueAdminToken();
      res.json({ token });
    } catch (error) {
      console.error('Failed to handle POST /api/admin/login:', error);
      res.status(500).json({ error: 'Anmeldung fehlgeschlagen.' });
    }
  });

  app.post('/api/admin/logout', (req, res) => {
    const token = extractBearerToken(req);
    if (token) {
      revokeAdminToken(token);
    }
    res.json({ ok: true });
  });

  app.get('/api/admin/metrics', requireOwnerAuth, async (req: AuthRequest, res) => {
    try {
      const today = getBerlinToday();
      const snapshot = await getAdminMetricsSnapshot();

      const dayMap = new Map(snapshot.dayRows.map((row) => [row.date, row]));
      const visitorsByDay = new Map<string, Set<string>>();
      const allVisitorHashes = new Set<string>();
      for (const v of snapshot.visitorRows) {
        allVisitorHashes.add(v.visitorHash);
        let set = visitorsByDay.get(v.date);
        if (!set) {
          set = new Set<string>();
          visitorsByDay.set(v.date, set);
        }
        set.add(v.visitorHash);
      }

      const submissionsByDay = new Map<string, number[]>();
      let totalCompletedDays = 0;
      let scoreSum = 0;
      let solvedCountSum = 0;
      for (const sub of snapshot.submissionRows) {
        totalCompletedDays++;
        scoreSum += sub.totalScore;
        solvedCountSum += sub.solvedCount;
        let list = submissionsByDay.get(sub.date);
        if (!list) {
          list = [];
          submissionsByDay.set(sub.date, list);
        }
        list.push(sub.totalScore);
      }

      let totalPageViews = 0;
      let totalGuesses = 0;
      let totalSolvedRounds = 0;
      let totalFailedRounds = 0;
      let totalHintsUsed = 0;
      let totalSharesOpened = 0;
      let totalSharesDownloaded = 0;
      let totalHubOpens = 0;
      let mobileViews = 0;
      let desktopViews = 0;
      let lightViews = 0;
      let darkViews = 0;

      for (const row of snapshot.dayRows) {
        totalPageViews += row.pageViews;
        totalGuesses += row.guesses;
        totalSolvedRounds += row.solvedRounds;
        totalFailedRounds += row.failedRounds;
        totalHintsUsed += row.hintsUsed;
        totalSharesOpened += row.sharesOpened;
        totalSharesDownloaded += row.sharesDownloaded;
        totalHubOpens += row.hubOpens;
        mobileViews += row.mobileViews;
        desktopViews += row.desktopViews;
        lightViews += row.lightViews;
        darkViews += row.darkViews;
      }

      const todayRow = dayMap.get(today);
      const todayVisitors = visitorsByDay.get(today)?.size ?? 0;
      const todaySubmissions = submissionsByDay.get(today)?.length ?? 0;

      const totalUniqueVisitors = allVisitorHashes.size;
      const avgDailyScore =
        totalCompletedDays > 0 ? Math.round((scoreSum / totalCompletedDays) * 10) / 10 : 0;
      const avgSolvedPerDay =
        totalCompletedDays > 0 ? Math.round((solvedCountSum / totalCompletedDays) * 100) / 100 : 0;
      const completionRatePercent =
        totalUniqueVisitors > 0
          ? Math.min(100, Math.round((totalCompletedDays / totalUniqueVisitors) * 1000) / 10)
          : 0;

      const dailySeries = Array.from({ length: 14 }, (_, idx) => {
        const dateStr = shiftDate(today, -(13 - idx));
        const row = dayMap.get(dateStr);
        const dayScores = submissionsByDay.get(dateStr) ?? [];
        const dayAvgScore =
          dayScores.length > 0
            ? Math.round((dayScores.reduce((s, x) => s + x, 0) / dayScores.length) * 10) / 10
            : 0;
        return {
          date: dateStr,
          pageViews: row?.pageViews ?? 0,
          uniqueVisitors: visitorsByDay.get(dateStr)?.size ?? 0,
          completedPlayers: dayScores.length,
          avgScore: dayAvgScore,
          guesses: row?.guesses ?? 0,
          solvedRounds: row?.solvedRounds ?? 0,
          hintsUsed: row?.hintsUsed ?? 0,
          sharesOpened: row?.sharesOpened ?? 0,
        };
      });

      const topInventions = snapshot.inventionRows.map((stats) => {
        const finished = stats.solved + stats.failed;
        return {
          id: stats.inventionId,
          guesses: stats.guesses,
          solved: stats.solved,
          failed: stats.failed,
          hints: stats.hints,
          solveRate: finished > 0 ? Math.round((stats.solved / finished) * 100) : null,
        };
      });

      res.json({
        generatedAt: new Date().toISOString(),
        today,
        authMode: req.ownerAuthMode || 'env',
        summary: {
          totalPageViews,
          todayPageViews: todayRow?.pageViews ?? 0,
          totalUniqueVisitors,
          todayUniqueVisitors: todayVisitors,
          totalCompletedDays,
          todayCompletedDays: todaySubmissions,
          avgDailyScore,
          avgSolvedPerDay,
          completionRatePercent,
          totalGuesses,
          totalSolvedRounds,
          totalFailedRounds,
          totalHintsUsed,
          totalSharesOpened,
          totalSharesDownloaded,
          totalHubOpens,
        },
        devices: {
          mobile: mobileViews,
          desktop: desktopViews,
        },
        themes: {
          light: lightViews,
          dark: darkViews,
        },
        dailySeries,
        topInventions,
      });
    } catch (error) {
      console.error('Failed to handle GET /api/admin/metrics:', error);
      res.status(500).json({ error: 'Metriken konnten nicht geladen werden.' });
    }
  });

  const resolveBaseUrl = (req: Request): string => {
    const envUrl = (process.env.APP_URL || '').trim().replace(/\/+$/, '');
    if (envUrl && envUrl !== 'MY_APP_URL' && /^https?:\/\//i.test(envUrl)) {
      return envUrl;
    }
    const protoHeader = (req.headers['x-forwarded-proto'] as string | undefined)
      ?.split(',')[0]
      ?.trim();
    const proto = protoHeader || req.protocol || 'https';
    const hostHeader = (req.headers['x-forwarded-host'] as string | undefined)
      ?.split(',')[0]
      ?.trim();
    const host = hostHeader || req.get('host') || 'localhost:3000';
    return `${proto}://${host}`;
  };

  app.get('/robots.txt', (req, res) => {
    const baseUrl = resolveBaseUrl(req);
    res
      .type('text/plain; charset=utf-8')
      .send(`User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${baseUrl}/sitemap.xml\n`);
  });

  app.get('/sitemap.xml', (req, res) => {
    const baseUrl = resolveBaseUrl(req);
    const lastmod = getBerlinToday();
    res.type('application/xml; charset=utf-8').send(
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        `  <url>\n` +
        `    <loc>${baseUrl}/</loc>\n` +
        `    <lastmod>${lastmod}</lastmod>\n` +
        `    <changefreq>daily</changefreq>\n` +
        `    <priority>1.0</priority>\n` +
        `  </url>\n` +
        `</urlset>\n`
    );
  });

  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    if (!process.env.DISABLE_HMR) {
      process.env.DISABLE_HMR = 'true';
    }
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: 'spa',
    });
    if (process.env.DISABLE_HMR === 'true') {
      app.get('/@vite/client', async (_req, res, next) => {
        try {
          const result = await vite.transformRequest('/@vite/client');
          if (!result || typeof result.code !== 'string') {
            next();
            return;
          }
          const patched = result.code
            .replace(
              'else throw new SendBeforeConnectError("send was called before connect");',
              'else return;'
            )
            .replace(
              'else throw new SendBeforeConnectError("invoke was called before connect");',
              'else return;'
            )
            .replace(
              'transport.connect(createHMRHandler(handleMessage));',
              '/* HMR WebSocket disabled via DISABLE_HMR */'
            );
          res.type('application/javascript').send(patched);
        } catch (err) {
          next(err);
        }
      });
    }
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    const distIndexFile = path.join(distPath, 'index.html');
    let cachedProdHtml: string | null = null;
    try {
      if (fs.existsSync(distIndexFile)) {
        cachedProdHtml = fs.readFileSync(distIndexFile, 'utf8');
      }
    } catch {
      cachedProdHtml = null;
    }

    app.use(express.static(distPath, { index: false }));
    app.get('*', (req, res) => {
      if (!cachedProdHtml) {
        res.sendFile(distIndexFile);
        return;
      }
      const baseUrl = resolveBaseUrl(req);
      const htmlWithMeta = cachedProdHtml
        .replace(/content="\/og-image\.png"/g, `content="${baseUrl}/og-image.png"`)
        .replace(
          '</head>',
          `  <link rel="canonical" href="${baseUrl}/" />\n    <meta property="og:url" content="${baseUrl}/" />\n  </head>`
        );
      res.type('text/html; charset=utf-8').send(htmlWithMeta);
    });
  }

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${port}`);
  });
}

startServer();
