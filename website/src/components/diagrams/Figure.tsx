import type { ReactNode } from 'react';

/**
 * The frame every diagram shares: a captioned, labelled SVG that scales with the
 * column rather than a fixed-size image.
 *
 * The diagrams are inline SVG rather than files so they can use the page's own
 * colour tokens — a diagram that hardcodes its palette stops matching the text
 * around it the first time the theme moves.
 */
export default function Figure({
  title,
  caption,
  viewBox,
  children,
}: {
  title: string;
  caption: string;
  viewBox: string;
  children: ReactNode;
}) {
  return (
    <figure className="mt-10 max-w-[46rem]">
      <div className="overflow-x-auto rounded-md border border-line-soft bg-surface p-5">
        <svg
          viewBox={viewBox}
          role="img"
          aria-label={title}
          className="block h-auto w-full min-w-[520px]"
        >
          <title>{title}</title>
          {children}
        </svg>
      </div>
      <figcaption className="meta mt-3">{caption}</figcaption>
    </figure>
  );
}

/** Shared drawing constants, so the diagrams read as one set. */
export const ink = {
  line: 'var(--color-ink-2)',
  faint: 'var(--color-line)',
  text: 'var(--color-ink)',
  dim: 'var(--color-ink-2)',
  accent: 'var(--color-accent)',
  accentBright: 'var(--color-accent)',
  cool: 'var(--color-ink-3)',
  panel: 'var(--color-surface)',
};

export const label = {
  fontFamily: 'var(--font-sans)',
  fontSize: 13,
  fill: ink.text,
} as const;

export const small = {
  fontFamily: 'var(--font-sans)',
  fontSize: 12,
  fill: ink.dim,
} as const;
