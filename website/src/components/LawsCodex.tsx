'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { translations } from '@/translations';
import { laws, tags, type Locale } from '@/data/laws';
import { article, routeFor } from '@/lib/site';

/**
 * The index of the codex: one line per law — number, name, what it says, what
 * kind it is — so all seventy-one can be scanned on one screen and the article
 * is one click away. Search reads the whole article, not just the line shown.
 */
export default function LawsCodex({ lang }: { lang: Locale }) {
  const t = translations[lang];

  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const label = useMemo(
    () => new Map(tags.map((tag) => [tag.key, tag[lang]])),
    [lang]
  );

  const usedTags = useMemo(() => {
    const seen = new Set(laws.map((law) => law.tag));
    return tags.filter((tag) => seen.has(tag.key));
  }, []);

  const filtered = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return laws
      .filter((law) => !activeTag || law.tag === activeTag)
      .filter((law) => {
        if (terms.length === 0) return true;
        const text = law[lang];
        const content = [
          text.title,
          text.concept,
          text.mechanism,
          text.counter.name,
          text.counter.note ?? '',
          text.guideline,
          text.source,
          label.get(law.tag) ?? '',
          law.slug,
        ]
          .join(' ')
          .toLowerCase();
        return terms.every((term) => content.includes(term));
      });
  }, [lang, activeTag, query, label]);

  return (
    <section
      id="laws"
      aria-labelledby="laws-heading"
      className="border-t border-rule-soft pb-10 pt-14"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2
          id="laws-heading"
          className="text-[2rem] font-bold tracking-[-0.02em]"
        >
          {t.nav.principles}
        </h2>
        <p className="meta" aria-live="polite">
          {filtered.length === laws.length
            ? `${laws.length} ${t.ui.lawsUnit}`
            : `${filtered.length} / ${laws.length} ${t.ui.lawsUnit}`}
        </p>
      </div>

      <div className="relative mt-6 max-w-[34rem]">
        <Search
          aria-hidden
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-relief-faint"
        />
        <input
          id="codex-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.ui.searchPlaceholder}
          aria-label={t.ui.searchPlaceholder}
          className="field w-full py-2.5 pl-10 pr-3"
        />
      </div>

      <div
        role="group"
        aria-label={t.ui.filterGroupLabel}
        className="mt-5 flex flex-wrap gap-x-5 gap-y-2"
      >
        <button
          type="button"
          onClick={() => setActiveTag(null)}
          aria-pressed={activeTag === null}
          className="term"
        >
          {t.ui.filterAll}
        </button>
        {usedTags.map((tag) => (
          <button
            type="button"
            key={tag.key}
            onClick={() => setActiveTag(tag.key)}
            aria-pressed={activeTag === tag.key}
            className="term"
          >
            {tag[lang]}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-relief-dim">{t.ui.resultsNone}</p>
      ) : (
        <ol className="mt-8 border-t border-rule-soft">
          {filtered.map((law) => {
            const text = law[lang];
            return (
              <li
                key={law.slug}
                id={law.slug}
                className="border-b border-rule-soft"
              >
                <Link href={routeFor(lang, law.slug)} className="entry">
                  <span className="num">{article(law.number)}</span>
                  <span className="entry__title">{text.title}</span>
                  <span className="entry__concept col-start-2 min-[52rem]:col-start-auto">
                    {text.concept}
                  </span>
                  <span className="entry__tag meta col-start-2 min-[52rem]:col-start-auto">
                    {label.get(law.tag)}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
