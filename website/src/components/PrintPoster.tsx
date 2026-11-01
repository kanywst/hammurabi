import { laws, type Locale } from '@/data/laws';
import { articleLabel } from '@/lib/site';
import { translations } from '@/translations';

/**
 * Every law and the force that stops it, on one A3 landscape sheet: a wall
 * reference for a team room.
 */
export default function PrintPoster({ lang }: { lang: Locale }) {
  const t = translations[lang];
  return (
    <div className="print-root mx-auto max-w-[72rem] px-4 py-8 sm:px-6">
      <div className="no-print measure mb-8">
        <h1 className="display text-[2rem] leading-tight">
          {t.print.posterTitle}
        </h1>
        <p className="mt-3 text-ink-2">{t.print.posterHow}</p>
      </div>
      <section className="poster">
        <div className="poster__head">
          <span className="display text-[24pt]">Hammurabi</span>
          <span className="display text-[12pt] text-ink-2">
            {t.intro.tagline}
          </span>
        </div>
        <ol className="poster__list">
          {laws.map((law) => (
            <li key={law.slug} className="poster__item">
              <span className="art">{articleLabel(lang, law.number)}</span>
              <span className="font-bold">{law[lang].title}</span>
              <span className="block text-ink-3">
                {t.print.counter}
                {lang === 'ja' ? '：' : ': '}
                {law[lang].counter.name}
              </span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
