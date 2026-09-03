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

export type NodeCategory = 'Hardware' | 'Models' | 'Policy' | 'Robotics';

export type GraphNode = {
  id: string;
  label: string;
  category: NodeCategory;
  storyIds: string[];
  weight: number;
};

export type GraphLink = { source: string; target: string; relation: string };

export const stories: Story[] = [
  {
    id: 'memory-wall', code: 'RE', author: 'Deep-Tech Researcher', role: 'SYSTEMS & SILICON', accent: 'mint',
    title: 'The hidden bottleneck in the next generation of reasoning models',
    summary: 'Inference is getting cheaper. Moving memory is not. Three emerging architectures suggest the next race will be won between the chips.',
    keyPoint: 'Memory bandwidth is becoming the defining constraint—not raw compute.',
    tags: ['LLMs', 'Hardware', 'HBM'], time: '4 min', published: '07:40', graphNode: 'hbm4', sourceCount: 2, primarySource: 'NVIDIA',
  },
  {
    id: 'agent-economy', code: 'CA', author: 'The Cynical Analyst', role: 'MARKETS & MOATS', accent: 'amber',
    title: 'Everyone has an agent platform. Almost nobody has an agent economy.',
    summary: 'The demos are dazzling, the unit economics are not. We trace the uncomfortable gap between autonomy and sustainable margins.',
    keyPoint: 'Agent reliability costs are outpacing early productivity gains.',
    tags: ['Agents', 'Markets', 'Inference'], time: '4 min', published: '08:15', graphNode: 'agentic-systems', sourceCount: 2, primarySource: 'Anthropic',
  },
  {
    id: 'robot-middle', code: 'CO', author: 'The Cyber-Optimist', role: 'FUTURES & ROBOTICS', accent: 'blue',
    title: 'Robots are learning the messy middle of everyday work',
    summary: 'A new wave of tactile models is leaving pristine labs for warehouses, kitchens, and the glorious chaos of the real world.',
    keyPoint: 'Generalist control models now recover from real-world mistakes.',
    tags: ['Robotics', 'World Models'], time: '4 min', published: '08:52', graphNode: 'embodied-ai', sourceCount: 2, primarySource: 'Google DeepMind',
  },
  {
    id: 'open-weights', code: 'OS', author: 'The Open Source Scout', role: 'MODELS & COMMUNITY', accent: 'coral',
    title: 'Small open models are quietly winning the deployment race',
    summary: 'Teams are trading leaderboard prestige for models that fit inside a budget, a device, and a governance policy.',
    keyPoint: 'Deployment fit is replacing benchmark rank as the deciding metric.',
    tags: ['Open Source', 'Edge AI'], time: '4 min', published: '09:20', graphNode: 'open-models', sourceCount: 2, primarySource: 'Hugging Face',
  },
  {
    id: 'energy-ledger', code: 'CL', author: 'The Carbon Ledger', role: 'ENERGY & INFRA', accent: 'mint',
    title: 'AI’s power problem is becoming a scheduling problem',
    summary: 'Data centers are learning to move flexible workloads through time, following cleaner and cheaper electricity across the grid.',
    keyPoint: 'Carbon-aware scheduling turns latency tolerance into margin.',
    tags: ['Energy', 'Data Centers'], time: '4 min', published: '10:05', graphNode: 'power-grid', sourceCount: 2, primarySource: 'Google',
  },
  {
    id: 'compute-policy', code: 'PW', author: 'The Policy Wonk', role: 'GOVERNANCE & POWER', accent: 'amber',
    title: 'Compute reporting is the new front line of AI policy',
    summary: 'Regulators are moving from debating abstract risk toward thresholds they can actually measure, audit, and enforce.',
    keyPoint: 'Governance is converging on compute, energy, and incident reporting.',
    tags: ['Policy', 'Compute'], time: '4 min', published: '10:44', graphNode: 'compute-policy', sourceCount: 2, primarySource: 'European Commission',
  },
  {
    id: 'context-memory', code: 'UX', author: 'The Interface Cartographer', role: 'PRODUCT & INTERFACE', accent: 'blue',
    title: 'Long context is turning software into a place, not a tool',
    summary: 'When assistants remember projects instead of prompts, the interface shifts from command bar to persistent working environment.',
    keyPoint: 'Continuity—not context size—is the feature users can feel.',
    tags: ['Context', 'UX', 'Agents'], time: '4 min', published: '11:18', graphNode: 'long-context', sourceCount: 2, primarySource: 'Anthropic',
  },
  {
    id: 'chiplets', code: 'RE', author: 'Deep-Tech Researcher', role: 'SYSTEMS & SILICON', accent: 'mint',
    title: 'Chiplets are making the AI accelerator a modular system',
    summary: 'Packaging, interconnect, and memory are becoming a design surface as important as the compute die itself.',
    keyPoint: 'The winning accelerator may be an ecosystem of specialized tiles.',
    tags: ['Chiplets', 'Hardware'], time: '4 min', published: '11:46', graphNode: 'chiplets', sourceCount: 2, primarySource: 'AMD',
  },
];

export const graphNodes: GraphNode[] = [
  { id: 'hbm4', label: 'HBM4', category: 'Hardware', storyIds: ['memory-wall', 'chiplets'], weight: 9 },
  { id: 'chiplets', label: 'Chiplets', category: 'Hardware', storyIds: ['chiplets', 'memory-wall'], weight: 8 },
  { id: 'cxl', label: 'CXL Memory', category: 'Hardware', storyIds: ['memory-wall'], weight: 5 },
  { id: 'agentic-systems', label: 'Agentic Systems', category: 'Models', storyIds: ['agent-economy', 'context-memory'], weight: 10 },
  { id: 'open-models', label: 'Open Models', category: 'Models', storyIds: ['open-weights', 'agent-economy'], weight: 8 },
  { id: 'long-context', label: 'Long Context', category: 'Models', storyIds: ['context-memory', 'memory-wall'], weight: 7 },
  { id: 'world-models', label: 'World Models', category: 'Models', storyIds: ['robot-middle'], weight: 6 },
  { id: 'compute-policy', label: 'Compute Policy', category: 'Policy', storyIds: ['compute-policy', 'energy-ledger'], weight: 8 },
  { id: 'model-audits', label: 'Model Audits', category: 'Policy', storyIds: ['compute-policy', 'open-weights'], weight: 5 },
  { id: 'power-grid', label: 'Power Grid', category: 'Policy', storyIds: ['energy-ledger', 'compute-policy'], weight: 6 },
  { id: 'embodied-ai', label: 'Embodied AI', category: 'Robotics', storyIds: ['robot-middle'], weight: 9 },
  { id: 'tactile-data', label: 'Tactile Data', category: 'Robotics', storyIds: ['robot-middle'], weight: 5 },
  { id: 'edge-ai', label: 'Edge AI', category: 'Hardware', storyIds: ['open-weights', 'robot-middle'], weight: 6 },
];

export const graphLinks: GraphLink[] = [
  { source: 'hbm4', target: 'chiplets', relation: 'shares memory fabric' },
  { source: 'hbm4', target: 'cxl', relation: 'expands memory' },
  { source: 'hbm4', target: 'long-context', relation: 'bounds context speed' },
  { source: 'chiplets', target: 'edge-ai', relation: 'enables edge deployment' },
  { source: 'long-context', target: 'agentic-systems', relation: 'provides working memory' },
  { source: 'agentic-systems', target: 'open-models', relation: 'cuts hosting cost' },
  { source: 'agentic-systems', target: 'world-models', relation: 'uses simulations' },
  { source: 'open-models', target: 'model-audits', relation: 'needs auditability' },
  { source: 'model-audits', target: 'compute-policy', relation: 'shapes compliance' },
  { source: 'compute-policy', target: 'power-grid', relation: 'reports energy use' },
  { source: 'power-grid', target: 'hbm4', relation: 'sets capacity ceiling' },
  { source: 'world-models', target: 'embodied-ai', relation: 'trains physical reasoning' },
  { source: 'embodied-ai', target: 'tactile-data', relation: 'learns from touch' },
  { source: 'embodied-ai', target: 'edge-ai', relation: 'runs on-device' },
];

export const categories: NodeCategory[] = ['Hardware', 'Models', 'Policy', 'Robotics'];

export const newsJson = {
  pulse: 'NIGHT_RUN_02',
  generated_at: '2026-09-02T21:00:00+02:00',
  status: 'complete',
  stories: stories.map(({ id, author, title, tags }) => ({ id, author, title, tags })),
};
