import { relations } from 'drizzle-orm';
import {
  index,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(),
  email: text('email').notNull(),
  role: text('role').notNull().default('player'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  lastLoginAt: timestamp('last_login_at').defaultNow().notNull(),
});

export const dailySubmissions = pgTable(
  'daily_submissions',
  {
    id: serial('id').primaryKey(),
    date: text('date').notNull(),
    playerId: text('player_id').notNull(),
    userUid: text('user_uid').references(() => users.uid, { onDelete: 'set null' }),
    totalScore: integer('total_score').notNull(),
    totalAttempts: integer('total_attempts').notNull(),
    solvedCount: integer('solved_count').notNull(),
    submittedAt: timestamp('submitted_at').defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex('daily_submissions_date_player_idx').on(table.date, table.playerId),
    index('daily_submissions_date_idx').on(table.date),
  ]
);

export const dailyAnalytics = pgTable('daily_analytics', {
  date: text('date').primaryKey(),
  pageViews: integer('page_views').notNull().default(0),
  guesses: integer('guesses').notNull().default(0),
  solvedRounds: integer('solved_rounds').notNull().default(0),
  failedRounds: integer('failed_rounds').notNull().default(0),
  hintsUsed: integer('hints_used').notNull().default(0),
  sharesOpened: integer('shares_opened').notNull().default(0),
  sharesDownloaded: integer('shares_downloaded').notNull().default(0),
  hubOpens: integer('hub_opens').notNull().default(0),
  mobileViews: integer('mobile_views').notNull().default(0),
  desktopViews: integer('desktop_views').notNull().default(0),
  lightViews: integer('light_views').notNull().default(0),
  darkViews: integer('dark_views').notNull().default(0),
});

export const dailyVisitors = pgTable(
  'daily_visitors',
  {
    id: serial('id').primaryKey(),
    date: text('date').notNull(),
    visitorHash: text('visitor_hash').notNull(),
    firstSeenAt: timestamp('first_seen_at').defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex('daily_visitors_date_hash_idx').on(table.date, table.visitorHash),
    index('daily_visitors_date_idx').on(table.date),
  ]
);

export const inventionStats = pgTable('invention_stats', {
  inventionId: text('invention_id').primaryKey(),
  guesses: integer('guesses').notNull().default(0),
  solved: integer('solved').notNull().default(0),
  failed: integer('failed').notNull().default(0),
  hints: integer('hints').notNull().default(0),
});

export const adminCredentials = pgTable('admin_credentials', {
  id: text('id').primaryKey(),
  salt: text('salt').notNull(),
  hash: text('hash').notNull(),
  claimedAt: timestamp('claimed_at').defaultNow().notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  submissions: many(dailySubmissions),
}));

export const dailySubmissionsRelations = relations(dailySubmissions, ({ one }) => ({
  user: one(users, {
    fields: [dailySubmissions.userUid],
    references: [users.uid],
  }),
}));
