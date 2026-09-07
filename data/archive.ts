import type { GraphLink, GraphNode, NewsEdition, Story } from './news';

// Published editions stay immutable. Move the previous current edition here before adding a new pulse.

const september2Stories: Story[] = [
  {
    id: 'memory-wall', code: 'RE', author: 'Deep-Tech Researcher', role: 'SYSTEMS & SILICON', accent: 'mint',
    title: 'Why memory speed can slow down the next AI models',
    summary: 'Running AI models is getting cheaper, but moving data through memory is still difficult. Faster chips cannot help if they must wait for data.',
    keyPoint: 'Memory speed is becoming as important as the power of the main AI chip.',
    tags: ['LLMs', 'Hardware', 'HBM'], time: '4 min', published: '07:40', graphNode: 'hbm4', sourceCount: 2, primarySource: 'NVIDIA',
  },
  {
    id: 'agent-economy', code: 'CA', author: 'The Cynical Analyst', role: 'MARKETS & MOATS', accent: 'amber',
    title: 'AI agents look impressive, but can companies earn money from them?',
    summary: 'AI agent demos can look great, but real work also includes errors, checks, and retries. These extra steps can make each useful result expensive.',
    keyPoint: 'AI agents can save time, but the cost of checking and fixing their work is still high.',
    tags: ['Agents', 'Markets', 'Inference'], time: '4 min', published: '08:15', graphNode: 'agentic-systems', sourceCount: 2, primarySource: 'Anthropic',
  },
  {
    id: 'robot-middle', code: 'CO', author: 'The Cyber-Optimist', role: 'FUTURES & ROBOTICS', accent: 'blue',
    title: 'Robots are learning how to handle mistakes in the real world',
    summary: 'New robot models are moving from clean labs into busy places such as warehouses and kitchens. They are getting better at noticing problems and trying again.',
    keyPoint: 'A useful robot must recover when an object moves or a task does not go as planned.',
    tags: ['Robotics', 'World Models'], time: '4 min', published: '08:52', graphNode: 'embodied-ai', sourceCount: 2, primarySource: 'Google DeepMind',
  },
  {
    id: 'open-weights', code: 'OS', author: 'The Open Source Scout', role: 'MODELS & COMMUNITY', accent: 'coral',
    title: 'Small open AI models are easier to use in real products',
    summary: 'Many teams now choose a smaller model that fits their budget, device, and privacy rules. The best test score is not always the best choice.',
    keyPoint: 'A model is useful when it fits the product, cost, speed, and privacy needs of the team.',
    tags: ['Open Source', 'Edge AI'], time: '4 min', published: '09:20', graphNode: 'open-models', sourceCount: 2, primarySource: 'Hugging Face',
  },
  {
    id: 'energy-ledger', code: 'CL', author: 'The Carbon Ledger', role: 'ENERGY & INFRA', accent: 'mint',
    title: 'Data centers can move some AI work to cleaner hours',
    summary: 'Some AI jobs do not need to run at once. Data centers can move this work to times when electricity is cleaner and sometimes cheaper.',
    keyPoint: 'Flexible AI jobs can follow the hours when more clean energy is available.',
    tags: ['Energy', 'Data Centers'], time: '4 min', published: '10:05', graphNode: 'power-grid', sourceCount: 2, primarySource: 'Google',
  },
  {
    id: 'compute-policy', code: 'PW', author: 'The Policy Wonk', role: 'GOVERNANCE & POWER', accent: 'amber',
    title: 'AI rules are starting to focus on numbers that can be checked',
    summary: 'Regulators want AI companies to report clear facts about computing power, energy use, tests, and serious problems. These facts are easier to check than broad promises.',
    keyPoint: 'Good AI rules need records that an outside expert can inspect and test.',
    tags: ['Policy', 'Compute'], time: '4 min', published: '10:44', graphNode: 'compute-policy', sourceCount: 2, primarySource: 'European Commission',
  },
  {
    id: 'context-memory', code: 'UX', author: 'The Interface Cartographer', role: 'PRODUCT & INTERFACE', accent: 'blue',
    title: 'AI assistants are starting to remember whole projects',
    summary: 'A larger context window lets an assistant work with more project information at once. The real benefit is not repeating the same background in every chat.',
    keyPoint: 'Users care less about context size and more about continuing their work without starting again.',
    tags: ['Context', 'UX', 'Agents'], time: '4 min', published: '11:18', graphNode: 'long-context', sourceCount: 2, primarySource: 'Anthropic',
  },
  {
    id: 'chiplets', code: 'RE', author: 'Deep-Tech Researcher', role: 'SYSTEMS & SILICON', accent: 'mint',
    title: 'Chiplets let companies build AI processors from smaller parts',
    summary: 'Instead of making one very large chip, companies can connect several smaller parts in one package. Each part can have a different job.',
    keyPoint: 'The connections between chiplets can matter as much as the chiplets themselves.',
    tags: ['Chiplets', 'Hardware'], time: '4 min', published: '11:46', graphNode: 'chiplets', sourceCount: 2, primarySource: 'AMD',
  },
];

const september3Stories: Story[] = [
  {
    id: 'nvidia-huggingface-acquisition', code: 'OS', author: 'The Open Source Scout', role: 'MODELS & COMMUNITY', accent: 'mint',
    title: 'Nvidia wants to buy Hugging Face for $12.93 billion',
    summary: 'Hugging Face is a major home for open AI models. Nvidia says it will keep the platform open to other chips and clouds, but users and regulators will watch closely.',
    keyPoint: 'Nvidia will need to prove that Hugging Face still treats competing hardware and cloud companies fairly.',
    tags: ['Open Models', 'Nvidia', 'Acquisition'], time: '4 min', published: '16:38', graphNode: 'hugging-face-hub', sourceCount: 3, primarySource: 'Nvidia',
  },
  {
    id: 'muse-spark-release', code: 'UX', author: 'The Interface Cartographer', role: 'PRODUCT & AGENTS', accent: 'blue',
    title: 'Meta says its new AI agent can finish work with fewer steps',
    summary: 'Meta says Muse Spark 1.3 uses fewer tool calls and fewer tokens than the earlier version. Users should check if it also needs less help when a task goes wrong.',
    keyPoint: 'A good AI agent should make steady progress and let a person stop or correct it easily.',
    tags: ['Agents', 'Models', 'Coding'], time: '4 min', published: '16:38', graphNode: 'muse-spark', sourceCount: 2, primarySource: 'Meta AI',
  },
  {
    id: 'broadcom-ai-revenue', code: 'CA', author: 'The Cynical Analyst', role: 'MARKETS & MOATS', accent: 'amber',
    title: 'Broadcom made $16.7 billion from AI chips and networks in one quarter',
    summary: 'Large cloud companies are buying custom AI chips and fast network equipment. This shows that the AI hardware boom is bigger than general-purpose GPUs alone.',
    keyPoint: 'Custom chips and networking are becoming a major part of AI data-center spending.',
    tags: ['Hardware', 'Markets', 'Networking'], time: '4 min', published: '16:38', graphNode: 'custom-accelerators', sourceCount: 2, primarySource: 'Broadcom',
  },
  {
    id: 'doj-ai-fair-use', code: 'PW', author: 'The Policy Wonk', role: 'GOVERNANCE & POWER', accent: 'coral',
    title: 'The US government supports OpenAI in a major copyright case',
    summary: 'The Justice Department says training AI on copyrighted work can be fair use. This may influence the case, but the judge still makes the legal decision.',
    keyPoint: 'The government has shared its view, but it has not changed the law or decided the case.',
    tags: ['Policy', 'Copyright', 'Training Data'], time: '4 min', published: '16:38', graphNode: 'training-fair-use', sourceCount: 2, primarySource: 'U.S. Department of Justice',
  },
  {
    id: 'london-robotaxi-launch', code: 'CO', author: 'The Cyber-Optimist', role: 'FUTURES & ROBOTICS', accent: 'blue',
    title: 'London has robotaxi rides, but a safety driver is still inside',
    summary: 'Some Uber users in London can now get a Wayve self-driving car. A trained driver stays inside and can take control if needed.',
    keyPoint: 'The service is a real public test, but it is not yet fully driverless.',
    tags: ['Robotics', 'Mobility', 'London'], time: '4 min', published: '16:38', graphNode: 'london-autonomy', sourceCount: 2, primarySource: 'Uber and Wayve',
  },
];

const september4Stories: Story[] = [
  {
    id: 'gpt-6-astra-launch', code: 'RE', author: 'Deep-Tech Researcher', role: 'FRONTIER MODELS & SAFETY', accent: 'coral',
    title: 'GPT-6 Astra is powerful enough to need stronger cyber safety rules',
    summary: 'OpenAI released GPT-6 Astra with better computer-use skills. It is also OpenAI’s first widely released model with a “Critical” cyber rating.',
    keyPoint: 'A very capable model needs strong access limits, monitoring, and ways to stop harmful actions.',
    tags: ['GPT-6', 'Cybersecurity', 'Agents'], time: '5 min', published: '04:38', graphNode: 'gpt-6-astra', sourceCount: 3, primarySource: 'OpenAI',
  },
  {
    id: 'weathernext-3-launch', code: 'CL', author: 'The Carbon Ledger', role: 'CLIMATE & INFRA', accent: 'mint',
    title: 'Google’s new weather AI uses fresh satellite data every hour',
    summary: 'WeatherNext 3 combines live satellite images with global forecasts. It can give detailed information for wind and solar energy teams.',
    keyPoint: 'Faster and more detailed forecasts can help energy, transport, farming, and emergency teams make better plans.',
    tags: ['Climate AI', 'Forecasting', 'Energy'], time: '4 min', published: '04:38', graphNode: 'weathernext-3', sourceCount: 3, primarySource: 'Google DeepMind',
  },
  {
    id: 'google-workspace-live-voice', code: 'UX', author: 'The Interface Cartographer', role: 'PRODUCT & INTERFACE', accent: 'blue',
    title: 'Google now lets people speak to Gmail, Docs, and Keep',
    summary: 'The new voice tools can search email, create a document, and organize notes. Users need to see which private information the AI used.',
    keyPoint: 'Voice makes AI easier to use, but permissions and sources must stay clear.',
    tags: ['Workspace', 'Voice AI', 'UX'], time: '4 min', published: '04:38', graphNode: 'workspace-live', sourceCount: 2, primarySource: 'Google Workspace',
  },
  {
    id: 'superintelligence-ban-proposal', code: 'PW', author: 'The Policy Wonk', role: 'GOVERNANCE & POWER', accent: 'amber',
    title: 'US lawmakers want to ban superintelligent AI, but first they must define it',
    summary: 'Bernie Sanders and Greg Casar announced a plan for a temporary pause on advanced AI and a permanent ban on superintelligence. The full legal details are not yet clear.',
    keyPoint: 'A ban can work only if the law gives clear technical tests for systems that are too powerful or hard to control.',
    tags: ['Policy', 'AI Safety', 'Congress'], time: '4 min', published: '04:38', graphNode: 'superintelligence-ban', sourceCount: 2, primarySource: 'U.S. Senate',
  },
  {
    id: 'tesla-cybercab-austin-launch', code: 'CA', author: 'The Cynical Analyst', role: 'MARKETS & AUTONOMY', accent: 'coral',
    title: 'Tesla’s Cybercab has no steering wheel. Now it must prove it is safe.',
    summary: 'Tesla started a small Cybercab service in Austin. The cars have no pedals or steering wheel, so passengers cannot take control during a problem.',
    keyPoint: 'A car with no manual controls needs a very safe way to stop, recover, or contact support.',
    tags: ['Robotics', 'Mobility', 'Tesla'], time: '4 min', published: '04:38', graphNode: 'cybercab', sourceCount: 3, primarySource: 'Tesla',
  },
];

export const archivedEditions = [
  {
    pulse: 'NIGHT_RUN_04',
    publishedDate: '2026-09-04',
    publishedLabel: 'September 4, 2026',
    stories: september4Stories,
  },
  {
    pulse: 'NOON_RUN_03',
    publishedDate: '2026-09-03',
    publishedLabel: 'September 3, 2026',
    stories: september3Stories,
  },
  {
    pulse: 'NIGHT_RUN_02',
    publishedDate: '2026-09-02',
    publishedLabel: 'September 2, 2026',
    stories: september2Stories,
  },
] satisfies NewsEdition[];

const september2GraphNodes: GraphNode[] = [
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

const september3GraphNodes: GraphNode[] = [
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

const september4GraphNodes: GraphNode[] = [
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

const september2GraphLinks: GraphLink[] = [
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

const september3GraphLinks: GraphLink[] = [
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

const september4GraphLinks: GraphLink[] = [
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

export const archivedGraphNodes: GraphNode[] = [...september4GraphNodes, ...september3GraphNodes, ...september2GraphNodes];
export const archivedGraphLinks: GraphLink[] = [...september4GraphLinks, ...september3GraphLinks, ...september2GraphLinks];
