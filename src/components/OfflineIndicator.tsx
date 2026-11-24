import React from 'react';
import { WifiOff } from 'lucide-react';
import { AppLanguage } from '../i18n/translations';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

interface OfflineIndicatorProps {
  lang?: AppLanguage;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ lang = 'de' }) => {
  const isOnline = useOnlineStatus();
  const isEn = lang === 'en';

  if (isOnline) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-xl border border-[#F59E0B]/40 bg-[#16191D] dark:bg-[#232832] px-3 py-2 text-xs font-medium text-[#FEF3C7] shadow-lg"
    >
      <WifiOff className="h-3.5 w-3.5 text-[#F7A94B] shrink-0" />
      <span>
        {isEn
          ? 'Offline Mode — Cached puzzles active'
          : 'Offline-Modus — Zwischengespeicherte Daten aktiv'}
      </span>
    </div>
  );
};
