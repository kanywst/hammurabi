#!/usr/bin/env node
/**
 * A share card for every law, in both languages: out/og/<locale>/<slug>.png.
 *
 * 1200×630, the size every network crops to. It carries what makes the codex
 * different — the law, its claim and its counter-force — plus the law's
 * medallion, so a link pasted into a chat says something before it is opened.
 *
 * Runs after `next build`, from the exported data. The cards are set in
 * Shippori Mincho B1 (OFL), downloaded once into node_modules/.cache. Without
 * a network (a sandboxed local build) the download fails and the step is
 * skipped with a warning; CI and the deploy always have one.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(SITE, 'out', 'og');
const CACHE = join(SITE, 'node_modules', '.cache', 'hammurabi-og');
const FONT_BASE =
  'https://github.com/google/fonts/raw/main/ofl/shipporiminchob1/';
const FONTS = [
  'ShipporiMinchoB1-ExtraBold.ttf',
  'ShipporiMinchoB1-SemiBold.ttf',
];

// A local preview can name a system face instead (OG_FONT_FAMILY), when the
// font cannot be downloaded; published cards always use Shippori Mincho B1.
const FAMILY = process.env.OG_FONT_FAMILY ?? 'Shippori Mincho B1';

const W = 1200;
const H = 630;
const PAPER = '#fbfbf9';
const INK = '#17181a';
const INK2 = '#3f4246';
const INK3 = '#5c5f64';
const ACCENT = '#1d47b8';
const LINE = '#c9ccc8';

const COPY = {
  en: {
    counter: 'Counter-force',
    tagline: 'Engineering laws, each with its counter-force',
  },
  ja: { counter: '歯止め', tagline: 'エンジニアリングの法則と、その歯止め' },
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

async function fonts() {
  mkdirSync(CACHE, { recursive: true });
  for (const file of FONTS) {
    const target = join(CACHE, file);
    if (existsSync(target)) continue;
    const res = await fetch(FONT_BASE + file);
    if (!res.ok) throw new Error(`${res.status} ${file}`);
    writeFileSync(target, Buffer.from(await res.arrayBuffer()));
  }
  // librsvg finds fonts through fontconfig; point it at the cache first.
  const conf = join(CACHE, 'fonts.conf');
  writeFileSync(
    conf,
    `<?xml version="1.0"?><fontconfig><dir>${CACHE}</dir><include ignore_missing="yes">/etc/fonts/fonts.conf</include><cachedir>${join(CACHE, 'fc')}</cachedir></fontconfig>`
  );
  process.env.FONTCONFIG_FILE = conf;
}

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Greedy line breaking by estimated advance: full-width glyphs take 1em,
 *  Latin about 0.55em. Good enough for a card; the last line gets an ellipsis
 *  if the text does not fit. */
function wrap(text, size, width, maxLines) {
  const adv = (ch) => (/[　-鿿＀-￯]/.test(ch) ? 1 : 0.5) * size;
  const tokens = text.match(/[　-鿿＀-￯]|[^\s　-鿿＀-￯]+\s*|\s+/g) ?? [];
  const lines = [];
  let line = '';
  let w = 0;
  for (const tok of tokens) {
    const tw = [...tok].reduce((sum, ch) => sum + adv(ch), 0);
    if (w + tw > width && line) {
      lines.push(line.trimEnd());
      line = tok.trimStart();
      w = [...line].reduce((sum, ch) => sum + adv(ch), 0);
    } else {
      line += tok;
      w += tw;
    }
  }
  if (line.trim()) lines.push(line.trimEnd());
  if (lines.length > maxLines) {
    lines.length = maxLines;
    lines[maxLines - 1] = lines[maxLines - 1].replace(/.{1,2}$/u, '') + '…';
  }
  return lines;
}

/** oklch(0.47 0.14 h), the seal colour on the site, as sRGB hex. */
function sealColor(hue) {
  const L = 0.47;
  const C = 0.14;
  const h = (hue * Math.PI) / 180;
  const a = C * Math.cos(h);
  const b = C * Math.sin(h);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const lin = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
  return (
    '#' +
    lin
      .map((c) => {
        const v = c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055;
        return Math.round(Math.min(1, Math.max(0, v)) * 255)
          .toString(16)
          .padStart(2, '0');
      })
      .join('')
  );
}

async function medallion(sharp, law, hue, size) {
  const circle = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}"/></svg>`
  );
  const fig = law.figure;
  let body;
  if (fig.image) {
    body = await sharp(join(SITE, 'public', fig.image))
      .resize(size, size, { fit: 'cover' })
      .composite([{ input: circle, blend: 'dest-in' }])
      .png()
      .toBuffer();
  } else if (fig.logo) {
    const inner = Math.round(size * (fig.wide ? 0.86 : 0.64));
    const logo = await sharp(join(SITE, 'public', fig.logo), { density: 300 })
      .resize(inner, inner, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();
    body = await sharp({
      create: { width: size, height: size, channels: 4, background: '#ffffff' },
    })
      .composite([
        { input: logo, gravity: 'center' },
        { input: circle, blend: 'dest-in' },
      ])
      .png()
      .toBuffer();
  } else {
    const color = sealColor(hue);
    body = Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
        <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="${color}"/>
        <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 12}" fill="none" stroke="#ffffff" stroke-opacity="0.55" stroke-width="3"/>
        <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" fill="#ffffff"
          font-family="${FAMILY}" font-weight="800" font-size="${size * 0.32}">${esc(fig.monogram)}</text>
      </svg>`
    );
    body = await sharp(body).png().toBuffer();
  }
  // A thin ring, as on the site.
  const ring = Buffer.from(
    `<svg width="${size + 16}" height="${size + 16}"><circle cx="${size / 2 + 8}" cy="${size / 2 + 8}" r="${size / 2 + 6}" fill="${PAPER}" stroke="${LINE}" stroke-width="2"/></svg>`
  );
  return sharp(ring)
    .composite([{ input: body, left: 8, top: 8 }])
    .png()
    .toBuffer();
}

function card(law, lang, tagLabel) {
  const t = law[lang];
  const label = lang === 'ja' ? `第${law.number}条` : `§ ${law.number}`;
  const textW = 760;
  const titleSize = lang === 'ja' ? 64 : 62;
  const title = wrap(t.title, titleSize, textW, 2);
  const stance = wrap(t.stance, 32, textW, 2);
  const counter = wrap(
    `${COPY[lang].counter}${lang === 'ja' ? '：' : ': '}${t.counter.name}`,
    26,
    textW,
    1
  );
  let y = 132;
  const parts = [];
  parts.push(
    `<text x="72" y="${y}" font-family="${FAMILY}" font-weight="800" font-size="30" fill="${ACCENT}">${esc(label)}<tspan fill="${INK3}" font-weight="600" font-size="24" dx="18">${esc(tagLabel)}</tspan></text>`
  );
  y += 30;
  for (const line of title) {
    y += titleSize * 1.18;
    parts.push(
      `<text x="72" y="${y}" font-family="${FAMILY}" font-weight="800" font-size="${titleSize}" fill="${INK}">${esc(line)}</text>`
    );
  }
  y += 22;
  // The stance is the line to remember, so it always fits; the concept gets
  // whatever room is left above the counter, up to three lines, and is left
  // out rather than cut to a stub when a long title leaves no room.
  const bottom = H - 170;
  const stanceH = 18 + stance.length * 32 * 1.4;
  const room = Math.floor((bottom - y - stanceH) / (30 * 1.5));
  const concept = room > 0 ? wrap(t.concept, 30, textW, Math.min(3, room)) : [];
  for (const line of concept) {
    y += 30 * 1.5;
    parts.push(
      `<text x="72" y="${y}" font-family="${FAMILY}" font-weight="600" font-size="30" fill="${INK2}">${esc(line)}</text>`
    );
  }
  y += 18;
  for (const line of stance) {
    y += 32 * 1.4;
    parts.push(
      `<text x="72" y="${y}" font-family="${FAMILY}" font-weight="800" font-size="32" fill="${INK}">${esc(line)}</text>`
    );
  }
  parts.push(
    `<rect x="72" y="${H - 132}" width="4" height="40" fill="${ACCENT}"/>`,
    `<text x="92" y="${H - 102}" font-family="${FAMILY}" font-weight="600" font-size="26" fill="${INK}">${esc(counter[0])}</text>`,
    `<line x1="72" y1="${H - 64}" x2="${W - 72}" y2="${H - 64}" stroke="${LINE}" stroke-width="1"/>`,
    `<text x="72" y="${H - 28}" font-family="${FAMILY}" font-weight="800" font-size="24" fill="${INK}">Hammurabi<tspan font-weight="600" fill="${INK3}" dx="16">${esc(COPY[lang].tagline)}</tspan></text>`
  );
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="${PAPER}"/>${parts.join('')}</svg>`
  );
}

async function main() {
  if (!existsSync(join(SITE, 'out'))) {
    console.error('og: no out/ directory, run next build first');
    process.exit(1);
  }
  try {
    await fonts();
  } catch (err) {
    if (!process.env.OG_FONT_FAMILY) {
      console.warn(
        `og: skipped, the display font could not be fetched (${err.message})`
      );
      return;
    }
  }
  const { default: sharp } = await import('sharp');
  const { tags, laws } = readData();
  const hueFor = (tag) => {
    const i = Math.max(
      0,
      tags.findIndex((t) => t.key === tag)
    );
    return Math.round(20 + (i * 360) / tags.length) % 360;
  };
  let n = 0;
  for (const lang of ['en', 'ja']) {
    mkdirSync(join(OUT, lang), { recursive: true });
    for (const law of laws) {
      const tag = tags.find((t) => t.key === law.tag)?.[lang] ?? '';
      const medal = await medallion(sharp, law, hueFor(law.tag), 264);
      await sharp(card(law, lang, tag))
        .composite([{ input: medal, left: W - 72 - 280, top: 150 }])
        .png({ compressionLevel: 9, palette: true, quality: 90 })
        .toFile(join(OUT, lang, `${law.slug}.png`));
      n += 1;
    }
  }
  console.log(`og: wrote ${n} share cards`);
}

await main();
