import type { Law } from '@/data/laws';

/**
 * Where each law sits on the stele.
 *
 * The original runs in columns of horizontal lines below the relief. This
 * codex is carved the same way: three columns of twenty-four lines, read down
 * each column and then across, so a law has an address on the stone as well as
 * a number — "column I, line 7" — the way a scholar cites the original.
 */
export const COLUMNS = 3;
export const LINES = 24;

const ROMAN = ['I', 'II', 'III', 'IV', 'V'];

export function position(number: number): { column: string; line: number } {
  const index = number - 1;
  return {
    column:
      ROMAN[Math.floor(index / LINES)] ?? String(Math.floor(index / LINES) + 1),
    line: (index % LINES) + 1,
  };
}

/**
 * How far the carved line runs across its column, from 55% to 100%. Derived from
 * the slug so it never changes between builds or between the two languages — a
 * line on a stone does not move when you translate it.
 */
export function reach(law: Law): number {
  let hash = 2166136261;
  for (const char of law.slug) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return 55 + ((hash >>> 0) % 46);
}

/**
 * The law of the day: the same for every reader on a given UTC day, and a
 * different one tomorrow, so the front page is never the same twice in a row.
 */
export function lawOfTheDay(laws: readonly Law[], now = new Date()): Law {
  const day = Math.floor(now.getTime() / 86_400_000);
  return laws[day % laws.length];
}
