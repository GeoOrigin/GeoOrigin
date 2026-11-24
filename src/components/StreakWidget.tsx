import React from 'react';
import { Check, Flame } from 'lucide-react';
import { AppLanguage } from '../i18n/translations';

interface StreakWidgetProps {
  todayDate: string;
  playedDates: string[];
  lang?: AppLanguage;
}

function addDays(dateStr: string, delta: number): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + delta));
  return dt.toISOString().slice(0, 10);
}

const WEEKDAY_SHORT: Record<AppLanguage, string[]> = {
  de: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

export const StreakWidget: React.FC<StreakWidgetProps> = ({ todayDate, playedDates, lang = 'de' }) => {
  const playedSet = new Set(playedDates);

  // Rolling last 7 calendar days ending today
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const dateStr = addDays(todayDate, -(6 - i));
    const [y, m, d] = dateStr.split('-').map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d));
    return {
      dateStr,
      weekday: WEEKDAY_SHORT[lang][dt.getUTCDay()],
      dayNum: d,
      completed: playedSet.has(dateStr),
      isToday: dateStr === todayDate,
    };
  });

  const playedLast7Count = last7Days.filter((d) => d.completed).length;

  // Consecutive streak ending today (or yesterday if today not finished yet)
  let streak = 0;
  let cursor = playedSet.has(todayDate) ? todayDate : addDays(todayDate, -1);
  while (playedSet.has(cursor)) {
    streak++;
    cursor = addDays(cursor, -1);
  }

  return (
    <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-4 shadow-2xs">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-[#16191D] dark:text-[#F1F5F9]">
            {lang === 'en' ? 'Weekly Activity (last 7 days)' : 'Wochenaktivität (letzte 7 Tage)'}
          </h3>
          <p className="mt-0.5 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
            {lang === 'en' ? (
              <>
                Played <span className="font-semibold text-[#16191D] dark:text-[#F1F5F9]">{playedLast7Count} of 7 days</span>
              </>
            ) : (
              <>
                <span className="font-semibold text-[#16191D] dark:text-[#F1F5F9]">{playedLast7Count} von 7 Tagen</span> gespielt
              </>
            )}
          </p>
        </div>

        <div className="flex items-center gap-1.5 font-mono-tabular text-xs font-semibold text-[#16191D] dark:text-[#F1F5F9]">
          <Flame className={`h-3.5 w-3.5 ${streak > 0 ? 'text-[#F59E0B] dark:text-[#FBBF24]' : 'text-[#94A3B8] dark:text-[#64748B]'}`} />
          <span>
            {lang === 'en'
              ? `Streak: ${streak} ${streak === 1 ? 'day' : 'days'}`
              : `Serie: ${streak} ${streak === 1 ? 'Tag' : 'Tage'}`}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1.5">
        {last7Days.map((day) => (
          <div
            key={day.dateStr}
            className={`flex flex-col items-center justify-center rounded-xl border py-2 px-1 transition-colors ${
              day.completed
                ? 'border-[#16A34A]/30 dark:border-[#22C55E]/35 bg-[#F0FDF4] dark:bg-[#052E16]/50 text-[#15803D] dark:text-[#4ADE80]'
                : day.isToday
                ? 'border-[#F59E0B]/45 bg-[#FFFBEB] dark:bg-[#451A03]/30 text-[#B45309] dark:text-[#FBBF24]'
                : 'border-[#E6E2DA] dark:border-[#262B35] bg-[#FAF9F6] dark:bg-[#111317] text-[#6B7280] dark:text-[#9CA3AF]'
            }`}
          >
            <span className="text-[10px] font-medium">{day.weekday}</span>
            <span className="my-0.5 font-mono-tabular text-[11px] font-semibold">
              {lang === 'en' ? day.dayNum : `${day.dayNum}.`}
            </span>
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full ${
                day.completed ? 'bg-[#16A34A] text-white' : 'bg-[#E6E2DA]/80 dark:bg-[#262B35] text-transparent'
              }`}
            >
              <Check className="h-3 w-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
