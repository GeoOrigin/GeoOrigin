import React from 'react';
import { Equal, Share2, Swords, Trophy, X } from 'lucide-react';
import { Invention } from '../data/inventions';
import { AppLanguage } from '../i18n/translations';
import { DuelChallenge } from '../utils/duel';

interface DuelComparisonCardProps {
  duel: DuelChallenge;
  mode: 'banner' | 'summary';
  myScore?: number;
  myMaxScore?: number;
  mySolvedCount?: number;
  myRoundScores?: number[];
  inventions?: Invention[];
  lang?: AppLanguage;
  onDismiss?: () => void;
  onChallengeBack?: () => void;
}

export const DuelComparisonCard: React.FC<DuelComparisonCardProps> = ({
  duel,
  mode,
  myScore = 0,
  myMaxScore = 600,
  mySolvedCount = 0,
  myRoundScores = [],
  inventions = [],
  lang = 'de',
  onDismiss,
  onChallengeBack,
}) => {
  const isEn = lang === 'en';
  const challengerLabel = duel.challengerName || (isEn ? 'Your Friend' : 'Herausforderer');
  const ptsUnit = isEn ? 'pts' : 'Pkt';

  if (mode === 'banner') {
    return (
      <div className="mb-3.5 flex items-center justify-between gap-2.5 rounded-2xl border border-[#F59E0B]/45 bg-[#FFFBEB] dark:bg-[#2A2215] px-3.5 py-2.5 text-xs shadow-2xs">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F7A94B] text-[#16191D]">
            <Swords className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-[#16191D] dark:text-[#FEF3C7] truncate">
              {isEn ? `Friend Duel vs. ${challengerLabel}` : `Freundes-Duell vs. ${challengerLabel}`}
            </div>
            <div className="text-[11px] text-[#92400E] dark:text-[#FDE68A]">
              {isEn
                ? `Target to beat: ${duel.score} ${ptsUnit} (${duel.solvedCount}/5 solved)`
                : `Zielwert: > ${duel.score} ${ptsUnit} (${duel.solvedCount}/5 gelöst)`}
            </div>
          </div>
        </div>

        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label={isEn ? 'Dismiss challenge banner' : 'Duell-Hinweis ausblenden'}
            title={isEn ? 'Dismiss challenge' : 'Duell ausblenden'}
            className="rounded-lg p-1.5 text-[#92400E] dark:text-[#FDE68A] hover:bg-[#FEF3C7] dark:hover:bg-[#3A2E1A] shrink-0"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    );
  }

  const delta = myScore - duel.score;
  const didWin = delta > 0;
  const isTie = delta === 0;

  return (
    <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-4 sm:p-5 shadow-2xs space-y-3.5">
      {/* Header Row with Outcome Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFFBEB] dark:bg-[#2A2215] border border-[#F59E0B]/35 text-[#D97706] dark:text-[#FBBF24]">
            <Swords className="h-3.5 w-3.5" />
          </span>
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-[#16191D] dark:text-[#F8FAFC]">
              {isEn ? 'Friend Duel — Head-to-Head' : 'Freundes-Duell — Direktvergleich'}
            </h3>
            <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
              {isEn ? `You vs. ${challengerLabel}` : `Du gegen ${challengerLabel}`}
            </p>
          </div>
        </div>

        <div
          className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-bold font-mono-tabular ${
            didWin
              ? 'bg-[#F0FDF4] dark:bg-[#052E16]/50 text-[#15803D] dark:text-[#4ADE80] border border-[#16A34A]/35'
              : isTie
              ? 'bg-[#FFFBEB] dark:bg-[#2A2215] text-[#B45309] dark:text-[#FBBF24] border border-[#F59E0B]/35'
              : 'bg-[#FEF2F2] dark:bg-[#450A0A]/40 text-[#B91C1C] dark:text-[#F87171] border border-[#DC2626]/30'
          }`}
        >
          {didWin ? (
            <>
              <Trophy className="h-3.5 w-3.5" />
              <span>{isEn ? `Victory (+${delta} ${ptsUnit})` : `Sieg (+${delta} ${ptsUnit})`}</span>
            </>
          ) : isTie ? (
            <>
              <Equal className="h-3.5 w-3.5" />
              <span>{isEn ? 'Tie!' : 'Unentschieden!'}</span>
            </>
          ) : (
            <span>{isEn ? `${delta} ${ptsUnit}` : `${delta} ${ptsUnit} zurück`}</span>
          )}
        </div>
      </div>

      {/* Side-by-Side Total Score Cards */}
      <div className="grid grid-cols-2 gap-2.5">
        <div
          className={`rounded-xl border p-3 text-center ${
            didWin
              ? 'border-[#16A34A]/45 bg-[#F0FDF4]/60 dark:bg-[#052E16]/30'
              : 'border-[#E6E2DA] dark:border-[#262B35] bg-[#FAF9F6] dark:bg-[#111317]'
          }`}
        >
          <div className="text-[11px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] truncate">
            {isEn ? 'You' : 'Du'}
          </div>
          <div className="mt-1 font-mono-tabular text-2xl sm:text-3xl font-extrabold text-[#16191D] dark:text-[#F8FAFC]">
            {myScore}
          </div>
          <div className="mt-0.5 text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
            / {myMaxScore} {ptsUnit} · {mySolvedCount}/5
          </div>
        </div>

        <div
          className={`rounded-xl border p-3 text-center ${
            !didWin && !isTie
              ? 'border-[#F59E0B]/55 bg-[#FFFBEB]/70 dark:bg-[#2A2215]/70'
              : 'border-[#E6E2DA] dark:border-[#262B35] bg-[#FAF9F6] dark:bg-[#111317]'
          }`}
        >
          <div className="text-[11px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] truncate">
            {challengerLabel}
          </div>
          <div className="mt-1 font-mono-tabular text-2xl sm:text-3xl font-extrabold text-[#16191D] dark:text-[#F8FAFC]">
            {duel.score}
          </div>
          <div className="mt-0.5 text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
            / {duel.maxScore} {ptsUnit} · {duel.solvedCount}/5
          </div>
        </div>
      </div>

      {/* 5-Round Mini Breakdown */}
      <div className="grid grid-cols-5 gap-1.5">
        {duel.roundScores.map((oppScore, idx) => {
          const mine = myRoundScores[idx] ?? 0;
          const roundWon = mine > oppScore;
          const roundLost = mine < oppScore;
          const isDouble = inventions[idx]?.difficulty === 'sehr_schwer';
          return (
            <div
              key={idx}
              className={`rounded-lg border px-1.5 py-2 text-center font-mono-tabular ${
                roundWon
                  ? 'border-[#16A34A]/35 bg-[#F0FDF4]/60 dark:bg-[#052E16]/25'
                  : roundLost
                  ? 'border-[#DC2626]/25 bg-[#FEF2F2]/50 dark:bg-[#450A0A]/20'
                  : 'border-[#E6E2DA] dark:border-[#262B35] bg-[#FAF9F6] dark:bg-[#111317]'
              }`}
            >
              <div className="text-[10px] font-semibold text-[#6B7280] dark:text-[#9CA3AF]">
                R{idx + 1}
                {isDouble ? '·2×' : ''}
              </div>
              <div className="mt-0.5 text-xs font-bold text-[#16191D] dark:text-[#F8FAFC]">
                {mine}
              </div>
              <div className="text-[10px] text-[#6B7280] dark:text-[#9CA3AF]">vs {oppScore}</div>
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
        {onChallengeBack && (
          <button
            type="button"
            onClick={onChallengeBack}
            className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#F7A94B] px-3 text-xs font-semibold text-[#16191D] transition-colors hover:bg-[#F59E0B] whitespace-nowrap"
          >
            <Share2 className="h-3.5 w-3.5" />
            {isEn ? 'Challenge back with your score' : 'Mit eigenem Ergebnis zurückfordern'}
          </button>
        )}
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            className="h-9 rounded-xl border border-[#E6E2DA] dark:border-[#2C323E] bg-white dark:bg-[#191D24] px-3 text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#16191D] dark:hover:text-white whitespace-nowrap"
          >
            {isEn ? 'Hide duel' : 'Ausblenden'}
          </button>
        )}
      </div>
    </div>
  );
};
