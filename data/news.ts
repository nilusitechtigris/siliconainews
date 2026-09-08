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
    id: 'mistral-series-d', code: 'CA', author: 'The Cynical Analyst', role: 'AI CAPITAL & COMPETITION', accent: 'amber',
    title: 'Mistral raised €3 billion. Now it must turn European trust into useful AI.',
    summary: 'The French AI company reached a value above €21 billion after a new funding round. The money can buy more computing power, but it does not guarantee better models or lasting customers.',
    keyPoint: 'A record funding round gives Mistral more time and computing power, but customers will judge the products, prices, and control they receive.',
    tags: ['Mistral', 'Open Models', 'Europe'], time: '4 min', published: '13:43', graphNode: 'mistral-series-d', sourceCount: 3, primarySource: 'Mistral',
  },
  {
    id: 'eu-neuro-ai-governance', code: 'PW', author: 'The Policy Wonk', role: 'RIGHTS & EMERGING TECHNOLOGY', accent: 'coral',
    title: 'EU ethics experts want rules for the systems behind brain-data AI.',
    summary: 'A European expert group says policy should cover the full path from brain data to AI models and later uses. Its statement is advice, not a new law.',
    keyPoint: 'Protecting one device is not enough when brain data can move into shared models, services, and decisions about people.',
    tags: ['Neuro-AI', 'European Union', 'Privacy'], time: '4 min', published: '13:43', graphNode: 'neuro-ai-governance', sourceCount: 2, primarySource: 'European Commission',
  },
  {
    id: 'axa-global-ai-hub', code: 'UX', author: 'The Interface Cartographer', role: 'ENTERPRISE SYSTEMS & CONTROL', accent: 'blue',
    title: 'AXA is building one control room for AI agents across five businesses.',
    summary: 'AXA and Publicis Sapient are expanding a shared AI platform for insurance work. The design may reduce repeated work, but it also creates one important place that must stay safe.',
    keyPoint: 'A shared AI platform can speed up projects only when access, costs, model choices, and human checks remain clear.',
    tags: ['Enterprise AI', 'Insurance', 'Agents'], time: '4 min', published: '13:43', graphNode: 'enterprise-agent-hub', sourceCount: 2, primarySource: 'AXA',
  },
  {
    id: 'minicpm5-2b-release', code: 'OS', author: 'The Open Source Scout', role: 'SMALL MODELS & LOCAL AI', accent: 'mint',
    title: 'MiniCPM5-2B puts a long-context AI model into a much smaller package.',
    summary: 'OpenBMB released a 2.5-billion-parameter model for local and on-device use. It also shared much of its training data, but the strongest test results come from the model maker.',
    keyPoint: 'Small open models can make private local tools easier to build, but teams must test them on their own tasks and devices.',
    tags: ['Open Models', 'On-device AI', 'Long Context'], time: '5 min', published: '13:43', graphNode: 'minicpm5-2b', sourceCount: 3, primarySource: 'OpenBMB',
  },
  {
    id: 'cathay-contrail-trial', code: 'CL', author: 'The Carbon Ledger', role: 'CLIMATE & AVIATION', accent: 'mint',
    title: 'Cathay and Google are using AI to avoid warming aircraft trails.',
    summary: 'More than 80 test flights followed AI forecasts and made small route changes. Google estimates a 40% cut in contrail warming during those flights, but a larger trial is still needed.',
    keyPoint: 'The early result is about warming from contrails, not total flight emissions, and it still needs wider real-world testing.',
    tags: ['Climate AI', 'Aviation', 'Forecasting'], time: '4 min', published: '13:43', graphNode: 'contrail-avoidance', sourceCount: 3, primarySource: 'Cathay Pacific',
  },
  {
    id: 'goldman-open-model-controls', code: 'RE', author: 'Deep-Tech Researcher', role: 'MODEL SECURITY & BANKING', accent: 'coral',
    title: 'Goldman’s CIO says banks can use open models with four safety layers.',
    summary: 'Marco Argenti says companies should test models, protect the place where they run, limit agent permissions, and control data access. This is a proposed approach, not a public standard.',
    keyPoint: 'Model choice is safer when several separate controls stand between an AI model and important company systems.',
    tags: ['Open Models', 'Security', 'Banking'], time: '4 min', published: '13:43', graphNode: 'open-model-controls', sourceCount: 2, primarySource: 'Axios interview',
  },
];

export const latestEdition: NewsEdition = {
  pulse: 'NOON_RUN_08',
  publishedDate: '2026-09-08',
  publishedLabel: 'September 8, 2026',
  stories: latestStories,
};

const latestGraphNodes: GraphNode[] = [
  { id: 'mistral-series-d', label: 'Mistral Series D', category: 'Models', storyIds: ['mistral-series-d'], weight: 10 },
  { id: 'sovereign-ai', label: 'Sovereign AI', category: 'Policy', storyIds: ['mistral-series-d'], weight: 9 },
  { id: 'european-compute', label: 'European Compute', category: 'Hardware', storyIds: ['mistral-series-d'], weight: 8 },
  { id: 'open-models', label: 'Open Models', category: 'Models', storyIds: ['mistral-series-d', 'minicpm5-2b-release', 'goldman-open-model-controls'], weight: 10 },
  { id: 'neuro-ai-governance', label: 'Neuro-AI Governance', category: 'Policy', storyIds: ['eu-neuro-ai-governance'], weight: 10 },
  { id: 'neurodata', label: 'Neurodata', category: 'Policy', storyIds: ['eu-neuro-ai-governance'], weight: 9 },
  { id: 'brain-foundation-models', label: 'Brain Foundation Models', category: 'Models', storyIds: ['eu-neuro-ai-governance'], weight: 8 },
  { id: 'public-interest-infrastructure', label: 'Public-Interest Infrastructure', category: 'Policy', storyIds: ['eu-neuro-ai-governance'], weight: 7 },
  { id: 'enterprise-agent-hub', label: 'Enterprise Agent Hub', category: 'Models', storyIds: ['axa-global-ai-hub'], weight: 10 },
  { id: 'insurance-ai', label: 'Insurance AI', category: 'Models', storyIds: ['axa-global-ai-hub'], weight: 8 },
  { id: 'responsible-ai-controls', label: 'Responsible AI Controls', category: 'Policy', storyIds: ['axa-global-ai-hub', 'goldman-open-model-controls'], weight: 9 },
  { id: 'agent-workflows', label: 'Agent Workflows', category: 'Models', storyIds: ['axa-global-ai-hub', 'goldman-open-model-controls'], weight: 10 },
  { id: 'minicpm5-2b', label: 'MiniCPM5-2B', category: 'Models', storyIds: ['minicpm5-2b-release'], weight: 10 },
  { id: 'on-device-ai', label: 'On-device AI', category: 'Hardware', storyIds: ['minicpm5-2b-release'], weight: 9 },
  { id: 'open-training-data', label: 'Open Training Data', category: 'Models', storyIds: ['minicpm5-2b-release'], weight: 8 },
  { id: 'long-context', label: 'Long Context', category: 'Models', storyIds: ['minicpm5-2b-release'], weight: 8 },
  { id: 'contrail-avoidance', label: 'Contrail Avoidance', category: 'Models', storyIds: ['cathay-contrail-trial'], weight: 10 },
  { id: 'aviation-climate', label: 'Aviation Climate', category: 'Policy', storyIds: ['cathay-contrail-trial'], weight: 9 },
  { id: 'forecast-routing', label: 'Forecast Routing', category: 'Models', storyIds: ['cathay-contrail-trial'], weight: 8 },
  { id: 'operational-trials', label: 'Operational Trials', category: 'Policy', storyIds: ['cathay-contrail-trial'], weight: 7 },
  { id: 'open-model-controls', label: 'Open Model Controls', category: 'Policy', storyIds: ['goldman-open-model-controls'], weight: 10 },
  { id: 'zero-trust', label: 'Zero Trust', category: 'Policy', storyIds: ['goldman-open-model-controls'], weight: 9 },
  { id: 'financial-services-ai', label: 'Financial Services AI', category: 'Models', storyIds: ['goldman-open-model-controls', 'axa-global-ai-hub'], weight: 8 },
];

const latestGraphLinks: GraphLink[] = [
  { source: 'mistral-series-d', target: 'european-compute', relation: 'pays for more computing power' },
  { source: 'mistral-series-d', target: 'sovereign-ai', relation: 'supports a European control story' },
  { source: 'sovereign-ai', target: 'open-models', relation: 'offers more customer control' },
  { source: 'neuro-ai-governance', target: 'neurodata', relation: 'calls for stronger protection' },
  { source: 'neurodata', target: 'brain-foundation-models', relation: 'can train shared models' },
  { source: 'brain-foundation-models', target: 'public-interest-infrastructure', relation: 'needs public oversight' },
  { source: 'enterprise-agent-hub', target: 'insurance-ai', relation: 'supports insurance tasks' },
  { source: 'enterprise-agent-hub', target: 'agent-workflows', relation: 'moves agents into production' },
  { source: 'enterprise-agent-hub', target: 'responsible-ai-controls', relation: 'adds shared safety rules' },
  { source: 'minicpm5-2b', target: 'on-device-ai', relation: 'targets smaller local systems' },
  { source: 'minicpm5-2b', target: 'long-context', relation: 'supports 131,072 tokens' },
  { source: 'minicpm5-2b', target: 'open-training-data', relation: 'ships with released datasets' },
  { source: 'on-device-ai', target: 'open-models', relation: 'makes local control practical' },
  { source: 'contrail-avoidance', target: 'forecast-routing', relation: 'guides small route changes' },
  { source: 'contrail-avoidance', target: 'aviation-climate', relation: 'aims to reduce warming' },
  { source: 'forecast-routing', target: 'operational-trials', relation: 'needs wider flight tests' },
  { source: 'open-model-controls', target: 'zero-trust', relation: 'assumes a model may be unsafe' },
  { source: 'open-model-controls', target: 'responsible-ai-controls', relation: 'uses several safety layers' },
  { source: 'open-model-controls', target: 'open-models', relation: 'allows controlled model choice' },
  { source: 'zero-trust', target: 'financial-services-ai', relation: 'limits access to bank systems' },
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
  generated_at: '2026-09-08T13:43:15+02:00',
  status: 'complete',
  current_story_count: latestStories.length,
  archive_story_count: stories.length,
  archive_pulses: [...archivedEditions.map((edition) => edition.pulse), latestEdition.pulse],
  stories: latestStories.map(({ id, author, title, tags }) => ({ id, author, title, tags })),
};
