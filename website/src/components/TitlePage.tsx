'use client';

import Link from 'next/link';
import { useState, useSyncExternalStore } from 'react';
import { Shuffle } from 'lucide-react';
import { translations } from '@/translations';
import { laws, lawBySlug, tags, type Locale } from '@/data/laws';
import { article, routeFor } from '@/lib/site';
import { lawOfTheDay, position } from '@/lib/stele';
import RichText from './RichText';
import Stele from './Stele';

/**
 * The title page: the name, what the codex is, and the stele — with one law set
 * out in full beside it. That law is the law of the day until the reader puts a
 * hand on the stone; then it is whichever line they are touching. The panel is
 * the reading key and an example at once: If, Then, Unless, filled in.
 */
const noSubscription = () => () => {};

export default function TitlePage({ lang }: { lang: Locale }) {
  const t = translations[lang];

  // The day is read from the client clock, and the server renders the first
  // law, so the static HTML and the first render agree before it switches.
  const daily = useSyncExternalStore(
    noSubscription,
    () => lawOfTheDay(laws).slug,
    () => laws[0].slug
  );
  const [picked, setPicked] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const featured = lawBySlug.get(picked ?? daily) ?? laws[0];

  const shown = (active && lawBySlug.get(active)) || featured;
  const text = shown[lang];
  const tagLabel = new Map(tags.map((tag) => [tag.key, tag[lang]]));
  const where = position(shown.number);

  const another = () => {
    const others = laws.filter((law) => law.slug !== shown.slug);
    setActive(null);
    setPicked(others[Math.floor(Math.random() * others.length)].slug);
  };

  return (
    <section
      id="top"
      className="grid gap-x-16 pb-16 pt-28 sm:pt-36 md:grid-cols-[minmax(0,1fr)_12rem] lg:grid-cols-[minmax(0,1fr)_14rem]"
    >
      <div className="relative min-w-0">
        {/* On a phone the stele is too tall to stand beside the text, so a
            small one stands beside the name instead, with today's line cut
            in red. */}
        <div className="absolute right-0 top-1 md:hidden [&_.stele]:w-14">
          <Stele lang={lang} variant="mini" current={shown.slug} />
        </div>
        <h1 className="text-[clamp(3.25rem,10vw,7rem)] font-bold leading-[0.95] tracking-[-0.035em]">
          {t.hero.title}
        </h1>
        <p
          className="cuneiform mt-4 text-[clamp(1.75rem,4vw,2.75rem)] leading-none"
          aria-hidden
        >
          {'\u{12129}\u{12000}\u{12220}\u{12261}\u{12049}'}
        </p>

        <p className="mt-8 max-w-[38rem] pr-[4.5rem] text-[1.25rem] leading-relaxed text-relief-dim md:pr-0">
          {t.hero.lede}
        </p>

        <div className="mt-10 max-w-[40rem] border-t border-rule-soft pt-6">
          <div className="flex items-baseline justify-between gap-4">
            <p className="meta" aria-live="polite">
              {active
                ? t.stele.position(where.column, where.line)
                : t.stele.featured}
            </p>
            <button
              type="button"
              onClick={another}
              className="term inline-flex items-center gap-1.5"
            >
              <Shuffle className="h-4 w-4" aria-hidden />
              {t.stele.another}
            </button>
          </div>

          <h2 className="mt-2 text-[1.625rem] font-bold leading-tight tracking-[-0.015em]">
            <Link
              href={routeFor(lang, shown.slug)}
              className="decoration-1 underline-offset-4 hover:underline"
            >
              <span className="num mr-3 font-normal">
                {article(shown.number)}
              </span>
              {text.title}
            </Link>
          </h2>

          <div className="clause mt-6 md:h-[20rem] md:overflow-hidden">
            <p className="clause__op">{t.law.opIf}</p>
            <p className="clause__v line-clamp-3">
              <RichText>{text.mechanism}</RichText>
            </p>

            <p className="clause__op clause__op--then">{t.law.opThen}</p>
            <p className="clause__v clause__v--then line-clamp-4">
              <RichText>{text.guideline}</RichText>
            </p>

            <p className="clause__op">{t.law.opUnless}</p>
            <p className="clause__v line-clamp-2">
              <span className="font-bold text-relief">{text.counter.name}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <Stele
          lang={lang}
          variant="hero"
          active={shown.slug}
          onActive={setActive}
          relief={
            <>
              <span className="font-display text-[2.5rem] leading-none tabular-nums">
                {article(shown.number)}
              </span>
              <span className="line-clamp-2 text-[0.8125rem] font-bold leading-snug">
                {text.title}
              </span>
              <span className="text-[0.75rem] text-[var(--stone-ink-soft)]">
                {tagLabel.get(shown.tag)}
              </span>
            </>
          }
        />
      </div>
    </section>
  );
}
