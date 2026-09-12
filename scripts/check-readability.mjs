import { readFileSync } from 'node:fs';

const articlesSource = readFileSync(new URL('../data/articles.ts', import.meta.url), 'utf8');
const newsSource = readFileSync(new URL('../data/news.ts', import.meta.url), 'utf8');
const archiveSource = readFileSync(new URL('../data/archive.ts', import.meta.url), 'utf8');

// This is an editorial guardrail, not a language exam. Short sentences and compact
// paragraphs make technical reporting much easier for B1-B2 English readers.
const limits = {
  averageSentenceWords: 18,
  maximumSentenceWords: 32,
  maximumParagraphWords: 110,
  minimumSections: 3,
};

const wordCount = (value) => value.match(/[A-Za-zÀ-ÖØ-öø-ÿ0-9]+(?:[’'-][A-Za-zÀ-ÖØ-öø-ÿ0-9]+)*/g)?.length ?? 0;
const sentencesIn = (text) => text.split(/(?<=[.!?])\s+/).filter((sentence) => wordCount(sentence) > 0);
const decodeLiteral = (value) => value.replaceAll('\\\'', '\'').replaceAll('\\n', ' ');

function literalValue(source, field) {
  return decodeLiteral(source.match(new RegExp(`${field}:\\s*'((?:[^'\\\\]|\\\\.)*)'`))?.[1] ?? '');
}

function articleBlocks(source) {
  const starts = [...source.matchAll(/^\s{2}'([^']+)': \{/gm)];
  return starts.map((match, index) => ({
    id: match[1],
    source: source.slice(match.index, starts[index + 1]?.index ?? source.lastIndexOf('\n};')),
  }));
}

function storyBlocks(source) {
  return [...source.matchAll(/\{\n\s+id:\s*'([^']+)'[\s\S]*?\n\s+\},/g)].map((match) => ({
    id: match[1],
    source: match[0],
  }));
}

function articleText(block) {
  const fields = [
    { label: 'standfirst', text: literalValue(block.source, 'standfirst') },
    { label: 'methodology', text: literalValue(block.source, 'methodology') },
  ];

  for (const section of block.source.matchAll(/heading:\s*'((?:[^'\\]|\\.)*)',[\s\S]*?paragraphs:\s*\[([\s\S]*?)\],\s*citations:/g)) {
    fields.push({ label: 'section heading', text: decodeLiteral(section[1]) });
    for (const paragraph of section[2].matchAll(/^\s*'((?:[^'\\]|\\.)*)',?\s*$/gm)) {
      fields.push({ label: 'article paragraph', text: decodeLiteral(paragraph[1]) });
    }
  }

  return fields;
}

const articles = articleBlocks(articlesSource);
const stories = [...storyBlocks(newsSource), ...storyBlocks(archiveSource)];
const storyCopy = new Map(stories.map((story) => [story.id, [
  { label: 'story title', text: literalValue(story.source, 'title') },
  { label: 'story summary', text: literalValue(story.source, 'summary') },
  { label: 'story main point', text: literalValue(story.source, 'keyPoint') },
]]));

const failures = [];
let totalWords = 0;
let totalSentences = 0;
let totalBlocks = 0;

for (const article of articles) {
  const fields = [...articleText(article), ...(storyCopy.get(article.id) ?? [])].filter(({ text }) => text);
  const sentences = fields.flatMap(({ label, text }) =>
    sentencesIn(text).map((sentence) => ({ label, sentence, words: wordCount(sentence) })),
  );
  const words = sentences.reduce((sum, sentence) => sum + sentence.words, 0);
  const average = words / Math.max(sentences.length, 1);
  const paragraphs = fields.filter(({ label }) => label === 'article paragraph');
  const sectionCount = fields.filter(({ label }) => label === 'section heading').length;

  totalWords += words;
  totalSentences += sentences.length;
  totalBlocks += fields.length;

  if (!storyCopy.has(article.id)) failures.push(`${article.id}: article has no matching story card.`);
  if (sectionCount < limits.minimumSections) failures.push(`${article.id}: has ${sectionCount} sections; needs at least ${limits.minimumSections}.`);
  if (average > limits.averageSentenceWords) {
    failures.push(`${article.id}: averages ${average.toFixed(1)} words per sentence; limit is ${limits.averageSentenceWords}.`);
  }

  for (const item of sentences.filter(({ words: count }) => count > limits.maximumSentenceWords)) {
    failures.push(`${article.id} / ${item.label}: ${item.words} words — ${item.sentence}`);
  }

  for (const paragraph of paragraphs) {
    const wordsInParagraph = wordCount(paragraph.text);
    if (wordsInParagraph > limits.maximumParagraphWords) {
      failures.push(`${article.id} / paragraph: ${wordsInParagraph} words; limit is ${limits.maximumParagraphWords}.`);
    }
  }
}

const articleIds = new Set(articles.map(({ id }) => id));
for (const story of stories) {
  if (!articleIds.has(story.id)) failures.push(`${story.id}: story card has no long-form article.`);
}

if (failures.length > 0) {
  console.error(`B1-B2 readability check failed with ${failures.length} issue${failures.length === 1 ? '' : 's'}:`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `B1-B2 readability check passed: ${articles.length} articles, ${totalBlocks} text blocks, `
  + `${(totalWords / totalSentences).toFixed(1)} words per sentence. `
  + `Every article stays below ${limits.averageSentenceWords} words per sentence on average; `
  + `no sentence exceeds ${limits.maximumSentenceWords} words and no paragraph exceeds ${limits.maximumParagraphWords} words.`,
);
