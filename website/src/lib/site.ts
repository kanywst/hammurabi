import { tags, type Locale } from '@/data/laws';

export const SITE_URL = 'https://kanywst.github.io/hammurabi';
export const REPO_URL = 'https://github.com/kanywst/hammurabi';
export const DATA_URL = `${REPO_URL}/blob/main/data/laws.yaml`;

export const LOCALES: Locale[] = ['en', 'ja'];
export const DEFAULT_LOCALE: Locale = 'en';

/** The html lang attribute for a locale. */
export const HTML_LANG: Record<Locale, string> = { en: 'en', ja: 'ja' };

/** The og:locale for a locale. */
export const OG_LOCALE: Record<Locale, string> = { en: 'en_US', ja: 'ja_JP' };

/**
 * Route for a page, relative to the site root. English is unprefixed so the URL
 * the site was first published under keeps working; Japanese lives under /ja.
 * Trailing slashes everywhere, because `trailingSlash: true` is what makes the
 * static export serve directory URLs correctly on GitHub Pages.
 */
export function routeFor(locale: Locale, slug?: string): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return slug ? `${prefix}/laws/${slug}/` : `${prefix}/`;
}

/** Absolute URL for a page — used for canonicals, hreflang, sitemap and JSON-LD. */
export function urlFor(locale: Locale, slug?: string): string {
  return `${SITE_URL}${routeFor(locale, slug)}`;
}

/**
 * Canonical + hreflang for one page. The canonical is the page's own URL — the
 * two locales are alternates of each other, not duplicates of the English one.
 */
export function alternatesFor(locale: Locale, slug?: string) {
  return {
    canonical: urlFor(locale, slug),
    languages: {
      en: urlFor('en', slug),
      ja: urlFor('ja', slug),
      'x-default': urlFor(DEFAULT_LOCALE, slug),
    },
  };
}

/** § 07 — display only. */
export function article(number: number): string {
  return String(number).padStart(2, '0');
}

/** A file under public/, with the GitHub Pages sub-path in production. next/link
 *  adds the base path to routes, but a plain <img src> does not. */
export function asset(path: string): string {
  return `${process.env.NODE_ENV === 'production' ? '/hammurabi' : ''}${path}`;
}

/** A category's seal colour: hues spread evenly round the OKLCH wheel, in the
 *  order the categories are declared, so each one is recognisably its own. */
export function hueFor(tag: string): number {
  const index = Math.max(
    0,
    tags.findIndex((t) => t.key === tag)
  );
  return Math.round(20 + (index * 360) / tags.length) % 360;
}
