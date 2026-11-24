import React, { useEffect, useState } from 'react';
import { Download, PlusSquare, Share, Smartphone, X } from 'lucide-react';
import { AppLanguage, getBrandName } from '../i18n/translations';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  lang?: AppLanguage;
  variant?: 'header' | 'card';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  lang = 'de',
  variant = 'header',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const isEn = lang === 'en';
  const brandName = getBrandName(lang);

  useEffect(() => {
    if (!showIOSGuide) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowIOSGuide(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [showIOSGuide]);

  // Suppress whenever already running as an installed standalone PWA
  if (isInstalled) {
    return null;
  }

  // Nothing to show on browsers where neither beforeinstallprompt nor iOS applies
  if (!isInstallable && !isIOS) {
    return null;
  }

  const handleTrigger = () => {
    if (isInstallable) {
      void install();
    } else if (isIOS) {
      setShowIOSGuide(true);
    }
  };

  return (
    <>
      {variant === 'card' ? (
        <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#262B35] bg-white dark:bg-[#191D24] p-4 shadow-2xs">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-start gap-3 min-w-0 flex-1">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFFBEB] dark:bg-[#2A2215] border border-[#F59E0B]/30 text-[#D97706] dark:text-[#FBBF24]">
                <Smartphone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-[#16191D] dark:text-[#F8FAFC]">
                  {isEn ? 'Add to Home Screen' : 'Als App auf den Startbildschirm'}
                </h3>
                <p className="mt-0.5 text-xs leading-relaxed text-[#6B7280] dark:text-[#9CA3AF]">
                  {isEn
                    ? 'Keep your daily streak close at hand — open today’s puzzle in one tap like a native app.'
                    : 'Halte deine Serie griffbereit – starte das tägliche Rätsel mit einem Tippen wie eine echte App.'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleTrigger}
              className="flex h-9 items-center gap-1.5 rounded-xl bg-[#F7A94B] px-3.5 text-xs font-semibold text-[#16191D] transition-colors hover:bg-[#F59E0B] whitespace-nowrap shrink-0"
            >
              <Download className="h-3.5 w-3.5" />
              {isInstallable
                ? isEn
                  ? 'Install App'
                  : 'App installieren'
                : isEn
                ? 'iOS Guide'
                : 'Zum Home-Bildschirm'}
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleTrigger}
          aria-label={
            isInstallable
              ? isEn
                ? 'Install app'
                : 'App installieren'
              : isEn
              ? 'Add to Home Screen on iOS'
              : 'Auf Home-Bildschirm legen'
          }
          title={
            isInstallable
              ? isEn
                ? 'Install as App'
                : 'Als App installieren'
              : isEn
              ? 'Add to iPhone/iPad Home Screen'
              : 'Auf iPhone/iPad Startbildschirm legen'
          }
          className="flex h-8 items-center gap-1 rounded-lg border border-[#F59E0B]/45 bg-[#FFFBEB] dark:bg-[#2A2215] px-2 text-xs font-semibold text-[#B45309] dark:text-[#FBBF24] transition-colors hover:bg-[#FEF3C7] dark:hover:bg-[#3A2E1A] whitespace-nowrap shrink-0"
        >
          <Download className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{isEn ? 'App' : 'App'}</span>
        </button>
      )}

      {showIOSGuide && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
          onClick={() => setShowIOSGuide(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="ios-install-title"
            className="w-full max-w-sm rounded-2xl border border-[#E6E2DA] dark:border-[#2C323E] bg-white dark:bg-[#191D24] p-5 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <img
                  src="/apple-touch-icon.png"
                  alt={brandName}
                  className="h-10 w-10 rounded-xl border border-[#E6E2DA] dark:border-[#2C323E]"
                />
                <div>
                  <h3
                    id="ios-install-title"
                    className="font-display text-base font-bold text-[#16191D] dark:text-[#F8FAFC]"
                  >
                    {isEn ? 'Install on iPhone / iPad' : 'Auf iPhone / iPad installieren'}
                  </h3>
                  <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">{brandName}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                aria-label={isEn ? 'Close' : 'Schließen'}
                className="rounded-lg p-1 text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F7F5F0] dark:hover:bg-[#232832]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 space-y-2.5 text-xs leading-relaxed text-[#374151] dark:text-[#CBD5E1]">
              <div className="flex items-start gap-2.5 rounded-xl border border-[#EFECE4] dark:border-[#262B35] bg-[#FAF9F6] dark:bg-[#111317] p-3">
                <Share className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB] dark:text-[#60A5FA]" />
                <span>
                  {isEn ? (
                    <>
                      1. Tap the <strong>Share</strong> button in your Safari toolbar.
                    </>
                  ) : (
                    <>
                      1. Tippe unten oder oben in Safari auf das <strong>Teilen-Symbol</strong>.
                    </>
                  )}
                </span>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-[#EFECE4] dark:border-[#262B35] bg-[#FAF9F6] dark:bg-[#111317] p-3">
                <PlusSquare className="mt-0.5 h-4 w-4 shrink-0 text-[#F59E0B]" />
                <span>
                  {isEn ? (
                    <>
                      2. Scroll down and tap <strong>Add to Home Screen</strong>, then confirm.
                    </>
                  ) : (
                    <>
                      2. Wähle <strong>Zum Home-Bildschirm</strong> und bestätige mit <em>Hinzufügen</em>.
                    </>
                  )}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowIOSGuide(false)}
              className="mt-4 h-10 w-full rounded-xl bg-[#F7A94B] text-xs sm:text-sm font-semibold text-[#16191D] transition-colors hover:bg-[#F59E0B]"
            >
              {isEn ? 'Got it' : 'Verstanden'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
