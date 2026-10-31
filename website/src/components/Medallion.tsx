import clsx from 'clsx';
import type { Figure } from '@/data/laws';
import { asset } from '@/lib/site';

/**
 * The face of a law: a portrait of the person it is named for, the mark of the
 * company it comes from, or — when there is no free image or no single
 * originator — a monogram seal in the colour of the law's category.
 *
 * Always decorative: the name it stands for is printed next to it.
 */
export default function Medallion({
  figure,
  hue,
  size = 'sm',
  className,
}: {
  figure: Figure;
  /** Seal colour, as an OKLCH hue angle. */
  hue: number;
  size?: 'sm' | 'lg';
  className?: string;
}) {
  const kind = figure.image ? 'portrait' : figure.logo ? 'logo' : 'seal';
  const src = figure.image ?? figure.logo;
  return (
    <span
      aria-hidden
      className={clsx(
        'medal',
        `medal--${size}`,
        `medal--${kind}`,
        figure.wide && 'medal--wide',
        className
      )}
      style={
        kind === 'seal'
          ? ({ '--seal-hue': hue } as React.CSSProperties)
          : undefined
      }
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset(src)}
          alt=""
          // The large one heads the article, above the fold.
          loading={size === 'lg' ? 'eager' : 'lazy'}
          decoding="async"
        />
      ) : (
        <span className="medal__mono">{figure.monogram}</span>
      )}
    </span>
  );
}
