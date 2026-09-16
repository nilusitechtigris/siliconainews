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
    id: 'ai-energy-management-alliance', code: 'CL', author: 'The Carbon Ledger', role: 'AI INFRASTRUCTURE & POWER SYSTEMS', accent: 'mint',
    title: 'AI data centres want faster grid access. A new alliance says flexible power use is the deal.',
    summary: 'Google, Nvidia, Emerald AI, and energy companies launched a coalition for data centres that can reduce or move electricity use when the grid is stressed. The promises now need measured results.',
    keyPoint: 'Flexible computing can help the grid only when power changes are fast, verified, and written into clear agreements with utilities.',
    tags: ['Data Centres', 'Energy', 'Nvidia'], time: '5 min', published: '21:25', graphNode: 'ai-energy-management-alliance', sourceCount: 3, primarySource: 'Nvidia',
  },
  {
    id: 'lawzero-sovereign-safe-ai-funding', code: 'PW', author: 'The Policy Wonk', role: 'SOVEREIGN AI & PUBLIC FUNDING', accent: 'amber',
    title: 'Canada and Germany put up to C$300 million behind a safer AI design. It is still a research bet.',
    summary: 'The two governments plan to fund Yoshua Bengio’s nonprofit LawZero. Its Scientist AI aims to give evidence without pursuing its own goals, but the approach still needs large-scale tests.',
    keyPoint: 'Public AI funding should publish milestones, safety tests, spending records, and failures so citizens can judge what the investment delivers.',
    tags: ['LawZero', 'AI Safety', 'Sovereign AI'], time: '5 min', published: '21:25', graphNode: 'lawzero-sovereign-safe-ai-funding', sourceCount: 3, primarySource: 'Government of Canada',
  },
  {
    id: 'cohesity-agent-resilience', code: 'CO', author: 'The Cyber-Optimist', role: 'AI AGENTS & RECOVERY', accent: 'coral',
    title: 'Cohesity wants backups for AI agents, not just their data. Recovery is the useful idea.',
    summary: 'Agent Resilience can map an agent’s memory, settings, and connected systems, then restore a trusted state. It starts with selected Amazon Bedrock customers, so broad proof is still ahead.',
    keyPoint: 'Monitoring can show that an agent failed. A useful recovery plan must also restore the agent and repair the data it changed.',
    tags: ['Cohesity', 'AI Agents', 'Cybersecurity'], time: '5 min', published: '21:25', graphNode: 'cohesity-agent-resilience', sourceCount: 3, primarySource: 'Cohesity',
  },
  {
    id: 'salesforce-missionforce-openai', code: 'CA', author: 'The Cynical Analyst', role: 'GOVERNMENT AI & ACCOUNTABILITY', accent: 'coral',
    title: 'Salesforce is putting OpenAI models into government workflows. “Secure” still needs a clear meaning.',
    summary: 'Missionforce plans to use OpenAI models through Amazon Bedrock and connect some work to ChatGPT. New policy and operations tools promise speed, but public agencies need strict review and audit rules.',
    keyPoint: 'Government AI must show which model acted, which records it used, who approved the result, and how a wrong decision can be challenged.',
    tags: ['Salesforce', 'OpenAI', 'Government AI'], time: '5 min', published: '21:25', graphNode: 'salesforce-missionforce-openai', sourceCount: 3, primarySource: 'Salesforce',
  },
  {
    id: 'eit-ai-robotics-community', code: 'RO', author: 'The Robotics Realist', role: 'EUROPEAN ROBOTICS & COMMERCIALISATION', accent: 'blue',
    title: 'Europe has a new AI and robotics pipeline. The test is whether research reaches real factories.',
    summary: 'The EIT programme plans to support founders, fund scale-ups, and connect robotics teams with industry through 2028. Its targets are useful, but they are goals rather than delivered products.',
    keyPoint: 'Europe needs more than strong robotics research: teams need test sites, customers, patient funding, and clear safety evidence.',
    tags: ['European Union', 'Robotics', 'Startups'], time: '4 min', published: '21:25', graphNode: 'eit-ai-robotics-community', sourceCount: 3, primarySource: 'European Institute of Innovation and Technology',
  },
];

export const latestEdition: NewsEdition = {
  pulse: 'EVENING_RUN_16',
  publishedDate: '2026-09-16',
  publishedLabel: 'September 16, 2026',
  stories: latestStories,
};

const latestGraphNodes: GraphNode[] = [
  { id: 'ai-energy-management-alliance', label: 'AI Energy Alliance', category: 'Hardware', storyIds: ['ai-energy-management-alliance'], weight: 10 },
  { id: 'flexible-data-centres', label: 'Flexible Data Centres', category: 'Hardware', storyIds: ['ai-energy-management-alliance'], weight: 9 },
  { id: 'power-grid', label: 'Power Grid', category: 'Policy', storyIds: ['ai-energy-management-alliance'], weight: 10 },
  { id: 'verified-demand-response', label: 'Verified Demand Response', category: 'Policy', storyIds: ['ai-energy-management-alliance'], weight: 9 },
  { id: 'lawzero-sovereign-safe-ai-funding', label: 'LawZero Funding', category: 'Policy', storyIds: ['lawzero-sovereign-safe-ai-funding'], weight: 10 },
  { id: 'scientist-ai', label: 'Scientist AI', category: 'Models', storyIds: ['lawzero-sovereign-safe-ai-funding'], weight: 10 },
  { id: 'sovereign-ai', label: 'Sovereign AI', category: 'Policy', storyIds: ['lawzero-sovereign-safe-ai-funding'], weight: 9 },
  { id: 'public-ai-funding', label: 'Public AI Funding', category: 'Policy', storyIds: ['lawzero-sovereign-safe-ai-funding'], weight: 8 },
  { id: 'cohesity-agent-resilience', label: 'Agent Resilience', category: 'Models', storyIds: ['cohesity-agent-resilience'], weight: 10 },
  { id: 'agent-state-recovery', label: 'Agent State Recovery', category: 'Policy', storyIds: ['cohesity-agent-resilience'], weight: 10 },
  { id: 'amazon-bedrock', label: 'Amazon Bedrock', category: 'Models', storyIds: ['cohesity-agent-resilience', 'salesforce-missionforce-openai'], weight: 9 },
  { id: 'agent-workflows', label: 'Agent Workflows', category: 'Models', storyIds: ['cohesity-agent-resilience', 'salesforce-missionforce-openai'], weight: 10 },
  { id: 'salesforce-missionforce-openai', label: 'Missionforce OpenAI', category: 'Models', storyIds: ['salesforce-missionforce-openai'], weight: 10 },
  { id: 'government-ai', label: 'Government AI', category: 'Policy', storyIds: ['salesforce-missionforce-openai'], weight: 10 },
  { id: 'permissioned-context', label: 'Permissioned Context', category: 'Policy', storyIds: ['salesforce-missionforce-openai'], weight: 9 },
  { id: 'human-supervision', label: 'Human Supervision', category: 'Policy', storyIds: ['salesforce-missionforce-openai', 'cohesity-agent-resilience'], weight: 9 },
  { id: 'eit-ai-robotics-community', label: 'EIT AI & Robotics', category: 'Robotics', storyIds: ['eit-ai-robotics-community'], weight: 10 },
  { id: 'robotics-commercialisation', label: 'Robotics Commercialisation', category: 'Robotics', storyIds: ['eit-ai-robotics-community'], weight: 9 },
  { id: 'industrial-validation', label: 'Industrial Validation', category: 'Robotics', storyIds: ['eit-ai-robotics-community'], weight: 9 },
  { id: 'eu-ai-compliance', label: 'EU AI Compliance', category: 'Policy', storyIds: ['eit-ai-robotics-community'], weight: 8 },
];

const latestGraphLinks: GraphLink[] = [
  { source: 'ai-energy-management-alliance', target: 'flexible-data-centres', relation: 'sets a shared technical direction' },
  { source: 'flexible-data-centres', target: 'power-grid', relation: 'changes demand during stress' },
  { source: 'power-grid', target: 'verified-demand-response', relation: 'needs measured commitments' },
  { source: 'lawzero-sovereign-safe-ai-funding', target: 'scientist-ai', relation: 'funds a safe-by-design approach' },
  { source: 'lawzero-sovereign-safe-ai-funding', target: 'sovereign-ai', relation: 'builds Canadian and German capacity' },
  { source: 'public-ai-funding', target: 'scientist-ai', relation: 'supports research and compute' },
  { source: 'cohesity-agent-resilience', target: 'agent-state-recovery', relation: 'restores memory and configuration' },
  { source: 'cohesity-agent-resilience', target: 'amazon-bedrock', relation: 'starts with Bedrock agents' },
  { source: 'agent-state-recovery', target: 'human-supervision', relation: 'supports reviewed recovery' },
  { source: 'salesforce-missionforce-openai', target: 'government-ai', relation: 'brings models into public workflows' },
  { source: 'salesforce-missionforce-openai', target: 'amazon-bedrock', relation: 'plans model access through the service' },
  { source: 'government-ai', target: 'permissioned-context', relation: 'must limit access to official records' },
  { source: 'permissioned-context', target: 'human-supervision', relation: 'keeps public decisions reviewable' },
  { source: 'eit-ai-robotics-community', target: 'robotics-commercialisation', relation: 'supports founders and scale-ups' },
  { source: 'robotics-commercialisation', target: 'industrial-validation', relation: 'moves research into real sites' },
  { source: 'industrial-validation', target: 'eu-ai-compliance', relation: 'must meet safety and legal rules' },
  { source: 'robotics-commercialisation', target: 'sovereign-ai', relation: 'supports European capacity' },
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
  generated_at: '2026-09-16T21:25:00+02:00',
  status: 'complete',
  current_story_count: latestStories.length,
  archive_story_count: stories.length,
  archive_pulses: [...archivedEditions.map((edition) => edition.pulse), latestEdition.pulse],
  stories: latestStories.map(({ id, author, title, tags }) => ({ id, author, title, tags })),
};
