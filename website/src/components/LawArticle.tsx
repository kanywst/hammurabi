import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { translations } from '@/translations';
import { laws, lawBySlug, tags, type Law, type Locale } from '@/data/laws';
import { article, DATA_URL, routeFor } from '@/lib/site';
import RichText from './RichText';
import LawDiagram from './diagrams';
import Stele from './Stele';
import { position } from '@/lib/stele';

/** A titled part of the article, below the clause. */
function Part({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-rule-soft py-8 lg:first:border-t-0 lg:first:pt-0">
      <h2 className="meta font-bold">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default function LawArticle({ law, lang }: { law: Law; lang: Locale }) {
  const t = translations[lang];
  const text = law[lang];
  const tag = tags.find((candidate) => candidate.key === law.tag);
  const related = law.seeAlso
    .map((slug) => lawBySlug.get(slug))
    .filter((candidate): candidate is Law => Boolean(candidate));

  const where = position(law.number);
  const index = laws.findIndex((candidate) => candidate.slug === law.slug);
  const previous = index > 0 ? laws[index - 1] : null;
  const next = index < laws.length - 1 ? laws[index + 1] : null;

  return (
    <article className="mx-auto max-w-[72rem] px-5 sm:px-8">
      {/* On a wide screen the source and the related laws sit in the margin
          beside the article, the way a statute carries its marginal notes. */}
      <div className="lg:grid lg:grid-cols-[minmax(0,46rem)_minmax(0,1fr)] lg:gap-x-16">
        <div className="pt-24 sm:pt-28">
          <Link
            href={`${routeFor(lang)}#${law.slug}`}
            className="term inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> {t.law.backToCodex}
          </Link>

          {/* The head: where it sits in the codex, its name, and what it says in
            one line. */}
          <header className="pb-10 pt-10">
            <p className="meta">
              <span className="num">{article(law.number)}</span>
              {tag ? <span className="ml-3">{tag[lang]}</span> : null}
            </p>
            <h1 className="mt-3 text-[clamp(2.25rem,6vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.025em]">
              {text.title}
            </h1>
            <p className="mt-4 text-[1.25rem] leading-relaxed text-relief-dim">
              {text.concept}
            </p>
          </header>

          {/* Every article in the Code of Hammurabi is a conditional — šumma
            awīlum, "if a man…". So is every article here: the mechanism is the
            condition, the guideline is the consequence, and the counter-force is
            the exception that keeps the rule from hardening into dogma. */}
          <div className="clause border-t border-rule-soft pt-8">
            <p className="clause__op">{t.law.opIf}</p>
            <p className="clause__v">
              <RichText>{text.mechanism}</RichText>
            </p>

            <p className="clause__op clause__op--then">{t.law.opThen}</p>
            <p className="clause__v clause__v--then">
              <RichText>{text.guideline}</RichText>
            </p>

            <p className="clause__op">{t.law.opUnless}</p>
            <p className="clause__v">
              <span className="font-bold text-relief">{text.counter.name}</span>
              {text.counter.note ? (
                <>
                  {' — '}
                  <RichText>{text.counter.note}</RichText>
                </>
              ) : null}
            </p>
          </div>

          <LawDiagram slug={law.slug} lang={lang} />
        </div>

        <aside className="mt-6 lg:mt-0 lg:pt-28">
          <div className="hidden items-end gap-5 pb-8 lg:flex">
            <Stele lang={lang} variant="mini" current={law.slug} />
            <p className="meta max-w-[10rem]">
              {t.stele.position(where.column, where.line)}
            </p>
          </div>

          <Part title={t.law.source}>
            <p className="text-relief-dim">
              <RichText>{text.source}</RichText>
            </p>
            <a
              href={law.sourceUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="link mt-3 inline-flex items-center gap-1.5"
            >
              {t.law.sourceLink}
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
            </a>
          </Part>

          {related.length > 0 && (
            <Part title={t.law.seeAlso}>
              <ul>
                {related.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={routeFor(lang, other.slug)}
                      className="entry !grid-cols-[2.25rem_minmax(0,1fr)]"
                    >
                      <span className="num">{article(other.number)}</span>
                      <span>
                        <span className="entry__title">
                          {other[lang].title}
                        </span>
                        <span className="entry__concept mt-0.5 block">
                          {other[lang].concept}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Part>
          )}
        </aside>
      </div>

      {/* Reading straight through is a legitimate way to use a numbered code,
          so the next article is one click away rather than a trip through the
          index. */}
      <nav
        aria-label={t.law.adjacent}
        className="mt-6 grid gap-3 border-t border-rule-soft py-8 sm:grid-cols-2"
      >
        {previous ? (
          <Link
            href={routeFor(lang, previous.slug)}
            className="group/nav flex flex-col gap-1 rounded-md border border-rule-soft p-4 hover:bg-field-sunk"
          >
            <span className="meta flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" aria-hidden />
              {t.law.previous}
            </span>
            <span className="font-bold group-hover/nav:underline">
              <span className="num mr-2 font-normal">
                {article(previous.number)}
              </span>
              {previous[lang].title}
            </span>
          </Link>
        ) : (
          <span aria-hidden className="hidden sm:block" />
        )}
        {next ? (
          <Link
            href={routeFor(lang, next.slug)}
            className="group/nav flex flex-col items-end gap-1 rounded-md border border-rule-soft p-4 text-right hover:bg-field-sunk"
          >
            <span className="meta flex items-center gap-2">
              {t.law.next}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
            <span className="font-bold group-hover/nav:underline">
              <span className="num mr-2 font-normal">
                {article(next.number)}
              </span>
              {next[lang].title}
            </span>
          </Link>
        ) : null}
      </nav>

      <p className="pb-10">
        <a
          href={DATA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="term inline-flex items-center gap-1.5"
        >
          {t.law.editOnGitHub}
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </p>
    </article>
  );
}
