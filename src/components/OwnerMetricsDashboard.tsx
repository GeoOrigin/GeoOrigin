import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  Lock,
  LogOut,
  Monitor,
  RefreshCw,
  Share2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from 'lucide-react';
import { FULL_INVENTIONS, getLocalizedInvention } from '../data/inventions';
import { AppLanguage, formatNumberLocale } from '../i18n/translations';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleAuthProvider } from '../lib/firebase';

interface OwnerMetricsDashboardProps {
  adminToken: string | null;
  lang?: AppLanguage;
  onSetAdminToken: (token: string | null) => void;
  onClose: () => void;
}

interface AdminStatusResponse {
  configured: boolean;
  claimed: boolean;
  authenticated: boolean;
}

interface DailySeriesPoint {
  date: string;
  pageViews: number;
  uniqueVisitors: number;
  completedPlayers: number;
  avgScore: number;
  guesses: number;
  solvedRounds: number;
  hintsUsed: number;
  sharesOpened: number;
}

interface InventionStatPoint {
  id: string;
  guesses: number;
  solved: number;
  failed: number;
  hints: number;
  solveRate: number | null;
}

interface AdminMetricsResponse {
  generatedAt: string;
  today: string;
  authMode: 'env' | 'claimed' | 'google';
  summary: {
    totalPageViews: number;
    todayPageViews: number;
    totalUniqueVisitors: number;
    todayUniqueVisitors: number;
    totalCompletedDays: number;
    todayCompletedDays: number;
    avgDailyScore: number;
    avgSolvedPerDay: number;
    completionRatePercent: number;
    totalGuesses: number;
    totalSolvedRounds: number;
    totalFailedRounds: number;
    totalHintsUsed: number;
    totalSharesOpened: number;
    totalSharesDownloaded: number;
    totalHubOpens: number;
  };
  devices: {
    mobile: number;
    desktop: number;
  };
  themes: {
    light: number;
    dark: number;
  };
  dailySeries: DailySeriesPoint[];
  topInventions: InventionStatPoint[];
}

function formatCompactDay(dateStr: string, lang: AppLanguage): string {
  const parts = dateStr.split('-').map(Number);
  if (parts.length !== 3) return dateStr;
  if (lang === 'en') {
    return `${String(parts[1]).padStart(2, '0')}/${String(parts[2]).padStart(2, '0')}`;
  }
  return `${String(parts[2]).padStart(2, '0')}.${String(parts[1]).padStart(2, '0')}.`;
}

export const OwnerMetricsDashboard: React.FC<OwnerMetricsDashboardProps> = ({
  adminToken,
  lang = 'de',
  onSetAdminToken,
  onClose,
}) => {
  const isEn = lang === 'en';
  const [status, setStatus] = useState<AdminStatusResponse | null>(null);
  const [statusLoading, setStatusLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSubmitting, setAuthSubmitting] = useState(false);

  const [metrics, setMetrics] = useState<AdminMetricsResponse | null>(null);
  const [metricsLoading, setMetricsLoading] = useState(false);
  const [metricsError, setMetricsError] = useState<string | null>(null);

  const inventionNameMap = useMemo(
    () => new Map(FULL_INVENTIONS.map((inv) => [inv.id, getLocalizedInvention(inv, lang).name])),
    [lang]
  );

  const loadStatus = useCallback(async () => {
    setStatusLoading(true);
    try {
      const headers: Record<string, string> = {};
      if (adminToken) {
        headers.Authorization = `Bearer ${adminToken}`;
      }
      const res = await fetch('/api/admin/status', { headers });
      if (res.ok) {
        const data = (await res.json()) as AdminStatusResponse;
        setStatus(data);
        if (adminToken && !data.authenticated) {
          onSetAdminToken(null);
        }
      }
    } catch {
      setAuthError(isEn ? 'Failed to connect to server.' : 'Verbindung zum Server fehlgeschlagen.');
    } finally {
      setStatusLoading(false);
    }
  }, [adminToken, isEn, onSetAdminToken]);

  const loadMetrics = useCallback(
    async (tokenToUse: string) => {
      setMetricsLoading(true);
      setMetricsError(null);
      try {
        const res = await fetch('/api/admin/metrics', {
          headers: { Authorization: `Bearer ${tokenToUse}` },
        });
        if (res.status === 401 || res.status === 403) {
          const errBody = (await res.json().catch(() => ({}))) as { error?: string };
          onSetAdminToken(null);
          setMetrics(null);
          setAuthError(
            errBody.error ||
              (res.status === 403
                ? isEn
                  ? 'This Google account is not authorized as owner.'
                  : 'Dieses Google-Konto ist nicht als Inhaber autorisiert.'
                : isEn
                ? 'Session expired. Please sign in again.'
                : 'Sitzung abgelaufen. Bitte erneut anmelden.')
          );
          return;
        }
        if (!res.ok) {
          throw new Error('HTTP error');
        }
        const data = (await res.json()) as AdminMetricsResponse;
        setMetrics(data);
      } catch {
        setMetricsError(isEn ? 'Failed to load metrics.' : 'Metriken konnten nicht geladen werden.');
      } finally {
        setMetricsLoading(false);
      }
    },
    [isEn, onSetAdminToken]
  );

  useEffect(() => {
    loadStatus();
  }, [loadStatus]);

  useEffect(() => {
    if (adminToken) {
      loadMetrics(adminToken);
    }
  }, [adminToken, loadMetrics]);

  const isFirstRunSetup = Boolean(status && !status.configured && !status.claimed);

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    if (isFirstRunSetup) {
      if (password.length < 6) {
        setAuthError(
          isEn
            ? 'Please choose a password with at least 6 characters.'
            : 'Bitte wähle ein Passwort mit mindestens 6 Zeichen.'
        );
        return;
      }
      if (password !== confirmPassword) {
        setAuthError(
          isEn ? 'The two passwords do not match.' : 'Die beiden Passwörter stimmen nicht überein.'
        );
        return;
      }
    } else if (!password) {
      setAuthError(isEn ? 'Please enter your password.' : 'Bitte Passwort eingeben.');
      return;
    }

    setAuthSubmitting(true);
    try {
      const endpoint = isFirstRunSetup ? '/api/admin/claim' : '/api/admin/login';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = (await res.json().catch(() => ({}))) as { token?: string; error?: string };
      if (!res.ok || !data.token) {
        setAuthError(data.error || (isEn ? 'Sign-in failed.' : 'Anmeldung fehlgeschlagen.'));
        return;
      }
      setPassword('');
      setConfirmPassword('');
      onSetAdminToken(data.token);
      await loadStatus();
    } catch {
      setAuthError(isEn ? 'Server unreachable.' : 'Server nicht erreichbar.');
    } finally {
      setAuthSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setAuthError(null);
    setAuthSubmitting(true);
    try {
      const cred = await signInWithPopup(auth, googleAuthProvider);
      const idToken = await cred.user.getIdToken();
      onSetAdminToken(idToken);
      await loadStatus();
    } catch {
      setAuthError(
        isEn
          ? 'Google sign-in was cancelled or failed.'
          : 'Google-Anmeldung wurde abgebrochen oder ist fehlgeschlagen.'
      );
    } finally {
      setAuthSubmitting(false);
    }
  };

  const handleLogout = async () => {
    if (adminToken) {
      fetch('/api/admin/logout', {
        method: 'POST',
        headers: { Authorization: `Bearer ${adminToken}` },
      }).catch(() => {});
    }
    signOut(auth).catch(() => {});
    onSetAdminToken(null);
    setMetrics(null);
    await loadStatus();
  };

  const maxDailyPageViews = useMemo(() => {
    if (!metrics) return 1;
    return Math.max(1, ...metrics.dailySeries.map((d) => d.pageViews));
  }, [metrics]);

  const totalDevices = metrics ? metrics.devices.mobile + metrics.devices.desktop : 0;
  const mobilePct =
    totalDevices > 0 && metrics ? Math.round((metrics.devices.mobile / totalDevices) * 100) : 0;
  const desktopPct = totalDevices > 0 ? 100 - mobilePct : 0;

  const totalThemes = metrics ? metrics.themes.light + metrics.themes.dark : 0;
  const darkPct =
    totalThemes > 0 && metrics ? Math.round((metrics.themes.dark / totalThemes) * 100) : 0;
  const lightPct = totalThemes > 0 ? 100 - darkPct : 0;

  // Unauthenticated view (First-run Claim or Login)
  if (!adminToken) {
    return (
      <section className="mx-auto max-w-[460px] space-y-4">
        <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-5 sm:p-6 shadow-2xs">
          <div className="flex items-center justify-between gap-2 border-b border-[#EFECE4] dark:border-[#262B35] pb-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFFBEB] dark:bg-[#2A2215] text-[#B45309] dark:text-[#FBBF24] border border-[#F59E0B]/30">
                {isFirstRunSetup ? <KeyRound className="h-4.5 w-4.5" /> : <Lock className="h-4.5 w-4.5" />}
              </span>
              <div>
                <h2 className="font-display text-lg font-bold text-[#16191D] dark:text-[#F8FAFC]">
                  {isFirstRunSetup
                    ? isEn
                      ? 'Set Personal Password'
                      : 'Persönliches Passwort einrichten'
                    : isEn
                    ? 'Private Metrics'
                    : 'Persönliche Metriken'}
                </h2>
                <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                  {isEn ? 'Visible only to you as owner' : 'Nur für dich als Inhaber sichtbar'}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 items-center gap-1 rounded-lg border border-[#E6E2DA] dark:border-[#2C323E] px-2.5 text-xs font-medium text-[#474D54] dark:text-[#CBD5E1] hover:bg-[#F7F5F0] dark:hover:bg-[#232832]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {isEn ? 'Back' : 'Zurück'}
            </button>
          </div>

          {statusLoading ? (
            <div className="py-10 text-center text-xs text-[#6B7280] dark:text-[#9CA3AF]">
              {isEn ? 'Checking status…' : 'Status wird geprüft…'}
            </div>
          ) : (
            <div className="mt-4 space-y-3.5">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={authSubmitting}
                className="flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#E6E2DA] dark:border-[#2C323E] bg-[#FAF9F6] dark:bg-[#111317] px-4 text-sm font-semibold text-[#16191D] dark:text-[#F8FAFC] transition-colors hover:bg-[#EFECE4] dark:hover:bg-[#232832] disabled:opacity-60"
              >
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#EA4335"
                    d="M12 10.2v3.9h5.5c-.2 1.3-1.5 3.9-5.5 3.9-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.9 1.5l2.6-2.5C16.8 3.4 14.6 2.5 12 2.5 6.8 2.5 2.5 6.8 2.5 12s4.3 9.5 9.5 9.5c5.5 0 9.1-3.8 9.1-9.2 0-.6-.1-1.1-.2-1.6H12z"
                  />
                </svg>
                {isEn ? 'Sign in with Google' : 'Mit Google anmelden'}
              </button>

              <div className="flex items-center gap-2 text-[11px] text-[#94A3B8]">
                <span className="h-px flex-1 bg-[#EFECE4] dark:bg-[#262B35]" />
                <span>{isEn ? 'or password' : 'oder mit Passwort'}</span>
                <span className="h-px flex-1 bg-[#EFECE4] dark:bg-[#262B35]" />
              </div>

              <form onSubmit={handleAuthSubmit} className="space-y-3.5">
              {isFirstRunSetup ? (
                <div className="rounded-xl border border-[#F59E0B]/30 bg-[#FFFBEB] dark:bg-[#2A2215] p-3 text-xs leading-relaxed text-[#78350F] dark:text-[#FDE68A]">
                  {isEn ? (
                    <>
                      <strong>First-time setup:</strong> Choose your personal owner password once
                      (min. 6 characters) to protect your traffic and game metrics. Alternatively,
                      you can configure <code>ADMIN_PASSCODE</code> in Secrets.
                    </>
                  ) : (
                    <>
                      <strong>Ersteinrichtung:</strong> Lege einmalig dein persönliches Passwort fest
                      (mind. 6 Zeichen). Danach sind deine Aufruf- &amp; Spielmetriken geschützt.
                      Alternativ kannst du auch <code>ADMIN_PASSCODE</code> in den Secrets hinterlegen.
                    </>
                  )}
                </div>
              ) : (
                <p className="text-xs leading-relaxed text-[#474D54] dark:text-[#CBD5E1]">
                  {isEn
                    ? 'Sign in with your personal password to view page views, unique visitors, solve rates, and daily analytics.'
                    : 'Melde dich mit deinem persönlichen Passwort an, um Seitenaufrufe, eindeutige Besucher, Lösungsquoten und tägliche Statistiken einzusehen.'}
                </p>
              )}

              <div>
                <label className="mb-1 block text-xs font-semibold text-[#16191D] dark:text-[#F1F5F9]">
                  {isEn ? 'Password' : 'Passwort'}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={
                      isFirstRunSetup
                        ? isEn
                          ? 'At least 6 characters'
                          : 'Mindestens 6 Zeichen'
                        : isEn
                        ? 'Your password'
                        : 'Dein Passwort'
                    }
                    autoFocus
                    className="h-10 w-full rounded-xl border border-[#E6E2DA] dark:border-[#2C323E] bg-[#FAF9F6] dark:bg-[#111317] pl-3 pr-10 text-sm text-[#16191D] dark:text-[#F8FAFC] outline-hidden focus:border-[#F59E0B]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword
                        ? isEn
                          ? 'Hide password'
                          : 'Passwort verbergen'
                        : isEn
                        ? 'Show password'
                        : 'Passwort anzeigen'
                    }
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#16191D] dark:hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {isFirstRunSetup && (
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#16191D] dark:text-[#F1F5F9]">
                    {isEn ? 'Confirm password' : 'Passwort bestätigen'}
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder={isEn ? 'Repeat password' : 'Passwort wiederholen'}
                    className="h-10 w-full rounded-xl border border-[#E6E2DA] dark:border-[#2C323E] bg-[#FAF9F6] dark:bg-[#111317] px-3 text-sm text-[#16191D] dark:text-[#F8FAFC] outline-hidden focus:border-[#F59E0B]"
                  />
                </div>
              )}

              {authError && (
                <div className="rounded-xl border border-[#DC2626]/30 bg-[#FEF2F2] dark:bg-[#450A0A]/40 px-3 py-2 text-xs font-medium text-[#B91C1C] dark:text-[#FCA5A5]">
                  {authError}
                </div>
              )}

              <button
                type="submit"
                disabled={authSubmitting}
                className="flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#F7A94B] px-4 text-sm font-semibold text-[#16191D] transition-colors hover:bg-[#F59E0B] disabled:opacity-60"
              >
                <ShieldCheck className="h-4 w-4" />
                {authSubmitting
                  ? isEn
                    ? 'Verifying…'
                    : 'Wird geprüft…'
                  : isFirstRunSetup
                  ? isEn
                    ? 'Save password & open'
                    : 'Passwort speichern & öffnen'
                  : isEn
                  ? 'Open dashboard'
                  : 'Dashboard öffnen'}
              </button>
              </form>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[780px] space-y-4">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] px-4 py-3.5 shadow-2xs">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFFBEB] dark:bg-[#2A2215] text-[#B45309] dark:text-[#FBBF24] border border-[#F59E0B]/30">
            <BarChart3 className="h-4.5 w-4.5" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display text-lg font-bold text-[#16191D] dark:text-[#F8FAFC]">
                {isEn ? 'Personal Metrics Dashboard' : 'Persönliches Metrik-Dashboard'}
              </h2>
              <span className="rounded-md bg-[#F0FDF4] dark:bg-[#052E16]/60 px-1.5 py-0.5 text-[10px] font-semibold text-[#15803D] dark:text-[#4ADE80]">
                {isEn ? 'Private' : 'Privat'}
              </span>
            </div>
            <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
              {isEn ? 'Real views & gameplay activity · Updated:' : 'Echte Aufrufe & Spielaktivität · Stand:'}{' '}
              {metrics
                ? new Intl.DateTimeFormat(isEn ? 'en-US' : 'de-DE', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                  }).format(new Date(metrics.generatedAt))
                : '–'}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => loadMetrics(adminToken)}
            disabled={metricsLoading}
            className="flex h-8 items-center gap-1.5 rounded-lg border border-[#E6E2DA] dark:border-[#2C323E] bg-[#FAF9F6] dark:bg-[#111317] px-2.5 text-xs font-medium text-[#16191D] dark:text-[#E2E8F0] hover:bg-[#EFECE4] dark:hover:bg-[#232832] disabled:opacity-50"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${metricsLoading ? 'animate-spin' : ''}`} />
            {isEn ? 'Refresh' : 'Aktualisieren'}
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="flex h-8 items-center gap-1.5 rounded-lg border border-[#E6E2DA] dark:border-[#2C323E] bg-white dark:bg-[#191D24] px-2.5 text-xs font-medium text-[#474D54] dark:text-[#CBD5E1] hover:bg-[#FAF9F6] dark:hover:bg-[#232832]"
          >
            <LogOut className="h-3.5 w-3.5" />
            {isEn ? 'Lock' : 'Sperren'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 items-center gap-1.5 rounded-lg bg-[#F7A94B] px-3 text-xs font-semibold text-[#16191D] hover:bg-[#F59E0B]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {isEn ? 'Back to game' : 'Zurück zum Spiel'}
          </button>
        </div>
      </div>

      {metricsError && (
        <div className="rounded-xl border border-[#DC2626]/30 bg-[#FEF2F2] dark:bg-[#450A0A]/40 px-4 py-3 text-xs font-medium text-[#B91C1C] dark:text-[#FCA5A5]">
          {metricsError}
        </div>
      )}

      {!metrics ? (
        <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-10 text-center text-xs text-[#6B7280] dark:text-[#9CA3AF]">
          {isEn ? 'Loading metrics…' : 'Metriken werden geladen…'}
        </div>
      ) : (
        <>
          {/* 4 Hero KPIs */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-4 shadow-2xs">
              <div className="flex items-center justify-between text-[11px] font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                <span>{isEn ? 'Page Views' : 'Seitenaufrufe'}</span>
                <Eye className="h-3.5 w-3.5 text-[#F59E0B]" />
              </div>
              <div className="mt-1.5 font-mono-tabular text-2xl font-extrabold text-[#16191D] dark:text-[#F8FAFC]">
                {formatNumberLocale(metrics.summary.totalPageViews, lang)}
              </div>
              <div className="mt-0.5 text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
                {isEn ? 'Today:' : 'Heute:'}{' '}
                <strong className="text-[#16191D] dark:text-[#E2E8F0]">
                  {metrics.summary.todayPageViews}
                </strong>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-4 shadow-2xs">
              <div className="flex items-center justify-between text-[11px] font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                <span>{isEn ? 'Unique Visitors' : 'Besucher (eindeutig)'}</span>
                <Users className="h-3.5 w-3.5 text-[#3B82F6]" />
              </div>
              <div className="mt-1.5 font-mono-tabular text-2xl font-extrabold text-[#16191D] dark:text-[#F8FAFC]">
                {formatNumberLocale(metrics.summary.totalUniqueVisitors, lang)}
              </div>
              <div className="mt-0.5 text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
                {isEn ? 'Today:' : 'Heute:'}{' '}
                <strong className="text-[#16191D] dark:text-[#E2E8F0]">
                  {metrics.summary.todayUniqueVisitors}
                </strong>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-4 shadow-2xs">
              <div className="flex items-center justify-between text-[11px] font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                <span>{isEn ? 'Completed Days' : 'Tagesabschlüsse'}</span>
                <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A]" />
              </div>
              <div className="mt-1.5 font-mono-tabular text-2xl font-extrabold text-[#16191D] dark:text-[#F8FAFC]">
                {formatNumberLocale(metrics.summary.totalCompletedDays, lang)}
              </div>
              <div className="mt-0.5 text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
                {isEn ? 'Rate:' : 'Quote:'}{' '}
                <strong className="text-[#16191D] dark:text-[#E2E8F0]">
                  {metrics.summary.completionRatePercent}%
                </strong>{' '}
                · {isEn ? 'Today' : 'Heute'} {metrics.summary.todayCompletedDays}
              </div>
            </div>

            <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-4 shadow-2xs">
              <div className="flex items-center justify-between text-[11px] font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                <span>{isEn ? 'Avg Daily Score' : 'Ø Tagespunkte'}</span>
                <Sparkles className="h-3.5 w-3.5 text-[#F59E0B]" />
              </div>
              <div className="mt-1.5 font-mono-tabular text-2xl font-extrabold text-[#16191D] dark:text-[#F8FAFC]">
                {formatNumberLocale(metrics.summary.avgDailyScore, lang)}
              </div>
              <div className="mt-0.5 text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
                {isEn ? 'Avg' : 'Ø'}{' '}
                <strong className="text-[#16191D] dark:text-[#E2E8F0]">
                  {metrics.summary.avgSolvedPerDay}
                </strong>{' '}
                / 5 {isEn ? 'solved' : 'gelöst'}
              </div>
            </div>
          </div>

          {/* 14-Day Activity Chart */}
          <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-4 sm:p-5 shadow-2xs">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-[#16191D] dark:text-[#F1F5F9]">
                  {isEn ? 'Last 14 Days Activity' : 'Verlauf der letzten 14 Tage'}
                </h3>
                <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
                  {isEn
                    ? 'Page views (amber) and completed daily games (green)'
                    : 'Seitenaufrufe (Bernstein) und abgeschlossene Tagesrunden (Grün)'}
                </p>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-xs bg-[#F7A94B]" />
                  {isEn ? 'Views' : 'Aufrufe'}
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-xs bg-[#16A34A]" />
                  {isEn ? 'Completions' : 'Abschlüsse'}
                </span>
              </div>
            </div>

            <div
              style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }}
              className="grid items-end gap-1.5 h-32 pt-4 pb-1 border-b border-[#EFECE4] dark:border-[#262B35]"
            >
              {metrics.dailySeries.map((day) => {
                const viewHeight =
                  day.pageViews > 0 ? Math.max(8, Math.round((day.pageViews / maxDailyPageViews) * 96)) : 3;
                const compHeight =
                  day.completedPlayers > 0
                    ? Math.max(8, Math.round((day.completedPlayers / maxDailyPageViews) * 96))
                    : 0;
                return (
                  <div
                    key={day.date}
                    className="group relative flex h-full flex-col items-center justify-end"
                    title={
                      isEn
                        ? `${formatCompactDay(day.date, lang)}: ${day.pageViews} views, ${day.uniqueVisitors} visitors, ${day.completedPlayers} completions`
                        : `${formatCompactDay(day.date, lang)}: ${day.pageViews} Aufrufe, ${day.uniqueVisitors} Besucher, ${day.completedPlayers} Abschlüsse`
                    }
                  >
                    <div className="flex items-end gap-0.5">
                      <div
                        style={{ height: `${viewHeight}px` }}
                        className="w-2 sm:w-2.5 rounded-t-xs bg-[#F7A94B] transition-all"
                      />
                      {compHeight > 0 && (
                        <div
                          style={{ height: `${compHeight}px` }}
                          className="w-1.5 sm:w-2 rounded-t-xs bg-[#16A34A] transition-all"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }}
              className="mt-1.5 grid gap-1 text-center font-mono-tabular text-[9px] text-[#6B7280] dark:text-[#9CA3AF]"
            >
              {metrics.dailySeries.map((day, idx) => (
                <span key={day.date} className={idx % 2 === 1 && idx !== 13 ? 'hidden sm:inline' : ''}>
                  {formatCompactDay(day.date, lang).slice(0, 5)}
                </span>
              ))}
            </div>
          </div>

          {/* Interactions + Device/Theme Splits */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-4 shadow-2xs space-y-3">
              <h3 className="text-sm font-semibold text-[#16191D] dark:text-[#F1F5F9]">
                {isEn ? 'Gameplay Interactions' : 'Spiel-Interaktionen'}
              </h3>
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="rounded-xl bg-[#FAF9F6] dark:bg-[#111317] p-3 border border-[#EFECE4] dark:border-[#262B35]">
                  <div className="text-[#6B7280] dark:text-[#9CA3AF]">
                    {isEn ? 'Total Guesses' : 'Abgegebene Tipps'}
                  </div>
                  <div className="mt-0.5 font-mono-tabular text-lg font-bold text-[#16191D] dark:text-[#F8FAFC]">
                    {formatNumberLocale(metrics.summary.totalGuesses, lang)}
                  </div>
                </div>
                <div className="rounded-xl bg-[#FAF9F6] dark:bg-[#111317] p-3 border border-[#EFECE4] dark:border-[#262B35]">
                  <div className="text-[#6B7280] dark:text-[#9CA3AF]">
                    {isEn ? 'Solved / Unsolved' : 'Runden gelöst / offen'}
                  </div>
                  <div className="mt-0.5 font-mono-tabular text-lg font-bold text-[#16191D] dark:text-[#F8FAFC]">
                    <span className="text-[#15803D] dark:text-[#4ADE80]">{metrics.summary.totalSolvedRounds}</span>
                    {' / '}
                    <span className="text-[#B91C1C] dark:text-[#F87171]">{metrics.summary.totalFailedRounds}</span>
                  </div>
                </div>
                <div className="rounded-xl bg-[#FAF9F6] dark:bg-[#111317] p-3 border border-[#EFECE4] dark:border-[#262B35]">
                  <div className="text-[#6B7280] dark:text-[#9CA3AF]">
                    {isEn ? 'Hints Used' : 'Hinweise genutzt'}
                  </div>
                  <div className="mt-0.5 font-mono-tabular text-lg font-bold text-[#16191D] dark:text-[#F8FAFC]">
                    {formatNumberLocale(metrics.summary.totalHintsUsed, lang)}
                  </div>
                </div>
                <div className="rounded-xl bg-[#FAF9F6] dark:bg-[#111317] p-3 border border-[#EFECE4] dark:border-[#262B35]">
                  <div className="flex items-center gap-1 text-[#6B7280] dark:text-[#9CA3AF]">
                    <Share2 className="h-3 w-3" />
                    <span>{isEn ? 'Share / Download' : 'Teilen / Download'}</span>
                  </div>
                  <div className="mt-0.5 font-mono-tabular text-lg font-bold text-[#16191D] dark:text-[#F8FAFC]">
                    {metrics.summary.totalSharesOpened} / {metrics.summary.totalSharesDownloaded}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-4 shadow-2xs space-y-4">
              <h3 className="text-sm font-semibold text-[#16191D] dark:text-[#F1F5F9]">
                {isEn ? 'Devices & Appearance' : 'Geräte & Darstellung'}
              </h3>

              {/* Devices */}
              <div>
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-[#474D54] dark:text-[#CBD5E1]">
                    <Smartphone className="h-3.5 w-3.5 text-[#F59E0B]" />
                    {isEn ? 'Mobile' : 'Mobil'} ({mobilePct}%)
                  </span>
                  <span className="flex items-center gap-1.5 text-[#474D54] dark:text-[#CBD5E1]">
                    Desktop ({desktopPct}%)
                    <Monitor className="h-3.5 w-3.5 text-[#3B82F6]" />
                  </span>
                </div>
                <div className="flex h-2.5 overflow-hidden rounded-full bg-[#EDEAE2] dark:bg-[#262B35]">
                  <div
                    style={{ width: `${mobilePct}%` }}
                    className="bg-[#F7A94B] transition-all"
                  />
                  <div
                    style={{ width: `${desktopPct}%` }}
                    className="bg-[#3B82F6] transition-all"
                  />
                </div>
                <div className="mt-1 flex justify-between font-mono-tabular text-[10px] text-[#6B7280] dark:text-[#9CA3AF]">
                  <span>
                    {metrics.devices.mobile} {isEn ? 'views' : 'Aufrufe'}
                  </span>
                  <span>
                    {metrics.devices.desktop} {isEn ? 'views' : 'Aufrufe'}
                  </span>
                </div>
              </div>

              {/* Theme Split */}
              <div>
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="text-[#474D54] dark:text-[#CBD5E1]">
                    {isEn ? 'Light Mode' : 'Hellmodus'} ({lightPct}%)
                  </span>
                  <span className="text-[#474D54] dark:text-[#CBD5E1]">
                    {isEn ? 'Dark Mode' : 'Dunkelmodus'} ({darkPct}%)
                  </span>
                </div>
                <div className="flex h-2.5 overflow-hidden rounded-full bg-[#EDEAE2] dark:bg-[#262B35]">
                  <div
                    style={{ width: `${lightPct}%` }}
                    className="bg-[#FDE68A] transition-all"
                  />
                  <div
                    style={{ width: `${darkPct}%` }}
                    className="bg-[#475569] transition-all"
                  />
                </div>
                <div className="mt-1 flex justify-between font-mono-tabular text-[10px] text-[#6B7280] dark:text-[#9CA3AF]">
                  <span>
                    {metrics.themes.light} {isEn ? 'views' : 'Aufrufe'}
                  </span>
                  <span>
                    {metrics.themes.dark} {isEn ? 'views' : 'Aufrufe'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Per-Invention Performance */}
          <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-4 shadow-2xs">
            <h3 className="mb-2.5 text-sm font-semibold text-[#16191D] dark:text-[#F1F5F9]">
              {isEn ? 'Most Played Inventions' : 'Meistgespielte Erfindungen'}
            </h3>
            {metrics.topInventions.length === 0 ? (
              <p className="py-4 text-center text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                {isEn
                  ? 'No round activity recorded yet.'
                  : 'Noch keine Runden-Aktivität aufgezeichnet.'}
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#EFECE4] dark:border-[#262B35] text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
                      <th className="py-2 pr-3 font-medium">{isEn ? 'Invention' : 'Erfindung'}</th>
                      <th className="px-2 py-2 text-right font-medium">{isEn ? 'Guesses' : 'Versuche'}</th>
                      <th className="px-2 py-2 text-right font-medium">{isEn ? 'Solved' : 'Gelöst'}</th>
                      <th className="px-2 py-2 text-right font-medium">{isEn ? 'Rate' : 'Quote'}</th>
                      <th className="pl-2 py-2 text-right font-medium">{isEn ? 'Hints' : 'Tipps'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFECE4] dark:divide-[#262B35]">
                    {metrics.topInventions.map((item) => (
                      <tr key={item.id}>
                        <td className="py-2 pr-3 font-medium text-[#16191D] dark:text-[#F1F5F9]">
                          {inventionNameMap.get(item.id) || item.id}
                        </td>
                        <td className="px-2 py-2 text-right font-mono-tabular text-[#474D54] dark:text-[#CBD5E1]">
                          {item.guesses}
                        </td>
                        <td className="px-2 py-2 text-right font-mono-tabular text-[#15803D] dark:text-[#4ADE80]">
                          {item.solved}
                        </td>
                        <td className="px-2 py-2 text-right font-mono-tabular font-semibold text-[#16191D] dark:text-[#F8FAFC]">
                          {item.solveRate !== null ? `${item.solveRate}%` : '–'}
                        </td>
                        <td className="pl-2 py-2 text-right font-mono-tabular text-[#6B7280] dark:text-[#9CA3AF]">
                          {item.hints}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};
