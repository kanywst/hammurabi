'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { Search, Shuffle } from 'lucide-react';
import { translations } from '@/translations';
import { laws, lawBySlug, situations, tags, type Locale } from '@/data/laws';
import { article, hueFor, routeFor } from '@/lib/site';
import Medallion from './Medallion';

/**
 * The index of the codex. Two ways in: by the situation the reader is in, or by
 * scanning every law, one row each — name, the claim it makes, its category.
 * Search reads the whole article in both languages, so an English name finds a
 * law from the Japanese page and the other way round.
 */
export default function LawsCodex({ lang }: { lang: Locale }) {
  const t = translations[lang];
  const router = useRouter();

  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const label = useMemo(
    () => new Map(tags.map((tag) => [tag.key, tag[lang]])),
    [lang]
  );

  const tagCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const law of laws) counts.set(law.tag, (counts.get(law.tag) ?? 0) + 1);
    return tags
      .filter((tag) => counts.has(tag.key))
      .map((tag) => ({ ...tag, count: counts.get(tag.key) ?? 0 }));
  }, []);

  const filtered = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return laws
      .filter((law) => !activeTag || law.tag === activeTag)
      .filter((law) => {
        if (terms.length === 0) return true;
        const content = [law.en, law.ja]
          .flatMap((text) => [
            text.title,
            text.concept,
            text.mechanism,
            text.counter.name,
            text.counter.note ?? '',
            text.guideline,
            text.source,
          ])
          .concat(label.get(law.tag) ?? '', law.slug)
          .join(' ')
          .toLowerCase();
        return terms.every((term) => content.includes(term));
      });
  }, [activeTag, query, label]);

  const random = () => {
    const law = laws[Math.floor(Math.random() * laws.length)];
    router.push(routeFor(lang, law.slug));
  };

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative min-w-0 flex-1 basis-[20rem]">
          <Search
            aria-hidden
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-3"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.ui.searchPlaceholder}
            aria-label={t.ui.searchLabel}
            className="field w-full py-2.5 pl-9 pr-3"
          />
        </div>
        <button
          type="button"
          onClick={random}
          className="navlink inline-flex items-center gap-1.5 px-1 py-2"
        >
          <Shuffle className="h-4 w-4" aria-hidden />
          {t.ui.random}
        </button>
      </div>

      <details className="mt-6 rounded-md border border-line-soft lg:hidden">
        <summary className="cursor-pointer px-4 py-3 font-bold">
          <h2 className="inline">{t.ui.situationsHeading}</h2>
        </summary>
        <div className="px-4 pb-4">
          <Situations lang={lang} />
        </div>
      </details>

      <div className="gap-10 pb-12 pt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_17rem]">
        <section id="laws" aria-labelledby="laws-heading" className="min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h2
              id="laws-heading"
              className="text-[1.25rem] font-bold leading-snug"
            >
              {t.ui.allHeading}
            </h2>
            <p className="meta" aria-live="polite">
              {t.ui.count(filtered.length, laws.length)}
            </p>
          </div>

          <div
            role="group"
            aria-label={t.ui.filterGroupLabel}
            className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&>*]:shrink-0"
          >
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              aria-pressed={activeTag === null}
              className="chip"
            >
              {t.ui.filterAll}
            </button>
            {tagCounts.map((tag) => (
              <button
                type="button"
                key={tag.key}
                onClick={() =>
                  setActiveTag(activeTag === tag.key ? null : tag.key)
                }
                aria-pressed={activeTag === tag.key}
                className="chip"
              >
                {tag[lang]}
                <span className="chip__count">{tag.count}</span>
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="py-12 text-ink-2">{t.ui.resultsNone}</p>
          ) : (
            <ol className="mt-5 border-t border-line-soft">
              {filtered.map((law) => {
                const text = law[lang];
                return (
                  <li
                    key={law.slug}
                    id={law.slug}
                    className="border-b border-line-soft"
                  >
                    <Link href={routeFor(lang, law.slug)} className="row">
                      <Medallion figure={law.figure} hue={hueFor(law.tag)} />
                      <span>
                        <span className="row__title">{text.title}</span>
                        <span className="row__tag meta block">
                          <span className="num">§ {article(law.number)}</span>
                          {' · '}
                          {label.get(law.tag)}
                        </span>
                      </span>
                      <span className="row__concept col-start-2 min-[56rem]:col-start-auto">
                        {text.concept}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          )}
        </section>

        <aside aria-labelledby="situations-heading" className="hidden lg:block">
          <div className="sticky top-16 max-h-[calc(100vh-5rem)] overflow-y-auto pb-4">
            <h2
              id="situations-heading"
              className="text-[1.25rem] font-bold leading-snug"
            >
              {t.ui.situationsHeading}
            </h2>
            <div className="mt-4">
              <Situations lang={lang} />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

/** Entry points by situation: what the reader is facing, then the laws worth
 *  reading for it. */
function Situations({ lang }: { lang: Locale }) {
  return (
    <ul className="space-y-4">
      {situations.map((situation) => (
        <li key={situation.key}>
          <h3 className="text-[0.9375rem] font-bold leading-snug">
            {situation[lang]}
          </h3>
          <p className="mt-0.5 text-[0.9375rem] leading-relaxed">
            {situation.laws.map((slug, i) => {
              const law = lawBySlug.get(slug);
              if (!law) return null;
              return (
                <span key={slug}>
                  {i > 0 ? <span className="text-ink-3"> · </span> : null}
                  <Link
                    href={routeFor(lang, slug)}
                    className="text-accent hover:underline"
                  >
                    {law[lang].title}
                  </Link>
                </span>
              );
            })}
          </p>
        </li>
      ))}
    </ul>
  );
}
