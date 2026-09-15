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
    id: 'apple-siri-ai-beta', code: 'UX', author: 'The Interface Cartographer', role: 'PERSONAL AI & INTERACTION DESIGN', accent: 'blue',
    title: 'Siri AI is finally on real devices. The beta starts with useful limits.',
    summary: 'Apple began the English beta on September 14. Siri can use messages, email, photos, screen content, and app actions, but access depends on device, region, language, and daily cloud limits.',
    keyPoint: 'A personal assistant earns trust when people can see what it used, approve important actions, and understand where the service is unavailable.',
    tags: ['Apple', 'Siri AI', 'Personal AI'], time: '5 min', published: '12:24', graphNode: 'apple-siri-ai-beta', sourceCount: 3, primarySource: 'Apple',
  },
  {
    id: 'nvidia-cuda-q-logical', code: 'RE', author: 'Deep-Tech Researcher', role: 'QUANTUM SYSTEMS & OPEN TOOLS', accent: 'mint',
    title: 'Nvidia added a control layer for fault-tolerant quantum computers. The hardware is still the hard part.',
    summary: 'CUDA-Q Logical links quantum programs, error-correction methods, and hardware estimates. Fermilab reports faster design work, while Sandia’s QUOPS benchmark offers a common test for future systems.',
    keyPoint: 'Open tools and shared tests can make quantum roadmaps easier to compare, but they do not turn today’s machines into useful fault-tolerant computers.',
    tags: ['Nvidia', 'Quantum Computing', 'Open Source'], time: '5 min', published: '12:24', graphNode: 'nvidia-cuda-q-logical', sourceCount: 3, primarySource: 'Nvidia',
  },
  {
    id: 'google-ai-economy-atlas', code: 'CL', author: 'The Carbon Ledger', role: 'AI ADOPTION & ECONOMIC EVIDENCE', accent: 'mint',
    title: 'Google’s AI Economy Atlas shows where AI work differs. It does not measure every job.',
    summary: 'The open Atlas compares work-related AI use across countries and occupations. A linked science study reports time savings, but also finds that checking results and physical work still slow research.',
    keyPoint: 'AI adoption data is useful when readers can explore the method, separate use from impact, and see where the sample does not represent everyone.',
    tags: ['Google', 'AI Economy', 'Research'], time: '5 min', published: '12:24', graphNode: 'google-ai-economy-atlas', sourceCount: 3, primarySource: 'Google',
  },
  {
    id: 'microsoft-election-ai-literacy', code: 'PW', author: 'The Policy Wonk', role: 'ELECTIONS & INFORMATION LITERACY', accent: 'amber',
    title: 'Microsoft’s election guide tells voters to check AI answers at the source.',
    summary: 'The company updated its voter-information campaign for the 2026 US elections. It asks people to open citations, use official local election pages, and treat AI output as a starting point.',
    keyPoint: 'A confident AI answer is not election evidence. Voters need the original source, a current date, and confirmation from state or local officials.',
    tags: ['Microsoft', 'Elections', 'AI Literacy'], time: '4 min', published: '12:24', graphNode: 'microsoft-election-ai-literacy', sourceCount: 3, primarySource: 'Microsoft',
  },
  {
    id: 'claude-financial-advisors', code: 'CA', author: 'The Cynical Analyst', role: 'PROFESSIONAL AI & ACCOUNTABILITY', accent: 'coral',
    title: 'Claude now connects to wealth-management systems. The adviser still owns the decision.',
    summary: 'Anthropic released connectors and workflow skills for meeting preparation, portfolio review, records, and compliance checks. Client advice and other regulated work still require human approval.',
    keyPoint: 'Connecting an AI to trusted financial data can save time, but permissions, records, review, and professional responsibility cannot be delegated.',
    tags: ['Anthropic', 'Financial Advice', 'Enterprise AI'], time: '5 min', published: '12:24', graphNode: 'claude-financial-advisors', sourceCount: 3, primarySource: 'Anthropic',
  },
];

export const latestEdition: NewsEdition = {
  pulse: 'CATCHUP_RUN_15',
  publishedDate: '2026-09-15',
  publishedLabel: 'September 15, 2026',
  stories: latestStories,
};

const latestGraphNodes: GraphNode[] = [
  { id: 'apple-siri-ai-beta', label: 'Siri AI Beta', category: 'Models', storyIds: ['apple-siri-ai-beta'], weight: 10 },
  { id: 'personal-context', label: 'Personal Context', category: 'Models', storyIds: ['apple-siri-ai-beta', 'claude-financial-advisors'], weight: 9 },
  { id: 'on-device-ai', label: 'On-Device AI', category: 'Hardware', storyIds: ['apple-siri-ai-beta'], weight: 9 },
  { id: 'action-approval', label: 'Action Approval', category: 'Policy', storyIds: ['apple-siri-ai-beta', 'claude-financial-advisors'], weight: 9 },
  { id: 'nvidia-cuda-q-logical', label: 'CUDA-Q Logical', category: 'Models', storyIds: ['nvidia-cuda-q-logical'], weight: 10 },
  { id: 'fault-tolerant-quantum', label: 'Fault-Tolerant Quantum', category: 'Hardware', storyIds: ['nvidia-cuda-q-logical'], weight: 10 },
  { id: 'quantum-error-correction', label: 'Quantum Error Correction', category: 'Models', storyIds: ['nvidia-cuda-q-logical'], weight: 9 },
  { id: 'quantum-benchmarks', label: 'Quantum Benchmarks', category: 'Policy', storyIds: ['nvidia-cuda-q-logical'], weight: 8 },
  { id: 'google-ai-economy-atlas', label: 'AI Economy Atlas', category: 'Models', storyIds: ['google-ai-economy-atlas'], weight: 10 },
  { id: 'ai-adoption-data', label: 'AI Adoption Data', category: 'Models', storyIds: ['google-ai-economy-atlas'], weight: 9 },
  { id: 'scientific-work', label: 'Scientific Work', category: 'Models', storyIds: ['google-ai-economy-atlas'], weight: 8 },
  { id: 'evidence-standards', label: 'Evidence Standards', category: 'Policy', storyIds: ['google-ai-economy-atlas', 'microsoft-election-ai-literacy'], weight: 9 },
  { id: 'microsoft-election-ai-literacy', label: 'Election AI Literacy', category: 'Policy', storyIds: ['microsoft-election-ai-literacy'], weight: 10 },
  { id: 'source-checking', label: 'Source Checking', category: 'Policy', storyIds: ['microsoft-election-ai-literacy', 'google-ai-economy-atlas'], weight: 9 },
  { id: 'local-election-information', label: 'Local Election Information', category: 'Policy', storyIds: ['microsoft-election-ai-literacy'], weight: 9 },
  { id: 'claude-financial-advisors', label: 'Claude for Advisers', category: 'Models', storyIds: ['claude-financial-advisors'], weight: 10 },
  { id: 'financial-services-ai', label: 'Financial Services AI', category: 'Models', storyIds: ['claude-financial-advisors'], weight: 9 },
  { id: 'permissioned-context', label: 'Permissioned Context', category: 'Policy', storyIds: ['claude-financial-advisors'], weight: 9 },
  { id: 'human-supervision', label: 'Human Supervision', category: 'Policy', storyIds: ['claude-financial-advisors', 'microsoft-election-ai-literacy'], weight: 9 },
];

const latestGraphLinks: GraphLink[] = [
  { source: 'apple-siri-ai-beta', target: 'personal-context', relation: 'uses approved device information' },
  { source: 'apple-siri-ai-beta', target: 'on-device-ai', relation: 'runs part of the system locally' },
  { source: 'personal-context', target: 'action-approval', relation: 'needs visible user control' },
  { source: 'nvidia-cuda-q-logical', target: 'fault-tolerant-quantum', relation: 'targets future reliable systems' },
  { source: 'fault-tolerant-quantum', target: 'quantum-error-correction', relation: 'depends on protected logical qubits' },
  { source: 'nvidia-cuda-q-logical', target: 'quantum-benchmarks', relation: 'includes a common readiness test' },
  { source: 'google-ai-economy-atlas', target: 'ai-adoption-data', relation: 'maps work-related AI use' },
  { source: 'ai-adoption-data', target: 'scientific-work', relation: 'shows different research tasks' },
  { source: 'ai-adoption-data', target: 'evidence-standards', relation: 'needs careful limits and method' },
  { source: 'microsoft-election-ai-literacy', target: 'source-checking', relation: 'asks voters to open citations' },
  { source: 'source-checking', target: 'local-election-information', relation: 'ends at official local pages' },
  { source: 'local-election-information', target: 'human-supervision', relation: 'keeps public officials accountable' },
  { source: 'claude-financial-advisors', target: 'financial-services-ai', relation: 'adds role-specific workflows' },
  { source: 'claude-financial-advisors', target: 'permissioned-context', relation: 'connects approved business systems' },
  { source: 'permissioned-context', target: 'human-supervision', relation: 'keeps regulated work under review' },
  { source: 'personal-context', target: 'permissioned-context', relation: 'shares a need for access limits' },
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
  generated_at: '2026-09-15T12:24:00+02:00',
  status: 'complete',
  current_story_count: latestStories.length,
  archive_story_count: stories.length,
  archive_pulses: [...archivedEditions.map((edition) => edition.pulse), latestEdition.pulse],
  stories: latestStories.map(({ id, author, title, tags }) => ({ id, author, title, tags })),
};
