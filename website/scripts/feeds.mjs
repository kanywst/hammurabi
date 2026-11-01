#!/usr/bin/env node
/**
 * Machine-readable copies of the codex, written into the static export:
 *
 *   out/api/laws.json        every law, both languages, one file
 *   out/llms.txt             an index for language models, per llmstxt.org
 *   out/llms-full.txt        the whole codex as one Markdown document
 *   out/laws/<slug>/index.md and out/ja/laws/<slug>/index.md
 *   out/feed.xml and out/ja/feed.xml   RSS 2.0, newest article first
 *
 * All of it is CC BY-SA 4.0, like the text it is generated from, so anyone can
 * build a bot, a CLI or a deck on top of it.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(SITE, 'out');
const BASE = 'https://kanywst.github.io/hammurabi';
const LICENSE =
  'CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/)';

const COPY = {
  en: {
    tagline: 'Engineering laws, each with its counter-force.',
    concept: 'Concept',
    mechanism: 'Why it happens',
    counter: 'Counter-force',
    guideline: 'What to do',
    example: 'In practice',
    source: 'Source',
    seeAlso: 'See also',
    label: (n) => `§ ${n}`,
  },
  ja: {
    tagline: 'エンジニアリングの法則と、その歯止め。',
    concept: '概念',
    mechanism: 'なぜ起きるか',
    counter: '歯止め',
    guideline: 'どうするか',
    example: '実際にあったこと',
    source: '出典',
    seeAlso: '関連する法則',
    label: (n) => `第${n}条`,
  },
};

/** The site's data module is generated JSON behind a type annotation. */
function readData() {
  const src = readFileSync(join(SITE, 'src', 'data', 'laws.ts'), 'utf8');
  const grab = (name, next) => {
    const start = src.indexOf(`export const ${name}`);
    const from = src.indexOf('=', start) + 1;
    const to = src.indexOf(next, from);
    return JSON.parse(src.slice(from, to).trim().replace(/;$/, ''));
  };
  return {
    tags: grab('tags', 'export const situations'),
    laws: grab('laws', 'export const lawBySlug'),
  };
}

const url = (lang, slug) =>
  `${BASE}${lang === 'ja' ? '/ja' : ''}/laws/${slug}/`;

function markdown(law, lang, tagLabel, bySlug) {
  const t = law[lang];
  const c = COPY[lang];
  const note = t.counter.note ? `: ${t.counter.note}` : '';
  const related = law.seeAlso
    .map((s) => bySlug.get(s))
    .filter(Boolean)
    .map((o) => `- [${o[lang].title}](${url(lang, o.slug)})`)
    .join('\n');
  return [
    `# ${t.title}`,
    '',
    `${c.label(law.number)} · ${tagLabel}`,
    '',
    `## ${c.concept}`,
    '',
    t.concept,
    '',
    `## ${c.guideline}`,
    '',
    t.guideline,
    '',
    `## ${c.mechanism}`,
    '',
    t.mechanism,
    '',
    ...(t.example && law.exampleUrl
      ? [`## ${c.example}`, '', t.example, '', law.exampleUrl, '']
      : []),
    `## ${c.counter}`,
    '',
    `**${t.counter.name}**${note}`,
    '',
    `## ${c.source}`,
    '',
    t.source,
    '',
    law.sourceUrl,
    ...(related ? ['', `## ${c.seeAlso}`, '', related] : []),
    '',
    '---',
    '',
    `${url(lang, law.slug)} · ${LICENSE}`,
    '',
  ].join('\n');
}

const xml = (s) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function rss(lang, laws) {
  const home = `${BASE}${lang === 'ja' ? '/ja' : ''}/`;
  const items = [...laws]
    .reverse()
    .map(
      (law) => `    <item>
      <title>${xml(`${COPY[lang].label(law.number)} ${law[lang].title}`)}</title>
      <link>${url(lang, law.slug)}</link>
      <guid isPermaLink="true">${url(lang, law.slug)}</guid>
      <description>${xml(law[lang].concept)}</description>
    </item>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Hammurabi</title>
    <link>${home}</link>
    <description>${xml(COPY[lang].tagline)}</description>
    <language>${lang}</language>
${items}
  </channel>
</rss>
`;
}

function main() {
  const { tags, laws } = readData();
  const bySlug = new Map(laws.map((l) => [l.slug, l]));
  const tagOf = (law, lang) =>
    tags.find((t) => t.key === law.tag)?.[lang] ?? '';

  const api = {
    name: 'Hammurabi',
    description: COPY.en.tagline,
    homepage: `${BASE}/`,
    license: LICENSE,
    count: laws.length,
    laws: laws.map((law) => ({
      number: law.number,
      slug: law.slug,
      tag: law.tag,
      figure: law.figure.name,
      source_url: law.sourceUrl,
      example_url: law.exampleUrl,
      see_also: law.seeAlso,
      url: { en: url('en', law.slug), ja: url('ja', law.slug) },
      og_image: {
        en: `${BASE}/og/en/${law.slug}.png`,
        ja: `${BASE}/og/ja/${law.slug}.png`,
      },
      en: law.en,
      ja: law.ja,
    })),
  };
  mkdirSync(join(OUT, 'api'), { recursive: true });
  writeFileSync(join(OUT, 'api', 'laws.json'), JSON.stringify(api, null, 2));

  for (const lang of ['en', 'ja']) {
    for (const law of laws) {
      const dir = join(OUT, ...(lang === 'ja' ? ['ja'] : []), 'laws', law.slug);
      mkdirSync(dir, { recursive: true });
      writeFileSync(
        join(dir, 'index.md'),
        markdown(law, lang, tagOf(law, lang), bySlug)
      );
    }
    writeFileSync(
      join(OUT, ...(lang === 'ja' ? ['ja'] : []), 'feed.xml'),
      rss(lang, laws)
    );
  }

  const index = [
    '# Hammurabi',
    '',
    `> ${COPY.en.tagline} Each law has a mechanism, a counter-force that limits it, a field guideline and a primary source. English and Japanese. ${LICENSE}.`,
    '',
    `- [All laws as JSON](${BASE}/api/laws.json): both languages, every field`,
    `- [The full codex as Markdown](${BASE}/llms-full.txt)`,
    '',
    '## Laws',
    '',
    ...laws.map(
      (law) =>
        `- [${law.en.title}](${BASE}/laws/${law.slug}/index.md): ${law.en.concept}`
    ),
    '',
  ].join('\n');
  writeFileSync(join(OUT, 'llms.txt'), index);
  writeFileSync(
    join(OUT, 'llms-full.txt'),
    laws.map((law) => markdown(law, 'en', tagOf(law, 'en'), bySlug)).join('\n')
  );
  console.log(
    `feeds: api, llms.txt, ${laws.length * 2} markdown pages, 2 RSS feeds`
  );
}

main();
