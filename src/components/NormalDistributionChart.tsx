import React from 'react';
import { AppLanguage, formatDecimalPercent, formatNumberLocale } from '../i18n/translations';

export interface ScoreBin {
  min: number;
  max: number;
  count: number;
}

interface NormalDistributionChartProps {
  myScore: number;
  mean: number;
  stdDev: number;
  bins: ScoreBin[];
  totalPlayers: number;
  rank: number;
  betterThanPercent: number;
  isDark?: boolean;
  lang?: AppLanguage;
}

export const NormalDistributionChart: React.FC<NormalDistributionChartProps> = ({
  myScore,
  mean,
  bins,
  totalPlayers,
  betterThanPercent,
  lang = 'de',
}) => {
  const safeBins =
    bins.length > 0
      ? bins
      : Array.from({ length: 15 }, (_, idx) => ({
          min: idx * 40,
          max: (idx + 1) * 40,
          count: myScore >= idx * 40 && (myScore < (idx + 1) * 40 || (idx === 14 && myScore === 600)) ? 1 : 0,
        }));

  const maxCount = Math.max(1, ...safeBins.map((b) => b.count));
  const hasMultiplePlayers = totalPlayers >= 2;
  const isAboveMedian = betterThanPercent >= 50;
  const worsePercent = Math.max(0, Math.round((100 - betterThanPercent) * 10) / 10);

  const headline = !hasMultiplePlayers
    ? lang === 'en'
      ? 'First completion today'
      : 'Erster Abschluss heute'
    : isAboveMedian
    ? lang === 'en'
      ? `Better than ${formatDecimalPercent(betterThanPercent, lang)}`
      : `Besser als ${formatDecimalPercent(betterThanPercent, lang)}`
    : lang === 'en'
    ? `Lower than ${formatDecimalPercent(worsePercent, lang)}`
    : `Schlechter als ${formatDecimalPercent(worsePercent, lang)}`;

  return (
    <div className="pt-1">
      <div className="text-center">
        <div className="text-lg font-bold tracking-tight text-[#16191D] dark:text-[#F8FAFC]">
          {headline}
        </div>
        <p className="mt-0.5 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
          {!hasMultiplePlayers
            ? lang === 'en'
              ? 'You finished first today — real results from other players fill these bars live.'
              : 'Du bist heute zuerst fertig – weitere echte Ergebnisse füllen die Balken live.'
            : lang === 'en'
            ? `Avg ${Math.round(mean)} / 600 pts · ${formatNumberLocale(totalPlayers, lang)} real players`
            : `Ø ${Math.round(mean)} / 600 Pkt · ${formatNumberLocale(totalPlayers, lang)} echte Teilnehmende`}
        </p>
      </div>

      {/* Sleek Rounded Segmented Distribution Bars (matching reference style) */}
      <div className="mt-4 px-1">
        <div
          className="flex h-28 items-end gap-1.5"
          role="img"
          aria-label={lang === 'en' ? "Distribution of today's daily scores" : 'Verteilung der heutigen Tagespunkte'}
        >
          {safeBins.map((b, idx) => {
            const isMyBin =
              myScore >= b.min &&
              (myScore < b.max || (b.max === 600 && myScore === 600));
            const hasCount = b.count > 0;
            const heightPct = hasCount ? Math.max(18, Math.round((b.count / maxCount) * 84)) : 0;

            return (
              <div
                key={idx}
                className="flex h-full flex-1 flex-col items-center justify-end"
                title={
                  lang === 'en'
                    ? `${b.min}–${b.max} pts: ${b.count} ${b.count === 1 ? 'player' : 'players'}`
                    : `${b.min}–${b.max} Pkt: ${b.count} Spieler`
                }
              >
                {isMyBin && (
                  <span className="mb-1 text-[11px] font-bold leading-none text-[#16191D] dark:text-[#F8FAFC]">
                    {lang === 'en' ? 'You' : 'Du'}
                  </span>
                )}
                {hasCount ? (
                  <div
                    className={`w-full rounded-md transition-all duration-300 ${
                      isMyBin
                        ? 'bg-[#F7A94B] dark:bg-[#F59E0B]'
                        : 'bg-[#D6D3CB] dark:bg-[#333945]'
                    }`}
                    style={{ height: `${heightPct}%` }}
                  />
                ) : (
                  <div className="h-1 w-full rounded-full bg-[#DFDDD6] dark:bg-[#272C36]" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-1.5 flex items-center justify-between font-mono-tabular text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF]">
          <span>0</span>
          <span>600</span>
        </div>
      </div>
    </div>
  );
};
