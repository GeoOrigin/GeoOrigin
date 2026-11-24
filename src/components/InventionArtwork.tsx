import React from 'react';
import { Invention, InventionCategory } from '../data/inventions';
import { AppLanguage } from '../i18n/translations';
import { SpecimenIllustration } from './SpecimenIllustrations';

interface InventionArtworkProps {
  invention: Invention;
  revealed: boolean;
  lang?: AppLanguage;
}

const CATEGORY_BACKDROPS: Record<InventionCategory, string> = {
  'Kulinarik & Genuss':
    'bg-[#FFFBEB] dark:bg-[#231B12] border-[#FDE68A]/70 dark:border-[#78350F]/40',
  'Alltag & Haushalt':
    'bg-[#F4F7F4] dark:bg-[#141D18] border-[#D8E5D8] dark:border-[#24362B]',
  'Technik & Medizin':
    'bg-[#F2F6FC] dark:bg-[#121926] border-[#D6E2F5] dark:border-[#22304A]',
  'Spiel & Kultur':
    'bg-[#FAF5FF] dark:bg-[#1E1629] border-[#E9D5FF]/70 dark:border-[#3B2654]',
  'Kleidung & Design':
    'bg-[#FFF5F7] dark:bg-[#25151B] border-[#FECDD3]/70 dark:border-[#4C2230]',
};

export const InventionArtwork: React.FC<InventionArtworkProps> = ({
  invention,
  revealed,
  lang = 'de',
}) => {
  const backdropClass = CATEGORY_BACKDROPS[invention.category] || 'bg-[#F3F4F0] dark:bg-[#11151B]';

  return (
    <div
      className={`relative h-32 sm:h-36 w-full overflow-hidden rounded-lg border ${backdropClass}`}
    >
      <div className="atlas-grid-bg flex h-full w-full items-center justify-center p-2">
        <div className="h-26 w-38 sm:h-28 sm:w-42">
          <SpecimenIllustration artworkKey={invention.artworkKey} />
        </div>
      </div>

      {revealed && (
        <div className="absolute bottom-2 left-2 rounded-md bg-[#16191D]/88 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-xs">
          {lang === 'en' ? 'Origin:' : 'Ursprung:'} {invention.era}
        </div>
      )}
    </div>
  );
};
