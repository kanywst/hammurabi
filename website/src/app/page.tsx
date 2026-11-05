import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import PageShell from '@/components/PageShell';
import JsonLd from '@/components/JsonLd';
import { codexJsonLd } from '@/lib/jsonld';
import {
  alternatesFor,
  OG_LOCALE,
  routeFor,
  SITE_IMAGE,
  urlFor,
} from '@/lib/site';
import { translations } from '@/translations';

const LOCALE = 'en' as const;
const copy = translations[LOCALE].ui;

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.metaDescription,
  alternates: alternatesFor(LOCALE),
  // Setting openGraph replaces the root's, so type, site name and banner are
  // given again.
  openGraph: {
    type: 'website',
    siteName: 'Hammurabi',
    url: urlFor(LOCALE),
    locale: OG_LOCALE[LOCALE],
    title: copy.metaTitle,
    description: copy.metaDescription,
    images: [{ ...SITE_IMAGE, alt: copy.metaTitle }],
  },
};

export default function Page() {
  return (
    <PageShell lang={LOCALE} counterpart={routeFor('ja')}>
      <JsonLd data={codexJsonLd(LOCALE)} />
      <HomePage lang={LOCALE} />
    </PageShell>
  );
}
