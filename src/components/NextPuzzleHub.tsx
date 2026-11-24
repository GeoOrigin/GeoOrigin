import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowLeftRight, BarChart3, Clock, Flame, Sparkles } from 'lucide-react';

import { AppLanguage } from '../i18n/translations';

interface NextPuzzleHubProps {
  formattedDate: string;
  totalScore: number;
  maxPossibleDailyScore: number;
  solvedCount: number;
  streakDays: number;
  lang?: AppLanguage;
  onBackToOverview: () => void;
  onViewSolutions: () => void;
  onRefreshToday?: () => void;
}

function getSecondsUntilBerlinMidnight(): number {
  try {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Berlin',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).formatToParts(new Date());

    const hh = Number(parts.find((p) => p.type === 'hour')?.value ?? '0') % 24;
    const mm = Number(parts.find((p) => p.type === 'minute')?.value ?? '0');
    const ss = Number(parts.find((p) => p.type === 'second')?.value ?? '0');

    const elapsedToday = hh * 3600 + mm * 60 + ss;
    const remaining = 86400 - elapsedToday;
    return remaining === 86400 ? 0 : Math.max(0, remaining);
  } catch {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    return Math.max(0, Math.floor((midnight.getTime() - now.getTime()) / 1000));
  }
}

export const NextPuzzleHub: React.FC<NextPuzzleHubProps> = ({
  formattedDate,
  totalScore,
  maxPossibleDailyScore,
  solvedCount,
  streakDays,
  lang = 'de',
  onBackToOverview,
  onViewSolutions,
  onRefreshToday,
}) => {
  const isEn = lang === 'en';
  const [secondsLeft, setSecondsLeft] = useState<number>(getSecondsUntilBerlinMidnight);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSecondsLeft(getSecondsUntilBerlinMidnight());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  const pad2 = (n: number) => String(n).padStart(2, '0');

  return (
    <section id="countdown-hub" className="space-y-4">
      <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-5 sm:p-6 shadow-2xs text-center">
        {/* Bespoke Illustrated Inventor's Workbench & Globe Scene */}
        <div className="atlas-grid-bg relative mx-auto mb-4 flex h-40 w-full items-center justify-center overflow-hidden rounded-xl border border-[#E6E2DA]/80 dark:border-[#262B35] bg-[#FAF8F4] dark:bg-[#13161C]">
          <svg viewBox="0 0 420 156" className="h-full w-full" aria-hidden="true">
            <defs>
              <linearGradient id="hubWindowSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="55%" stopColor="#3B5278" />
                <stop offset="100%" stopColor="#FDBA74" />
              </linearGradient>
              <linearGradient id="hubLampGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
              </linearGradient>
              <clipPath id="hubWindowClip">
                <rect x="44" y="14" width="134" height="86" rx="8" />
              </clipPath>
            </defs>

            {/* Left Background: Framed Workshop Window overlooking Dawn Horizon */}
            <rect
              x="40"
              y="10"
              width="142"
              height="94"
              rx="10"
              fill="#D6BFA0"
              stroke="#16191D"
              strokeWidth="2.2"
            />
            <g clipPath="url(#hubWindowClip)">
              <rect x="44" y="14" width="134" height="86" fill="url(#hubWindowSky)" />
              {/* Rising Sun / Dawn Glow behind distant hills */}
              <circle cx="136" cy="78" r="22" fill="#FDE68A" opacity="0.9" />
              <circle cx="136" cy="78" r="32" fill="#FDBA74" opacity="0.28" />
              {/* Fading Night Stars */}
              <circle cx="64" cy="28" r="1.6" fill="#FEF3C7" className="anim-pulse" />
              <circle cx="88" cy="22" r="1.2" fill="#FEF3C7" />
              <circle cx="114" cy="34" r="1.8" fill="#FEF3C7" className="anim-pulse" />
              {/* Distant Silhouette Hills */}
              <path d="M42 82 Q78 68 116 80 T180 76 L180 104 L42 104 Z" fill="#1E293B" opacity="0.65" />
              <path d="M42 88 Q92 78 134 88 T180 86 L180 104 L42 104 Z" fill="#0F172A" opacity="0.82" />
            </g>
            {/* Window Mullions */}
            <line x1="111" y1="14" x2="111" y2="100" stroke="#16191D" strokeWidth="2.2" />
            <line x1="44" y1="57" x2="178" y2="57" stroke="#16191D" strokeWidth="2.2" />
            <rect x="34" y="102" width="154" height="7" rx="3" fill="#C4A484" stroke="#16191D" strokeWidth="2" />

            {/* Right Background: Cork Pinboard with Tomorrow's Patent Note */}
            <rect x="268" y="16" width="114" height="74" rx="7" fill="#E7D3B5" stroke="#16191D" strokeWidth="2.2" />
            {/* Pinned Blueprint Card */}
            <g transform="translate(279, 25) rotate(-3)">
              <rect x="0" y="0" width="44" height="52" rx="3" fill="#EFF6FF" stroke="#16191D" strokeWidth="1.8" />
              <circle cx="22" cy="21" r="10" fill="none" stroke="#2563EB" strokeWidth="1.5" />
              <path d="M16 21h12M22 15v12" stroke="#2563EB" strokeWidth="1.3" />
              <line x1="9" y1="39" x2="35" y2="39" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
              <line x1="9" y1="45" x2="27" y2="45" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
              <circle cx="22" cy="4" r="3" fill="#EF4444" stroke="#16191D" strokeWidth="1.2" />
            </g>
            {/* Pinned Gear Sketch */}
            <g transform="translate(331, 27) rotate(3)">
              <rect x="0" y="0" width="40" height="46" rx="3" fill="#FFFBEB" stroke="#16191D" strokeWidth="1.8" />
              <text x="20" y="25" textAnchor="middle" fontSize="16" fontWeight="800" fill="#B45309">
                ?
              </text>
              <line x1="8" y1="35" x2="32" y2="35" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
              <circle cx="20" cy="4" r="3" fill="#F59E0B" stroke="#16191D" strokeWidth="1.2" />
            </g>

            {/* Foreground Warm Wooden Inventor's Desk Surface */}
            <rect x="12" y="116" width="396" height="32" rx="6" fill="#D9C3A3" stroke="#16191D" strokeWidth="2.4" />
            <line x1="14" y1="123" x2="406" y2="123" stroke="#C0A27A" strokeWidth="2" />

            {/* Left Desk Object: Classic Brass Hourglass on Wooden Frame */}
            <g transform="translate(52, 69)">
              {/* Ground Shadow */}
              <ellipse cx="22" cy="54" rx="20" ry="3.5" fill="#16191D" opacity="0.16" />
              {/* Brass Posts & Wooden Caps */}
              <line x1="7" y1="6" x2="7" y2="49" stroke="#92400E" strokeWidth="2.4" />
              <line x1="37" y1="6" x2="37" y2="49" stroke="#92400E" strokeWidth="2.4" />
              <rect x="2" y="2" width="40" height="6" rx="2.5" fill="#B45309" stroke="#16191D" strokeWidth="2" />
              <rect x="2" y="47" width="40" height="6" rx="2.5" fill="#B45309" stroke="#16191D" strokeWidth="2" />
              {/* Glass Bulbs */}
              <path
                d="M11 8 H33 C33 20 25 25 22 27.5 C25 30 33 35 33 47 H11 C11 35 19 30 22 27.5 C19 25 11 20 11 8 Z"
                fill="#FFFFFF"
                fillOpacity="0.82"
                stroke="#16191D"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              {/* Upper & Lower Amber Sand */}
              <path d="M15 16 H29 C28 22 24 25 22 26.5 C20 25 16 22 15 16 Z" fill="#F59E0B" />
              <path d="M13 46 H31 C30 39 25 37 22 36 C19 37 14 39 13 46 Z" fill="#F7A94B" />
              {/* Falling Sand Stream */}
              <line x1="22" y1="27" x2="22" y2="37" stroke="#F59E0B" strokeWidth="2" className="anim-pulse" />
            </g>

            {/* Left-Center Desk Object: Rolled Patent Scroll tied with Amber Ribbon */}
            <g transform="translate(108, 101)">
              <ellipse cx="26" cy="21" rx="24" ry="3" fill="#16191D" opacity="0.14" />
              <rect x="2" y="4" width="48" height="15" rx="6" fill="#FEF3C7" stroke="#16191D" strokeWidth="2" />
              <ellipse cx="47" cy="11.5" rx="4" ry="7.5" fill="#FDE68A" stroke="#16191D" strokeWidth="1.8" />
              <rect x="21" y="3.5" width="7" height="16" rx="1" fill="#F59E0B" stroke="#16191D" strokeWidth="1.6" />
            </g>

            {/* Centerpiece: Classic Brass Desk Globe on Turned Wooden Stand */}
            <g transform="translate(210, 74)">
              {/* Desk Shadow */}
              <ellipse cx="0" cy="49" rx="30" ry="4.5" fill="#16191D" opacity="0.18" />
              {/* Turned Wooden Base & Stem */}
              <path d="M-20 48 L20 48 L15 41 L-15 41 Z" fill="#92400E" stroke="#16191D" strokeWidth="2" strokeLinejoin="round" />
              <rect x="-4" y="32" width="8" height="10" fill="#B45309" stroke="#16191D" strokeWidth="2" />
              {/* Brass Meridian Arc */}
              <path
                d="M-6 -39 A40 40 0 0 1 31 24 L24 31 A42 42 0 0 1 -26 32"
                fill="none"
                stroke="#D97706"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <path
                d="M-6 -39 A40 40 0 0 1 31 24"
                fill="none"
                stroke="#16191D"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Globe Sphere */}
              <g className="anim-float">
                <circle cx="0" cy="0" r="32" fill="#BAE6FD" stroke="#16191D" strokeWidth="2.4" />
                {/* Continents */}
                <path
                  d="M-20 -12 C-12 -18 -2 -16 4 -9 C8 -5 2 2 -5 4 C-12 6 -22 0 -20 -12 Z"
                  fill="#22C55E"
                  stroke="#15803D"
                  strokeWidth="1.4"
                />
                <path
                  d="M8 -22 C16 -22 25 -14 26 -4 C27 6 19 16 11 14 C6 12 7 2 10 -4 C12 -10 4 -18 8 -22 Z"
                  fill="#22C55E"
                  stroke="#15803D"
                  strokeWidth="1.4"
                />
                <path
                  d="M-14 12 C-7 10 0 14 2 21 C-4 26 -14 25 -18 19 C-19 15 -17 13 -14 12 Z"
                  fill="#16A34A"
                  stroke="#15803D"
                  strokeWidth="1.4"
                />
                {/* Latitude / Longitude Lines */}
                <ellipse cx="0" cy="0" rx="14" ry="32" fill="none" stroke="#0284C7" strokeWidth="1.2" opacity="0.45" />
                <line x1="-31" y1="0" x2="31" y2="0" stroke="#0284C7" strokeWidth="1.2" opacity="0.45" />
                {/* Specular Highlight */}
                <path d="M-19 -19 A24 24 0 0 1 -6 -25" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                {/* Glowing Amber Map Pin */}
                <g transform="translate(10, -24)" className="anim-pulse">
                  <path
                    d="M0 14 C0 14 -7 7 -7 2 A7 7 0 1 1 7 2 C7 7 0 14 0 14 Z"
                    fill="#F59E0B"
                    stroke="#16191D"
                    strokeWidth="1.8"
                  />
                  <circle cx="0" cy="2" r="2.4" fill="#FFFBEB" />
                </g>
              </g>
            </g>

            {/* Right Desk Object: Folded Expedition Map & Brass Pocket Compass */}
            <g transform="translate(268, 102)">
              <ellipse cx="28" cy="20" rx="26" ry="3.5" fill="#16191D" opacity="0.15" />
              <polygon points="0,12 18,4 36,12 52,5 56,19 36,24 18,17 2,23" fill="#FEF9C3" stroke="#16191D" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M12 13 Q24 9 38 15" fill="none" stroke="#EA580C" strokeWidth="1.5" strokeDasharray="3 2" />
              {/* Pocket Compass */}
              <circle cx="42" cy="8" r="10" fill="#F7A94B" stroke="#16191D" strokeWidth="2" />
              <circle cx="42" cy="8" r="6.5" fill="#FFFFFF" stroke="#16191D" strokeWidth="1.3" />
              <polygon points="42,3 44.5,8 42,13 39.5,8" fill="#DC2626" />
            </g>

            {/* Far Right Desk Object: Warm Articulated Idea Lamp */}
            <g transform="translate(344, 52)">
              {/* Light Cone */}
              <polygon points="-14,18 6,18 24,72 -48,72" fill="url(#hubLampGlow)" />
              {/* Lamp Base & Arm */}
              <ellipse cx="22" cy="70" rx="14" ry="3.5" fill="#16191D" opacity="0.16" />
              <path d="M10 69 H34 L31 62 H13 Z" fill="#334155" stroke="#16191D" strokeWidth="2" strokeLinejoin="round" />
              <polyline points="22,62 32,34 8,12" fill="none" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="32" cy="34" r="3.5" fill="#F59E0B" stroke="#16191D" strokeWidth="1.6" />
              {/* Lamp Shade & Glowing Bulb */}
              <path d="M-12 18 L12 8 L16 20 L-6 26 Z" fill="#F7A94B" stroke="#16191D" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="0" cy="22" r="4.5" fill="#FEF08A" stroke="#16191D" strokeWidth="1.4" className="anim-pulse" />
            </g>
          </svg>
        </div>

        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B45309] dark:text-[#FBBF24]">
          <Sparkles className="h-3.5 w-3.5" />
          <span>{isEn ? `${formattedDate} completed` : `${formattedDate} abgeschlossen`}</span>
        </div>

        <h2 className="mt-1 font-display text-2xl font-bold text-[#16191D] dark:text-[#F8FAFC]">
          {isEn ? 'Until the next edition!' : 'Bis zur nächsten Ausgabe!'}
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF]">
          {isEn
            ? 'The next 5 inventions from around the world unlock in:'
            : 'Die nächsten 5 Erfindungen aus aller Welt werden freigeschaltet in:'}
        </p>

        {/* Live Countdown Tiles */}
        {secondsLeft > 0 ? (
          <div className="mx-auto mt-4 flex max-w-[340px] items-center justify-center gap-2">
            <div className="flex-1 rounded-xl border border-[#E6E2DA] dark:border-[#2C323E] bg-[#F7F5F0] dark:bg-[#111317] px-2 py-3">
              <div className="font-mono-tabular text-3xl font-extrabold tracking-tight text-[#16191D] dark:text-[#F8FAFC]">
                {pad2(hours)}
              </div>
              <div className="mt-0.5 text-[11px] font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                {isEn ? 'Hrs' : 'Std'}
              </div>
            </div>

            <span className="font-mono-tabular text-2xl font-bold text-[#9CA3AF]" aria-hidden="true">
              :
            </span>

            <div className="flex-1 rounded-xl border border-[#E6E2DA] dark:border-[#2C323E] bg-[#F7F5F0] dark:bg-[#111317] px-2 py-3">
              <div className="font-mono-tabular text-3xl font-extrabold tracking-tight text-[#16191D] dark:text-[#F8FAFC]">
                {pad2(minutes)}
              </div>
              <div className="mt-0.5 text-[11px] font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                Min
              </div>
            </div>

            <span className="font-mono-tabular text-2xl font-bold text-[#9CA3AF]" aria-hidden="true">
              :
            </span>

            <div className="flex-1 rounded-xl border border-[#F59E0B]/40 dark:border-[#F59E0B]/35 bg-[#FFFBEB] dark:bg-[#2A2215] px-2 py-3">
              <div className="font-mono-tabular text-3xl font-extrabold tracking-tight text-[#B45309] dark:text-[#FBBF24]">
                {pad2(seconds)}
              </div>
              <div className="mt-0.5 text-[11px] font-medium text-[#92400E] dark:text-[#FDE68A]">
                {isEn ? 'Sec' : 'Sek'}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-[#16A34A]/35 bg-[#F0FDF4] dark:bg-[#052E16]/40 p-3">
            <p className="text-xs font-semibold text-[#15803D] dark:text-[#4ADE80]">
              {isEn
                ? "It's midnight — today's new puzzle set is ready!"
                : 'Es ist Mitternacht – das neue Tagesrätsel ist bereit!'}
            </p>
            {onRefreshToday && (
              <button
                type="button"
                onClick={onRefreshToday}
                className="mt-2 rounded-lg bg-[#16A34A] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#15803D]"
              >
                {isEn ? 'Load new puzzle' : 'Neues Rätsel laden'}
              </button>
            )}
          </div>
        )}

        <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
          <Clock className="h-3 w-3 text-[#F59E0B]" />
          <span>
            {isEn ? 'Resets at 00:00 (Berlin time)' : 'Neuer Tag um 00:00 Uhr (Berliner Zeit)'}
          </span>
        </div>

        {/* Compact Daily Score & Streak Strip */}
        <div className="mt-5 grid grid-cols-3 divide-x divide-[#E6E2DA] dark:divide-[#262B35] rounded-xl border border-[#E6E2DA] dark:border-[#262B35] bg-[#FAF9F6] dark:bg-[#111317] py-2.5">
          <div className="px-2">
            <div className="font-mono-tabular text-base font-bold text-[#16191D] dark:text-[#F8FAFC]">
              {totalScore}
              <span className="text-xs font-normal text-[#6B7280] dark:text-[#9CA3AF]">
                /{maxPossibleDailyScore}
              </span>
            </div>
            <div className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
              {isEn ? 'Points' : 'Punkte'}
            </div>
          </div>

          <div className="px-2">
            <div className="font-mono-tabular text-base font-bold text-[#16191D] dark:text-[#F8FAFC]">
              {solvedCount}/5
            </div>
            <div className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
              {isEn ? 'Solved' : 'Gelöst'}
            </div>
          </div>

          <div className="px-2">
            <div className="flex items-center justify-center gap-1 font-mono-tabular text-base font-bold text-[#16191D] dark:text-[#F8FAFC]">
              <Flame className={`h-3.5 w-3.5 ${streakDays > 0 ? 'text-[#F59E0B] fill-[#F59E0B]' : 'text-[#9CA3AF]'}`} />
              <span>{streakDays}</span>
            </div>
            <div className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
              {isEn ? 'Day Streak' : 'Tage-Serie'}
            </div>
          </div>
        </div>

        {/* Visual 5-Slot Preview of Tomorrow's Format */}
        <div className="mt-4 rounded-xl border border-dashed border-[#E6E2DA] dark:border-[#2C323E] bg-[#FAF9F6] dark:bg-[#111317] p-3">
          <div className="mb-2 text-[11px] font-semibold text-[#6B7280] dark:text-[#9CA3AF]">
            {isEn ? 'Freshly shuffled for tomorrow' : 'Morgen neu für dich gemischt'}
          </div>
          <div className="grid grid-cols-5 gap-1.5">
            {(isEn
              ? ['Standard', 'Standard', 'Tricky', 'Tricky', '2× Points']
              : ['Standard', 'Standard', 'Knifflig', 'Knifflig', '2× Punkte']
            ).map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-lg border py-1.5 text-center ${
                  idx === 4
                    ? 'border-[#F59E0B]/40 bg-[#FFFBEB] dark:bg-[#2A2215] text-[#B45309] dark:text-[#FBBF24]'
                    : 'border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] text-[#5A6169] dark:text-[#9CA3AF]'
                }`}
              >
                <div className="font-mono-tabular text-xs font-bold">?</div>
                <div className="text-[9px] font-medium leading-tight">{tier}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={onBackToOverview}
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#F7A94B] px-4 text-sm font-semibold text-[#16191D] transition-colors hover:bg-[#F59E0B] whitespace-nowrap"
          >
            <BarChart3 className="h-4 w-4" />
            {isEn ? 'Back to Overview' : 'Zurück zur Übersicht'}
          </button>
          <button
            type="button"
            onClick={onViewSolutions}
            className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[#E6E2DA] dark:border-[#2C323E] bg-white dark:bg-[#191D24] px-4 text-sm font-medium text-[#474D54] dark:text-[#CBD5E1] transition-colors hover:bg-[#F7F5F0] dark:hover:bg-[#232832] hover:text-[#16191D] dark:hover:text-white whitespace-nowrap"
          >
            <ArrowLeftRight className="h-4 w-4" />
            {isEn ? 'Solutions' : 'Lösungen'}
          </button>
        </div>
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={onBackToOverview}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#16191D] dark:hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {isEn ? 'Back to your stats & QR code' : 'Zurück zu deinen Statistiken & QR-Code'}
        </button>
      </div>
    </section>
  );
};
