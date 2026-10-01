import type { Metadata } from 'next';
import { Bodoni_Moda, Noto_Sans_Cuneiform } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { translations } from '@/translations';
import {
  alternatesFor,
  DEFAULT_LOCALE,
  HTML_LANG,
  OG_LOCALE,
  SITE_URL,
  urlFor,
} from '@/lib/site';

// A didone for display: the thick-to-hairline contrast is the chisel cut, and
// the optical-size axis pulls the hairlines back before they can disappear at
// text sizes. Never set below about 18px.
const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-bodoni',
});

// The text face, for everything that is read rather than declared: Atkinson
// Hyperlegible Next, drawn for legibility first, with its zero opened so years
// and percentages read as numbers rather than codes. scripts/unslash-zero.py
// builds it; the OFL requires the modified font to carry another name.
const atkinson = localFont({
  src: [
    {
      path: '../fonts/HammurabiText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/HammurabiText-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/HammurabiText-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/HammurabiText-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-text-face',
});

// Real cuneiform, for the name on the title page. One weight, one subset, and it
// is never asked to carry meaning on its own.
const cuneiform = Noto_Sans_Cuneiform({
  subsets: ['cuneiform'],
  display: 'swap',
  weight: '400',
  variable: '--font-cuneiform-face',
});

const copy = translations[DEFAULT_LOCALE].ui;
const SITE_IMAGE = `${SITE_URL}/banner.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: copy.metaTitle,
    template: '%s — Hammurabi',
  },
  description: copy.metaDescription,
  alternates: alternatesFor(DEFAULT_LOCALE),
  openGraph: {
    type: 'website',
    siteName: 'Hammurabi',
    url: urlFor(DEFAULT_LOCALE),
    locale: OG_LOCALE[DEFAULT_LOCALE],
    title: copy.metaTitle,
    description: copy.metaDescription,
    images: [
      { url: SITE_IMAGE, width: 1600, height: 643, alt: copy.metaTitle },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: copy.metaTitle,
    description: copy.metaDescription,
    images: [SITE_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // One root layout owns <html> for every route, so this is the default locale.
  // Per-route correction happens in two places: scripts/postbuild.mjs rewrites
  // the exported Japanese documents, and <HtmlLang> handles client navigation.
  return (
    <html
      lang={HTML_LANG[DEFAULT_LOCALE]}
      className={`${bodoni.variable} ${atkinson.variable} ${cuneiform.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
