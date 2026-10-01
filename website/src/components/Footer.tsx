import { translations } from '@/translations';
import type { Locale } from '@/data/laws';

export default function Footer({ lang }: { lang: Locale }) {
  return (
    <footer className="border-t border-rule-soft">
      <p className="meta mx-auto max-w-[72rem] px-5 py-8 sm:px-8">
        {translations[lang].footer}
      </p>
    </footer>
  );
}
