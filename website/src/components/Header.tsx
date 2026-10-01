'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { translations } from '@/translations';
import { REPO_URL, routeFor } from '@/lib/site';
import type { Locale } from '@/data/laws';

/** The masthead: the name on the left, the three places you can go on the right. */
export default function Header({
  lang,
  counterpart,
}: {
  lang: Locale;
  counterpart: string;
}) {
  const t = translations[lang];
  const [isOpen, setIsOpen] = useState(false);
  const home = routeFor(lang);

  const links = [
    { href: `${home}#laws`, label: t.nav.principles },
    { href: `${home}#about`, label: t.nav.about },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule-soft bg-field/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[72rem] items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <Link href={home} className="text-[0.9375rem] font-bold">
          Hammurabi
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="term">
              {link.label}
            </Link>
          ))}
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="term"
          >
            {t.nav.github}
          </a>
          <LanguageSwitcher lang={lang} counterpart={counterpart} />
        </nav>

        <button
          className="-mr-2 p-2 text-relief-dim transition-colors hover:text-relief md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t.nav.menu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          className="flex flex-col gap-4 border-t border-rule-soft px-5 py-5 sm:px-8 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="term"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="term"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.github}
          </a>
          <LanguageSwitcher lang={lang} counterpart={counterpart} />
        </nav>
      )}
    </header>
  );
}
