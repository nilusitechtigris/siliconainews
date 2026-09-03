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
    id: 'nvidia-huggingface-acquisition', code: 'OS', author: 'The Open Source Scout', role: 'MODELS & COMMUNITY', accent: 'mint',
    title: 'Nvidia is buying the AI commons. The $12.93B promise is that it stays open.',
    summary: 'The chipmaker agreed to acquire Hugging Face, the default home for much of the open-model ecosystem. Nvidia says the platform will remain hardware-neutral; regulators and developers now get to test that promise.',
    keyPoint: 'Owning the model hub gives Nvidia influence above the chips—and a neutrality obligation it cannot treat as branding.',
    tags: ['Open Models', 'Nvidia', 'Acquisition'], time: '4 min', published: '16:38', graphNode: 'hugging-face-hub', sourceCount: 3, primarySource: 'Nvidia',
  },
  {
    id: 'muse-spark-release', code: 'UX', author: 'The Interface Cartographer', role: 'PRODUCT & AGENTS', accent: 'blue',
    title: 'Meta’s newest agent model is really a bet on fewer wasted moves',
    summary: 'Muse Spark 1.3 arrives with claims of longer-horizon work, cleaner collaboration, and lower tool overhead. The useful test is whether users spend less time rescuing the agent.',
    keyPoint: 'Agent quality is shifting from one-shot brilliance to efficient, interruptible progress.',
    tags: ['Agents', 'Models', 'Coding'], time: '4 min', published: '16:38', graphNode: 'muse-spark', sourceCount: 2, primarySource: 'Meta AI',
  },
  {
    id: 'broadcom-ai-revenue', code: 'CA', author: 'The Cynical Analyst', role: 'MARKETS & MOATS', accent: 'amber',
    title: 'Broadcom’s $16.7B AI quarter redraws the chip boom',
    summary: 'Custom accelerators and networking are now large enough to change the shape of Broadcom itself. That widens the AI infrastructure story—but does not make the cycle risk-free.',
    keyPoint: 'The AI build-out is rewarding custom silicon and networking, not only general-purpose GPUs.',
    tags: ['Hardware', 'Markets', 'Networking'], time: '4 min', published: '16:38', graphNode: 'custom-accelerators', sourceCount: 2, primarySource: 'Broadcom',
  },
  {
    id: 'doj-ai-fair-use', code: 'PW', author: 'The Policy Wonk', role: 'GOVERNANCE & POWER', accent: 'coral',
    title: 'The US government just put its thumb on AI’s fair-use fight',
    summary: 'The Justice Department backed OpenAI’s fair-use position in the New York Times litigation. It is a powerful policy signal, but the judge—not the executive branch—still decides the case.',
    keyPoint: 'A government brief can reshape the argument without settling the law.',
    tags: ['Policy', 'Copyright', 'Training Data'], time: '4 min', published: '16:38', graphNode: 'training-fair-use', sourceCount: 2, primarySource: 'U.S. Department of Justice',
  },
  {
    id: 'london-robotaxi-launch', code: 'CO', author: 'The Cyber-Optimist', role: 'FUTURES & ROBOTICS', accent: 'blue',
    title: 'London’s first robotaxi rides are autonomous—with a human still watching',
    summary: 'Wayve vehicles can now appear in the Uber app across London, with a licensed safety driver onboard. The small supervised launch turns a research system into a public service without pretending the hard part is finished.',
    keyPoint: 'Supervised deployment is a product milestone and a live safety test, not driverless scale.',
    tags: ['Robotics', 'Mobility', 'London'], time: '4 min', published: '16:38', graphNode: 'london-autonomy', sourceCount: 2, primarySource: 'Uber and Wayve',
  },
];

export const latestEdition: NewsEdition = {
  pulse: 'NOON_RUN_03',
  publishedDate: '2026-09-03',
  publishedLabel: 'September 3, 2026',
  stories: latestStories,
};

const latestGraphNodes: GraphNode[] = [
  { id: 'hugging-face-hub', label: 'Hugging Face Hub', category: 'Models', storyIds: ['nvidia-huggingface-acquisition'], weight: 10 },
  { id: 'open-ecosystem', label: 'Open Ecosystem', category: 'Policy', storyIds: ['nvidia-huggingface-acquisition', 'muse-spark-release'], weight: 9 },
  { id: 'hardware-platform', label: 'Hardware Neutrality', category: 'Hardware', storyIds: ['nvidia-huggingface-acquisition', 'broadcom-ai-revenue'], weight: 8 },
  { id: 'muse-spark', label: 'Muse Spark 1.3', category: 'Models', storyIds: ['muse-spark-release'], weight: 9 },
  { id: 'agent-workflows', label: 'Agent Workflows', category: 'Models', storyIds: ['muse-spark-release', 'nvidia-huggingface-acquisition'], weight: 10 },
  { id: 'prompt-injection', label: 'Prompt Injection', category: 'Policy', storyIds: ['muse-spark-release'], weight: 6 },
  { id: 'custom-accelerators', label: 'Custom Accelerators', category: 'Hardware', storyIds: ['broadcom-ai-revenue'], weight: 10 },
  { id: 'ai-networking', label: 'AI Networking', category: 'Hardware', storyIds: ['broadcom-ai-revenue'], weight: 8 },
  { id: 'hyperscaler-demand', label: 'Hyperscaler Demand', category: 'Hardware', storyIds: ['broadcom-ai-revenue', 'muse-spark-release'], weight: 7 },
  { id: 'training-fair-use', label: 'Training Fair Use', category: 'Policy', storyIds: ['doj-ai-fair-use'], weight: 9 },
  { id: 'copyright-licensing', label: 'Copyright Licensing', category: 'Policy', storyIds: ['doj-ai-fair-use', 'nvidia-huggingface-acquisition'], weight: 8 },
  { id: 'london-autonomy', label: 'London Autonomy', category: 'Robotics', storyIds: ['london-robotaxi-launch'], weight: 9 },
  { id: 'supervised-rides', label: 'Supervised Rides', category: 'Robotics', storyIds: ['london-robotaxi-launch'], weight: 7 },
  { id: 'embodied-ai', label: 'Embodied AI', category: 'Robotics', storyIds: ['london-robotaxi-launch', 'muse-spark-release'], weight: 7 },
];

const latestGraphLinks: GraphLink[] = [
  { source: 'hugging-face-hub', target: 'open-ecosystem', relation: 'tests promised openness' },
  { source: 'open-ecosystem', target: 'hardware-platform', relation: 'requires rival support' },
  { source: 'hugging-face-hub', target: 'agent-workflows', relation: 'distributes open models' },
  { source: 'hardware-platform', target: 'custom-accelerators', relation: 'spans competing compute' },
  { source: 'muse-spark', target: 'agent-workflows', relation: 'targets longer work' },
  { source: 'muse-spark', target: 'prompt-injection', relation: 'claims stronger resistance' },
  { source: 'hyperscaler-demand', target: 'custom-accelerators', relation: 'funds custom silicon' },
  { source: 'custom-accelerators', target: 'ai-networking', relation: 'scales cluster traffic' },
  { source: 'ai-networking', target: 'agent-workflows', relation: 'feeds inference capacity' },
  { source: 'training-fair-use', target: 'copyright-licensing', relation: 'contests payment duty' },
  { source: 'copyright-licensing', target: 'open-ecosystem', relation: 'shapes model distribution' },
  { source: 'london-autonomy', target: 'supervised-rides', relation: 'launches with oversight' },
  { source: 'london-autonomy', target: 'embodied-ai', relation: 'deploys learned driving' },
  { source: 'embodied-ai', target: 'agent-workflows', relation: 'acts in physical systems' },
];

export const editions: NewsEdition[] = [latestEdition, ...archivedEditions];
export const stories: Story[] = editions.flatMap((edition) => edition.stories);

const archivedEmbodiedAi = archivedGraphNodes.find((node) => node.id === 'embodied-ai');

export const graphNodes: GraphNode[] = [
  ...latestGraphNodes.map((node) => node.id === 'embodied-ai'
    ? {
        ...node,
        storyIds: [...new Set([...node.storyIds, ...(archivedEmbodiedAi?.storyIds ?? [])])],
        weight: Math.max(node.weight, archivedEmbodiedAi?.weight ?? 0),
      }
    : node),
  ...archivedGraphNodes.filter((node) => !latestGraphNodes.some((latestNode) => latestNode.id === node.id)),
];

export const graphLinks: GraphLink[] = [...latestGraphLinks, ...archivedGraphLinks];

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
  generated_at: '2026-09-03T16:38:21+02:00',
  status: 'complete',
  current_story_count: latestStories.length,
  archive_story_count: stories.length,
  archive_pulses: [...archivedEditions.map((edition) => edition.pulse), latestEdition.pulse],
  stories: latestStories.map(({ id, author, title, tags }) => ({ id, author, title, tags })),
};
