import {
  laws,
  lawBySlug,
  tags,
  type Collection,
  type Law,
  type Locale,
} from '@/data/laws';
import { article, columnUrlFor, REPO_URL, SITE_URL, urlFor } from './site';
import { translations } from '@/translations';

/**
 * The codex as a DefinedTermSet, with every article as a DefinedTerm that has
 * its own URL. Search engines get one machine-readable list per locale rather
 * than a wall of anonymous cards.
 */
export function codexJsonLd(locale: Locale) {
  const copy = translations[locale].ui;
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': urlFor(locale),
    name: copy.metaTitle,
    description: copy.metaDescription,
    url: urlFor(locale),
    inLanguage: locale,
    license: `${REPO_URL}/blob/main/LICENSE`,
    hasDefinedTerm: laws.map((law) => ({
      '@type': 'DefinedTerm',
      '@id': urlFor(locale, law.slug),
      name: law[locale].title,
      description: law[locale].concept,
      termCode: `§ ${article(law.number)}`,
      url: urlFor(locale, law.slug),
      inDefinedTermSet: urlFor(locale),
    })),
  };
}

export function lawJsonLd(law: Law, locale: Locale) {
  const tag = tags.find((candidate) => candidate.key === law.tag);
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': urlFor(locale, law.slug),
    name: law[locale].title,
    // The English name is the one people search for, so it is worth carrying on
    // the Japanese article — but repeating it as an alternate of itself is not.
    ...(locale === 'en' ? {} : { alternateName: law.en.title }),
    description: law[locale].mechanism,
    termCode: `§ ${article(law.number)}`,
    url: urlFor(locale, law.slug),
    inLanguage: locale,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      '@id': urlFor(locale),
      name: translations[locale].ui.metaTitle,
      url: urlFor(locale),
    },
    ...(tag ? { about: tag[locale] } : {}),
    subjectOf: {
      '@type': 'CreativeWork',
      name: law[locale].source,
      url: law.sourceUrl,
    },
    image: `${SITE_URL}/og/${locale}/${law.slug}.png`,
  };
}

/** Codex > page, so a search result can show where the page sits. */
function breadcrumbJsonLd(locale: Locale, name: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Hammurabi',
        item: urlFor(locale),
      },
      { '@type': 'ListItem', position: 2, name, item: url },
    ],
  };
}

export function lawBreadcrumbJsonLd(law: Law, locale: Locale) {
  return breadcrumbJsonLd(locale, law[locale].title, urlFor(locale, law.slug));
}

export function columnBreadcrumbJsonLd(column: Collection, locale: Locale) {
  return breadcrumbJsonLd(
    locale,
    column[locale].title,
    columnUrlFor(locale, column.key)
  );
}

/** A column as an ordered list of the laws it reads through. */
export function columnJsonLd(column: Collection, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': columnUrlFor(locale, column.key),
    name: column[locale].title,
    description: column[locale].lede,
    url: columnUrlFor(locale, column.key),
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: column.laws.length,
    itemListElement: column.laws.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: lawBySlug.get(item.slug)?.[locale].title,
      url: urlFor(locale, item.slug),
    })),
  };
}
