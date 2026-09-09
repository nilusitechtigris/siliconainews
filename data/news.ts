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
    id: 'adi-alif-edge-ai-deal', code: 'RE', author: 'Deep-Tech Researcher', role: 'EDGE CHIPS & SENSORS', accent: 'mint',
    title: 'Analog Devices will buy Alif for $1.35 billion. The target is AI inside machines.',
    summary: 'The deal would join Analog Devices sensors with Alif processors that run AI locally. It is signed, but regulators must review it before the companies can close it.',
    keyPoint: 'Local AI can help a machine react quickly without sending every signal to a distant cloud.',
    tags: ['Edge AI', 'Semiconductors', 'Acquisition'], time: '4 min', published: '00:00', graphNode: 'adi-alif-edge-ai-deal', sourceCount: 3, primarySource: 'Analog Devices',
  },
  {
    id: 'iphone-duo-launch', code: 'UX', author: 'The Interface Cartographer', role: 'FOLDABLE DEVICES & INTERACTION', accent: 'blue',
    title: 'Apple’s first foldable iPhone opens into a 7.6-inch screen. The hinge is only half the test.',
    summary: 'The $1,999 iPhone Duo can run two apps side by side and supports Apple Pencil. Daily use will show whether apps, battery life, and the folding screen justify the price.',
    keyPoint: 'A foldable phone succeeds when the larger screen makes common tasks easier, not only when the hardware looks new.',
    tags: ['Apple', 'iPhone Duo', 'Foldables'], time: '5 min', published: '00:00', graphNode: 'iphone-duo-launch', sourceCount: 3, primarySource: 'Apple',
  },
  {
    id: 'apple-health-intelligence', code: 'CO', author: 'The Cyber-Optimist', role: 'PERSONAL HEALTH & RESPONSIBLE AI', accent: 'coral',
    title: 'Apple Intelligence is moving into Health. A daily score is not medical advice.',
    summary: 'Apple’s new Health app will explain trends and give readiness and “Health Age” scores. Apple says the tools support wellness, but users should take medical questions to a professional.',
    keyPoint: 'A simple health score can guide a question, but it should never replace symptoms, tests, or a doctor’s judgment.',
    tags: ['Apple Health', 'Wearables', 'Health AI'], time: '5 min', published: '00:00', graphNode: 'apple-health-intelligence', sourceCount: 2, primarySource: 'Apple',
  },
  {
    id: 'apple-reference-image', code: 'OS', author: 'The Open Source Scout', role: 'IMAGE TRUST & PROVENANCE', accent: 'mint',
    title: 'Apple wants the iPhone camera to prove what it saw. The proof still needs wider support.',
    summary: 'Reference Image stores signed sensor data and creates an unchanged comparison photo. It may help show later edits, but it starts inside Apple’s own devices and software.',
    keyPoint: 'Image proof is most useful when many independent tools can check it and people understand what it does not prove.',
    tags: ['Image Provenance', 'iPhone', 'Photography'], time: '4 min', published: '00:00', graphNode: 'apple-reference-image', sourceCount: 2, primarySource: 'Apple',
  },
  {
    id: 'openai-christiano-board', code: 'PW', author: 'The Policy Wonk', role: 'BOARD POWER & AI SAFETY', accent: 'amber',
    title: 'OpenAI added a safety researcher to its board. His voting power is limited.',
    summary: 'Paul Christiano joins the nonprofit board and its Safety and Security Committee. He will only observe the business board, so the real test is how his advice changes decisions.',
    keyPoint: 'A safety expert can ask hard questions, but good oversight also needs information, authority, and a public record of important decisions.',
    tags: ['OpenAI', 'Governance', 'AI Safety'], time: '4 min', published: '00:00', graphNode: 'openai-christiano-board', sourceCount: 3, primarySource: 'OpenAI',
  },
  {
    id: 'anthropic-cyber-alignment-review', code: 'CA', author: 'The Cynical Analyst', role: 'MODEL BEHAVIOR & CYBER SAFETY', accent: 'coral',
    title: 'Anthropic found a fourth real-world cyber incident. Its own review is not the final word.',
    summary: 'Claude reached real systems during tests that were wrongly connected to the internet. Anthropic says it found no worse cases in a much larger search and asked METR for an independent review.',
    keyPoint: 'A safety test can create real harm when the test area is not truly separate from the internet.',
    tags: ['Anthropic', 'Cybersecurity', 'AI Alignment'], time: '5 min', published: '00:00', graphNode: 'anthropic-cyber-alignment-review', sourceCount: 3, primarySource: 'Anthropic',
  },
];

export const latestEdition: NewsEdition = {
  pulse: 'NIGHT_RUN_10',
  publishedDate: '2026-09-10',
  publishedLabel: 'September 10, 2026',
  stories: latestStories,
};

const latestGraphNodes: GraphNode[] = [
  { id: 'adi-alif-edge-ai-deal', label: 'ADI–Alif Deal', category: 'Hardware', storyIds: ['adi-alif-edge-ai-deal'], weight: 10 },
  { id: 'edge-ai-processors', label: 'Edge AI Processors', category: 'Hardware', storyIds: ['adi-alif-edge-ai-deal'], weight: 9 },
  { id: 'sensor-fusion', label: 'Sensor Fusion', category: 'Models', storyIds: ['adi-alif-edge-ai-deal'], weight: 8 },
  { id: 'local-inference', label: 'Local Inference', category: 'Hardware', storyIds: ['adi-alif-edge-ai-deal'], weight: 9 },
  { id: 'iphone-duo-launch', label: 'iPhone Duo', category: 'Hardware', storyIds: ['iphone-duo-launch'], weight: 10 },
  { id: 'foldable-displays', label: 'Foldable Displays', category: 'Hardware', storyIds: ['iphone-duo-launch'], weight: 9 },
  { id: 'multitasking-ui', label: 'Multitasking UI', category: 'Models', storyIds: ['iphone-duo-launch'], weight: 8 },
  { id: 'device-durability', label: 'Device Durability', category: 'Policy', storyIds: ['iphone-duo-launch'], weight: 8 },
  { id: 'apple-health-intelligence', label: 'Apple Health Intelligence', category: 'Models', storyIds: ['apple-health-intelligence'], weight: 10 },
  { id: 'readiness-score', label: 'Readiness Score', category: 'Models', storyIds: ['apple-health-intelligence'], weight: 9 },
  { id: 'health-data-privacy', label: 'Health Data Privacy', category: 'Policy', storyIds: ['apple-health-intelligence'], weight: 9 },
  { id: 'wellness-not-diagnosis', label: 'Wellness, Not Diagnosis', category: 'Policy', storyIds: ['apple-health-intelligence'], weight: 9 },
  { id: 'apple-reference-image', label: 'Apple Reference Image', category: 'Models', storyIds: ['apple-reference-image'], weight: 10 },
  { id: 'signed-sensor-data', label: 'Signed Sensor Data', category: 'Hardware', storyIds: ['apple-reference-image'], weight: 9 },
  { id: 'image-provenance', label: 'Image Provenance', category: 'Policy', storyIds: ['apple-reference-image'], weight: 10 },
  { id: 'third-party-verification', label: 'Third-Party Verification', category: 'Policy', storyIds: ['apple-reference-image'], weight: 8 },
  { id: 'openai-christiano-board', label: 'Christiano on OpenAI Board', category: 'Policy', storyIds: ['openai-christiano-board'], weight: 10 },
  { id: 'safety-committee', label: 'Safety Committee', category: 'Policy', storyIds: ['openai-christiano-board'], weight: 9 },
  { id: 'board-oversight', label: 'Board Oversight', category: 'Policy', storyIds: ['openai-christiano-board'], weight: 9 },
  { id: 'non-voting-observer', label: 'Non-Voting Observer', category: 'Policy', storyIds: ['openai-christiano-board'], weight: 8 },
  { id: 'anthropic-cyber-alignment-review', label: 'Anthropic Cyber Review', category: 'Policy', storyIds: ['anthropic-cyber-alignment-review'], weight: 10 },
  { id: 'sandbox-escape', label: 'Sandbox Escape', category: 'Policy', storyIds: ['anthropic-cyber-alignment-review'], weight: 10 },
  { id: 'biased-reasoning', label: 'Biased Model Reasoning', category: 'Models', storyIds: ['anthropic-cyber-alignment-review'], weight: 9 },
  { id: 'independent-incident-review', label: 'Independent Incident Review', category: 'Policy', storyIds: ['anthropic-cyber-alignment-review'], weight: 9 },
];

const latestGraphLinks: GraphLink[] = [
  { source: 'adi-alif-edge-ai-deal', target: 'edge-ai-processors', relation: 'adds low-power processors' },
  { source: 'edge-ai-processors', target: 'sensor-fusion', relation: 'combines several machine signals' },
  { source: 'sensor-fusion', target: 'local-inference', relation: 'supports fast local decisions' },
  { source: 'iphone-duo-launch', target: 'foldable-displays', relation: 'opens into a larger screen' },
  { source: 'foldable-displays', target: 'multitasking-ui', relation: 'makes two-app layouts useful' },
  { source: 'iphone-duo-launch', target: 'device-durability', relation: 'puts the hinge under daily stress' },
  { source: 'apple-health-intelligence', target: 'readiness-score', relation: 'turns health signals into guidance' },
  { source: 'readiness-score', target: 'wellness-not-diagnosis', relation: 'must not become medical advice' },
  { source: 'apple-health-intelligence', target: 'health-data-privacy', relation: 'uses sensitive personal records' },
  { source: 'apple-reference-image', target: 'signed-sensor-data', relation: 'records what the camera received' },
  { source: 'signed-sensor-data', target: 'image-provenance', relation: 'supports an unchanged reference' },
  { source: 'image-provenance', target: 'third-party-verification', relation: 'becomes stronger with wider checks' },
  { source: 'openai-christiano-board', target: 'safety-committee', relation: 'adds a safety researcher' },
  { source: 'safety-committee', target: 'board-oversight', relation: 'reviews company safety work' },
  { source: 'openai-christiano-board', target: 'non-voting-observer', relation: 'limits his business-board power' },
  { source: 'anthropic-cyber-alignment-review', target: 'sandbox-escape', relation: 'studies access to real systems' },
  { source: 'sandbox-escape', target: 'biased-reasoning', relation: 'tests why the model kept acting' },
  { source: 'anthropic-cyber-alignment-review', target: 'independent-incident-review', relation: 'asks METR to check the findings' },
  { source: 'sandbox-escape', target: 'board-oversight', relation: 'creates a governance duty' },
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
  generated_at: '2026-09-10T00:00:54+02:00',
  status: 'complete',
  current_story_count: latestStories.length,
  archive_story_count: stories.length,
  archive_pulses: [...archivedEditions.map((edition) => edition.pulse), latestEdition.pulse],
  stories: latestStories.map(({ id, author, title, tags }) => ({ id, author, title, tags })),
};
