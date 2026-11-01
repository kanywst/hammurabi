'use client';

import { useState } from 'react';
import { Check, Link2 } from 'lucide-react';
import type { Locale } from '@/data/laws';
import { translations } from '@/translations';

/**
 * Ways out of an article: copy its link, or post it. Plain links to each
 * network's own share URL, so nothing third-party loads on the page.
 */
export default function ShareBar({
  url,
  title,
  lang,
}: {
  url: string;
  title: string;
  lang: Locale;
}) {
  const t = translations[lang].share;
  const [copied, setCopied] = useState(false);
  const text = `${title} — Hammurabi`;
  const enc = encodeURIComponent;
  const targets = [
    {
      name: 'X',
      href: `https://x.com/intent/post?text=${enc(text)}&url=${enc(url)}`,
    },
    {
      name: 'Bluesky',
      href: `https://bsky.app/intent/compose?text=${enc(`${text} ${url}`)}`,
    },
    {
      name: t.hatena,
      href: `https://b.hatena.ne.jp/entry/s/${url.replace(/^https:\/\//, '')}`,
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
    },
  ];

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be refused (an insecure context, a denied permission);
      // the link is still in the address bar.
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <button
        type="button"
        onClick={copy}
        className="navlink inline-flex items-center gap-1.5"
        aria-live="polite"
      >
        {copied ? (
          <Check className="h-4 w-4" aria-hidden />
        ) : (
          <Link2 className="h-4 w-4" aria-hidden />
        )}
        {copied ? t.copied : t.copy}
      </button>
      {targets.map((target) => (
        <a
          key={target.name}
          href={target.href}
          target="_blank"
          rel="noopener noreferrer"
          className="navlink"
        >
          {target.name}
        </a>
      ))}
    </div>
  );
}
