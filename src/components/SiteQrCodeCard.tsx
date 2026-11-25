import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { Globe2 } from 'lucide-react';
import { AppLanguage, getBrandName } from '../i18n/translations';
import { PUBLIC_SITE_DISPLAY, PUBLIC_SITE_URL } from '../utils/siteUrl';

interface SiteQrCodeCardProps {
  isDark?: boolean;
  compact?: boolean;
  lang?: AppLanguage;
}

export const SiteQrCodeCard: React.FC<SiteQrCodeCardProps> = ({
  isDark = false,
  compact = false,
  lang = 'de',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const qrSize = compact ? 104 : 112;
  const brandName = getBrandName(lang);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        PUBLIC_SITE_URL,
        {
          width: qrSize,
          margin: 1,
          color: {
            dark: isDark ? '#F8FAFC' : '#16191D',
            light: '#00000000',
          },
        },
        () => {
          // ignore render warnings
        }
      );
    }
  }, [isDark, qrSize]);

  if (compact) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-[#E6E2DA]/90 dark:border-[#262B35] bg-white/90 dark:bg-[#191D24]/90 p-3.5 text-center shadow-2xs">
        <div className="mb-2 flex items-center gap-1.5 font-display text-sm font-bold text-[#16191D] dark:text-[#F8FAFC]">
          <Globe2 className="h-4 w-4 shrink-0 text-[#F59E0B]" />
          <span className="whitespace-nowrap">{brandName}</span>
        </div>
        <div className="rounded-xl bg-[#F7F5F0] dark:bg-[#111317] p-2">
          <canvas
            ref={canvasRef}
            className="block h-[104px] w-[104px]"
            aria-label={
              lang === 'en'
                ? `QR code for ${PUBLIC_SITE_URL}`
                : `QR-Code zu ${PUBLIC_SITE_URL}`
            }
          />
        </div>
        <a
          href={PUBLIC_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 font-mono-tabular text-[10px] font-medium text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#16191D] dark:hover:text-white transition-colors break-all"
        >
          {PUBLIC_SITE_DISPLAY}
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-4 text-center shadow-2xs">
      <div className="mb-2.5 flex items-center gap-2 font-display text-base font-bold text-[#16191D] dark:text-[#F8FAFC]">
        <Globe2 className="h-4 w-4 text-[#F59E0B]" />
        <span>{brandName}</span>
      </div>
      <div className="rounded-xl bg-[#F7F5F0] dark:bg-[#111317] p-2.5">
        <canvas
          ref={canvasRef}
          className="block h-[112px] w-[112px]"
          aria-label={
            lang === 'en'
              ? `QR code for ${PUBLIC_SITE_URL}`
              : `QR-Code zu ${PUBLIC_SITE_URL}`
          }
        />
      </div>
      <a
        href={PUBLIC_SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2.5 font-mono-tabular text-[11px] font-medium text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#16191D] dark:hover:text-white transition-colors break-all"
      >
        {PUBLIC_SITE_DISPLAY}
      </a>
    </div>
  );
};
