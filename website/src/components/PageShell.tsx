import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import HtmlLang from './HtmlLang';
import { HTML_LANG } from '@/lib/site';

/* The display face: Shippori Mincho B1, a Mincho with Latin drawn to match,
   so headings and article numbers read like a statute book in both languages.
   English pages ask Google Fonts for only the characters they set (a few KB);
   Japanese pages need the whole face, which Google serves in unicode-range
   slices. React hoists the link into <head>; until the font arrives, the
   system Mincho stands in. */
const DISPLAY =
  'https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@600;800&display=swap';
const LATIN =
  Array.from({ length: 95 }, (_, i) => String.fromCharCode(32 + i)).join('') +
  '§—’“”…é';
const FONT_CSS = {
  en: `${DISPLAY}&text=${encodeURIComponent(LATIN)}`,
  ja: DISPLAY,
} as const;
import type { Locale } from '@/data/laws';

/**
 * Everything a page shares: the masthead, the footer, and the pair of
 * locale-aware links the chrome needs. `counterpart` is the same page in the
 * other language, which only the page itself knows.
 */
export default function PageShell({
  lang,
  counterpart,
  children,
}: {
  lang: Locale;
  counterpart: string;
  children: React.ReactNode;
}) {
  return (
    <div lang={HTML_LANG[lang]}>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href={FONT_CSS[lang]} precedence="default" />
      <HtmlLang lang={HTML_LANG[lang]} />
      <Header lang={lang} counterpart={counterpart} />
      <main>{children}</main>
      <Footer lang={lang} />
      <BackToTop lang={lang} />
    </div>
  );
}
