'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { translations } from '@/translations';
import type { Locale } from '@/data/laws';

export default function BackToTop({ lang }: { lang: Locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll(); // reflect the position on mount (e.g. reload while scrolled)
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label={translations[lang].ui.backToTop}
      className={`fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink-2 transition-opacity duration-300 hover:text-ink ${
        visible ? 'opacity-100' : 'pointer-events-none invisible opacity-0'
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
