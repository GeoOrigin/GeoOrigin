import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeftRight,
  ArrowRight,
  ArrowUp,
  BarChart3,
  Calendar,
  CheckCircle2,
  Compass,
  Flame,
  Globe2,
  HelpCircle,
  Languages,
  Lightbulb,
  Lock,
  MapPin,
  Moon,
  Share2,
  ShieldCheck,
  Sun,
  Trophy,
  X,
  XCircle,
} from 'lucide-react';
import {
  bearingCardinalDe,
  bearingDegrees,
  COUNTRY_BY_ID,
  Country,
  getCountryName,
  getDistanceHeatColor,
  getDistanceQualityLabel,
  getRegionLabel,
  haversineDistanceKm,
} from './data/countries';
import {
  calculateRoundScore,
  getCategoryLabel,
  getDailyInventions,
  getDifficultyLabel,
  getEffectiveMaxPoints,
  getInventionHint,
  getLocalizedInvention,
  Invention,
  PINNED_SHOWCASE_DATE,
} from './data/inventions';
import {
  AppLanguage,
  formatNumberLocale,
  formatShortDateLocale,
  getBrandName,
} from './i18n/translations';
import { InventionArtwork } from './components/InventionArtwork';
import { GuessRecord, WorldMap } from './components/WorldMap';
import { CountrySearchInput } from './components/CountrySearchInput';
import { NormalDistributionChart, ScoreBin } from './components/NormalDistributionChart';
import { StreakWidget } from './components/StreakWidget';
import { ShareResultModal } from './components/ShareResultModal';
import { SiteQrCodeCard } from './components/SiteQrCodeCard';
import { ConfettiOverlay } from './components/ConfettiOverlay';
import { NextPuzzleHub } from './components/NextPuzzleHub';
import { OwnerMetricsDashboard } from './components/OwnerMetricsDashboard';
import { DuelComparisonCard } from './components/DuelComparisonCard';
import { PWAInstallButton } from './components/PWAInstallButton';
import { OfflineIndicator } from './components/OfflineIndicator';
import { PrivacyInfoModal } from './components/PrivacyInfoModal';
import {
  clearActiveDuel,
  decodeDuelToken,
  DuelChallenge,
  loadActiveDuel,
  saveActiveDuel,
} from './utils/duel';

const MAX_ATTEMPTS = 7;
const STORAGE_DAY_PREFIX = 'erfunden_wo_day_v1_';
const STORAGE_STREAK_KEY = 'erfunden_wo_streak_v1';
const STORAGE_THEME_KEY = 'erfunden_wo_theme_v1';
const STORAGE_LANG_KEY = 'erfunden_wo_lang_v1';
const STORAGE_PLAYER_ID_KEY = 'erfunden_wo_player_id_v1';

type TrackEventName =
  | 'page_view'
  | 'round_guess'
  | 'round_solved'
  | 'round_failed'
  | 'hint_used'
  | 'share_opened'
  | 'share_downloaded'
  | 'hub_opened';

interface DayStatsResponse {
  date: string;
  myScore: number;
  rank: number;
  totalPlayers: number;
  betterThanPercent: number;
  worseThanPercent: number;
  mean: number;
  stdDev: number;
  bins: ScoreBin[];
}

interface StoredRoundState {
  guessIds: string[];
  status: 'playing' | 'solved' | 'failed';
  score: number;
  hintUsed?: boolean;
}

interface StoredDayState {
  date: string;
  activeRoundIndex: number;
  rounds: Record<string, StoredRoundState>;
}

function getOrCreatePlayerId(): string {
  try {
    const existing = localStorage.getItem(STORAGE_PLAYER_ID_KEY);
    if (existing && existing.trim().length > 0) return existing;
    const created =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : `sp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem(STORAGE_PLAYER_ID_KEY, created);
    return created;
  } catch {
    return `sp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  }
}

function getFallbackBerlinDate(): string {
  try {
    return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Berlin' }).format(new Date());
  } catch {
    return PINNED_SHOWCASE_DATE;
  }
}

function shiftDate(dateStr: string, deltaDays: number): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + deltaDays));
  return dt.toISOString().slice(0, 10);
}

function loadSavedLanguage(): AppLanguage {
  try {
    const saved = localStorage.getItem(STORAGE_LANG_KEY);
    if (saved === 'en' || saved === 'de') return saved;
  } catch {
    // ignore storage errors
  }
  return 'de';
}

function isRoundCompleted(round?: StoredRoundState): boolean {
  return Boolean(round && (round.status === 'solved' || round.status === 'failed'));
}

function isStoredDayCompleted(dateStr: string, day: StoredDayState, inventions: Invention[]): boolean {
  if (!day || day.date !== dateStr || !day.rounds) return false;
  return inventions.every((inv) => isRoundCompleted(day.rounds[inv.id]));
}

function loadPlayedDates(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_STREAK_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function reconcilePlayedDates(todayStr: string): string[] {
  const existing = loadPlayedDates();
  const valid = existing.filter((d) => {
    try {
      const raw = localStorage.getItem(`${STORAGE_DAY_PREFIX}${d}`);
      if (!raw) {
        return d !== todayStr;
      }
      const parsed = JSON.parse(raw) as StoredDayState;
      const dayInventions = getDailyInventions(d);
      return isStoredDayCompleted(d, parsed, dayInventions);
    } catch {
      return d !== todayStr;
    }
  });

  if (valid.length !== existing.length) {
    try {
      localStorage.setItem(STORAGE_STREAK_KEY, JSON.stringify(valid));
    } catch {
      // ignore storage quota errors
    }
  }
  return valid;
}

function savePlayedDate(dateStr: string): string[] {
  const existing = loadPlayedDates();
  if (!existing.includes(dateStr)) {
    const updated = [...existing, dateStr].sort();
    try {
      localStorage.setItem(STORAGE_STREAK_KEY, JSON.stringify(updated));
    } catch {
      // ignore storage quota errors
    }
    return updated;
  }
  return existing;
}

function loadDayState(dateStr: string, inventions: Invention[]): StoredDayState {
  try {
    const raw = localStorage.getItem(`${STORAGE_DAY_PREFIX}${dateStr}`);
    if (raw) {
      const parsed = JSON.parse(raw) as StoredDayState;
      if (parsed && parsed.date === dateStr && parsed.rounds) {
        const normalizedRounds: Record<string, StoredRoundState> = {};
        for (const inv of inventions) {
          normalizedRounds[inv.id] = parsed.rounds[inv.id] || {
            guessIds: [],
            status: 'playing',
            score: 0,
          };
        }
        const firstUnfinished = inventions.findIndex(
          (inv) => !isRoundCompleted(normalizedRounds[inv.id])
        );
        const maxAllowedIdx = firstUnfinished === -1 ? inventions.length - 1 : firstUnfinished;
        const clampedIdx = Math.min(
          Math.max(0, Number(parsed.activeRoundIndex) || 0),
          maxAllowedIdx
        );
        return {
          date: dateStr,
          activeRoundIndex: clampedIdx,
          rounds: normalizedRounds,
        };
      }
    }
  } catch {
    // fallback to fresh state
  }

  const rounds: Record<string, StoredRoundState> = {};
  for (const inv of inventions) {
    rounds[inv.id] = { guessIds: [], status: 'playing', score: 0 };
  }
  return {
    date: dateStr,
    activeRoundIndex: 0,
    rounds,
  };
}

function readInitialDuelParam(): DuelChallenge | null {
  if (typeof window === 'undefined') return null;
  try {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('duel');
    if (!token) return null;
    return decodeDuelToken(token);
  } catch {
    return null;
  }
}

export default function App() {
  const initialUrlDuelRef = useRef<DuelChallenge | null>(readInitialDuelParam());
  const initialDate = initialUrlDuelRef.current?.date || getFallbackBerlinDate();

  const [playerId] = useState<string>(getOrCreatePlayerId);
  const [lang, setLang] = useState<AppLanguage>(loadSavedLanguage);
  const [todayDate, setTodayDate] = useState<string>(getFallbackBerlinDate);
  const [activeDate, setActiveDate] = useState<string>(initialDate);
  const [activeDuel, setActiveDuel] = useState<DuelChallenge | null>(() => {
    const fromUrl = initialUrlDuelRef.current;
    if (fromUrl) {
      saveActiveDuel(fromUrl);
      return fromUrl;
    }
    return loadActiveDuel(initialDate);
  });
  const [playedDates, setPlayedDates] = useState<string[]>(() =>
    reconcilePlayedDates(getFallbackBerlinDate())
  );
  const [pendingMapCountry, setPendingMapCountry] = useState<Country | null>(null);
  const [stagedMapCountry, setStagedMapCountry] = useState<Country | null>(null);
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [confettiBurstId, setConfettiBurstId] = useState(0);
  const [dayStats, setDayStats] = useState<DayStatsResponse | null>(null);
  const [statsLoading, setStatsLoading] = useState(false);
  const [adminToken, setAdminToken] = useState<string | null>(null);
  const [showMetricsDashboard, setShowMetricsDashboard] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.location.hash === '#metrics' || window.location.hash === '#admin';
  });
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) {
      return 'dark';
    }
    return 'light';
  });

  const isEn = lang === 'en';
  const brandName = getBrandName(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === 'en'
        ? 'GeoOrigin — Daily Geo Trivia & Invention Origin Quiz'
        : 'GeoOrigin — Tägliches Geo-Trivia & Erfindungen-Quiz';
    try {
      localStorage.setItem(STORAGE_LANG_KEY, lang);
    } catch {
      // ignore storage errors
    }
  }, [lang]);

  useEffect(() => {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem(STORAGE_THEME_KEY, theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  // Lock background page scrolling whenever a modal overlay is open & support Escape close
  useEffect(() => {
    if (!showRulesModal && !showShareModal && !showPrivacyModal) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowRulesModal(false);
        setShowShareModal(false);
        setShowPrivacyModal(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [showRulesModal, showShareModal, showPrivacyModal]);

  // Listen to #metrics / #admin hash navigation
  useEffect(() => {
    const onHashChange = () => {
      const h = window.location.hash;
      if (h === '#metrics' || h === '#admin') {
        setShowMetricsDashboard(true);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLang = () => {
    setLang((prev) => (prev === 'de' ? 'en' : 'de'));
  };

  const openMetricsDashboard = () => {
    setShowMetricsDashboard(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeMetricsDashboard = () => {
    setShowMetricsDashboard(false);
    if (
      typeof window !== 'undefined' &&
      (window.location.hash === '#metrics' || window.location.hash === '#admin')
    ) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  const inventions = useMemo(() => getDailyInventions(activeDate), [activeDate]);

  const [dayState, setDayState] = useState<StoredDayState>(() =>
    loadDayState(activeDate, inventions)
  );

  const allRoundsFinished = useMemo(
    () =>
      dayState.date === activeDate &&
      inventions.every((inv) => isRoundCompleted(dayState.rounds[inv.id])),
    [dayState.date, dayState.rounds, activeDate, inventions]
  );

  const highestUnlockedIndex = useMemo(() => {
    if (dayState.date !== activeDate) return 0;
    const firstUnfinished = inventions.findIndex(
      (inv) => !isRoundCompleted(dayState.rounds[inv.id])
    );
    return firstUnfinished === -1 ? inventions.length - 1 : firstUnfinished;
  }, [dayState.date, dayState.rounds, activeDate, inventions]);

  const safeActiveRoundIndex =
    dayState.date === activeDate
      ? Math.min(Math.max(0, dayState.activeRoundIndex), highestUnlockedIndex)
      : 0;

  const [viewMode, setViewMode] = useState<'play' | 'overview' | 'hub'>(() =>
    allRoundsFinished ? 'overview' : 'play'
  );

  // Clean ?duel=... query parameter after persisting incoming challenge to localStorage
  useEffect(() => {
    if (typeof window === 'undefined' || !initialUrlDuelRef.current) return;
    const url = new URL(window.location.href);
    if (url.searchParams.has('duel')) {
      url.searchParams.delete('duel');
      window.history.replaceState(null, '', url.pathname + url.search + url.hash);
    }
  }, []);

  // Sync server today date once on load (preserving activeDate if user launched from a duel link for another day)
  useEffect(() => {
    let mounted = true;
    fetch('/api/today')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (mounted && data?.today && typeof data.today === 'string') {
          setTodayDate(data.today);
          if (!initialUrlDuelRef.current) {
            setActiveDate(data.today);
          }
          setPlayedDates(reconcilePlayedDates(data.today));
        }
      })
      .catch(() => {
        // offline/local fallback works seamlessly
      });
    return () => {
      mounted = false;
    };
  }, []);

  // Reload state when activeDate changes
  useEffect(() => {
    const loaded = loadDayState(activeDate, inventions);
    setDayState(loaded);
    setPendingMapCountry(null);
    setStagedMapCountry(null);
    setDayStats(null);
    setActiveDuel(loadActiveDuel(activeDate));
    const done = isStoredDayCompleted(activeDate, loaded, inventions);
    setViewMode(done ? 'overview' : 'play');
  }, [activeDate, inventions]);

  // Persist dayState to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_DAY_PREFIX}${dayState.date}`, JSON.stringify(dayState));
    } catch {
      // ignore storage errors
    }
  }, [dayState]);

  const trackMetricEvent = useCallback(
    (event: TrackEventName, inventionId?: string) => {
      try {
        const device = typeof window !== 'undefined' && window.innerWidth < 768 ? 'mobile' : 'desktop';
        fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event,
            date: activeDate,
            visitorId: playerId,
            inventionId,
            device,
            theme,
          }),
          keepalive: true,
        }).catch(() => {});
      } catch {
        // non-blocking analytics
      }
    },
    [activeDate, playerId, theme]
  );

  const hasTrackedPageViewRef = useRef(false);
  useEffect(() => {
    if (hasTrackedPageViewRef.current) return;
    hasTrackedPageViewRef.current = true;
    trackMetricEvent('page_view');
  }, [trackMetricEvent]);

  const localizedInventions = useMemo(
    () => inventions.map((inv) => getLocalizedInvention(inv, lang)),
    [inventions, lang]
  );

  const activeInvention =
    localizedInventions[safeActiveRoundIndex] || localizedInventions[0];
  const currentRoundState: StoredRoundState = dayState.rounds[activeInvention.id] || {
    guessIds: [],
    status: 'playing',
    score: 0,
  };
  const targetCountry = COUNTRY_BY_ID.get(activeInvention.countryId)!;

  const guesses: GuessRecord[] = useMemo(() => {
    return currentRoundState.guessIds
      .map((cid) => COUNTRY_BY_ID.get(cid))
      .filter((c): c is Country => Boolean(c))
      .map((c) => {
        const isCorrect = c.id === targetCountry.id;
        const distanceKm = haversineDistanceKm(c, targetCountry);
        const bearingDeg = bearingDegrees(c, targetCountry);
        const cardinal = bearingCardinalDe(bearingDeg, lang);
        return {
          country: c,
          distanceKm,
          bearingDeg,
          cardinal,
          isCorrect,
        };
      });
  }, [currentRoundState.guessIds, targetCountry, lang]);

  const excludedCountryIds = useMemo(
    () => new Set(currentRoundState.guessIds),
    [currentRoundState.guessIds]
  );

  const roundFinished = currentRoundState.status !== 'playing';
  const hintUsed = Boolean(currentRoundState.hintUsed);
  const effectiveMaxPoints = getEffectiveMaxPoints(activeInvention, hintUsed);
  const wrongGuessesCount = currentRoundState.guessIds.filter(
    (cid) => cid !== activeInvention.countryId
  ).length;
  const canRevealHint = !roundFinished && wrongGuessesCount >= 3 && !hintUsed;
  const activeHintText = getInventionHint(
    activeInvention,
    getRegionLabel(targetCountry.regionDe, lang),
    lang
  );

  const finishedRoundsCount = useMemo(
    () =>
      dayState.date === activeDate
        ? inventions.filter((inv) => isRoundCompleted(dayState.rounds[inv.id])).length
        : 0,
    [dayState.date, dayState.rounds, activeDate, inventions]
  );

  const totalScore = useMemo(
    () => inventions.reduce((sum, inv) => sum + (dayState.rounds[inv.id]?.score || 0), 0),
    [inventions, dayState.rounds]
  );

  const maxPossibleDailyScore = useMemo(
    () => inventions.reduce((sum, inv) => sum + inv.maxPoints, 0),
    [inventions]
  );

  const totalAttemptsUsed = useMemo(
    () =>
      inventions.reduce((sum, inv) => {
        const r = dayState.rounds[inv.id];
        return sum + (r ? r.guessIds.length : 0);
      }, 0),
    [inventions, dayState.rounds]
  );

  const solvedCount = useMemo(
    () => inventions.filter((inv) => dayState.rounds[inv.id]?.status === 'solved').length,
    [inventions, dayState.rounds]
  );

  // Submit real player day result & update streak ONLY once all 5 rounds of activeDate are genuinely finished
  useEffect(() => {
    if (!allRoundsFinished || dayState.date !== activeDate) return;

    if (activeDate === todayDate) {
      const updatedDates = savePlayedDate(activeDate);
      setPlayedDates(updatedDates);
    }

    let cancelled = false;
    setStatsLoading(true);
    fetch('/api/submit-day', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: activeDate,
        playerId,
        totalScore,
        totalAttempts: totalAttemptsUsed,
        solvedCount,
      }),
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((stats: DayStatsResponse | null) => {
        if (!cancelled && stats) {
          setDayStats(stats);
        }
      })
      .catch(() => {
        // ignore network errors
      })
      .finally(() => {
        if (!cancelled) setStatsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [allRoundsFinished, activeDate, todayDate, playerId, totalScore, totalAttemptsUsed, solvedCount, viewMode]);

  const handleSubmitGuess = (country: Country) => {
    if (roundFinished) return;
    if (currentRoundState.guessIds.includes(country.id)) return;

    const nextGuessIds = [...currentRoundState.guessIds, country.id];
    const isCorrect = country.id === activeInvention.countryId;
    const isOutOfAttempts = nextGuessIds.length >= MAX_ATTEMPTS;

    const nextStatus: StoredRoundState['status'] = isCorrect
      ? 'solved'
      : isOutOfAttempts
      ? 'failed'
      : 'playing';
    const nextScore = calculateRoundScore(
      activeInvention,
      isCorrect,
      nextGuessIds.length,
      hintUsed
    );

    setPendingMapCountry(null);
    trackMetricEvent('round_guess', activeInvention.id);
    if (isCorrect) {
      setConfettiBurstId((prev) => prev + 1);
      trackMetricEvent('round_solved', activeInvention.id);
    } else if (isOutOfAttempts) {
      trackMetricEvent('round_failed', activeInvention.id);
    }
    setDayState((prev) => ({
      ...prev,
      rounds: {
        ...prev.rounds,
        [activeInvention.id]: {
          ...prev.rounds[activeInvention.id],
          guessIds: nextGuessIds,
          status: nextStatus,
          score: nextScore,
        },
      },
    }));
  };

  const handleRevealHint = () => {
    if (roundFinished || hintUsed || wrongGuessesCount < 3) return;
    trackMetricEvent('hint_used', activeInvention.id);
    setDayState((prev) => ({
      ...prev,
      rounds: {
        ...prev.rounds,
        [activeInvention.id]: {
          ...prev.rounds[activeInvention.id],
          hintUsed: true,
        },
      },
    }));
  };

  const handleGiveUp = () => {
    if (roundFinished) return;
    setPendingMapCountry(null);
    trackMetricEvent('round_failed', activeInvention.id);
    setDayState((prev) => ({
      ...prev,
      rounds: {
        ...prev.rounds,
        [activeInvention.id]: {
          ...prev.rounds[activeInvention.id],
          status: 'failed',
          score: 0,
        },
      },
    }));
  };

  const handleGoToRound = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= inventions.length) return;
      if (idx > highestUnlockedIndex) return;
      setPendingMapCountry(null);
      setStagedMapCountry(null);
      setViewMode('play');
      setDayState((prev) => ({
        ...prev,
        activeRoundIndex: idx,
      }));
    },
    [inventions.length, highestUnlockedIndex]
  );

  const handleNextStep = useCallback(() => {
    const nextUnfinished = inventions.findIndex(
      (inv, idx) => idx > safeActiveRoundIndex && !isRoundCompleted(dayState.rounds[inv.id])
    );
    if (nextUnfinished !== -1 && nextUnfinished <= highestUnlockedIndex) {
      handleGoToRound(nextUnfinished);
      return;
    }
    const anyUnfinished = inventions.findIndex(
      (inv) => !isRoundCompleted(dayState.rounds[inv.id])
    );
    if (anyUnfinished !== -1 && anyUnfinished <= highestUnlockedIndex) {
      handleGoToRound(anyUnfinished);
      return;
    }
    setViewMode('overview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [inventions, safeActiveRoundIndex, dayState.rounds, highestUnlockedIndex, handleGoToRound]);

  // Global keyboard shortcuts during active gameplay (1-5 rounds, Left/Right rounds, Enter next step)
  useEffect(() => {
    if (showRulesModal || showShareModal || showMetricsDashboard || showPrivacyModal || viewMode !== 'play') return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      const isTextField =
        tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target?.isContentEditable;
      if (isTextField) return;

      if (e.key >= '1' && e.key <= '5') {
        const idx = Number(e.key) - 1;
        if (idx <= highestUnlockedIndex) {
          e.preventDefault();
          handleGoToRound(idx);
        }
        return;
      }

      if (e.key === 'ArrowLeft') {
        if (safeActiveRoundIndex > 0) {
          e.preventDefault();
          handleGoToRound(safeActiveRoundIndex - 1);
        }
        return;
      }

      if (e.key === 'ArrowRight') {
        if (safeActiveRoundIndex < highestUnlockedIndex) {
          e.preventDefault();
          handleGoToRound(safeActiveRoundIndex + 1);
        }
        return;
      }

      if (e.key === 'Enter' && roundFinished && tag !== 'BUTTON' && tag !== 'A') {
        e.preventDefault();
        handleNextStep();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [
    showRulesModal,
    showShareModal,
    showMetricsDashboard,
    showPrivacyModal,
    viewMode,
    highestUnlockedIndex,
    safeActiveRoundIndex,
    roundFinished,
    handleGoToRound,
    handleNextStep,
  ]);

  const buildShareText = (): string => {
    const ptsLabel = isEn ? 'pts' : 'Pkt';
    const roundWord = isEn ? 'Round' : 'Runde';
    const lines = localizedInventions.map((inv, idx) => {
      const r = dayState.rounds[inv.id];
      const tag = inv.difficulty === 'sehr_schwer' ? ' (2×)' : '';
      const tipTag = r?.hintUsed ? ' 💡' : '';
      if (!r || r.status === 'failed') {
        return `${roundWord} ${idx + 1}${tag}${tipTag}: ❌ 0/${getEffectiveMaxPoints(inv, Boolean(r?.hintUsed))} ${ptsLabel}`;
      }
      const attempts = r.guessIds.length;
      const dots = r.guessIds
        .map((cid) => {
          const c = COUNTRY_BY_ID.get(cid);
          const target = COUNTRY_BY_ID.get(inv.countryId);
          if (!c || !target) return '🟧';
          if (c.id === target.id) return '🟩';
          const d = haversineDistanceKm(c, target);
          return d >= 10000 ? '🟥' : '🟧';
        })
        .join('');
      return `${roundWord} ${idx + 1}${tag}${tipTag}: ${dots} (${attempts}/${MAX_ATTEMPTS}) · ${r.score} ${ptsLabel}`;
    });

    const pctStr = dayStats
      ? isEn
        ? `${dayStats.betterThanPercent.toFixed(1)}%`
        : `${dayStats.betterThanPercent.toFixed(1).replace('.', ',')} %`
      : '';

    const rankText =
      dayStats && dayStats.totalPlayers >= 2
        ? isEn
          ? `Global Rank: ${dayStats.rank}/${dayStats.totalPlayers} · Better than ${pctStr}`
          : `Globaler Rang: ${dayStats.rank}/${dayStats.totalPlayers} · Besser als ${pctStr}`
        : dayStats
        ? isEn
          ? `Global Rank: ${dayStats.rank}/${dayStats.totalPlayers}`
          : `Globaler Rang: ${dayStats.rank}/${dayStats.totalPlayers}`
        : '';

    return [
      `${brandName} · ${formatShortDateLocale(activeDate, lang)}`,
      isEn
        ? `Result: ${totalScore}/${maxPossibleDailyScore} pts (${solvedCount}/5 solved)`
        : `Ergebnis: ${totalScore}/${maxPossibleDailyScore} Punkte (${solvedCount}/5 gelöst)`,
      rankText,
      '',
      ...lines,
    ]
      .filter(Boolean)
      .join('\n');
  };

  const { streakDays, playedLast7Count } = useMemo(() => {
    const playedSet = new Set(playedDates);
    let last7 = 0;
    for (let i = 0; i < 7; i++) {
      if (playedSet.has(shiftDate(todayDate, -i))) last7++;
    }
    let streak = 0;
    let cursor = playedSet.has(todayDate) ? todayDate : shiftDate(todayDate, -1);
    while (playedSet.has(cursor)) {
      streak++;
      cursor = shiftDate(cursor, -1);
    }
    return { streakDays: streak, playedLast7Count: last7 };
  }, [playedDates, todayDate]);

  const archiveDates = useMemo(
    () => [todayDate, shiftDate(todayDate, -1), shiftDate(todayDate, -2)],
    [todayDate]
  );

  const showOverview = allRoundsFinished && viewMode === 'overview';
  const showHub = allRoundsFinished && viewMode === 'hub';
  const formattedActiveDate = formatShortDateLocale(activeDate, lang);

  return (
    <div className="min-h-screen bg-[#F7F5F0] dark:bg-[#111317] text-[#16191D] dark:text-[#F1F5F9] transition-colors duration-200">
      <ConfettiOverlay burstId={confettiBurstId} />
      {/* Minimal Top Bar — leaves left & right desktop sides completely free */}
      <header className="border-b border-[#E6E2DA] dark:border-[#262B35] bg-white/95 dark:bg-[#191D24]/95 backdrop-blur-xs">
        <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-2 px-3 py-2.5 sm:px-6">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              closeMetricsDashboard();
              if (allRoundsFinished) {
                setViewMode('hub');
                trackMetricEvent('hub_opened');
              } else {
                setViewMode('play');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 sm:gap-2 font-display text-base sm:text-lg font-bold tracking-tight text-[#16191D] dark:text-[#F8FAFC] whitespace-nowrap shrink-0 transition-opacity hover:opacity-85"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F7A94B] text-[#16191D]">
              <Globe2 className="h-4 w-4" />
            </span>
            <span>{brandName}</span>
          </a>

          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <div
              className="flex h-8 items-center gap-1 rounded-lg border border-[#E6E2DA] dark:border-[#2C323E] bg-[#FAF9F6] dark:bg-[#111317] px-2 sm:px-2.5 font-mono-tabular text-xs font-bold text-[#16191D] dark:text-[#F8FAFC] whitespace-nowrap shrink-0"
              title={
                isEn
                  ? `Current streak: ${streakDays} ${streakDays === 1 ? 'day' : 'days'}`
                  : `Aktuelle Serie: ${streakDays} ${streakDays === 1 ? 'Tag' : 'Tage'}`
              }
            >
              <Flame
                className={`h-3.5 w-3.5 ${
                  streakDays > 0 ? 'text-[#F59E0B] fill-[#F59E0B]' : 'text-[#9CA3AF]'
                }`}
              />
              <span>{streakDays}</span>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === 'dark'
                  ? isEn
                    ? 'Switch to light mode'
                    : 'Zum Hellmodus wechseln'
                  : isEn
                  ? 'Switch to dark mode'
                  : 'Zum Dunkelmodus wechseln'
              }
              className="flex h-8 items-center gap-1 rounded-lg border border-[#E6E2DA] dark:border-[#2C323E] bg-white dark:bg-[#191D24] px-2 sm:px-2.5 text-xs font-medium text-[#16191D] dark:text-[#E2E8F0] transition-colors hover:bg-[#F7F5F0] dark:hover:bg-[#232832] whitespace-nowrap shrink-0"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-3.5 w-3.5 text-[#FBBF24]" />
                  <span className="hidden sm:inline">{isEn ? 'Light' : 'Hell'}</span>
                </>
              ) : (
                <>
                  <Moon className="h-3.5 w-3.5 text-[#475569]" />
                  <span className="hidden sm:inline">{isEn ? 'Dark' : 'Dunkel'}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={toggleLang}
              aria-label={isEn ? 'Switch language to German' : 'Sprache auf Englisch wechseln'}
              title={isEn ? 'Deutsch (DE)' : 'English (EN)'}
              className="flex h-8 items-center gap-1 rounded-lg border border-[#E6E2DA] dark:border-[#2C323E] bg-white dark:bg-[#191D24] px-2 sm:px-2.5 text-xs font-semibold text-[#16191D] dark:text-[#E2E8F0] transition-colors hover:bg-[#F7F5F0] dark:hover:bg-[#232832] whitespace-nowrap shrink-0"
            >
              <Languages className="h-3.5 w-3.5 text-[#F59E0B]" />
              <span>{lang === 'en' ? 'EN' : 'DE'}</span>
            </button>

            <PWAInstallButton variant="header" lang={lang} />

            <button
              type="button"
              onClick={() => setShowRulesModal(true)}
              aria-label={isEn ? 'Open game rules' : 'Spielregeln öffnen'}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E6E2DA] dark:border-[#2C323E] bg-white dark:bg-[#191D24] text-[#474D54] dark:text-[#CBD5E1] transition-colors hover:bg-[#F7F5F0] dark:hover:bg-[#232832] hover:text-[#16191D] dark:hover:text-white shrink-0"
            >
              <HelpCircle className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main
        id="top"
        className={`mx-auto px-3.5 py-4 sm:px-4 sm:py-6 ${
          showMetricsDashboard ? 'max-w-[820px]' : 'max-w-[540px]'
        }`}
      >
        {showMetricsDashboard ? (
          <OwnerMetricsDashboard
            adminToken={adminToken}
            lang={lang}
            onSetAdminToken={setAdminToken}
            onClose={closeMetricsDashboard}
          />
        ) : (
          <>
            {/* Centered Title + Date + Segmented Round Switcher */}
            <section className="mb-4 text-center">
              <div className="inline-flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] shadow-2xs">
                  <Compass className="h-4.5 w-4.5 text-[#F59E0B]" />
                </div>
                <div className="text-left">
                  <h1 className="font-display text-lg font-bold leading-tight text-[#16191D] dark:text-[#F8FAFC]">
                    {brandName}
                  </h1>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                    <span>{formattedActiveDate}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-tabular font-semibold text-[#16191D] dark:text-[#E2E8F0]">
                      {totalScore} / {maxPossibleDailyScore} {isEn ? 'pts' : 'Pkt'}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="mx-auto mt-3.5 inline-flex max-w-full flex-wrap items-center justify-center gap-1 rounded-xl bg-[#EDEAE2] dark:bg-[#1E222A] p-1"
                role="tablist"
                aria-label={isEn ? "Today's 5 Inventions" : 'Heutige 5 Erfindungen'}
              >
                {localizedInventions.map((inv, idx) => {
                  const r = dayState.rounds[inv.id];
                  const isActive = !showOverview && !showHub && idx === safeActiveRoundIndex;
                  const isSolved = r?.status === 'solved';
                  const isFailed = r?.status === 'failed';
                  const isDouble = inv.difficulty === 'sehr_schwer';
                  const isLocked = idx > highestUnlockedIndex;

                  return (
                    <button
                      key={inv.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      disabled={isLocked}
                      onClick={() => handleGoToRound(idx)}
                      title={
                        isLocked
                          ? isEn
                            ? `Finish Round ${idx} first`
                            : `Schließe zuerst Runde ${idx} ab`
                          : undefined
                      }
                      aria-label={
                        isLocked
                          ? isEn
                            ? `Round ${idx + 1} locked — finish Round ${idx} first`
                            : `Runde ${idx + 1} gesperrt — schließe zuerst Runde ${idx} ab`
                          : undefined
                      }
                      className={`flex h-8 items-center gap-1 rounded-lg px-2.5 text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                        isLocked
                          ? 'text-[#9CA3AF] dark:text-[#64748B] opacity-55 cursor-not-allowed'
                          : isActive
                          ? 'bg-white dark:bg-[#2C323E] text-[#16191D] dark:text-[#F8FAFC] shadow-2xs'
                          : isSolved
                          ? 'text-[#15803D] dark:text-[#4ADE80] hover:bg-white/60 dark:hover:bg-[#262B35]'
                          : isFailed
                          ? 'text-[#B91C1C] dark:text-[#F87171] hover:bg-white/60 dark:hover:bg-[#262B35]'
                          : 'text-[#5A6169] dark:text-[#9CA3AF] hover:bg-white/60 dark:hover:bg-[#262B35]'
                      }`}
                    >
                      <span>{isEn ? `Round ${idx + 1}` : `Runde ${idx + 1}`}</span>
                      {isDouble && (
                        <span className="font-mono-tabular text-[10px] font-bold text-[#B45309] dark:text-[#FBBF24]">
                          2×
                        </span>
                      )}
                      {isLocked && <Lock className="h-3 w-3 opacity-70" />}
                      {isSolved && <CheckCircle2 className="h-3 w-3" />}
                      {isFailed && <XCircle className="h-3 w-3" />}
                    </button>
                  );
                })}

                {allRoundsFinished && (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={showOverview}
                    onClick={() => setViewMode('overview')}
                    className={`flex h-8 items-center gap-1 rounded-lg px-2.5 text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                      showOverview
                        ? 'bg-white dark:bg-[#2C323E] text-[#16191D] dark:text-[#F8FAFC] shadow-2xs'
                        : 'text-[#B45309] dark:text-[#FBBF24] hover:bg-white/60 dark:hover:bg-[#262B35]'
                    }`}
                  >
                    <BarChart3 className="h-3.5 w-3.5" />
                    <span>{isEn ? 'Overview' : 'Übersicht'}</span>
                  </button>
                )}
              </div>
            </section>

            {showHub ? (
              <NextPuzzleHub
                formattedDate={formattedActiveDate}
                totalScore={totalScore}
                maxPossibleDailyScore={maxPossibleDailyScore}
                solvedCount={solvedCount}
                streakDays={streakDays}
                lang={lang}
                onBackToOverview={() => {
                  setViewMode('overview');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onViewSolutions={() => handleGoToRound(0)}
                onRefreshToday={() => {
                  fetch('/api/today')
                    .then((res) => (res.ok ? res.json() : null))
                    .then((data) => {
                      if (data?.today && typeof data.today === 'string') {
                        setTodayDate(data.today);
                        setActiveDate(data.today);
                      }
                    })
                    .catch(() => {});
                }}
              />
        ) : showOverview ? (
          /* End-of-Day Overview Screen (shown only once all 5 puzzles are finished) */
          <section id="uebersicht" className="relative space-y-4">
            {/* Desktop/Tablet Right-Edge QR Code: immediately visible beside the summary without scrolling */}
            <aside className="hidden min-[920px]:block min-[920px]:absolute min-[920px]:left-[calc(100%+20px)] min-[920px]:top-4 min-[920px]:w-[158px]">
              <SiteQrCodeCard isDark={theme === 'dark'} compact lang={lang} />
            </aside>

            {/* Hero Summary Card */}
            <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-5 shadow-2xs">
              <div className="grid grid-cols-2 divide-x divide-[#E6E2DA] dark:divide-[#262B35] text-center">
                <div className="pr-3">
                  <div className="text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                    {isEn ? 'Your Score' : 'Deine Punkte'}
                  </div>
                  <div className="mt-1 font-mono-tabular text-3xl font-extrabold tracking-tight text-[#16191D] dark:text-[#F8FAFC]">
                    {totalScore}
                  </div>
                  <div className="mt-0.5 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                    {isEn
                      ? `of ${maxPossibleDailyScore} pts (${solvedCount}/5)`
                      : `von ${maxPossibleDailyScore} Punkten (${solvedCount}/5)`}
                  </div>
                </div>

                <div className="pl-3">
                  <div className="text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                    {isEn ? 'Global Rank' : 'Globaler Rang'}
                  </div>
                  <div className="mt-1 font-mono-tabular text-3xl font-extrabold tracking-tight text-[#16191D] dark:text-[#F8FAFC]">
                    {dayStats ? `#${formatNumberLocale(dayStats.rank, lang)}` : statsLoading ? '…' : '–'}
                  </div>
                  <div className="mt-0.5 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                    {dayStats
                      ? isEn
                        ? `of ${formatNumberLocale(dayStats.totalPlayers, lang)} ${
                            dayStats.totalPlayers === 1 ? 'player' : 'players'
                          }`
                        : `von ${formatNumberLocale(dayStats.totalPlayers, lang)} ${
                            dayStats.totalPlayers === 1 ? 'Spieler' : 'Spielern'
                          }`
                      : isEn
                      ? 'Calculating…'
                      : 'Wird ermittelt'}
                  </div>
                </div>
              </div>

              <div className="my-4 border-t border-[#EFECE4] dark:border-[#262B35]" />

              {dayStats ? (
                <NormalDistributionChart
                  myScore={totalScore}
                  mean={dayStats.mean}
                  stdDev={dayStats.stdDev}
                  bins={dayStats.bins}
                  totalPlayers={dayStats.totalPlayers}
                  rank={dayStats.rank}
                  betterThanPercent={dayStats.betterThanPercent}
                  isDark={theme === 'dark'}
                  lang={lang}
                />
              ) : (
                <div className="flex h-40 items-center justify-center text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                  {isEn ? 'Loading real player statistics…' : 'Echte Spielerdaten werden geladen…'}
                </div>
              )}

              {/* Primary CTA Row */}
              <div className="mt-5 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => handleGoToRound(0)}
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#F7A94B] px-4 text-sm font-semibold text-[#16191D] transition-colors hover:bg-[#F59E0B] whitespace-nowrap"
                >
                  <ArrowLeftRight className="h-4 w-4" />
                  {isEn ? 'View Solutions' : 'Lösungen ansehen'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    trackMetricEvent('share_opened');
                    setShowShareModal(true);
                  }}
                  aria-label={isEn ? 'Share result graphic & challenge link' : 'Ergebnisgrafik & Duell-Link teilen'}
                  title={isEn ? 'Share result graphic & challenge link' : 'Ergebnisgrafik & Duell-Link teilen'}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7A94B] text-[#16191D] transition-colors hover:bg-[#F59E0B]"
                >
                  <Share2 className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>

            {/* Friend Duel Side-by-Side Comparison when opened via Challenge Link */}
            {activeDuel && activeDuel.date === activeDate && (
              <DuelComparisonCard
                mode="summary"
                duel={activeDuel}
                myScore={totalScore}
                myMaxScore={maxPossibleDailyScore}
                mySolvedCount={solvedCount}
                myRoundScores={inventions.map((inv) => dayState.rounds[inv.id]?.score ?? 0)}
                inventions={inventions}
                lang={lang}
                onChallengeBack={() => {
                  trackMetricEvent('share_opened');
                  setShowShareModal(true);
                }}
                onDismiss={() => {
                  clearActiveDuel(activeDate);
                  setActiveDuel(null);
                }}
              />
            )}

            {/* 7-Day Streak */}
            <StreakWidget todayDate={todayDate} playedDates={playedDates} lang={lang} />

            {/* Gentle Daily Home Screen App Install Card */}
            <PWAInstallButton variant="card" lang={lang} />

            {/* 5 Inventions Overview List */}
            <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-4 shadow-2xs">
              <h3 className="mb-2 text-xs font-semibold text-[#16191D] dark:text-[#F1F5F9]">
                {isEn ? 'Your 5 Inventions at a Glance' : 'Deine 5 Erfindungen im Überblick'}
              </h3>
              <div className="divide-y divide-[#EFECE4] dark:divide-[#262B35]">
                {localizedInventions.map((inv, idx) => {
                  const r = dayState.rounds[inv.id];
                  const target = COUNTRY_BY_ID.get(inv.countryId);
                  return (
                    <button
                      key={inv.id}
                      type="button"
                      onClick={() => handleGoToRound(idx)}
                      className="flex w-full items-center justify-between py-2.5 text-left text-xs transition-colors hover:bg-[#FAF9F6] dark:hover:bg-[#222731]"
                    >
                      <div className="min-w-0 pr-2">
                        <span className="font-semibold text-[#16191D] dark:text-[#F1F5F9]">
                          {idx + 1}. {inv.name}
                        </span>
                        <span className="ml-1.5 text-[#6B7280] dark:text-[#9CA3AF]">
                          ({target ? getCountryName(target, lang) : ''})
                        </span>
                      </div>
                      <div className="font-mono-tabular shrink-0 font-semibold text-[#16191D] dark:text-[#F1F5F9]">
                        {r?.status === 'solved'
                          ? `${r.score} ${isEn ? 'pts' : 'Pkt'} (${r.guessIds.length}/${MAX_ATTEMPTS})`
                          : `0 ${isEn ? 'pts' : 'Pkt'}`}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile QR Code fallback inside column on narrow phone screens */}
            <div className="min-[920px]:hidden">
              <SiteQrCodeCard isDark={theme === 'dark'} lang={lang} />
            </div>
          </section>
        ) : (
          /* Play View: World Map ABOVE the Compact Single-Column Guessing Interface */
          <section id="raetsel" className="space-y-3.5">
            {activeDuel && activeDuel.date === activeDate && (
              <DuelComparisonCard
                mode="banner"
                duel={activeDuel}
                lang={lang}
                onDismiss={() => {
                  clearActiveDuel(activeDate);
                  setActiveDuel(null);
                }}
              />
            )}

            <WorldMap
              guesses={guesses}
              targetCountryId={activeInvention.countryId}
              roundFinished={roundFinished}
              isDark={theme === 'dark'}
              lang={lang}
              stagedCountryId={stagedMapCountry?.id ?? null}
              onSelectCountryFromMap={(country) => setPendingMapCountry(country)}
            />

            {/* Combined Invention Card & Guessing Interface for Mobile & Slim Desktop */}
            <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-4 shadow-2xs space-y-3.5">
              {/* Metadata & Points Header */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span>
                      {isEn
                        ? `Round ${safeActiveRoundIndex + 1} of ${localizedInventions.length}`
                        : `Runde ${safeActiveRoundIndex + 1} von ${localizedInventions.length}`}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{getCategoryLabel(activeInvention.category, lang)}</span>
                    <span aria-hidden="true">·</span>
                    <span
                      className={
                        activeInvention.difficulty === 'sehr_schwer'
                          ? 'font-semibold text-[#B45309] dark:text-[#FBBF24]'
                          : 'font-medium text-[#16191D] dark:text-[#E2E8F0]'
                      }
                    >
                      {getDifficultyLabel(activeInvention.difficulty, lang)}
                    </span>
                  </div>

                  <span className="font-mono-tabular font-semibold text-[#16191D] dark:text-[#F1F5F9]">
                    {hintUsed && (
                      <span className="mr-1.5 font-normal line-through text-[#94A3B8] dark:text-[#64748B]">
                        {activeInvention.maxPoints}
                      </span>
                    )}
                    max. {effectiveMaxPoints} {isEn ? 'pts' : 'Pkt'}
                    {hintUsed && (
                      <span className="ml-1 font-sans text-[10px] font-medium text-[#B45309] dark:text-[#FBBF24]">
                        (-25%)
                      </span>
                    )}
                  </span>
                </div>

                <h2 className="mt-1 font-display text-xl font-bold leading-snug text-[#16191D] dark:text-[#F8FAFC] [text-wrap:balance]">
                  {activeInvention.name}
                </h2>
              </div>

              <InventionArtwork invention={activeInvention} revealed={roundFinished} lang={lang} />

              <p className="text-xs sm:text-sm leading-relaxed text-[#474D54] dark:text-[#CBD5E1]">
                {activeInvention.clueDescription}
              </p>

              <div className="border-t border-[#EFECE4] dark:border-[#262B35] pt-3">
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-[#16191D] dark:text-[#F1F5F9]">
                    {isEn
                      ? 'Which country does this invention originate from?'
                      : 'Aus welchem Land stammt diese Erfindung?'}
                  </span>
                  <span className="font-mono-tabular text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                    {isEn ? 'Guess' : 'Versuch'}{' '}
                    {Math.min(
                      MAX_ATTEMPTS,
                      currentRoundState.guessIds.length + (roundFinished ? 0 : 1)
                    )}{' '}
                    / {MAX_ATTEMPTS}
                  </span>
                </div>

                <CountrySearchInput
                  excludedCountryIds={excludedCountryIds}
                  disabled={roundFinished}
                  attemptsUsed={currentRoundState.guessIds.length}
                  maxAttempts={MAX_ATTEMPTS}
                  pendingMapCountry={pendingMapCountry}
                  lang={lang}
                  keyboardShortcutsEnabled={
                    !showRulesModal && !showShareModal && !showMetricsDashboard
                  }
                  onClearPendingMapCountry={() => setPendingMapCountry(null)}
                  onStagedCountryChange={(country) => setStagedMapCountry(country)}
                  onSubmitGuess={handleSubmitGuess}
                  onGiveUp={handleGiveUp}
                />
              </div>

              {/* Optional Hint Button after 3rd wrong guess */}
              {canRevealHint && (
                <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#F59E0B]/35 dark:border-[#FBBF24]/30 bg-[#FFFBEB] dark:bg-[#451A03]/25 px-3 py-2">
                  <div className="flex items-center gap-2 text-xs text-[#92400E] dark:text-[#FDE68A]">
                    <Lightbulb className="h-3.5 w-3.5 shrink-0 text-[#D97706] dark:text-[#FBBF24]" />
                    <span>
                      {isEn
                        ? 'Need a clue? (Continent, era & context)'
                        : 'Brauchst du einen Hinweis? (Kontinent & Kontext)'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleRevealHint}
                    className="flex h-8 items-center gap-1.5 rounded-lg bg-[#D97706] px-3 text-xs font-semibold text-white transition-colors hover:bg-[#B45309] whitespace-nowrap shrink-0"
                  >
                    <Lightbulb className="h-3.5 w-3.5" />
                    {isEn ? 'Show Hint (-25% max pts)' : 'Tipp anzeigen (-25 % max. Punkte)'}
                  </button>
                </div>
              )}

              {/* Revealed Hint Banner */}
              {hintUsed && (
                <div className="rounded-xl border border-[#F59E0B]/40 dark:border-[#FBBF24]/30 bg-[#FFFBEB] dark:bg-[#451A03]/25 px-3 py-2 text-xs text-[#78350F] dark:text-[#FEF3C7]">
                  <div className="flex items-center justify-between gap-2 font-semibold text-[#B45309] dark:text-[#FBBF24]">
                    <span className="flex items-center gap-1.5">
                      <Lightbulb className="h-3.5 w-3.5" />
                      {isEn ? 'Hint' : 'Tipp'}
                    </span>
                    <span className="font-mono-tabular text-[11px]">
                      {isEn
                        ? `Max. ${effectiveMaxPoints} instead of ${activeInvention.maxPoints} pts`
                        : `Max. ${effectiveMaxPoints} statt ${activeInvention.maxPoints} Pkt`}
                    </span>
                  </div>
                  <p className="mt-1 leading-relaxed">{activeHintText}</p>
                </div>
              )}

              {/* Compact 7 Guess Slots */}
              <div className="space-y-1.5">
                {Array.from({ length: MAX_ATTEMPTS }, (_, slotIdx) => {
                  const g = guesses[slotIdx];
                  if (!g) {
                    return (
                      <div
                        key={slotIdx}
                        className="flex h-9 items-center justify-between rounded-xl border border-dashed border-[#E6E2DA] dark:border-[#262B35] bg-[#FAF9F6] dark:bg-[#111317] px-3 text-xs text-[#94A3B8] dark:text-[#64748B]"
                      >
                        <span className="font-mono-tabular">
                          {isEn ? `Guess ${slotIdx + 1}` : `Versuch ${slotIdx + 1}`}
                        </span>
                        <span>{isEn ? 'Open' : 'Noch offen'}</span>
                      </div>
                    );
                  }

                  const heatColor = getDistanceHeatColor(g.distanceKm, g.isCorrect);
                  const qualityLabel = getDistanceQualityLabel(g.distanceKm, g.isCorrect, lang);

                  return (
                    <div
                      key={g.country.id}
                      className={`flex min-h-9 items-center justify-between gap-2 rounded-xl border px-3 py-1.5 text-xs sm:text-sm ${
                        g.isCorrect
                          ? 'border-[#16A34A]/40 dark:border-[#22C55E]/40 bg-[#F0FDF4] dark:bg-[#052E16]/40'
                          : 'border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#1F242D]'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span
                          className="inline-block h-3 w-3 shrink-0 rounded-xs"
                          style={{ backgroundColor: heatColor }}
                          aria-hidden="true"
                        />
                        <span className="font-semibold text-[#16191D] dark:text-[#F1F5F9] truncate">
                          {getCountryName(g.country, lang)}
                        </span>
                        <span className="hidden sm:inline text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
                          {qualityLabel}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5 shrink-0 font-mono-tabular">
                        <span className="text-xs sm:text-sm font-semibold text-[#16191D] dark:text-[#F1F5F9]">
                          {formatNumberLocale(g.distanceKm, lang)} km
                        </span>

                        {g.isCorrect ? (
                          <span className="flex items-center gap-1 text-xs font-semibold text-[#15803D] dark:text-[#4ADE80]">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            {isEn ? 'Hit' : 'Treffer'}
                          </span>
                        ) : (
                          <span className="flex w-11 items-center justify-end gap-1 text-xs font-semibold text-[#474D54] dark:text-[#CBD5E1]">
                            <ArrowUp
                              className="h-3.5 w-3.5 text-[#16191D] dark:text-[#F1F5F9]"
                              style={{ transform: `rotate(${Math.round(g.bearingDeg)}deg)` }}
                              aria-hidden="true"
                            />
                            {g.cardinal}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Post-Round Resolution */}
              {roundFinished && (
                <div className="rounded-xl border border-[#E6E2DA] dark:border-[#2C323E] bg-[#FAF9F6] dark:bg-[#111317] p-3.5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="text-[11px] font-semibold text-[#6B7280] dark:text-[#9CA3AF]">
                        {currentRoundState.status === 'solved'
                          ? isEn
                            ? `Solved in ${currentRoundState.guessIds.length} ${
                                currentRoundState.guessIds.length === 1 ? 'guess' : 'guesses'
                              }`
                            : `Richtig erraten in ${currentRoundState.guessIds.length} ${
                                currentRoundState.guessIds.length === 1 ? 'Versuch' : 'Versuchen'
                              }`
                          : isEn
                          ? 'Revealed'
                          : 'Aufgelöst'}
                      </div>
                      <h3 className="mt-0.5 font-display text-lg font-bold text-[#16191D] dark:text-[#F8FAFC]">
                        {isEn ? 'Origin:' : 'Ursprungsland:'} {getCountryName(targetCountry, lang)}{' '}
                        <span className="text-xs font-sans font-normal text-[#6B7280] dark:text-[#9CA3AF]">
                          ({isEn ? targetCountry.nameDe : targetCountry.nameEn})
                        </span>
                      </h3>
                    </div>

                    <div className="font-mono-tabular text-right">
                      <div className="text-sm font-bold text-[#B45309] dark:text-[#FBBF24]">
                        +{currentRoundState.score} {isEn ? 'pts' : 'Pkt'}
                      </div>
                      <div className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
                        {isEn ? `of ${effectiveMaxPoints}` : `von ${effectiveMaxPoints}`}
                        {hintUsed ? (isEn ? ' (with hint)' : ' (mit Tipp)') : ''}
                      </div>
                    </div>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#374151] dark:text-[#CBD5E1]">
                    {activeInvention.resolutionFact}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                    {!allRoundsFinished && (
                      <span className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
                        {isEn
                          ? `Summary unlocks after Round 5 (${finishedRoundsCount}/5 finished)`
                          : `Auswertung nach Runde 5 (${finishedRoundsCount}/5 erledigt)`}
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="ml-auto flex h-10 items-center gap-1.5 rounded-xl bg-[#F7A94B] px-4 text-xs sm:text-sm font-semibold text-[#16191D] transition-colors hover:bg-[#F59E0B] whitespace-nowrap shrink-0"
                    >
                      {allRoundsFinished
                        ? isEn
                          ? 'Go to Summary'
                          : 'Zur Gesamtauswertung'
                        : safeActiveRoundIndex < localizedInventions.length - 1
                        ? isEn
                          ? 'Next Invention'
                          : 'Nächste Erfindung'
                        : isEn
                        ? 'Continue Open Round'
                        : 'Offene Runde fortsetzen'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

            {/* Archive Switcher inside slim column */}
            <section className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] px-4 py-3 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                <Calendar className="h-3.5 w-3.5 text-[#F59E0B]" />
                <span>{isEn ? 'Archive' : 'Archiv'}</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {archiveDates.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setActiveDate(d)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      activeDate === d
                        ? 'bg-[#F7A94B] text-[#16191D] font-semibold'
                        : 'bg-[#F7F5F0] dark:bg-[#111317] text-[#474D54] dark:text-[#CBD5E1] hover:bg-[#EDEAE2] dark:hover:bg-[#232832]'
                    }`}
                  >
                    {d === todayDate ? (isEn ? 'Today' : 'Heute') : formatShortDateLocale(d, lang)}
                  </button>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="mt-6 border-t border-[#E6E2DA] dark:border-[#262B35] bg-white/80 dark:bg-[#191D24]/80 py-4">
        <div className="mx-auto flex max-w-[540px] flex-wrap items-center justify-between gap-2 px-4 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
          <span>
            {isEn
              ? `${brandName} — Daily Geo Trivia & Origin Quiz`
              : `${brandName} — Tägliches Geo-Trivia & Herkunftsrätsel`}
          </span>
          <div className="flex flex-wrap items-center gap-2.5">
            <span>
              {isEn
                ? '5 Inventions · 7 Guesses · 1× 2× Pts'
                : '5 Erfindungen · 7 Versuche · 1× Doppelpunkte'}
            </span>
            <button
              type="button"
              onClick={() => setShowPrivacyModal(true)}
              className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-medium text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#EFECE4] dark:hover:bg-[#232832] hover:text-[#16191D] dark:hover:text-white transition-colors"
            >
              <ShieldCheck className="h-3 w-3" />
              <span>{isEn ? 'Info & Privacy' : 'Info & Datenschutz'}</span>
            </button>
            <button
              type="button"
              onClick={openMetricsDashboard}
              className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-medium text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#EFECE4] dark:hover:bg-[#232832] hover:text-[#16191D] dark:hover:text-white transition-colors"
              title={isEn ? 'Owner metrics dashboard (password-protected)' : 'Persönliche Website-Metriken (Passwortgeschützt)'}
            >
              <Lock className="h-3 w-3" />
              <span>{isEn ? 'Metrics' : 'Metriken'}</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Rules Modal — fixed backdrop + internal scroll lock so background never scrolls */}
      {showRulesModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/55 p-4"
          onClick={() => setShowRulesModal(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="rules-title"
            className="flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-[#E6E2DA] dark:border-[#2C323E] bg-white dark:bg-[#191D24] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed Modal Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-[#EFECE4] dark:border-[#262B35] px-5 py-4">
              <div className="flex items-center gap-2">
                <Compass className="h-4.5 w-4.5 text-[#F59E0B]" />
                <h2 id="rules-title" className="font-display text-lg font-bold text-[#16191D] dark:text-[#F8FAFC]">
                  {isEn ? `How to Play — ${brandName}` : `Spielregeln — ${brandName}`}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowRulesModal(false)}
                aria-label={isEn ? 'Close rules' : 'Anleitung schließen'}
                className="rounded-lg p-1.5 text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F7F5F0] dark:hover:bg-[#232832] hover:text-[#16191D] dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable Body (overscroll-contain prevents scroll chaining to page behind) */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4 space-y-3.5 text-xs sm:text-sm leading-relaxed text-[#374151] dark:text-[#CBD5E1]">
              <p>
                {isEn ? (
                  <>
                    Every day at <strong>00:00 (Berlin time)</strong>, <strong>5 new inventions</strong>{' '}
                    unlock—from everyday classics to surprising niche discoveries. Your goal is to
                    find each invention&apos;s country of origin.
                  </>
                ) : (
                  <>
                    Jeden Tag um <strong>00:00 Uhr (Berliner Zeit)</strong> erwarten dich{' '}
                    <strong>5 neue Erfindungen</strong> aus aller Welt – von Alltagsklassikern bis zu
                    kniffligen Nischen-Entdeckungen. Errate jeweils das Ursprungsland.
                  </>
                )}
              </p>

              {/* Section 1: Guessing */}
              <div className="rounded-xl border border-[#EFECE4] dark:border-[#262B35] bg-[#FAF9F6] dark:bg-[#111317] p-3.5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#16191D] dark:text-[#F8FAFC]">
                  <MapPin className="h-3.5 w-3.5 text-[#F59E0B]" />
                  <span>{isEn ? '1. Guessing & World Map' : '1. Tipps abgeben & Weltkarte'}</span>
                </div>
                <ul className="list-disc space-y-1 pl-4 text-xs">
                  <li>
                    {isEn ? (
                      <>
                        You have up to <strong>7 guesses per invention</strong> (or you can click{' '}
                        <em>Give up</em> anytime).
                      </>
                    ) : (
                      <>
                        Pro Erfindung hast du <strong>maximal 7 Versuche</strong> (oder kannst jederzeit{' '}
                        <em>Aufgeben</em> wählen).
                      </>
                    )}
                  </li>
                  <li>
                    {isEn ? (
                      <>
                        Type any country in <strong>English or German</strong> in the search box, or click a
                        country directly on the zoomable <strong>World Map</strong>.
                      </>
                    ) : (
                      <>
                        Tippe ein Land auf <strong>Deutsch oder Englisch</strong> ins Suchfeld ein oder
                        klicke direkt ein Land auf der zoombaren <strong>Weltkarte</strong> an.
                      </>
                    )}
                  </li>
                  <li>
                    {isEn ? (
                      <>
                        Click <strong>Confirm</strong> so no country is submitted by mistake.
                      </>
                    ) : (
                      <>
                        Klicke auf <strong>Bestätigen</strong>, damit kein Land versehentlich abgeschickt
                        wird.
                      </>
                    )}
                  </li>
                  <li>
                    {isEn ? (
                      <>
                        Rounds unlock <strong>one after another</strong> — finish the current round to
                        reveal the next invention.
                      </>
                    ) : (
                      <>
                        Die Runden werden <strong>nacheinander freigeschaltet</strong> – schließe zuerst
                        die aktuelle Runde ab, um die nächste Erfindung zu öffnen.
                      </>
                    )}
                  </li>
                </ul>
              </div>

              {/* Section 2: Distance & Compass */}
              <div className="rounded-xl border border-[#EFECE4] dark:border-[#262B35] bg-[#FAF9F6] dark:bg-[#111317] p-3.5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#16191D] dark:text-[#F8FAFC]">
                  <Compass className="h-3.5 w-3.5 text-[#F59E0B]" />
                  <span>{isEn ? '2. Distance, Compass & Colors' : '2. Entfernung, Kompass & Farben'}</span>
                </div>
                <p className="text-xs">
                  {isEn
                    ? 'Every wrong guess shows the distance in km and the compass arrow toward the true origin, and colors the country on the map:'
                    : 'Nach jedem Tipp siehst du die Entfernung in km sowie die Himmelsrichtung zum Ziel und das Land färbt sich auf der Karte:'}
                </p>
                <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px] font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-xs bg-[#16A34A] shrink-0" />
                    <span>{isEn ? 'Green: Exact match (0 km)' : 'Grün: Volltreffer (0 km)'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-xs bg-[#FDBE68] shrink-0" />
                    <span>{isEn ? 'Light orange: Very close' : 'Hellorange: Sehr nah'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-xs bg-[#9A2E0A] shrink-0" />
                    <span>{isEn ? 'Dark orange: < 10,000 km' : 'Dunkelorange: < 10.000 km'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-xs bg-[#DC2626] shrink-0" />
                    <span>{isEn ? 'Red: ≥ 10,000 km away' : 'Rot: ≥ 10.000 km entfernt'}</span>
                  </div>
                </div>
              </div>

              {/* Section 3: Scoring & Hints */}
              <div className="rounded-xl border border-[#EFECE4] dark:border-[#262B35] bg-[#FAF9F6] dark:bg-[#111317] p-3.5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#16191D] dark:text-[#F8FAFC]">
                  <Lightbulb className="h-3.5 w-3.5 text-[#D97706]" />
                  <span>{isEn ? '3. Scoring & Optional Hint' : '3. Punkte, 2×-Runde & Tipp-Button'}</span>
                </div>
                <ul className="list-disc space-y-1 pl-4 text-xs">
                  <li>
                    {isEn ? (
                      <>
                        Daily set includes <strong>2× Standard</strong>, <strong>2× Tricky</strong> (100 pts each),
                        and <strong>1× Very Hard</strong> with <strong>double points (200 pts)</strong> — up to{' '}
                        <strong>600 pts</strong> per day. Faster solves earn higher points.
                      </>
                    ) : (
                      <>
                        Pro Tag gibt es <strong>2× Standard</strong>, <strong>2× Knifflig</strong> (je 100 Pkt)
                        sowie <strong>1× Sehr schwer</strong> mit <strong>doppelten Punkten (200 Pkt)</strong> –
                        insgesamt maximal <strong>600 Punkte</strong>. Je weniger Versuche, desto mehr Punkte.
                      </>
                    )}
                  </li>
                  <li>
                    {isEn ? (
                      <>
                        After <strong>3 wrong guesses</strong>, an optional <strong>Hint button</strong> appears
                        (continent, era &amp; historical context). Using it lowers that round&apos;s maximum points
                        by 25%.
                      </>
                    ) : (
                      <>
                        Ab dem <strong>3. falschen Versuch</strong> erscheint optional ein{' '}
                        <strong>Tipp-Button</strong> (Kontinent, Zeitraum &amp; historischer Kontext). Die Nutzung
                        senkt die maximal mögliche Punktzahl der Runde um 25 %.
                      </>
                    )}
                  </li>
                </ul>
              </div>

              {/* Section 4: Overview & Streak */}
              <div className="rounded-xl border border-[#EFECE4] dark:border-[#262B35] bg-[#FAF9F6] dark:bg-[#111317] p-3.5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#16191D] dark:text-[#F8FAFC]">
                  <Trophy className="h-3.5 w-3.5 text-[#F59E0B]" />
                  <span>{isEn ? '4. Overview, Streak & Sharing' : '4. Übersicht, Serie & Teilen'}</span>
                </div>
                <p className="text-xs">
                  {isEn
                    ? 'Once all 5 inventions are completed, the Overview unlocks with your Global Rank, the live score distribution among real players, your 7-day Streak (which only increases once today’s puzzle is finished), a spoiler-free PNG Result Card, and a Challenge Link for Friend Duels (side-by-side comparison). You can also install the app on your Home Screen and replay recent days via the Archive.'
                    : 'Sobald alle 5 Erfindungen abgeschlossen sind, öffnet sich die Übersichtsseite mit deinem Globalen Rang, der Verteilung echter Teilnehmender, deiner 7-Tage-Serie (die Flamme steigt erst nach Abschluss des heutigen Rätsels), einer spoilerfreien PNG-Ergebnisgrafik und einem Challenge-Link fürs Freundes-Duell (Direktvergleich). Außerdem kannst du die Seite als App auf deinen Startbildschirm legen und ältere Tage übers Archiv nachspielen.'}
                </p>
              </div>
            </div>

            {/* Fixed Modal Footer */}
            <div className="flex shrink-0 justify-end border-t border-[#EFECE4] dark:border-[#262B35] px-5 py-3">
              <button
                type="button"
                onClick={() => setShowRulesModal(false)}
                className="rounded-xl bg-[#F7A94B] px-4 py-2 text-xs sm:text-sm font-semibold text-[#16191D] hover:bg-[#F59E0B]"
              >
                {isEn ? "Let's play" : "Los geht's"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Result Graphic Modal */}
      <ShareResultModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        activeDate={activeDate}
        formattedDate={formattedActiveDate}
        inventions={inventions}
        rounds={dayState.rounds}
        totalScore={totalScore}
        maxPossibleDailyScore={maxPossibleDailyScore}
        solvedCount={solvedCount}
        dayStats={dayStats}
        streakDays={streakDays}
        playedLast7Count={playedLast7Count}
        isDark={theme === 'dark'}
        lang={lang}
        fallbackShareText={buildShareText()}
        onShareAction={(kind) => {
          if (kind === 'download') {
            trackMetricEvent('share_downloaded');
          }
        }}
      />

      <PrivacyInfoModal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        lang={lang}
      />

      <OfflineIndicator lang={lang} />
    </div>
  );
}
