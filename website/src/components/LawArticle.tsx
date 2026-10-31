import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { translations } from '@/translations';
import { laws, lawBySlug, tags, type Law, type Locale } from '@/data/laws';
import { article, DATA_URL, routeFor } from '@/lib/site';
import RichText from './RichText';
import LawDiagram from './diagrams';

/** Counter notes are authored as clauses; the markdown generator closes them
 *  with a full stop, so the page does the same. */
function sentence(note: string, lang: Locale): string {
  return /[.!?。！？]$/.test(note)
    ? note
    : `${note}${lang === 'ja' ? '。' : '.'}`;
}

/** A titled part of the article. Plain headings, so a reader scanning down the
 *  page can stop at the one they came for. */
function Part({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-[1.125rem] font-bold leading-snug">{title}</h2>
      <div className="mt-2 text-ink-2">{children}</div>
    </section>
  );
}

/**
 * The order follows what a reader at a decision needs first: what the law says,
 * what to do about it, why it happens, and when to ignore it. The source and
 * the neighbouring laws come last, for whoever wants to check or keep going.
 */
export default function LawArticle({ law, lang }: { law: Law; lang: Locale }) {
  const t = translations[lang];
  const text = law[lang];
  const tag = tags.find((candidate) => candidate.key === law.tag);
  const related = law.seeAlso
    .map((slug) => lawBySlug.get(slug))
    .filter((candidate): candidate is Law => Boolean(candidate));

  const index = laws.findIndex((candidate) => candidate.slug === law.slug);
  const previous = index > 0 ? laws[index - 1] : null;
  const next = index < laws.length - 1 ? laws[index + 1] : null;

  return (
    <article className="mx-auto max-w-[72rem] px-4 sm:px-6">
      <div className="measure pb-6 pt-8">
        <Link
          href={`${routeFor(lang)}#${law.slug}`}
          className="navlink inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> {t.law.backToCodex}
        </Link>

        <header className="mt-8">
          <p className="meta">
            <span className="num">§ {article(law.number)}</span>
            {tag ? <span> · {tag[lang]}</span> : null}
          </p>
          <h1 className="mt-1 text-[clamp(1.875rem,5vw,2.375rem)] font-bold leading-tight tracking-[-0.015em]">
            {text.title}
          </h1>
          <p className="mt-3 text-[1.1875rem] leading-relaxed text-ink-2">
            {text.concept}
          </p>
        </header>

        <div className="todo mt-8">
          <h2 className="todo__label">{t.law.whatToDo}</h2>
          <p className="todo__body">
            <RichText>{text.guideline}</RichText>
          </p>
        </div>

        <Part title={t.law.why}>
          <p>
            <RichText>{text.mechanism}</RichText>
          </p>
        </Part>

        <Part title={t.law.whenNot}>
          <p>
            <strong className="text-ink">{text.counter.name}</strong>
            {text.counter.note ? (
              <>
                {lang === 'ja' ? '：' : ': '}
                <RichText>{sentence(text.counter.note, lang)}</RichText>
              </>
            ) : null}
          </p>
        </Part>
      </div>

      <LawDiagram slug={law.slug} lang={lang} />

      <div className="measure">
        <Part title={t.law.source}>
          <p>
            <RichText>{text.source}</RichText>
          </p>
          <a
            href={law.sourceUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="link mt-2 inline-flex items-center gap-1"
          >
            {t.law.sourceLink}
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
          </a>
        </Part>

        {related.length > 0 && (
          <Part title={t.law.seeAlso}>
            <ul className="border-t border-line-soft">
              {related.map((other) => (
                <li key={other.slug} className="border-b border-line-soft">
                  <Link
                    href={routeFor(lang, other.slug)}
                    className="row !grid-cols-[2rem_minmax(0,1fr)]"
                  >
                    <span className="num">{article(other.number)}</span>
                    <span>
                      <span className="row__title">{other[lang].title}</span>
                      <span className="row__concept block text-[0.9375rem]">
                        {other[lang].concept}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Part>
        )}

        <p className="mt-8">
          <a
            href={DATA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="navlink inline-flex items-center gap-1"
          >
            {t.law.editOnGitHub}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </p>
      </div>

      {/* Reading straight through is a legitimate way to use a numbered code,
          so the next article is one click away. */}
      <nav
        aria-label={t.law.adjacent}
        className="mt-10 grid gap-3 border-t border-line-soft py-8 sm:grid-cols-2"
      >
        {previous ? (
          <Link
            href={routeFor(lang, previous.slug)}
            className="group/nav flex flex-col gap-0.5 rounded-md border border-line-soft p-4 hover:bg-surface"
          >
            <span className="meta flex items-center gap-1.5">
              <ArrowLeft className="h-4 w-4" aria-hidden />
              {t.law.previous}
            </span>
            <span className="font-bold group-hover/nav:text-accent">
              {previous[lang].title}
            </span>
          </Link>
        ) : (
          <span aria-hidden className="hidden sm:block" />
        )}
        {next ? (
          <Link
            href={routeFor(lang, next.slug)}
            className="group/nav flex flex-col items-end gap-0.5 rounded-md border border-line-soft p-4 text-right hover:bg-surface"
          >
            <span className="meta flex items-center gap-1.5">
              {t.law.next}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
            <span className="font-bold group-hover/nav:text-accent">
              {next[lang].title}
            </span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
