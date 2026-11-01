import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import PrintPoster from '@/components/PrintPoster';
import { translations } from '@/translations';

export const metadata: Metadata = {
  title: translations.ja.print.posterTitle,
  // A print layout, not a page to land on from search.
  robots: { index: false },
};

export default function Page() {
  return (
    <PageShell lang="ja" counterpart="/print/poster/">
      <PrintPoster lang="ja" />
    </PageShell>
  );
}
