import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ColumnArticle from '@/components/ColumnArticle';
import PageShell from '@/components/PageShell';
import JsonLd from '@/components/JsonLd';
import { columnBreadcrumbJsonLd, columnJsonLd } from './jsonld';
import { collections, type Locale } from '@/data/laws';
import {
  columnAlternatesFor,
  columnRouteFor,
  columnUrlFor,
  OG_LOCALE,
  SITE_IMAGE,
} from './site';

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
        // Setting openGraph replaces the root's, so the banner is given again.
        images: [{ ...SITE_IMAGE, alt: title }],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description: lede,
        images: [SITE_IMAGE.url],
      },
    };
  }

  async function Page({ params }: { params: Promise<Params> }) {
    const { key } = await params;
    const column = byKey.get(key);
    if (!column) notFound();
    return (
      <PageShell lang={locale} counterpart={columnRouteFor(other, key)}>
        <JsonLd data={columnJsonLd(column, locale)} />
        <JsonLd data={columnBreadcrumbJsonLd(column, locale)} />
        <ColumnArticle column={column} lang={locale} />
      </PageShell>
    );
  }

  return { generateStaticParams, generateMetadata, Page };
}
