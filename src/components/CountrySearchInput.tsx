import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, Check, X, CornerDownLeft } from 'lucide-react';
import { Country, getCountryName, searchCountries } from '../data/countries';
import { AppLanguage } from '../i18n/translations';

interface CountrySearchInputProps {
  excludedCountryIds: Set<string>;
  disabled: boolean;
  attemptsUsed: number;
  maxAttempts: number;
  pendingMapCountry: Country | null;
  lang?: AppLanguage;
  keyboardShortcutsEnabled?: boolean;
  onClearPendingMapCountry: () => void;
  onStagedCountryChange?: (country: Country | null) => void;
  onSubmitGuess: (country: Country) => void;
  onGiveUp: () => void;
}

export const CountrySearchInput: React.FC<CountrySearchInputProps> = ({
  excludedCountryIds,
  disabled,
  attemptsUsed,
  maxAttempts,
  pendingMapCountry,
  lang = 'de',
  keyboardShortcutsEnabled = true,
  onClearPendingMapCountry,
  onStagedCountryChange,
  onSubmitGuess,
  onGiveUp,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const searchResult = useMemo(
    () => searchCountries(query, excludedCountryIds, lang),
    [query, excludedCountryIds, lang]
  );

  const activeCountry = selectedCountry ?? pendingMapCountry;

  useEffect(() => {
    onStagedCountryChange?.(activeCountry ?? null);
  }, [activeCountry, onStagedCountryChange]);

  useEffect(() => {
    if (pendingMapCountry) {
      setSelectedCountry(pendingMapCountry);
      setQuery(getCountryName(pendingMapCountry, lang));
      setIsOpen(false);
    }
  }, [pendingMapCountry, lang]);

  useEffect(() => {
    if (selectedCountry) {
      setQuery(getCountryName(selectedCountry, lang));
    }
  }, [lang, selectedCountry]);

  useEffect(() => {
    if (disabled || (selectedCountry && excludedCountryIds.has(selectedCountry.id))) {
      setSelectedCountry(null);
      setQuery('');
      setIsOpen(false);
    }
  }, [disabled, excludedCountryIds, selectedCountry]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // Keep active dropdown option visible when navigating via keyboard
  useEffect(() => {
    if (!isOpen) return;
    const el = optionRefs.current[activeIndex];
    if (el && typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIndex, isOpen]);

  // Global "/" shortcut to jump directly into the country search box
  useEffect(() => {
    if (!keyboardShortcutsEnabled || disabled) return;
    const onGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target?.isContentEditable) {
        return;
      }
      if (e.key === '/') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
    };
    window.addEventListener('keydown', onGlobalKeyDown);
    return () => window.removeEventListener('keydown', onGlobalKeyDown);
  }, [keyboardShortcutsEnabled, disabled]);

  const stageCountry = (country: Country, displayLabel?: string) => {
    setSelectedCountry(country);
    setQuery(displayLabel ?? getCountryName(country, lang));
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const clearSelection = () => {
    setSelectedCountry(null);
    setQuery('');
    onClearPendingMapCountry();
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const confirmGuess = () => {
    if (!activeCountry || disabled) return;
    onClearPendingMapCountry();
    onSubmitGuess(activeCountry);
    setSelectedCountry(null);
    setQuery('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const count = searchResult.results.length;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIsOpen(true);
      setActiveIndex((prev) => (count > 0 ? (prev + 1) % count : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIsOpen(true);
      setActiveIndex((prev) => (count > 0 ? (prev - 1 + count) % count : 0));
    } else if (e.key === 'Home' && isOpen && count > 0) {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === 'End' && isOpen && count > 0) {
      e.preventDefault();
      setActiveIndex(count - 1);
    } else if (e.key === 'PageDown' && isOpen && count > 0) {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(count - 1, prev + 5));
    } else if (e.key === 'PageUp' && isOpen && count > 0) {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'Tab') {
      setIsOpen(false);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (isOpen && searchResult.results[activeIndex]) {
        const picked = searchResult.results[activeIndex];
        stageCountry(picked.country, picked.displayLabel);
        return;
      }
      if (activeCountry && !isOpen) {
        confirmGuess();
        return;
      }
      if (count > 0 && query.trim().length > 0) {
        const picked = searchResult.results[0];
        stageCountry(picked.country, picked.displayLabel);
      }
    } else if (e.key === 'Escape') {
      if (isOpen) {
        e.preventDefault();
        setIsOpen(false);
      } else if (query.length > 0 || activeCountry) {
        e.preventDefault();
        clearSelection();
      }
    }
  };

  const activeOptionId =
    isOpen && !disabled && searchResult.results[activeIndex]
      ? `country-option-${searchResult.results[activeIndex].country.id}`
      : undefined;

  return (
    <div ref={containerRef} className="relative">
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5A6169] dark:text-[#9CA3AF]" />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded={isOpen && !disabled}
            aria-controls="country-search-listbox"
            aria-activedescendant={activeOptionId}
            aria-autocomplete="list"
            value={query}
            disabled={disabled}
            onFocus={() => {
              if (!selectedCountry) {
                setIsOpen(true);
              }
            }}
            onChange={(e) => {
              if (pendingMapCountry) onClearPendingMapCountry();
              setSelectedCountry(null);
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onKeyDown={handleKeyDown}
            placeholder={
              disabled
                ? lang === 'en'
                  ? 'Round finished'
                  : 'Runde abgeschlossen'
                : lang === 'en'
                ? 'Type a country (EN/DE) or press / ...'
                : 'Land eingeben (DE/EN) oder / drücken ...'
            }
            aria-label={lang === 'en' ? 'Enter origin country' : 'Ursprungsland eingeben'}
            className="h-10 w-full rounded-xl border border-[#E6E2DA] dark:border-[#2C323E] bg-[#FAF9F6] dark:bg-[#111317] pl-9 pr-8 text-sm text-[#16191D] dark:text-[#F1F5F9] placeholder:text-[#7B828A] dark:placeholder:text-[#6B7280] focus:border-[#F59E0B] dark:focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F7A94B]/25 disabled:cursor-not-allowed disabled:bg-[#F1EFE9] dark:disabled:bg-[#1E222A]"
          />
          {query && !disabled && (
            <button
              type="button"
              onClick={clearSelection}
              aria-label={lang === 'en' ? 'Clear input' : 'Eingabe leeren'}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-[#5A6169] dark:text-[#9CA3AF] hover:bg-[#EDEAE2] dark:hover:bg-[#262B35] hover:text-[#16191D] dark:hover:text-[#F1F5F9]"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            disabled={disabled || !activeCountry}
            onClick={confirmGuess}
            className="flex h-10 items-center justify-center gap-1.5 rounded-xl bg-[#F7A94B] px-3.5 text-xs sm:text-sm font-semibold text-[#16191D] transition-colors hover:bg-[#F59E0B] disabled:cursor-not-allowed disabled:bg-[#E6E2DA] disabled:text-[#8A857C] dark:disabled:bg-[#262B35] dark:disabled:text-[#6B7280] whitespace-nowrap shrink-0"
          >
            {activeCountry && !disabled ? (
              lang === 'en' ? (
                <>
                  <Check className="h-3.5 w-3.5 shrink-0" />
                  <span>Confirm</span>
                  <span className="max-w-[140px] truncate">{getCountryName(activeCountry, lang)}</span>
                  <CornerDownLeft className="hidden sm:inline h-3 w-3 opacity-60 shrink-0" />
                </>
              ) : (
                <>
                  <Check className="h-3.5 w-3.5 shrink-0" />
                  <span className="max-w-[140px] truncate">{getCountryName(activeCountry, lang)}</span>
                  <span>bestätigen</span>
                  <CornerDownLeft className="hidden sm:inline h-3 w-3 opacity-60 shrink-0" />
                </>
              )
            ) : (
              <span>
                {lang === 'en' ? 'Confirm' : 'Bestätigen'} ({attemptsUsed}/{maxAttempts})
              </span>
            )}
          </button>

          {!disabled && (
            <button
              type="button"
              onClick={onGiveUp}
              className="h-10 rounded-xl border border-[#E6E2DA] dark:border-[#2C323E] bg-white dark:bg-[#191D24] px-3.5 text-xs sm:text-sm font-medium text-[#474D54] dark:text-[#CBD5E1] transition-colors hover:bg-[#F7F5F0] dark:hover:bg-[#232832] hover:text-[#16191D] dark:hover:text-white whitespace-nowrap shrink-0"
            >
              {lang === 'en' ? 'Give up' : 'Aufgeben'}
            </button>
          )}
        </div>
      </div>

      {/* Subtle desktop keyboard navigation hint */}
      {!disabled && (
        <div className="mt-1.5 hidden sm:flex items-center justify-between text-[10.5px] text-[#8A9199] dark:text-[#64748B]">
          <span>
            {activeCountry
              ? lang === 'en'
                ? 'Press Enter again to submit · Esc to clear'
                : 'Nochmal Enter zum Bestätigen · Esc zum Leeren'
              : lang === 'en'
              ? '↑/↓ navigate · Enter select · / focus search · 1–5 switch rounds'
              : '↑/↓ wählen · Enter übernehmen · / Suchfokus · 1–5 Runden'}
          </span>
        </div>
      )}

      {/* Autocomplete Dropdown */}
      {isOpen && !disabled && searchResult.results.length > 0 && (
        <div
          id="country-search-listbox"
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-30 max-h-72 overflow-y-auto overscroll-contain rounded-xl border border-[#E6E2DA] dark:border-[#2C323E] bg-white dark:bg-[#191D24] shadow-lg"
        >
          {query.trim().length > 0 && searchResult.detectedLanguage !== lang && (
            <div className="border-b border-[#EFECE4] dark:border-[#262B35] bg-[#FFFBEB] dark:bg-[#2A2215] px-3.5 py-1.5 text-xs font-medium text-[#B45309] dark:text-[#FBBF24]">
              {searchResult.detectedLanguage === 'en'
                ? 'Englische Eingabe erkannt — Ländervorschläge auf Englisch'
                : 'German input detected — showing German country names'}
            </div>
          )}
          {searchResult.results.map((item, idx) => (
            <button
              key={item.country.id}
              id={`country-option-${item.country.id}`}
              ref={(el) => {
                optionRefs.current[idx] = el;
              }}
              type="button"
              role="option"
              aria-selected={idx === activeIndex}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => stageCountry(item.country, item.displayLabel)}
              className={`flex w-full items-center justify-between px-3.5 py-2.5 text-left text-sm transition-colors ${
                idx === activeIndex
                  ? 'bg-[#FEF3C7]/70 dark:bg-[#F59E0B]/20 text-[#16191D] dark:text-[#F8FAFC]'
                  : 'text-[#16191D] dark:text-[#E2E8F0] hover:bg-[#F7F5F0] dark:hover:bg-[#222731]'
              }`}
            >
              <span className="font-medium">{item.displayLabel}</span>
              <span className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">{item.secondaryLabel}</span>
            </button>
          ))}
        </div>
      )}

      {isOpen && !disabled && query.trim().length > 0 && searchResult.results.length === 0 && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-30 rounded-xl border border-[#E6E2DA] dark:border-[#2C323E] bg-white dark:bg-[#191D24] px-4 py-3 text-sm text-[#6B7280] dark:text-[#9CA3AF] shadow-lg">
          {lang === 'en'
            ? `No matching unguessed country found for "${query}".`
            : `Kein passendes ungeratenes Land für „${query}“ gefunden.`}
        </div>
      )}
    </div>
  );
};
