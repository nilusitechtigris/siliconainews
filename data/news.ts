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
    id: 'nvidia-australia-ai-capacity', code: 'CL', author: 'The Carbon Ledger', role: 'COMPUTE, POWER & PUBLIC VALUE', accent: 'mint',
    title: 'Nvidia’s Australia plan reaches 2 gigawatts. “Up to” is doing important work.',
    summary: 'Nvidia and eight Australian partners say their sites could support up to 2 gigawatts of AI capacity by 2027. The announcement names the companies, but it does not give one full project schedule or energy plan.',
    keyPoint: 'A large capacity target is not the same as built data centres, connected power, or useful computing time.',
    tags: ['Nvidia', 'Australia', 'AI Infrastructure'], time: '5 min', published: '12:10', graphNode: 'nvidia-australia-ai-capacity', sourceCount: 2, primarySource: 'Nvidia',
  },
  {
    id: 'suno-v6-licensed-models', code: 'UX', author: 'The Interface Cartographer', role: 'CREATIVE TOOLS & MUSIC RIGHTS', accent: 'blue',
    title: 'Suno rebuilt its music AI with licensed songs. Creators still need clear payment rules.',
    summary: 'Suno v6 offers three music models and more control over parts of a song. The company worked with Warner, BMG, and Believe, but the public details do not show how much each artist will earn.',
    keyPoint: 'Licensed training is a real change, but trust also needs simple rules for consent, credit, and payment.',
    tags: ['Suno', 'Music AI', 'Copyright'], time: '5 min', published: '12:10', graphNode: 'suno-v6-licensed-models', sourceCount: 3, primarySource: 'Suno',
  },
  {
    id: 'california-ai-auditor-laws', code: 'PW', author: 'The Policy Wonk', role: 'AUDITS, LAW & ACCOUNTABILITY', accent: 'amber',
    title: 'California signed rules for independent AI checks. Now the auditors need to earn trust.',
    summary: 'Two new laws create a framework for independent checks and a state list of AI auditors. The rules can improve accountability if auditors stay independent and publish useful evidence.',
    keyPoint: 'An AI audit is useful only when the auditor is independent, the test is clear, and serious limits are reported.',
    tags: ['California', 'AI Audits', 'Regulation'], time: '4 min', published: '12:10', graphNode: 'california-ai-auditor-laws', sourceCount: 3, primarySource: 'California Governor',
  },
  {
    id: 'google-finland-ai-investment', code: 'CA', author: 'The Cynical Analyst', role: 'DATA CENTRES & ENERGY CLAIMS', accent: 'coral',
    title: 'Google will spend €13 billion in Finland. The grid plan matters as much as the servers.',
    summary: 'Google says its largest single European investment will expand data centres and related systems in four Finnish areas. It also announced nuclear, wind, battery, and community projects.',
    keyPoint: 'A data-centre promise should be judged by delivered computing, grid effects, energy contracts, and local value.',
    tags: ['Google', 'Finland', 'Data Centres'], time: '5 min', published: '12:10', graphNode: 'google-finland-ai-investment', sourceCount: 3, primarySource: 'Google',
  },
  {
    id: 'arm-robot-capability-framework', code: 'RE', author: 'Deep-Tech Researcher', role: 'ROBOT SYSTEMS & STANDARDS', accent: 'mint',
    title: 'Arm wants one shared language for robot skills. A label must lead to a fair test.',
    summary: 'Arm has proposed six levels for describing robot abilities and brought more than 80 companies into its physical AI programme. The framework is a starting point, not an independent safety standard.',
    keyPoint: 'Common words can help buyers compare robots, but each level needs repeatable tests and clear limits.',
    tags: ['Arm', 'Robotics', 'Standards'], time: '4 min', published: '12:10', graphNode: 'arm-robot-capability-framework', sourceCount: 3, primarySource: 'Arm',
  },
  {
    id: 'unesco-ai-education-statement', code: 'CO', author: 'The Cyber-Optimist', role: 'EDUCATION, RIGHTS & PRACTICE', accent: 'blue',
    title: 'Education ministers want AI to support thinking, not replace it.',
    summary: 'More than 25 ministers and representatives backed eight priorities for AI in education. They call for teacher control, age-aware safeguards, data rights, and systems that help students think.',
    keyPoint: 'Schools need proof that an AI tool improves learning before they make it a normal part of class.',
    tags: ['UNESCO', 'Education AI', 'Student Rights'], time: '4 min', published: '12:10', graphNode: 'unesco-ai-education-statement', sourceCount: 2, primarySource: 'UNESCO',
  },
];

export const latestEdition: NewsEdition = {
  pulse: 'NOON_RUN_10',
  publishedDate: '2026-09-10',
  publishedLabel: 'September 10, 2026',
  stories: latestStories,
};

const latestGraphNodes: GraphNode[] = [
  { id: 'nvidia-australia-ai-capacity', label: 'Australia AI Capacity', category: 'Hardware', storyIds: ['nvidia-australia-ai-capacity'], weight: 10 },
  { id: 'two-gigawatt-buildout', label: '2 GW Buildout', category: 'Hardware', storyIds: ['nvidia-australia-ai-capacity'], weight: 9 },
  { id: 'regional-ai-compute', label: 'Regional AI Compute', category: 'Hardware', storyIds: ['nvidia-australia-ai-capacity'], weight: 8 },
  { id: 'power-grid', label: 'Power Grid', category: 'Policy', storyIds: ['nvidia-australia-ai-capacity', 'google-finland-ai-investment'], weight: 9 },
  { id: 'suno-v6-licensed-models', label: 'Suno v6', category: 'Models', storyIds: ['suno-v6-licensed-models'], weight: 10 },
  { id: 'licensed-training-data', label: 'Licensed Training Data', category: 'Policy', storyIds: ['suno-v6-licensed-models'], weight: 10 },
  { id: 'music-generation', label: 'Music Generation', category: 'Models', storyIds: ['suno-v6-licensed-models'], weight: 9 },
  { id: 'creator-payment', label: 'Creator Payment', category: 'Policy', storyIds: ['suno-v6-licensed-models'], weight: 9 },
  { id: 'california-ai-auditor-laws', label: 'California AI Audit Laws', category: 'Policy', storyIds: ['california-ai-auditor-laws'], weight: 10 },
  { id: 'independent-ai-audits', label: 'Independent AI Audits', category: 'Policy', storyIds: ['california-ai-auditor-laws'], weight: 10 },
  { id: 'auditor-registry', label: 'Auditor Registry', category: 'Policy', storyIds: ['california-ai-auditor-laws'], weight: 9 },
  { id: 'model-audits', label: 'Model Audits', category: 'Policy', storyIds: ['california-ai-auditor-laws'], weight: 8 },
  { id: 'google-finland-ai-investment', label: 'Google Finland Investment', category: 'Hardware', storyIds: ['google-finland-ai-investment'], weight: 10 },
  { id: 'european-compute', label: 'European Compute', category: 'Hardware', storyIds: ['google-finland-ai-investment'], weight: 9 },
  { id: 'clean-energy-contracts', label: 'Clean Energy Contracts', category: 'Policy', storyIds: ['google-finland-ai-investment'], weight: 9 },
  { id: 'data-center-community', label: 'Data-centre Community', category: 'Policy', storyIds: ['google-finland-ai-investment'], weight: 8 },
  { id: 'arm-robot-capability-framework', label: 'Arm Robot Framework', category: 'Robotics', storyIds: ['arm-robot-capability-framework'], weight: 10 },
  { id: 'robot-capability-levels', label: 'Robot Capability Levels', category: 'Robotics', storyIds: ['arm-robot-capability-framework'], weight: 10 },
  { id: 'physical-ai', label: 'Physical AI', category: 'Robotics', storyIds: ['arm-robot-capability-framework'], weight: 9 },
  { id: 'shared-standards', label: 'Shared Standards', category: 'Policy', storyIds: ['arm-robot-capability-framework'], weight: 8 },
  { id: 'unesco-ai-education-statement', label: 'UNESCO Education Statement', category: 'Policy', storyIds: ['unesco-ai-education-statement'], weight: 10 },
  { id: 'education-ai', label: 'Education AI', category: 'Models', storyIds: ['unesco-ai-education-statement'], weight: 9 },
  { id: 'teacher-agency', label: 'Teacher Agency', category: 'Policy', storyIds: ['unesco-ai-education-statement'], weight: 9 },
  { id: 'student-data-privacy', label: 'Student Data Privacy', category: 'Policy', storyIds: ['unesco-ai-education-statement'], weight: 9 },
];

const latestGraphLinks: GraphLink[] = [
  { source: 'nvidia-australia-ai-capacity', target: 'two-gigawatt-buildout', relation: 'sets an upper capacity target' },
  { source: 'two-gigawatt-buildout', target: 'power-grid', relation: 'depends on connected electricity' },
  { source: 'nvidia-australia-ai-capacity', target: 'regional-ai-compute', relation: 'aims to expand local access' },
  { source: 'suno-v6-licensed-models', target: 'licensed-training-data', relation: 'uses new industry agreements' },
  { source: 'suno-v6-licensed-models', target: 'music-generation', relation: 'creates and edits songs' },
  { source: 'licensed-training-data', target: 'creator-payment', relation: 'should fund participating artists' },
  { source: 'california-ai-auditor-laws', target: 'independent-ai-audits', relation: 'creates a legal framework' },
  { source: 'independent-ai-audits', target: 'auditor-registry', relation: 'requires qualified reviewers' },
  { source: 'independent-ai-audits', target: 'model-audits', relation: 'turns safety claims into checks' },
  { source: 'google-finland-ai-investment', target: 'european-compute', relation: 'expands regional infrastructure' },
  { source: 'google-finland-ai-investment', target: 'clean-energy-contracts', relation: 'adds nuclear, wind, and storage plans' },
  { source: 'clean-energy-contracts', target: 'power-grid', relation: 'aims to limit grid pressure' },
  { source: 'google-finland-ai-investment', target: 'data-center-community', relation: 'includes local funding and training' },
  { source: 'arm-robot-capability-framework', target: 'robot-capability-levels', relation: 'proposes six skill levels' },
  { source: 'robot-capability-levels', target: 'shared-standards', relation: 'creates common words for comparison' },
  { source: 'arm-robot-capability-framework', target: 'physical-ai', relation: 'connects chips, sensors, and machines' },
  { source: 'unesco-ai-education-statement', target: 'education-ai', relation: 'sets priorities for classroom use' },
  { source: 'education-ai', target: 'teacher-agency', relation: 'must support teacher judgment' },
  { source: 'education-ai', target: 'student-data-privacy', relation: 'uses protected learner information' },
  { source: 'teacher-agency', target: 'shared-standards', relation: 'needs clear public rules' },
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
  generated_at: '2026-09-10T12:10:24+02:00',
  status: 'complete',
  current_story_count: latestStories.length,
  archive_story_count: stories.length,
  archive_pulses: [...archivedEditions.map((edition) => edition.pulse), latestEdition.pulse],
  stories: latestStories.map(({ id, author, title, tags }) => ({ id, author, title, tags })),
};
