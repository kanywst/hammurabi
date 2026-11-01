import Link from 'next/link';
import { translations } from '@/translations';
import type { Locale } from '@/data/laws';
import { routeFor } from '@/lib/site';

export default function Footer({ lang }: { lang: Locale }) {
  return (
    <footer className="border-t border-line-soft">
      <div className="meta mx-auto max-w-[72rem] space-y-2 px-4 py-8 sm:px-6">
        <p>{translations[lang].footer}</p>
        <p>
          <Link href={`${routeFor(lang)}print/cards/`} className="link">
            {translations[lang].print.cardsTitle}
          </Link>
          {' / '}
          <Link href={`${routeFor(lang)}print/poster/`} className="link">
            {translations[lang].print.posterTitle}
          </Link>
        </p>
      </div>
    </footer>
  );
}
