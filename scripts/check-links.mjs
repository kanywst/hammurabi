#!/usr/bin/env node
/**
 * Verify that every source URL in the codex still resolves.
 *
 * A citation nobody can follow is only marginally better than no citation, and
 * link rot is silent. Run it locally before adding a law; CI runs it on a
 * schedule rather than per-commit so a publisher's outage never blocks a merge.
 */
import { requireCodex } from './lib/codex.mjs';

// A publisher answering 401/403/405/429 has told us the URL exists and that it
// does not serve robots — which is most of academic publishing, and the SEC.
// That is a different fact from "this citation is dead", so it is reported
// separately and does not fail the run.
const BLOCKED = new Set([401, 403, 405, 429]);
// A publisher that does not answer, or answers 5xx, has not told us anything
// about the citation — only about its afternoon. Those are retried, and if they
// still do not answer they are reported as unreachable without failing the run.
// Only a definite answer (404, 410, ...) means the citation is dead.
const RETRIES = 2;
const RETRY_DELAY_MS = 5_000;
const CONCURRENCY = 6;
const TIMEOUT_MS = 20_000;
const UA =
  'Mozilla/5.0 (compatible; hammurabi-linkcheck/1.0; +https://github.com/kanywst/hammurabi)';

async function probe(url, method) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method,
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': UA, accept: '*/*' },
    });
    return { status: res.status, url: res.url };
  } finally {
    clearTimeout(timer);
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const isTransient = (status) => status === 0 || status >= 500;

async function attempt(url) {
  try {
    // Some publishers (and every DOI resolver) answer HEAD with a 4xx while
    // serving GET fine, so a failed HEAD is retried rather than reported.
    let result = await probe(url, 'HEAD');
    if (result.status >= 400) result = await probe(url, 'GET');
    return result;
  } catch (error) {
    return { status: 0, error: error.name === 'AbortError' ? 'timeout' : String(error.cause ?? error) };
  }
}

async function check(law) {
  let result = await attempt(law.source_url);
  for (let i = 0; i < RETRIES && isTransient(result.status); i++) {
    await sleep(RETRY_DELAY_MS * (i + 1));
    result = await attempt(law.source_url);
  }
  return { law, ...result };
}

const { laws } = requireCodex();
const queue = [...laws];
const results = [];

await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    for (let law = queue.shift(); law; law = queue.shift()) {
      results.push(await check(law));
    }
  })
);

results.sort((a, b) => a.law.number - b.law.number);

const verbose = process.argv.includes('--verbose');
const failed = [];
const blocked = [];
const unreachable = [];

for (const result of results) {
  const { law, status, error } = result;
  const ok = status >= 200 && status < 400;
  const isBlocked = BLOCKED.has(status);
  const isUnreachable = !ok && isTransient(status);
  if (isBlocked) blocked.push(result);
  else if (isUnreachable) unreachable.push(result);
  else if (!ok) failed.push(result);

  const mark = ok ? 'ok  ' : isBlocked ? 'bot ' : isUnreachable ? 'warn' : 'FAIL';
  const detail = error ? ` (${error})` : ` (${status})`;
  if (!ok || verbose) console.log(`${mark} ${law.slug}${detail} ${law.source_url}`);
}

const resolved = results.length - failed.length - blocked.length - unreachable.length;
console.log(
  `\n${resolved} resolved, ${blocked.length} refused robots, ${unreachable.length} unreachable, ${failed.length} broken (of ${results.length})`
);

// Most of the codex not answering is the runner's network, not the publishers;
// passing that run would report a check that never happened.
if (unreachable.length > results.length / 2) {
  console.error(`\n${unreachable.length} of ${results.length} sources unreachable. The check itself did not run.`);
  process.exit(1);
}

if (failed.length > 0) {
  console.error(`\n${failed.length} source URL(s) are broken. Fix data/laws.yaml or replace the citation.`);
  process.exit(1);
}
