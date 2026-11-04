import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { translations } from '@/translations';
import {
  collections,
  lawBySlug,
  tags,
  type Collection,
  type Locale,
} from '@/data/laws';
import {
  article,
  articleLabel,
  columnRouteFor,
  columnUrlFor,
  hueFor,
  routeFor,
} from '@/lib/site';
import Medallion from './Medallion';
import ShareBar from './ShareBar';

/**
 * A column: a lede, then the laws in reading order. Before each card sits the
 * note that says why this law comes next; the card itself carries only what
 * the law's own article says, so the column never restates a law in new words.
 */
export default function ColumnArticle({
  column,
  lang,
}: {
  column: Collection;
  lang: Locale;
}) {
  const t = translations[lang];
  const { title, lede } = column[lang];
  const label = new Map(tags.map((tag) => [tag.key, tag[lang]]));
  const others = collections.filter((other) => other.key !== column.key);

  return (
    <article className="mx-auto max-w-[72rem] px-4 sm:px-6">
      <div className="measure pb-12 pt-8">
        <Link
          href={`${routeFor(lang)}#laws`}
          className="navlink inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> {t.law.backToCodex}
        </Link>

        <header className="mt-8">
          <p className="flex items-baseline gap-3">
            <span className="display text-[1.125rem] text-accent">
              {t.column.kicker}
            </span>
            <span className="meta">{t.column.count(column.laws.length)}</span>
          </p>
          <h1 className="display mt-2 text-[clamp(2rem,5.5vw,2.75rem)] leading-[1.15]">
            {title}
          </h1>
          <p className="mt-3 text-[1.1875rem] leading-relaxed text-ink-2">
            {lede}
          </p>
        </header>

        {/* Tailwind strips list styling, and WebKit then drops list semantics,
            so the role keeps the order announced. */}
        <ol role="list" className="mt-10">
          {column.laws.map((item, i) => {
            const law = lawBySlug.get(item.slug);
            if (!law) return null;
            const text = law[lang];
            return (
              <li
                key={item.slug}
                className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 pb-8 sm:grid-cols-[3rem_minmax(0,1fr)]"
              >
                <span
                  aria-hidden
                  className="display pt-0.5 text-[1.125rem] leading-snug text-accent"
                >
                  {article(i + 1)}
                </span>
                <div className="min-w-0">
                  <p className="leading-relaxed">{item[lang]}</p>
                  <Link
                    href={routeFor(lang, law.slug)}
                    aria-labelledby={`${item.slug}-title`}
                    aria-describedby={`${item.slug}-concept`}
                    className="group mt-3 flex items-start gap-3 rounded-md border border-line-soft p-4 hover:bg-surface"
                  >
                    {/* On a phone the seal takes a third of the card's width,
                        so the card keeps it only where there is room. */}
                    <div className="hidden shrink-0 sm:block">
                      <Medallion figure={law.figure} hue={hueFor(law.tag)} />
                    </div>
                    {/* The title comes first for assistive technology; the
                        article number and category sit above it on screen. */}
                    <div className="flex min-w-0 flex-col">
                      <h2
                        id={`${item.slug}-title`}
                        className="mt-0.5 font-bold group-hover:text-accent"
                      >
                        {text.title}
                      </h2>
                      <span className="meta order-first block">
                        {articleLabel(lang, law.number)} · {label.get(law.tag)}
                      </span>
                      <span
                        id={`${item.slug}-concept`}
                        className="mt-1 block text-[0.9375rem] leading-snug text-ink-2"
                      >
                        {text.concept}
                      </span>
                      <span className="mt-2 block text-[0.9375rem] leading-snug">
                        <span className="font-bold">
                          {t.law.stance}
                          {lang === 'ja' ? '：' : ':'}
                        </span>
                        {lang === 'ja' ? '' : ' '}
                        {text.stance}
                      </span>
                    </div>
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="border-t border-line-soft pt-8">
          <ShareBar
            url={columnUrlFor(lang, column.key)}
            title={title}
            lang={lang}
          />
        </div>
      </div>

      <nav
        aria-label={t.column.more}
        className={`mt-2 grid gap-3 border-t border-line-soft py-8 ${others.length > 0 ? 'sm:grid-cols-2' : ''}`}
      >
        <Link
          href={`${routeFor(lang)}#laws`}
          className="group/nav flex flex-col gap-0.5 rounded-md border border-line-soft p-4 hover:bg-surface"
        >
          <span className="flex items-center gap-1.5 font-bold group-hover/nav:text-accent">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {t.law.backToCodex}
          </span>
        </Link>
        {others.map((other) => (
          <Link
            key={other.key}
            href={columnRouteFor(lang, other.key)}
            className="group/nav flex flex-col gap-0.5 rounded-md border border-line-soft p-4 hover:bg-surface"
          >
            <span className="meta">{t.column.kicker}</span>
            <span className="font-bold group-hover/nav:text-accent">
              {other[lang].title}
            </span>
          </Link>
        ))}
      </nav>
    </article>
  );
}
