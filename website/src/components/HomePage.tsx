import { translations } from '@/translations';
import LawsCodex from './LawsCodex';
import type { Locale } from '@/data/laws';

/**
 * The title page, the prologue, the index of laws, the epilogue — in that order,
 * because that is the order the stele is carved in. The title page also teaches
 * the one thing a reader needs before the index: every law is a conditional.
 */
export default function HomePage({ lang }: { lang: Locale }) {
  const t = translations[lang];

  const key = [
    { op: t.law.opIf, gloss: t.hero.keyIf, then: false },
    { op: t.law.opThen, gloss: t.hero.keyThen, then: true },
    { op: t.law.opUnless, gloss: t.hero.keyUnless, then: false },
  ];

  return (
    <div className="mx-auto max-w-[72rem] px-5 sm:px-8">
      {/* ── Title page ───────────────────────────────────────── */}
      <section
        id="top"
        className="grid gap-x-16 gap-y-10 pb-14 pt-28 sm:pb-20 sm:pt-36 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-end"
      >
        <div>
          <h1 className="text-[clamp(3.25rem,10vw,7rem)] font-bold leading-[0.95] tracking-[-0.035em]">
            {t.hero.title}
          </h1>
          <p
            className="cuneiform mt-4 text-[clamp(1.75rem,4vw,2.75rem)] leading-none"
            aria-hidden
          >
            {'\u{12129}\u{12000}\u{12220}\u{12261}\u{12049}'}
          </p>

          <p className="mt-8 max-w-[38rem] text-[1.25rem] leading-relaxed text-relief-dim">
            {t.hero.lede}
          </p>
        </div>

        <dl className="grid gap-x-8 gap-y-5 border-t border-rule-soft pt-6 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          {key.map(({ op, gloss, then }) => (
            <div key={op}>
              <dt
                className={`text-[0.875rem] font-bold ${then ? 'text-rubric' : 'text-relief-faint'}`}
              >
                {op}
              </dt>
              <dd className="mt-1 text-relief">{gloss}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Prologue ─────────────────────────────────────────── */}
      <section
        id="prologue"
        aria-labelledby="prologue-heading"
        className="grid gap-x-12 gap-y-6 border-t border-rule-soft py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
      >
        <h2 id="prologue-heading" className="meta lg:col-span-2">
          {t.ui.prologueLabel}
        </h2>
        <figure>
          <blockquote className="font-display text-[1.75rem] leading-snug text-relief">
            {t.ui.prologueQuote}
          </blockquote>
          <figcaption className="meta mt-4">{t.ui.prologueQuoteBy}</figcaption>
        </figure>
        <p className="max-w-[36rem] text-relief-dim">{t.ui.prologueBody}</p>
      </section>

      {/* ── The laws ─────────────────────────────────────────── */}
      <LawsCodex lang={lang} />

      {/* ── Epilogue ─────────────────────────────────────────────
          The original ends with curses on anyone who defaces the stone. This
          one keeps the position and changes the target. */}
      <section
        id="about"
        aria-labelledby="epilogue-heading"
        className="border-t border-rule-soft py-16"
      >
        <h2 id="epilogue-heading" className="meta">
          {t.ui.epilogueLabel}
        </h2>
        <figure className="mt-4">
          <blockquote className="max-w-[42rem] font-display text-[clamp(1.6rem,3.5vw,2.25rem)] leading-snug text-relief">
            {t.ui.maxim}
          </blockquote>
          <figcaption className="meta mt-4">{t.ui.maximBy}</figcaption>
        </figure>
        <p className="mt-10 max-w-[38rem] text-relief-dim">
          {t.ui.epilogueCurse}
        </p>
      </section>
    </div>
  );
}
