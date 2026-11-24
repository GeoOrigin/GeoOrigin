export type AppLanguage = 'de' | 'en';

export function getBrandName(_lang: AppLanguage): string {
  return 'GeoOrigin';
}

export function formatNumberLocale(value: number, lang: AppLanguage): string {
  return value.toLocaleString(lang === 'en' ? 'en-US' : 'de-DE');
}

export function formatDecimalPercent(value: number, lang: AppLanguage): string {
  const fixed = value.toFixed(1);
  return lang === 'en' ? `${fixed}%` : `${fixed.replace('.', ',')} %`;
}

export function formatShortDateLocale(dateStr: string, lang: AppLanguage): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(dt);
}
