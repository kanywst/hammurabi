import { laws, tags, type Law, type Locale } from '@/data/laws';
import { articleLabel, hueFor } from '@/lib/site';
import { translations } from '@/translations';
import Medallion from './Medallion';

const PER_SHEET = 9;
const COLS = 3;

/**
 * The codex as a deck of cards: the law on the front, its counter-force and
 * what to do on the back. Nine poker-size cards (63×88 mm) to an A4 sheet.
 * Backs are laid out mirrored left to right, so printing double-sided with a
 * long-edge flip lands each back behind its own front.
 */
export default function PrintCards({ lang }: { lang: Locale }) {
  const t = translations[lang].print;
  const sheets: Law[][] = [];
  for (let i = 0; i < laws.length; i += PER_SHEET) {
    sheets.push(laws.slice(i, i + PER_SHEET));
  }
  const label = new Map(tags.map((tag) => [tag.key, tag[lang]]));

  return (
    <div className="print-root mx-auto max-w-[72rem] px-4 py-8 sm:px-6">
      <div className="no-print measure mb-8">
        <h1 className="display text-[2rem] leading-tight">{t.cardsTitle}</h1>
        <p className="mt-3 text-ink-2">{t.cardsHow}</p>
      </div>
      {sheets.map((sheet, index) => {
        // Mirror each row of the back sheet for a long-edge flip.
        const backs: (Law | null)[] = [];
        for (let r = 0; r < PER_SHEET / COLS; r += 1) {
          const row: (Law | null)[] = sheet.slice(r * COLS, r * COLS + COLS);
          while (row.length < COLS) row.push(null);
          backs.push(...row.reverse());
        }
        return (
          <div key={index}>
            <section className="sheet" aria-label={`${t.front} ${index + 1}`}>
              {sheet.map((law) => (
                <article key={law.slug} className="card">
                  <div className="flex items-start justify-between gap-2">
                    <span className="display text-[10pt] text-accent">
                      {articleLabel(lang, law.number)}
                    </span>
                    <span className="text-[7pt] text-ink-3">
                      {label.get(law.tag)}
                    </span>
                  </div>
                  <div className="mt-[3mm] flex justify-center">
                    <Medallion figure={law.figure} hue={hueFor(law.tag)} />
                  </div>
                  <h2 className="display mt-[3mm] text-[12pt] leading-snug">
                    {law[lang].title}
                  </h2>
                  <p className="mt-[2mm] text-[8pt] leading-snug text-ink-2">
                    {law[lang].concept}
                  </p>
                </article>
              ))}
            </section>
            <section className="sheet" aria-label={`${t.back} ${index + 1}`}>
              {backs.map((law, i) =>
                law ? (
                  <article key={law.slug} className="card card--back">
                    <p className="text-[7pt] text-ink-3">
                      {articleLabel(lang, law.number)} {law[lang].title}
                    </p>
                    <h3 className="display mt-[2mm] text-[10pt] leading-snug text-accent">
                      {t.counter}
                      {lang === 'ja' ? '：' : ': '}
                      {law[lang].counter.name}
                    </h3>
                    {law[lang].counter.note ? (
                      <p className="mt-[1.5mm] text-[7pt] leading-snug text-ink-2">
                        {law[lang].counter.note}
                      </p>
                    ) : null}
                    <h3 className="display mt-[3mm] text-[9pt]">
                      {t.guideline}
                    </h3>
                    <p className="mt-[1mm] text-[7pt] leading-snug">
                      {law[lang].guideline}
                    </p>
                  </article>
                ) : (
                  <div key={`blank-${i}`} className="card card--blank" />
                )
              )}
            </section>
          </div>
        );
      })}
    </div>
  );
}
