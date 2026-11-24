import React from 'react';
import { Cookie, Database, HardDriveDownload, Info, ShieldCheck, X } from 'lucide-react';
import { AppLanguage, getBrandName } from '../i18n/translations';

interface PrivacyInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: AppLanguage;
}

export const PrivacyInfoModal: React.FC<PrivacyInfoModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const isEn = lang === 'en';
  const brandName = getBrandName(lang);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/55 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-info-title"
        className="flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-[#E6E2DA] dark:border-[#2C323E] bg-white dark:bg-[#191D24] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-[#EFECE4] dark:border-[#262B35] px-5 py-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4.5 w-4.5 text-[#16A34A]" />
            <h2
              id="privacy-info-title"
              className="font-display text-lg font-bold text-[#16191D] dark:text-[#F8FAFC]"
            >
              {isEn ? `Info & Privacy — ${brandName}` : `Info & Datenschutz — ${brandName}`}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={isEn ? 'Close info and privacy' : 'Info & Datenschutz schließen'}
            className="rounded-lg p-1.5 text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F7F5F0] dark:hover:bg-[#232832] hover:text-[#16191D] dark:hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4 space-y-3.5 text-xs sm:text-sm leading-relaxed text-[#374151] dark:text-[#CBD5E1]">
          <div className="rounded-xl border border-[#EFECE4] dark:border-[#262B35] bg-[#FAF9F6] dark:bg-[#111317] p-3.5 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#16191D] dark:text-[#F8FAFC]">
              <Info className="h-3.5 w-3.5 text-[#F59E0B]" />
              <span>{isEn ? 'About GeoOrigin' : 'Über GeoOrigin'}</span>
            </div>
            <p className="text-xs">
              {isEn
                ? `${brandName} is a free daily geo-trivia puzzle without registration or paywalls. Every day at 00:00 (Berlin time), 5 new inventions unlock to test your world knowledge.`
                : `${brandName} ist ein kostenloses tägliches Geo-Trivia-Quiz ohne Anmeldung und ohne Bezahlschranke. Jeden Tag um 00:00 Uhr (Berliner Zeit) erscheinen 5 neue Erfindungen aus aller Welt.`}
            </p>
          </div>

          <div className="rounded-xl border border-[#EFECE4] dark:border-[#262B35] bg-[#FAF9F6] dark:bg-[#111317] p-3.5 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#16191D] dark:text-[#F8FAFC]">
              <Cookie className="h-3.5 w-3.5 text-[#D97706]" />
              <span>
                {isEn
                  ? 'No Advertising Cookies — Local Browser Storage Only'
                  : 'Keine Werbe-Cookies — nur lokaler Browser-Speicher'}
              </span>
            </div>
            <p className="text-xs">
              {isEn
                ? 'This site does not use advertising cookies, personalized ad networks, or third-party tracking scripts. Your current daily guesses, 7-day streak, theme (light/dark), language, and optional duel challenge are saved locally in your browser via localStorage.'
                : 'Diese Seite setzt keine Werbe-Cookies, keine Tracking-Netzwerke und keine Drittanbieter-Werbeskripte ein. Dein aktueller Tagesfortschritt, deine 7-Tage-Serie, dein Farbdesign (Hell/Dunkel), deine Sprache und optionale Freundes-Duelle werden ausschließlich lokal im Browser (localStorage) gespeichert.'}
            </p>
          </div>

          <div className="rounded-xl border border-[#EFECE4] dark:border-[#262B35] bg-[#FAF9F6] dark:bg-[#111317] p-3.5 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#16191D] dark:text-[#F8FAFC]">
              <Database className="h-3.5 w-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
              <span>
                {isEn
                  ? 'Anonymous Daily Rankings & Usage Statistics'
                  : 'Anonyme Tagesrangliste & Nutzungsstatistiken'}
              </span>
            </div>
            <p className="text-xs">
              {isEn
                ? 'When you finish all 5 rounds, your browser sends a randomly generated anonymous player ID along with your day score, guess count, and solved count to compute the live global rank and score distribution. Aggregate page-view and round statistics use a salted one-way hash without storing names, email addresses, or personal profiles.'
                : 'Wenn du alle 5 Runden abschließt, übermittelt dein Browser eine zufällig erzeugte anonyme Spieler-ID zusammen mit Punktzahl, Versuchsanzahl und gelösten Runden, um den Live-Globalrang und die Punkteverteilung zu berechnen. Aggregierte Tagesstatistiken nutzen einen gesalzenen Einweg-Hash – ohne Namen, E-Mail-Adressen oder persönliche Nutzerprofile.'}
            </p>
          </div>

          <div className="rounded-xl border border-[#EFECE4] dark:border-[#262B35] bg-[#FAF9F6] dark:bg-[#111317] p-3.5 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#16191D] dark:text-[#F8FAFC]">
              <HardDriveDownload className="h-3.5 w-3.5 text-[#16A34A]" />
              <span>
                {isEn ? 'Offline App & Font Caching' : 'Offline-App & Schriften-Cache'}
              </span>
            </div>
            <p className="text-xs">
              {isEn
                ? 'When installed or used as a web app (PWA), a local Service Worker caches static app assets and Google Fonts for faster loading and offline play. You can clear all local data anytime in your browser settings.'
                : 'Bei Nutzung als Web-App (PWA) speichert ein lokaler Service Worker statische App-Dateien und Schriften für schnelle Ladezeiten und das Offline-Spielen zwischen. Alle lokalen Daten lassen sich jederzeit über deine Browser-Einstellungen löschen.'}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 justify-end border-t border-[#EFECE4] dark:border-[#262B35] px-5 py-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-[#F7A94B] px-4 py-2 text-xs sm:text-sm font-semibold text-[#16191D] hover:bg-[#F59E0B]"
          >
            {isEn ? 'Close' : 'Schließen'}
          </button>
        </div>
      </div>
    </div>
  );
};
