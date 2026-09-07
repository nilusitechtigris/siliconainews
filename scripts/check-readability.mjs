import { readFileSync } from 'node:fs';

const articles = readFileSync(new URL('../data/articles.ts', import.meta.url), 'utf8');
const news = readFileSync(new URL('../data/news.ts', import.meta.url), 'utf8');
const archive = readFileSync(new URL('../data/archive.ts', import.meta.url), 'utf8');

const samples = [];
const addMatches = (source, label, pattern) => {
  for (const match of source.matchAll(pattern)) {
    samples.push({ label, text: match[1].replaceAll('\\\'', '\'') });
  }
};

addMatches(articles, 'standfirst', /standfirst:\s*'((?:[^'\\]|\\.)*)'/g);
addMatches(articles, 'methodology', /methodology:\s*'((?:[^'\\]|\\.)*)'/g);

for (const group of articles.matchAll(/paragraphs:\s*\[([\s\S]*?)\],\s*citations:/g)) {
  addMatches(group[1], 'article paragraph', /^\s*'((?:[^'\\]|\\.)*)',?\s*$/gm);
}

for (const source of [news, archive]) {
  addMatches(source, 'story summary', /summary:\s*'((?:[^'\\]|\\.)*)'/g);
  addMatches(source, 'story main point', /keyPoint:\s*'((?:[^'\\]|\\.)*)'/g);
}

const wordCount = (value) => value.match(/[A-Za-zÀ-ÖØ-öø-ÿ0-9]+(?:[’'-][A-Za-zÀ-ÖØ-öø-ÿ0-9]+)*/g)?.length ?? 0;
const sentences = samples.flatMap(({ label, text }) =>
  text.split(/(?<=[.!?])\s+/).map((sentence) => ({ label, sentence, words: wordCount(sentence) })),
);

const totalWords = sentences.reduce((sum, item) => sum + item.words, 0);
const average = totalWords / sentences.length;
const longSentences = sentences.filter((item) => item.words > 36);

if (average > 20 || longSentences.length > 0) {
  console.error(`Readability check failed: ${average.toFixed(1)} words per sentence on average.`);
  for (const item of longSentences) {
    console.error(`- ${item.label}: ${item.words} words — ${item.sentence}`);
  }
  process.exit(1);
}

console.log(`Readability check passed: ${samples.length} text blocks, ${average.toFixed(1)} words per sentence, no sentence above 36 words.`);
