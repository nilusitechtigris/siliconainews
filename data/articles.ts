export type ArticleSource = {
  publisher: string;
  title: string;
  date: string;
  url: string;
  kind: 'Primary source' | 'Research';
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  citations: number[];
};

export type ArticleContent = {
  standfirst: string;
  sections: ArticleSection[];
  sources: ArticleSource[];
  methodology: string;
};

export const articlesByStoryId: Record<string, ArticleContent> = {
  'memory-wall': {
    standfirst: 'The headline number on a modern accelerator is usually compute. The number that increasingly decides whether that compute stays busy is memory bandwidth.',
    sections: [
      {
        heading: 'The arithmetic is moving off the chip',
        paragraphs: [
          'Reasoning workloads do not simply perform more operations. They repeatedly move model weights and a growing key-value cache through memory. As context and concurrency rise, that movement can leave expensive arithmetic units waiting for data.',
          'NVIDIA’s Rubin architecture makes the direction unusually visible. Its HBM4 subsystem is specified at up to 22 TB/s of bandwidth and 288 GB per GPU. NVIDIA says HBM4 doubles the memory-interface width, explicitly tying the change to larger contexts and high-concurrency inference.',
        ],
        citations: [1],
      },
      {
        heading: 'Cheaper intelligence still needs a wider road',
        paragraphs: [
          'The broader economics are improving quickly. Stanford’s AI Index documents a steep decline in the inference cost required to reach a fixed capability level. That makes new products possible, but it also encourages teams to run more tokens, more agents, and more simultaneous sessions.',
          'The result is a useful paradox: lower inference prices increase demand for the part of the system that is hardest to scale cheaply. Memory capacity, bandwidth, packaging, and interconnect are becoming one design problem rather than four separate specifications.',
        ],
        citations: [2],
      },
      {
        heading: 'What to watch next',
        paragraphs: [
          'Look beyond peak FLOPS. The more revealing measures will be tokens per watt under long context, sustained bandwidth under real concurrency, and how often systems must offload their cache. The next accelerator race will be judged by how well the whole machine keeps data moving.',
        ],
        citations: [1, 2],
      },
    ],
    sources: [
      { publisher: 'NVIDIA Technical Blog', title: 'Inside NVIDIA Rubin GPU Architecture', date: 'July 21, 2026', url: 'https://developer.nvidia.com/blog/inside-nvidia-rubin-gpu-architecture-powering-the-era-of-agentic-ai/', kind: 'Primary source' },
      { publisher: 'Stanford HAI', title: 'Artificial Intelligence Index Report 2025', date: 'April 2025', url: 'https://hai.stanford.edu/ai-index/2025-ai-index-report', kind: 'Research' },
    ],
    methodology: 'Analysis based on vendor architecture disclosures and independent historical inference-cost research. Vendor performance claims are presented as specified, not independently benchmarked.',
  },
  'agent-economy': {
    standfirst: 'AI agents are spreading through real work, but adoption data points to a patchwork of tasks—not a clean replacement for whole jobs or whole companies.',
    sections: [
      {
        heading: 'A task economy before an agent economy',
        paragraphs: [
          'The most useful evidence about agents starts below the level of occupations. Anthropic’s Economic Index examines how people use AI across millions of conversations, focusing on tasks and patterns of collaboration rather than promotional claims about autonomous digital workers.',
          'That distinction matters. A system can be valuable at drafting code, synthesizing a document, or checking a plan without being reliable enough to own the entire workflow. Human review, exception handling, permissions, and recovery remain part of the cost.',
        ],
        citations: [1],
      },
      {
        heading: 'Reliability is an economic variable',
        paragraphs: [
          'Agent demos usually price the successful path. Production teams pay for every retry, duplicated context, tool call, approval step, and silent error caught downstream. A small failure rate compounds when one task contains dozens of dependent actions.',
          'Anthropic’s later Economic Index work emphasizes that adoption and impact have to be measured over time and across different forms of use. The durable business question is not whether an agent can complete a task once, but whether its supervised completion rate creates a repeatable margin.',
        ],
        citations: [2],
      },
      {
        heading: 'The signal beneath the hype',
        paragraphs: [
          'Expect the strongest products to expose uncertainty, preserve checkpoints, and make human intervention inexpensive. The winning agent economy may look less like a fleet of digital employees and more like carefully designed systems that know exactly when to hand work back.',
        ],
        citations: [1, 2],
      },
    ],
    sources: [
      { publisher: 'Anthropic', title: 'Introducing the Anthropic Economic Index', date: 'February 10, 2025', url: 'https://www.anthropic.com/research/the-anthropic-economic-index', kind: 'Research' },
      { publisher: 'Anthropic', title: 'Economic Index report: Cadences', date: 'June 2026', url: 'https://www.anthropic.com/research/economic-index-june-2026-report', kind: 'Research' },
    ],
    methodology: 'Editorial interpretation of Anthropic’s published usage research. The argument about production economics is an inference from the evidence, not a claim made by Anthropic.',
  },
  'robot-middle': {
    standfirst: 'The frontier in robotics is shifting from performing a polished trick to recovering gracefully when an ordinary room refuses to cooperate.',
    sections: [
      {
        heading: 'From motion to extended action',
        paragraphs: [
          'Google DeepMind describes Gemini Robotics 2 as a system for whole-body control, dexterous manipulation, and multi-robot collaboration. The more consequential capability is temporal: the embodied-reasoning layer can plan and track multi-step tasks that last several minutes.',
          'That changes the unit of progress. A useful household or industrial robot cannot merely execute a grasp. It must understand whether the grasp solved the right subproblem, notice when the environment changed, and decide whether to continue, recover, or ask for help.',
        ],
        citations: [1],
      },
      {
        heading: 'Generalization meets safety',
        paragraphs: [
          'The earlier Gemini Robotics release framed three requirements for useful robots: generality, interactivity, and dexterity. It also described a layered safety approach that keeps conventional controllers for collision avoidance and force limits beneath higher-level reasoning.',
          'That layered structure is likely to persist. Learned systems are becoming better at interpreting the messy world, while deterministic controls remain valuable for the physical boundaries that should not be negotiated.',
        ],
        citations: [2],
      },
      {
        heading: 'What makes this human',
        paragraphs: [
          'People rarely experience automation as a benchmark score. They experience whether a machine pauses near a child, recovers after dropping an object, or explains why it cannot continue. The real interface of embodied AI is behavior under uncertainty.',
        ],
        citations: [1, 2],
      },
    ],
    sources: [
      { publisher: 'Google DeepMind', title: 'Gemini Robotics 2 brings whole body intelligence to robots', date: 'July 30, 2026', url: 'https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/', kind: 'Primary source' },
      { publisher: 'Google DeepMind', title: 'Gemini Robotics brings AI into the physical world', date: 'March 12, 2025', url: 'https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/', kind: 'Primary source' },
    ],
    methodology: 'Synthesis of Google DeepMind’s product and research disclosures. Reported benchmark and capability statements are vendor claims unless the linked technical material says otherwise.',
  },
  'open-weights': {
    standfirst: 'For many products, the most capable model is not the most useful one. A smaller open model can be cheaper to shape, easier to place, and simpler to govern.',
    sections: [
      {
        heading: 'Deployment fit becomes a feature',
        paragraphs: [
          'Hugging Face introduced SmolVLM as a family of 2-billion-parameter vision-language models designed for smaller local setups. The checkpoints, datasets, recipes, and tools were released under Apache 2.0, giving teams room to inspect and adapt the system.',
          'That package illustrates why model size is no longer a simple proxy for product quality. Running locally can reduce latency, keep sensitive inputs on-device, avoid a network dependency, and make unit costs more predictable.',
        ],
        citations: [1],
      },
      {
        heading: 'The small-model flywheel',
        paragraphs: [
          'The earlier SmolLM release ranged from 135 million to 1.7 billion parameters and emphasized data curation alongside speed. Small models make experimentation cheap enough that domain-specific evaluation, fine-tuning, and interface design can matter more than one general benchmark.',
          'Open weights do not automatically mean open data, permissive licensing, or low risk. Teams still have to inspect the exact license, training disclosures, evaluation gaps, and downstream obligations for each release.',
        ],
        citations: [2],
      },
      {
        heading: 'A quieter kind of advantage',
        paragraphs: [
          'The deployment race rewards models that fit the hardware, privacy posture, and response-time budget already available. The best model can be the one users never notice because it responds instantly and keeps their data where it belongs.',
        ],
        citations: [1, 2],
      },
    ],
    sources: [
      { publisher: 'Hugging Face', title: 'SmolVLM — small yet mighty Vision Language Model', date: 'November 28, 2024', url: 'https://huggingface.co/blog/smolvlm', kind: 'Primary source' },
      { publisher: 'Hugging Face', title: 'SmolLM — blazingly fast and remarkably powerful', date: 'July 16, 2024', url: 'https://huggingface.co/blog/smollm', kind: 'Primary source' },
    ],
    methodology: 'Product analysis grounded in the maintainers’ release documentation. Suitability for a particular deployment depends on independent testing and the exact model license.',
  },
  'energy-ledger': {
    standfirst: 'The grid changes hour by hour. Flexible AI workloads can change with it, turning scheduling software into energy infrastructure.',
    sections: [
      {
        heading: 'When compute follows the weather',
        paragraphs: [
          'Google’s carbon-intelligent computing platform began by shifting non-urgent work to times when a data center’s local grid was cleaner. The company described aligning forecasts of hourly carbon intensity with forecasts of compute demand.',
          'The insight is simple: not every computation has the same deadline. Training jobs, batch inference, indexing, and media processing often have temporal flexibility. A scheduler can spend that flexibility when lower-carbon electricity is more available.',
        ],
        citations: [1],
      },
      {
        heading: 'Time, location, and pressure on the grid',
        paragraphs: [
          'Google later extended the idea across locations, reserving capacity where and when electricity was cleaner. Its current cloud architecture guidance describes temporal shifting as a practical sustainability technique and notes that carbon-aware scheduling depends on timely information about regional energy mixes.',
          'Carbon is not the only signal. Similar scheduling can respond to price, grid congestion, water stress, and contractual power limits. The difficult part is deciding which workloads can move without making the product worse for people.',
        ],
        citations: [2],
      },
      {
        heading: 'The operational metric to watch',
        paragraphs: [
          'A credible claim should report more than annual renewable-energy purchases. Look for hourly matching, the share of load that can move, the geographic boundaries of the system, and whether efficiency gains are being outpaced by total demand.',
        ],
        citations: [1, 2],
      },
    ],
    sources: [
      { publisher: 'Google', title: 'Our data centers now work harder when the sun shines and wind blows', date: 'April 22, 2020', url: 'https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/data-centers-work-harder-sun-shines-wind-blows/', kind: 'Primary source' },
      { publisher: 'Google Cloud', title: 'Optimize resource usage for sustainability', date: 'Reviewed January 28, 2026', url: 'https://docs.cloud.google.com/architecture/framework/sustainability/optimize-resource-usage', kind: 'Primary source' },
    ],
    methodology: 'Explainer based on Google’s disclosed production approach and current cloud guidance. It does not estimate the net emissions of a specific AI service.',
  },
  'compute-policy': {
    standfirst: 'AI regulation is becoming less abstract. Europe’s implementation work increasingly asks providers to document systems, report incidents, and show how risk controls operate.',
    sections: [
      {
        heading: 'From principles to paperwork',
        paragraphs: [
          'The European Union’s General-Purpose AI Code of Practice is a voluntary route for providers to demonstrate compliance with AI Act obligations. Its three chapters cover transparency, copyright, and safety and security.',
          'The practical shift is significant. Policy debates often revolve around broad ideas such as systemic risk. Compliance mechanisms turn those ideas into model documentation, safety frameworks, testing records, and named responsibilities.',
        ],
        citations: [1],
      },
      {
        heading: 'What providers may have to surface',
        paragraphs: [
          'The Commission’s guidance for general-purpose model providers lists notifications for models with systemic risk, serious-incident reports, safety and security frameworks, model reports, and public summaries of training content among the relevant documents.',
          'Compute remains important because it can help classify obligations and compare development efforts, but it is only one observable input. Regulators also need evidence about capability evaluations, mitigations, incidents, and how a deployed system actually behaves.',
        ],
        citations: [2],
      },
      {
        heading: 'The implementation era',
        paragraphs: [
          'For builders, the near-term design opportunity is traceability: systems that preserve evaluation results, model lineage, incident context, and approval history without forcing teams to reconstruct them after the fact.',
        ],
        citations: [1, 2],
      },
    ],
    sources: [
      { publisher: 'European Commission', title: 'The General-Purpose AI Code of Practice', date: 'July 10, 2025', url: 'https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai', kind: 'Primary source' },
      { publisher: 'European Commission', title: 'Guidelines for providers of general-purpose AI models', date: 'Updated April 28, 2026', url: 'https://digital-strategy.ec.europa.eu/en/policies/guidelines-gpai-providers', kind: 'Primary source' },
    ],
    methodology: 'Plain-language summary of European Commission materials, not legal advice. Readers should consult the linked official guidance for obligations applying to a specific model or organization.',
  },
  'context-memory': {
    standfirst: 'A million-token window changes what can fit inside one request. It does not, by itself, give a product judgment, continuity, or memory.',
    sections: [
      {
        heading: 'Capacity is no longer the whole problem',
        paragraphs: [
          'Anthropic made a one-million-token context window generally available for Claude Opus 4.6 and Sonnet 4.6 at standard platform pricing. That is enough capacity to place large codebases, document collections, or extended project histories in a single working context.',
          'Earlier, the jump from 9,000 to 100,000 tokens was framed as the ability to process roughly 75,000 words. Each order-of-magnitude increase changes what is technically possible, but also raises a harder product question: what should the system remember, retrieve, summarize, or forget?',
        ],
        citations: [1, 2],
      },
      {
        heading: 'People need continuity, not a bigger bucket',
        paragraphs: [
          'A human collaborator does more than retain every sentence. They carry goals forward, recognize decisions, separate durable facts from temporary details, and ask when an old assumption no longer applies. Product memory has to do the same work visibly enough to earn trust.',
          'Long context can reduce retrieval boundaries, but it can also increase latency, cost, and the chance that irrelevant history distracts the model. Good interfaces give people control over the working set instead of presenting memory as magic.',
        ],
        citations: [1],
      },
      {
        heading: 'The interface becomes a place',
        paragraphs: [
          'When a system maintains projects rather than isolated prompts, navigation, provenance, and state become central. The next leap is not another number in a model card. It is helping people understand what the assistant knows, why it surfaced something, and how to correct it.',
        ],
        citations: [1, 2],
      },
    ],
    sources: [
      { publisher: 'Anthropic', title: '1M context is now generally available for Opus 4.6 and Sonnet 4.6', date: 'March 2026', url: 'https://claude.com/blog/1m-context-ga', kind: 'Primary source' },
      { publisher: 'Anthropic', title: 'Introducing 100K context windows', date: 'May 11, 2023', url: 'https://www.anthropic.com/news/100k-context-windows', kind: 'Primary source' },
    ],
    methodology: 'Product-design analysis informed by Anthropic’s context-window announcements. Claims about interface design are Silicon AI News editorial judgment.',
  },
  'chiplets': {
    standfirst: 'The modern AI accelerator is no longer best understood as one enormous die. Packaging lets designers assemble compute, memory, and interconnect into a system.',
    sections: [
      {
        heading: 'A package of specialized parts',
        paragraphs: [
          'AMD’s CDNA 3 architecture combines chiplet technologies, high-bandwidth memory, and its Infinity Architecture fabric. The MI300 family partitions compute and I/O across multiple dies, using advanced packaging to bring them together.',
          'For the MI300A, AMD combines CPU and GPU chiplets with a shared pool of HBM3. The design aims to reduce data movement and avoid copies between separate CPU and GPU memory domains—exactly the overhead that increasingly constrains large AI and scientific workloads.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'Why modularity matters',
        paragraphs: [
          'Chiplets let architects use different manufacturing processes for different functions, improve reuse across product variants, and scale beyond some of the practical limits of a single monolithic die. The tradeoff moves into packaging, yield, thermal design, and the latency of die-to-die links.',
          'This makes the software layer more important. A modular package creates value only when compilers, runtimes, memory models, and communication libraries can make the underlying parts behave like a coherent machine.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'The ecosystem inside the accelerator',
        paragraphs: [
          'The strategic shift is from optimizing one piece of silicon to coordinating a portfolio of dies. The accelerator becomes a platform in miniature, and its competitive advantage depends on how cleanly hardware and software cross the seams.',
        ],
        citations: [1, 2],
      },
    ],
    sources: [
      { publisher: 'AMD', title: 'AMD CDNA Architecture', date: 'Accessed September 2, 2026', url: 'https://www.amd.com/en/technologies/cdna.html', kind: 'Primary source' },
      { publisher: 'AMD', title: 'Introducing the AMD Instinct MI300 Series accelerators', date: 'December 6, 2023', url: 'https://www.amd.com/en/blogs/2023/introducing-the-amd-instinct-mi300-series-acceler.html', kind: 'Primary source' },
    ],
    methodology: 'Architecture explainer based on AMD’s published materials. Product specifications and efficiency claims come from the vendor and should be compared with independent workload-specific benchmarks.',
  },
};
