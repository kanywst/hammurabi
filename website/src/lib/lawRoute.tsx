import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LawArticle from '@/components/LawArticle';
import PageShell from '@/components/PageShell';
import JsonLd from '@/components/JsonLd';
import { lawJsonLd } from './jsonld';
import { alternatesFor, OG_LOCALE, routeFor, SITE_URL, urlFor } from './site';
import { laws, lawBySlug, type Locale } from '@/data/laws';

type Params = { slug: string };

/**
 * Both locales render the same article page, so the route modules under
 * app/laws and app/ja/laws are only a locale binding over this.
 */
export function makeLawRoute(locale: Locale) {
  const other: Locale = locale === 'en' ? 'ja' : 'en';

  function generateStaticParams(): Params[] {
    return laws.map((law) => ({ slug: law.slug }));
  }

  async function generateMetadata({
    params,
  }: {
    params: Promise<Params>;
  }): Promise<Metadata> {
    const { slug } = await params;
    const law = lawBySlug.get(slug);
    if (!law) return {};

    const text = law[locale];
    const title = text.title;
    // The claim alone: it is one sentence, so nothing is cut mid-word.
    const description = text.concept;
    // Drawn by scripts/og.mjs after the build. Setting openGraph here replaces
    // the root's, so the image and site name have to be given again.
    const image = {
      url: `${SITE_URL}/og/${locale}/${law.slug}.png`,
      width: 1200,
      height: 630,
      alt: title,
    };

    return {
      title,
      description,
      alternates: alternatesFor(locale, law.slug),
      openGraph: {
        type: 'article',
        url: urlFor(locale, law.slug),
        locale: OG_LOCALE[locale],
        siteName: 'Hammurabi',
        title,
        description,
        images: [image],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [image.url],
      },
    };
  }

  async function Page({ params }: { params: Promise<Params> }) {
    const { slug } = await params;
    const law = lawBySlug.get(slug);
    if (!law) notFound();

    return (
      <PageShell lang={locale} counterpart={routeFor(other, law.slug)}>
        <JsonLd data={lawJsonLd(law, locale)} />
        <LawArticle law={law} lang={locale} />
      </PageShell>
    );
  }

  return { generateStaticParams, generateMetadata, Page };
}
