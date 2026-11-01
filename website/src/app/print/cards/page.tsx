import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import PrintCards from '@/components/PrintCards';
import { translations } from '@/translations';

export const metadata: Metadata = {
  title: translations.en.print.cardsTitle,
  // A print layout, not a page to land on from search.
  robots: { index: false },
};

export default function Page() {
  return (
    <PageShell lang="en" counterpart="/ja/print/cards/">
      <PrintCards lang="en" />
    </PageShell>
  );
}
