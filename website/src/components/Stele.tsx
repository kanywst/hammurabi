'use client';

import Link from 'next/link';
import { useId, type ReactNode } from 'react';
import { laws, type Locale } from '@/data/laws';
import { article, routeFor } from '@/lib/site';
import { COLUMNS, LINES, reach } from '@/lib/stele';

/**
 * The stele, drawn to the original's proportions — 79 cm wide and 225 cm high,
 * tapering towards a rounded top, with the relief taking the upper 29% — and
 * carved with this codex's laws as lines in three columns.
 *
 * It is the codex as one object: every line is a law and links to it. It
 * duplicates the index below it for sighted mouse readers, so it is hidden from
 * assistive technology and kept out of the tab order; the index is the
 * accessible route to the same seventy-one pages.
 */
export default function Stele({
  lang,
  variant,
  current,
  active,
  onActive,
  relief,
}: {
  lang: Locale;
  variant: 'hero' | 'mini';
  current?: string;
  active?: string | null;
  onActive?: (slug: string | null) => void;
  relief?: ReactNode;
}) {
  const id = useId();
  const columns = Array.from({ length: COLUMNS }, (_, column) =>
    laws.slice(column * LINES, (column + 1) * LINES)
  );

  return (
    <div
      aria-hidden
      className={`stele stele--${variant}`}
      onMouseLeave={() => onActive?.(null)}
    >
      <svg
        className="stele__stone"
        viewBox="0 0 79 225"
        preserveAspectRatio="none"
        focusable="false"
      >
        {/* Light falls from the upper left, as it does on the stone in its
            gallery: a broad gradient across the face and a lit rim on the
            relief, which is cut back into the surface. */}
        <defs>
          <linearGradient id={`${id}-face`} x1="0" y1="0" x2="1" y2="0.35">
            <stop offset="0" stopColor="var(--stone-lit)" />
            <stop offset="0.55" stopColor="var(--stone)" />
            <stop offset="1" stopColor="var(--stone-shade)" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${id}-face)`}
          d="M0 225 L5.5 34 Q6 1 39.5 1 Q73 1 73.5 34 L79 225 Z"
        />
        <path
          className="stele__relief"
          d="M10.5 64 L10.5 33 Q11 8 39.5 8 Q68 8 68.5 33 L68.5 64 Z"
        />
      </svg>

      {relief ? <div className="stele__relief-content">{relief}</div> : null}

      <div className="stele__registers">
        {columns.map((column, c) => (
          <ol key={c} className="stele__column">
            {column.map((law) => {
              const state =
                law.slug === current
                  ? 'current'
                  : law.slug === active
                    ? 'active'
                    : undefined;
              return (
                <li key={law.slug}>
                  <Link
                    href={routeFor(lang, law.slug)}
                    tabIndex={-1}
                    title={`${article(law.number)} ${law[lang].title}`}
                    data-state={state}
                    className="stele__line"
                    style={
                      {
                        '--reach': `${reach(law)}%`,
                        '--i': law.number,
                      } as React.CSSProperties
                    }
                    onMouseEnter={() => onActive?.(law.slug)}
                  >
                    <span className="stele__cut" />
                  </Link>
                </li>
              );
            })}
          </ol>
        ))}
      </div>
    </div>
  );
}
