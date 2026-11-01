// GitHub Pages serves the site under the repository name.
const basePath = process.env.NODE_ENV === 'production' ? '/hammurabi' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // The repository root has its own package-lock.json (for the codex scripts),
  // so Next.js would otherwise guess the workspace root and warn about it. The
  // site is self-contained in website/, so that is the root.
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    unoptimized: true,
  },
  // Directory URLs (`/ja/` -> `out/ja/index.html`) are what GitHub Pages serves
  // reliably; without this the export emits `ja.html` and every nested route
  // becomes a coin flip.
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  // next/link adds basePath to routes, but a plain <img src> does not; this is
  // what asset() in src/lib/site.ts prefixes files under public/ with.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
