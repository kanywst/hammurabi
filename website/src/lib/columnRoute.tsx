import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ColumnArticle from '@/components/ColumnArticle';
import PageShell from '@/components/PageShell';
import { collections, type Locale } from '@/data/laws';
import {
  columnAlternatesFor,
  columnRouteFor,
  columnUrlFor,
  OG_LOCALE,
  SITE_URL,
} from './site';

// Setting openGraph replaces the root's, so the site banner is given again.
const SITE_IMAGE = `${SITE_URL}/banner.jpg`;

type Params = { key: string };

/** Both locales render the same column page; the route modules under
 *  app/columns and app/ja/columns only bind a locale, as lawRoute does. */
export function makeColumnRoute(locale: Locale) {
  const other: Locale = locale === 'en' ? 'ja' : 'en';
  const byKey = new Map(collections.map((c) => [c.key, c]));

  function generateStaticParams(): Params[] {
    return collections.map((c) => ({ key: c.key }));
  }

  async function generateMetadata({
    params,
  }: {
    params: Promise<Params>;
  }): Promise<Metadata> {
    const { key } = await params;
    const column = byKey.get(key);
    if (!column) return {};
    const { title, lede } = column[locale];
    return {
      title,
      description: lede,
      alternates: columnAlternatesFor(locale, key),
      openGraph: {
        type: 'article',
        url: columnUrlFor(locale, key),
        locale: OG_LOCALE[locale],
        siteName: 'Hammurabi',
        title,
        description: lede,
        images: [{ url: SITE_IMAGE, width: 1600, height: 643, alt: title }],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description: lede,
        images: [SITE_IMAGE],
      },
    };
  }

  async function Page({ params }: { params: Promise<Params> }) {
    const { key } = await params;
    const column = byKey.get(key);
    if (!column) notFound();
    return (
      <PageShell lang={locale} counterpart={columnRouteFor(other, key)}>
        <ColumnArticle column={column} lang={locale} />
      </PageShell>
    );
  }

  return { generateStaticParams, generateMetadata, Page };
}
