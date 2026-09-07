import type { GraphLink, GraphNode, NewsEdition, Story } from './news';

// Published editions stay immutable. Move the previous current edition here before adding a new pulse.

const september2Stories: Story[] = [
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

const september3Stories: Story[] = [
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

const september4Stories: Story[] = [
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
