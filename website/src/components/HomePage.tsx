import { translations } from '@/translations';
import LawsCodex from './LawsCodex';
import TitlePage from './TitlePage';
import type { Locale } from '@/data/laws';

/**
 * The title page, the prologue, the index of laws, the epilogue — in that order,
 * because that is the order the stele is carved in.
 */
export default function HomePage({ lang }: { lang: Locale }) {
  const t = translations[lang];

  return (
    <div className="mx-auto max-w-[72rem] px-5 sm:px-8">
      <TitlePage lang={lang} />

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
