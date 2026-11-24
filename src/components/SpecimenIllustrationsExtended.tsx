import React from 'react';

const INK = '#1E293B';

export function renderExtendedSpecimen(artworkKey: string): React.ReactElement | null {
  switch (artworkKey) {
    // === NEW DEDICATED & UPGRADED ILLUSTRATIONS ===
    case 'sax':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Neck + black mouthpiece + reed */}
          <path
            d="M52 34l20-6c10-2 17 5 19 16l2 14"
            fill="none"
            stroke="#EAB308"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M52 34l20-6c10-2 17 5 19 16l2 14"
            fill="none"
            stroke={INK}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <polygon points="44,31 58,28 60,38 46,38" fill="#1E293B" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
          <rect x="66" y="25" width="7" height="9" rx="1" transform="rotate(-14 69 29)" fill="#78350F" stroke={INK} strokeWidth="1.5" />
          {/* Main conical brass body + curved bow + flared bell */}
          <path
            d="M84 54l16-3 18 56c3 10 14 14 23 8 7-5 11-16 11-31l-7-10 38-6-10 22c-1 27-16 46-40 46-21 0-34-12-38-34L84 54z"
            fill="#FACC15"
            stroke={INK}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Inner bell shadow */}
          <ellipse cx="164" cy="79" rx="16" ry="5.5" transform="rotate(-10 164 79)" fill="#B45309" stroke={INK} strokeWidth="2.2" />
          {/* Brass highlight along body */}
          <path d="M93 61l14 43c2 7 7 12 12 15" fill="none" stroke="#FEF08A" strokeWidth="3" strokeLinecap="round" />
          {/* Key rod & pearl key buttons */}
          <line x1="87" y1="62" x2="105" y2="112" stroke="#92400E" strokeWidth="2.5" strokeLinecap="round" />
          {[
            [92, 66],
            [96, 77],
            [100, 88],
            [104, 99],
            [109, 110],
          ].map(([cx, cy], idx) => (
            <circle key={idx} cx={cx} cy={cy} r="4.2" fill="#FFFFFF" stroke={INK} strokeWidth="1.8" />
          ))}
          {/* Thumb hook & side pad cups */}
          <circle cx="114" cy="84" r="4" fill="#FDE047" stroke={INK} strokeWidth="1.8" />
          <circle cx="144" cy="108" r="5" fill="#FDE047" stroke={INK} strokeWidth="1.8" />
        </svg>
      );

    case 'snowmobile':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Rear rubber caterpillar track */}
          <rect x="44" y="102" width="84" height="22" rx="11" fill="#334155" stroke={INK} strokeWidth="3" />
          <circle cx="58" cy="113" r="6" fill="#94A3B8" stroke={INK} strokeWidth="2" />
          <circle cx="86" cy="113" r="6" fill="#94A3B8" stroke={INK} strokeWidth="2" />
          <circle cx="114" cy="113" r="6" fill="#94A3B8" stroke={INK} strokeWidth="2" />
          {/* Front curved ski & shock strut */}
          <path d="M138 124h46c10 0 16-6 18-13" fill="none" stroke="#1E293B" strokeWidth="5.5" strokeLinecap="round" />
          <line x1="158" y1="96" x2="164" y2="124" stroke="#64748B" strokeWidth="5" strokeLinecap="round" />
          {/* Sculpted seat */}
          <path d="M62 84h44c6 0 10 4 10 10v8H58l4-18z" fill="#1E293B" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          {/* Red cowling / hood */}
          <path
            d="M52 102l8-18h54l12-16 42 4 22 22c2 3 0 8-5 8H52z"
            fill="#EF4444"
            stroke={INK}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M132 82h34l10 10h-44z" fill="#FACC15" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
          {/* Windshield & handlebars */}
          <path d="M126 68l16-18c4-4 10-3 12 3l6 17z" fill="#7DD3FC" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M114 70l10-12h12" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="182" cy="86" r="4" fill="#FEF08A" stroke={INK} strokeWidth="1.8" />
        </svg>
      );

    case 'satellite':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Sputnik 1 iconic swept-back whip antennas */}
          <line x1="104" y1="54" x2="46" y2="30" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
          <line x1="94" y1="70" x2="36" y2="66" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          <line x1="96" y1="90" x2="40" y2="112" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          <line x1="108" y1="106" x2="56" y2="136" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
          {/* Polished aluminum Sputnik sphere */}
          <circle cx="134" cy="80" r="36" fill="#CBD5E1" stroke={INK} strokeWidth="3" />
          {/* Metallic sheen & equatorial seam */}
          <path d="M118 52c14-8 30-2 36 10" fill="none" stroke="#F8FAFC" strokeWidth="4" strokeLinecap="round" />
          <line x1="134" y1="44" x2="134" y2="116" stroke={INK} strokeWidth="2.5" />
          {/* Antenna mount collars */}
          <circle cx="105" cy="56" r="4" fill="#94A3B8" stroke={INK} strokeWidth="2" />
          <circle cx="98" cy="74" r="4" fill="#94A3B8" stroke={INK} strokeWidth="2" />
          <circle cx="104" cy="96" r="4" fill="#94A3B8" stroke={INK} strokeWidth="2" />
          {/* Signal pulses ahead */}
          <path d="M180 66c8 8 8 20 0 28" fill="none" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
          <path d="M192 56c12 14 12 34 0 48" fill="none" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'currywurst':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Paper snack tray */}
          <polygon points="48,74 192,74 176,128 64,128" fill="#FFFFFF" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <polygon points="54,78 186,78 172,122 68,122" fill="#FEFCE8" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* Sliced Bratwurst medallions */}
          {[76, 98, 120, 142, 162].map((cx, i) => (
            <ellipse
              key={cx}
              cx={cx}
              cy={i % 2 === 0 ? 96 : 100}
              rx="14"
              ry="10"
              fill="#FDBA74"
              stroke={INK}
              strokeWidth="2.5"
            />
          ))}
          {/* Rich red curry-ketchup glaze */}
          <path
            d="M66 96c14-14 34-8 48-12 16-4 34-10 52 2 8 6 4 20-10 22-22 2-46 6-72 0-14-3-24-6-18-12z"
            fill="#DC2626"
            stroke="#991B1B"
            strokeWidth="2"
          />
          {/* Curry spice powder speckles */}
          {[82, 96, 112, 128, 144, 154, 104, 136].map((cx, i) => (
            <circle key={i} cx={cx} cy={90 + (i % 3) * 6} r="2" fill="#FACC15" />
          ))}
          {/* Wooden Pommesgabel (2-prong fork) */}
          <path d="M168 34l-14 40M176 37l-14 40" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
          <rect x="164" y="28" width="12" height="30" rx="3" transform="rotate(20 170 43)" fill="#FDE68A" stroke={INK} strokeWidth="2.2" />
        </svg>
      );

    case 'algorithm':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Punched card */}
          <polygon points="56,34 164,34 176,46 176,126 56,126" fill="#FEFCE8" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <line x1="68" y1="50" x2="148" y2="50" stroke="#94A3B8" strokeWidth="2" />
          {/* Punched rectangular holes */}
          {[
            [72, 62], [90, 62], [126, 62],
            [72, 78], [108, 78], [144, 78],
            [90, 94], [126, 94],
            [72, 110], [108, 110], [144, 110],
          ].map(([x, y], i) => (
            <rect key={i} x={x} y={y} width="10" height="8" rx="1.5" fill={INK} />
          ))}
          {/* Analytical Engine brass gearwheel */}
          <circle cx="174" cy="108" r="24" fill="#F59E0B" stroke={INK} strokeWidth="3" />
          <circle cx="174" cy="108" r="9" fill="#FEF3C7" stroke={INK} strokeWidth="2.2" />
          <text x="108" y="46" fontSize="13" fontWeight="700" fontFamily="monospace" fill="#1D4ED8">
            f(n) → Bₙ
          </text>
        </svg>
      );

    case 'coffeeplant':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Woody branch */}
          <path d="M52 108c44-24 92-36 138-42" fill="none" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
          {/* Glossy evergreen coffee leaves */}
          <path d="M74 96c-14-24-2-48 26-44 10 18-2 36-26 44z" fill="#16A34A" stroke={INK} strokeWidth="2.6" strokeLinejoin="round" />
          <path d="M126 76c-8-26 14-46 38-36 4 20-14 34-38 36z" fill="#22C55E" stroke={INK} strokeWidth="2.6" strokeLinejoin="round" />
          <path d="M138 78c18 8 34 26 24 44-20 4-30-16-24-44z" fill="#15803D" stroke={INK} strokeWidth="2.6" strokeLinejoin="round" />
          {/* Bright red coffee cherries cluster */}
          <circle cx="96" cy="96" r="10" fill="#DC2626" stroke={INK} strokeWidth="2.5" />
          <circle cx="114" cy="88" r="10" fill="#EF4444" stroke={INK} strokeWidth="2.5" />
          <circle cx="108" cy="106" r="10" fill="#B91C1C" stroke={INK} strokeWidth="2.5" />
          <circle cx="152" cy="68" r="9" fill="#DC2626" stroke={INK} strokeWidth="2.5" />
          {/* Roasted coffee bean detail bottom right */}
          <ellipse cx="182" cy="118" rx="14" ry="10" transform="rotate(-24 182 118)" fill="#78350F" stroke={INK} strokeWidth="2.5" />
          <path d="M174 122c6-4 10-4 16-8" fill="none" stroke="#FEF3C7" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'mayonnaise':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Glass jar with creamy pale-yellow emulsion */}
          <rect x="78" y="34" width="60" height="14" rx="4" fill="#2563EB" stroke={INK} strokeWidth="2.8" />
          <path d="M72 56c0-6 6-8 36-8s36 2 36 8v64c0 8-6 12-36 12s-36-4-36-12V56z" fill="#FEF9C3" stroke={INK} strokeWidth="3" />
          <rect x="80" y="72" width="56" height="36" rx="4" fill="#FFFFFF" stroke={INK} strokeWidth="2" />
          <circle cx="108" cy="90" r="10" fill="#FACC15" stroke={INK} strokeWidth="1.8" />
          {/* Egg yolk & wire whisk beside jar */}
          <ellipse cx="168" cy="122" rx="18" ry="11" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" />
          <circle cx="168" cy="120" r="8" fill="#F59E0B" stroke={INK} strokeWidth="2" />
          <line x1="176" y1="36" x2="162" y2="74" stroke={INK} strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="156" cy="90" rx="10" ry="16" transform="rotate(20 156 90)" fill="none" stroke="#64748B" strokeWidth="2.5" />
        </svg>
      );

    case 'toothpowder':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Stone apothecary mortar & pestle with mint & powder */}
          <path d="M68 78h92c-4 36-22 54-46 54s-42-18-46-54z" fill="#E2E8F0" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <ellipse cx="114" cy="78" rx="46" ry="11" fill="#F8FAFC" stroke={INK} strokeWidth="2.5" />
          {/* Fine white-mint toothpowder mound */}
          <path d="M84 78c10-16 50-16 60 0z" fill="#CCFBF1" stroke={INK} strokeWidth="2" />
          {/* Pestle */}
          <path d="M126 76l28-38" stroke="#94A3B8" strokeWidth="11" strokeLinecap="round" />
          <path d="M126 76l28-38" stroke={INK} strokeWidth="3" strokeLinecap="round" />
          {/* Fresh mint leaf */}
          <path d="M158 110c8-18 26-24 34-14-4 16-20 22-34 14z" fill="#22C55E" stroke={INK} strokeWidth="2.2" />
        </svg>
      );

    case 'microscope':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Solid base & curved arm */}
          <rect x="68" y="124" width="104" height="14" rx="4" fill="#334155" stroke={INK} strokeWidth="3" />
          <path d="M138 124c22-14 26-58 4-76" fill="none" stroke="#D97706" strokeWidth="10" strokeLinecap="round" />
          <path d="M138 124c22-14 26-58 4-76" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
          {/* Tilted optical body tube + eyepiece + objective turret */}
          <g transform="rotate(-18 110 64)">
            <rect x="102" y="24" width="16" height="16" rx="2" fill="#1E293B" stroke={INK} strokeWidth="2.5" />
            <rect x="98" y="40" width="24" height="48" rx="3" fill="#F59E0B" stroke={INK} strokeWidth="2.8" />
            <rect x="104" y="88" width="12" height="12" rx="2" fill="#94A3B8" stroke={INK} strokeWidth="2.2" />
          </g>
          {/* Specimen stage & mirror */}
          <rect x="78" y="96" width="52" height="7" rx="2" fill="#475569" stroke={INK} strokeWidth="2.2" />
          <ellipse cx="104" cy="114" rx="12" ry="5" fill="#7DD3FC" stroke={INK} strokeWidth="2" />
          {/* Focus knob */}
          <circle cx="152" cy="76" r="8" fill="#CBD5E1" stroke={INK} strokeWidth="2.5" />
        </svg>
      );

    case 'electronmicroscope':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Control desk & CRT screen */}
          <rect x="50" y="106" width="140" height="28" rx="4" fill="#475569" stroke={INK} strokeWidth="3" />
          <rect x="62" y="76" width="44" height="30" rx="4" fill="#0F172A" stroke={INK} strokeWidth="2.5" />
          <circle cx="84" cy="91" r="9" fill="#22C55E" opacity="0.85" />
          {/* Tall vertical vacuum electron column */}
          <rect x="122" y="24" width="32" height="82" rx="4" fill="#CBD5E1" stroke={INK} strokeWidth="3" />
          <rect x="116" y="40" width="44" height="10" rx="2" fill="#64748B" stroke={INK} strokeWidth="2" />
          <rect x="116" y="64" width="44" height="10" rx="2" fill="#64748B" stroke={INK} strokeWidth="2" />
          <line x1="138" y1="26" x2="138" y2="104" stroke="#38BDF8" strokeWidth="3" strokeDasharray="4 4" />
        </svg>
      );

    case 'dialysis':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Rotating Kolff drum / membrane cylinder in bath */}
          <rect x="58" y="84" width="124" height="46" rx="6" fill="#E0F2FE" stroke={INK} strokeWidth="3" />
          <rect x="64" y="96" width="112" height="28" rx="3" fill="#BAE6FD" />
          <rect x="76" y="54" width="88" height="48" rx="18" fill="#F8FAFC" stroke={INK} strokeWidth="3" />
          {/* Wrapped cellophane coil lines */}
          {[92, 108, 124, 140, 152].map((x) => (
            <line key={x} x1={x} y1="54" x2={x} y2="102" stroke="#94A3B8" strokeWidth="3" />
          ))}
          {/* Red & blue blood tubing */}
          <path d="M76 74c-20 0-24-28-6-36" fill="none" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
          <path d="M164 74c20 0 24-28 6-36" fill="none" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'catheter':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Heart + flexible catheter guide wire */}
          <path
            d="M110 124s-42-25-42-54c0-16 12-27 26-27 9 0 16 5 16 12 0-7 7-12 16-12 14 0 26 11 26 27 0 29-42 54-42 54z"
            fill="#EF4444"
            stroke={INK}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M186 128c-16-6-20-26-34-44-10-12-24-18-38-12"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <circle cx="114" cy="72" r="4.5" fill="#FEF08A" stroke={INK} strokeWidth="1.8" />
        </svg>
      );

    case 'blisterpack':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Monthly dial blister dispenser */}
          <circle cx="120" cy="80" r="50" fill="#F8FAFC" stroke={INK} strokeWidth="3" />
          <circle cx="120" cy="80" r="20" fill="#FCE7F3" stroke={INK} strokeWidth="2.5" />
          {Array.from({ length: 12 }, (_, idx) => {
            const ang = (idx * 30 * Math.PI) / 180;
            const cx = 120 + Math.cos(ang) * 35;
            const cy = 80 + Math.sin(ang) * 35;
            return (
              <circle
                key={idx}
                cx={cx}
                cy={cy}
                r="5.5"
                fill={idx < 4 ? '#E2E8F0' : '#EC4899'}
                stroke={INK}
                strokeWidth="1.8"
              />
            );
          })}
        </svg>
      );

    case 'surgery':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Ancient surgical manuscript & precision steel scalpel + forceps */}
          <rect x="54" y="34" width="132" height="92" rx="8" fill="#FEF3C7" stroke={INK} strokeWidth="3" />
          {/* Stylized face profile reconstruction contour */}
          <path d="M96 52c14 4 18 16 14 26l10 14-12 6v14H86" fill="none" stroke="#B45309" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M104 62c6 6 8 14 4 22" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4 3" />
          {/* Precision steel scalpel */}
          <g transform="rotate(-32 152 84)">
            <rect x="136" y="79" width="44" height="8" rx="3" fill="#94A3B8" stroke={INK} strokeWidth="2" />
            <path d="M120 87l16-8v8z" fill="#F8FAFC" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
          </g>
        </svg>
      );

    case 'book':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Open bound book + cast movable metal type blocks */}
          <path d="M48 40c24-6 50-4 72 8 22-12 48-14 72-8v76c-24-6-50-4-72 8-22-12-48-14-72-8V40z" fill="#FFFBEB" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <line x1="120" y1="48" x2="120" y2="124" stroke={INK} strokeWidth="2.5" />
          <line x1="64" y1="60" x2="104" y2="60" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="64" y1="74" x2="104" y2="74" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="64" y1="88" x2="96" y2="88" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          {/* Movable metal type blocks */}
          <rect x="134" y="62" width="18" height="22" rx="2" fill="#94A3B8" stroke={INK} strokeWidth="2" />
          <rect x="156" y="62" width="18" height="22" rx="2" fill="#CBD5E1" stroke={INK} strokeWidth="2" />
          <text x="143" y="78" textAnchor="middle" fontSize="13" fontWeight="800" fill={INK}>A</text>
          <text x="165" y="78" textAnchor="middle" fontSize="13" fontWeight="800" fill={INK}>文</text>
        </svg>
      );

    case 'fountainpen':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Classic fountain pen with split gold nib + ink drop */}
          <g transform="rotate(-32 120 76)">
            <rect x="52" y="68" width="84" height="18" rx="4" fill="#1E3A8A" stroke={INK} strokeWidth="2.8" />
            <rect x="136" y="70" width="12" height="14" fill="#F59E0B" stroke={INK} strokeWidth="2" />
            <polygon points="148,68 184,77 148,86" fill="#FACC15" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
            <line x1="164" y1="77" x2="184" y2="77" stroke={INK} strokeWidth="2" />
            <circle cx="163" cy="77" r="2.2" fill={INK} />
          </g>
          <path d="M168 112c6 8 10 14 10 19a10 10 0 0 1-20 0c0-5 4-11 10-19z" fill="#2563EB" stroke={INK} strokeWidth="2.5" />
        </svg>
      );

    case 'teabag':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Glass cup with amber tea & suspended pleated paper tea bag */}
          <path d="M74 62h80l-7 60c-2 9-14 13-33 13s-31-4-33-13l-7-60z" fill="#FEF3C7" stroke={INK} strokeWidth="3" />
          <path d="M78 82h72l-5 38c-2 7-12 10-31 10s-29-3-31-10l-5-38z" fill="#D97706" opacity="0.65" />
          <path d="M154 74c14 0 18 22 2 28" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
          {/* Hanging string & paper tag */}
          <path d="M114 82V50c0-8 26-8 44 10v28" fill="none" stroke={INK} strokeWidth="2" />
          <rect x="98" y="82" width="32" height="34" rx="4" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" />
          <rect x="103" y="92" width="22" height="18" rx="2" fill="#92400E" opacity="0.45" />
          <rect x="150" y="84" width="16" height="20" rx="2" fill="#DC2626" stroke={INK} strokeWidth="2" />
        </svg>
      );

    case 'jar':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Airtight glass preserving jar (Weck/Mason) with rubber ring & wire bail */}
          <rect x="84" y="34" width="72" height="12" rx="4" fill="#E2E8F0" stroke={INK} strokeWidth="2.8" />
          <rect x="82" y="46" width="76" height="6" rx="2" fill="#EA580C" stroke={INK} strokeWidth="1.8" />
          <rect x="78" y="52" width="84" height="80" rx="12" fill="#E0F2FE" stroke={INK} strokeWidth="3" />
          {/* Preserved fruits inside */}
          <circle cx="104" cy="92" r="13" fill="#EF4444" stroke={INK} strokeWidth="2" />
          <circle cx="132" cy="88" r="14" fill="#F59E0B" stroke={INK} strokeWidth="2" />
          <circle cx="118" cy="112" r="13" fill="#22C55E" stroke={INK} strokeWidth="2" />
          {/* Wire clamp */}
          <path d="M74 44v26h8" fill="none" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
          <path d="M166 44v26h-8" fill="none" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'cacao':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Split cacao pod with beans + traditional clay cacao vessel */}
          <path d="M52 84c0-26 24-44 46-44s44 18 44 44-22 42-44 42-46-16-46-42z" fill="#92400E" stroke={INK} strokeWidth="3" />
          <ellipse cx="98" cy="84" rx="26" ry="28" fill="#FEF3C7" stroke={INK} strokeWidth="2.2" />
          {[72, 86, 100].map((cy, i) => (
            <React.Fragment key={cy}>
              <ellipse cx="89" cy={cy} rx="6" ry="4.5" fill="#78350F" stroke={INK} strokeWidth="1.5" />
              <ellipse cx="106" cy={cy + (i % 2 ? -2 : 2)} rx="6" ry="4.5" fill="#78350F" stroke={INK} strokeWidth="1.5" />
            </React.Fragment>
          ))}
          {/* Frothy ceramic cacao cup */}
          <path d="M142 74h48l-6 48c-2 6-10 8-18 8s-16-2-18-8l-6-48z" fill="#B45309" stroke={INK} strokeWidth="2.8" />
          <ellipse cx="166" cy="74" rx="24" ry="7" fill="#451A03" stroke={INK} strokeWidth="2.2" />
          <circle cx="160" cy="73" r="4" fill="#FDE68A" />
          <circle cx="172" cy="74" r="3" fill="#FDE68A" />
        </svg>
      );

    // === UPGRADED SECOND-HALF ILLUSTRATIONS ===
    case 'opera':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Comedy & Tragedy theater masks */}
          <g transform="rotate(-10 88 76)">
            <path d="M58 42h60v44c0 24-30 34-30 34s-30-10-30-34V42z" fill="#FEF08A" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <path d="M70 64c4-5 10-5 14 0M92 64c4-5 10-5 14 0" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
            <path d="M74 84c8 12 20 12 28 0z" fill={INK} />
          </g>
          <g transform="rotate(10 152 84)">
            <path d="M122 50h60v44c0 24-30 34-30 34s-30-10-30-34V50z" fill="#FCA5A5" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
            <path d="M134 72l12 5M170 72l-12 5" stroke={INK} strokeWidth="3" strokeLinecap="round" />
            <path d="M138 102c8-10 20-10 28 0" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'cheese':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Cheese block + Norwegian Ostehøvel cheese slicer shaving a slice */}
          <polygon points="56,96 154,96 132,58" fill="#FDE047" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <rect x="56" y="96" width="98" height="28" fill="#FACC15" stroke={INK} strokeWidth="3" />
          <circle cx="84" cy="110" r="5" fill="#CA8A04" />
          <circle cx="122" cy="112" r="4" fill="#CA8A04" />
          {/* Ostehøvel metal spade + wooden handle */}
          <path d="M104 68l38-14 14 16-36 16z" fill="#CBD5E1" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="116" y="68" width="16" height="4" transform="rotate(-22 124 70)" fill={INK} />
          <line x1="148" y1="62" x2="188" y2="42" stroke="#92400E" strokeWidth="9" strokeLinecap="round" />
          <line x1="148" y1="62" x2="188" y2="42" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
          {/* Curled cheese slice */}
          <path d="M102 66c-6-16 8-26 22-18" fill="none" stroke="#FDE047" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );

    case 'peeler':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Classic Swiss Y-shaped "Rex" peeler */}
          <path d="M98 42h44l-14 42h-16z" fill="none" stroke="#CBD5E1" strokeWidth="9" strokeLinejoin="round" />
          <path d="M98 42h44l-14 42h-16z" fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <rect x="112" y="84" width="16" height="52" rx="8" fill="#94A3B8" stroke={INK} strokeWidth="3" />
          {/* Swivel slotted blade across top */}
          <rect x="94" y="38" width="52" height="9" rx="2" fill="#F8FAFC" stroke={INK} strokeWidth="2.5" />
          <line x1="104" y1="42.5" x2="136" y2="42.5" stroke={INK} strokeWidth="2" />
          {/* Side eye-remover loop */}
          <circle cx="91" cy="52" r="5" fill="none" stroke={INK} strokeWidth="2.5" />
        </svg>
      );

    case 'bridge':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* High canyon arch bridge + elastic bungee jumper */}
          <rect x="38" y="34" width="164" height="12" rx="2" fill="#475569" stroke={INK} strokeWidth="2.8" />
          <path d="M56 128c24-62 104-62 128 0" fill="none" stroke="#64748B" strokeWidth="6" />
          <line x1="78" y1="46" x2="78" y2="92" stroke="#64748B" strokeWidth="4" />
          <line x1="162" y1="46" x2="162" y2="92" stroke="#64748B" strokeWidth="4" />
          {/* Water below */}
          <path d="M38 134c18-6 36 6 54 0s36 6 54 0 36 6 56 0" fill="none" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
          {/* Elastic cord + diver */}
          <path d="M120 46c-4 14 4 24 0 42" fill="none" stroke="#F59E0B" strokeWidth="3" />
          <circle cx="120" cy="108" r="6" fill="#EF4444" stroke={INK} strokeWidth="2" />
          <path d="M120 88v14M112 96l8-6 8 6" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'rotor':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Autogiro (Gyroplane) with overhead rotor + nose propeller */}
          <line x1="48" y1="42" x2="188" y2="42" stroke={INK} strokeWidth="5" strokeLinecap="round" />
          <line x1="118" y1="42" x2="118" y2="74" stroke={INK} strokeWidth="4" />
          {/* Fuselage & tail fin */}
          <path d="M62 84l16-14h16v14l56-2c18 0 26 8 26 16s-8 14-26 14H82l-20-28z" fill="#38BDF8" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          {/* Nose propeller */}
          <line x1="180" y1="76" x2="180" y2="118" stroke="#D97706" strokeWidth="4.5" strokeLinecap="round" />
          {/* Open cockpit & wheels */}
          <path d="M120 82c4-8 14-8 18 0" fill="#FEF08A" stroke={INK} strokeWidth="2.5" />
          <line x1="138" y1="112" x2="144" y2="128" stroke={INK} strokeWidth="3" />
          <circle cx="144" cy="128" r="7" fill="#1E293B" stroke={INK} strokeWidth="2" />
        </svg>
      );

    case 'elevator':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Hoisting cable, pulley & elevator cab inside shaft */}
          <circle cx="120" cy="24" r="8" fill="#64748B" stroke={INK} strokeWidth="2.5" />
          <line x1="120" y1="32" x2="120" y2="46" stroke={INK} strokeWidth="3" />
          <rect x="74" y="46" width="92" height="88" rx="6" fill="#CBD5E1" stroke={INK} strokeWidth="3" />
          <rect x="86" y="58" width="68" height="68" rx="3" fill="#E2E8F0" stroke={INK} strokeWidth="2" />
          <line x1="120" y1="58" x2="120" y2="126" stroke={INK} strokeWidth="2.5" />
          {/* Safety ratchet teeth on rail + up arrow */}
          <rect x="174" y="64" width="16" height="44" rx="4" fill="#1E293B" />
          <path d="M178 84l4-7 4 7" fill="none" stroke="#4ADE80" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="182" cy="96" r="3" fill="#FACC15" />
        </svg>
      );

    case 'yogurt':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Yogurt tub with peeled foil lid, creamy swirl & spoon */}
          <path d="M78 58h84l-12 70H90z" fill="#FFFFFF" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <ellipse cx="120" cy="58" rx="42" ry="10" fill="#FEFCE8" stroke={INK} strokeWidth="2.8" />
          {/* Peeled blue foil lid */}
          <path d="M76 58c8-16 28-24 44-16l-10 14z" fill="#3B82F6" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          {/* Spoon sticking out */}
          <line x1="126" y1="60" x2="152" y2="28" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />
          <rect x="92" y="78" width="56" height="26" rx="4" fill="#DBEAFE" />
          <circle cx="120" cy="91" r="8" fill="#60A5FA" />
        </svg>
      );

    case 'dessert':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Layered Tiramisu slice on plate with cocoa dusting */}
          <ellipse cx="120" cy="128" rx="74" ry="12" fill="#F1F5F9" stroke={INK} strokeWidth="2.5" />
          <rect x="68" y="48" width="104" height="72" rx="6" fill="#FEF3C7" stroke={INK} strokeWidth="3" />
          {/* Dark cocoa top */}
          <rect x="68" y="48" width="104" height="14" rx="4" fill="#78350F" stroke={INK} strokeWidth="2.5" />
          {/* Espresso ladyfinger layers */}
          <rect x="70" y="74" width="100" height="10" fill="#92400E" />
          <rect x="70" y="96" width="100" height="10" fill="#92400E" />
          {/* Cocoa cream swirls on top */}
          <circle cx="96" cy="44" r="7" fill="#FEFCE8" stroke={INK} strokeWidth="2" />
          <circle cx="120" cy="42" r="8" fill="#FEFCE8" stroke={INK} strokeWidth="2" />
          <circle cx="144" cy="44" r="7" fill="#FEFCE8" stroke={INK} strokeWidth="2" />
        </svg>
      );

    case 'doner':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Toasted triangle flatbread Döner pocket packed with fillings */}
          <path d="M58 64c24-22 100-22 124 0l-62 66-62-66z" fill="#FDE68A" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          {/* Crisp lettuce & red cabbage peeking out top */}
          <circle cx="84" cy="54" r="14" fill="#22C55E" stroke={INK} strokeWidth="2.2" />
          <circle cx="156" cy="54" r="14" fill="#A855F7" stroke={INK} strokeWidth="2.2" />
          <circle cx="120" cy="48" r="15" fill="#DC2626" stroke={INK} strokeWidth="2.2" />
          {/* Shaved roasted meat strips */}
          <path d="M88 58h64l-32 22z" fill="#92400E" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
          {/* Garlic sauce zig-zag */}
          <path d="M94 58c8 8 14-4 22 4s14-4 22 4" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          {/* Grill marks on flatbread */}
          <line x1="90" y1="86" x2="110" y2="86" stroke="#B45309" strokeWidth="3" strokeLinecap="round" />
          <line x1="124" y1="98" x2="144" y2="98" stroke="#B45309" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'taco':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Folded corn tortilla taco with seasoned filling, lettuce & tomato */}
          <path d="M52 102c0-26 30-46 68-46s68 20 68 46" fill="#16A34A" stroke={INK} strokeWidth="2.5" />
          <circle cx="88" cy="64" r="9" fill="#EF4444" stroke={INK} strokeWidth="2" />
          <circle cx="148" cy="66" r="8" fill="#EF4444" stroke={INK} strokeWidth="2" />
          <path d="M96 58c16-6 34-6 48 0" fill="none" stroke="#78350F" strokeWidth="8" strokeLinecap="round" />
          {/* Golden speckled tortilla shell */}
          <path d="M50 108c0-32 30-48 70-48s70 16 70 48c0 8-140 8-140 0z" fill="#FACC15" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <circle cx="88" cy="92" r="2.5" fill="#B45309" />
          <circle cx="122" cy="84" r="2.5" fill="#B45309" />
          <circle cx="148" cy="96" r="2.5" fill="#B45309" />
        </svg>
      );

    case 'sushi':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Wooden geta board + 2 detailed Nigiri pieces + chopsticks */}
          <rect x="48" y="96" width="144" height="16" rx="4" fill="#92400E" stroke={INK} strokeWidth="2.8" />
          <rect x="64" y="112" width="12" height="10" fill="#78350F" stroke={INK} strokeWidth="2" />
          <rect x="164" y="112" width="12" height="10" fill="#78350F" stroke={INK} strokeWidth="2" />
          {/* Salmon nigiri */}
          <rect x="64" y="70" width="46" height="24" rx="9" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" />
          <path d="M60 72c14-14 38-14 54 0-6 7-48 7-54 0z" fill="#F97316" stroke={INK} strokeWidth="2.5" />
          <line x1="74" y1="68" x2="80" y2="74" stroke="#FED7AA" strokeWidth="2" />
          <line x1="90" y1="68" x2="96" y2="74" stroke="#FED7AA" strokeWidth="2" />
          {/* Tuna nigiri with nori band */}
          <rect x="128" y="70" width="46" height="24" rx="9" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" />
          <path d="M124 72c14-14 38-14 54 0-6 7-48 7-54 0z" fill="#DC2626" stroke={INK} strokeWidth="2.5" />
          <rect x="145" y="62" width="10" height="32" fill="#1E293B" />
          {/* Chopsticks */}
          <line x1="70" y1="36" x2="180" y2="44" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
          <line x1="70" y1="46" x2="180" y2="52" stroke="#92400E" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'tempura':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Ceramic dish + 2 golden crispy tempura shrimp (Ebiten) */}
          <ellipse cx="116" cy="116" rx="68" ry="18" fill="#F8FAFC" stroke={INK} strokeWidth="3" />
          <path d="M68 102c10-28 42-38 74-20l-8 18c-22-8-46-2-66 2z" fill="#FBBF24" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
          <polygon points="140,80 162,70 156,94" fill="#EF4444" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M84 114c12-22 38-28 66-14l-6 14c-18-6-40-2-60 0z" fill="#FACC15" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
          <polygon points="148,98 170,92 162,114" fill="#EF4444" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
          {/* Dipping sauce bowl */}
          <path d="M168 118h36l-4 14h-28z" fill="#334155" stroke={INK} strokeWidth="2.2" />
        </svg>
      );

    case 'cinnamon':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Rolled multi-layered Ceylon cinnamon quills */}
          <g transform="rotate(-16 120 82)">
            <rect x="58" y="60" width="112" height="22" rx="11" fill="#92400E" stroke={INK} strokeWidth="2.8" />
            <circle cx="166" cy="71" r="10" fill="#FDE68A" stroke={INK} strokeWidth="2.2" />
            <path d="M166 71a4 4 0 1 1-4-4 6 6 0 0 1 6 6" fill="none" stroke="#78350F" strokeWidth="2" />
            <rect x="64" y="84" width="112" height="22" rx="11" fill="#B45309" stroke={INK} strokeWidth="2.8" />
            <circle cx="172" cy="95" r="10" fill="#FDE68A" stroke={INK} strokeWidth="2.2" />
            <path d="M172 95a4 4 0 1 1-4-4 6 6 0 0 1 6 6" fill="none" stroke="#78350F" strokeWidth="2" />
          </g>
        </svg>
      );

    case 'table':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Stepped Periodic Table grid */}
          <rect x="44" y="34" width="152" height="92" rx="6" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
          {/* Column 1 & 18 tops */}
          <rect x="54" y="44" width="14" height="14" fill="#EF4444" stroke={INK} strokeWidth="1.5" />
          <rect x="172" y="44" width="14" height="14" fill="#A855F7" stroke={INK} strokeWidth="1.5" />
          {/* Period 2 & 3 s- and p-blocks */}
          {[0, 1].map((r) => (
            <React.Fragment key={r}>
              <rect x="54" y={58 + r * 14} width="14" height="14" fill="#F97316" stroke={INK} strokeWidth="1.5" />
              <rect x="68" y={58 + r * 14} width="14" height="14" fill="#FACC15" stroke={INK} strokeWidth="1.5" />
              {[0, 1, 2, 3].map((c) => (
                <rect key={c} x={130 + c * 14} y={58 + r * 14} width="14" height="14" fill={c === 3 ? '#A855F7' : '#22C55E'} stroke={INK} strokeWidth="1.5" />
              ))}
            </React.Fragment>
          ))}
          {/* Transition metals d-block */}
          {[0, 1].map((r) =>
            Array.from({ length: 9 }, (_, c) => (
              <rect key={`${r}-${c}`} x={54 + c * 14} y={86 + r * 14} width="14" height="14" fill="#60A5FA" stroke={INK} strokeWidth="1.5" />
            ))
          )}
        </svg>
      );

    case 'chart':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Stock exchange candlestick & trend chart */}
          <rect x="48" y="30" width="144" height="100" rx="6" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
          <line x1="64" y1="44" x2="64" y2="116" stroke="#94A3B8" strokeWidth="2" />
          <line x1="64" y1="116" x2="178" y2="116" stroke="#94A3B8" strokeWidth="2" />
          {[
            [80, 78, 20, '#16A34A'],
            [102, 84, 16, '#EF4444'],
            [124, 62, 24, '#16A34A'],
            [146, 56, 18, '#16A34A'],
            [168, 48, 20, '#16A34A'],
          ].map(([x, y, h, col], i) => (
            <React.Fragment key={i}>
              <line x1={Number(x)} y1={Number(y) - 6} x2={Number(x)} y2={Number(y) + Number(h) + 6} stroke={INK} strokeWidth="2" />
              <rect x={Number(x) - 5} y={Number(y)} width="10" height={Number(h)} rx="1.5" fill={String(col)} stroke={INK} strokeWidth="1.5" />
            </React.Fragment>
          ))}
        </svg>
      );

    case 'road':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Macadam crushed-stone road cutaway + surfaced road */}
          <polygon points="96,30 144,30 184,104 56,104" fill="#475569" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <line x1="120" y1="40" x2="120" y2="96" stroke="#FACC15" strokeWidth="4.5" strokeDasharray="10 8" />
          {/* Crushed stone aggregate foundation cross-section */}
          <rect x="56" y="104" width="128" height="26" fill="#94A3B8" stroke={INK} strokeWidth="2.8" />
          {[70, 88, 106, 124, 142, 160].map((x, i) => (
            <circle key={x} cx={x} cy={i % 2 === 0 ? 114 : 120} r="4.5" fill="#475569" />
          ))}
        </svg>
      );

    case 'furnace':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* African clay blast furnace shaft + air tuyère + molten steel tap */}
          <polygon points="84,132 146,132 132,36 98,36" fill="#9A3412" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          {/* Air tuyère bellows pipe */}
          <rect x="52" y="108" width="38" height="10" rx="2" fill="#64748B" stroke={INK} strokeWidth="2.2" />
          {/* Glowing furnace hearth & molten tap */}
          <path d="M104 132c0-18 22-18 22 0z" fill="#FACC15" stroke="#EA580C" strokeWidth="2" />
          <path d="M138 118h36v14h-36z" fill="#FACC15" stroke={INK} strokeWidth="2.2" />
          {/* Heat/smoke above chimney */}
          <path d="M108 28c-4-7 4-11 0-16M122 28c-4-7 4-11 0-16" fill="none" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'freeze':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Andean Chuño freeze-drying: mountain frost crystal + drying tubers */}
          <line x1="120" y1="24" x2="120" y2="86" stroke="#0284C7" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="88" y1="55" x2="152" y2="55" stroke="#0284C7" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="98" y1="33" x2="142" y2="77" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="142" y1="33" x2="98" y2="77" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" />
          {/* Andean frost-dried potatoes */}
          <ellipse cx="90" cy="116" rx="22" ry="13" fill="#CBD5E1" stroke={INK} strokeWidth="2.8" />
          <ellipse cx="148" cy="116" rx="22" ry="13" fill="#94A3B8" stroke={INK} strokeWidth="2.8" />
        </svg>
      );

    case 'windtower':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Persian Badgir windcatcher tower + conical Yakhchal ice dome */}
          <path d="M116 130c6-50 20-84 36-84s30 34 36 84z" fill="#FDE68A" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <rect x="64" y="34" width="44" height="96" rx="3" fill="#F59E0B" stroke={INK} strokeWidth="3" />
          {[72, 84, 96].map((x) => (
            <rect key={x} x={x} y="42" width="6" height="36" fill="#78350F" />
          ))}
          {/* Cool airflow arrows */}
          <path d="M40 52h18M40 66h18" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    case 'heating':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Ondol underfloor heating cutaway: hearth fire + stone flues + rising warmth */}
          <rect x="52" y="84" width="136" height="14" rx="2" fill="#CBD5E1" stroke={INK} strokeWidth="2.8" />
          <rect x="52" y="98" width="136" height="28" fill="#78350F" stroke={INK} strokeWidth="2.8" />
          {/* Underfloor flue tunnels glowing warm */}
          {[86, 118, 150].map((x) => (
            <rect key={x} x={x} y="104" width="18" height="16" rx="3" fill="#F97316" stroke={INK} strokeWidth="2" />
          ))}
          <path d="M58 122c0-14 16-14 16 0z" fill="#EF4444" />
          {/* Rising heat waves above stone floor */}
          <path d="M90 72c-4-9 6-13 2-22M120 72c-4-9 6-13 2-22M150 72c-4-9 6-13 2-22" fill="none" stroke="#EF4444" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    case 'seismograph':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Rotating paper drum seismograph + pendulum stylus tracing quake waves */}
          <rect x="46" y="120" width="148" height="14" rx="3" fill="#475569" stroke={INK} strokeWidth="2.8" />
          {/* Rotating drum */}
          <rect x="58" y="64" width="74" height="54" rx="6" fill="#FEFCE8" stroke={INK} strokeWidth="3" />
          <path d="M64 92h14l5-16 6 28 6-20 5 12 6-4h20" fill="none" stroke="#DC2626" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          {/* Frame & suspended pendulum weight */}
          <path d="M168 120V32h-30" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
          <circle cx="152" cy="76" r="14" fill="#F59E0B" stroke={INK} strokeWidth="2.8" />
          <line x1="152" y1="32" x2="152" y2="62" stroke={INK} strokeWidth="2.5" />
          <line x1="138" y1="84" x2="122" y2="92" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'scanner':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Medical CT Scanner Gantry ring + sliding table */}
          <circle cx="120" cy="74" r="46" fill="#F8FAFC" stroke={INK} strokeWidth="3" />
          <circle cx="120" cy="74" r="24" fill="#1E293B" stroke={INK} strokeWidth="2.5" />
          <circle cx="120" cy="74" r="34" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="10 6" />
          {/* Patient bed */}
          <rect x="64" y="116" width="112" height="16" rx="4" fill="#CBD5E1" stroke={INK} strokeWidth="2.8" />
          <rect x="98" y="84" width="44" height="32" rx="4" fill="#94A3B8" stroke={INK} strokeWidth="2.5" />
        </svg>
      );

    case 'hologram':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Laser emitter + holographic plate projecting floating 3D wireframe cube */}
          <rect x="68" y="114" width="104" height="16" rx="4" fill="#334155" stroke={INK} strokeWidth="3" />
          <polygon points="84,48 156,48 144,114 96,114" fill="#38BDF8" opacity="0.22" />
          {/* 3D glowing wireframe cube */}
          <polygon points="120,34 150,48 120,62 90,48" fill="#7DD3FC" fillOpacity="0.65" stroke="#0284C7" strokeWidth="2.5" strokeLinejoin="round" />
          <polygon points="90,48 120,62 120,94 90,80" fill="#38BDF8" fillOpacity="0.55" stroke="#0284C7" strokeWidth="2.5" strokeLinejoin="round" />
          <polygon points="120,62 150,48 150,80 120,94" fill="#0EA5E9" fillOpacity="0.55" stroke="#0284C7" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      );

    case 'sms':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Classic GSM keypad mobile phone + incoming SMS bubble */}
          <rect x="68" y="24" width="66" height="112" rx="10" fill="#334155" stroke={INK} strokeWidth="3" />
          <line x1="120" y1="16" x2="120" y2="24" stroke={INK} strokeWidth="5" strokeLinecap="round" />
          <rect x="78" y="34" width="46" height="36" rx="4" fill="#BAE6FD" stroke={INK} strokeWidth="2" />
          {/* Keypad grid */}
          {[0, 1, 2].map((r) =>
            [0, 1, 2].map((c) => (
              <rect key={`${r}-${c}`} x={80 + c * 15} y={80 + r * 14} width="11" height="9" rx="2" fill="#CBD5E1" />
            ))
          )}
          {/* SMS Speech bubble */}
          <path d="M120 38h64a8 8 0 0 1 8 8v26a8 8 0 0 1-8 8h-44l-14 12v-12h-6a8 8 0 0 1-8-8V46a8 8 0 0 1 8-8z" fill="#22C55E" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          <text x="152" y="64" textAnchor="middle" fontSize="14" fontWeight="800" fill="#FFFFFF">SMS</text>
        </svg>
      );

    case 'xray':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Medical radiograph of hand bones on dark lightbox */}
          <rect x="64" y="24" width="112" height="112" rx="8" fill="#0F172A" stroke={INK} strokeWidth="3" />
          <g stroke="#E2E8F0" strokeWidth="5" strokeLinecap="round">
            <line x1="120" y1="122" x2="120" y2="96" />
            <line x1="120" y1="96" x2="94" y2="54" />
            <line x1="120" y1="96" x2="108" y2="42" />
            <line x1="120" y1="96" x2="124" y2="38" />
            <line x1="120" y1="96" x2="140" y2="46" />
            <line x1="120" y1="98" x2="152" y2="74" />
          </g>
        </svg>
      );

    case 'web':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Hypertext browser window & interconnected globe */}
          <rect x="50" y="30" width="140" height="100" rx="8" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
          <rect x="50" y="30" width="140" height="20" rx="6" fill="#E2E8F0" stroke={INK} strokeWidth="2.5" />
          <circle cx="64" cy="40" r="3.5" fill="#EF4444" />
          <circle cx="76" cy="40" r="3.5" fill="#FACC15" />
          <circle cx="88" cy="40" r="3.5" fill="#22C55E" />
          <circle cx="120" cy="90" r="28" fill="#DBEAFE" stroke={INK} strokeWidth="2.5" />
          <ellipse cx="120" cy="90" rx="12" ry="28" fill="none" stroke="#2563EB" strokeWidth="2.2" />
          <line x1="92" y1="90" x2="148" y2="90" stroke="#2563EB" strokeWidth="2.2" />
        </svg>
      );

    case 'led':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Blue LED epoxy dome with internal lead frame & radiating glow */}
          <line x1="120" y1="18" x2="120" y2="28" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
          <line x1="80" y1="34" x2="88" y2="42" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
          <line x1="160" y1="34" x2="152" y2="42" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
          <path d="M96 86V58a24 24 0 0 1 48 0v28H96z" fill="#3B82F6" stroke={INK} strokeWidth="3" />
          <path d="M108 86V68l10-6v24z" fill="#93C5FD" />
          <rect x="90" y="86" width="60" height="10" rx="3" fill="#2563EB" stroke={INK} strokeWidth="2.5" />
          <line x1="108" y1="96" x2="108" y2="136" stroke="#94A3B8" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="132" y1="96" x2="132" y2="124" stroke="#94A3B8" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
      );

    case 'bullettrain':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Streamlined Shinkansen nose cone, wraparound cockpit & blue livery */}
          <path
            d="M42 108h138c14 0 22-6 18-16-8-18-32-34-66-34H42v50z"
            fill="#FFFFFF"
            stroke={INK}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M42 94h153" stroke="#2563EB" strokeWidth="6" />
          <path d="M132 62c16 2 28 10 34 18h-34V62z" fill="#0F172A" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
          {[56, 76, 96, 114].map((x) => (
            <rect key={x} x={x} y="72" width="12" height="10" rx="2" fill="#38BDF8" stroke={INK} strokeWidth="1.8" />
          ))}
          <line x1="34" y1="116" x2="206" y2="116" stroke="#64748B" strokeWidth="4" />
        </svg>
      );

    case 'rain':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Korean Joseon Cheugugi cylindrical bronze rain gauge on stone plinth */}
          <rect x="86" y="114" width="68" height="20" rx="3" fill="#CBD5E1" stroke={INK} strokeWidth="3" />
          <rect x="102" y="48" width="36" height="66" rx="4" fill="#D97706" stroke={INK} strokeWidth="3" />
          <ellipse cx="120" cy="48" rx="18" ry="5" fill="#92400E" stroke={INK} strokeWidth="2.5" />
          <line x1="102" y1="68" x2="138" y2="68" stroke={INK} strokeWidth="2" />
          <line x1="102" y1="92" x2="138" y2="92" stroke={INK} strokeWidth="2" />
          {/* Raindrops */}
          <line x1="104" y1="22" x2="100" y2="36" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
          <line x1="122" y1="18" x2="118" y2="32" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
          <line x1="138" y1="24" x2="134" y2="38" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'swimwear':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Tailored polka-dot two-piece bikini */}
          <line x1="94" y1="28" x2="94" y2="48" stroke={INK} strokeWidth="2.5" />
          <line x1="146" y1="28" x2="146" y2="48" stroke={INK} strokeWidth="2.5" />
          <path d="M78 72h34L94 46z" fill="#EC4899" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
          <path d="M128 72h34l-18-26z" fill="#EC4899" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
          <line x1="76" y1="72" x2="164" y2="72" stroke={INK} strokeWidth="3" />
          {/* Bottom piece */}
          <path d="M80 96h80l-30 32h-20z" fill="#EC4899" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
          <circle cx="94" cy="64" r="2.5" fill="#FFFFFF" />
          <circle cx="146" cy="64" r="2.5" fill="#FFFFFF" />
          <circle cx="120" cy="108" r="2.5" fill="#FFFFFF" />
        </svg>
      );

    case 'eyeliner':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Egyptian kohl-lined eye + brass kohl applicator */}
          <path d="M46 80c30-28 84-28 114 0-30 28-84 28-114 0z" fill="#FFFFFF" stroke={INK} strokeWidth="3.5" />
          <path d="M154 78l24-8" stroke={INK} strokeWidth="4" strokeLinecap="round" />
          <circle cx="103" cy="80" r="15" fill="#1E293B" />
          <circle cx="108" cy="75" r="4" fill="#FFFFFF" />
          {/* Brass kohl vessel & stick */}
          <rect x="172" y="88" width="22" height="36" rx="4" fill="#D97706" stroke={INK} strokeWidth="2.5" />
          <line x1="183" y1="42" x2="183" y2="88" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    case 'velcro':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Magnified hook-and-loop Velcro strips peeling apart */}
          <path d="M56 106h128v20H56z" fill="#2563EB" stroke={INK} strokeWidth="3" />
          <path d="M62 56c38-20 80-20 118 2l-10 22c-34-14-68-14-100 0z" fill="#60A5FA" stroke={INK} strokeWidth="3" />
          {/* Fuzzy loops on bottom */}
          {[72, 92, 112, 132, 152, 168].map((x) => (
            <path key={x} d={`M${x} 106c0-10 10-10 10 0`} fill="none" stroke={INK} strokeWidth="2.5" />
          ))}
          {/* Tiny hooks on top */}
          {[76, 96, 116, 136, 156].map((x) => (
            <path key={x} d={`M${x} 76v8c0 4 6 4 6 0`} fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
          ))}
        </svg>
      );

    case 'button':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Carved 4-hole button with raised rim & crisscross thread stitches */}
          <circle cx="120" cy="80" r="44" fill="#FDE68A" stroke={INK} strokeWidth="3" />
          <circle cx="120" cy="80" r="33" fill="#FEF3C7" stroke="#B45309" strokeWidth="2.2" />
          <circle cx="109" cy="69" r="4.5" fill={INK} />
          <circle cx="131" cy="69" r="4.5" fill={INK} />
          <circle cx="109" cy="91" r="4.5" fill={INK} />
          <circle cx="131" cy="91" r="4.5" fill={INK} />
          <line x1="109" y1="69" x2="131" y2="91" stroke="#DC2626" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="131" y1="69" x2="109" y2="91" stroke="#DC2626" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    case 'zipper':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Interlocking metallic zipper teeth + slider pull-tab */}
          <path d="M84 26l36 44v64M156 26l-36 44" fill="none" stroke="#CBD5E1" strokeWidth="14" strokeLinecap="round" />
          <line x1="120" y1="70" x2="120" y2="136" stroke="#64748B" strokeWidth="10" strokeDasharray="5 4" />
          <line x1="84" y1="26" x2="116" y2="66" stroke="#64748B" strokeWidth="7" strokeDasharray="4 4" />
          <line x1="156" y1="26" x2="124" y2="66" stroke="#64748B" strokeWidth="7" strokeDasharray="4 4" />
          {/* Slider body & pull tab */}
          <rect x="109" y="56" width="22" height="22" rx="4" fill="#FACC15" stroke={INK} strokeWidth="2.8" />
          <rect x="114" y="76" width="12" height="26" rx="4" fill="#F59E0B" stroke={INK} strokeWidth="2.5" />
        </svg>
      );

    case 'tie':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Shirt collar + striped Windsor-knotted tie */}
          <polygon points="84,22 120,38 96,52" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          <polygon points="156,22 120,38 144,52" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          <polygon points="108,28 132,28 126,48 114,48" fill="#1D4ED8" stroke={INK} strokeWidth="2.8" />
          <polygon points="114,48 126,48 139,116 120,138 101,116" fill="#2563EB" stroke={INK} strokeWidth="2.8" />
          <line x1="109" y1="68" x2="132" y2="80" stroke="#93C5FD" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="105" y1="92" x2="136" y2="106" stroke="#93C5FD" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    case 'coat':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Mackintosh waterproof raincoat with collar, belt, buttons & raindrops */}
          <path d="M90 30h60l28 48-16 8-12-22v68H90V64L78 86l-16-8z" fill="#FACC15" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <polygon points="94,30 120,48 102,52" fill="#FEF08A" stroke={INK} strokeWidth="2" />
          <polygon points="146,30 120,48 138,52" fill="#FEF08A" stroke={INK} strokeWidth="2" />
          <line x1="120" y1="48" x2="120" y2="132" stroke={INK} strokeWidth="2.5" />
          <rect x="88" y="84" width="64" height="8" rx="2" fill="#B45309" stroke={INK} strokeWidth="2" />
          <line x1="50" y1="26" x2="44" y2="40" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
          <line x1="190" y1="30" x2="184" y2="44" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'yarn':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Industrial Nylon synthetic filament cone/spool */}
          <polygon points="94,34 146,34 156,124 84,124" fill="#A855F7" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <ellipse cx="120" cy="34" rx="26" ry="7" fill="#CBD5E1" stroke={INK} strokeWidth="2.5" />
          <ellipse cx="120" cy="34" rx="10" ry="3" fill="#475569" />
          <line x1="90" y1="62" x2="150" y2="80" stroke="#F3E8FF" strokeWidth="2.5" />
          <line x1="88" y1="88" x2="152" y2="106" stroke="#F3E8FF" strokeWidth="2.5" />
          <path d="M154 114c18 2 22 14 34 12" fill="none" stroke="#9333EA" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'silk':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Lustrous draped silk ribbon + silkworm cocoon */}
          <path d="M56 44c38-20 82 20 124 0v68c-42 20-86-20-124 0V44z" fill="#F472B6" stroke={INK} strokeWidth="3" />
          <path d="M56 72c38-20 82 20 124 0" fill="none" stroke="#FBCFE8" strokeWidth="3.5" />
          <ellipse cx="164" cy="116" rx="18" ry="11" transform="rotate(-15 164 116)" fill="#FEFCE8" stroke={INK} strokeWidth="2.5" />
        </svg>
      );

    case 'fingerprint':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Authentic swirling dermal ridge loops */}
          <g fill="none" stroke="#1D4ED8" strokeWidth="3" strokeLinecap="round">
            <path d="M120 82c0-10 10-10 10 0 0 16-20 18-20 0 0-24 30-26 30 0 0 28-40 30-40-2" />
            <path d="M84 96c-4-34 20-58 44-54 24 4 36 30 30 58" />
            <path d="M74 106c-6-42 18-76 52-74 34 2 48 36 42 74" />
            <path d="M98 118c12 10 34 10 46-4" />
          </g>
        </svg>
      );

    case 'kaleidoscope':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Symmetrical hexagonal jewel pattern + brass tube */}
          <circle cx="144" cy="80" r="44" fill="#0F172A" stroke={INK} strokeWidth="3" />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <polygon
              key={deg}
              points="144,80 132,46 156,46"
              transform={`rotate(${deg} 144 80)`}
              fill={deg % 120 === 0 ? '#EC4899' : '#38BDF8'}
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
          ))}
          <circle cx="144" cy="80" r="9" fill="#FACC15" stroke={INK} strokeWidth="2" />
          {/* Angled brass kaleidoscope barrel */}
          <g transform="rotate(-24 72 96)">
            <rect x="44" y="84" width="60" height="22" rx="4" fill="#D97706" stroke={INK} strokeWidth="2.8" />
            <rect x="44" y="84" width="12" height="22" fill="#FACC15" stroke={INK} strokeWidth="2.2" />
          </g>
        </svg>
      );

    case 'thermos':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Vacuum flask with screw cup lid & side handle */}
          <rect x="96" y="24" width="48" height="22" rx="4" fill="#CBD5E1" stroke={INK} strokeWidth="2.8" />
          <path d="M148 56c14 0 18 28 0 36" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
          <rect x="92" y="46" width="56" height="86" rx="8" fill="#DC2626" stroke={INK} strokeWidth="3" />
          <rect x="92" y="76" width="56" height="24" fill="#F8FAFC" stroke={INK} strokeWidth="2" />
          <line x1="104" y1="56" x2="104" y2="122" stroke="#FCA5A5" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'mop':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Wringer bucket + mop */}
          <polygon points="122,76 186,76 176,132 132,132" fill="#FACC15" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <rect x="148" y="64" width="38" height="16" rx="3" fill="#EF4444" stroke={INK} strokeWidth="2.5" />
          <line x1="90" y1="22" x2="90" y2="102" stroke="#B45309" strokeWidth="6" strokeLinecap="round" />
          <rect x="66" y="98" width="48" height="12" rx="4" fill="#3B82F6" stroke={INK} strokeWidth="2.5" />
          <path d="M62 110l-8 24h72l-8-24z" fill="#F8FAFC" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      );

    case 'vacuum':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Wheeled canister vacuum with hose, wand & floor nozzle */}
          <ellipse cx="92" cy="100" rx="30" ry="22" fill="#EF4444" stroke={INK} strokeWidth="3" />
          <circle cx="76" cy="120" r="10" fill="#334155" stroke={INK} strokeWidth="2.5" />
          <circle cx="110" cy="120" r="8" fill="#334155" stroke={INK} strokeWidth="2.5" />
          <path d="M114 88c16-18 28-46 46-46l14 70" fill="none" stroke="#475569" strokeWidth="5.5" strokeLinecap="round" />
          <rect x="158" y="112" width="34" height="12" rx="3" fill="#1E293B" stroke={INK} strokeWidth="2.5" />
        </svg>
      );

    case 'shower':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Electric showerhead (Chuveiro Elétrico) with wall pipe & temperature dial */}
          <path d="M56 34h46v14" fill="none" stroke="#94A3B8" strokeWidth="8" strokeLinecap="round" />
          <path d="M76 48h58l14 26H62z" fill="#F8FAFC" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <circle cx="106" cy="60" r="6" fill="#EF4444" stroke={INK} strokeWidth="2" />
          {/* Warm spray streams */}
          {[76, 92, 108, 124, 138].map((x) => (
            <line key={x} x1={x} y1="80" x2={x + (x - 106) * 0.25} y2="128" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 5" />
          ))}
        </svg>
      );

    case 'torch':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Fluted Olympic torch + layered flame */}
          <polygon points="96,70 144,70 128,136 112,136" fill="#F59E0B" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <rect x="92" y="64" width="56" height="9" rx="3" fill="#FDE047" stroke={INK} strokeWidth="2.5" />
          <path d="M120 20c18 16 22 32 0 44-22-12-18-28 0-44z" fill="#EF4444" stroke={INK} strokeWidth="2.5" />
          <path d="M120 34c10 10 12 20 0 28-12-8-10-18 0-28z" fill="#FACC15" />
        </svg>
      );

    case 'match':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Matchbox with striker strip + struck lit match */}
          <rect x="64" y="42" width="54" height="86" rx="4" fill="#FDE68A" stroke={INK} strokeWidth="3" />
          <rect x="74" y="54" width="34" height="58" rx="3" fill="#EF4444" stroke={INK} strokeWidth="2" />
          <rect x="114" y="44" width="8" height="82" fill="#78350F" />
          {/* Lit match */}
          <rect x="148" y="68" width="10" height="62" rx="2" fill="#FDE68A" stroke={INK} strokeWidth="2.5" />
          <ellipse cx="153" cy="58" rx="8" ry="12" fill="#DC2626" stroke={INK} strokeWidth="2.5" />
          <path d="M153 24c10 10 10 20 0 26-10-6-10-16 0-26z" fill="#FACC15" stroke="#EA580C" strokeWidth="1.5" />
        </svg>
      );

    case 'sundial':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Circular stone/bronze sundial plate with radial hour marks + gnomon */}
          <ellipse cx="120" cy="102" rx="64" ry="28" fill="#FDE68A" stroke={INK} strokeWidth="3" />
          <line x1="74" y1="102" x2="106" y2="102" stroke={INK} strokeWidth="2" />
          <line x1="134" y1="102" x2="166" y2="102" stroke={INK} strokeWidth="2" />
          <line x1="120" y1="78" x2="120" y2="90" stroke={INK} strokeWidth="2" />
          <polygon points="120,104 120,44 156,96" fill="#D97706" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <circle cx="68" cy="40" r="11" fill="#FACC15" stroke={INK} strokeWidth="2" />
        </svg>
      );

    case 'stamp':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Perforated Penny-Black style postage stamp + wavy cancellation */}
          <rect x="74" y="28" width="92" height="104" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="3" strokeDasharray="5 4" />
          <rect x="84" y="38" width="72" height="84" fill="#1E293B" />
          <circle cx="120" cy="74" r="17" fill="#FDE68A" />
          <path d="M104 106c4-12 28-12 32 0z" fill="#FDE68A" />
          <path d="M54 58c16-6 26 6 40 0M54 70c16-6 26 6 40 0" fill="none" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'postcard':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="48" y="38" width="144" height="88" rx="6" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
          <line x1="122" y1="48" x2="122" y2="116" stroke="#CBD5E1" strokeWidth="2.5" />
          {/* Scenic corner art on left */}
          <rect x="58" y="50" width="54" height="64" rx="3" fill="#DBEAFE" stroke={INK} strokeWidth="2" />
          <polygon points="62,110 82,78 100,110" fill="#22C55E" />
          <circle cx="96" cy="64" r="6" fill="#FACC15" />
          {/* Stamp & address lines on right */}
          <rect x="158" y="48" width="22" height="26" fill="#F97316" stroke={INK} strokeWidth="2" strokeDasharray="3 2" />
          <line x1="132" y1="88" x2="178" y2="88" stroke="#64748B" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="132" y1="102" x2="172" y2="102" stroke="#64748B" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      );

    case 'speaker':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <rect x="74" y="26" width="86" height="108" rx="8" fill="#334155" stroke={INK} strokeWidth="3" />
          <circle cx="117" cy="52" r="11" fill="#1E293B" stroke="#94A3B8" strokeWidth="2.5" />
          <circle cx="117" cy="96" r="24" fill="#1E293B" stroke="#F59E0B" strokeWidth="3" />
          <circle cx="117" cy="96" r="9" fill="#475569" stroke="#94A3B8" strokeWidth="2" />
          <path d="M170 68c8 10 8 24 0 34M182 58c12 16 12 38 0 54" fill="none" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'mic':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Stage handheld microphone + notes */}
          <g transform="rotate(-24 106 84)">
            <rect x="98" y="64" width="16" height="62" rx="4" fill="#334155" stroke={INK} strokeWidth="2.8" />
            <circle cx="106" cy="48" r="20" fill="#94A3B8" stroke={INK} strokeWidth="3" />
            <line x1="87" y1="48" x2="125" y2="48" stroke={INK} strokeWidth="2.5" />
          </g>
          <text x="150" y="54" fontSize="22" fontWeight="700" fill="#EC4899">♫</text>
          <text x="172" y="84" fontSize="18" fontWeight="700" fill="#3B82F6">♪</text>
        </svg>
      );

    case 'mancala':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Wooden Mancala board with 2 end Kalah stores & 2×5 pits with colorful pebbles */}
          <rect x="38" y="48" width="164" height="64" rx="14" fill="#B45309" stroke={INK} strokeWidth="3" />
          <rect x="48" y="58" width="16" height="44" rx="8" fill="#78350F" stroke={INK} strokeWidth="2" />
          <rect x="176" y="58" width="16" height="44" rx="8" fill="#78350F" stroke={INK} strokeWidth="2" />
          {[78, 98, 120, 142, 162].map((x, idx) => (
            <React.Fragment key={x}>
              <circle cx={x} cy="69" r="8" fill="#78350F" stroke={INK} strokeWidth="1.5" />
              <circle cx={x} cy="91" r="8" fill="#78350F" stroke={INK} strokeWidth="1.5" />
              <circle cx={x - 2} cy="69" r="2.5" fill={idx % 2 === 0 ? '#38BDF8' : '#FACC15'} />
              <circle cx={x + 2} cy="91" r="2.5" fill={idx % 2 === 0 ? '#4ADE80' : '#F472B6'} />
            </React.Fragment>
          ))}
        </svg>
      );

    case 'ladder':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Snakes & Ladders checkered game board */}
          <rect x="58" y="26" width="124" height="108" rx="6" fill="#FEF3C7" stroke={INK} strokeWidth="3" />
          <line x1="99" y1="26" x2="99" y2="134" stroke="#E2E8F0" strokeWidth="2" />
          <line x1="141" y1="26" x2="141" y2="134" stroke="#E2E8F0" strokeWidth="2" />
          <line x1="58" y1="62" x2="182" y2="62" stroke="#E2E8F0" strokeWidth="2" />
          <line x1="58" y1="98" x2="182" y2="98" stroke="#E2E8F0" strokeWidth="2" />
          {/* Wooden ladder */}
          <line x1="80" y1="40" x2="80" y2="120" stroke="#92400E" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="108" y1="40" x2="108" y2="120" stroke="#92400E" strokeWidth="4.5" strokeLinecap="round" />
          {[56, 76, 96, 112].map((y) => (
            <line key={y} x1="80" y1={y} x2="108" y2={y} stroke="#92400E" strokeWidth="3.5" />
          ))}
          {/* Friendly winding game snake */}
          <path d="M132 118c22-14-14-30 14-46 20-12-8-26 10-36" fill="none" stroke="#16A34A" strokeWidth="7" strokeLinecap="round" />
          <circle cx="158" cy="36" r="6" fill="#16A34A" stroke={INK} strokeWidth="2" />
        </svg>
      );

    case 'golf':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <ellipse cx="120" cy="124" rx="64" ry="14" fill="#22C55E" stroke={INK} strokeWidth="2.8" />
          <ellipse cx="136" cy="122" rx="8" ry="3" fill="#1E293B" />
          <line x1="136" y1="28" x2="136" y2="122" stroke={INK} strokeWidth="3" />
          <polygon points="136,28 176,42 136,56" fill="#EF4444" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          {/* Golf ball on tee */}
          <line x1="80" y1="114" x2="80" y2="124" stroke="#FACC15" strokeWidth="3" />
          <circle cx="80" cy="106" r="9" fill="#FFFFFF" stroke={INK} strokeWidth="2.2" />
        </svg>
      );

    case 'hockey':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Two crossed hockey sticks + vulcanized puck */}
          <path d="M62 32l68 88h32" fill="none" stroke="#B45309" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M178 32l-68 88H78" fill="none" stroke="#D97706" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="120" cy="122" rx="18" ry="8" fill="#1E293B" stroke={INK} strokeWidth="2.5" />
        </svg>
      );

    case 'soccer':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Classic stitched soccer ball */}
          <circle cx="120" cy="80" r="44" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
          <polygon points="120,62 137,74 131,94 109,94 103,74" fill={INK} />
          <line x1="120" y1="62" x2="120" y2="36" stroke={INK} strokeWidth="2.5" />
          <line x1="137" y1="74" x2="162" y2="66" stroke={INK} strokeWidth="2.5" />
          <line x1="103" y1="74" x2="78" y2="66" stroke={INK} strokeWidth="2.5" />
          <line x1="131" y1="94" x2="148" y2="114" stroke={INK} strokeWidth="2.5" />
          <line x1="109" y1="94" x2="92" y2="114" stroke={INK} strokeWidth="2.5" />
          <polygon points="110,38 130,38 120,46" fill={INK} />
        </svg>
      );

    case 'skateboard':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <g transform="rotate(-10 120 84)">
            <path d="M46 76l10 8h128l10-8" fill="none" stroke="#EF4444" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="74" y="84" width="14" height="10" fill="#94A3B8" stroke={INK} strokeWidth="2" />
            <rect x="152" y="84" width="14" height="10" fill="#94A3B8" stroke={INK} strokeWidth="2" />
            <circle cx="76" cy="100" r="10" fill="#FACC15" stroke={INK} strokeWidth="2.5" />
            <circle cx="164" cy="100" r="10" fill="#FACC15" stroke={INK} strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'wheelbarrow':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <polygon points="72,52 168,52 152,96 86,96" fill="#22C55E" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <line x1="48" y1="64" x2="164" y2="110" stroke={INK} strokeWidth="4.5" strokeLinecap="round" />
          <path d="M92 96l-8 30h14" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="164" cy="112" r="15" fill="#334155" stroke={INK} strokeWidth="3" />
          <circle cx="164" cy="112" r="5" fill="#CBD5E1" />
        </svg>
      );

    case 'wrench':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Adjustable Crescent wrench with open U-jaw & worm gear */}
          <g transform="rotate(-28 120 80)">
            <path
              d="M72 60c-12 0-22 10-22 22s10 22 22 22h16v-12H70c-5 0-8-4-8-10s3-10 8-10h18V60H72z"
              fill="#CBD5E1"
              stroke={INK}
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <rect x="86" y="72" width="96" height="18" rx="8" fill="#94A3B8" stroke={INK} strokeWidth="3" />
            <rect x="88" y="88" width="12" height="10" rx="2" fill="#475569" stroke={INK} strokeWidth="2" />
            <circle cx="170" cy="81" r="4" fill="#F8FAFC" stroke={INK} strokeWidth="2" />
          </g>
        </svg>
      );

    case 'seatbelt':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Car seat backrest + 3-point diagonal/lap strap + buckle */}
          <rect x="64" y="28" width="74" height="104" rx="16" fill="#E2E8F0" stroke={INK} strokeWidth="3" />
          <path d="M70 38l84 82M64 114h92" fill="none" stroke="#334155" strokeWidth="12" strokeLinecap="round" />
          <rect x="136" y="96" width="32" height="24" rx="4" fill="#CBD5E1" stroke={INK} strokeWidth="2.5" />
          <rect x="148" y="101" width="14" height="14" rx="2" fill="#EF4444" stroke={INK} strokeWidth="1.8" />
        </svg>
      );

    case 'car':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Classic early motorcar with brass headlamp, open cab & spoked wheels */}
          <path d="M62 96h112v-16c0-10-10-18-24-18h-20l-6-16H82v34H62z" fill="#DC2626" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <line x1="126" y1="62" x2="136" y2="46" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="178" cy="76" r="6" fill="#FACC15" stroke={INK} strokeWidth="2" />
          <circle cx="84" cy="108" r="18" fill="#1E293B" stroke={INK} strokeWidth="3" />
          <circle cx="84" cy="108" r="8" fill="#CBD5E1" />
          <circle cx="156" cy="108" r="18" fill="#1E293B" stroke={INK} strokeWidth="3" />
          <circle cx="156" cy="108" r="8" fill="#CBD5E1" />
        </svg>
      );

    case 'ship':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* 15th-century wooden Caravel with two masts & billowing cross sails */}
          <line x1="102" y1="24" x2="102" y2="96" stroke={INK} strokeWidth="3.5" />
          <line x1="148" y1="36" x2="148" y2="96" stroke={INK} strokeWidth="3" />
          <path d="M68 38c26 0 42 4 46 40H68c8-14 8-26 0-40z" fill="#FFFFFF" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
          <path d="M90 50v18M82 59h16" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
          <polygon points="148,40 184,80 148,80" fill="#FEF3C7" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M64 94h112l-16 30H80L64 94z" fill="#92400E" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <path d="M44 128c18-6 36 6 54 0s36 6 54 0 36 6 48 0" fill="none" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    case 'submarine':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <path d="M114 30v22h18" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
          <rect x="94" y="48" width="38" height="22" rx="4" fill="#FACC15" stroke={INK} strokeWidth="2.8" />
          <ellipse cx="122" cy="92" rx="60" ry="24" fill="#FACC15" stroke={INK} strokeWidth="3" />
          <rect x="52" y="80" width="10" height="24" rx="2" fill="#D97706" stroke={INK} strokeWidth="2.5" />
          <circle cx="96" cy="92" r="7" fill="#7DD3FC" stroke={INK} strokeWidth="2" />
          <circle cx="122" cy="92" r="7" fill="#7DD3FC" stroke={INK} strokeWidth="2" />
          <circle cx="148" cy="92" r="7" fill="#7DD3FC" stroke={INK} strokeWidth="2" />
        </svg>
      );

    case 'windmill':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <polygon points="94,136 146,136 134,64 106,64" fill="#F1F5F9" stroke={INK} strokeWidth="3" />
          <path d="M104 64c0-14 32-14 32 0z" fill="#92400E" stroke={INK} strokeWidth="2.5" />
          {/* 4 lattice sails */}
          <g transform="rotate(45 120 64)">
            <rect x="116" y="14" width="12" height="40" fill="#FEF3C7" stroke="#92400E" strokeWidth="2.5" />
            <rect x="112" y="74" width="12" height="40" fill="#FEF3C7" stroke="#92400E" strokeWidth="2.5" />
            <rect x="70" y="56" width="40" height="12" fill="#FEF3C7" stroke="#92400E" strokeWidth="2.5" />
            <rect x="130" y="60" width="40" height="12" fill="#FEF3C7" stroke="#92400E" strokeWidth="2.5" />
          </g>
          <circle cx="120" cy="64" r="6" fill="#D97706" stroke={INK} strokeWidth="2" />
        </svg>
      );

    case 'potato':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <path d="M60 92c0-24 22-40 48-38 26 2 42 16 42 36s-20 36-46 36c-26 0-44-14-44-34z" fill="#D97706" stroke={INK} strokeWidth="3" />
          <ellipse cx="148" cy="104" rx="28" ry="20" fill="#FEF08A" stroke={INK} strokeWidth="2.8" />
          <circle cx="88" cy="78" r="2.5" fill="#78350F" />
          <circle cx="114" cy="74" r="2.5" fill="#78350F" />
          <circle cx="96" cy="102" r="2.5" fill="#78350F" />
          <path d="M106 52c-4-12 6-20 14-22" stroke="#16A34A" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'carrot':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <path d="M110 46c-12-18-2-26 10-14 12-12 22-4 10 14" fill="none" stroke="#16A34A" strokeWidth="5" strokeLinecap="round" />
          <path d="M92 50c18-8 38-8 56 0l-28 86L92 50z" fill="#F97316" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <line x1="104" y1="68" x2="118" y2="68" stroke="#9A3412" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="118" y1="88" x2="132" y2="88" stroke="#9A3412" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'sugar':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <ellipse cx="120" cy="126" rx="64" ry="12" fill="#E2E8F0" stroke={INK} strokeWidth="2.5" />
          {/* Isometric 3D sugar cubes */}
          {[
            [92, 92],
            [128, 92],
            [110, 62],
          ].map(([cx, cy], idx) => (
            <g key={idx}>
              <polygon points={`${cx},${cy - 14} ${cx + 22},${cy - 4} ${cx},${cy + 6} ${cx - 22},${cy - 4}`} fill="#FFFFFF" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
              <polygon points={`${cx - 22},${cy - 4} ${cx},${cy + 6} ${cx},${cy + 28} ${cx - 22},${cy + 18}`} fill="#F1F5F9" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
              <polygon points={`${cx},${cy + 6} ${cx + 22},${cy - 4} ${cx + 22},${cy + 18} ${cx},${cy + 28}`} fill="#E2E8F0" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
            </g>
          ))}
        </svg>
      );

    case 'abacus':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Traditional Chinese Suánpán abacus: frame, heaven/earth beam, vertical rods & beads */}
          <rect x="58" y="34" width="124" height="92" rx="6" fill="#FEF3C7" stroke="#78350F" strokeWidth="5" />
          <line x1="58" y1="62" x2="182" y2="62" stroke="#78350F" strokeWidth="4.5" />
          {[80, 100, 120, 140, 160].map((x, idx) => (
            <React.Fragment key={x}>
              <line x1={x} y1="36" x2={x} y2="124" stroke="#64748B" strokeWidth="2.5" />
              <ellipse cx={x} cy={idx % 2 === 0 ? 48 : 54} rx="8" ry="4.5" fill="#DC2626" stroke={INK} strokeWidth="1.6" />
              <ellipse cx={x} cy={idx % 2 === 0 ? 74 : 90} rx="8" ry="4.5" fill="#D97706" stroke={INK} strokeWidth="1.6" />
              <ellipse cx={x} cy="108" rx="8" ry="4.5" fill="#D97706" stroke={INK} strokeWidth="1.6" />
            </React.Fragment>
          ))}
        </svg>
      );

    case 'alarm':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Mechanical water alarm clock (Plato's Clepsydra whistle alarm) + bell cues */}
          <rect x="92" y="28" width="56" height="42" rx="6" fill="#D97706" stroke={INK} strokeWidth="2.8" />
          <path d="M120 70v18" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" strokeDasharray="3 4" />
          <rect x="80" y="88" width="80" height="44" rx="8" fill="#B45309" stroke={INK} strokeWidth="3" />
          <rect x="88" y="106" width="64" height="20" rx="3" fill="#38BDF8" />
          <path d="M160 100h18l8-10v20l-8-10" fill="#FACC15" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
        </svg>
      );

    case 'tea':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Rooibos ceramic pot & ruby-red infusion cup + redbush sprig */}
          <path d="M74 68h84l-8 54c-3 10-16 14-34 14s-31-4-34-14l-8-54z" fill="#FFFBEB" stroke={INK} strokeWidth="3" />
          <ellipse cx="116" cy="68" rx="42" ry="9" fill="#991B1B" stroke={INK} strokeWidth="2.5" />
          <path d="M158 78c14 0 18 20 2 26" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
          {/* Rooibos needle twig beside cup */}
          <path d="M168 126l20-34M176 112l12-6M180 104l-8-8" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'drum':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Goblet wooden Djembé drum with goat-skin head & zigzag tuning ropes */}
          <path d="M78 44h84l-24 44v44h-36V88z" fill="#B45309" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <ellipse cx="120" cy="44" rx="42" ry="11" fill="#FEF3C7" stroke={INK} strokeWidth="3" />
          <path d="M86 52l12 34 12-34 12 34 12-34 12 34 8-28" fill="none" stroke="#FEFCE8" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      );

    case 'guitar':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Acoustic classical guitar with figure-8 body, soundhole, bridge & slotted headstock */}
          <g transform="rotate(24 120 84)">
            <path d="M106 72c-16 0-24 14-14 26-14 8-12 38 28 38s42-30 28-38c10-12 2-26-14-26z" fill="#D97706" stroke={INK} strokeWidth="3" />
            <rect x="115" y="20" width="10" height="54" fill="#78350F" stroke={INK} strokeWidth="2.4" />
            <rect x="112" y="10" width="16" height="12" rx="2" fill="#451A03" stroke={INK} strokeWidth="2" />
            <circle cx="120" cy="88" r="10" fill="#451A03" stroke="#FDE68A" strokeWidth="2" />
            <rect x="108" y="110" width="24" height="6" rx="2" fill="#451A03" />
            <line x1="118" y1="22" x2="118" y2="110" stroke="#FDE68A" strokeWidth="1.3" />
            <line x1="122" y1="22" x2="122" y2="110" stroke="#FDE68A" strokeWidth="1.3" />
          </g>
        </svg>
      );

    case 'violin':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Violin + bow */}
          <g transform="rotate(22 114 82)">
            <rect x="109" y="20" width="10" height="44" fill="#451A03" stroke={INK} strokeWidth="2.2" />
            <circle cx="114" cy="18" r="6" fill="#92400E" stroke={INK} strokeWidth="2" />
            <path d="M96 62c-16 0-16 24 0 28-18 8-18 40 18 40s36-32 18-40c16-4 16-28 0-28z" fill="#D97706" stroke={INK} strokeWidth="3" />
            <path d="M100 84v16M128 84v16" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" />
            <polygon points="110,126 118,126 116,104 112,104" fill="#1E293B" />
            <line x1="114" y1="24" x2="114" y2="114" stroke="#FDE68A" strokeWidth="1.5" />
          </g>
          {/* Bow */}
          <line x1="60" y1="120" x2="180" y2="56" stroke="#78350F" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    case 'bread':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          <path d="M52 108c0-34 26-54 58-54s58 20 58 54H52z" fill="#D97706" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <path d="M88 70l12 18M112 68l12 20" stroke="#FEF3C7" strokeWidth="4" strokeLinecap="round" />
          {/* Cut bread slice */}
          <path d="M142 122c0-20 12-30 26-30s26 10 26 30H142z" fill="#FEF3C7" stroke="#B45309" strokeWidth="3.5" strokeLinejoin="round" />
        </svg>
      );

    case 'butter':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Margarine / spread tub + butter knife */}
          <ellipse cx="120" cy="118" rx="68" ry="14" fill="#F1F5F9" stroke={INK} strokeWidth="2.8" />
          <polygon points="74,78 148,78 164,94 90,94" fill="#FEF08A" stroke={INK} strokeWidth="2.5" />
          <rect x="74" y="94" width="74" height="22" fill="#FACC15" stroke={INK} strokeWidth="2.5" />
          <line x1="142" y1="74" x2="184" y2="48" stroke="#64748B" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );

    case 'foil':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Aluminum foil roll inside dispenser + gleaming unrolled foil sheet */}
          <rect x="52" y="54" width="98" height="36" rx="16" fill="#CBD5E1" stroke={INK} strokeWidth="3" />
          <ellipse cx="150" cy="72" rx="10" ry="18" fill="#94A3B8" stroke={INK} strokeWidth="2.5" />
          <path d="M82 90h88l16 32H98z" fill="#E2E8F0" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="108" y1="98" x2="152" y2="98" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <line x1="116" y1="110" x2="162" y2="110" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'carton':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Classic Tetra Pak tetrahedron / aseptic carton */}
          <polygon points="120,26 176,120 64,120" fill="#FFFFFF" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <polygon points="120,26 176,120 128,128" fill="#DBEAFE" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
          <rect x="96" y="76" width="40" height="16" rx="2" fill="#2563EB" />
        </svg>
      );

    case 'bag':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Tied dark-charcoal polyethylene trash bag */}
          <path d="M108 32c-4-12 28-12 24 0l-6 14h-12z" fill="#334155" stroke={INK} strokeWidth="2.5" />
          <path d="M102 46h36c20 20 28 48 24 84H78c-4-36 4-64 24-84z" fill="#334155" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <path d="M100 66c8 22 4 42-2 56M136 66c-4 20 0 40 6 54" fill="none" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'bottle':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Shampoo pump bottle + soap foam bubbles */}
          <path d="M120 24v14M106 24h24" stroke={INK} strokeWidth="4" strokeLinecap="round" />
          <rect x="108" y="34" width="24" height="12" rx="2" fill="#3B82F6" stroke={INK} strokeWidth="2.5" />
          <path d="M90 54c0-8 10-12 30-12s30 4 30 12v72c0 8-8 12-30 12s-30-4-30-12V54z" fill="#7DD3FC" stroke={INK} strokeWidth="3" />
          <rect x="100" y="72" width="40" height="34" rx="4" fill="#FFFFFF" stroke={INK} strokeWidth="2" />
          <circle cx="72" cy="54" r="7" fill="#E0F2FE" stroke={INK} strokeWidth="2" />
          <circle cx="168" cy="64" r="9" fill="#E0F2FE" stroke={INK} strokeWidth="2" />
        </svg>
      );

    case 'saw':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Hand-cranked chain osteotome saw with serrated chain & wooden crank */}
          <rect x="54" y="64" width="52" height="38" rx="6" fill="#EA580C" stroke={INK} strokeWidth="3" />
          <rect x="106" y="73" width="80" height="20" rx="10" fill="#CBD5E1" stroke={INK} strokeWidth="3" strokeDasharray="6 3" />
          <circle cx="80" cy="83" r="10" fill="#FACC15" stroke={INK} strokeWidth="2.5" />
          <path d="M80 83l12-26h14" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    case 'piano':
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
          {/* Grand piano with propped open lid & black/white keyboard */}
          <path d="M56 36c34-12 78-6 112 28l-16 8H56z" fill="#1E293B" stroke={INK} strokeWidth="2.8" strokeLinejoin="round" />
          <line x1="146" y1="54" x2="146" y2="74" stroke="#F59E0B" strokeWidth="3" />
          <rect x="52" y="74" width="136" height="44" rx="6" fill="#334155" stroke={INK} strokeWidth="3" />
          <rect x="60" y="84" width="120" height="28" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="2" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line key={i} x1={75 + i * 15} y1="84" x2={75 + i * 15} y2="112" stroke="#CBD5E1" strokeWidth="1.5" />
          ))}
          {[0, 1, 3, 4, 5].map((i) => (
            <rect key={i} x={70 + i * 15} y="84" width="8" height="16" rx="1" fill={INK} />
          ))}
          <line x1="68" y1="118" x2="68" y2="136" stroke={INK} strokeWidth="5" strokeLinecap="round" />
          <line x1="172" y1="118" x2="172" y2="136" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        </svg>
      );

    default:
      return null;
  }
}
