import { translations } from '@/translations';
import { laws, type Locale } from '@/data/laws';
import LawsCodex from './LawsCodex';

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
      <LawsCodex lang={lang} />
    </div>
  );
}
