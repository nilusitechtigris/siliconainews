import { archivedEditions, archivedGraphLinks, archivedGraphNodes } from './archive';

export type PersonaAccent = 'mint' | 'amber' | 'blue' | 'coral';

export type Story = {
  id: string;
  code: string;
  author: string;
  role: string;
  accent: PersonaAccent;
  title: string;
  summary: string;
  keyPoint: string;
  tags: string[];
  time: string;
  published: string;
  graphNode: string;
  sourceCount: number;
  primarySource: string;
};

export type NewsEdition = {
  pulse: string;
  publishedDate: string;
  publishedLabel: string;
  stories: Story[];
};

export type NodeCategory = 'Hardware' | 'Models' | 'Policy' | 'Robotics';

export type GraphNode = {
  id: string;
  label: string;
  category: NodeCategory;
  storyIds: string[];
  weight: number;
};

export type GraphLink = { source: string; target: string; relation: string };

export const latestStories: Story[] = [
  {
    id: 'openai-senate-huggingface-probe', code: 'PW', author: 'The Policy Wonk', role: 'PUBLIC OVERSIGHT & AI INCIDENTS', accent: 'amber',
    title: 'US senators want records about OpenAI’s Hugging Face breach. Questions are not findings.',
    summary: 'Two senators asked OpenAI for details about the July breach, its safety tests, and outside access to evidence. OpenAI says it investigated the incident, but the new Senate requests seek records that officials can check.',
    keyPoint: 'A serious AI incident needs clear records, independent review, and public facts that separate a failure from later political claims.',
    tags: ['OpenAI', 'Congress', 'AI Safety'], time: '5 min', published: '12:17', graphNode: 'openai-senate-huggingface-probe', sourceCount: 3, primarySource: 'U.S. Senate',
  },
  {
    id: 'house-ai-safeguards-letter', code: 'CA', author: 'The Cynical Analyst', role: 'CONGRESS & POLICY DELIVERY', accent: 'coral',
    title: 'Four House members asked Congress to return for AI safeguards. A letter is not a law.',
    summary: 'The members asked Speaker Mike Johnson to keep the House in Washington until it advances bipartisan AI rules. They pointed to existing bills, but leaders had not promised a vote when the letter became public.',
    keyPoint: 'Urgent language matters less than a public bill, a fair debate, a vote, and rules that companies can follow and officials can enforce.',
    tags: ['Congress', 'AI Regulation', 'AI Safety'], time: '4 min', published: '12:17', graphNode: 'house-ai-safeguards-letter', sourceCount: 3, primarySource: 'Axios',
  },
  {
    id: 'ai-frontier-pacing-plan', code: 'CA', author: 'The Cynical Analyst', role: 'FRONTIER MODELS & SAFETY CLAIMS', accent: 'coral',
    title: 'Anthropic’s CEO wants slower AI progress. The plan now needs rules that rivals can verify.',
    summary: 'Dario Amodei says model abilities are improving faster than safety work. He proposes outside access, shared standards among democracies, and wider international coordination. His timelines are warnings, not proven forecasts.',
    keyPoint: 'A slowdown becomes credible only when companies define the safety limit, let outsiders test it, and accept the same rule for every major lab.',
    tags: ['Anthropic', 'AI Safety', 'Frontier Models'], time: '5 min', published: '12:17', graphNode: 'ai-frontier-pacing-plan', sourceCount: 3, primarySource: 'Dario Amodei',
  },
  {
    id: 'openai-habitat-storage', code: 'RE', author: 'Deep-Tech Researcher', role: 'STORAGE SYSTEMS & SCALE', accent: 'blue',
    title: 'OpenAI says one storage layer serves a billion weekly users. Its Rust rewrite is the smaller story.',
    summary: 'OpenAI says Habitat handles more than 70 million requests each second and over 500 petabytes of data. A new Rust service uses less computing power, but reliable limits and simple data paths made the scale possible.',
    keyPoint: 'Large AI products depend on careful storage design, clear limits, regional controls, and slow changes that users rarely see.',
    tags: ['OpenAI', 'Infrastructure', 'Data Storage'], time: '5 min', published: '12:17', graphNode: 'openai-habitat-storage', sourceCount: 2, primarySource: 'OpenAI',
  },
  {
    id: 'positron-ai-funding', code: 'CL', author: 'The Carbon Ledger', role: 'AI CHIPS, COST & ENERGY', accent: 'mint',
    title: 'Positron’s $875 million round backs memory-first AI chips. Production is still planned for 2027.',
    summary: 'Liberty Global joined a funding round that values Positron at $5 billion. The company says its design avoids scarce high-bandwidth memory, but its next chip has not entered production.',
    keyPoint: 'A new chip company should be judged by tested speed, energy use, customer cost, supply, and working production hardware.',
    tags: ['Positron', 'AI Chips', 'Inference'], time: '4 min', published: '12:17', graphNode: 'positron-ai-funding', sourceCount: 2, primarySource: 'Liberty Global',
  },
];

export const latestEdition: NewsEdition = {
  pulse: 'NOON_RUN_13',
  publishedDate: '2026-09-13',
  publishedLabel: 'September 13, 2026',
  stories: latestStories,
};

const latestGraphNodes: GraphNode[] = [
  { id: 'openai-senate-huggingface-probe', label: 'OpenAI Senate Probe', category: 'Policy', storyIds: ['openai-senate-huggingface-probe'], weight: 10 },
  { id: 'ai-incident-records', label: 'AI Incident Records', category: 'Policy', storyIds: ['openai-senate-huggingface-probe'], weight: 9 },
  { id: 'independent-model-access', label: 'Independent Model Access', category: 'Policy', storyIds: ['openai-senate-huggingface-probe', 'ai-frontier-pacing-plan'], weight: 9 },
  { id: 'house-ai-safeguards-letter', label: 'House AI Letter', category: 'Policy', storyIds: ['house-ai-safeguards-letter'], weight: 10 },
  { id: 'ai-kill-switch', label: 'AI Kill Switch', category: 'Policy', storyIds: ['house-ai-safeguards-letter'], weight: 9 },
  { id: 'national-ai-rules', label: 'National AI Rules', category: 'Policy', storyIds: ['house-ai-safeguards-letter', 'ai-frontier-pacing-plan'], weight: 9 },
  { id: 'ai-frontier-pacing-plan', label: 'Frontier Pacing Plan', category: 'Policy', storyIds: ['ai-frontier-pacing-plan'], weight: 10 },
  { id: 'frontier-model-tests', label: 'Frontier Model Tests', category: 'Models', storyIds: ['ai-frontier-pacing-plan'], weight: 9 },
  { id: 'international-ai-coordination', label: 'International Coordination', category: 'Policy', storyIds: ['ai-frontier-pacing-plan'], weight: 8 },
  { id: 'openai-habitat-storage', label: 'OpenAI Habitat', category: 'Hardware', storyIds: ['openai-habitat-storage'], weight: 10 },
  { id: 'distributed-storage', label: 'Distributed Storage', category: 'Hardware', storyIds: ['openai-habitat-storage'], weight: 9 },
  { id: 'data-residency', label: 'Data Residency', category: 'Policy', storyIds: ['openai-habitat-storage'], weight: 8 },
  { id: 'rust-services', label: 'Rust Services', category: 'Models', storyIds: ['openai-habitat-storage'], weight: 8 },
  { id: 'positron-ai-funding', label: 'Positron Funding', category: 'Hardware', storyIds: ['positron-ai-funding'], weight: 10 },
  { id: 'inference-chips', label: 'Inference Chips', category: 'Hardware', storyIds: ['positron-ai-funding'], weight: 9 },
  { id: 'memory-bandwidth', label: 'Memory Bandwidth', category: 'Hardware', storyIds: ['positron-ai-funding'], weight: 9 },
  { id: 'ai-chip-funding', label: 'AI Chip Funding', category: 'Hardware', storyIds: ['positron-ai-funding'], weight: 8 },
];

const latestGraphLinks: GraphLink[] = [
  { source: 'openai-senate-huggingface-probe', target: 'ai-incident-records', relation: 'requests company evidence' },
  { source: 'openai-senate-huggingface-probe', target: 'independent-model-access', relation: 'asks for outside review' },
  { source: 'house-ai-safeguards-letter', target: 'ai-kill-switch', relation: 'points to an existing bill' },
  { source: 'house-ai-safeguards-letter', target: 'national-ai-rules', relation: 'asks Congress to act' },
  { source: 'ai-frontier-pacing-plan', target: 'frontier-model-tests', relation: 'would link speed to safety results' },
  { source: 'ai-frontier-pacing-plan', target: 'independent-model-access', relation: 'promises deeper evaluator access' },
  { source: 'national-ai-rules', target: 'international-ai-coordination', relation: 'could support shared standards' },
  { source: 'openai-habitat-storage', target: 'distributed-storage', relation: 'routes product data' },
  { source: 'distributed-storage', target: 'data-residency', relation: 'keeps data in chosen regions' },
  { source: 'openai-habitat-storage', target: 'rust-services', relation: 'moved most traffic from Python' },
  { source: 'positron-ai-funding', target: 'inference-chips', relation: 'funds new model-serving hardware' },
  { source: 'inference-chips', target: 'memory-bandwidth', relation: 'depends on fast data movement' },
  { source: 'positron-ai-funding', target: 'ai-chip-funding', relation: 'joins an $875 million round' },
];

export const editions: NewsEdition[] = [latestEdition, ...archivedEditions];
export const stories: Story[] = editions.flatMap((edition) => edition.stories);

export const graphNodes: GraphNode[] = [...latestGraphNodes, ...archivedGraphNodes].reduce<GraphNode[]>((merged, node) => {
  const existing = merged.find((candidate) => candidate.id === node.id);
  if (!existing) return [...merged, { ...node, storyIds: [...node.storyIds] }];
  existing.storyIds = [...new Set([...existing.storyIds, ...node.storyIds])];
  existing.weight = Math.max(existing.weight, node.weight);
  return merged;
}, []);

export const graphLinks: GraphLink[] = [...new Map(
  [...latestGraphLinks, ...archivedGraphLinks].map((link) => [`${link.source}:${link.target}:${link.relation}`, link]),
).values()];

export const storyPublication: Record<string, { label: string; shortLabel: string; iso: string }> = Object.fromEntries(
  editions.flatMap((edition) => edition.stories.map((story) => [story.id, {
    label: edition.publishedLabel,
    shortLabel: new Intl.DateTimeFormat('en', { month: 'short', day: '2-digit', timeZone: 'UTC' })
      .format(new Date(`${edition.publishedDate}T00:00:00Z`))
      .toUpperCase(),
    iso: `${edition.publishedDate}T${story.published}:00+02:00`,
  }])),
);

export const categories: NodeCategory[] = ['Hardware', 'Models', 'Policy', 'Robotics'];

export const newsJson = {
  pulse: latestEdition.pulse,
  generated_at: '2026-09-13T12:17:09+02:00',
  status: 'complete',
  current_story_count: latestStories.length,
  archive_story_count: stories.length,
  archive_pulses: [...archivedEditions.map((edition) => edition.pulse), latestEdition.pulse],
  stories: latestStories.map(({ id, author, title, tags }) => ({ id, author, title, tags })),
};
