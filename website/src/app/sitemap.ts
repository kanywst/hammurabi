import type { MetadataRoute } from 'next';
import { collections, laws, type Locale } from '@/data/laws';
import { columnUrlFor, languagesFor, LOCALES, urlFor } from '@/lib/site';

// Required for `output: 'export'` — emit a static sitemap.xml at build time.
export const dynamic = 'force-static';

function alternates(url: (locale: Locale) => string) {
  return { languages: languagesFor(url) };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homes = LOCALES.map((locale) => ({
    url: urlFor(locale),
    changeFrequency: 'weekly' as const,
    priority: 1,
    alternates: alternates((l) => urlFor(l)),
  }));

  const articles = LOCALES.flatMap((locale) =>
    laws.map((law) => ({
      url: urlFor(locale, law.slug),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: alternates((l) => urlFor(l, law.slug)),
    }))
  );

  const columns = LOCALES.flatMap((locale) =>
    collections.map((column) => ({
      url: columnUrlFor(locale, column.key),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: alternates((l) => columnUrlFor(l, column.key)),
    }))
  );

  return [...homes, ...articles, ...columns];
}
