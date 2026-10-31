import { translations } from '@/translations';
import type { Locale } from '@/data/laws';

export default function Footer({ lang }: { lang: Locale }) {
  return (
    <footer className="border-t border-line-soft">
      <p className="meta mx-auto max-w-[72rem] px-4 py-8 sm:px-6">
        {translations[lang].footer}
      </p>
    </footer>
  );
}
