import { desc, eq, sql } from 'drizzle-orm';
import { db } from './index.ts';
import {
  adminCredentials,
  dailyAnalytics,
  dailySubmissions,
  dailyVisitors,
  inventionStats,
  users,
} from './schema.ts';

export type TrackEventName =
  | 'page_view'
  | 'round_guess'
  | 'round_solved'
  | 'round_failed'
  | 'hint_used'
  | 'share_opened'
  | 'share_downloaded'
  | 'hub_opened';

export interface DailyAnalyticsRow {
  date: string;
  pageViews: number;
  guesses: number;
  solvedRounds: number;
  failedRounds: number;
  hintsUsed: number;
  sharesOpened: number;
  sharesDownloaded: number;
  hubOpens: number;
  mobileViews: number;
  desktopViews: number;
  lightViews: number;
  darkViews: number;
}

export interface SubmissionSummaryRow {
  date: string;
  totalScore: number;
  solvedCount: number;
}

export async function getOrCreateUser(uid: string, email: string, role = 'player') {
  try {
    const result = await db
      .insert(users)
      .values({
        uid,
        email,
        role,
        lastLoginAt: new Date(),
      })
      .onConflictDoUpdate({
        target: users.uid,
        set: {
          email,
          role,
          lastLoginAt: new Date(),
        },
      })
      .returning();

    return result[0];
  } catch (error) {
    console.error('Database query failed in getOrCreateUser:', error);
    throw new Error('Datenbankabfrage fehlgeschlagen.', { cause: error });
  }
}

export async function getScoresByDate(date: string): Promise<number[]> {
  try {
    const rows = await db
      .select({ totalScore: dailySubmissions.totalScore })
      .from(dailySubmissions)
      .where(eq(dailySubmissions.date, date));
    return rows.map((r) => r.totalScore);
  } catch (error) {
    console.error('Database query failed in getScoresByDate:', error);
    throw new Error('Tagesstatistiken konnten nicht geladen werden.', { cause: error });
  }
}

export async function upsertDailySubmission(input: {
  date: string;
  playerId: string;
  userUid: string | null;
  totalScore: number;
  totalAttempts: number;
  solvedCount: number;
}): Promise<number[]> {
  try {
    await db
      .insert(dailySubmissions)
      .values({
        date: input.date,
        playerId: input.playerId,
        userUid: input.userUid,
        totalScore: input.totalScore,
        totalAttempts: input.totalAttempts,
        solvedCount: input.solvedCount,
        submittedAt: new Date(),
      })
      .onConflictDoUpdate({
        target: [dailySubmissions.date, dailySubmissions.playerId],
        set: {
          userUid: input.userUid,
          totalScore: input.totalScore,
          totalAttempts: input.totalAttempts,
          solvedCount: input.solvedCount,
          submittedAt: new Date(),
        },
      });

    return await getScoresByDate(input.date);
  } catch (error) {
    console.error('Database query failed in upsertDailySubmission:', error);
    throw new Error('Tagesergebnis konnte nicht gespeichert werden.', { cause: error });
  }
}

export async function recordTrackEvent(input: {
  event: TrackEventName;
  date: string;
  visitorHash: string | null;
  deviceType: unknown;
  theme: unknown;
  inventionId: string | null;
}): Promise<void> {
  try {
    if (input.visitorHash) {
      await db
        .insert(dailyVisitors)
        .values({
          date: input.date,
          visitorHash: input.visitorHash,
        })
        .onConflictDoNothing({
          target: [dailyVisitors.date, dailyVisitors.visitorHash],
        });
    }

    const incPageViews = input.event === 'page_view' ? 1 : 0;
    const incGuesses = input.event === 'round_guess' ? 1 : 0;
    const incSolved = input.event === 'round_solved' ? 1 : 0;
    const incFailed = input.event === 'round_failed' ? 1 : 0;
    const incHints = input.event === 'hint_used' ? 1 : 0;
    const incSharesOpened = input.event === 'share_opened' ? 1 : 0;
    const incSharesDownloaded = input.event === 'share_downloaded' ? 1 : 0;
    const incHubOpens = input.event === 'hub_opened' ? 1 : 0;
    const incMobile = input.event === 'page_view' && input.deviceType === 'mobile' ? 1 : 0;
    const incDesktop = input.event === 'page_view' && input.deviceType === 'desktop' ? 1 : 0;
    const incDark = input.event === 'page_view' && input.theme === 'dark' ? 1 : 0;
    const incLight = input.event === 'page_view' && input.theme === 'light' ? 1 : 0;

    await db
      .insert(dailyAnalytics)
      .values({
        date: input.date,
        pageViews: incPageViews,
        guesses: incGuesses,
        solvedRounds: incSolved,
        failedRounds: incFailed,
        hintsUsed: incHints,
        sharesOpened: incSharesOpened,
        sharesDownloaded: incSharesDownloaded,
        hubOpens: incHubOpens,
        mobileViews: incMobile,
        desktopViews: incDesktop,
        lightViews: incLight,
        darkViews: incDark,
      })
      .onConflictDoUpdate({
        target: dailyAnalytics.date,
        set: {
          pageViews: sql`${dailyAnalytics.pageViews} + ${incPageViews}`,
          guesses: sql`${dailyAnalytics.guesses} + ${incGuesses}`,
          solvedRounds: sql`${dailyAnalytics.solvedRounds} + ${incSolved}`,
          failedRounds: sql`${dailyAnalytics.failedRounds} + ${incFailed}`,
          hintsUsed: sql`${dailyAnalytics.hintsUsed} + ${incHints}`,
          sharesOpened: sql`${dailyAnalytics.sharesOpened} + ${incSharesOpened}`,
          sharesDownloaded: sql`${dailyAnalytics.sharesDownloaded} + ${incSharesDownloaded}`,
          hubOpens: sql`${dailyAnalytics.hubOpens} + ${incHubOpens}`,
          mobileViews: sql`${dailyAnalytics.mobileViews} + ${incMobile}`,
          desktopViews: sql`${dailyAnalytics.desktopViews} + ${incDesktop}`,
          lightViews: sql`${dailyAnalytics.lightViews} + ${incLight}`,
          darkViews: sql`${dailyAnalytics.darkViews} + ${incDark}`,
        },
      });

    if (
      input.inventionId &&
      (incGuesses > 0 || incSolved > 0 || incFailed > 0 || incHints > 0)
    ) {
      await db
        .insert(inventionStats)
        .values({
          inventionId: input.inventionId,
          guesses: incGuesses,
          solved: incSolved,
          failed: incFailed,
          hints: incHints,
        })
        .onConflictDoUpdate({
          target: inventionStats.inventionId,
          set: {
            guesses: sql`${inventionStats.guesses} + ${incGuesses}`,
            solved: sql`${inventionStats.solved} + ${incSolved}`,
            failed: sql`${inventionStats.failed} + ${incFailed}`,
            hints: sql`${inventionStats.hints} + ${incHints}`,
          },
        });
    }
  } catch (error) {
    console.error('Database query failed in recordTrackEvent:', error);
    throw new Error('Tracking konnte nicht gespeichert werden.', { cause: error });
  }
}

export async function getAdminCredential() {
  try {
    const rows = await db
      .select()
      .from(adminCredentials)
      .where(eq(adminCredentials.id, 'owner'))
      .limit(1);
    return rows[0] ?? null;
  } catch (error) {
    console.error('Database query failed in getAdminCredential:', error);
    throw new Error('Admin-Status konnte nicht geprüft werden.', { cause: error });
  }
}

export async function createAdminCredentialOnce(salt: string, hash: string): Promise<boolean> {
  try {
    const inserted = await db
      .insert(adminCredentials)
      .values({
        id: 'owner',
        salt,
        hash,
        claimedAt: new Date(),
      })
      .onConflictDoNothing({
        target: adminCredentials.id,
      })
      .returning({ id: adminCredentials.id });

    return inserted.length > 0;
  } catch (error) {
    console.error('Database query failed in createAdminCredentialOnce:', error);
    throw new Error('Passwort konnte nicht gespeichert werden.', { cause: error });
  }
}

export async function getAdminMetricsSnapshot() {
  try {
    const [dayRows, visitorRows, submissionRows, inventionRows] = await Promise.all([
      db.select().from(dailyAnalytics),
      db
        .select({
          date: dailyVisitors.date,
          visitorHash: dailyVisitors.visitorHash,
        })
        .from(dailyVisitors),
      db
        .select({
          date: dailySubmissions.date,
          totalScore: dailySubmissions.totalScore,
          solvedCount: dailySubmissions.solvedCount,
        })
        .from(dailySubmissions),
      db
        .select()
        .from(inventionStats)
        .orderBy(
          desc(
            sql`${inventionStats.solved} + ${inventionStats.failed} + ${inventionStats.guesses}`
          )
        )
        .limit(15),
    ]);

    return {
      dayRows,
      visitorRows,
      submissionRows,
      inventionRows,
    };
  } catch (error) {
    console.error('Database query failed in getAdminMetricsSnapshot:', error);
    throw new Error('Metriken konnten nicht geladen werden.', { cause: error });
  }
}
