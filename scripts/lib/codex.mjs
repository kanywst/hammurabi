import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { parse } from 'yaml';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
export const LOCALES = ['en', 'ja'];
export const SITE_URL = 'https://kanywst.github.io/hammurabi';
export const REPO_URL = 'https://github.com/kanywst/hammurabi';

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const REQUIRED_TEXT = ['title', 'concept', 'mechanism', 'guideline', 'source'];

/**
 * GitHub's heading-anchor algorithm: lowercase, drop every character that is
 * not a word character, space or hyphen, then replace each remaining space with
 * a hyphen. Used for in-markdown links so the table of contents can never rot.
 *
 * "Word character" follows Ruby's \p{Word} — letters, marks, digits and the
 * underscore — because that is what GitHub's slugger uses. Note that spaces are
 * substituted one for one rather than collapsed: two spaces become two hyphens
 * there, so they must here too.
 */
export function anchor(heading) {
  return heading
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}_\- ]/gu, '')
    .replace(/ /g, '-');
}

/** § 07 — display only, derived from position so it can never drift. */
export function article(number) {
  return String(number).padStart(2, '0');
}

/**
 * The markdown heading a law gets in a given locale. The Japanese codex keeps
 * the English name alongside the translated one, because that is the string
 * readers actually search for.
 */
export function heading(law, locale) {
  return locale === 'en' ? law.en.title : `${law.ja.title} (${law.en.title})`;
}

export function loadCodex({ file = join(ROOT, 'data', 'laws.yaml') } = {}) {
  const raw = parse(readFileSync(file, 'utf8'));
  const problems = [];
  const fail = (msg) => problems.push(msg);

  if (!raw || typeof raw !== 'object') fail('laws.yaml did not parse to an object');
  const tags = raw?.tags ?? {};
  const laws = raw?.laws ?? [];
  const situations = Array.isArray(raw?.situations) ? raw.situations : [];
  // The site's index always shows the situations, so an empty list would
  // leave an empty sidebar rather than no sidebar.
  if (!Array.isArray(raw?.situations) || raw.situations.length === 0) fail('situations: expected a non-empty list');

  if (!Array.isArray(laws) || laws.length === 0) fail('laws: expected a non-empty list');

  for (const [key, value] of Object.entries(tags)) {
    if (!SLUG_RE.test(key)) fail(`tags: "${key}" is not a valid key`);
    for (const locale of LOCALES) {
      if (!value?.[locale]) fail(`tags.${key}.${locale} is missing`);
    }
  }

  const seenSlugs = new Map();
  const seenAnchors = Object.fromEntries(LOCALES.map((l) => [l, new Map()]));

  laws.forEach((law, index) => {
    const at = `laws[${index}]${law?.slug ? ` (${law.slug})` : ''}`;

    if (!law?.slug) fail(`${at}: slug is missing`);
    else if (!SLUG_RE.test(law.slug)) fail(`${at}: slug must be lowercase kebab-case`);
    else if (seenSlugs.has(law.slug)) fail(`${at}: duplicate slug, first seen at index ${seenSlugs.get(law.slug)}`);
    else seenSlugs.set(law.slug, index);

    if (!law?.tag) fail(`${at}: tag is missing`);
    else if (!tags[law.tag]) fail(`${at}: tag "${law.tag}" is not declared under tags:`);

    if (!law?.source_url) fail(`${at}: source_url is missing`);
    else if (!/^https:\/\/\S+$/.test(law.source_url)) fail(`${at}: source_url must be an https URL`);

    for (const ref of law?.see_also ?? []) {
      if (ref === law.slug) fail(`${at}: see_also refers to itself`);
    }

    for (const locale of LOCALES) {
      const loc = law?.[locale];
      if (!loc) {
        fail(`${at}: the "${locale}" block is missing`);
        continue;
      }
      for (const field of REQUIRED_TEXT) {
        const value = loc[field];
        if (typeof value !== 'string' || value.trim() === '') {
          fail(`${at}.${locale}.${field} is empty`);
        } else if (value !== value.trim()) {
          fail(`${at}.${locale}.${field} has leading or trailing whitespace`);
        } else if ((value.match(/\*\*/g) ?? []).length % 2 !== 0) {
          fail(`${at}.${locale}.${field} has an unbalanced ** emphasis marker`);
        }
      }
      if (typeof loc.counter?.name !== 'string' || loc.counter.name.trim() === '') {
        fail(`${at}.${locale}.counter.name is empty`);
      }
      if (loc.counter && 'note' in loc.counter && !loc.counter.note?.trim()) {
        fail(`${at}.${locale}.counter.note is present but empty`);
      }
    }
  });

  // Anchor collisions are checked on the composed heading rather than the bare
  // title, because that is what lands in the markdown — the Japanese codex
  // heads each article with both names.
  for (const law of laws) {
    if (typeof law?.en?.title !== 'string' || typeof law?.ja?.title !== 'string') continue;
    for (const locale of LOCALES) {
      const text = heading(law, locale);
      const a = anchor(text);
      const seen = seenAnchors[locale];
      if (seen.has(a)) fail(`${law.slug}: heading "${text}" collides with "${seen.get(a)}" (both anchor to #${a})`);
      else seen.set(a, text);
    }
  }

  // see_also is resolved after every slug is known, so order in the file does
  // not decide whether a forward reference is legal.
  laws.forEach((law, index) => {
    for (const ref of law?.see_also ?? []) {
      if (!seenSlugs.has(ref)) fail(`laws[${index}] (${law.slug}): see_also "${ref}" matches no law`);
    }
  });

  // Situations are entry points into the codex, so every law they name must
  // exist, and each needs a label in every locale.
  const seenSituations = new Set();
  situations.forEach((situation, index) => {
    const at = `situations[${index}]${situation?.key ? ` (${situation.key})` : ''}`;
    if (!situation?.key || !SLUG_RE.test(situation.key)) fail(`${at}: key must be lowercase kebab-case`);
    else if (seenSituations.has(situation.key)) fail(`${at}: duplicate key`);
    else seenSituations.add(situation.key);
    for (const locale of LOCALES) {
      if (typeof situation?.[locale] !== 'string' || !situation[locale].trim()) fail(`${at}.${locale} is missing`);
    }
    if (!Array.isArray(situation?.laws) || situation.laws.length === 0) fail(`${at}: laws must be a non-empty list`);
    const listed = new Set();
    for (const ref of situation?.laws ?? []) {
      if (!seenSlugs.has(ref)) fail(`${at}: law "${ref}" matches no law`);
      if (listed.has(ref)) fail(`${at}: law "${ref}" is listed twice`);
      listed.add(ref);
    }
  });

  const numbered = laws.map((law, index) => ({
    ...law,
    number: index + 1,
    see_also: law.see_also ?? [],
  }));

  return { tags, situations, laws: numbered, problems };
}

/** Load and throw on the first structural problem. Callers that want to report
 *  every problem at once should use loadCodex directly. */
export function requireCodex() {
  const codex = loadCodex();
  if (codex.problems.length > 0) {
    throw new Error(`data/laws.yaml is invalid:\n  - ${codex.problems.join('\n  - ')}`);
  }
  return codex;
}

/**
 * data/figures.yaml: who or what pictures each law on the website. Returned as
 * a map from slug, with the problems found, so validate.mjs can gate it and
 * generate.mjs can read it with the same rules.
 */
const FIGURE_KEYS = new Set(['slug', 'kind', 'name', 'image', 'logo', 'license', 'author', 'page', 'focus', 'viewbox']);

export function loadFigures({ file = join(ROOT, 'data', 'figures.yaml') } = {}) {
  const raw = parse(readFileSync(file, 'utf8'));
  const problems = [];
  const figures = new Map();
  for (const [i, f] of (raw?.figures ?? []).entries()) {
    if (!f || typeof f !== 'object') {
      problems.push(`figures[${i}]: not a mapping`);
      continue;
    }
    const at = f.slug ?? `figures[${i}]`;
    const unknown = Object.keys(f).filter((k) => !FIGURE_KEYS.has(k));
    if (unknown.length) problems.push(`${at}: unknown field(s) ${unknown.join(', ')}`);
    for (const key of ['image', 'logo', 'page']) {
      if (f[key] !== undefined && !/^https:\/\/\S+$/.test(f[key])) problems.push(`${at}: ${key} must be an https URL`);
    }
    if (!f?.slug || !SLUG_RE.test(f.slug)) problems.push(`${at}: bad slug`);
    if (figures.has(f.slug)) problems.push(`${at}: duplicate`);
    if (!['person', 'scene', 'company', 'none'].includes(f.kind)) problems.push(`${at}: kind must be person, scene, company or none`);
    if (f.kind !== 'none' && !f.name) problems.push(`${at}: ${f.kind} needs a name`);
    if (f.image && !['person', 'scene'].includes(f.kind)) problems.push(`${at}: only a person or a scene has an image`);
    if (f.kind === 'scene' && !f.image) problems.push(`${at}: a scene needs an image`);
    if (f.logo && f.kind !== 'company') problems.push(`${at}: only a company has a logo`);
    if (f.kind === 'company' && !f.logo) problems.push(`${at}: company needs a logo`);
    if (f.viewbox && !(f.logo && /^-?[\d.]+( -?[\d.]+){3}$/.test(f.viewbox))) problems.push(`${at}: viewbox needs an SVG logo and four numbers`);
    if (f.focus && !(f.image && [f.focus.x, f.focus.y].every((v) => v >= 0 && v <= 1) && (f.focus.zoom ?? 1) >= 1)) {
      problems.push(`${at}: focus needs an image, x and y in 0..1, zoom >= 1`);
    }
    if ((f.image || f.logo) && !f.license) problems.push(`${at}: an image needs its licence`);
    figures.set(f.slug, f);
  }
  return { figures, problems };
}
