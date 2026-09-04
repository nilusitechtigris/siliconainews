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
    id: 'gpt-6-astra-launch', code: 'RE', author: 'Deep-Tech Researcher', role: 'FRONTIER MODELS & SAFETY', accent: 'coral',
    title: 'Astra is here. The real threshold is cyber capability, not the AGI slogan.',
    summary: 'OpenAI released GPT-6 Astra with striking computer-use claims and its first “Critical” cybersecurity rating. The benchmark leap matters, but the staged rollout and restricted cyber access say even more.',
    keyPoint: 'The launch turns model capability, deployment controls, and continuous monitoring into one inseparable product decision.',
    tags: ['GPT-6', 'Cybersecurity', 'Agents'], time: '5 min', published: '04:38', graphNode: 'gpt-6-astra', sourceCount: 3, primarySource: 'OpenAI',
  },
  {
    id: 'weathernext-3-launch', code: 'CL', author: 'The Carbon Ledger', role: 'CLIMATE & INFRA', accent: 'mint',
    title: 'Google’s weather AI now refreshes hourly—and watches the sky it predicts',
    summary: 'WeatherNext 3 combines live satellite observations with global forecasts as fine as five kilometers. Its most practical breakthrough may be energy variables built for wind and solar operators.',
    keyPoint: 'Faster, sharper forecasts become infrastructure when they feed public products and operational energy decisions.',
    tags: ['Climate AI', 'Forecasting', 'Energy'], time: '4 min', published: '04:38', graphNode: 'weathernext-3', sourceCount: 3, primarySource: 'Google DeepMind',
  },
  {
    id: 'google-workspace-live-voice', code: 'UX', author: 'The Interface Cartographer', role: 'PRODUCT & INTERFACE', accent: 'blue',
    title: 'Google wants you to talk to your inbox. Permission is the real interface.',
    summary: 'Gmail Live, Docs Live, and Keep Live turn speech into search, drafts, and structured notes. Once an assistant can reach across mail, files, chat, and the web, good UX begins with visible boundaries.',
    keyPoint: 'Voice removes typing friction while making context, consent, and provenance harder for users to see.',
    tags: ['Workspace', 'Voice AI', 'UX'], time: '4 min', published: '04:38', graphNode: 'workspace-live', sourceCount: 2, primarySource: 'Google Workspace',
  },
  {
    id: 'superintelligence-ban-proposal', code: 'PW', author: 'The Policy Wonk', role: 'GOVERNANCE & POWER', accent: 'amber',
    title: 'Congress now has a proposal to ban superintelligence. Defining it is the first fight.',
    summary: 'Bernie Sanders and Greg Casar announced legislation that would pair a permanent superintelligence ban with a temporary pause on advanced AI. The ambition is enormous; the text, support, and enforceable thresholds remain unsettled.',
    keyPoint: 'A sweeping ban cannot become operational policy until lawmakers turn “too powerful to control” into auditable technical criteria.',
    tags: ['Policy', 'AI Safety', 'Congress'], time: '4 min', published: '04:38', graphNode: 'superintelligence-ban', sourceCount: 2, primarySource: 'U.S. Senate',
  },
  {
    id: 'tesla-cybercab-austin-launch', code: 'CA', author: 'The Cynical Analyst', role: 'MARKETS & AUTONOMY', accent: 'coral',
    title: 'Tesla removed the steering wheel. Austin is now the safety case.',
    summary: 'Purpose-built Cybercabs without pedals or manual controls entered limited service in Austin. The milestone is real, but fleet scale, camera-only safety evidence, and public trust will decide whether it becomes a transport network.',
    keyPoint: 'A vehicle nobody onboard can drive manually raises the evidence bar from impressive autonomy to dependable recovery.',
    tags: ['Robotics', 'Mobility', 'Tesla'], time: '4 min', published: '04:38', graphNode: 'cybercab', sourceCount: 3, primarySource: 'Tesla',
  },
];

export const latestEdition: NewsEdition = {
  pulse: 'NIGHT_RUN_04',
  publishedDate: '2026-09-04',
  publishedLabel: 'September 4, 2026',
  stories: latestStories,
};

const latestGraphNodes: GraphNode[] = [
  { id: 'gpt-6-astra', label: 'GPT-6 Astra', category: 'Models', storyIds: ['gpt-6-astra-launch'], weight: 10 },
  { id: 'critical-cyber', label: 'Critical Cyber Capability', category: 'Policy', storyIds: ['gpt-6-astra-launch', 'superintelligence-ban-proposal'], weight: 10 },
  { id: 'computer-use', label: 'Computer Use', category: 'Models', storyIds: ['gpt-6-astra-launch', 'google-workspace-live-voice'], weight: 9 },
  { id: 'agent-workflows', label: 'Agent Workflows', category: 'Models', storyIds: ['gpt-6-astra-launch', 'google-workspace-live-voice'], weight: 10 },
  { id: 'prompt-injection', label: 'Prompt Injection', category: 'Policy', storyIds: ['gpt-6-astra-launch', 'google-workspace-live-voice'], weight: 7 },
  { id: 'weathernext-3', label: 'WeatherNext 3', category: 'Models', storyIds: ['weathernext-3-launch'], weight: 10 },
  { id: 'satellite-assimilation', label: 'Live Satellite Data', category: 'Models', storyIds: ['weathernext-3-launch'], weight: 8 },
  { id: 'renewable-forecasting', label: 'Renewable Forecasting', category: 'Policy', storyIds: ['weathernext-3-launch'], weight: 8 },
  { id: 'power-grid', label: 'Power Grid', category: 'Policy', storyIds: ['weathernext-3-launch'], weight: 8 },
  { id: 'workspace-live', label: 'Workspace Live', category: 'Models', storyIds: ['google-workspace-live-voice'], weight: 9 },
  { id: 'voice-agents', label: 'Voice Agents', category: 'Models', storyIds: ['google-workspace-live-voice', 'gpt-6-astra-launch'], weight: 8 },
  { id: 'permissioned-context', label: 'Permissioned Context', category: 'Policy', storyIds: ['google-workspace-live-voice'], weight: 7 },
  { id: 'long-context', label: 'Long Context', category: 'Models', storyIds: ['google-workspace-live-voice'], weight: 7 },
  { id: 'superintelligence-ban', label: 'Superintelligence Ban', category: 'Policy', storyIds: ['superintelligence-ban-proposal'], weight: 9 },
  { id: 'federal-ai-regulator', label: 'Federal AI Regulator', category: 'Policy', storyIds: ['superintelligence-ban-proposal'], weight: 8 },
  { id: 'compute-policy', label: 'Compute Policy', category: 'Policy', storyIds: ['superintelligence-ban-proposal'], weight: 8 },
  { id: 'cybercab', label: 'Tesla Cybercab', category: 'Robotics', storyIds: ['tesla-cybercab-austin-launch'], weight: 10 },
  { id: 'camera-only-autonomy', label: 'Camera-Only Autonomy', category: 'Robotics', storyIds: ['tesla-cybercab-austin-launch'], weight: 9 },
  { id: 'austin-robotaxi', label: 'Austin Robotaxi', category: 'Robotics', storyIds: ['tesla-cybercab-austin-launch'], weight: 8 },
  { id: 'embodied-ai', label: 'Embodied AI', category: 'Robotics', storyIds: ['tesla-cybercab-austin-launch'], weight: 9 },
];

const latestGraphLinks: GraphLink[] = [
  { source: 'gpt-6-astra', target: 'critical-cyber', relation: 'crosses capability threshold' },
  { source: 'gpt-6-astra', target: 'computer-use', relation: 'acts inside software' },
  { source: 'gpt-6-astra', target: 'agent-workflows', relation: 'extends delegated work' },
  { source: 'critical-cyber', target: 'prompt-injection', relation: 'requires layered defenses' },
  { source: 'critical-cyber', target: 'superintelligence-ban', relation: 'intensifies policy debate' },
  { source: 'weathernext-3', target: 'satellite-assimilation', relation: 'ingests live observations' },
  { source: 'weathernext-3', target: 'renewable-forecasting', relation: 'predicts energy variables' },
  { source: 'renewable-forecasting', target: 'power-grid', relation: 'supports grid planning' },
  { source: 'workspace-live', target: 'voice-agents', relation: 'turns speech into tasks' },
  { source: 'workspace-live', target: 'permissioned-context', relation: 'draws on user data' },
  { source: 'permissioned-context', target: 'long-context', relation: 'grounds generated work' },
  { source: 'voice-agents', target: 'computer-use', relation: 'reduces interface friction' },
  { source: 'superintelligence-ban', target: 'federal-ai-regulator', relation: 'proposes new agency' },
  { source: 'superintelligence-ban', target: 'compute-policy', relation: 'expands oversight scope' },
  { source: 'cybercab', target: 'camera-only-autonomy', relation: 'relies on vision system' },
  { source: 'cybercab', target: 'austin-robotaxi', relation: 'enters limited service' },
  { source: 'cybercab', target: 'embodied-ai', relation: 'removes manual controls' },
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
  generated_at: '2026-09-04T04:38:47+02:00',
  status: 'complete',
  current_story_count: latestStories.length,
  archive_story_count: stories.length,
  archive_pulses: [...archivedEditions.map((edition) => edition.pulse), latestEdition.pulse],
  stories: latestStories.map(({ id, author, title, tags }) => ({ id, author, title, tags })),
};
