import type { MetadataRoute } from 'next';
import { collections, laws } from '@/data/laws';
import { columnUrlFor, DEFAULT_LOCALE, LOCALES, urlFor } from '@/lib/site';

// Required for `output: 'export'` — emit a static sitemap.xml at build time.
export const dynamic = 'force-static';

function alternates(slug?: string) {
  return {
    languages: {
      ...Object.fromEntries(
        LOCALES.map((locale) => [locale, urlFor(locale, slug)])
      ),
      // Tells a crawler which version to serve a reader whose language matches
      // neither entry, rather than leaving it to guess.
      'x-default': urlFor(DEFAULT_LOCALE, slug),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homes = LOCALES.map((locale) => ({
    url: urlFor(locale),
    changeFrequency: 'weekly' as const,
    priority: 1,
    alternates: alternates(),
  }));

  const articles = LOCALES.flatMap((locale) =>
    laws.map((law) => ({
      url: urlFor(locale, law.slug),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: alternates(law.slug),
    }))
  );

  const columns = LOCALES.flatMap((locale) =>
    collections.map((column) => ({
      url: columnUrlFor(locale, column.key),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          ...Object.fromEntries(
            LOCALES.map((l) => [l, columnUrlFor(l, column.key)])
          ),
          'x-default': columnUrlFor(DEFAULT_LOCALE, column.key),
        },
      },
    }))
  );

  return [...homes, ...articles, ...columns];
}
