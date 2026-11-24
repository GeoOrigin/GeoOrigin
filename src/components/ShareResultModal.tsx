import React, { useEffect, useMemo, useState } from 'react';
import { Check, Copy, Download, Image as ImageIcon, Link2, Share2, Swords, X } from 'lucide-react';
import { COUNTRY_BY_ID, getDistanceHeatColor, haversineDistanceKm } from '../data/countries';
import { getEffectiveMaxPoints, getLocalizedInvention, Invention } from '../data/inventions';
import {
  AppLanguage,
  formatDecimalPercent,
  formatNumberLocale,
  getBrandName,
} from '../i18n/translations';
import {
  buildDuelInviteText,
  buildDuelUrl,
  DuelChallenge,
  loadSavedPlayerName,
  sanitizeChallengerName,
  savePlayerName,
} from '../utils/duel';
import { ScoreBin } from './NormalDistributionChart';

export interface ShareRoundSummary {
  guessIds: string[];
  status: 'playing' | 'solved' | 'failed';
  score: number;
  hintUsed?: boolean;
}

export interface ShareDayStats {
  rank: number;
  totalPlayers: number;
  betterThanPercent: number;
  worseThanPercent: number;
  mean: number;
  stdDev: number;
  bins: ScoreBin[];
}

interface ShareResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeDate: string;
  formattedDate: string;
  inventions: Invention[];
  rounds: Record<string, ShareRoundSummary>;
  totalScore: number;
  maxPossibleDailyScore: number;
  solvedCount: number;
  dayStats: ShareDayStats | null;
  streakDays: number;
  playedLast7Count: number;
  isDark: boolean;
  lang?: AppLanguage;
  fallbackShareText: string;
  onShareAction?: (action?: 'share' | 'download') => void;
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function truncateText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let out = text;
  while (out.length > 1 && ctx.measureText(`${out}…`).width > maxWidth) {
    out = out.slice(0, -1);
  }
  return `${out}…`;
}

async function renderShareGraphicBlob(params: {
  formattedDate: string;
  inventions: Invention[];
  rounds: Record<string, ShareRoundSummary>;
  totalScore: number;
  maxPossibleDailyScore: number;
  solvedCount: number;
  dayStats: ShareDayStats | null;
  streakDays: number;
  playedLast7Count: number;
  isDark: boolean;
  lang: AppLanguage;
}): Promise<{ blob: Blob; dataUrl: string }> {
  try {
    await document.fonts.ready;
  } catch {
    // proceed with fallback system fonts if font readiness check fails
  }

  const W = 960;
  const H = 740;
  const DPR = 2;

  const canvas = document.createElement('canvas');
  canvas.width = W * DPR;
  canvas.height = H * DPR;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Canvas 2D unavailable');
  }
  ctx.scale(DPR, DPR);

  const c = params.isDark
    ? {
        bg: '#111317',
        card: '#191D24',
        cardSoft: '#13161C',
        border: '#262B35',
        text: '#F8FAFC',
        muted: '#9CA3AF',
        accent: '#F59E0B',
        accentSolid: '#F59E0B',
        accentSoft: 'rgba(245, 158, 11, 0.16)',
        green: '#22C55E',
        greenSoft: 'rgba(34, 197, 94, 0.15)',
        amber: '#FBBF24',
        bar: '#333945',
        barEmpty: '#272C36',
        barActive: '#F59E0B',
        dotEmpty: '#2A313D',
      }
    : {
        bg: '#F7F5F0',
        card: '#FFFFFF',
        cardSoft: '#FAF8F5',
        border: '#E6E2DA',
        text: '#16191D',
        muted: '#6B7280',
        accent: '#EA580C',
        accentSolid: '#F7A94B',
        accentSoft: 'rgba(247, 169, 75, 0.18)',
        green: '#16A34A',
        greenSoft: '#F0FDF4',
        amber: '#D97706',
        bar: '#D6D3CB',
        barEmpty: '#DFDDD6',
        barActive: '#F7A94B',
        dotEmpty: '#E5E2DA',
      };

  // Background
  ctx.fillStyle = c.bg;
  ctx.fillRect(0, 0, W, H);

  // Outer Frame Card
  const pad = 28;
  drawRoundedRect(ctx, pad, pad, W - pad * 2, H - pad * 2, 20);
  ctx.fillStyle = c.card;
  ctx.fill();
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = c.border;
  ctx.stroke();

  const isEn = params.lang === 'en';
  const ptsUnit = isEn ? 'pts' : 'Pkt';
  const brandName = getBrandName(params.lang);

  // Header Row
  const innerX = pad + 32;
  const innerW = W - (pad + 32) * 2;
  let cursorY = pad + 34;

  ctx.fillStyle = c.text;
  ctx.font = '700 30px "Fraunces", Georgia, serif';
  ctx.textBaseline = 'top';
  ctx.fillText(brandName, innerX, cursorY);

  ctx.fillStyle = c.muted;
  ctx.font = '600 15px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText(
    `${params.formattedDate} · ${isEn ? 'Daily Result' : 'Tagesergebnis'}`,
    innerX + innerW,
    cursorY + 8
  );
  ctx.textAlign = 'left';

  cursorY += 50;
  ctx.strokeStyle = c.border;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(innerX, cursorY);
  ctx.lineTo(innerX + innerW, cursorY);
  ctx.stroke();

  cursorY += 22;

  // Top Metric Row (2 cards: Score + Globaler Rang)
  const gap = 16;
  const leftCardW = 390;
  const rightCardW = innerW - leftCardW - gap;
  const metricH = 148;

  // Left: Score Card
  drawRoundedRect(ctx, innerX, cursorY, leftCardW, metricH, 14);
  ctx.fillStyle = c.cardSoft;
  ctx.fill();
  ctx.strokeStyle = c.border;
  ctx.stroke();

  const leftInnerW = leftCardW - 40;
  ctx.fillStyle = c.muted;
  ctx.font = '600 13px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText(
    truncateText(ctx, isEn ? 'YOUR DAILY SCORE' : 'DEINE TAGESPUNKTE', leftInnerW),
    innerX + 20,
    cursorY + 18
  );

  ctx.fillStyle = c.text;
  ctx.font = '700 46px "JetBrains Mono", monospace';
  const scoreStr = `${params.totalScore}`;
  ctx.fillText(scoreStr, innerX + 20, cursorY + 44);
  const scoreNumW = ctx.measureText(scoreStr).width;

  ctx.fillStyle = c.muted;
  ctx.font = '500 21px "JetBrains Mono", monospace';
  ctx.fillText(
    truncateText(
      ctx,
      `/ ${params.maxPossibleDailyScore} ${ptsUnit}`,
      Math.max(60, leftInnerW - scoreNumW - 8)
    ),
    innerX + 28 + scoreNumW,
    cursorY + 62
  );

  ctx.fillStyle = params.solvedCount >= 4 ? c.green : c.text;
  ctx.font = '600 15px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText(
    truncateText(
      ctx,
      isEn
        ? `${params.solvedCount} of 5 inventions solved`
        : `${params.solvedCount} von 5 Erfindungen gelöst`,
      leftInnerW
    ),
    innerX + 20,
    cursorY + 110
  );

  // Right: Global Rank & Percentage Comparison Card
  const rightX = innerX + leftCardW + gap;
  const rightInnerW = rightCardW - 40;
  drawRoundedRect(ctx, rightX, cursorY, rightCardW, metricH, 14);
  ctx.fillStyle = c.cardSoft;
  ctx.fill();
  ctx.strokeStyle = c.border;
  ctx.stroke();

  ctx.fillStyle = c.muted;
  ctx.font = '600 13px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText(
    truncateText(
      ctx,
      isEn ? "GLOBAL RANK & TODAY'S COMPARISON" : 'GLOBALER RANG & VERGLEICH HEUTE',
      rightInnerW
    ),
    rightX + 20,
    cursorY + 18
  );

  if (!params.dayStats || params.dayStats.totalPlayers < 2) {
    ctx.fillStyle = c.accent;
    ctx.font = '700 26px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText(
      truncateText(
        ctx,
        params.dayStats?.totalPlayers === 1
          ? isEn
            ? 'Global Rank: #1 of 1'
            : 'Globaler Rang: #1 von 1'
          : isEn
          ? 'Daily result saved'
          : 'Tagesabschluss gespeichert',
        rightInnerW
      ),
      rightX + 20,
      cursorY + 52
    );
    ctx.fillStyle = c.muted;
    ctx.font = '500 13px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText(
      truncateText(
        ctx,
        isEn
          ? 'First completion today — comparisons update live.'
          : 'Erster Abschluss heute – Vergleiche folgen live.',
        rightInnerW
      ),
      rightX + 20,
      cursorY + 102
    );
  } else {
    const isAboveMedian = params.dayStats.betterThanPercent >= 50;
    const headline = isAboveMedian
      ? isEn
        ? `Better than ${formatDecimalPercent(params.dayStats.betterThanPercent, params.lang)}`
        : `Besser als ${formatDecimalPercent(params.dayStats.betterThanPercent, params.lang)}`
      : isEn
      ? `Lower than ${formatDecimalPercent(params.dayStats.worseThanPercent, params.lang)}`
      : `Schlechter als ${formatDecimalPercent(params.dayStats.worseThanPercent, params.lang)}`;

    ctx.fillStyle = c.accent;
    ctx.font = '700 30px "JetBrains Mono", monospace';
    ctx.fillText(truncateText(ctx, headline, rightInnerW), rightX + 20, cursorY + 48);

    ctx.fillStyle = c.text;
    ctx.font = '600 15px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText(
      truncateText(
        ctx,
        isEn
          ? `Global Rank: #${formatNumberLocale(params.dayStats.rank, params.lang)} of ${formatNumberLocale(params.dayStats.totalPlayers, params.lang)}`
          : `Globaler Rang: #${formatNumberLocale(params.dayStats.rank, params.lang)} von ${formatNumberLocale(params.dayStats.totalPlayers, params.lang)}`,
        rightInnerW
      ),
      rightX + 20,
      cursorY + 96
    );

    ctx.fillStyle = c.muted;
    ctx.font = '500 13px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText(
      truncateText(
        ctx,
        isEn
          ? `Average: ${Math.round(params.dayStats.mean)} / ${params.maxPossibleDailyScore} pts`
          : `Durchschnitt: ${Math.round(params.dayStats.mean)} / ${params.maxPossibleDailyScore} Pkt`,
        rightInnerW
      ),
      rightX + 20,
      cursorY + 120
    );
  }

  cursorY += metricH + 16;

  // Middle Section: Segmented Rounded Distribution Bars (matching site overview)
  const chartBoxH = 148;
  drawRoundedRect(ctx, innerX, cursorY, innerW, chartBoxH, 14);
  ctx.fillStyle = c.cardSoft;
  ctx.fill();
  ctx.strokeStyle = c.border;
  ctx.stroke();

  const plotX = innerX + 24;
  const plotW = innerW - 48;
  const plotTop = cursorY + 38;
  const plotBottom = cursorY + chartBoxH - 28;
  const plotH = plotBottom - plotTop;

  ctx.fillStyle = c.muted;
  ctx.font = '600 12px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText(
    isEn ? "DISTRIBUTION OF TODAY'S SCORES" : 'VERTEILUNG DER HEUTIGEN TAGESPUNKTE',
    innerX + 20,
    cursorY + 13
  );

  const binsToDraw =
    params.dayStats && params.dayStats.bins.length > 0
      ? params.dayStats.bins
      : Array.from({ length: 15 }, (_, idx) => ({
          min: idx * 40,
          max: (idx + 1) * 40,
          count:
            params.totalScore >= idx * 40 &&
            (params.totalScore < (idx + 1) * 40 || (idx === 14 && params.totalScore === 600))
              ? 1
              : 0,
        }));

  const maxBin = Math.max(1, ...binsToDraw.map((b) => b.count));
  const barGap = 8;
  const slotW = (plotW - barGap * (binsToDraw.length - 1)) / binsToDraw.length;

  binsToDraw.forEach((b, idx) => {
    const bx = plotX + idx * (slotW + barGap);
    const isMine =
      params.totalScore >= b.min &&
      (params.totalScore < b.max || (b.max === 600 && params.totalScore === 600));

    if (b.count > 0) {
      const bh = Math.max(18, (b.count / maxBin) * plotH * 0.85);
      ctx.fillStyle = isMine ? c.barActive : c.bar;
      drawRoundedRect(ctx, bx, plotBottom - bh, slotW, bh, 6);
      ctx.fill();

      if (isMine) {
        ctx.fillStyle = c.text;
        ctx.font = '700 12px "Plus Jakarta Sans", system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(isEn ? 'You' : 'Du', bx + slotW / 2, plotBottom - bh - 16);
        ctx.textAlign = 'left';
      }
    } else {
      ctx.fillStyle = c.barEmpty;
      drawRoundedRect(ctx, bx, plotBottom - 4, slotW, 4, 2);
      ctx.fill();
    }
  });

  // Axis endpoints 0 and 600
  ctx.fillStyle = c.muted;
  ctx.font = '600 12px "JetBrains Mono", monospace';
  ctx.textAlign = 'left';
  ctx.fillText('0', plotX, plotBottom + 8);
  ctx.textAlign = 'right';
  ctx.fillText('600', plotX + plotW, plotBottom + 8);
  ctx.textAlign = 'left';

  cursorY += chartBoxH + 16;

  // 5 Rounds Breakdown (without spoiling answer country!)
  const rowsBoxH = 224;
  drawRoundedRect(ctx, innerX, cursorY, innerW, rowsBoxH, 14);
  ctx.fillStyle = c.cardSoft;
  ctx.fill();
  ctx.strokeStyle = c.border;
  ctx.stroke();

  ctx.fillStyle = c.muted;
  ctx.font = '600 12px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText(isEn ? 'YOUR 5 INVENTIONS' : 'DEINE 5 ERFINDUNGEN', innerX + 20, cursorY + 14);

  const rowStartY = cursorY + 40;
  const rowStep = 35;

  params.inventions.forEach((rawInv, idx) => {
    const inv = getLocalizedInvention(rawInv, params.lang);
    const ry = rowStartY + idx * rowStep;
    const r = params.rounds[inv.id];
    const target = COUNTRY_BY_ID.get(inv.countryId);
    const maxPts = getEffectiveMaxPoints(inv, Boolean(r?.hintUsed));
    const isDouble = inv.difficulty === 'sehr_schwer';

    // Reserve plenty of space for 7 squares + right-aligned score so text never touches/overflows
    const sqSize = 14;
    const sqGap = 5;
    const gridX = innerX + innerW - 322;
    const badgeReserve = (isDouble ? 28 : 0) + (r?.hintUsed ? 38 : 0);
    const maxLabelWidth = Math.max(120, gridX - (innerX + 20) - badgeReserve - 16);

    // Round index + name (no country spoiler!)
    ctx.fillStyle = c.text;
    ctx.font = '600 14px "Plus Jakarta Sans", system-ui, sans-serif';
    const prefix = `${idx + 1}. ${inv.name}`;
    const label = truncateText(ctx, prefix, maxLabelWidth);
    ctx.fillText(label, innerX + 20, ry + 4);

    let badgeOffset = innerX + 26 + ctx.measureText(label).width;
    if (isDouble) {
      ctx.fillStyle = c.amber;
      ctx.font = '700 12px "JetBrains Mono", monospace';
      ctx.fillText('2×', badgeOffset, ry + 5);
      badgeOffset += 26;
    }
    if (r?.hintUsed) {
      ctx.fillStyle = c.muted;
      ctx.font = '500 12px "Plus Jakarta Sans", system-ui, sans-serif';
      ctx.fillText(isEn ? 'Hint' : 'Tipp', badgeOffset, ry + 5);
    }

    // 7 Heat Colored Guess Squares
    for (let s = 0; s < 7; s++) {
      const gid = r?.guessIds[s];
      let sqColor = c.dotEmpty;
      if (gid && target) {
        const gCountry = COUNTRY_BY_ID.get(gid);
        if (gCountry) {
          const isCorrect = gCountry.id === target.id;
          const dist = haversineDistanceKm(gCountry, target);
          sqColor = getDistanceHeatColor(dist, isCorrect);
        }
      }
      drawRoundedRect(ctx, gridX + s * (sqSize + sqGap), ry + 4, sqSize, sqSize, 3);
      ctx.fillStyle = sqColor;
      ctx.fill();
    }

    // Score on right
    ctx.textAlign = 'right';
    ctx.fillStyle = r?.status === 'solved' ? c.text : c.muted;
    ctx.font = '700 14px "JetBrains Mono", monospace';
    const attemptsText =
      r?.status === 'solved' ? `${r.guessIds.length}/7 · ` : '– · ';
    ctx.fillText(
      `${attemptsText}${r?.score ?? 0}/${maxPts} ${ptsUnit}`,
      innerX + innerW - 20,
      ry + 4
    );
    ctx.textAlign = 'left';
  });

  const dataUrl = canvas.toDataURL('image/png');
  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((b) => {
      if (b) resolve(b);
      else reject(new Error('PNG export failed'));
    }, 'image/png');
  });

  return { blob, dataUrl };
}

export const ShareResultModal: React.FC<ShareResultModalProps> = ({
  isOpen,
  onClose,
  activeDate,
  formattedDate,
  inventions,
  rounds,
  totalScore,
  maxPossibleDailyScore,
  solvedCount,
  dayStats,
  streakDays,
  playedLast7Count,
  isDark,
  lang = 'de',
  fallbackShareText,
  onShareAction,
}) => {
  const [graphicUrl, setGraphicUrl] = useState<string | null>(null);
  const [graphicBlob, setGraphicBlob] = useState<Blob | null>(null);
  const [copyImageStatus, setCopyImageStatus] = useState<'idle' | 'copied' | 'unsupported'>('idle');
  const [copiedText, setCopiedText] = useState(false);
  const [copiedDuelLink, setCopiedDuelLink] = useState(false);
  const [challengerName, setChallengerName] = useState<string>(loadSavedPlayerName);
  const isEn = lang === 'en';
  const brandName = getBrandName(lang);
  const fileName = `geoorigin-${activeDate}.png`;

  const duelChallenge: DuelChallenge = useMemo(
    () => ({
      version: 1,
      date: activeDate,
      score: totalScore,
      maxScore: maxPossibleDailyScore,
      solvedCount,
      roundScores: inventions.map((inv) => rounds[inv.id]?.score ?? 0),
      challengerName: sanitizeChallengerName(challengerName),
    }),
    [activeDate, totalScore, maxPossibleDailyScore, solvedCount, inventions, rounds, challengerName]
  );

  const duelUrl = useMemo(() => buildDuelUrl(duelChallenge), [duelChallenge]);
  const duelInviteLine = useMemo(
    () => buildDuelInviteText(duelChallenge, lang),
    [duelChallenge, lang]
  );
  const shareTextWithDuel = useMemo(
    () => `${fallbackShareText}\n\n${duelInviteLine}\n${duelUrl}`,
    [fallbackShareText, duelInviteLine, duelUrl]
  );

  useEffect(() => {
    if (!isOpen) return;
    let cancelled = false;
    setCopyImageStatus('idle');
    setCopiedText(false);
    setCopiedDuelLink(false);

    renderShareGraphicBlob({
      formattedDate,
      inventions,
      rounds,
      totalScore,
      maxPossibleDailyScore,
      solvedCount,
      dayStats,
      streakDays,
      playedLast7Count,
      isDark,
      lang,
    })
      .then(({ blob, dataUrl }) => {
        if (!cancelled) {
          setGraphicBlob(blob);
          setGraphicUrl(dataUrl);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setGraphicBlob(null);
          setGraphicUrl(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [
    isOpen,
    formattedDate,
    inventions,
    rounds,
    totalScore,
    maxPossibleDailyScore,
    solvedCount,
    dayStats,
    streakDays,
    playedLast7Count,
    isDark,
    lang,
  ]);

  if (!isOpen) return null;

  const handleCopyImage = async () => {
    if (!graphicBlob) return;
    try {
      if (typeof ClipboardItem !== 'undefined' && navigator.clipboard?.write) {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': graphicBlob })]);
        setCopyImageStatus('copied');
        onShareAction?.('share');
        setTimeout(() => setCopyImageStatus('idle'), 2500);
        return;
      }
      setCopyImageStatus('unsupported');
    } catch {
      setCopyImageStatus('unsupported');
    }
  };

  const handleNativeShare = async () => {
    if (!navigator.share) return;
    try {
      if (graphicBlob) {
        const file = new File([graphicBlob], fileName, {
          type: 'image/png',
        });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: `${brandName} · ${formattedDate}`,
            text: duelInviteLine,
            url: duelUrl,
            files: [file],
          });
          onShareAction?.('share');
          return;
        }
      }
      await navigator.share({
        title: `${brandName} · ${formattedDate}`,
        text: `${duelInviteLine}\n`,
        url: duelUrl,
      });
      onShareAction?.('share');
    } catch {
      // user cancelled or unsupported
    }
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(shareTextWithDuel);
      setCopiedText(true);
      onShareAction?.('share');
      setTimeout(() => setCopiedText(false), 2500);
    } catch {
      setCopiedText(false);
    }
  };

  const handleCopyDuelLink = async () => {
    const payload = `${duelInviteLine}\n${duelUrl}`;
    try {
      await navigator.clipboard.writeText(payload);
      setCopiedDuelLink(true);
      onShareAction?.('share');
      setTimeout(() => setCopiedDuelLink(false), 2500);
    } catch {
      setCopiedDuelLink(false);
    }
  };

  const canNativeShareFiles =
    typeof navigator !== 'undefined' &&
    typeof navigator.share === 'function' &&
    typeof navigator.canShare === 'function';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-modal-title"
        className="w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden rounded-xl border border-[#E2E4DF] dark:border-[#2E3642] bg-white dark:bg-[#171B21] p-4 sm:p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#ECEEE8] dark:border-[#2A313D] pb-2.5 shrink-0">
          <div className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4 text-[#1D4ED8] dark:text-[#60A5FA]" />
            <h2
              id="share-modal-title"
              className="font-display text-lg font-bold text-[#16191D] dark:text-[#F8FAFC]"
            >
              {isEn ? 'Share Result Graphic' : 'Ergebnis-Grafik teilen'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={isEn ? 'Close share dialog' : 'Teilen-Fenster schließen'}
            className="rounded-md p-1.5 text-[#5A6169] dark:text-[#9CA3AF] hover:bg-[#F3F4F0] dark:hover:bg-[#252B36] hover:text-[#16191D] dark:hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-3 overflow-y-auto overscroll-contain flex-1">
          <div className="overflow-hidden rounded-lg border border-[#E2E4DF] dark:border-[#2A313D] bg-[#F6F6F2] dark:bg-[#0E1116]">
            {graphicUrl ? (
              <img
                src={graphicUrl}
                alt={
                  isEn
                    ? `${brandName} result graphic for ${formattedDate}`
                    : `${brandName} Ergebnisgrafik für ${formattedDate}`
                }
                className="block w-full h-auto max-h-[58vh] object-contain"
              />
            ) : (
              <div className="flex h-56 items-center justify-center text-xs text-[#5A6169] dark:text-[#9CA3AF]">
                {isEn ? 'Generating graphic…' : 'Grafik wird erstellt…'}
              </div>
            )}
          </div>

          {copyImageStatus === 'unsupported' && (
            <p className="mt-2 text-xs text-[#B45309] dark:text-[#FBBF24]">
              {isEn
                ? 'Direct image copying is blocked in this browser view — simply download the PNG graphic instead.'
                : 'Direktes Bild-Kopieren wird in diesem Browserfenster blockiert – lade die PNG-Grafik einfach direkt herunter.'}
            </p>
          )}

          {/* Friend Duel / Challenge Link Box */}
          <div className="mt-3 rounded-xl border border-[#F59E0B]/40 bg-[#FFFBEB]/80 dark:bg-[#2A2215]/75 p-3 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#F7A94B] text-[#16191D]">
                  <Swords className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-[#16191D] dark:text-[#FEF3C7]">
                    {isEn ? 'Friend Duel — Challenge Link' : 'Freundes-Duell — Challenge-Link'}
                  </div>
                  <div className="text-[11px] text-[#78350F] dark:text-[#FDE68A] truncate">
                    {duelInviteLine}
                  </div>
                </div>
              </div>

              <input
                type="text"
                maxLength={24}
                value={challengerName}
                onChange={(e) => {
                  setChallengerName(e.target.value);
                  savePlayerName(e.target.value);
                }}
                placeholder={isEn ? 'Your name (optional)' : 'Dein Name (optional)'}
                aria-label={isEn ? 'Your name for the challenge link' : 'Dein Name für den Challenge-Link'}
                className="h-8 w-full sm:w-44 rounded-lg border border-[#E6E2DA] dark:border-[#3A3122] bg-white dark:bg-[#191D24] px-2.5 text-xs text-[#16191D] dark:text-[#F8FAFC] placeholder:text-[#9CA3AF] focus:border-[#F59E0B] focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={duelUrl}
                onFocus={(e) => e.target.select()}
                aria-label={isEn ? 'Challenge link URL' : 'Duell-Link'}
                className="h-8 flex-1 min-w-0 rounded-lg border border-[#E6E2DA] dark:border-[#3A3122] bg-white dark:bg-[#14171D] px-2.5 font-mono-tabular text-[11px] text-[#474D54] dark:text-[#CBD5E1] focus:outline-none"
              />
              <button
                type="button"
                onClick={handleCopyDuelLink}
                className="flex h-8 items-center gap-1.5 rounded-lg bg-[#16191D] dark:bg-[#F7A94B] px-3 text-xs font-semibold text-white dark:text-[#16191D] transition-colors hover:bg-[#2B313B] dark:hover:bg-[#F59E0B] whitespace-nowrap shrink-0"
              >
                {copiedDuelLink ? (
                  <Check className="h-3.5 w-3.5 text-[#4ADE80] dark:text-[#15803D]" />
                ) : (
                  <Link2 className="h-3.5 w-3.5" />
                )}
                {copiedDuelLink
                  ? isEn
                    ? 'Link copied!'
                    : 'Link kopiert!'
                  : isEn
                  ? 'Copy duel link'
                  : 'Duell-Link kopieren'}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <button
            type="button"
            onClick={handleCopyText}
            className="flex h-9 items-center gap-1.5 rounded-lg border border-[#D4D7D0] dark:border-[#2E3642] bg-white dark:bg-[#1F252E] px-3 text-xs font-medium text-[#474D54] dark:text-[#CBD5E1] transition-colors hover:bg-[#F6F6F2] dark:hover:bg-[#2A313D] whitespace-nowrap shrink-0"
          >
            {copiedText ? <Check className="h-3.5 w-3.5 text-[#16A34A]" /> : <Copy className="h-3.5 w-3.5" />}
            {copiedText
              ? isEn
                ? 'Text + link copied'
                : 'Text + Link kopiert'
              : isEn
              ? 'Copy text & link'
              : 'Text & Link kopieren'}
          </button>

          <div className="flex flex-wrap items-center gap-2">
            {(canNativeShareFiles || (typeof navigator !== 'undefined' && typeof navigator.share === 'function')) && (
              <button
                type="button"
                onClick={handleNativeShare}
                className="flex h-9 items-center gap-1.5 rounded-lg border border-[#D4D7D0] dark:border-[#2E3642] bg-white dark:bg-[#1F252E] px-3 text-xs font-semibold text-[#16191D] dark:text-[#F1F5F9] transition-colors hover:bg-[#F6F6F2] dark:hover:bg-[#2A313D] whitespace-nowrap shrink-0"
              >
                <Share2 className="h-3.5 w-3.5" />
                {isEn ? 'Share…' : 'Teilen…'}
              </button>
            )}

            <button
              type="button"
              disabled={!graphicBlob}
              onClick={handleCopyImage}
              className="flex h-9 items-center gap-1.5 rounded-xl border border-[#E6E2DA] dark:border-[#2C323E] bg-white dark:bg-[#191D24] px-3.5 text-xs font-semibold text-[#16191D] dark:text-[#F1F5F9] transition-colors hover:bg-[#F7F5F0] dark:hover:bg-[#232832] disabled:opacity-50 whitespace-nowrap shrink-0"
            >
              {copyImageStatus === 'copied' ? (
                <Check className="h-3.5 w-3.5 text-[#16A34A]" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              {copyImageStatus === 'copied'
                ? isEn
                  ? 'Graphic copied!'
                  : 'Grafik kopiert!'
                : isEn
                ? 'Copy graphic'
                : 'Grafik kopieren'}
            </button>

            {graphicUrl && (
              <a
                href={graphicUrl}
                download={fileName}
                onClick={() => onShareAction?.('download')}
                className="flex h-9 items-center gap-1.5 rounded-xl bg-[#F7A94B] px-3.5 text-xs font-semibold text-[#16191D] transition-colors hover:bg-[#F59E0B] whitespace-nowrap shrink-0"
              >
                <Download className="h-3.5 w-3.5" />
                {isEn ? 'Save PNG' : 'PNG speichern'}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
