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
    id: 'aiforce-any-interface', code: 'UX', author: 'The Interface Cartographer', role: 'ENTERPRISE AI & INTERFACE DESIGN', accent: 'blue',
    title: 'Salesforce wants its data and actions inside every AI screen. Permissions are the real interface.',
    summary: 'AIforce connects Salesforce records and workflows to Claude, Slack, Amazon tools, and Gemini Enterprise. The idea is useful, but each action still depends on access rules, review, and clear availability.',
    keyPoint: 'Moving business actions into an AI chat can save steps only when people can see the source, understand the proposed change, and stop the wrong action.',
    tags: ['Salesforce', 'AIforce', 'Enterprise AI'], time: '5 min', published: '00:03', graphNode: 'aiforce-any-interface', sourceCount: 3, primarySource: 'Salesforce',
  },
  {
    id: 'salesforce-koa-crm-model', code: 'RE', author: 'Deep-Tech Researcher', role: 'SPECIALISED MODELS & ENTERPRISE TESTS', accent: 'mint',
    title: 'Salesforce built a reasoning model for CRM work. Its strongest results come from Salesforce tests.',
    summary: 'Koa is based on Nvidia Nemotron and trained with synthetic business tasks. Salesforce says it makes fewer CRM action errors, but the benchmark and the customer pilots still need outside study.',
    keyPoint: 'A specialised model should be judged on real tasks, safe tool use, error recovery, and independent tests—not only on a company benchmark.',
    tags: ['Salesforce', 'Nvidia', 'Reasoning Models'], time: '5 min', published: '00:03', graphNode: 'salesforce-koa-crm-model', sourceCount: 3, primarySource: 'Salesforce',
  },
  {
    id: 'agility-digit-5', code: 'RO', author: 'The Robotics Realist', role: 'HUMANOID ROBOTS & WORKPLACE SAFETY', accent: 'amber',
    title: 'Digit 5 is stronger and faster to charge. Working safely beside people is the bigger test.',
    summary: 'Agility says its new humanoid can lift 22.7 kilograms, work for 90 minutes, and charge in nine minutes. Early access starts in 2027, so its safety and productivity claims are not yet broad field results.',
    keyPoint: 'A factory robot earns trust through independent safety checks, predictable stops, incident records, and useful work across a full shift.',
    tags: ['Agility Robotics', 'Humanoid Robots', 'Safety'], time: '5 min', published: '00:03', graphNode: 'agility-digit-5', sourceCount: 3, primarySource: 'Agility Robotics',
  },
  {
    id: 'gensyn-open-1b-audit', code: 'OS', author: 'The Open Source Scout', role: 'OPEN MODELS & REPRODUCIBLE RESEARCH', accent: 'coral',
    title: 'Gensyn made a small model whose training steps can be replayed. The speed cost is large.',
    summary: 'Open-1b publishes checkpoints, data, code, and hashes for every training step. Gensyn says audits work across several kinds of hardware, while its reproducible runtime is about five times slower than an optimised system.',
    keyPoint: 'Open weights show the result. Reproducible training can also show how the result was made, but outside auditors still need to test the full evidence pack.',
    tags: ['Gensyn', 'Open Models', 'AI Audits'], time: '5 min', published: '00:03', graphNode: 'gensyn-open-1b-audit', sourceCount: 3, primarySource: 'Gensyn',
  },
  {
    id: 'claude-small-business-workflows', code: 'CO', author: 'The Cyber-Optimist', role: 'SMALL BUSINESS & PRACTICAL AUTOMATION', accent: 'mint',
    title: 'Claude added 43 small-business workflows. Owners still need a safe way to start small.',
    summary: 'Anthropic added 27 integrations and workflows for leads, invoices, marketing, hiring, and operations. Some can run on a schedule, so owners must set narrow rights and review important messages or payments.',
    keyPoint: 'Small companies can gain time from automation when the first task is limited, the data source is clear, and a person approves high-impact actions.',
    tags: ['Anthropic', 'Small Business', 'AI Workflows'], time: '5 min', published: '00:03', graphNode: 'claude-small-business-workflows', sourceCount: 3, primarySource: 'Anthropic',
  },
];

export const latestEdition: NewsEdition = {
  pulse: 'NIGHT_RUN_16',
  publishedDate: '2026-09-16',
  publishedLabel: 'September 16, 2026',
  stories: latestStories,
};

const latestGraphNodes: GraphNode[] = [
  { id: 'aiforce-any-interface', label: 'AIforce', category: 'Models', storyIds: ['aiforce-any-interface'], weight: 10 },
  { id: 'headless-enterprise-ai', label: 'Headless Enterprise AI', category: 'Models', storyIds: ['aiforce-any-interface'], weight: 9 },
  { id: 'permissioned-context', label: 'Permissioned Context', category: 'Policy', storyIds: ['aiforce-any-interface', 'claude-small-business-workflows'], weight: 10 },
  { id: 'cross-cloud-agents', label: 'Cross-Cloud Agents', category: 'Models', storyIds: ['aiforce-any-interface'], weight: 9 },
  { id: 'salesforce-koa-crm-model', label: 'Koa CRM Model', category: 'Models', storyIds: ['salesforce-koa-crm-model'], weight: 10 },
  { id: 'nvidia-nemotron', label: 'Nvidia Nemotron', category: 'Models', storyIds: ['salesforce-koa-crm-model'], weight: 9 },
  { id: 'synthetic-business-data', label: 'Synthetic Business Data', category: 'Models', storyIds: ['salesforce-koa-crm-model'], weight: 8 },
  { id: 'enterprise-ai-benchmarks', label: 'Enterprise AI Benchmarks', category: 'Policy', storyIds: ['salesforce-koa-crm-model'], weight: 9 },
  { id: 'agility-digit-5', label: 'Digit 5', category: 'Robotics', storyIds: ['agility-digit-5'], weight: 10 },
  { id: 'robot-workplace-safety', label: 'Robot Workplace Safety', category: 'Policy', storyIds: ['agility-digit-5'], weight: 10 },
  { id: 'nvidia-halos', label: 'Nvidia Halos', category: 'Hardware', storyIds: ['agility-digit-5'], weight: 9 },
  { id: 'humanoid-payload', label: 'Humanoid Payload', category: 'Hardware', storyIds: ['agility-digit-5'], weight: 8 },
  { id: 'gensyn-open-1b-audit', label: 'Open-1b Audit', category: 'Models', storyIds: ['gensyn-open-1b-audit'], weight: 10 },
  { id: 'reproducible-training', label: 'Reproducible Training', category: 'Models', storyIds: ['gensyn-open-1b-audit'], weight: 10 },
  { id: 'training-step-hashes', label: 'Training Step Hashes', category: 'Policy', storyIds: ['gensyn-open-1b-audit'], weight: 9 },
  { id: 'open-model-evidence', label: 'Open Model Evidence', category: 'Policy', storyIds: ['gensyn-open-1b-audit'], weight: 9 },
  { id: 'claude-small-business-workflows', label: 'Claude SMB Workflows', category: 'Models', storyIds: ['claude-small-business-workflows'], weight: 10 },
  { id: 'scheduled-agent-work', label: 'Scheduled Agent Work', category: 'Models', storyIds: ['claude-small-business-workflows'], weight: 9 },
  { id: 'small-business-tools', label: 'Small Business Tools', category: 'Models', storyIds: ['claude-small-business-workflows'], weight: 8 },
  { id: 'human-approval', label: 'Human Approval', category: 'Policy', storyIds: ['claude-small-business-workflows', 'aiforce-any-interface'], weight: 10 },
];

const latestGraphLinks: GraphLink[] = [
  { source: 'aiforce-any-interface', target: 'headless-enterprise-ai', relation: 'opens Salesforce outside its normal screens' },
  { source: 'headless-enterprise-ai', target: 'permissioned-context', relation: 'must keep existing access rules' },
  { source: 'aiforce-any-interface', target: 'cross-cloud-agents', relation: 'connects Claude, AWS, and Google tools' },
  { source: 'cross-cloud-agents', target: 'human-approval', relation: 'needs a visible action gate' },
  { source: 'salesforce-koa-crm-model', target: 'nvidia-nemotron', relation: 'uses an open model foundation' },
  { source: 'nvidia-nemotron', target: 'synthetic-business-data', relation: 'was post-trained on simulated CRM tasks' },
  { source: 'salesforce-koa-crm-model', target: 'enterprise-ai-benchmarks', relation: 'is measured on company CRM tests' },
  { source: 'agility-digit-5', target: 'robot-workplace-safety', relation: 'targets work near people' },
  { source: 'agility-digit-5', target: 'nvidia-halos', relation: 'uses a safety hardware and software stack' },
  { source: 'agility-digit-5', target: 'humanoid-payload', relation: 'raises repeat lifting to 22.7 kilograms' },
  { source: 'gensyn-open-1b-audit', target: 'reproducible-training', relation: 'replays training across hardware' },
  { source: 'reproducible-training', target: 'training-step-hashes', relation: 'checks each published state' },
  { source: 'training-step-hashes', target: 'open-model-evidence', relation: 'creates a public audit trail' },
  { source: 'claude-small-business-workflows', target: 'scheduled-agent-work', relation: 'can run some tasks on a timer' },
  { source: 'scheduled-agent-work', target: 'small-business-tools', relation: 'connects daily business systems' },
  { source: 'claude-small-business-workflows', target: 'permissioned-context', relation: 'uses approved company data' },
  { source: 'permissioned-context', target: 'human-approval', relation: 'keeps important actions reviewable' },
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
  generated_at: '2026-09-16T00:03:00+02:00',
  status: 'complete',
  current_story_count: latestStories.length,
  archive_story_count: stories.length,
  archive_pulses: [...archivedEditions.map((edition) => edition.pulse), latestEdition.pulse],
  stories: latestStories.map(({ id, author, title, tags }) => ({ id, author, title, tags })),
};
