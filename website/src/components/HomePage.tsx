import { translations } from '@/translations';
import Link from 'next/link';
import { laws, type Locale } from '@/data/laws';
import { hueFor, routeFor } from '@/lib/site';
import LawsCodex from './LawsCodex';
import Medallion from './Medallion';

/**
 * One sentence on what this is, then the codex itself. A reader arrives with a
 * situation or a name in mind, so search and the situations are on the first
 * screen and nothing stands between them and the list.
 */
export default function HomePage({ lang }: { lang: Locale }) {
  const t = translations[lang];

  return (
    <div className="mx-auto max-w-[72rem] px-4 sm:px-6">
      <section className="pb-8 pt-10 sm:pt-14">
        <h1 className="text-[2rem] font-bold leading-tight tracking-[-0.01em]">
          {t.intro.title}
        </h1>
        <p className="measure mt-2 text-ink-2">{t.intro.lede(laws.length)}</p>
      </section>
      <Picks lang={lang} />
      <LawsCodex lang={lang} />
    </div>
  );
}

/** The laws the editor would hand someone first. Absent until one is marked
 *  `featured: true` in data/laws.yaml. */
function Picks({ lang }: { lang: Locale }) {
  const picks = laws.filter((law) => law.featured);
  if (picks.length === 0) return null;
  return (
    <section aria-labelledby="picks-heading" className="pb-6">
      <h2 id="picks-heading" className="text-[1.25rem] font-bold leading-snug">
        {translations[lang].ui.picksHeading}
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {picks.map((law) => (
          <li key={law.slug}>
            <Link
              href={routeFor(lang, law.slug)}
              className="group flex h-full items-start gap-3 rounded-md border border-line-soft p-4 hover:bg-surface"
            >
              <Medallion figure={law.figure} hue={hueFor(law.tag)} />
              <span className="min-w-0">
                <span className="block font-bold group-hover:text-accent">
                  {law[lang].title}
                </span>
                <span className="mt-1 block text-[0.9375rem] leading-snug text-ink-2">
                  {law[lang].concept}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
