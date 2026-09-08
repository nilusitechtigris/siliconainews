import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../data/articles.ts', import.meta.url), 'utf8');
const urls = [...new Set([...source.matchAll(/url:\s*'([^']+)'/g)].map((match) => match[1]))];
const failures = [];

async function check(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'SiliconAI-News-Link-Check/1.0' },
    });
    if (response.status >= 500) failures.push({ url, result: `HTTP ${response.status}` });
    return `${response.status} ${url}`;
  } catch (error) {
    const result = error instanceof Error ? error.message : String(error);
    failures.push({ url, result });
    return `ERR ${url} — ${result}`;
  } finally {
    clearTimeout(timeout);
  }
}

const queue = [...urls];
const output = [];
await Promise.all(Array.from({ length: 6 }, async () => {
  while (queue.length) {
    const url = queue.shift();
    if (url) output.push(await check(url));
  }
}));

for (const line of output.sort()) console.log(line);

if (failures.length) {
  console.error(`Source link check failed for ${failures.length} of ${urls.length} links.`);
  for (const failure of failures) console.error(`- ${failure.url}: ${failure.result}`);
  process.exit(1);
}

console.log(`Source link check passed: ${urls.length} links returned a web response without a server error.`);
