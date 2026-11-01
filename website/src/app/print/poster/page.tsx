import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import PrintPoster from '@/components/PrintPoster';
import { translations } from '@/translations';

export const metadata: Metadata = {
  title: translations.en.print.posterTitle,
  // A print layout, not a page to land on from search.
  robots: { index: false },
};

export default function Page() {
  return (
    <PageShell lang="en" counterpart="/ja/print/poster/">
      <PrintPoster lang="en" />
    </PageShell>
  );
}
