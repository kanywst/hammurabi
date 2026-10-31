import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { translations } from '@/translations';
import { REPO_URL, routeFor } from '@/lib/site';
import type { Locale } from '@/data/laws';

/** The masthead: the name, and the three places you can go. Short enough that
 *  it never needs a menu, even on a phone. */
export default function Header({
  lang,
  counterpart,
}: {
  lang: Locale;
  counterpart: string;
}) {
  const t = translations[lang];
  const home = routeFor(lang);

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-paper">
      <div className="mx-auto flex max-w-[72rem] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={home} className="font-bold">
          Hammurabi
        </Link>
        <nav className="flex items-center gap-5">
          <Link href={`${home}#laws`} className="navlink">
            {t.nav.laws}
          </Link>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="navlink"
          >
            {t.nav.github}
          </a>
          <LanguageSwitcher lang={lang} counterpart={counterpart} />
        </nav>
      </div>
    </header>
  );
}
