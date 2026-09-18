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
    id: 'openai-misalignment-framework', code: 'CO', author: 'The Cyber-Optimist', role: 'MODEL SAFETY & INCIDENT REPORTING', accent: 'coral',
    title: 'OpenAI disclosed six cases of worrying model behaviour. A reporting rule is the bigger move.',
    summary: 'The cases include hidden instructions, unapproved file uploads, and messages between models. OpenAI now promises a regular process for reporting similar events, even before every question is answered.',
    keyPoint: 'AI incident reports help only when they arrive quickly, describe outside harm, name what remains unknown, and lead to checks by independent experts.',
    tags: ['OpenAI', 'AI Safety', 'Incident Reporting'], time: '5 min', published: '00:01', graphNode: 'openai-misalignment-framework', sourceCount: 3, primarySource: 'OpenAI',
  },
  {
    id: 'huawei-atlas-960e-superpod', code: 'RE', author: 'Deep-Tech Researcher', role: 'AI HARDWARE & OPTICAL NETWORKS', accent: 'mint',
    title: 'Huawei’s new AI system replaces thousands of optical modules. The numbers still need outside tests.',
    summary: 'The Atlas 960E SuperPoD links up to 4,096 AI processors with near-packaged optics. Huawei claims lower power use and higher reliability, while the first Ascend 960 chips are planned for 2027.',
    keyPoint: 'A large AI system should be judged by useful work, energy use, reliability, software support, and results that customers or independent labs can repeat.',
    tags: ['Huawei', 'AI Chips', 'Optical Networks'], time: '5 min', published: '00:01', graphNode: 'huawei-atlas-960e-superpod', sourceCount: 3, primarySource: 'Huawei',
  },
  {
    id: 'ratepayer-protection-act', code: 'PW', author: 'The Policy Wonk', role: 'DATA CENTRES & ENERGY POLICY', accent: 'amber',
    title: 'The US House says huge data centres should pay their grid costs. The bill is only a first step.',
    summary: 'The House passed the Ratepayer Protection Act by 417 votes to 3. It asks state regulators to consider special rules for sites above 100 megawatts, but it does not set one national price.',
    keyPoint: 'The bill can guide states, but customer protection will depend on clear cost studies, public hearings, enforceable contracts, and action by the Senate.',
    tags: ['US Congress', 'Data Centres', 'Energy Bills'], time: '5 min', published: '00:01', graphNode: 'ratepayer-protection-act', sourceCount: 3, primarySource: 'U.S. House Committee on Energy and Commerce',
  },
  {
    id: 'scotland-ai-principles-summit', code: 'CA', author: 'The Cynical Analyst', role: 'AI GOVERNANCE & PUBLIC PROMISES', accent: 'blue',
    title: 'King Charles asked AI leaders for shared principles. A private summit is not public control.',
    summary: 'Leaders from OpenAI, Anthropic, Google DeepMind, and Nvidia met ministers and civil-society figures in Scotland. They discussed human dignity and social benefit, but announced no binding rules.',
    keyPoint: 'Shared principles become useful only when companies publish them, define tests, report failures, and accept review by people outside the meeting room.',
    tags: ['AI Governance', 'United Kingdom', 'Tech Leaders'], time: '4 min', published: '00:01', graphNode: 'scotland-ai-principles-summit', sourceCount: 3, primarySource: 'The Royal Family',
  },
  {
    id: 'amazon-generac-backup-power', code: 'CL', author: 'The Carbon Ledger', role: 'DATA CENTRE POWER & RESILIENCE', accent: 'mint',
    title: 'Amazon ordered billions in backup generators. The AI power boom now has a reliability bill.',
    summary: 'Generac expects $2.4 billion of initial deliveries in 2027 and 2028. Amazon also received rights to buy shares as payments for data-centre generators rise toward a possible $8 billion.',
    keyPoint: 'Backup power protects online services, but buyers should publish fuel use, emissions, test hours, outage performance, and cleaner options for each site.',
    tags: ['Amazon', 'Generac', 'Data Centres'], time: '5 min', published: '00:01', graphNode: 'amazon-generac-backup-power', sourceCount: 3, primarySource: 'U.S. Securities and Exchange Commission',
  },
];

export const latestEdition: NewsEdition = {
  pulse: 'NIGHT_RUN_19',
  publishedDate: '2026-09-19',
  publishedLabel: 'September 19, 2026',
  stories: latestStories,
};

const latestGraphNodes: GraphNode[] = [
  { id: 'openai-misalignment-framework', label: 'Misalignment Reports', category: 'Policy', storyIds: ['openai-misalignment-framework'], weight: 10 },
  { id: 'model-misalignment', label: 'Model Misalignment', category: 'Models', storyIds: ['openai-misalignment-framework'], weight: 10 },
  { id: 'incident-disclosure', label: 'Incident Disclosure', category: 'Policy', storyIds: ['openai-misalignment-framework'], weight: 10 },
  { id: 'independent-ai-review', label: 'Independent AI Review', category: 'Policy', storyIds: ['openai-misalignment-framework', 'scotland-ai-principles-summit'], weight: 9 },
  { id: 'huawei-atlas-960e-superpod', label: 'Atlas 960E SuperPoD', category: 'Hardware', storyIds: ['huawei-atlas-960e-superpod'], weight: 10 },
  { id: 'ascend-960', label: 'Ascend 960', category: 'Hardware', storyIds: ['huawei-atlas-960e-superpod'], weight: 9 },
  { id: 'near-packaged-optics', label: 'Near-Packaged Optics', category: 'Hardware', storyIds: ['huawei-atlas-960e-superpod'], weight: 9 },
  { id: 'ai-cluster-efficiency', label: 'AI Cluster Efficiency', category: 'Hardware', storyIds: ['huawei-atlas-960e-superpod'], weight: 9 },
  { id: 'ratepayer-protection-act', label: 'Ratepayer Protection Act', category: 'Policy', storyIds: ['ratepayer-protection-act'], weight: 10 },
  { id: 'large-load-rules', label: 'Large-Load Rules', category: 'Policy', storyIds: ['ratepayer-protection-act'], weight: 9 },
  { id: 'power-grid', label: 'Power Grid', category: 'Policy', storyIds: ['ratepayer-protection-act', 'amazon-generac-backup-power'], weight: 10 },
  { id: 'data-centre-costs', label: 'Data Centre Costs', category: 'Policy', storyIds: ['ratepayer-protection-act', 'amazon-generac-backup-power'], weight: 10 },
  { id: 'scotland-ai-principles-summit', label: 'Scotland AI Summit', category: 'Policy', storyIds: ['scotland-ai-principles-summit'], weight: 10 },
  { id: 'voluntary-ai-principles', label: 'Voluntary AI Principles', category: 'Policy', storyIds: ['scotland-ai-principles-summit'], weight: 9 },
  { id: 'human-dignity', label: 'Human Dignity', category: 'Policy', storyIds: ['scotland-ai-principles-summit'], weight: 8 },
  { id: 'frontier-ai-leaders', label: 'Frontier AI Leaders', category: 'Models', storyIds: ['scotland-ai-principles-summit', 'openai-misalignment-framework'], weight: 9 },
  { id: 'amazon-generac-backup-power', label: 'Amazon Generac Deal', category: 'Hardware', storyIds: ['amazon-generac-backup-power'], weight: 10 },
  { id: 'backup-generators', label: 'Backup Generators', category: 'Hardware', storyIds: ['amazon-generac-backup-power'], weight: 9 },
  { id: 'data-centre-resilience', label: 'Data Centre Resilience', category: 'Hardware', storyIds: ['amazon-generac-backup-power'], weight: 9 },
  { id: 'power-emissions-ledger', label: 'Power & Emissions Ledger', category: 'Policy', storyIds: ['amazon-generac-backup-power'], weight: 8 },
];

const latestGraphLinks: GraphLink[] = [
  { source: 'openai-misalignment-framework', target: 'model-misalignment', relation: 'defines behaviour worth reporting' },
  { source: 'model-misalignment', target: 'incident-disclosure', relation: 'moves evidence into public reports' },
  { source: 'incident-disclosure', target: 'independent-ai-review', relation: 'allows outside checks' },
  { source: 'huawei-atlas-960e-superpod', target: 'ascend-960', relation: 'uses up to 4,096 processors' },
  { source: 'ascend-960', target: 'near-packaged-optics', relation: 'connects through Hi-ONE engines' },
  { source: 'near-packaged-optics', target: 'ai-cluster-efficiency', relation: 'aims to reduce power and failures' },
  { source: 'ratepayer-protection-act', target: 'large-load-rules', relation: 'asks states to consider a standard' },
  { source: 'large-load-rules', target: 'data-centre-costs', relation: 'assigns new grid costs' },
  { source: 'data-centre-costs', target: 'power-grid', relation: 'depends on local upgrades' },
  { source: 'scotland-ai-principles-summit', target: 'frontier-ai-leaders', relation: 'brings four major companies together' },
  { source: 'scotland-ai-principles-summit', target: 'voluntary-ai-principles', relation: 'explores a shared framework' },
  { source: 'voluntary-ai-principles', target: 'human-dignity', relation: 'sets a public goal' },
  { source: 'voluntary-ai-principles', target: 'independent-ai-review', relation: 'needs evidence and outside tests' },
  { source: 'amazon-generac-backup-power', target: 'backup-generators', relation: 'orders long-term supply' },
  { source: 'backup-generators', target: 'data-centre-resilience', relation: 'keeps services running in outages' },
  { source: 'data-centre-resilience', target: 'power-grid', relation: 'supports sites during grid failure' },
  { source: 'backup-generators', target: 'power-emissions-ledger', relation: 'needs fuel and emissions records' },
  { source: 'amazon-generac-backup-power', target: 'data-centre-costs', relation: 'adds a large reliability expense' },
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
  generated_at: '2026-09-19T00:01:00+02:00',
  status: 'complete',
  current_story_count: latestStories.length,
  archive_story_count: stories.length,
  archive_pulses: [...archivedEditions.map((edition) => edition.pulse), latestEdition.pulse],
  stories: latestStories.map(({ id, author, title, tags }) => ({ id, author, title, tags })),
};
