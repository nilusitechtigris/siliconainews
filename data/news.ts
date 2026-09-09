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
    id: 'chatgpt-images-25', code: 'UX', author: 'The Interface Cartographer', role: 'CREATIVE TOOLS & CONTROL', accent: 'blue',
    title: 'ChatGPT Images 2.5 makes editing faster. The real upgrade is better control.',
    summary: 'OpenAI says its new image model keeps important details during repeated edits and cuts waiting time. New sketch and comment tools also give people clearer ways to guide the result.',
    keyPoint: 'A creative AI tool becomes more useful when people can change one detail without losing the rest of their work.',
    tags: ['Image AI', 'Creative Tools', 'Provenance'], time: '4 min', published: '00:10', graphNode: 'chatgpt-images-25', sourceCount: 3, primarySource: 'OpenAI',
  },
  {
    id: 'meta-muse-agent', code: 'CO', author: 'The Cyber-Optimist', role: 'PERSONAL AGENTS & SAFETY', accent: 'coral',
    title: 'Meta’s Muse can send email and make purchases. Trust is now part of the task.',
    summary: 'The new US service can work across websites and keep going after a person closes the app. Meta says a separate safety agent checks important actions before they happen.',
    keyPoint: 'An agent that can spend money or send messages needs clear permission, a useful record, and a safe way to stop.',
    tags: ['Personal Agents', 'Meta', 'Security'], time: '5 min', published: '00:10', graphNode: 'meta-muse-agent', sourceCount: 3, primarySource: 'Meta',
  },
  {
    id: 'alphagenome-atlas', code: 'RE', author: 'Deep-Tech Researcher', role: 'BIOLOGY & FOUNDATION MODELS', accent: 'mint',
    title: 'AlphaGenome Atlas maps 9 billion DNA changes. A prediction is not a diagnosis.',
    summary: 'Google DeepMind released a free research map of every possible one-letter change in the human genome. It can help scientists choose what to test, but laboratory and clinical proof still matter.',
    keyPoint: 'The atlas can rank possible genetic effects at huge scale, but doctors cannot treat an AI score as confirmed medical evidence.',
    tags: ['AlphaGenome', 'Genomics', 'Research'], time: '5 min', published: '00:10', graphNode: 'alphagenome-atlas', sourceCount: 3, primarySource: 'Google DeepMind',
  },
  {
    id: 'missouri-google-ai-training', code: 'PW', author: 'The Policy Wonk', role: 'EDUCATION & PUBLIC ACCESS', accent: 'amber',
    title: 'Missouri is offering Google AI training statewide. Access is only the first test.',
    summary: 'The agreement covers nearly 100,000 educators and more than 1.1 million students. Residents can also use free career courses through state job centers.',
    keyPoint: 'Free tools can widen access, but schools still need privacy rules, teacher control, and evidence that students learn more.',
    tags: ['Education AI', 'Missouri', 'AI Skills'], time: '4 min', published: '00:10', graphNode: 'statewide-ai-training', sourceCount: 2, primarySource: 'Missouri state agencies',
  },
  {
    id: 'us-ai-distillation-advisory', code: 'CA', author: 'The Cynical Analyst', role: 'MODEL SECURITY & COMPETITION', accent: 'coral',
    title: 'US agencies say Chinese AI firms copied frontier models at scale. The claim needs context.',
    summary: 'A joint security notice says six companies used millions of hidden requests to copy model skills. The document offers defenses, but its claims are government findings, not a court judgment.',
    keyPoint: 'Model providers need to spot unusual request patterns and share warning signs without treating every heavy user as an attacker.',
    tags: ['Model Security', 'Distillation', 'API Abuse'], time: '5 min', published: '00:10', graphNode: 'model-distillation', sourceCount: 2, primarySource: 'NSA joint advisory',
  },
  {
    id: 'astra-amazon-bedrock', code: 'OS', author: 'The Open Source Scout', role: 'CLOUD MODELS & ENTERPRISE ACCESS', accent: 'mint',
    title: 'GPT-6 Astra is now on Amazon Bedrock. Buyers should read the data rules first.',
    summary: 'Amazon says companies can use Astra through Bedrock APIs and connect it to work tools. The service offers a large context window, but retention and permission settings still need review.',
    keyPoint: 'A powerful model in a familiar cloud is easier to adopt, but teams must check data retention, access rights, and human approval.',
    tags: ['GPT-6', 'Amazon Bedrock', 'Enterprise AI'], time: '4 min', published: '00:10', graphNode: 'astra-bedrock', sourceCount: 3, primarySource: 'AWS',
  },
];

export const latestEdition: NewsEdition = {
  pulse: 'NIGHT_RUN_09',
  publishedDate: '2026-09-09',
  publishedLabel: 'September 9, 2026',
  stories: latestStories,
};

const latestGraphNodes: GraphNode[] = [
  { id: 'chatgpt-images-25', label: 'ChatGPT Images 2.5', category: 'Models', storyIds: ['chatgpt-images-25'], weight: 10 },
  { id: 'image-editing', label: 'Precision Image Editing', category: 'Models', storyIds: ['chatgpt-images-25'], weight: 9 },
  { id: 'creative-provenance', label: 'Creative Provenance', category: 'Policy', storyIds: ['chatgpt-images-25'], weight: 8 },
  { id: 'human-creative-control', label: 'Human Creative Control', category: 'Policy', storyIds: ['chatgpt-images-25'], weight: 8 },
  { id: 'meta-muse-agent', label: 'Meta Muse Agent', category: 'Models', storyIds: ['meta-muse-agent'], weight: 10 },
  { id: 'personal-agent', label: 'Personal Agent', category: 'Models', storyIds: ['meta-muse-agent'], weight: 9 },
  { id: 'secure-agent-vm', label: 'Secure Agent VM', category: 'Hardware', storyIds: ['meta-muse-agent'], weight: 9 },
  { id: 'action-approval', label: 'Action Approval', category: 'Policy', storyIds: ['meta-muse-agent'], weight: 9 },
  { id: 'agent-workflows', label: 'Agent Workflows', category: 'Models', storyIds: ['meta-muse-agent', 'astra-amazon-bedrock'], weight: 10 },
  { id: 'alphagenome-atlas', label: 'AlphaGenome Atlas', category: 'Models', storyIds: ['alphagenome-atlas'], weight: 10 },
  { id: 'genomic-variants', label: 'Genomic Variants', category: 'Models', storyIds: ['alphagenome-atlas'], weight: 9 },
  { id: 'biomedical-validation', label: 'Biomedical Validation', category: 'Policy', storyIds: ['alphagenome-atlas'], weight: 9 },
  { id: 'research-datasets', label: 'Research Datasets', category: 'Models', storyIds: ['alphagenome-atlas'], weight: 8 },
  { id: 'statewide-ai-training', label: 'Statewide AI Training', category: 'Policy', storyIds: ['missouri-google-ai-training'], weight: 10 },
  { id: 'ai-literacy', label: 'AI Literacy', category: 'Policy', storyIds: ['missouri-google-ai-training'], weight: 9 },
  { id: 'education-ai', label: 'Education AI', category: 'Models', storyIds: ['missouri-google-ai-training'], weight: 8 },
  { id: 'student-data-privacy', label: 'Student Data Privacy', category: 'Policy', storyIds: ['missouri-google-ai-training'], weight: 9 },
  { id: 'model-distillation', label: 'Model Distillation', category: 'Models', storyIds: ['us-ai-distillation-advisory'], weight: 10 },
  { id: 'api-abuse-detection', label: 'API Abuse Detection', category: 'Policy', storyIds: ['us-ai-distillation-advisory'], weight: 9 },
  { id: 'cross-provider-defense', label: 'Cross-Provider Defense', category: 'Policy', storyIds: ['us-ai-distillation-advisory'], weight: 9 },
  { id: 'model-provenance', label: 'Model Provenance', category: 'Policy', storyIds: ['us-ai-distillation-advisory'], weight: 8 },
  { id: 'astra-bedrock', label: 'Astra on Bedrock', category: 'Models', storyIds: ['astra-amazon-bedrock'], weight: 10 },
  { id: 'cloud-model-access', label: 'Cloud Model Access', category: 'Hardware', storyIds: ['astra-amazon-bedrock'], weight: 8 },
  { id: 'permissioned-context', label: 'Permissioned Context', category: 'Policy', storyIds: ['astra-amazon-bedrock'], weight: 9 },
  { id: 'data-retention', label: 'Data Retention', category: 'Policy', storyIds: ['astra-amazon-bedrock'], weight: 9 },
];

const latestGraphLinks: GraphLink[] = [
  { source: 'chatgpt-images-25', target: 'image-editing', relation: 'adds more precise changes' },
  { source: 'image-editing', target: 'human-creative-control', relation: 'keeps the person in charge' },
  { source: 'chatgpt-images-25', target: 'creative-provenance', relation: 'adds origin signals' },
  { source: 'meta-muse-agent', target: 'personal-agent', relation: 'acts for one person' },
  { source: 'personal-agent', target: 'secure-agent-vm', relation: 'runs in an isolated computer' },
  { source: 'secure-agent-vm', target: 'action-approval', relation: 'checks sensitive actions' },
  { source: 'personal-agent', target: 'agent-workflows', relation: 'continues longer tasks' },
  { source: 'alphagenome-atlas', target: 'genomic-variants', relation: 'maps possible DNA changes' },
  { source: 'genomic-variants', target: 'research-datasets', relation: 'creates a large prediction map' },
  { source: 'research-datasets', target: 'biomedical-validation', relation: 'guides laboratory tests' },
  { source: 'statewide-ai-training', target: 'ai-literacy', relation: 'offers skills to residents' },
  { source: 'statewide-ai-training', target: 'education-ai', relation: 'gives schools AI tools' },
  { source: 'education-ai', target: 'student-data-privacy', relation: 'needs clear school rules' },
  { source: 'model-distillation', target: 'api-abuse-detection', relation: 'can leave request patterns' },
  { source: 'api-abuse-detection', target: 'cross-provider-defense', relation: 'improves through shared signals' },
  { source: 'cross-provider-defense', target: 'model-provenance', relation: 'supports evidence about copying' },
  { source: 'astra-bedrock', target: 'cloud-model-access', relation: 'runs through Amazon services' },
  { source: 'astra-bedrock', target: 'agent-workflows', relation: 'supports delegated work' },
  { source: 'agent-workflows', target: 'permissioned-context', relation: 'uses approved company data' },
  { source: 'permissioned-context', target: 'data-retention', relation: 'needs storage limits' },
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
  generated_at: '2026-09-09T00:10:31+02:00',
  status: 'complete',
  current_story_count: latestStories.length,
  archive_story_count: stories.length,
  archive_pulses: [...archivedEditions.map((edition) => edition.pulse), latestEdition.pulse],
  stories: latestStories.map(({ id, author, title, tags }) => ({ id, author, title, tags })),
};
