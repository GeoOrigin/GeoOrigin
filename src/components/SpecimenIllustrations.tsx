import React from 'react';
import { renderExtendedSpecimen } from './SpecimenIllustrationsExtended';

const INK = '#1E293B';

export const SpecimenIllustration: React.FC<{ artworkKey: string }> = ({ artworkKey }) => {
  const extended = renderExtendedSpecimen(artworkKey);
  if (extended) return extended;

  switch (artworkKey) {
    // === TODAY'S 5 FLAGSHIP INVENTIONS ===
    case 'fries':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            {/* Pommes-Tüte + knusprige Stäbchen */}
            <g>
              <rect x="86" y="34" width="12" height="58" rx="4" transform="rotate(-12 92 63)" fill="#FACC15" stroke={INK} strokeWidth="2.5" />
              <rect x="103" y="24" width="12" height="64" rx="4" transform="rotate(-4 109 56)" fill="#FDE047" stroke={INK} strokeWidth="2.5" />
              <rect x="120" y="22" width="12" height="66" rx="4" transform="rotate(3 126 55)" fill="#FACC15" stroke={INK} strokeWidth="2.5" />
              <rect x="136" y="30" width="12" height="58" rx="4" transform="rotate(10 142 59)" fill="#FDE047" stroke={INK} strokeWidth="2.5" />
              <rect x="148" y="42" width="11" height="48" rx="4" transform="rotate(18 153 66)" fill="#EAB308" stroke={INK} strokeWidth="2.5" />
            </g>
            <path d="M78 72l42 66 42-66c-14 8-28 11-42 11s-28-3-42-11z" fill="#DC2626" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <path d="M98 92h44l-14 26h-16z" fill="#FEF2F2" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
            <circle cx="62" cy="54" r="3" fill="#FACC15" />
            <circle cx="176" cy="48" r="2.5" fill="#FDE047" />
          </g>
        </svg>
      );

    case 'chess':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Schachbrett-Ausschnitt + Springer & König */}
          <ellipse cx="120" cy="136" rx="68" ry="12" fill="#CBD5E1" stroke={INK} strokeWidth="2.5" />
          <g>
            {/* Turm links */}
            <path d="M62 128h28l-4-44H66l-4 44z" fill="#F8FAFC" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M62 74h6v10h5V74h6v10h5V74h6v14H62V74z" fill="#F8FAFC" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
            {/* König Mitte */}
            <path d="M104 130h32l-6-62h-20l-6 62z" fill="#334155" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="120" cy="58" r="10" fill="#475569" stroke={INK} strokeWidth="2.5" />
            <path d="M120 34v14M114 40h12" stroke="#FACC15" strokeWidth="3.5" strokeLinecap="round" />
            {/* Bauer rechts */}
            <path d="M156 128h24l-5-34h-14l-5 34z" fill="#FDE68A" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="168" cy="84" r="9" fill="#FDE68A" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'croissant':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <ellipse cx="120" cy="132" rx="64" ry="13" fill="#F1F5F9" stroke={INK} strokeWidth="2.5" />
          <g>
            <path
              d="M54 106c12-34 38-54 66-54s54 20 66 54c-14 8-28 0-34-12-10-18-54-18-64 0-6 12-20 20-34 12z"
              fill="#F59E0B"
              stroke={INK}
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path d="M88 58c6 12 6 22 2 34M120 52c0 14 0 24 0 34M152 58c-6 12-6 22-2 34" stroke="#92400E" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M98 64c8-3 18-4 28-3" stroke="#FEF3C7" strokeWidth="3" strokeLinecap="round" />
          </g>
          <path d="M98 40c-3-8 4-12 1-19M122 36c-3-8 4-12 1-19M144 40c-3-8 4-12 1-19" stroke="#94A3B8" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'cube':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            {/* Isometrischer Zauberwürfel */}
            <polygon points="120,24 176,54 120,84 64,54" fill="#FACC15" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
            <polygon points="64,54 120,84 120,140 64,110" fill="#2563EB" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
            <polygon points="120,84 176,54 176,110 120,140" fill="#DC2626" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
            {/* Bunte Teilfelder */}
            <polygon points="120,44 139,54 120,64 101,54" fill="#F8FAFC" stroke={INK} strokeWidth="2" />
            <polygon points="83,84 101,94 101,112 83,102" fill="#22C55E" stroke={INK} strokeWidth="2" />
            <polygon points="139,74 157,64 157,82 139,92" fill="#FB923C" stroke={INK} strokeWidth="2" />
            {/* Gitterlinien */}
            <path d="M83 44l56 30M101 34l56 30M157 44l-56 30M139 34l-56 30" stroke={INK} strokeWidth="2" />
            <path d="M83 64v56M101 74v56M64 73l56 30M64 92l56 30" stroke={INK} strokeWidth="2" />
            <path d="M139 74v56M157 64v56M120 103l56-30M120 122l56-30" stroke={INK} strokeWidth="2" />
          </g>
        </svg>
      );

    case 'blackbox':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="64" y="42" width="112" height="82" rx="10" fill="#EA580C" stroke={INK} strokeWidth="3" />
            <rect x="74" y="54" width="92" height="58" rx="5" fill="#F97316" stroke={INK} strokeWidth="2" />
            {/* Reflektorstreifen */}
            <rect x="82" y="64" width="76" height="10" rx="2" fill="#FEF08A" stroke={INK} strokeWidth="1.5" />
            <rect x="82" y="88" width="44" height="14" rx="2" fill="#1E293B" />
            {/* Blinkende LED + Funkwellen */}
            <circle cx="148" cy="95" r="5" fill="#22C55E" stroke={INK} strokeWidth="1.5" />
            <path d="M150 34c8-8 20-8 28 0M156 26c12-10 26-10 38 0" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="88" y="34" width="14" height="8" rx="2" fill="#475569" stroke={INK} strokeWidth="2" />
            <rect x="138" y="34" width="14" height="8" rx="2" fill="#475569" stroke={INK} strokeWidth="2" />
          </g>
        </svg>
      );

    // === ALL REMAINING CATALOG KEYS ===
    case 'jeans':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M80 22h80l14 118h-38l-16-68-16 68H66L80 22z" fill="#3B82F6" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <path d="M82 32h76M120 22v46" stroke="#FBBF24" strokeWidth="2" strokeDasharray="4 3" />
            <circle cx="88" cy="46" r="3.5" fill="#D97706" stroke={INK} strokeWidth="1.5" />
            <circle cx="152" cy="46" r="3.5" fill="#D97706" stroke={INK} strokeWidth="1.5" />
            <path d="M88 46c0 14 12 18 22 18M152 46c0 14-12 18-22 18" stroke="#FBBF24" strokeWidth="2" fill="none" />
          </g>
        </svg>
      );

    case 'coffee':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <ellipse cx="120" cy="132" rx="54" ry="11" fill="#E2E8F0" stroke={INK} strokeWidth="2.5" />
          <path d="M78 70h84l-8 52c-2 8-14 12-34 12s-32-4-34-12l-8-52z" fill="#FFFBEB" stroke={INK} strokeWidth="3" />
          <ellipse cx="120" cy="70" rx="42" ry="10" fill="#78350F" stroke={INK} strokeWidth="2.5" />
          <path d="M162 80c16 0 20 22 2 28l-7 2" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
          <path d="M104 52c-4-9 6-13 2-22M122 50c-4-9 6-13 2-22M140 54c-4-9 6-13 2-22" stroke="#94A3B8" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'compass':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <circle cx="120" cy="88" r="48" fill="#FDE68A" stroke={INK} strokeWidth="3.5" />
          <circle cx="120" cy="88" r="39" fill="#FFFBEB" stroke="#B45309" strokeWidth="1.8" />
          <circle cx="120" cy="30" r="7" fill="none" stroke={INK} strokeWidth="3" />
          <g>
            <polygon points="120,54 127,88 120,88" fill="#EF4444" stroke={INK} strokeWidth="1.5" />
            <polygon points="120,54 113,88 120,88" fill="#DC2626" stroke={INK} strokeWidth="1.5" />
            <polygon points="120,122 127,88 120,88" fill="#475569" stroke={INK} strokeWidth="1.5" />
            <polygon points="120,122 113,88 120,88" fill="#1E293B" stroke={INK} strokeWidth="1.5" />
            <circle cx="120" cy="88" r="5" fill="#F59E0B" stroke={INK} strokeWidth="1.5" />
          </g>
        </svg>
      );

    case 'blocks':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="60" y="84" width="120" height="46" rx="4" fill="#EF4444" stroke={INK} strokeWidth="3" />
          <rect x="72" y="74" width="20" height="10" rx="2" fill="#F87171" stroke={INK} strokeWidth="2" />
          <rect x="110" y="74" width="20" height="10" rx="2" fill="#F87171" stroke={INK} strokeWidth="2" />
          <rect x="148" y="74" width="20" height="10" rx="2" fill="#F87171" stroke={INK} strokeWidth="2" />
          <g>
            <rect x="92" y="42" width="66" height="30" rx="4" fill="#FACC15" stroke={INK} strokeWidth="3" />
            <rect x="103" y="33" width="16" height="9" rx="2" fill="#FEF08A" stroke={INK} strokeWidth="2" />
            <rect x="131" y="33" width="16" height="9" rx="2" fill="#FEF08A" stroke={INK} strokeWidth="2" />
          </g>
        </svg>
      );

    case 'press':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="54" y="122" width="132" height="16" rx="3" fill="#78350F" stroke={INK} strokeWidth="2.5" />
          <rect x="70" y="40" width="13" height="82" fill="#92400E" stroke={INK} strokeWidth="2.5" />
          <rect x="157" y="40" width="13" height="82" fill="#92400E" stroke={INK} strokeWidth="2.5" />
          <rect x="64" y="32" width="112" height="14" rx="3" fill="#78350F" stroke={INK} strokeWidth="2.5" />
          <g>
            <rect x="112" y="46" width="16" height="34" fill="#64748B" stroke={INK} strokeWidth="2" />
            <rect x="88" y="80" width="64" height="14" rx="2" fill="#475569" stroke={INK} strokeWidth="2.5" />
            <path d="M128 62h44" stroke={INK} strokeWidth="5" strokeLinecap="round" />
          </g>
          <rect x="84" y="108" width="72" height="14" rx="2" fill="#FEFCE8" stroke={INK} strokeWidth="2" />
        </svg>
      );

    case 'piano':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="46" y="42" width="148" height="82" rx="8" fill="#334155" stroke={INK} strokeWidth="3" />
            <rect x="56" y="76" width="128" height="40" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" />
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <line key={i} x1={72 + i * 16} y1="76" x2={72 + i * 16} y2="116" stroke="#CBD5E1" strokeWidth="1.5" />
            ))}
            {[0, 1, 3, 4, 5, 7].map((i) => (
              <rect key={i} x={66 + i * 16} y="76" width="9" height="22" rx="1.5" fill={INK} />
            ))}
            <text x="168" y="34" fontSize="18" fill="#3B82F6">♪</text>
            <text x="58" y="36" fontSize="16" fill="#F59E0B">♫</text>
          </g>
        </svg>
      );

    case 'knife':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M138 72l52-24c-4 18-16 30-38 36z" fill="#E2E8F0" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M84 76l-28-32c16-4 30 4 40 20z" fill="#CBD5E1" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
            <rect x="56" y="76" width="112" height="32" rx="16" fill="#EF4444" stroke={INK} strokeWidth="3" />
            <path d="M104 92h14M111 85v14" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'sauna':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Holzofen + heiße Steine + Dampf */}
          <rect x="76" y="78" width="88" height="54" rx="6" fill="#B45309" stroke={INK} strokeWidth="3" />
          <line x1="76" y1="96" x2="164" y2="96" stroke={INK} strokeWidth="2" />
          <line x1="76" y1="114" x2="164" y2="114" stroke={INK} strokeWidth="2" />
          <ellipse cx="102" cy="74" rx="12" ry="8" fill="#64748B" stroke={INK} strokeWidth="2.5" />
          <ellipse cx="122" cy="70" rx="13" ry="9" fill="#475569" stroke={INK} strokeWidth="2.5" />
          <ellipse cx="140" cy="74" rx="11" ry="8" fill="#64748B" stroke={INK} strokeWidth="2.5" />
          <path d="M96 56c-5-10 6-14 2-26M120 52c-5-10 6-14 2-26M144 56c-5-10 6-14 2-26" stroke="#93C5FD" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'dynamite':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="66" y="72" width="84" height="18" rx="4" fill="#DC2626" stroke={INK} strokeWidth="2.5" />
            <rect x="66" y="90" width="84" height="18" rx="4" fill="#EF4444" stroke={INK} strokeWidth="2.5" />
            <rect x="86" y="70" width="10" height="40" fill="#1E293B" />
            <rect x="122" y="70" width="10" height="40" fill="#1E293B" />
            <path d="M150 90c18-2 22-24 14-36" fill="none" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
            <circle cx="164" cy="52" r="8" fill="#FACC15" stroke="#EA580C" strokeWidth="2" />
          </g>
        </svg>
      );

    case 'petri':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="120" cy="82" r="48" fill="#E0F2FE" stroke={INK} strokeWidth="3" />
            <circle cx="120" cy="82" r="40" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1.5" />
            <circle cx="102" cy="70" r="8" fill="#4ADE80" stroke={INK} strokeWidth="2" />
            <circle cx="136" cy="76" r="10" fill="#22C55E" stroke={INK} strokeWidth="2" />
            <circle cx="114" cy="100" r="7" fill="#86EFAC" stroke={INK} strokeWidth="2" />
            <circle cx="138" cy="102" r="4" fill="#4ADE80" stroke={INK} strokeWidth="1.5" />
          </g>
        </svg>
      );

    case 'telescope':
    case 'microscope':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <line x1="120" y1="84" x2="86" y2="138" stroke="#475569" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="120" y1="84" x2="154" y2="138" stroke="#475569" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="120" y1="84" x2="120" y2="140" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
          <g transform="rotate(-22 120 74)">
            <rect x="58" y="60" width="112" height="22" rx="4" fill="#D97706" stroke={INK} strokeWidth="2.8" />
            <rect x="164" y="64" width="24" height="14" rx="2" fill="#F59E0B" stroke={INK} strokeWidth="2.5" />
            <ellipse cx="58" cy="71" rx="6" ry="12" fill="#7DD3FC" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'balloon':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M120 16c30 0 48 22 48 48 0 24-20 40-28 52h-40c-8-12-28-28-28-52 0-26 18-48 48-48z" fill="#FB923C" stroke={INK} strokeWidth="3" />
            <path d="M120 16c14 0 22 22 22 48s-9 40-12 52h-20c-3-12-12-28-12-52s8-48 22-48z" fill="#FACC15" stroke={INK} strokeWidth="2" />
            <line x1="106" y1="116" x2="110" y2="128" stroke={INK} strokeWidth="2" />
            <line x1="134" y1="116" x2="130" y2="128" stroke={INK} strokeWidth="2" />
            <rect x="106" y="128" width="28" height="14" rx="2" fill="#92400E" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'tetris':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="68" y="20" width="104" height="122" rx="6" fill="#1E293B" stroke={INK} strokeWidth="3" />
          {[
            [78, 114, '#06B6D4'], [98, 114, '#06B6D4'], [118, 114, '#06B6D4'], [138, 114, '#06B6D4'],
            [78, 94, '#F59E0B'], [78, 74, '#F59E0B'], [98, 94, '#F59E0B'],
            [118, 94, '#A855F7'], [138, 94, '#A855F7'], [118, 74, '#A855F7'],
          ].map(([x, y, c], idx) => (
            <rect key={idx} x={Number(x)} y={Number(y)} width="19" height="19" rx="2" fill={String(c)} stroke="#0F172A" strokeWidth="2" />
          ))}
          <g>
            <rect x="98" y="32" width="19" height="19" rx="2" fill="#EF4444" stroke="#0F172A" strokeWidth="2" />
            <rect x="118" y="32" width="19" height="19" rx="2" fill="#EF4444" stroke="#0F172A" strokeWidth="2" />
            <rect x="118" y="52" width="19" height="19" rx="2" fill="#EF4444" stroke="#0F172A" strokeWidth="2" />
          </g>
        </svg>
      );

    case 'noodles':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <path d="M68 78h104c-4 34-24 54-52 54s-48-20-52-54z" fill="#EF4444" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <path d="M74 78c10-14 82-14 92 0" fill="#FDE047" stroke={INK} strokeWidth="2.5" />
          <line x1="138" y1="68" x2="180" y2="34" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
          <line x1="148" y1="74" x2="188" y2="44" stroke="#92400E" strokeWidth="4" strokeLinecap="round" />
          <path d="M98 54c-4-9 6-13 2-22M118 50c-4-9 6-13 2-22" stroke="#94A3B8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'potato':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M70 86c0-28 24-46 54-44 30 2 48 18 48 42s-22 42-54 42c-30 0-48-16-48-40z" fill="#D97706" stroke={INK} strokeWidth="3" />
            <circle cx="96" cy="74" r="3" fill="#78350F" />
            <circle cx="132" cy="68" r="2.5" fill="#78350F" />
            <circle cx="144" cy="94" r="3" fill="#78350F" />
            <circle cx="106" cy="100" r="2.5" fill="#78350F" />
            <path d="M118 42c-4-12 6-20 14-22" stroke="#16A34A" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'cacao':
    case 'chocolate':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="78" y="28" width="84" height="104" rx="5" fill="#78350F" stroke={INK} strokeWidth="3" />
            {[0, 1, 2].map((r) =>
              [0, 1].map((c) => (
                <rect key={`${r}-${c}`} x={87 + c * 35} y={37 + r * 30} width="30" height="24" rx="2" fill="#92400E" stroke="#451A03" strokeWidth="2" />
              ))
            )}
            <path d="M74 84h92l4 48H70l4-48z" fill="#EF4444" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          </g>
        </svg>
      );

    case 'boomerang':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M58 118c14-44 52-72 118-68 8 0 10 12 0 15-52 6-78 26-92 62-4 10-20 8-26-9z" fill="#D97706" stroke={INK} strokeWidth="3" />
            <path d="M134 56l12 12M148 54l11 11" stroke="#FEF08A" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'scroll':
    case 'book':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="64" y="34" width="112" height="92" rx="4" fill="#FEF3C7" stroke={INK} strokeWidth="3" />
            <circle cx="64" cy="40" r="9" fill="#D97706" stroke={INK} strokeWidth="2.5" />
            <circle cx="176" cy="40" r="9" fill="#D97706" stroke={INK} strokeWidth="2.5" />
            <circle cx="64" cy="120" r="9" fill="#D97706" stroke={INK} strokeWidth="2.5" />
            <circle cx="176" cy="120" r="9" fill="#D97706" stroke={INK} strokeWidth="2.5" />
            <path d="M84 56h72M84 72h64M84 88h70M84 104h48" stroke="#92400E" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'tie':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <polygon points="106,24 134,24 127,46 113,46" fill="#1D4ED8" stroke={INK} strokeWidth="2.8" />
            <polygon points="113,46 127,46 140,114 120,138 100,114" fill="#2563EB" stroke={INK} strokeWidth="2.8" />
            <line x1="109" y1="68" x2="132" y2="80" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" />
            <line x1="105" y1="92" x2="136" y2="106" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'tulip':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <line x1="120" y1="78" x2="120" y2="138" stroke="#15803D" strokeWidth="5" strokeLinecap="round" />
            <path d="M120 120c-22-4-28-20-26-30 12 2 22 12 26 30z" fill="#22C55E" stroke={INK} strokeWidth="2" />
            <path d="M94 44c0 22 12 34 26 34s26-12 26-34l-13 13-13-18-13 18z" fill="#EF4444" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
          </g>
        </svg>
      );

    case 'vial':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="102" y="34" width="36" height="14" rx="2" fill="#94A3B8" stroke={INK} strokeWidth="2.5" />
            <rect x="96" y="48" width="48" height="84" rx="8" fill="#E0F2FE" stroke={INK} strokeWidth="3" />
            <rect x="99" y="84" width="42" height="45" rx="5" fill="#38BDF8" />
            <path d="M112 72h16M120 64v16" stroke="#EF4444" strokeWidth="3.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'velcro':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M62 110h116v18H62z" fill="#3B82F6" stroke={INK} strokeWidth="2.8" />
            <path d="M68 58c38-18 76-18 110 2l-10 22c-34-12-66-12-96 2z" fill="#60A5FA" stroke={INK} strokeWidth="2.8" />
            {[78, 96, 114, 132, 150].map((x) => (
              <path key={x} d={`M${x} 110c0-8 7-8 7-2`} fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
            ))}
          </g>
        </svg>
      );

    case 'bottle':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="108" y="24" width="24" height="16" rx="3" fill="#3B82F6" stroke={INK} strokeWidth="2.5" />
            <path d="M90 52c0-8 10-12 30-12s30 4 30 12v74c0 8-8 12-30 12s-30-4-30-12V52z" fill="#7DD3FC" stroke={INK} strokeWidth="3" />
            <circle cx="80" cy="42" r="5" fill="#BAE6FD" stroke={INK} strokeWidth="1.5" />
            <circle cx="164" cy="54" r="6" fill="#E0F2FE" stroke={INK} strokeWidth="1.5" />
          </g>
        </svg>
      );

    case 'pen':
    case 'fountainpen':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g transform="rotate(-32 120 82)">
            <rect x="66" y="72" width="88" height="18" rx="4" fill="#2563EB" stroke={INK} strokeWidth="2.8" />
            <polygon points="154,72 186,81 154,90" fill="#FACC15" stroke={INK} strokeWidth="2.5" />
            <line x1="166" y1="81" x2="186" y2="81" stroke={INK} strokeWidth="1.8" />
            <rect x="80" y="67" width="38" height="5" rx="2" fill="#F59E0B" stroke={INK} strokeWidth="1.5" />
          </g>
        </svg>
      );

    case 'snowglobe':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <circle cx="120" cy="70" r="46" fill="#DBEAFE" stroke={INK} strokeWidth="3" />
          <polygon points="120,48 100,88 140,88" fill="#16A34A" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M84 112h72l8 24H76l8-24z" fill="#78350F" stroke={INK} strokeWidth="3" />
          <circle cx="102" cy="52" r="2.5" fill="#FFFFFF" />
          <circle cx="136" cy="58" r="2.5" fill="#FFFFFF" />
          <circle cx="110" cy="68" r="2" fill="#FFFFFF" />
        </svg>
      );

    case 'mop':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <line x1="120" y1="22" x2="120" y2="104" stroke="#B45309" strokeWidth="6" strokeLinecap="round" />
            <rect x="92" y="100" width="56" height="14" rx="4" fill="#3B82F6" stroke={INK} strokeWidth="2.5" />
            <path d="M88 114l-8 24h80l-8-24z" fill="#F8FAFC" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M104 114v24M120 114v24M136 114v24" stroke="#94A3B8" strokeWidth="2" />
          </g>
        </svg>
      );

    case 'foosball':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="54" y="42" width="132" height="76" rx="6" fill="#16A34A" stroke={INK} strokeWidth="3" />
          <line x1="42" y1="68" x2="198" y2="68" stroke="#94A3B8" strokeWidth="4" />
          <line x1="42" y1="94" x2="198" y2="94" stroke="#94A3B8" strokeWidth="4" />
          <circle cx="90" cy="68" r="8" fill="#EF4444" stroke={INK} strokeWidth="2" />
          <circle cx="150" cy="68" r="8" fill="#EF4444" stroke={INK} strokeWidth="2" />
          <circle cx="120" cy="94" r="8" fill="#FACC15" stroke={INK} strokeWidth="2" />
          <circle cx="120" cy="80" r="5" fill="#FFFFFF" stroke={INK} strokeWidth="1.5" />
        </svg>
      );

    case 'seatbelt':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M56 34l92 92" stroke="#334155" strokeWidth="14" strokeLinecap="round" />
            <rect x="108" y="64" width="38" height="28" rx="4" fill="#CBD5E1" stroke={INK} strokeWidth="2.5" />
            <rect x="122" y="70" width="14" height="16" rx="2" fill="#EF4444" stroke={INK} strokeWidth="1.5" />
          </g>
        </svg>
      );

    case 'wrench':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g transform="rotate(-30 120 80)">
            <path d="M74 72h86a10 10 0 010 18H74a18 18 0 110-18z" fill="#94A3B8" stroke={INK} strokeWidth="3" />
            <circle cx="72" cy="81" r="10" fill="#F1F5F9" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'stethoscope':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M86 30v38c0 22 16 36 34 36s34-14 34-36V30" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
            <path d="M120 104v20c0 12 26 16 38 4l12-14" fill="none" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
            <circle cx="174" cy="108" r="13" fill="#CBD5E1" stroke={INK} strokeWidth="3" />
            <circle cx="174" cy="108" r="5" fill="#64748B" />
          </g>
        </svg>
      );

    case 'braille':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="64" y="34" width="112" height="92" rx="8" fill="#FEFCE8" stroke={INK} strokeWidth="3" />
          {[
            [86, 58, true], [108, 58, false], [86, 80, true], [108, 80, true], [86, 102, false], [108, 102, false],
            [134, 58, true], [156, 58, true], [134, 80, false], [156, 80, true], [134, 102, true], [156, 102, false],
          ].map(([x, y, on], idx) => (
            <circle key={idx} cx={Number(x)} cy={Number(y)} r="6" fill={on ? '#1D4ED8' : '#E2E8F0'} stroke={INK} strokeWidth="1.8" />
          ))}
        </svg>
      );

    case 'battery':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="66" y="48" width="108" height="78" rx="8" fill="#334155" stroke={INK} strokeWidth="3" />
            <rect x="84" y="36" width="20" height="12" rx="2" fill="#94A3B8" stroke={INK} strokeWidth="2.5" />
            <rect x="136" y="36" width="20" height="12" rx="2" fill="#94A3B8" stroke={INK} strokeWidth="2.5" />
            <path d="M126 66l-14 22h12l-6 20 18-24h-12z" fill="#FACC15" />
          </g>
        </svg>
      );

    case 'glasses':
    case 'sunglasses':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="84" cy="88" r="26" fill={artworkKey === 'sunglasses' ? '#334155' : '#BAE6FD'} stroke={INK} strokeWidth="4" />
            <circle cx="156" cy="88" r="26" fill={artworkKey === 'sunglasses' ? '#334155' : '#BAE6FD'} stroke={INK} strokeWidth="4" />
            <path d="M110 86c6-6 14-6 20 0M58 84L42 58M182 84l16-26" stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      );

    case 'pill':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g transform="rotate(-25 120 80)">
            <rect x="68" y="60" width="52" height="40" rx="20" fill="#EF4444" stroke={INK} strokeWidth="3" />
            <rect x="116" y="60" width="56" height="40" rx="20" fill="#F8FAFC" stroke={INK} strokeWidth="3" />
            <line x1="120" y1="60" x2="120" y2="100" stroke={INK} strokeWidth="3" />
          </g>
        </svg>
      );

    case 'thermos':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="96" y="24" width="48" height="22" rx="4" fill="#CBD5E1" stroke={INK} strokeWidth="2.8" />
            <rect x="92" y="46" width="56" height="86" rx="8" fill="#DC2626" stroke={INK} strokeWidth="3" />
            <rect x="92" y="76" width="56" height="24" fill="#F8FAFC" stroke={INK} strokeWidth="2" />
          </g>
        </svg>
      );

    case 'corkscrew':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="74" y="34" width="92" height="16" rx="8" fill="#78350F" stroke={INK} strokeWidth="3" />
            <path d="M120 50v18c10 4 10 12 0 16s-10 12 0 16 10 12 0 16v14" fill="none" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'cassette':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="52" y="42" width="136" height="80" rx="8" fill="#334155" stroke={INK} strokeWidth="3" />
          <rect x="66" y="54" width="108" height="42" rx="4" fill="#FEF3C7" stroke={INK} strokeWidth="2" />
          <circle cx="94" cy="75" r="10" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" />
          <circle cx="146" cy="75" r="10" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" />
          <rect x="90" y="106" width="60" height="12" rx="2" fill="#1E293B" />
        </svg>
      );

    case 'qrcode':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="68" y="28" width="104" height="104" rx="6" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
          <rect x="78" y="38" width="24" height="24" fill="none" stroke={INK} strokeWidth="4.5" />
          <rect x="86" y="46" width="8" height="8" fill={INK} />
          <rect x="138" y="38" width="24" height="24" fill="none" stroke={INK} strokeWidth="4.5" />
          <rect x="146" y="46" width="8" height="8" fill={INK} />
          <rect x="78" y="98" width="24" height="24" fill="none" stroke={INK} strokeWidth="4.5" />
          <rect x="86" y="106" width="8" height="8" fill={INK} />
          <rect x="114" y="72" width="14" height="14" fill="#1D4ED8" />
          <rect x="136" y="98" width="22" height="12" fill={INK} />
        </svg>
      );

    case 'emoji':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="120" cy="80" r="46" fill="#FACC15" stroke={INK} strokeWidth="3" />
            <circle cx="103" cy="70" r="5" fill={INK} />
            <circle cx="137" cy="70" r="5" fill={INK} />
            <path d="M98 94c10 14 34 14 44 0" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
            <circle cx="90" cy="86" r="5" fill="#FB7185" opacity="0.6" />
            <circle cx="150" cy="86" r="5" fill="#FB7185" opacity="0.6" />
          </g>
        </svg>
      );

    case 'zero':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="64" y="28" width="112" height="104" rx="14" fill="#FEF3C7" stroke={INK} strokeWidth="3" />
            <ellipse cx="120" cy="80" rx="24" ry="34" fill="none" stroke="#1D4ED8" strokeWidth="9" />
          </g>
        </svg>
      );

    case 'banknote':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="52" y="44" width="136" height="72" rx="6" fill="#86EFAC" stroke={INK} strokeWidth="3" />
            <rect x="62" y="54" width="116" height="52" rx="3" fill="none" stroke="#15803D" strokeWidth="2" />
            <circle cx="120" cy="80" r="18" fill="#DCFCE7" stroke="#15803D" strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'doner':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M62 84c0-28 28-46 58-46s58 18 58 46z" fill="#F59E0B" stroke={INK} strokeWidth="3" />
            <path d="M68 84c14 6 24-6 36 0s24 6 36 0 24 6 32 0" fill="none" stroke="#16A34A" strokeWidth="6" strokeLinecap="round" />
            <path d="M68 92h104c-8 24-26 36-52 36s-44-12-52-36z" fill="#FDE68A" stroke={INK} strokeWidth="3" />
          </g>
        </svg>
      );

    case 'coin':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="106" cy="84" r="38" fill="#FACC15" stroke={INK} strokeWidth="3" />
            <circle cx="138" cy="76" r="38" fill="#FDE047" stroke={INK} strokeWidth="3" />
            <circle cx="138" cy="76" r="27" fill="none" stroke="#B45309" strokeWidth="2" strokeDasharray="4 3" />
          </g>
        </svg>
      );

    case 'heart':
    case 'pacemaker':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M120 128s-48-28-48-60c0-18 14-30 30-30 10 0 18 6 18 14 0-8 8-14 18-14 16 0 30 12 30 30 0 32-48 60-48 60z" fill="#EF4444" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <path d="M84 78h16l8-16 12 28 10-16h26" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );

    case 'tea':
    case 'teabag':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <path d="M74 68h88l-8 54c-3 10-18 14-36 14s-33-4-36-14l-8-54z" fill="#FFFBEB" stroke={INK} strokeWidth="3" />
          <path d="M162 78c14 0 18 20 2 26" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
          <path d="M120 68v20M120 68l-16-8v20" stroke={INK} strokeWidth="2" fill="none" />
          <rect x="96" y="84" width="16" height="20" rx="2" fill="#EF4444" stroke={INK} strokeWidth="2" />
          <path d="M104 48c-4-9 6-13 2-22M126 46c-4-9 6-13 2-22" stroke="#94A3B8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'sms':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="86" y="24" width="68" height="112" rx="10" fill="#334155" stroke={INK} strokeWidth="3" />
            <rect x="94" y="36" width="52" height="82" rx="4" fill="#E0F2FE" />
            <rect x="100" y="48" width="38" height="18" rx="6" fill="#3B82F6" />
            <rect x="104" y="74" width="36" height="18" rx="6" fill="#22C55E" />
          </g>
        </svg>
      );

    case 'math':
    case 'alphabet':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="54" y="30" width="132" height="96" rx="8" fill="#1E3A8A" stroke={INK} strokeWidth="3" />
            <text x="120" y="90" textAnchor="middle" fill="#FEF08A" fontSize="34" fontWeight="700" fontFamily="serif">
              {artworkKey === 'math' ? 'x + y = z' : 'A B Γ Δ'}
            </text>
          </g>
        </svg>
      );

    case 'tempura':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <ellipse cx="120" cy="116" rx="66" ry="18" fill="#F8FAFC" stroke={INK} strokeWidth="3" />
          <g>
            <path d="M84 96c14-34 52-38 72-10-12 18-48 24-72 10z" fill="#FBBF24" stroke={INK} strokeWidth="2.8" />
            <polygon points="154,78 176,68 170,90" fill="#FB923C" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'lighthouse':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <polygon points="104,138 136,138 128,54 112,54" fill="#F8FAFC" stroke={INK} strokeWidth="2.8" />
          <polygon points="109,94 131,94 133,112 107,112" fill="#EF4444" />
          <rect x="108" y="38" width="24" height="16" fill="#FACC15" stroke={INK} strokeWidth="2.5" />
          <polygon points="104,38 120,22 136,38" fill={INK} />
          <polygon points="132,46 206,24 206,68" fill="#FEF08A" opacity="0.7" />
        </svg>
      );

    case 'gum':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="120" cy="78" r="42" fill="#F472B6" stroke={INK} strokeWidth="3" />
            <path d="M98 60c8-10 22-12 32-8" fill="none" stroke="#FCE7F3" strokeWidth="4" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'alarm':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="84" cy="40" r="14" fill="#FACC15" stroke={INK} strokeWidth="2.8" />
            <circle cx="156" cy="40" r="14" fill="#FACC15" stroke={INK} strokeWidth="2.8" />
            <circle cx="120" cy="84" r="42" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
            <line x1="120" y1="84" x2="120" y2="58" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
            <line x1="120" y1="84" x2="140" y2="94" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'microwave':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="54" y="42" width="132" height="80" rx="8" fill="#E2E8F0" stroke={INK} strokeWidth="3" />
          <rect x="64" y="54" width="84" height="56" rx="4" fill="#334155" stroke={INK} strokeWidth="2" />
          <circle cx="166" cy="64" r="6" fill="#F59E0B" stroke={INK} strokeWidth="2" />
          <circle cx="166" cy="84" r="6" fill="#3B82F6" stroke={INK} strokeWidth="2" />
          <rect x="86" y="76" width="40" height="18" rx="4" fill="#FACC15" />
        </svg>
      );

    case 'tire':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="120" cy="80" r="48" fill="#334155" stroke={INK} strokeWidth="3" />
            <circle cx="120" cy="80" r="26" fill="#CBD5E1" stroke={INK} strokeWidth="3" />
            <line x1="120" y1="54" x2="120" y2="106" stroke={INK} strokeWidth="3" />
            <line x1="94" y1="80" x2="146" y2="80" stroke={INK} strokeWidth="3" />
          </g>
        </svg>
      );

    case 'bag':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M84 44h72l10 88H74l10-88z" fill="#38BDF8" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <path d="M98 44c0-16 44-16 44 0" fill="none" stroke={INK} strokeWidth="3" />
          </g>
        </svg>
      );

    case 'mic':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="112" y="66" width="16" height="62" rx="4" fill="#334155" stroke={INK} strokeWidth="2.8" />
            <circle cx="120" cy="52" r="20" fill="#94A3B8" stroke={INK} strokeWidth="3" />
            <line x1="100" y1="52" x2="140" y2="52" stroke={INK} strokeWidth="2" />
            <text x="156" y="42" fontSize="18" fill="#EC4899">♫</text>
          </g>
        </svg>
      );

    case 'windmill':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <polygon points="94,138 146,138 134,64 106,64" fill="#F1F5F9" stroke={INK} strokeWidth="3" />
          <g>
            <line x1="120" y1="64" x2="82" y2="26" stroke="#92400E" strokeWidth="5" strokeLinecap="round" />
            <line x1="120" y1="64" x2="158" y2="102" stroke="#92400E" strokeWidth="5" strokeLinecap="round" />
            <line x1="120" y1="64" x2="158" y2="26" stroke="#92400E" strokeWidth="5" strokeLinecap="round" />
            <line x1="120" y1="64" x2="82" y2="102" stroke="#92400E" strokeWidth="5" strokeLinecap="round" />
            <circle cx="120" cy="64" r="6" fill="#D97706" stroke={INK} strokeWidth="2" />
          </g>
        </svg>
      );

    case 'ornament':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="112" y="28" width="16" height="12" rx="2" fill="#FACC15" stroke={INK} strokeWidth="2" />
            <circle cx="120" cy="84" r="42" fill="#DC2626" stroke={INK} strokeWidth="3" />
            <path d="M84 84c20 12 52 12 72 0" fill="none" stroke="#FDE047" strokeWidth="4" />
            <circle cx="104" cy="66" r="6" fill="#FCA5A5" />
          </g>
        </svg>
      );

    case 'skateboard':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M54 84h132c10 0 14-8 16-12" fill="none" stroke="#EF4444" strokeWidth="10" strokeLinecap="round" />
            <path d="M54 84c-10 0-14-8-16-12" fill="none" stroke="#EF4444" strokeWidth="10" strokeLinecap="round" />
            <circle cx="78" cy="100" r="10" fill="#FACC15" stroke={INK} strokeWidth="2.5" />
            <circle cx="162" cy="100" r="10" fill="#FACC15" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'lollipop':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <line x1="120" y1="84" x2="120" y2="142" stroke="#E2E8F0" strokeWidth="5" strokeLinecap="round" />
            <circle cx="120" cy="58" r="32" fill="#EC4899" stroke={INK} strokeWidth="3" />
            <path d="M120 58c0-10 14-10 14 0s-22 18-22 0 28-24 28 0" fill="none" stroke="#FCE7F3" strokeWidth="3.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'saw':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="60" y="64" width="54" height="36" rx="6" fill="#EA580C" stroke={INK} strokeWidth="3" />
            <rect x="114" y="72" width="70" height="20" rx="10" fill="#CBD5E1" stroke={INK} strokeWidth="3" />
            <circle cx="174" cy="82" r="5" fill={INK} />
          </g>
        </svg>
      );

    case 'fingerprint':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            {[16, 26, 36, 46].map((r, i) => (
              <circle key={i} cx="120" cy="80" r={r} fill="none" stroke="#1D4ED8" strokeWidth="3.5" strokeDasharray="34 10" />
            ))}
          </g>
        </svg>
      );

    case 'tv':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <line x1="104" y1="44" x2="86" y2="24" stroke={INK} strokeWidth="3" strokeLinecap="round" />
          <line x1="136" y1="44" x2="154" y2="24" stroke={INK} strokeWidth="3" strokeLinecap="round" />
          <rect x="58" y="44" width="124" height="84" rx="10" fill="#B45309" stroke={INK} strokeWidth="3" />
          <rect x="68" y="54" width="84" height="64" rx="6" fill="#60A5FA" stroke={INK} strokeWidth="2.5" />
          <rect x="94" y="54" width="28" height="64" fill="#FACC15" opacity="0.85" />
          <rect x="122" y="54" width="30" height="64" fill="#EF4444" opacity="0.85" />
          <circle cx="166" cy="70" r="6" fill="#CBD5E1" stroke={INK} strokeWidth="2" />
          <circle cx="166" cy="92" r="6" fill="#CBD5E1" stroke={INK} strokeWidth="2" />
        </svg>
      );

    case 'propeller':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <ellipse cx="120" cy="48" rx="14" ry="28" fill="#D97706" stroke={INK} strokeWidth="2.8" />
            <ellipse cx="148" cy="98" rx="26" ry="14" transform="rotate(30 148 98)" fill="#D97706" stroke={INK} strokeWidth="2.8" />
            <ellipse cx="92" cy="98" rx="26" ry="14" transform="rotate(-30 92 98)" fill="#D97706" stroke={INK} strokeWidth="2.8" />
            <circle cx="120" cy="82" r="10" fill="#FACC15" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'wifi':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <path d="M58 64c34-28 90-28 124 0" fill="none" stroke="#2563EB" strokeWidth="7" strokeLinecap="round" />
          <path d="M80 86c22-18 58-18 80 0" fill="none" stroke="#3B82F6" strokeWidth="7" strokeLinecap="round" />
          <path d="M100 106c12-10 28-10 40 0" fill="none" stroke="#60A5FA" strokeWidth="7" strokeLinecap="round" />
          <circle cx="120" cy="124" r="8" fill="#1D4ED8" stroke={INK} strokeWidth="2" />
        </svg>
      );

    case 'hologram':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <ellipse cx="120" cy="126" rx="46" ry="10" fill="#334155" stroke={INK} strokeWidth="2.5" />
          <polygon points="84,42 156,42 136,122 104,122" fill="#38BDF8" opacity="0.28" />
          <polygon points="120,34 148,58 120,84 92,58" fill="#7DD3FC" stroke="#0284C7" strokeWidth="2.5" />
        </svg>
      );

    case 'submarine':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M116 34v22h20" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
            <rect x="94" y="48" width="38" height="22" rx="4" fill="#FACC15" stroke={INK} strokeWidth="2.8" />
            <ellipse cx="120" cy="92" rx="64" ry="26" fill="#FACC15" stroke={INK} strokeWidth="3" />
            <circle cx="96" cy="92" r="7" fill="#7DD3FC" stroke={INK} strokeWidth="2" />
            <circle cx="120" cy="92" r="7" fill="#7DD3FC" stroke={INK} strokeWidth="2" />
            <circle cx="144" cy="92" r="7" fill="#7DD3FC" stroke={INK} strokeWidth="2" />
          </g>
        </svg>
      );

    case 'furnace':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <polygon points="86,132 154,132 140,42 100,42" fill="#9A3412" stroke={INK} strokeWidth="3" />
          <path d="M108 132c0-20 24-20 24 0" fill="#FACC15" stroke="#EA580C" strokeWidth="2" />
          <path d="M112 34c-4-9 6-13 2-20M128 34c-4-9 6-13 2-20" stroke="#94A3B8" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'freeze':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <line x1="120" y1="32" x2="120" y2="128" stroke="#0284C7" strokeWidth="5" strokeLinecap="round" />
            <line x1="72" y1="80" x2="168" y2="80" stroke="#0284C7" strokeWidth="5" strokeLinecap="round" />
            <line x1="86" y1="46" x2="154" y2="114" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
            <line x1="154" y1="46" x2="86" y2="114" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'butter':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <ellipse cx="120" cy="116" rx="68" ry="14" fill="#F1F5F9" stroke={INK} strokeWidth="2.8" />
            <polygon points="74,78 148,78 164,94 90,94" fill="#FEF08A" stroke={INK} strokeWidth="2.5" />
            <rect x="74" y="94" width="74" height="22" fill="#FACC15" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'scanner':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <circle cx="120" cy="80" r="46" fill="#E2E8F0" stroke={INK} strokeWidth="3" />
          <circle cx="120" cy="80" r="24" fill="#1E293B" stroke={INK} strokeWidth="2.5" />
          <circle cx="120" cy="80" r="34" fill="none" stroke="#38BDF8" strokeWidth="3" strokeDasharray="16 10" />
        </svg>
      );

    case 'university':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <polygon points="120,26 56,58 184,58" fill="#D97706" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <rect x="64" y="58" width="112" height="68" fill="#FEF3C7" stroke={INK} strokeWidth="3" />
          {[78, 102, 126, 150].map((x) => (
            <rect key={x} x={x} y="66" width="12" height="52" fill="#FDE68A" stroke={INK} strokeWidth="2" />
          ))}
        </svg>
      );

    case 'windtower':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="92" y="34" width="56" height="96" rx="4" fill="#FDE68A" stroke={INK} strokeWidth="3" />
          <rect x="102" y="44" width="10" height="44" fill="#78350F" />
          <rect x="128" y="44" width="10" height="44" fill="#78350F" />
          <path d="M62 56h24M154 56h24" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    case 'parachute':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M64 68c0-32 112-32 112 0z" fill="#EF4444" stroke={INK} strokeWidth="3" />
            <line x1="72" y1="68" x2="120" y2="116" stroke={INK} strokeWidth="2" />
            <line x1="120" y1="68" x2="120" y2="116" stroke={INK} strokeWidth="2" />
            <line x1="168" y1="68" x2="120" y2="116" stroke={INK} strokeWidth="2" />
            <circle cx="120" cy="124" r="8" fill="#3B82F6" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'foil':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="56" y="54" width="94" height="36" rx="18" fill="#CBD5E1" stroke={INK} strokeWidth="3" />
            <ellipse cx="150" cy="72" rx="10" ry="18" fill="#94A3B8" stroke={INK} strokeWidth="2.5" />
            <path d="M84 90h84l14 30H98z" fill="#E2E8F0" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'audio':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {[56, 74, 92, 110, 128, 146, 164, 182].map((x, idx) => {
            const h = [26, 48, 70, 42, 82, 54, 34, 22][idx];
            return (
              <rect
                key={x}
                x={x - 5}
                y={80 - h / 2}
                width="10"
                height={h}
                rx="5"
                fill={idx % 2 === 0 ? '#2563EB' : '#60A5FA'}
                stroke={INK}
                strokeWidth="1.5"
              />
            );
          })}
        </svg>
      );

    case 'carton':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="86" y="48" width="68" height="84" rx="4" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
            <polygon points="86,48 120,24 154,48" fill="#3B82F6" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <rect x="86" y="74" width="68" height="28" fill="#93C5FD" stroke={INK} strokeWidth="2" />
          </g>
        </svg>
      );

    case 'heating':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="54" y="96" width="132" height="32" rx="4" fill="#94A3B8" stroke={INK} strokeWidth="3" />
          <path d="M76 82c-6-12 6-16 0-28M104 82c-6-12 6-16 0-28M136 82c-6-12 6-16 0-28M164 82c-6-12 6-16 0-28" fill="none" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'seismograph':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="56" y="42" width="128" height="78" rx="8" fill="#FEFCE8" stroke={INK} strokeWidth="3" />
          <path d="M68 84h24l8-24 10 42 10-30 8 18 10-10h34" fill="none" stroke="#DC2626" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'eyeliner':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M54 80c34-34 98-34 132 0-34 34-98 34-132 0z" fill="#FFFFFF" stroke={INK} strokeWidth="4" />
            <circle cx="120" cy="80" r="18" fill="#1E293B" />
            <circle cx="126" cy="74" r="5" fill="#FFFFFF" />
          </g>
        </svg>
      );

    case 'vacuum':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="96" cy="102" r="24" fill="#EF4444" stroke={INK} strokeWidth="3" />
            <path d="M116 92c18-16 28-44 46-48l12 64" fill="none" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
            <rect x="156" y="108" width="32" height="12" rx="3" fill="#334155" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'shower':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <path d="M64 46h48l16 18H98z" fill="#F8FAFC" stroke={INK} strokeWidth="3" />
          <path d="M98 76l-8 38M114 76l-4 42M130 76l4 38" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="6 6" />
        </svg>
      );

    case 'drum':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M80 42h80l-22 44v44h-36V86z" fill="#B45309" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <ellipse cx="120" cy="42" rx="40" ry="10" fill="#FEF3C7" stroke={INK} strokeWidth="3" />
          </g>
        </svg>
      );

    case 'bike':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="76" cy="104" r="25" fill="none" stroke={INK} strokeWidth="4" />
            <circle cx="164" cy="104" r="25" fill="none" stroke={INK} strokeWidth="4" />
            <path d="M76 104l38-34h36l14 34m-50-34l-8-18h-14m58 18l-6-20h14" fill="none" stroke="#D97706" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );

    case 'glass':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <line x1="56" y1="62" x2="128" y2="84" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
            <circle cx="148" cy="90" r="24" fill="#FB923C" stroke={INK} strokeWidth="3" />
          </g>
        </svg>
      );

    case 'mancala':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="48" y="54" width="144" height="52" rx="14" fill="#B45309" stroke={INK} strokeWidth="3" />
          {[76, 104, 136, 164].map((x) => (
            <React.Fragment key={x}>
              <circle cx={x} cy="69" r="8" fill="#78350F" stroke={INK} strokeWidth="1.5" />
              <circle cx={x} cy="91" r="8" fill="#78350F" stroke={INK} strokeWidth="1.5" />
            </React.Fragment>
          ))}
        </svg>
      );

    case 'sandwich':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <polygon points="62,102 178,102 120,44" fill="#FDE68A" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <line x1="68" y1="106" x2="172" y2="106" stroke="#22C55E" strokeWidth="7" strokeLinecap="round" />
            <line x1="72" y1="114" x2="168" y2="114" stroke="#EF4444" strokeWidth="6" strokeLinecap="round" />
            <rect x="64" y="118" width="112" height="14" rx="4" fill="#F59E0B" stroke={INK} strokeWidth="2.8" />
          </g>
        </svg>
      );

    case 'swimwear':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <polygon points="80,68 112,68 96,42" fill="#EC4899" stroke={INK} strokeWidth="2.8" />
            <polygon points="128,68 160,68 144,42" fill="#EC4899" stroke={INK} strokeWidth="2.8" />
            <polygon points="84,96 156,96 120,128" fill="#EC4899" stroke={INK} strokeWidth="2.8" />
          </g>
        </svg>
      );

    case 'hockey':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M74 32l44 82h34" fill="none" stroke="#B45309" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <ellipse cx="164" cy="116" rx="16" ry="8" fill="#1E293B" stroke={INK} strokeWidth="2" />
          </g>
        </svg>
      );

    case 'sauce':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="108" y="24" width="24" height="16" rx="2" fill="#F8FAFC" stroke={INK} strokeWidth="2.5" />
            <path d="M96 52c0-8 10-12 24-12s24 4 24 12v74H96V52z" fill="#DC2626" stroke={INK} strokeWidth="3" />
            <circle cx="120" cy="86" r="14" fill="#FEF2F2" stroke={INK} strokeWidth="2" />
          </g>
        </svg>
      );

    case 'porcelain':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M96 34h48l-8 18c16 14 20 50 0 74h-32c-20-24-16-60 0-74l-8-18z" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
            <path d="M104 74c10 8 22 8 32 0" fill="none" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'bridge':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="46" y="42" width="148" height="14" rx="2" fill="#475569" stroke={INK} strokeWidth="2.5" />
          <path d="M120 56v46" stroke="#F59E0B" strokeWidth="3" strokeDasharray="4 3" />
          <circle cx="120" cy="110" r="8" fill="#EF4444" stroke={INK} strokeWidth="2.5" />
        </svg>
      );

    case 'zipper':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <line x1="120" y1="74" x2="120" y2="136" stroke="#64748B" strokeWidth="8" strokeDasharray="4 4" />
          <line x1="88" y1="30" x2="120" y2="74" stroke="#64748B" strokeWidth="6" strokeDasharray="4 4" />
          <line x1="152" y1="30" x2="120" y2="74" stroke="#64748B" strokeWidth="6" strokeDasharray="4 4" />
          <rect x="110" y="64" width="20" height="24" rx="4" fill="#FACC15" stroke={INK} strokeWidth="2.5" />
        </svg>
      );

    case 'sticky':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M74 34h92v78l-20 14H74V34z" fill="#FEF08A" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <rect x="74" y="34" width="92" height="16" fill="#FACC15" stroke={INK} strokeWidth="2" />
            <line x1="90" y1="68" x2="148" y2="68" stroke="#854D0E" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="90" y1="84" x2="132" y2="84" stroke="#854D0E" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'trafficlight':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="96" y="22" width="48" height="114" rx="10" fill="#334155" stroke={INK} strokeWidth="3" />
          <circle cx="120" cy="46" r="12" fill="#EF4444" stroke={INK} strokeWidth="2" />
          <circle cx="120" cy="79" r="12" fill="#FACC15" stroke={INK} strokeWidth="2" />
          <circle cx="120" cy="112" r="12" fill="#22C55E" stroke={INK} strokeWidth="2" />
        </svg>
      );

    case 'yogurt':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M84 54h72l-10 74H94z" fill="#FFFFFF" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <rect x="78" y="44" width="84" height="12" rx="4" fill="#3B82F6" stroke={INK} strokeWidth="2.5" />
            <circle cx="120" cy="90" r="12" fill="#93C5FD" />
          </g>
        </svg>
      );

    case 'silk':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M64 46c34-18 78 18 112 0v68c-34 18-78-18-112 0V46z" fill="#F472B6" stroke={INK} strokeWidth="3" />
            <path d="M64 76c34-18 78 18 112 0" fill="none" stroke="#FBCFE8" strokeWidth="3" />
          </g>
        </svg>
      );

    case 'jam':
    case 'jar':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="92" y="34" width="56" height="14" rx="4" fill="#F59E0B" stroke={INK} strokeWidth="2.8" />
            <rect x="84" y="48" width="72" height="80" rx="10" fill="#EF4444" stroke={INK} strokeWidth="3" />
            <rect x="96" y="70" width="48" height="32" rx="4" fill="#FEFCE8" stroke={INK} strokeWidth="2" />
          </g>
        </svg>
      );

    case 'cork':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <polygon points="94,38 146,38 138,118 102,118" fill="#D97706" stroke={INK} strokeWidth="3" />
            <circle cx="110" cy="64" r="3" fill="#78350F" />
            <circle cx="128" cy="86" r="3" fill="#78350F" />
            <circle cx="116" cy="100" r="2.5" fill="#78350F" />
          </g>
        </svg>
      );

    case 'origami':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <polygon points="120,66 176,34 146,88" fill="#38BDF8" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
            <polygon points="120,66 64,44 96,90" fill="#0284C7" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
            <polygon points="96,90 146,88 120,126" fill="#7DD3FC" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
            <polygon points="64,44 48,54 68,58" fill="#FACC15" stroke={INK} strokeWidth="2" />
          </g>
        </svg>
      );

    case 'dessert':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="68" y="48" width="104" height="72" rx="8" fill="#FEF3C7" stroke={INK} strokeWidth="3" />
            <rect x="68" y="48" width="104" height="16" rx="4" fill="#78350F" stroke={INK} strokeWidth="2.5" />
            <rect x="68" y="84" width="104" height="14" fill="#92400E" />
          </g>
        </svg>
      );

    case 'bluetooth':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="82" y="24" width="76" height="112" rx="38" fill="#2563EB" stroke={INK} strokeWidth="3" />
            <path d="M104 60l32 32-16 16V44l16 16-32 32" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );

    case 'penguin':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <ellipse cx="120" cy="86" rx="34" ry="44" fill="#1E293B" stroke={INK} strokeWidth="3" />
            <ellipse cx="120" cy="94" rx="22" ry="30" fill="#FFFFFF" />
            <circle cx="110" cy="60" r="4" fill="#FFFFFF" />
            <circle cx="130" cy="60" r="4" fill="#FFFFFF" />
            <polygon points="112,68 128,68 120,78" fill="#F59E0B" stroke={INK} strokeWidth="2" />
            <ellipse cx="102" cy="130" rx="12" ry="6" fill="#F59E0B" stroke={INK} strokeWidth="2" />
            <ellipse cx="138" cy="130" rx="12" ry="6" fill="#F59E0B" stroke={INK} strokeWidth="2" />
          </g>
        </svg>
      );

    case 'kaleidoscope':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="120" cy="80" r="46" fill="#F8FAFC" stroke={INK} strokeWidth="3" />
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <polygon key={deg} points="120,80 106,44 134,44" transform={`rotate(${deg} 120 80)`} fill={deg % 120 === 0 ? '#EC4899' : '#38BDF8'} stroke={INK} strokeWidth="1.5" />
            ))}
          </g>
        </svg>
      );

    case 'coat':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M92 34h56l24 44-16 8-12-22v64H96V64L84 86l-16-8z" fill="#FACC15" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <line x1="120" y1="34" x2="120" y2="128" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'toothbrush':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g transform="rotate(-15 120 80)">
            <rect x="52" y="84" width="136" height="14" rx="7" fill="#3B82F6" stroke={INK} strokeWidth="2.8" />
            <rect x="136" y="64" width="44" height="20" rx="4" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" />
            <path d="M144 64v-8M156 64v-8M168 64v-8" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'button':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="120" cy="80" r="42" fill="#FDE68A" stroke={INK} strokeWidth="3" />
            <circle cx="120" cy="80" r="32" fill="none" stroke="#B45309" strokeWidth="2" />
            <circle cx="110" cy="70" r="4" fill={INK} />
            <circle cx="130" cy="70" r="4" fill={INK} />
            <circle cx="110" cy="90" r="4" fill={INK} />
            <circle cx="130" cy="90" r="4" fill={INK} />
          </g>
        </svg>
      );

    case 'filter':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <polygon points="80,44 160,44 134,104 106,104" fill="#FEF3C7" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <rect x="92" y="104" width="56" height="28" rx="4" fill="#FFFFFF" stroke={INK} strokeWidth="2.8" />
            <circle cx="120" cy="114" r="4" fill="#78350F" />
          </g>
        </svg>
      );

    case 'snowmobile':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M64 114h82l28-36-42-16-54 24z" fill="#EF4444" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <line x1="146" y1="122" x2="188" y2="122" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
            <rect x="64" y="114" width="68" height="14" rx="7" fill="#334155" stroke={INK} strokeWidth="2" />
          </g>
        </svg>
      );

    case 'film':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="46" y="34" width="148" height="92" rx="6" fill="#1E293B" stroke={INK} strokeWidth="3" />
          {[56, 78, 100, 122, 144, 166].map((x) => (
            <React.Fragment key={x}>
              <rect x={x} y="40" width="12" height="8" rx="1.5" fill="#F8FAFC" />
              <rect x={x} y="112" width="12" height="8" rx="1.5" fill="#F8FAFC" />
            </React.Fragment>
          ))}
          <rect x="60" y="54" width="120" height="52" rx="3" fill="#FEF08A" />
          <polygon points="110,68 136,80 110,92" fill="#EF4444" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
        </svg>
      );

    case 'tomato':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="120" cy="88" r="42" fill="#EF4444" stroke={INK} strokeWidth="3" />
            <path d="M104 48l16-14 16 14-16 8z" fill="#16A34A" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="102" cy="74" r="6" fill="#FCA5A5" />
          </g>
        </svg>
      );

    case 'table':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="46" y="38" width="148" height="84" rx="6" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
          <rect x="56" y="48" width="22" height="22" fill="#93C5FD" stroke={INK} strokeWidth="1.5" />
          <rect x="162" y="48" width="22" height="22" fill="#FCA5A5" stroke={INK} strokeWidth="1.5" />
          <rect x="56" y="74" width="128" height="36" fill="#FEF08A" stroke={INK} strokeWidth="1.5" />
        </svg>
      );

    case 'cinnamon':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g transform="rotate(-18 120 80)">
            <rect x="66" y="64" width="108" height="18" rx="9" fill="#92400E" stroke={INK} strokeWidth="2.8" />
            <rect x="66" y="84" width="108" height="18" rx="9" fill="#B45309" stroke={INK} strokeWidth="2.8" />
          </g>
        </svg>
      );

    case 'crossword':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="72" y="32" width="96" height="96" rx="4" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
          <rect x="72" y="32" width="32" height="32" fill={INK} />
          <rect x="136" y="96" width="32" height="32" fill={INK} />
          <line x1="104" y1="32" x2="104" y2="128" stroke={INK} strokeWidth="2" />
          <line x1="136" y1="32" x2="136" y2="128" stroke={INK} strokeWidth="2" />
          <line x1="72" y1="64" x2="168" y2="64" stroke={INK} strokeWidth="2" />
          <line x1="72" y1="96" x2="168" y2="96" stroke={INK} strokeWidth="2" />
        </svg>
      );

    case 'chart':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="52" y="32" width="136" height="96" rx="6" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
          <path d="M68 108l26-24 22 14 30-36 24-12" fill="none" stroke="#16A34A" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'violin':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g transform="rotate(20 120 80)">
            <rect x="115" y="20" width="10" height="44" fill="#451A03" stroke={INK} strokeWidth="2" />
            <path d="M98 62c-16 0-16 24 0 28-18 8-18 40 22 40s40-32 22-40c16-4 16-28 0-28z" fill="#D97706" stroke={INK} strokeWidth="3" />
            <line x1="120" y1="24" x2="120" y2="120" stroke="#FDE68A" strokeWidth="2" />
          </g>
        </svg>
      );

    case 'road':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <polygon points="94,32 146,32 184,132 56,132" fill="#475569" stroke={INK} strokeWidth="3" />
          <line x1="120" y1="44" x2="120" y2="122" stroke="#FACC15" strokeWidth="5" strokeDasharray="14 10" />
        </svg>
      );

    case 'espresso':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="64" y="34" width="112" height="96" rx="6" fill="#CBD5E1" stroke={INK} strokeWidth="3" />
          <rect x="74" y="44" width="92" height="24" fill="#334155" stroke={INK} strokeWidth="2" />
          <rect x="98" y="92" width="44" height="32" rx="4" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" />
          <line x1="120" y1="74" x2="120" y2="92" stroke="#78350F" strokeWidth="4" />
        </svg>
      );

    case 'yoga':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="120" cy="44" r="14" fill="#FB923C" stroke={INK} strokeWidth="2.8" />
            <path d="M120 58v36M82 84c14-12 28-12 38-12s24 0 38 12M92 122l28-28 28 28" fill="none" stroke="#1D4ED8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );

    case 'wine':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M90 34h60c0 34-14 50-30 50S90 68 90 34z" fill="#FEE2E2" stroke={INK} strokeWidth="3" />
            <path d="M93 58h54c-4 18-14 26-27 26s-23-8-27-26z" fill="#991B1B" />
            <line x1="120" y1="84" x2="120" y2="128" stroke={INK} strokeWidth="3.5" />
            <line x1="98" y1="128" x2="142" y2="128" stroke={INK} strokeWidth="4" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'pizza':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M120 26L60 124c40 16 80 16 120 0L120 26z" fill="#FDE047" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <path d="M56 116c42 18 86 18 128 0" fill="none" stroke="#D97706" strokeWidth="10" strokeLinecap="round" />
            <circle cx="118" cy="70" r="8" fill="#DC2626" />
            <circle cx="100" cy="98" r="8" fill="#DC2626" />
            <circle cx="136" cy="96" r="8" fill="#DC2626" />
            <ellipse cx="118" cy="88" rx="6" ry="4" fill="#16A34A" />
          </g>
        </svg>
      );

    case 'sushi':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="64" y="96" width="112" height="14" rx="4" fill="#92400E" stroke={INK} strokeWidth="2.5" />
            <rect x="74" y="70" width="40" height="24" rx="10" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" />
            <path d="M72 72c12-12 32-12 44 0-6 6-38 6-44 0z" fill="#F97316" stroke={INK} strokeWidth="2.5" />
            <rect x="126" y="70" width="40" height="24" rx="10" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" />
            <path d="M124 72c12-12 32-12 44 0-6 6-38 6-44 0z" fill="#EF4444" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'pretzel':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M84 114c-24-12-26-54 6-66 24-10 30 22 30 34 0-12 6-44 30-34 32 12 30 54 6 66-22 10-50 10-72 0z" fill="none" stroke="#B45309" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M84 114c-24-12-26-54 6-66 24-10 30 22 30 34 0-12 6-44 30-34 32 12 30 54 6 66-22 10-50 10-72 0z" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="96" cy="60" r="2.5" fill="#FFFFFF" />
            <circle cx="144" cy="62" r="2.5" fill="#FFFFFF" />
            <circle cx="120" cy="116" r="2.5" fill="#FFFFFF" />
          </g>
        </svg>
      );

    case 'basketball':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="120" cy="80" r="42" fill="#EA580C" stroke={INK} strokeWidth="3" />
            <line x1="78" y1="80" x2="162" y2="80" stroke={INK} strokeWidth="2.5" />
            <line x1="120" y1="38" x2="120" y2="122" stroke={INK} strokeWidth="2.5" />
            <path d="M90 50c14 18 14 42 0 60M150 50c-14 18-14 42 0 60" fill="none" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'golf':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <ellipse cx="120" cy="126" rx="56" ry="12" fill="#22C55E" stroke={INK} strokeWidth="2.5" />
          <line x1="120" y1="30" x2="120" y2="122" stroke={INK} strokeWidth="3" />
          <polygon points="120,30 162,44 120,58" fill="#EF4444" stroke={INK} strokeWidth="2.5" />
          <circle cx="90" cy="122" r="7" fill="#FFFFFF" stroke={INK} strokeWidth="2" />
        </svg>
      );

    case 'train':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <circle cx="88" cy="36" r="9" fill="#CBD5E1" />
          <circle cx="72" cy="24" r="12" fill="#E2E8F0" />
          <g>
            <rect x="74" y="64" width="84" height="44" rx="6" fill="#334155" stroke={INK} strokeWidth="3" />
            <rect x="132" y="44" width="38" height="64" rx="4" fill="#DC2626" stroke={INK} strokeWidth="3" />
            <rect x="84" y="42" width="16" height="22" fill="#475569" stroke={INK} strokeWidth="2.5" />
            <circle cx="92" cy="116" r="12" fill="#1E293B" stroke={INK} strokeWidth="3" />
            <circle cx="122" cy="116" r="12" fill="#1E293B" stroke={INK} strokeWidth="3" />
            <circle cx="152" cy="116" r="14" fill="#1E293B" stroke={INK} strokeWidth="3" />
          </g>
        </svg>
      );

    case 'xray':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="64" y="28" width="112" height="104" rx="8" fill="#0F172A" stroke={INK} strokeWidth="3" />
          <g stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" fill="none">
            <line x1="120" y1="44" x2="120" y2="116" />
            <path d="M92 54c18 6 38 6 56 0M88 70c22 6 42 6 64 0M90 86c20 6 40 6 60 0M96 102c16 4 32 4 48 0" />
          </g>
        </svg>
      );

    case 'web':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="120" cy="80" r="42" fill="#DBEAFE" stroke={INK} strokeWidth="3" />
            <ellipse cx="120" cy="80" rx="18" ry="42" fill="none" stroke="#2563EB" strokeWidth="2.5" />
            <line x1="78" y1="80" x2="162" y2="80" stroke="#2563EB" strokeWidth="2.5" />
            <line x1="84" y1="62" x2="156" y2="62" stroke="#2563EB" strokeWidth="2" />
            <line x1="84" y1="98" x2="156" y2="98" stroke="#2563EB" strokeWidth="2" />
          </g>
        </svg>
      );

    case 'chip':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="80" y="42" width="80" height="76" rx="8" fill="#1E293B" stroke={INK} strokeWidth="3" />
          <rect x="98" y="60" width="44" height="40" rx="4" fill="#FACC15" />
          {[58, 76, 94, 112].map((y) => (
            <React.Fragment key={y}>
              <line x1="64" y1={y} x2="80" y2={y} stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
              <line x1="160" y1={y} x2="176" y2={y} stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
            </React.Fragment>
          ))}
        </svg>
      );

    case 'plane':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M54 88l120-26 14 10-46 20 20 24-18 6-26-20-34 8-12 16-14-4 10-18-14-16z" fill="#38BDF8" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          </g>
        </svg>
      );

    case 'barometer':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <circle cx="120" cy="80" r="46" fill="#FDE68A" stroke={INK} strokeWidth="3" />
          <circle cx="120" cy="80" r="36" fill="#FFFFFF" stroke={INK} strokeWidth="2" />
          <line x1="120" y1="80" x2="144" y2="58" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
          <circle cx="120" cy="80" r="5" fill={INK} />
        </svg>
      );

    case 'milk':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M98 30h44l6 24v74H92V54l6-24z" fill="#FFFFFF" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <rect x="92" y="72" width="56" height="32" fill="#BAE6FD" />
            <rect x="96" y="24" width="48" height="8" rx="3" fill="#3B82F6" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'projector':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <circle cx="94" cy="48" r="20" fill="#475569" stroke={INK} strokeWidth="3" />
          <circle cx="136" cy="52" r="16" fill="#475569" stroke={INK} strokeWidth="3" />
          <rect x="76" y="72" width="76" height="44" rx="6" fill="#1E293B" stroke={INK} strokeWidth="3" />
          <polygon points="152,84 196,68 196,120 152,104" fill="#FEF08A" opacity="0.7" />
        </svg>
      );

    case 'ruler':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="48" y="64" width="144" height="32" rx="4" fill="#FACC15" stroke={INK} strokeWidth="3" />
            {[64, 80, 96, 112, 128, 144, 160, 176].map((x, idx) => (
              <line key={x} x1={x} y1="64" x2={x} y2={idx % 2 === 0 ? 80 : 74} stroke={INK} strokeWidth="2.5" />
            ))}
          </g>
        </svg>
      );

    case 'led':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <path d="M96 86V56a24 24 0 0 1 48 0v30H96z" fill="#3B82F6" stroke={INK} strokeWidth="3" />
          <rect x="90" y="86" width="60" height="10" rx="3" fill="#2563EB" stroke={INK} strokeWidth="2.5" />
          <line x1="108" y1="96" x2="108" y2="134" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
          <line x1="132" y1="96" x2="132" y2="128" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'bullettrain':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M46 106h126c16 0 26-8 22-18-6-16-24-28-50-28H46v46z" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
            <path d="M46 92h144" stroke="#2563EB" strokeWidth="6" />
            <polygon points="146,66 174,78 146,80" fill="#0F172A" />
          </g>
          <line x1="36" y1="114" x2="204" y2="114" stroke="#64748B" strokeWidth="4" />
        </svg>
      );

    case 'firework':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <line
                key={deg}
                x1="120"
                y1="72"
                x2={120 + Math.cos((deg * Math.PI) / 180) * 42}
                y2={72 + Math.sin((deg * Math.PI) / 180) * 42}
                stroke={deg % 90 === 0 ? '#EF4444' : '#FACC15'}
                strokeWidth="4"
                strokeLinecap="round"
              />
            ))}
          </g>
          <circle cx="120" cy="72" r="8" fill="#F97316" />
        </svg>
      );

    case 'wheelbarrow':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <polygon points="74,56 164,56 150,96 86,96" fill="#22C55E" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <line x1="48" y1="68" x2="160" y2="108" stroke={INK} strokeWidth="4" strokeLinecap="round" />
            <line x1="94" y1="96" x2="88" y2="124" stroke={INK} strokeWidth="4" strokeLinecap="round" />
            <circle cx="164" cy="112" r="14" fill="#334155" stroke={INK} strokeWidth="3" />
          </g>
        </svg>
      );

    case 'ladder':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="64" y="30" width="112" height="100" rx="8" fill="#FEF3C7" stroke={INK} strokeWidth="3" />
          <line x1="88" y1="42" x2="88" y2="118" stroke="#92400E" strokeWidth="4" strokeLinecap="round" />
          <line x1="116" y1="42" x2="116" y2="118" stroke="#92400E" strokeWidth="4" strokeLinecap="round" />
          <line x1="88" y1="60" x2="116" y2="60" stroke="#92400E" strokeWidth="3.5" />
          <line x1="88" y1="80" x2="116" y2="80" stroke="#92400E" strokeWidth="3.5" />
          <line x1="88" y1="100" x2="116" y2="100" stroke="#92400E" strokeWidth="3.5" />
          <path d="M136 112c16-14-12-26 6-40 16-12-8-22 6-32" fill="none" stroke="#16A34A" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );

    case 'popcorn':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="96" cy="54" r="13" fill="#FEF9C3" stroke={INK} strokeWidth="2.5" />
            <circle cx="118" cy="48" r="15" fill="#FEF9C3" stroke={INK} strokeWidth="2.5" />
            <circle cx="140" cy="54" r="13" fill="#FEF9C3" stroke={INK} strokeWidth="2.5" />
            <polygon points="84,60 156,60 144,132 96,132" fill="#EF4444" stroke={INK} strokeWidth="3" />
            <polygon points="104,60 120,60 116,132 108,132" fill="#FFFFFF" />
            <polygon points="128,60 142,60 134,132 126,132" fill="#FFFFFF" />
          </g>
        </svg>
      );

    case 'sundial':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <ellipse cx="120" cy="104" rx="58" ry="24" fill="#FDE68A" stroke={INK} strokeWidth="3" />
          <polygon points="120,104 120,48 156,96" fill="#D97706" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <circle cx="72" cy="42" r="10" fill="#FACC15" />
        </svg>
      );

    case 'bread':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M62 108c0-34 26-54 58-54s58 20 58 54H62z" fill="#D97706" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <path d="M96 70l12 18M122 68l12 20M146 74l10 16" stroke="#FEF3C7" strokeWidth="4" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'torch':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <polygon points="102,68 138,68 126,136 114,136" fill="#F59E0B" stroke={INK} strokeWidth="3" />
          <path d="M120 26c16 14 20 28 0 42-20-14-16-28 0-42z" fill="#EF4444" stroke={INK} strokeWidth="2.5" />
        </svg>
      );

    case 'peeler':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M94 56l52 72M146 56l-52 72" fill="none" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" />
            <rect x="86" y="40" width="68" height="14" rx="4" fill="#CBD5E1" stroke={INK} strokeWidth="2.8" />
          </g>
        </svg>
      );

    case 'thermometer':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="108" y="28" width="24" height="84" rx="12" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
          <circle cx="120" cy="116" r="18" fill="#EF4444" stroke={INK} strokeWidth="3" />
          <rect x="116" y="54" width="8" height="58" rx="4" fill="#EF4444" />
        </svg>
      );

    case 'match':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="115" y="64" width="10" height="72" rx="2" fill="#FDE68A" stroke={INK} strokeWidth="2.5" />
            <ellipse cx="120" cy="54" rx="9" ry="13" fill="#DC2626" stroke={INK} strokeWidth="2.5" />
            <path d="M120 22c10 10 10 20 0 26-10-6-10-16 0-26z" fill="#FACC15" />
          </g>
        </svg>
      );

    case 'pendulum':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="74" y="28" width="92" height="106" rx="8" fill="#92400E" stroke={INK} strokeWidth="3" />
          <circle cx="120" cy="56" r="20" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" />
          <g>
            <line x1="120" y1="76" x2="120" y2="112" stroke="#FACC15" strokeWidth="4" />
            <circle cx="120" cy="114" r="10" fill="#FACC15" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'carrot':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M112 44c-10-16 0-24 8-14 8-10 18-2 8 14" fill="none" stroke="#16A34A" strokeWidth="5" strokeLinecap="round" />
            <path d="M94 50c18-8 34-8 52 0l-26 84L94 50z" fill="#F97316" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          </g>
        </svg>
      );

    case 'ship':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <polygon points="120,30 160,84 120,84" fill="#FFFFFF" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <polygon points="116,42 84,84 116,84" fill="#FEF3C7" stroke={INK} strokeWidth="2.5" />
            <line x1="120" y1="26" x2="120" y2="94" stroke={INK} strokeWidth="3.5" />
            <path d="M68 94h104l-14 28H82L68 94z" fill="#92400E" stroke={INK} strokeWidth="3" />
          </g>
        </svg>
      );

    case 'guitar':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M102 74c-14 4-24 16-24 30 0 18 16 30 42 30s42-12 42-30c0-14-10-26-24-30l-4-20h-28l-4 20z" fill="#D97706" stroke={INK} strokeWidth="3" />
            <rect x="114" y="24" width="12" height="52" fill="#78350F" stroke={INK} strokeWidth="2.5" />
            <circle cx="120" cy="94" r="10" fill="#451A03" stroke="#FDE68A" strokeWidth="2" />
          </g>
        </svg>
      );

    case 'cheese':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <polygon points="64,104 174,104 146,56" fill="#FACC15" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <rect x="64" y="104" width="110" height="22" fill="#EAB308" stroke={INK} strokeWidth="3" />
            <circle cx="104" cy="114" r="5" fill="#A16207" />
            <circle cx="142" cy="115" r="4" fill="#A16207" />
          </g>
        </svg>
      );

    case 'postcard':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="52" y="42" width="136" height="84" rx="6" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
            <line x1="120" y1="54" x2="120" y2="114" stroke="#CBD5E1" strokeWidth="2.5" />
            <rect x="150" y="52" width="24" height="28" fill="#F97316" stroke={INK} strokeWidth="2" />
            <line x1="68" y1="68" x2="106" y2="68" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
            <line x1="68" y1="84" x2="102" y2="84" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'sax':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M92 34h18l8 64c2 14 14 20 24 14 8-4 12-16 12-26l16 4c-2 26-14 42-34 42-22 0-34-14-36-38L92 34z" fill="#FACC15" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          </g>
        </svg>
      );

    case 'sugar':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="74" y="64" width="42" height="42" rx="6" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
            <rect x="122" y="52" width="42" height="42" rx="6" fill="#F8FAFC" stroke={INK} strokeWidth="3" />
            <rect x="100" y="84" width="42" height="42" rx="6" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
          </g>
        </svg>
      );

    case 'satellite':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="120" cy="76" r="24" fill="#CBD5E1" stroke={INK} strokeWidth="3" />
            <line x1="98" y1="86" x2="62" y2="118" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
            <line x1="142" y1="86" x2="178" y2="118" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
            <line x1="120" y1="100" x2="120" y2="132" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'speaker':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="78" y="30" width="84" height="102" rx="8" fill="#334155" stroke={INK} strokeWidth="3" />
          <circle cx="120" cy="54" r="10" fill="#1E293B" stroke="#94A3B8" strokeWidth="2.5" />
          <circle cx="120" cy="96" r="22" fill="#1E293B" stroke="#F59E0B" strokeWidth="3" />
        </svg>
      );

    case 'soccer':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="120" cy="80" r="40" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
            <polygon points="120,62 136,74 130,94 110,94 104,74" fill={INK} />
          </g>
        </svg>
      );

    case 'car':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M56 96h128v-14c0-10-12-18-26-18l-16-20H98L82 64c-14 0-26 8-26 18v14z" fill="#DC2626" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <circle cx="84" cy="104" r="14" fill="#1E293B" stroke={INK} strokeWidth="3" />
            <circle cx="156" cy="104" r="14" fill="#1E293B" stroke={INK} strokeWidth="3" />
          </g>
        </svg>
      );

    case 'syringe':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <line x1="56" y1="80" x2="88" y2="80" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
            <rect x="88" y="64" width="66" height="32" rx="4" fill="#BAE6FD" stroke={INK} strokeWidth="3" />
            <line x1="154" y1="80" x2="180" y2="80" stroke={INK} strokeWidth="5" strokeLinecap="round" />
            <line x1="180" y1="68" x2="180" y2="92" stroke={INK} strokeWidth="4" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'piggybank':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <ellipse cx="120" cy="84" rx="46" ry="32" fill="#FDA4AF" stroke={INK} strokeWidth="3" />
            <circle cx="164" cy="84" r="10" fill="#FB7185" stroke={INK} strokeWidth="2.5" />
            <line x1="106" y1="54" x2="134" y2="54" stroke={INK} strokeWidth="4" strokeLinecap="round" />
            <rect x="94" y="112" width="10" height="16" rx="3" fill="#FDA4AF" stroke={INK} strokeWidth="2.5" />
            <rect x="136" y="112" width="10" height="16" rx="3" fill="#FDA4AF" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'rain':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="96" y="48" width="48" height="76" rx="4" fill="#DBEAFE" stroke={INK} strokeWidth="3" />
          <rect x="96" y="88" width="48" height="36" fill="#3B82F6" />
          <line x1="104" y1="26" x2="100" y2="40" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
          <line x1="136" y1="26" x2="132" y2="40" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'opera':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M68 42h44v44c0 16-22 24-22 24s-22-8-22-24V42z" fill="#FEF08A" stroke={INK} strokeWidth="3" />
            <path d="M128 50h44v44c0 16-22 24-22 24s-22-8-22-24V50z" fill="#FCA5A5" stroke={INK} strokeWidth="3" />
          </g>
        </svg>
      );

    case 'yarn':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <circle cx="120" cy="80" r="38" fill="#A855F7" stroke={INK} strokeWidth="3" />
            <path d="M88 66c22 10 42 10 64 0M86 92c24-10 44-10 68 0" fill="none" stroke="#F3E8FF" strokeWidth="3" />
          </g>
        </svg>
      );

    case 'taco':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <path d="M64 110c0-36 26-58 56-58s56 22 56 58H64z" fill="#FDE047" stroke={INK} strokeWidth="3" />
            <circle cx="98" cy="70" r="7" fill="#16A34A" />
            <circle cx="120" cy="64" r="7" fill="#EF4444" />
            <circle cx="142" cy="70" r="7" fill="#16A34A" />
          </g>
        </svg>
      );

    case 'herb':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <path d="M74 84h92c-6 30-26 42-46 42s-40-12-46-42z" fill="#64748B" stroke={INK} strokeWidth="3" />
          <line x1="120" y1="84" x2="146" y2="42" stroke="#94A3B8" strokeWidth="8" strokeLinecap="round" />
          <path d="M98 76c0-16 14-24 22-24 0 14-8 24-22 24z" fill="#22C55E" stroke={INK} strokeWidth="2.5" />
        </svg>
      );

    case 'rotor':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <line x1="54" y1="44" x2="186" y2="44" stroke={INK} strokeWidth="5" strokeLinecap="round" />
          <line x1="120" y1="44" x2="120" y2="66" stroke={INK} strokeWidth="4" />
          <ellipse cx="120" cy="86" rx="44" ry="22" fill="#38BDF8" stroke={INK} strokeWidth="3" />
          <line x1="92" y1="114" x2="148" y2="114" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'stamp':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <rect x="78" y="34" width="84" height="94" rx="4" fill="#FFFFFF" stroke={INK} strokeWidth="3" strokeDasharray="6 4" />
            <rect x="90" y="46" width="60" height="70" fill="#1E293B" />
            <circle cx="120" cy="76" r="14" fill="#FDE68A" />
          </g>
        </svg>
      );

    case 'kite':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <polygon points="120,26 164,66 120,108 76,66" fill="#EF4444" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <line x1="120" y1="26" x2="120" y2="108" stroke={INK} strokeWidth="2.5" />
            <line x1="76" y1="66" x2="164" y2="66" stroke={INK} strokeWidth="2.5" />
            <path d="M120 108c10 14-12 20 0 32" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'elevator':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="82" y="32" width="76" height="96" rx="6" fill="#CBD5E1" stroke={INK} strokeWidth="3" />
          <line x1="120" y1="32" x2="120" y2="128" stroke={INK} strokeWidth="2.5" />
          <path d="M174 72l8-12 8 12" fill="none" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'radar':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <circle cx="120" cy="80" r="46" fill="#0F172A" stroke={INK} strokeWidth="3" />
          <circle cx="120" cy="80" r="28" fill="none" stroke="#22C55E" strokeWidth="1.5" />
          <line x1="120" y1="80" x2="154" y2="48" stroke="#4ADE80" strokeWidth="3" strokeLinecap="round" />
          <circle cx="140" cy="64" r="4" fill="#4ADE80" />
        </svg>
      );

    case 'abacus':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="64" y="40" width="112" height="80" rx="6" fill="none" stroke="#92400E" strokeWidth="6" />
          {[60, 80, 100].map((y, r) => (
            <React.Fragment key={y}>
              <line x1="66" y1={y} x2="174" y2={y} stroke="#475569" strokeWidth="2.5" />
              <circle cx={88 + r * 12} cy={y} r="7" fill="#EF4444" stroke={INK} strokeWidth="2" />
              <circle cx={106 + r * 12} cy={y} r="7" fill="#FACC15" stroke={INK} strokeWidth="2" />
              <circle cx={148} cy={y} r="7" fill="#3B82F6" stroke={INK} strokeWidth="2" />
            </React.Fragment>
          ))}
        </svg>
      );

    case 'lens':
    default:
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g>
            <ellipse cx="120" cy="82" rx="44" ry="26" fill="#BAE6FD" stroke={INK} strokeWidth="3" />
            <path d="M88 74c14-10 40-10 64 0" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          </g>
        </svg>
      );
  }
};
