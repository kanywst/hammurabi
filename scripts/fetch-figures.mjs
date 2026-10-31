#!/usr/bin/env node
/**
 * data/figures.yaml -> website/public/figures/
 *
 * Downloads each portrait and logo once and stores a processed copy, so the
 * site never hot-links Wikimedia and every image is the same size.
 * Portraits become a 320px colour square, cropped on the face (see `focus`)
 * or the most salient region. SVG logos are kept as SVG (with `viewbox`
 * applied when set); raster logos become a 256px PNG.
 *
 * Originals are cached in .cache/figures/ (not committed), so changing a
 * figure's `focus` only reprocesses; nothing is downloaded twice. Existing
 * outputs are skipped; pass --force to reprocess everything, or name slugs to
 * reprocess just those: `npm run fetch:figures -- tail-at-scale`.
 *
 * `focus` overrides the automatic crop for photos where the face is small or
 * off-centre: x and y are the face's centre as a fraction of the original,
 * zoom is how many times smaller than the short side the square is.
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { loadFigures, ROOT } from './lib/codex.mjs';

const sharp = createRequire(join(ROOT, 'website', 'package.json'))('sharp');
const OUT = join(ROOT, 'website', 'public', 'figures');
const CACHE = join(ROOT, '.cache', 'figures');
const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const ONLY = new Set(args.filter((a) => !a.startsWith('--')));
// Wikimedia asks for a descriptive User-Agent and rejects anonymous clients.
const UA = 'hammurabi-figures/1.0 (https://github.com/kanywst/hammurabi)';

const { figures, problems } = loadFigures();
if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
mkdirSync(OUT, { recursive: true });
mkdirSync(CACHE, { recursive: true });

async function get(slug, url) {
  const cached = join(CACHE, `${slug}-${createHash('sha256').update(url).digest('hex').slice(0, 16)}`);
  if (existsSync(cached)) return { body: readFileSync(cached), fetched: false };
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const body = Buffer.from(await res.arrayBuffer());
  writeFileSync(cached, body);
  return { body, fetched: true };
}

/** The square to cut: the figure's own focus, or sharp's saliency guess. */
async function portrait(body, focus) {
  // Phone photos carry their rotation in EXIF; apply it so the crop and the
  // focus coordinates are in the frame a viewer sees.
  const image = sharp(body, { autoOrient: true });
  if (focus) {
    const meta = await image.metadata();
    const { width, height } = meta.autoOrient ?? meta;
    const size = Math.round(Math.min(width, height) / (focus.zoom ?? 1));
    const clamp = (v, max) => Math.max(0, Math.min(Math.round(v), max));
    image.extract({
      left: clamp(focus.x * width - size / 2, width - size),
      top: clamp(focus.y * height - size / 2, height - size),
      width: size,
      height: size,
    });
  }
  return image.resize(320, 320, { fit: 'cover', position: sharp.strategy.attention });
}

for (const slug of ONLY) {
  if (!figures.get(slug)?.image && !figures.get(slug)?.logo) {
    console.error(`warn: ${slug} has no image or logo in data/figures.yaml`);
  }
}

let failed = 0;
for (const f of figures.values()) {
  const url = f.image ?? f.logo;
  if (!url) continue;
  const ext = f.image ? 'webp' : /\.svg$/i.test(url) ? 'svg' : 'png';
  const target = join(OUT, `${f.slug}.${ext}`);
  if (ONLY.size ? !ONLY.has(f.slug) : existsSync(target) && !FORCE) continue;
  try {
    const { body, fetched } = await get(f.slug, url);
    if (ext === 'svg') {
      let svg = body.toString('utf8');
      // Served from the site's own origin, so refuse anything that could run.
      if (/<script|\son\w+\s*=|<foreignObject|<!ENTITY/i.test(svg)) {
        throw new Error('SVG contains script, event handlers or entities');
      }
      if (f.viewbox) {
        // Only the root element: a nested <symbol> or <svg> keeps its own box.
        svg = svg.replace(/<svg\b[^>]*>/, (tag) =>
          tag
            .replace(/\s(viewBox|width|height)=("[^"]*"|'[^']*')/g, '')
            .replace(/^<svg\b/, `<svg viewBox="${f.viewbox}"`)
        );
      }
      writeFileSync(target, svg);
    } else if (ext === 'png') {
      await sharp(body).resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(target);
    } else {
      await (await portrait(body, f.focus))
        .webp({ quality: 72 })
        .toFile(target);
    }
    // A figure that changed format (a logo moving from SVG to PNG) would
    // otherwise leave the old file behind, and the generator would pick it.
    for (const other of ['webp', 'svg', 'png']) {
      if (other !== ext) rmSync(join(OUT, `${f.slug}.${other}`), { force: true });
    }
    console.log(`wrote: ${f.slug}`);
    if (fetched) await new Promise((r) => setTimeout(r, 300));
  } catch (err) {
    failed += 1;
    console.error(`failed: ${f.slug}: ${err.message}`);
  }
}
// A figure whose image was removed, or a law that was renamed, leaves a file
// nothing references; it would still be deployed, so sweep it.
const expected = new Set(
  [...figures.values()]
    .filter((f) => f.image || f.logo)
    .flatMap((f) => (f.image ? [`${f.slug}.webp`] : [`${f.slug}.svg`, `${f.slug}.png`]))
);
for (const file of readdirSync(OUT)) {
  if (!expected.has(file)) {
    rmSync(join(OUT, file));
    console.log(`removed: ${file}`);
  }
}

process.exit(failed ? 1 : 0);
