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
    id: 'anthropic-september-misuse-report', code: 'CA', author: 'The Cynical Analyst', role: 'AI MISUSE & SECURITY EVIDENCE', accent: 'coral',
    title: 'Anthropic blocked AI misuse across seven harm areas. The cases are warnings, not a count of all abuse.',
    summary: 'Anthropic describes cyberattacks, surveillance, fraud, weapons work, and model copying that it found from December 2025 to August 2026. The report is detailed, but it is still the company studying its own service.',
    keyPoint: 'AI providers should publish misuse evidence, improve controls, and let independent experts test the claims.',
    tags: ['Anthropic', 'Cybersecurity', 'AI Safety'], time: '5 min', published: '00:01', graphNode: 'anthropic-september-misuse-report', sourceCount: 2, primarySource: 'Anthropic',
  },
  {
    id: 'california-child-ai-safety-laws', code: 'PW', author: 'The Policy Wonk', role: 'CHILD SAFETY & PLATFORM LAW', accent: 'amber',
    title: 'California puts new safety duties on chatbots and social feeds used by children.',
    summary: 'A new package requires stronger chatbot safeguards, bans some addictive feed features for users under 16, and adds child privacy rules. The next test is whether regulators can make the rules work in real products.',
    keyPoint: 'Child safety rules need clear age checks, independent audits, useful parental controls, and strong privacy limits.',
    tags: ['California', 'Child Safety', 'AI Chatbots'], time: '5 min', published: '00:01', graphNode: 'california-child-ai-safety-laws', sourceCount: 2, primarySource: 'California Governor',
  },
  {
    id: 'deepsky-weather-instruments', code: 'CL', author: 'The Carbon Ledger', role: 'CLIMATE DATA & PUBLIC WARNINGS', accent: 'mint',
    title: 'DeepSky plans five sensors on each weather satellite. None of the new spacecraft is flying yet.',
    summary: 'Tomorrow.io explained how its next satellite system would measure storms, wind, moisture, clouds, and rain. Better data could help AI forecasts, but the company has not published the final fleet size or real warning gains.',
    keyPoint: 'Weather AI is only as useful as its measurements, delivery speed, public access, and proven forecast results.',
    tags: ['Weather AI', 'Satellites', 'Climate'], time: '5 min', published: '00:01', graphNode: 'deepsky-weather-instruments', sourceCount: 2, primarySource: 'Tomorrow.io',
  },
  {
    id: 'doj-nvidia-groq-probe', code: 'RE', author: 'Deep-Tech Researcher', role: 'CHIP DEALS & COMPETITION', accent: 'blue',
    title: 'US officials are examining Nvidia’s unusual Groq deal. An investigation is not a finding of wrongdoing.',
    summary: 'Reports say the Justice Department is studying a licensing deal that moved Groq leaders to Nvidia without buying the company. Nvidia’s accounts show $17 billion in payments and obligations tied to the agreement.',
    keyPoint: 'Regulators are testing whether large AI companies can use licences and staff moves to avoid normal deal review.',
    tags: ['Nvidia', 'Groq', 'Antitrust'], time: '5 min', published: '00:01', graphNode: 'doj-nvidia-groq-probe', sourceCount: 3, primarySource: 'Axios',
  },
  {
    id: 'salesforce-enterprise-ai-harness', code: 'CO', author: 'The Cyber-Optimist', role: 'ENTERPRISE AGENTS & CONTROL', accent: 'mint',
    title: 'Salesforce wants one control layer for many AI agents. Most of the unified experience comes later.',
    summary: 'The planned Enterprise AI Harness joins business data, actions, security, models, and governance. Some parts exist now, while the unified product is due to start arriving in early fiscal 2028.',
    keyPoint: 'A shared control layer can make agents safer if companies can see every agent, limit its rights, and check its actions.',
    tags: ['Salesforce', 'AI Agents', 'Enterprise AI'], time: '5 min', published: '00:01', graphNode: 'salesforce-enterprise-ai-harness', sourceCount: 2, primarySource: 'Salesforce',
  },
];

export const latestEdition: NewsEdition = {
  pulse: 'NIGHT_RUN_11',
  publishedDate: '2026-09-11',
  publishedLabel: 'September 11, 2026',
  stories: latestStories,
};

const latestGraphNodes: GraphNode[] = [
  { id: 'anthropic-september-misuse-report', label: 'Anthropic Misuse Report', category: 'Policy', storyIds: ['anthropic-september-misuse-report'], weight: 10 },
  { id: 'ai-enabled-cyberattacks', label: 'AI-Enabled Cyberattacks', category: 'Models', storyIds: ['anthropic-september-misuse-report'], weight: 10 },
  { id: 'biological-misuse', label: 'Biological Misuse', category: 'Policy', storyIds: ['anthropic-september-misuse-report'], weight: 9 },
  { id: 'provider-safeguards', label: 'Provider Safeguards', category: 'Policy', storyIds: ['anthropic-september-misuse-report'], weight: 9 },
  { id: 'california-child-ai-safety-laws', label: 'California Child AI Laws', category: 'Policy', storyIds: ['california-child-ai-safety-laws'], weight: 10 },
  { id: 'companion-chatbots', label: 'Companion Chatbots', category: 'Models', storyIds: ['california-child-ai-safety-laws'], weight: 9 },
  { id: 'addictive-feeds', label: 'Addictive Feeds', category: 'Policy', storyIds: ['california-child-ai-safety-laws'], weight: 9 },
  { id: 'child-data-privacy', label: 'Child Data Privacy', category: 'Policy', storyIds: ['california-child-ai-safety-laws'], weight: 9 },
  { id: 'deepsky-weather-instruments', label: 'DeepSky Instruments', category: 'Hardware', storyIds: ['deepsky-weather-instruments'], weight: 10 },
  { id: 'weather-ai', label: 'Weather AI', category: 'Models', storyIds: ['deepsky-weather-instruments'], weight: 9 },
  { id: 'satellite-sensors', label: 'Satellite Sensors', category: 'Hardware', storyIds: ['deepsky-weather-instruments'], weight: 10 },
  { id: 'early-warning-systems', label: 'Early Warning Systems', category: 'Policy', storyIds: ['deepsky-weather-instruments'], weight: 9 },
  { id: 'doj-nvidia-groq-probe', label: 'Nvidia–Groq Probe', category: 'Policy', storyIds: ['doj-nvidia-groq-probe'], weight: 10 },
  { id: 'inference-chips', label: 'Inference Chips', category: 'Hardware', storyIds: ['doj-nvidia-groq-probe'], weight: 9 },
  { id: 'ai-antitrust', label: 'AI Antitrust', category: 'Policy', storyIds: ['doj-nvidia-groq-probe'], weight: 10 },
  { id: 'technology-licensing', label: 'Technology Licensing', category: 'Policy', storyIds: ['doj-nvidia-groq-probe'], weight: 8 },
  { id: 'salesforce-enterprise-ai-harness', label: 'Salesforce AI Harness', category: 'Models', storyIds: ['salesforce-enterprise-ai-harness'], weight: 10 },
  { id: 'enterprise-control-plane', label: 'Enterprise Control Plane', category: 'Policy', storyIds: ['salesforce-enterprise-ai-harness'], weight: 10 },
  { id: 'agent-workflows', label: 'Agent Workflows', category: 'Models', storyIds: ['salesforce-enterprise-ai-harness'], weight: 9 },
  { id: 'permissioned-context', label: 'Permissioned Context', category: 'Policy', storyIds: ['salesforce-enterprise-ai-harness'], weight: 9 },
];

const latestGraphLinks: GraphLink[] = [
  { source: 'anthropic-september-misuse-report', target: 'ai-enabled-cyberattacks', relation: 'documents disrupted operations' },
  { source: 'anthropic-september-misuse-report', target: 'biological-misuse', relation: 'reports blocked research requests' },
  { source: 'ai-enabled-cyberattacks', target: 'provider-safeguards', relation: 'requires faster detection' },
  { source: 'california-child-ai-safety-laws', target: 'companion-chatbots', relation: 'adds child safety duties' },
  { source: 'california-child-ai-safety-laws', target: 'addictive-feeds', relation: 'bans features for under-16s' },
  { source: 'companion-chatbots', target: 'child-data-privacy', relation: 'uses sensitive child data' },
  { source: 'deepsky-weather-instruments', target: 'satellite-sensors', relation: 'plans five sensor types' },
  { source: 'satellite-sensors', target: 'weather-ai', relation: 'feeds new observations' },
  { source: 'weather-ai', target: 'early-warning-systems', relation: 'aims to improve alerts' },
  { source: 'doj-nvidia-groq-probe', target: 'technology-licensing', relation: 'examines the deal structure' },
  { source: 'technology-licensing', target: 'inference-chips', relation: 'covers Groq processor designs' },
  { source: 'doj-nvidia-groq-probe', target: 'ai-antitrust', relation: 'tests competition rules' },
  { source: 'salesforce-enterprise-ai-harness', target: 'enterprise-control-plane', relation: 'adds one management layer' },
  { source: 'enterprise-control-plane', target: 'agent-workflows', relation: 'tracks agents and actions' },
  { source: 'agent-workflows', target: 'permissioned-context', relation: 'needs approved company data' },
  { source: 'enterprise-control-plane', target: 'provider-safeguards', relation: 'extends shared controls' },
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
  generated_at: '2026-09-11T00:01:57+02:00',
  status: 'complete',
  current_story_count: latestStories.length,
  archive_story_count: stories.length,
  archive_pulses: [...archivedEditions.map((edition) => edition.pulse), latestEdition.pulse],
  stories: latestStories.map(({ id, author, title, tags }) => ({ id, author, title, tags })),
};
