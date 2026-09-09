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
    id: 'samsung-mistral-chip-factory', code: 'RE', author: 'Deep-Tech Researcher', role: 'CHIP FACTORIES & INDUSTRIAL AI', accent: 'mint',
    title: 'Samsung wants Mistral AI inside its chip factories. Results will decide the value.',
    summary: 'Samsung plans to use Mistral models to find defects and improve factory equipment. The partnership is real, but the promised gains have not yet been measured in public.',
    keyPoint: 'Factory AI matters when it improves chip quality or saves time in a way that people can measure.',
    tags: ['Samsung', 'Mistral', 'Semiconductors'], time: '4 min', published: '13:30', graphNode: 'samsung-mistral-chip-factory', sourceCount: 2, primarySource: 'Samsung',
  },
  {
    id: 'openai-samsung-chip-research', code: 'CA', author: 'The Cynical Analyst', role: 'CUSTOM CHIPS & SUPPLY CHAINS', accent: 'amber',
    title: 'OpenAI says Samsung is helping with future chips. The details are still thin.',
    summary: 'OpenAI says the companies are working on chip production and research. Samsung has not confirmed its exact role, so the announcement is a direction, not a finished product.',
    keyPoint: 'A chip partnership becomes meaningful when the companies explain the design, factory, schedule, and real performance.',
    tags: ['OpenAI', 'Samsung', 'AI Chips'], time: '4 min', published: '13:30', graphNode: 'openai-samsung-chip-research', sourceCount: 3, primarySource: 'Reuters',
  },
  {
    id: 'uae-space-ai-constellation', code: 'CL', author: 'The Carbon Ledger', role: 'SPACE SYSTEMS & PUBLIC IMPACT', accent: 'blue',
    title: 'A $1 billion plan would put AI on 50 satellites. Most of it is still ahead.',
    summary: 'A UAE company plans to fund a French-led network of Earth-watching satellites. They would process images in orbit, but launches, contracts, and safeguards still need proof.',
    keyPoint: 'Fast alerts from space can help with fires and infrastructure, but the same system also needs clear rules for security and surveillance.',
    tags: ['Space AI', 'Satellites', 'Earth Observation'], time: '5 min', published: '13:30', graphNode: 'space-ai-constellation', sourceCount: 3, primarySource: 'Le Monde',
  },
  {
    id: 'doha-driverless-demo', code: 'CO', author: 'The Cyber-Optimist', role: 'ROBOTAXIS & PUBLIC SAFETY', accent: 'blue',
    title: 'Doha showed a robotaxi with no safety driver. The public service still has one.',
    summary: 'Pony.ai demonstrated a fully driverless car at a transport event. Its paid Doha rides still use trained safety operators, so the demo and the public service are different stages.',
    keyPoint: 'A controlled driverless demo is useful evidence, but it is not the same as a wide public service without a safety driver.',
    tags: ['Robotaxi', 'Doha', 'Pony.ai'], time: '4 min', published: '13:30', graphNode: 'doha-driverless-demo', sourceCount: 2, primarySource: 'Pony.ai',
  },
  {
    id: 'china-distillation-response', code: 'PW', author: 'The Policy Wonk', role: 'AI DIPLOMACY & EVIDENCE', accent: 'coral',
    title: 'China rejects US model-copying claims. The public evidence is still limited.',
    summary: 'China called the US accusations unfair and asked for cooperation. The US advisory gives technical warning signs, but the named companies have not been judged by a court.',
    keyPoint: 'Governments can disagree strongly, but readers still need clear evidence and careful words before an accusation becomes a fact.',
    tags: ['China', 'Model Distillation', 'AI Policy'], time: '4 min', published: '13:30', graphNode: 'china-distillation-response', sourceCount: 3, primarySource: 'Associated Press',
  },
  {
    id: 'anthropic-researcher-resignation', code: 'UX', author: 'The Interface Cartographer', role: 'AI SAFETY & PUBLIC CLAIMS', accent: 'amber',
    title: 'A researcher left Anthropic over AI risk. His warning is a belief, not a forecast.',
    summary: 'Jacob Coxon says leading labs are moving too fast toward much stronger AI. His concern deserves attention, but a personal risk estimate cannot tell us what will happen.',
    keyPoint: 'Expert warnings can guide safety work, but readers should separate personal belief, company policy, and tested evidence.',
    tags: ['Anthropic', 'AI Safety', 'Governance'], time: '5 min', published: '13:30', graphNode: 'anthropic-researcher-resignation', sourceCount: 4, primarySource: 'Axios',
  },
];

export const latestEdition: NewsEdition = {
  pulse: 'NOON_RUN_09',
  publishedDate: '2026-09-09',
  publishedLabel: 'September 9, 2026',
  stories: latestStories,
};

const latestGraphNodes: GraphNode[] = [
  { id: 'samsung-mistral-chip-factory', label: 'Samsung–Mistral Factory AI', category: 'Models', storyIds: ['samsung-mistral-chip-factory'], weight: 10 },
  { id: 'semiconductor-factory-ai', label: 'Semiconductor Factory AI', category: 'Models', storyIds: ['samsung-mistral-chip-factory'], weight: 9 },
  { id: 'on-premise-ai', label: 'On-Premise AI', category: 'Hardware', storyIds: ['samsung-mistral-chip-factory'], weight: 8 },
  { id: 'chip-yield', label: 'Chip Yield', category: 'Hardware', storyIds: ['samsung-mistral-chip-factory'], weight: 9 },
  { id: 'openai-samsung-chip-research', label: 'OpenAI–Samsung Chip Work', category: 'Hardware', storyIds: ['openai-samsung-chip-research'], weight: 10 },
  { id: 'custom-ai-chips', label: 'Custom AI Chips', category: 'Hardware', storyIds: ['openai-samsung-chip-research'], weight: 9 },
  { id: 'ai-memory-supply', label: 'AI Memory Supply', category: 'Hardware', storyIds: ['openai-samsung-chip-research'], weight: 8 },
  { id: 'inference-chips', label: 'Inference Chips', category: 'Hardware', storyIds: ['openai-samsung-chip-research'], weight: 9 },
  { id: 'space-ai-constellation', label: 'Space AI Constellation', category: 'Models', storyIds: ['uae-space-ai-constellation'], weight: 10 },
  { id: 'onboard-ai', label: 'Onboard AI', category: 'Hardware', storyIds: ['uae-space-ai-constellation'], weight: 9 },
  { id: 'earth-observation', label: 'Earth Observation', category: 'Models', storyIds: ['uae-space-ai-constellation'], weight: 9 },
  { id: 'dual-use-monitoring', label: 'Dual-Use Monitoring', category: 'Policy', storyIds: ['uae-space-ai-constellation'], weight: 8 },
  { id: 'doha-driverless-demo', label: 'Doha Driverless Demo', category: 'Robotics', storyIds: ['doha-driverless-demo'], weight: 10 },
  { id: 'robotaxi-supervision', label: 'Robotaxi Supervision', category: 'Policy', storyIds: ['doha-driverless-demo'], weight: 9 },
  { id: 'middle-east-autonomy', label: 'Middle East Autonomy', category: 'Robotics', storyIds: ['doha-driverless-demo'], weight: 8 },
  { id: 'commercial-pilot', label: 'Commercial Pilot', category: 'Policy', storyIds: ['doha-driverless-demo'], weight: 8 },
  { id: 'china-distillation-response', label: 'China Distillation Response', category: 'Policy', storyIds: ['china-distillation-response'], weight: 10 },
  { id: 'model-distillation', label: 'Model Distillation', category: 'Models', storyIds: ['china-distillation-response'], weight: 10 },
  { id: 'evidence-standards', label: 'Evidence Standards', category: 'Policy', storyIds: ['china-distillation-response', 'anthropic-researcher-resignation'], weight: 9 },
  { id: 'ai-diplomacy', label: 'AI Diplomacy', category: 'Policy', storyIds: ['china-distillation-response'], weight: 8 },
  { id: 'anthropic-researcher-resignation', label: 'Anthropic Researcher Exit', category: 'Policy', storyIds: ['anthropic-researcher-resignation'], weight: 10 },
  { id: 'alignment-risk', label: 'AI Alignment Risk', category: 'Policy', storyIds: ['anthropic-researcher-resignation'], weight: 9 },
  { id: 'ai-race', label: 'AI Lab Race', category: 'Policy', storyIds: ['anthropic-researcher-resignation'], weight: 8 },
  { id: 'recursive-improvement', label: 'Self-Improving AI', category: 'Models', storyIds: ['anthropic-researcher-resignation'], weight: 8 },
];

const latestGraphLinks: GraphLink[] = [
  { source: 'samsung-mistral-chip-factory', target: 'semiconductor-factory-ai', relation: 'brings models into chip work' },
  { source: 'semiconductor-factory-ai', target: 'chip-yield', relation: 'aims to reduce defects' },
  { source: 'semiconductor-factory-ai', target: 'on-premise-ai', relation: 'keeps models near factory data' },
  { source: 'openai-samsung-chip-research', target: 'custom-ai-chips', relation: 'explores future designs' },
  { source: 'custom-ai-chips', target: 'inference-chips', relation: 'targets faster model use' },
  { source: 'openai-samsung-chip-research', target: 'ai-memory-supply', relation: 'extends an existing supply plan' },
  { source: 'space-ai-constellation', target: 'earth-observation', relation: 'watches changes on Earth' },
  { source: 'earth-observation', target: 'onboard-ai', relation: 'processes images in orbit' },
  { source: 'earth-observation', target: 'dual-use-monitoring', relation: 'can support civil or security work' },
  { source: 'doha-driverless-demo', target: 'middle-east-autonomy', relation: 'tests driverless travel in Doha' },
  { source: 'doha-driverless-demo', target: 'robotaxi-supervision', relation: 'separates demo from public rides' },
  { source: 'robotaxi-supervision', target: 'commercial-pilot', relation: 'keeps a safety operator today' },
  { source: 'china-distillation-response', target: 'model-distillation', relation: 'rejects US copying claims' },
  { source: 'china-distillation-response', target: 'evidence-standards', relation: 'raises questions about proof' },
  { source: 'china-distillation-response', target: 'ai-diplomacy', relation: 'moves the dispute between governments' },
  { source: 'anthropic-researcher-resignation', target: 'alignment-risk', relation: 'centres a safety warning' },
  { source: 'alignment-risk', target: 'recursive-improvement', relation: 'concerns much stronger systems' },
  { source: 'anthropic-researcher-resignation', target: 'ai-race', relation: 'criticises competitive pressure' },
  { source: 'alignment-risk', target: 'evidence-standards', relation: 'needs clear claims and uncertainty' },
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
  generated_at: '2026-09-09T13:30:56+02:00',
  status: 'complete',
  current_story_count: latestStories.length,
  archive_story_count: stories.length,
  archive_pulses: [...archivedEditions.map((edition) => edition.pulse), latestEdition.pulse],
  stories: latestStories.map(({ id, author, title, tags }) => ({ id, author, title, tags })),
};
