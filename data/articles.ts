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
          'This imbalance changes how a useful benchmark should be read. Peak arithmetic throughput describes what the silicon can do when it is continuously fed. Real applications also depend on the shape of the model, prompt length, batching strategy, cache pressure, and how efficiently the serving stack moves data. Two systems with similar headline compute can therefore behave very differently under sustained use.',
          'Capacity matters alongside speed. A model or cache that fits in local high-bandwidth memory avoids slower transfers across the host or network. More capacity can also let an operator serve additional users on the same accelerator, but only if the memory channels and software scheduler keep those requests from blocking one another.',
        ],
        citations: [1],
      },
      {
        heading: 'Cheaper intelligence still needs a wider road',
        paragraphs: [
          'The broader economics are improving quickly. Stanford’s AI Index documents a steep decline in the inference cost required to reach a fixed capability level. That makes new products possible, but it also encourages teams to run more tokens, more agents, and more simultaneous sessions.',
          'The result is a useful paradox: lower inference prices increase demand for the part of the system that is hardest to scale cheaply. Memory capacity, bandwidth, packaging, and interconnect are becoming one design problem rather than four separate specifications.',
          'Software can relieve some pressure. Quantization reduces the bytes required for weights, speculative decoding can make generation more efficient, and careful cache management can increase reuse. None of those techniques makes data movement disappear. They trade precision, complexity, or flexibility for a better fit within a finite memory system.',
          'The market effect reaches beyond accelerator vendors. Memory manufacturers, advanced-packaging providers, networking companies, cloud schedulers, and inference-software teams all influence the number users eventually feel: how much useful output arrives per second and per dollar. The system boundary is widening because the bottleneck has moved beyond one die.',
        ],
        citations: [2],
      },
      {
        heading: 'What to watch next',
        paragraphs: [
          'Look beyond peak FLOPS. The more revealing measures will be tokens per watt under long context, sustained bandwidth under real concurrency, and how often systems must offload their cache. The next accelerator race will be judged by how well the whole machine keeps data moving.',
          'For buyers, that means benchmarking the workload they actually intend to run. A training result, a short single-user chat test, and a long-context agent loop stress different parts of the stack. Request latency at the quietest moment is less informative than tail latency when the service is full.',
          'For product teams, memory should become part of experience design. Features that retain enormous histories or launch many parallel agents may be technically possible but economically fragile. A well-designed system chooses what to keep, compress, or retrieve instead of treating every token as equally valuable forever.',
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
          'Work is also unevenly decomposable. Some activities have clear inputs, reversible actions, and outputs that are easy to check. Others rely on tacit context, accountability, interpersonal judgment, or consequences that appear much later. A useful adoption map therefore looks jagged: strong automation in one slice of a role, assistance in another, and little safe delegation elsewhere.',
          'That is why task-level evidence is more actionable than a forecast about entire professions. It helps a team locate the specific moments where AI removes friction and the moments where a person still supplies the standard of care. The interface between those moments often determines whether the tool saves time or merely relocates work.',
        ],
        citations: [1],
      },
      {
        heading: 'Reliability is an economic variable',
        paragraphs: [
          'Agent demos usually price the successful path. Production teams pay for every retry, duplicated context, tool call, approval step, and silent error caught downstream. A small failure rate compounds when one task contains dozens of dependent actions.',
          'Anthropic’s later Economic Index work emphasizes that adoption and impact have to be measured over time and across different forms of use. The durable business question is not whether an agent can complete a task once, but whether its supervised completion rate creates a repeatable margin.',
          'The cost model includes attention as well as tokens. A reviewer who must reconstruct the agent’s reasoning, reopen every source, and compare every changed record may spend more effort verifying the result than doing the task directly. Traceable actions, bounded permissions, and compact evidence can reduce that supervision tax.',
          'Reliability is not a single percentage either. Failure on a reversible draft is different from failure on a payment, a production deployment, or a customer message. Mature systems price the consequence of each action and place approvals accordingly, instead of using one autonomy setting for an entire workflow.',
        ],
        citations: [2],
      },
      {
        heading: 'The signal beneath the hype',
        paragraphs: [
          'Expect the strongest products to expose uncertainty, preserve checkpoints, and make human intervention inexpensive. The winning agent economy may look less like a fleet of digital employees and more like carefully designed systems that know exactly when to hand work back.',
          'That design is less cinematic than a fully autonomous demo, but it is more compatible with how organizations adopt new infrastructure. Teams need auditability, clear ownership, predictable costs, and an escape hatch when reality diverges from the happy path.',
          'The meaningful metric will be trusted work completed per unit of total cost. Tokens and model calls are only part of the denominator; review time, integration maintenance, incident recovery, and delayed decisions belong there too. When those costs decline together, an agent platform can begin to support a real economy.',
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
          'Longer tasks create more opportunities for small errors to compound. An object can move, a tool can be missing, another robot can block the route, or a human can change the instruction halfway through. Planning is therefore inseparable from monitoring. The machine needs a representation of progress, not just a sequence of motor commands.',
          'Whole-body control adds another layer of coordination. Reaching for an object while maintaining balance requires the system to reason across perception, posture, contact, and manipulation. The impressive moment is not only the completed action; it is the continuous adjustment that keeps the action safe and physically possible.',
        ],
        citations: [1],
      },
      {
        heading: 'Generalization meets safety',
        paragraphs: [
          'The earlier Gemini Robotics release framed three requirements for useful robots: generality, interactivity, and dexterity. It also described a layered safety approach that keeps conventional controllers for collision avoidance and force limits beneath higher-level reasoning.',
          'That layered structure is likely to persist. Learned systems are becoming better at interpreting the messy world, while deterministic controls remain valuable for the physical boundaries that should not be negotiated.',
          'Generality also needs a careful definition. Performing a familiar task with a new object is different from operating safely in an entirely new setting. Cross-embodiment learning can reduce the data required to adapt a model, but every new body has distinct reach, sensors, forces, and failure modes that must be understood.',
          'On-device models address another practical constraint: a physical system cannot always wait for a remote response. Local execution can reduce latency and keep operation available when connectivity is poor. It also changes the engineering tradeoff, forcing capability to fit within a tighter power and compute envelope on the robot.',
        ],
        citations: [2],
      },
      {
        heading: 'What makes this human',
        paragraphs: [
          'People rarely experience automation as a benchmark score. They experience whether a machine pauses near a child, recovers after dropping an object, or explains why it cannot continue. The real interface of embodied AI is behavior under uncertainty.',
          'That makes legibility a safety feature. A robot should communicate intent before moving, surface uncertainty in language people understand, and make interruption obvious. These interaction patterns are mundane compared with a dexterity demo, yet they determine whether a machine feels predictable enough to share a space with.',
          'The near-term story is therefore not a sudden arrival of general-purpose robots. It is the gradual expansion of tasks that can be handled with bounded autonomy, clear supervision, and graceful recovery. Progress will be measured in fewer brittle moments, not only more spectacular ones.',
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
          'Placement changes the experience before a user reads a single benchmark. A model close to the camera, microphone, or document can respond without a round trip to a distant service. It can continue working when connectivity is weak and can keep raw inputs inside a boundary the product owner controls. Those properties are not secondary to intelligence; in many settings, they are part of the definition of a useful system.',
          'Small models also give architects more deployment shapes. The same product can use a local model for quick classification or extraction, then reserve a larger remote model for ambiguous requests. That routing makes capability a portfolio decision rather than a winner-takes-all model choice. It can lower average cost while keeping an escalation path for the work that genuinely needs more capacity.',
        ],
        citations: [1],
      },
      {
        heading: 'The small-model flywheel',
        paragraphs: [
          'The earlier SmolLM release ranged from 135 million to 1.7 billion parameters and emphasized data curation alongside speed. Small models make experimentation cheap enough that domain-specific evaluation, fine-tuning, and interface design can matter more than one general benchmark.',
          'Open weights do not automatically mean open data, permissive licensing, or low risk. Teams still have to inspect the exact license, training disclosures, evaluation gaps, and downstream obligations for each release.',
          'That diligence is easiest when it becomes part of the build process. A team can record the exact checkpoint, tokenizer, quantization method, evaluation set, and serving runtime beside every release. Without that lineage, an apparently small model update can quietly change behavior, resource use, or licensing assumptions. Reproducibility is a product-control mechanism, not merely a research preference.',
          'Evaluation should also follow the deployment. A vision-language model used to read a warehouse label needs tests for blur, glare, unusual layouts, and the hardware that will run it. An aggregate academic score may hide the errors that matter most in that environment. Smaller models make repeated, local testing affordable, but they do not remove the obligation to design the right test.',
        ],
        citations: [2],
      },
      {
        heading: 'A quieter kind of advantage',
        paragraphs: [
          'The deployment race rewards models that fit the hardware, privacy posture, and response-time budget already available. The best model can be the one users never notice because it responds instantly and keeps their data where it belongs.',
          'There is a maintenance advantage as well. When a model is compact enough to run on ordinary devices or a modest server, teams can prototype with production-like constraints earlier. They can observe memory pressure, battery impact, latency tails, and failure patterns before committing to an architecture built around a much larger dependency.',
          'The choice is not automatically local, open, or small. Centralized services can deliver faster upgrades, broader capabilities, and simpler fleet management. The durable advantage comes from matching the model to the job and retaining the freedom to change that match. In that sense, open small models are valuable less as miniature flagships than as flexible components in a system people can actually operate.',
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
          'Flexibility has to be discovered, not assumed. An interactive response may have only milliseconds of tolerance, while a nightly evaluation suite can finish anywhere inside a several-hour window. Data pipelines often contain both kinds of work. Labeling those constraints explicitly gives a scheduler room to move the flexible portion without turning sustainability into a source of missed deadlines.',
          'Forecast quality matters because the cleanest hour is not known with certainty. Weather, demand, generation outages, and transmission constraints all change the grid mix. A practical system therefore needs rolling forecasts and a policy for what happens when the preferred window disappears. The goal is not perfect prediction; it is a measurable improvement that still respects the service commitment.',
        ],
        citations: [1],
      },
      {
        heading: 'Time, location, and pressure on the grid',
        paragraphs: [
          'Google later extended the idea across locations, reserving capacity where and when electricity was cleaner. Its current cloud architecture guidance describes temporal shifting as a practical sustainability technique and notes that carbon-aware scheduling depends on timely information about regional energy mixes.',
          'Carbon is not the only signal. Similar scheduling can respond to price, grid congestion, water stress, and contractual power limits. The difficult part is deciding which workloads can move without making the product worse for people.',
          'Moving work across regions introduces its own costs. Data may be expensive or legally difficult to transfer, spare capacity may not exist where the grid is cleaner, and a longer network path can erase part of the efficiency gain. The optimization is therefore constrained by residency, reliability, latency, and the energy used to move and store the data.',
          'Those constraints make carbon-aware computing a systems problem. Application owners have to declare deadlines and locations; infrastructure teams need trustworthy grid signals; schedulers must preserve capacity; and finance teams need to understand how flexibility affects pricing. A dashboard alone cannot produce the benefit if the workload was designed as immovable from the beginning.',
        ],
        citations: [2],
      },
      {
        heading: 'The operational metric to watch',
        paragraphs: [
          'A credible claim should report more than annual renewable-energy purchases. Look for hourly matching, the share of load that can move, the geographic boundaries of the system, and whether efficiency gains are being outpaced by total demand.',
          'A useful ledger separates operational efficiency from procurement. It can show how much energy the workload used, when and where it ran, which carbon signal guided the decision, and what baseline the claimed improvement uses. This does not make the accounting simple, but it makes the assumptions inspectable and reduces the temptation to compress every outcome into one flattering percentage.',
          'For AI teams, the immediate step is modest: classify workloads by urgency and expose that information to the infrastructure layer. The larger opportunity is cultural. Once time and location become adjustable product parameters, compute demand can participate in the energy system instead of arriving as an inflexible block that the grid must absorb at any hour.',
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
          'That translation changes the engineering calendar. Evidence cannot be assembled reliably at the end of a release if the development process never recorded it. Teams need to know which model version produced an evaluation, which mitigations were active, who approved deployment, and what changed after an incident. Governance starts to resemble release engineering because it depends on durable, versioned facts.',
          'The voluntary character of a code does not make the operational work abstract. A provider choosing that route still has to connect policy language to owners, artifacts, and review gates. Smaller downstream organizations also need to understand what information they receive from a provider and which responsibilities remain with them when they adapt or deploy a model.',
        ],
        citations: [1],
      },
      {
        heading: 'What providers may have to surface',
        paragraphs: [
          'The Commission’s guidance for general-purpose model providers lists notifications for models with systemic risk, serious-incident reports, safety and security frameworks, model reports, and public summaries of training content among the relevant documents.',
          'Compute remains important because it can help classify obligations and compare development efforts, but it is only one observable input. Regulators also need evidence about capability evaluations, mitigations, incidents, and how a deployed system actually behaves.',
          'This is why a compliance record should not be a static PDF separated from the system it describes. Model cards, evaluation runs, red-team findings, access controls, and incident tickets need identifiers that can be followed across versions. When evidence is linked, a reviewer can see not only that a control exists but also when it ran, what it found, and whether the response reached production.',
          'Public transparency and security can pull in opposite directions. Useful disclosure helps researchers, customers, and regulators understand a model, while excessive operational detail can create new attack paths. The implementation challenge is to produce evidence at the right level for each audience instead of treating secrecy and total disclosure as the only two options.',
        ],
        citations: [2],
      },
      {
        heading: 'The implementation era',
        paragraphs: [
          'For builders, the near-term design opportunity is traceability: systems that preserve evaluation results, model lineage, incident context, and approval history without forcing teams to reconstruct them after the fact.',
          'This work can improve products beyond compliance. A team that knows which data, model, prompt, and policy produced an output is better equipped to reproduce failures and roll back a risky change. Clear lineage also makes it easier to compare whether a new release is genuinely safer or merely better on the benchmark chosen for launch.',
          'The implementation era will be less visible than the legislative one. It will happen in deployment checklists, access logs, issue trackers, and interfaces for reporting an unexpected behavior. That apparent bureaucracy is where broad promises become testable. The strongest organizations will treat the record as living operational infrastructure rather than paperwork created for an auditor.',
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
          'Capacity and attention are different resources. Placing a document inside the window makes it available to the model, but it does not guarantee that every detail will influence the answer equally or that conflicting instructions will be resolved correctly. Teams still need evaluations that reflect the position, density, and ambiguity of the information they expect the model to use.',
          'Large windows also change application architecture gradually rather than eliminating it overnight. Retrieval can still reduce the material sent on each request, provide citations, and enforce permissions at the document level. Summaries can preserve decisions without repeatedly paying to process every conversation turn. The wider window gives designers more room; it does not select the right context for them.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'People need continuity, not a bigger bucket',
        paragraphs: [
          'A human collaborator does more than retain every sentence. They carry goals forward, recognize decisions, separate durable facts from temporary details, and ask when an old assumption no longer applies. Product memory has to do the same work visibly enough to earn trust.',
          'Long context can reduce retrieval boundaries, but it can also increase latency, cost, and the chance that irrelevant history distracts the model. Good interfaces give people control over the working set instead of presenting memory as magic.',
          'That control can be concrete. A project might show which files are active, which facts were saved as durable memory, when each item was last confirmed, and what will be excluded from the next request. A user should be able to remove an outdated preference or pin a governing decision without needing to understand the model’s token accounting.',
          'Privacy makes forgetting as important as remembering. Products need boundaries between projects, people, and organizations, plus a dependable way to delete or expire retained information. A memory feature that cannot explain its scope creates uncertainty precisely where it promises continuity. Trust grows when state is inspectable and correction has an immediate, visible effect.',
        ],
        citations: [1],
      },
      {
        heading: 'The interface becomes a place',
        paragraphs: [
          'When a system maintains projects rather than isolated prompts, navigation, provenance, and state become central. The next leap is not another number in a model card. It is helping people understand what the assistant knows, why it surfaced something, and how to correct it.',
          'Provenance should travel with the answer. If a recommendation depends on a meeting note, repository file, or earlier decision, the interface can reveal that dependency and let the reader reopen it. This makes memory useful to a team, not just to the model, because people can verify the shared record and resolve contradictions before they become new work.',
          'The most human design will probably use several forms of memory at once: a short working set for the immediate task, retrieval over a larger archive, and a small collection of explicit durable facts. A million-token window is powerful infrastructure for that system. The product breakthrough comes when the person can understand and steer the layers without thinking about tokens at all.',
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
          'A monolithic processor asks one manufacturing process to serve every function and makes the entire die share the consequence of any defect. A chiplet design can separate functions with different needs, then combine known pieces inside a package. That modularity creates more choices about how much compute, memory access, and I/O a product should contain.',
          'The package is not simply a smaller circuit board. Distances, signaling, power delivery, and heat all become part of the architecture. The links between dies must provide enough bandwidth and sufficiently low latency that the software does not spend its time waiting at the seams. Advanced packaging is therefore moving from a manufacturing detail into the center of system design.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'Why modularity matters',
        paragraphs: [
          'Chiplets let architects use different manufacturing processes for different functions, improve reuse across product variants, and scale beyond some of the practical limits of a single monolithic die. The tradeoff moves into packaging, yield, thermal design, and the latency of die-to-die links.',
          'This makes the software layer more important. A modular package creates value only when compilers, runtimes, memory models, and communication libraries can make the underlying parts behave like a coherent machine.',
          'Shared memory can simplify how developers express work, but physical locality never vanishes. Data nearer to the processor that needs it is generally cheaper and faster to access than data crossing another boundary. Runtimes and compilers must schedule work with that topology in mind while shielding application developers from unnecessary complexity.',
          'Thermal behavior is similarly interconnected. Concentrating accelerators, memory stacks, and fast links inside one package creates intense local heat that can limit sustained performance. Cooling, package materials, and power management influence how much of the advertised throughput remains available during a long training or inference job. The benchmark belongs to the assembled system, not an isolated die.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'The ecosystem inside the accelerator',
        paragraphs: [
          'The strategic shift is from optimizing one piece of silicon to coordinating a portfolio of dies. The accelerator becomes a platform in miniature, and its competitive advantage depends on how cleanly hardware and software cross the seams.',
          'That expands the field of competition. Foundry access still matters, but so do memory supply, substrate capacity, interconnect design, packaging yield, firmware, compilers, and communication libraries. A weakness in any layer can strand the capability of the others, which is why specifications alone reveal less about delivered performance than they once did.',
          'For buyers, the sensible unit of comparison is the workload running at system scale: completed jobs, usable tokens, power, and cost over time. Chiplets make extraordinary machines possible, but they also make the path from transistor to application more interdependent. The winner will be the architecture whose seams disappear most convincingly in daily operation.',
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
