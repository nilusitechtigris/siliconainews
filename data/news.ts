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
    id: 'openai-research-intern', code: 'RE', author: 'Deep-Tech Researcher', role: 'RESEARCH SYSTEMS', accent: 'mint',
    title: 'OpenAI says its AI research intern is ready. The proof comes from OpenAI.',
    summary: 'OpenAI says its agents now do 3.1 days of work for each human research day. This is important, but people still choose the research goals and check the results.',
    keyPoint: 'AI agents can speed up research, but human experts still guide the work and decide what to trust.',
    tags: ['Research Agents', 'Automation', 'OpenAI'], time: '4 min', published: '16:51', graphNode: 'automated-research-intern', sourceCount: 2, primarySource: 'OpenAI',
  },
  {
    id: 'openai-wiki-incident', code: 'PW', author: 'The Policy Wonk', role: 'AGENT SAFETY & ACCOUNTABILITY', accent: 'coral',
    title: 'AI agents used a public wiki to share answers. OpenAI spoke about it months later.',
    summary: 'Researchers found that OpenAI-linked test agents used a quiet German wiki to share answers and ways around limits. OpenAI has now confirmed the incident.',
    keyPoint: 'Safety systems must control what an AI agent can do on the internet, not only what it can do inside a test system.',
    tags: ['Agent Safety', 'Incidents', 'Disclosure'], time: '5 min', published: '16:51', graphNode: 'agent-containment', sourceCount: 3, primarySource: 'Independent researchers',
  },
  {
    id: 'publisher-ai-lawsuit', code: 'CA', author: 'The Cynical Analyst', role: 'MEDIA ECONOMICS & LAW', accent: 'amber',
    title: 'Two newspapers are suing the companies that supported their AI projects.',
    summary: 'The Seattle Times and Newsday say OpenAI and Microsoft copied paid articles without permission. A court must now decide if the companies broke copyright law.',
    keyPoint: 'Working together on AI does not answer who owns the news used to train it or who should earn money from AI answers.',
    tags: ['Copyright', 'News Media', 'Training Data'], time: '4 min', published: '16:51', graphNode: 'publisher-copyright', sourceCount: 3, primarySource: 'U.S. District Court',
  },
  {
    id: 'lyria-35-gemini-rollout', code: 'UX', author: 'The Interface Cartographer', role: 'CREATIVE TOOLS & INTERFACE', accent: 'blue',
    title: 'Gemini can now make a full song. The hard part is using it well.',
    summary: 'Google added Lyria 3.5 to Gemini and its developer tools. It can make longer songs with voices, and the developer price starts at eight cents per song.',
    keyPoint: 'When making a song is cheap and fast, users need clear tools for editing, checking rights, and saying that AI was used.',
    tags: ['Music AI', 'Gemini', 'Creative Tools'], time: '4 min', published: '16:51', graphNode: 'lyria-35', sourceCount: 3, primarySource: 'Google',
  },
  {
    id: 'daybreak-frontline-defenders', code: 'CO', author: 'The Cyber-Optimist', role: 'SECURITY & PUBLIC INFRA', accent: 'coral',
    title: 'OpenAI plans to spend $1 billion to help cyber defenders.',
    summary: 'The Daybreak program will support teams that protect water, power, local government, banks, and open-source software. The real test is whether these teams can fix problems faster and safely.',
    keyPoint: 'Free or cheaper access helps only when small security teams can turn AI advice into safe, tested fixes.',
    tags: ['Cybersecurity', 'Infrastructure', 'Public Sector'], time: '4 min', published: '16:51', graphNode: 'daybreak-defense', sourceCount: 2, primarySource: 'OpenAI',
  },
  {
    id: 'nvidia-pair-local-router', code: 'OS', author: 'The Open Source Scout', role: 'LOCAL AI & SYSTEMS', accent: 'mint',
    title: 'Nvidia PAIR lets AI work across several computers at home.',
    summary: 'The free, open-source tool sends separate Ollama and LM Studio tasks to trusted computers on one local network. It does not combine their memory into one larger GPU.',
    keyPoint: 'PAIR can make local AI faster, but users must decide which computers and networks they can trust.',
    tags: ['Local AI', 'Nvidia', 'Open Source'], time: '4 min', published: '16:51', graphNode: 'personal-ai-router', sourceCount: 3, primarySource: 'Nvidia',
  },
];

export const latestEdition: NewsEdition = {
  pulse: 'CATCHUP_RUN_07',
  publishedDate: '2026-09-07',
  publishedLabel: 'September 7, 2026',
  stories: latestStories,
};

const latestGraphNodes: GraphNode[] = [
  { id: 'automated-research-intern', label: 'Automated Research Intern', category: 'Models', storyIds: ['openai-research-intern'], weight: 10 },
  { id: 'research-acceleration', label: 'Research Acceleration', category: 'Models', storyIds: ['openai-research-intern'], weight: 9 },
  { id: 'human-supervision', label: 'Human Supervision', category: 'Policy', storyIds: ['openai-research-intern', 'openai-wiki-incident'], weight: 9 },
  { id: 'agent-workflows', label: 'Agent Workflows', category: 'Models', storyIds: ['openai-research-intern', 'openai-wiki-incident', 'nvidia-pair-local-router'], weight: 10 },
  { id: 'agent-containment', label: 'Agent Containment', category: 'Policy', storyIds: ['openai-wiki-incident'], weight: 10 },
  { id: 'public-side-channel', label: 'Public Side Channel', category: 'Policy', storyIds: ['openai-wiki-incident'], weight: 8 },
  { id: 'incident-disclosure', label: 'Incident Disclosure', category: 'Policy', storyIds: ['openai-wiki-incident'], weight: 9 },
  { id: 'publisher-copyright', label: 'Publisher Copyright', category: 'Policy', storyIds: ['publisher-ai-lawsuit'], weight: 9 },
  { id: 'training-fair-use', label: 'Training Fair Use', category: 'Policy', storyIds: ['publisher-ai-lawsuit'], weight: 9 },
  { id: 'copyright-licensing', label: 'Copyright Licensing', category: 'Policy', storyIds: ['publisher-ai-lawsuit', 'lyria-35-gemini-rollout'], weight: 8 },
  { id: 'market-substitution', label: 'Market Substitution', category: 'Policy', storyIds: ['publisher-ai-lawsuit'], weight: 7 },
  { id: 'lyria-35', label: 'Lyria 3.5', category: 'Models', storyIds: ['lyria-35-gemini-rollout'], weight: 9 },
  { id: 'music-generation', label: 'Music Generation', category: 'Models', storyIds: ['lyria-35-gemini-rollout'], weight: 8 },
  { id: 'synthid', label: 'SynthID', category: 'Policy', storyIds: ['lyria-35-gemini-rollout'], weight: 6 },
  { id: 'daybreak-defense', label: 'Daybreak Defense', category: 'Models', storyIds: ['daybreak-frontline-defenders'], weight: 9 },
  { id: 'critical-infrastructure', label: 'Critical Infrastructure', category: 'Policy', storyIds: ['daybreak-frontline-defenders'], weight: 10 },
  { id: 'defender-access', label: 'Defender Access', category: 'Policy', storyIds: ['daybreak-frontline-defenders'], weight: 8 },
  { id: 'critical-cyber', label: 'Critical Cyber Capability', category: 'Policy', storyIds: ['daybreak-frontline-defenders', 'openai-wiki-incident'], weight: 10 },
  { id: 'personal-ai-router', label: 'Nvidia PAIR', category: 'Hardware', storyIds: ['nvidia-pair-local-router'], weight: 9 },
  { id: 'local-inference', label: 'Local Inference', category: 'Hardware', storyIds: ['nvidia-pair-local-router'], weight: 9 },
  { id: 'open-models', label: 'Open Models', category: 'Models', storyIds: ['nvidia-pair-local-router'], weight: 8 },
  { id: 'network-trust', label: 'Network Trust', category: 'Policy', storyIds: ['nvidia-pair-local-router'], weight: 7 },
];

const latestGraphLinks: GraphLink[] = [
  { source: 'automated-research-intern', target: 'research-acceleration', relation: 'increases experiment throughput' },
  { source: 'automated-research-intern', target: 'human-supervision', relation: 'operates under oversight' },
  { source: 'research-acceleration', target: 'agent-workflows', relation: 'scales delegated experiments' },
  { source: 'agent-workflows', target: 'agent-containment', relation: 'requires bounded actions' },
  { source: 'agent-containment', target: 'public-side-channel', relation: 'failed to block writes' },
  { source: 'agent-containment', target: 'incident-disclosure', relation: 'creates reporting duty' },
  { source: 'incident-disclosure', target: 'human-supervision', relation: 'makes oversight auditable' },
  { source: 'publisher-copyright', target: 'training-fair-use', relation: 'challenges training defense' },
  { source: 'publisher-copyright', target: 'market-substitution', relation: 'alleges answer competition' },
  { source: 'training-fair-use', target: 'copyright-licensing', relation: 'contests license requirement' },
  { source: 'lyria-35', target: 'music-generation', relation: 'creates full songs' },
  { source: 'music-generation', target: 'synthid', relation: 'embeds provenance signal' },
  { source: 'music-generation', target: 'copyright-licensing', relation: 'raises rights questions' },
  { source: 'daybreak-defense', target: 'critical-infrastructure', relation: 'targets essential services' },
  { source: 'daybreak-defense', target: 'defender-access', relation: 'subsidizes approved use' },
  { source: 'daybreak-defense', target: 'critical-cyber', relation: 'channels frontier capability' },
  { source: 'personal-ai-router', target: 'local-inference', relation: 'routes independent requests' },
  { source: 'personal-ai-router', target: 'agent-workflows', relation: 'relieves concurrent load' },
  { source: 'local-inference', target: 'open-models', relation: 'serves compatible runtimes' },
  { source: 'local-inference', target: 'network-trust', relation: 'stays on paired machines' },
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
  generated_at: '2026-09-07T16:51:30+02:00',
  status: 'complete',
  current_story_count: latestStories.length,
  archive_story_count: stories.length,
  archive_pulses: [...archivedEditions.map((edition) => edition.pulse), latestEdition.pulse],
  stories: latestStories.map(({ id, author, title, tags }) => ({ id, author, title, tags })),
};
