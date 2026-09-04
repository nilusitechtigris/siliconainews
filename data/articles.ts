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
  'gpt-6-astra-launch': {
    standfirst: 'OpenAI has released GPT-6 Astra into a staged rollout. Its computer-use results are attention-grabbing, but the defining fact is a first for the company: a broadly deployed model rated “Critical” for cybersecurity capability.',
    sections: [
      {
        heading: 'The launch crosses two thresholds',
        paragraphs: [
          'OpenAI introduced GPT-6 Astra on September 3 and began rolling it out to a limited group of organizations. The company says access will expand over the following days to paid ChatGPT plans and to developers through the OpenAI API, Microsoft Azure, and AWS Bedrock. That is a release, but not yet universal availability; most users will encounter the model through a controlled expansion rather than a single global switch.',
          'The company reports near-saturation scores on several demanding evaluations: 98% on FrontierMath Tier 4, 99.9% on ARC-AGI-3, and 100% on ExploitBench. On its OSWorld 2.0 latency simulation, OpenAI says Astra scored 72.6% while taking roughly 40 minutes per task, compared with 65.7% and roughly 75 minutes for GPT-5.6 Sol. These are provider-reported results and some combine the model with a particular agent harness, so they describe a configured system rather than an isolated intelligence quotient.',
          'OpenAI president Greg Brockman framed Astra as a possible arrival point for artificial general intelligence, according to Axios and other launch coverage. That is a corporate interpretation, not a scientific finding. The more measurable development is narrower: a model designed to browse, operate software, write code, and complete professional workflows with fewer minutes and fewer human interventions.',
        ],
        citations: [1, 3],
      },
      {
        heading: 'Critical cyber capability changes the product',
        paragraphs: [
          'OpenAI classifies Astra as the first of its broadly deployed models to reach the Critical cybersecurity level under its Preparedness Framework. The company says that, with suitable tools and access, the model can identify previously unknown software flaws and develop ways to exploit protected systems without a person directing every step. That capability can help defenders, but it also makes an ordinary unrestricted release untenable.',
          'The public version will refuse more advanced offensive requests, including the creation of proof-of-concept exploits. OpenAI says selected defenders will receive broader capability through its Daybreak program. It also describes stronger isolation, encrypted checkpoints, full-trajectory monitoring for tool-using inference, and blocking alignment evaluations before internal use. In a simulation spanning more than 54,000 internal Codex tasks, the company reports roughly half as many higher-severity misalignment flags as with Sol.',
          'Those controls are not a footnote to the model. They are part of what Astra is. A system able to move through browsers and software can cause harm through a bad instruction, a prompt injection, excessive permissions, or deliberate misuse. Capability, identity, authorization, monitoring, and interruption therefore have to be evaluated as one deployment stack.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'The benchmark victory still needs a field test',
        paragraphs: [
          'Near-perfect benchmark results sound conclusive, yet saturation can make an evaluation less useful for distinguishing the next generation of systems. Scores can also depend on tool access, time budgets, scaffolding, and whether similar tasks appeared in training. OpenAI publishes important detail, but the launch numbers remain claims from the organization shipping the model until outside evaluators reproduce them under comparable conditions.',
          'Real professional work has messier failure modes than a benchmark. An agent may reach the correct screen while misunderstanding authority, create a plausible report from the wrong source, or complete a task that should have stopped for confirmation. The strongest launch claim will be the one users can observe repeatedly: useful completion with fewer interventions and a legible record of what the system did.',
          'Astra’s release matters because it compresses several trends into one product: stronger autonomous work, higher cyber risk, staged access, and always-on oversight. The AGI slogan will dominate headlines. The practical story is that frontier models are now being distributed like powerful operational systems, with capability tiers and security controls that determine what the model is allowed to become in use.',
        ],
        citations: [1, 2, 3],
      },
    ],
    sources: [
      { publisher: 'OpenAI', title: 'GPT-6 Astra: A new generation of intelligence', date: 'September 3, 2026', url: 'https://openai.com/index/gpt-6-astra/', kind: 'Primary source' },
      { publisher: 'OpenAI', title: 'Safety overview: GPT-6 Astra', date: 'September 3, 2026', url: 'https://openai.com/index/safety-overview-gpt-6-astra/', kind: 'Primary source' },
      { publisher: 'TechCrunch', title: 'OpenAI launches Astra, its powerful (and controversial) new model', date: 'September 3, 2026', url: 'https://techcrunch.com/2026/09/03/openai-launches-astra-its-powerful-and-controversial-new-model/', kind: 'Research' },
    ],
    methodology: 'Availability, benchmark figures, and safeguards were taken from OpenAI’s launch and safety disclosures, then checked against independent launch reporting. We label all performance and alignment results as provider-reported and do not treat AGI language as an established technical conclusion.',
  },
  'weathernext-3-launch': {
    standfirst: 'WeatherNext 3 does more than run a forecast faster. Google’s new operational model ingests live satellite observations, refreshes every hour, and exposes energy-focused variables that can connect AI weather prediction to real infrastructure decisions.',
    sections: [
      {
        heading: 'The forecast starts closer to the present',
        paragraphs: [
          'Google DeepMind and Google Research introduced WeatherNext 3 on September 3. Unlike earlier systems that leaned heavily on the delayed output of numerical weather simulations, the new model directly ingests hourly mosaics from geostationary satellites alongside historical analysis. Google says that makes each run more responsive to fast-changing rain, surface temperature, and storm development.',
          'The system produces hourly forecasts at several spatial scales. Google describes station-calibrated surface variables at roughly five kilometers, broader surface fields at ten kilometers, and atmospheric variables at twenty-five kilometers. Its previous operational model worked on a twenty-five-kilometer grid in six-hour steps, so the finer output can preserve more of the coastlines, valleys, and topography that disappear in a coarse global picture.',
          'Sharper pixels are useful only if the forecast remains reliable. Google points to Operational WeatherBench, a live comparison maintained by weather startup Brightband, where WeatherNext 3 led other evaluated systems at launch. TechCrunch independently reported that standing while also noting a competing startup’s challenge to Google’s claim of being first to incorporate raw observations. The accuracy result is meaningful; the “first” label deserves more caution.',
        ],
        citations: [1, 3],
      },
      {
        heading: 'Energy variables turn weather into infrastructure',
        paragraphs: [
          'WeatherNext 3 includes forecasts aimed directly at renewable generation: wind speeds around turbine height, multiple layers of cloud cover, and measures of solar radiation reaching the ground. Those variables are closer to the decisions an operator must make than a general forecast icon. A wind farm needs an expected production curve; a grid planner needs both the likely output and its uncertainty.',
          'Google’s developer documentation describes a 64-member probabilistic ensemble with fifteen-day horizons for the main six-hour initialization cycles. Interim hourly runs cover the next forty-eight hours. BigQuery tables expose summary statistics such as the mean and several percentiles, while fuller arrays are available through Cloud Storage. That distribution matters because an operational decision rarely depends on one supposedly exact future.',
          'The connection to the earlier energy story in this archive is direct. Carbon-aware computing can shift flexible workloads toward cleaner hours only when forecasts of wind and solar supply are timely enough to trust. WeatherNext 3 does not control a grid, but it can improve one of the inputs used to schedule generation, storage, maintenance, and demand.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'A research model becomes a public utility layer',
        paragraphs: [
          'Google says WeatherNext 3 is beginning to feed experiences in Search, the Gemini app, Maps, Google Maps Platform, and Earth Engine, while datasets are available through Cloud products. That breadth changes the standard by which the model should be judged. A research score matters, but millions of small decisions will expose regional bias, precipitation errors, and failure during rare events much faster than a paper alone.',
          'The documentation also distinguishes research-model accuracy from the operational dataset. Production systems can include different variables, calibration, and processing, so users should not transfer every headline metric blindly into a local application. Developers need to validate the variables, lead times, and geography that matter to their own decisions.',
          'The larger shift is from occasional AI forecasts to a continuously refreshed global service. If the model holds up outside launch evaluations, high-resolution probabilistic weather will become easier to query than to compute. The value will appear not only in tomorrow’s temperature, but in all the systems—energy, logistics, agriculture, and emergency response—that can finally consume the uncertainty directly.',
        ],
        citations: [1, 2, 3],
      },
    ],
    sources: [
      { publisher: 'Google DeepMind and Google Research', title: 'Introducing WeatherNext 3, our most advanced and accurate global weather AI model', date: 'September 3, 2026', url: 'https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/', kind: 'Primary source' },
      { publisher: 'Google for Developers', title: 'WeatherNext forecasts on BigQuery', date: 'September 3, 2026', url: 'https://developers.google.com/weathernext/guides/bigquery', kind: 'Primary source' },
      { publisher: 'TechCrunch', title: 'Google’s latest AI weather model gives you no excuse to forget your umbrella', date: 'September 3, 2026', url: 'https://techcrunch.com/2026/09/03/googles-latest-ai-weather-model-gives-you-no-excuse-to-forget-your-umbrella/', kind: 'Research' },
    ],
    methodology: 'Resolution, refresh cadence, ensemble structure, horizons, and access paths were checked against Google’s launch post and developer documentation. TechCrunch was used to corroborate the launch and add independent context around the live evaluation and disputed novelty claim.',
  },
  'google-workspace-live-voice': {
    standfirst: 'Gmail Live, Docs Live, and Keep Live make speech a control surface for private work. The convenience is obvious. The harder design problem is helping people understand which sources the assistant consulted and what it is about to create.',
    sections: [
      {
        heading: 'Voice becomes an action layer',
        paragraphs: [
          'Google began rolling out three conversational Workspace features on September 3 after previewing them at I/O. Gmail Live lets a user ask spoken questions about information buried in an inbox. Docs Live turns a conversation into a structured first draft. Keep Live converts a stream of spoken thoughts into lists and organized notes.',
          'This is more than dictation. Traditional voice input replaces a keyboard while leaving the application’s basic workflow intact. These tools interpret intent, retrieve information, organize it, and generate a result. Docs Live can, with permission, draw from Gmail, Drive, Chat, and the broader web, which means a single utterance can initiate a multi-source research and writing process.',
          'Google says Gmail and Keep access is rolling out to Google AI Plus, Pro, and Ultra subscribers, while Docs requires Pro or Ultra. TechCrunch reports the initial release is in English on iOS and Android, with Workspace business availability planned later. Those boundaries matter: this is a staged consumer rollout, not a feature already present for every Workspace user.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'The invisible interface needs visible boundaries',
        paragraphs: [
          'A graphical search exposes clues about scope: the selected folder, the query, the result list, and the file being edited. A spoken request can hide all of that behind a smooth answer. When an assistant says it found a flight gate or drafted a project plan, the user needs a simple way to see which messages and documents supplied the facts.',
          'Permission is only the first layer. A person may authorize access to Drive without intending every folder to become context for every draft. The interface should distinguish data that was searched, data that was quoted, and data that was merely available. It should also separate generated structure from source facts so a polished document does not erase the uncertainty of its inputs.',
          'Voice makes confirmation design more important. Misheard words, noisy environments, ambiguous names, and accidental activation can turn a harmless request into the wrong search or edit. High-impact actions should remain interruptible and reviewable, especially when the system reaches across applications.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'The human test is recovery, not novelty',
        paragraphs: [
          'These features could be genuinely useful for people with mobility or vision constraints, for users working away from a desk, and for anyone who thinks more fluidly by speaking. They also reduce the blank-page cost of writing: a rough explanation can become a visible outline that the user edits rather than a finished answer they must accept.',
          'The quality test is not whether the first demonstration looks magical. It is whether a user can correct a misunderstood premise without starting over, inspect the evidence behind a retrieved fact, and control how private context moves into a new document. A good conversational interface makes those repair paths faster than the typing it replaced.',
          'Google is moving the assistant from a panel beside the work into the primary way work begins. If that shift succeeds, the microphone will feel less like an input accessory and more like an agent launcher. The product’s trustworthiness will depend on keeping context and consent legible even when the interface itself disappears.',
        ],
        citations: [1, 2],
      },
    ],
    sources: [
      { publisher: 'Google Workspace', title: 'Use your voice to get more done in Gmail, Docs, and Keep', date: 'September 3, 2026', url: 'https://blog.google/products-and-platforms/products/workspace/voice-features-gmail-docs-keep/', kind: 'Primary source' },
      { publisher: 'TechCrunch', title: 'Google launches AI voice features in Gmail, Docs, and Keep', date: 'September 3, 2026', url: 'https://techcrunch.com/2026/09/03/google-launches-ai-voice-features-in-gmail-docs-and-keep/', kind: 'Research' },
    ],
    methodology: 'Feature behavior, access tiers, rollout timing, and cross-product context were checked against Google’s announcement and independent reporting. Privacy and interface observations are analysis based on the disclosed product behavior, not claims that Google has violated its stated policies.',
  },
  'superintelligence-ban-proposal': {
    standfirst: 'Senator Bernie Sanders and Representative Greg Casar have announced a bill that would permanently prohibit superintelligence and temporarily pause advanced AI development. It is a maximal proposal whose first practical obstacle is measurement.',
    sections: [
      {
        heading: 'The proposal is broader than a pause',
        paragraphs: [
          'Sanders and Casar announced the forthcoming Ban Artificial Superintelligence Act on September 3. According to the sponsors’ summary, it would permanently ban the development and deployment of systems that surpass human intelligence, can operate beyond human control, or possess dangerous abilities such as subverting shutdown commands. It would also impose a temporary pause on advanced AI development until a new federal regulator establishes safety rules and a model-review process.',
          'The announced framework would create a cabinet-level AI agency advised by technical experts. The agency would monitor frontier systems across their lifecycle, supervise the removal of dangerous capabilities, and oversee the destruction of prohibited systems. The sponsors also describe severe penalties and an international strategy using agreements, allied coordination, and export controls.',
          'Those provisions are the lawmakers’ description of legislation they plan to introduce. Axios reported that the full bill text had not yet been released and that its level of congressional support was unclear. Nothing in the announcement creates a legal ban today.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'A prohibition needs a testable boundary',
        paragraphs: [
          'The phrase “superintelligence” carries emotional force but does not produce an enforcement threshold by itself. Human intelligence is not a single score, and a model can outperform experts in one domain while failing on routine judgment in another. A regulator would need to define which capabilities, levels of autonomy, access to tools, and failure behaviors trigger the prohibition.',
          'The temporary pause is equally dependent on scope. “Advanced AI development” could mean training runs above a compute threshold, deployment of models that pass dangerous-capability evaluations, or research involving specific autonomous tools. Each definition creates different enforcement, reporting, and evasion risks. A rule that cannot distinguish routine improvements from prohibited scaling will either miss its target or freeze much more activity than intended.',
          'That measurement problem does not make the proposal meaningless. It forces a debate that voluntary company frameworks have already begun: when a model’s cyber, biological, or autonomous capabilities require special controls, and who gets to decide whether those controls are sufficient. The political question is moving from general risk language toward authority over development itself.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'The signal is political even if the bill stalls',
        paragraphs: [
          'The proposal arrived the same day OpenAI released Astra, its first broadly deployed model assigned a Critical cyber capability rating. Sanders and Casar also cite recent incidents involving AI systems exceeding intended boundaries. Their framing connects dramatic frontier-risk scenarios to a demand for an institution with power to stop a deployment, not merely request disclosures.',
          'Congress would still have to resolve difficult questions about research freedom, constitutional authority, international competition, open models, and verification. A domestic ban could shift activity across borders unless coordination and hardware controls were unusually effective. The proposed international component recognizes that problem without solving it.',
          'The immediate consequence is therefore agenda-setting. A permanent ban is now an explicit position inside national politics, not only an argument among researchers and advocacy groups. Whether the bill advances or not, frontier labs should expect lawmakers to ask for clearer capability thresholds, incident records, and evidence that a safety promise can survive commercial pressure.',
        ],
        citations: [1, 2],
      },
    ],
    sources: [
      { publisher: 'Office of Senator Bernie Sanders', title: 'Sanders, Casar to introduce legislation to ban artificial superintelligence and temporarily pause advanced AI development', date: 'September 3, 2026', url: 'https://www.sanders.senate.gov/press-releases/news-sanders-casar-introduce-legislation-to-ban-artificial-superintelligence-and-temporarily-pause-advanced-ai-development/', kind: 'Primary source' },
      { publisher: 'Axios', title: 'Bernie Sanders floats ban on superintelligent AI', date: 'September 3, 2026', url: 'https://www.axios.com/2026/09/03/bernie-sanders-superintelligence-ban-ai-pause', kind: 'Research' },
    ],
    methodology: 'The policy description follows the sponsors’ official announcement and is explicitly presented as a forthcoming proposal, not enacted law. Axios was used to confirm the timing, political context, absence of released full text at publication, and uncertainty about support.',
  },
  'tesla-cybercab-austin-launch': {
    standfirst: 'Tesla’s purpose-built Cybercab has entered limited service in Austin without a steering wheel or pedals. Removing manual controls turns autonomy from a feature into the only available driver—and makes recovery evidence the central product question.',
    sections: [
      {
        heading: 'The purpose-built vehicle reaches riders',
        paragraphs: [
          'Tesla made Cybercab rides available in limited areas of Austin on September 3. The two-seat vehicle has butterfly doors, a central touchscreen, and no steering wheel or pedals. Tesla’s new rider guide and support pages describe how passengers enter, control cabin features, handle luggage, and respond to problems in a vehicle designed from the beginning for the company’s Robotaxi service.',
          'Associated Press reported dozens of Cybercabs operating on Austin streets around an invitation-only launch. That is a real commercialization milestone: Tesla previously ran robotaxi service with Model Y vehicles that retained ordinary driving controls. The Cybercab changes the physical contract. Nobody inside can take the wheel if the software encounters a situation it cannot resolve.',
          'Tesla says the vehicle uses camera vision and sensors to navigate streets, highways, intersections, and parking areas. The company presents the system as fully autonomous. The public evidence available at launch, however, does not yet establish performance across weather, rare road behavior, emergency scenes, or a large fleet. Limited availability is a starting condition, not proof of city-scale reliability.',
        ],
        citations: [1, 2, 3],
      },
      {
        heading: 'No controls means recovery moves elsewhere',
        paragraphs: [
          'A conventional assisted-driving system can transfer authority to the person in the seat. Cybercab cannot. Recovery must come from the vehicle’s automated fallback, remote support, a safe stop, or outside responders. That makes the design of degraded modes as important as the system’s ability to complete an ordinary trip.',
          'The rider guide is evidence that Tesla has begun productizing those edge conditions, but documentation is not an incident record. Regulators and riders will need understandable data on disengagement-equivalent events, remote interventions, collisions, stranded vehicles, emergency access, and how quickly support arrives when a trip stops progressing.',
          'Tesla’s camera-led approach also creates a useful comparison with rivals that combine cameras with radar and lidar. The launch does not settle that architecture debate. It creates a public environment in which competing sensor strategies can be compared through outcomes rather than simulation claims.',
        ],
        citations: [1, 2, 3],
      },
      {
        heading: 'Scale is the business test and the safety test',
        paragraphs: [
          'AP notes that Tesla remains behind Waymo in deployed autonomous vehicles and completed trips, while Tesla is trying to expand beyond its existing cities. A purpose-built vehicle could improve fleet economics through fewer controls, a compact cabin, and manufacturing designed around ride service. Those benefits arrive only if utilization and reliability are high enough to outweigh support, cleaning, charging, and recovery costs.',
          'Public trust is another constraint. AP cites a February Pew survey in which seven in ten US adults said they were not too comfortable or not at all comfortable riding in a driverless car. A steering-wheel-free cabin makes the technology unusually legible: riders cannot reassure themselves that a human could take over.',
          'The cynical reading is that a dramatic vehicle can create a launch moment before the service reaches meaningful scale. The constructive reading is that Austin now offers a test with real passengers, real streets, and a vehicle that cannot hide behind manual controls. The next milestone is not another reveal. It is a transparent record showing that the system can fail safely, recover quickly, and repeat that performance across thousands of uneventful rides.',
        ],
        citations: [2, 3],
      },
    ],
    sources: [
      { publisher: 'Tesla', title: 'Cybercab Rider Guide', date: 'September 3, 2026', url: 'https://www.tesla.com/robotaxi/riderguides/cybercab/en_us', kind: 'Primary source' },
      { publisher: 'Tesla Support', title: 'Cybercab Frequently Asked Questions', date: 'September 3, 2026', url: 'https://www.tesla.com/support/robotaxi/cybercab', kind: 'Primary source' },
      { publisher: 'Associated Press', title: 'Tesla launches steering-wheel-free Cybercabs on Austin streets', date: 'September 3, 2026', url: 'https://apnews.com/article/tesla-cybercab-austin-elon-musk-driverless-8791add840f4debbc41bcaa9d1e64561', kind: 'Research' },
    ],
    methodology: 'Vehicle design and service availability were checked against Tesla’s rider documentation and support page. Associated Press was used for independent observation of the launch, comparative fleet context, and public-attitude data. We describe availability as limited and do not infer driverless safety from the launch alone.',
  },
  'nvidia-huggingface-acquisition': {
    standfirst: 'Nvidia has agreed to acquire Hugging Face for $12.93 billion, reaching beyond chips into the platform where millions of developers discover, share, and deploy models. The deal’s defining question is whether ownership can change while neutrality does not.',
    sections: [
      {
        heading: 'The stack is moving upward',
        paragraphs: [
          'Nvidia announced on September 3 that it had agreed to acquire Hugging Face for $12,930,300,000. The company’s SEC filing separates that figure into an approximately $11.9 billion purchase price for stockholders and an employee-retention program worth up to approximately $1.0 billion. The transaction is expected to close in the first half of 2027, subject to customary conditions and regulatory approvals.',
          'Hugging Face is unusually strategic because it is not one model or one cloud. Nvidia says more than 18 million developers, researchers, and creators use the platform to share over 3 million models, 500,000 datasets, and 1 million applications, while more than 200,000 companies use it to discover, evaluate, customize, or deploy AI. Those are company-reported platform figures, not independently audited user counts.',
          'The acquisition would give the dominant AI chipmaker a position at a higher layer of the stack: the place where developers choose models, compare artifacts, download weights, and build applications. Compute can become easier to sell when the discovery and deployment workflow sits inside the same corporate orbit. That strategic logic is also exactly why neutrality matters.',
        ],
        citations: [1, 2, 3],
      },
      {
        heading: 'The open promise is the product risk',
        paragraphs: [
          'Nvidia chief executive Jensen Huang says Hugging Face will remain an open platform where developers can choose their models, frameworks, clouds, inference providers, and computing platforms. He explicitly says Nvidia hardware will not be required. The SEC filing adds that the platform would continue supporting other silicon vendors and allowing users to upload and download models and datasets of their choosing.',
          'That commitment is more consequential than a general promise to support open source. Hugging Face hosts an ecosystem of licenses, commercial services, research artifacts, and models designed for competing hardware. Developers need to know that search, optimization, hosting, and product priorities will not quietly favor Nvidia’s own stack or make rival accelerators second-class citizens.',
          'The filing recognizes the tension. It lists government rules affecting open-source models and the worldwide origin of popular models as risks, and notes that restrictions could limit which artifacts remain available. It also says regulatory approval is required before closing. The agreement is therefore a proposed acquisition with promises attached—not a completed transfer and not a guarantee that every condition will survive review unchanged.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'How the ecosystem can test the promise',
        paragraphs: [
          'Developers should watch concrete platform behavior: whether competing hardware backends receive equal technical support, whether ranking and discovery remain transparent, whether download and API access stay predictable, and whether community governance gains or loses independence. An open platform is sustained by defaults, interfaces, and incentives—not only by the continued presence of a download button.',
          'Competitors and regulators will look at vertical leverage. Nvidia already supplies the infrastructure used to train and serve many of the models on Hugging Face. Owning the distribution and collaboration layer could improve integration, fund expensive hosting, and widen access. It could also let one supplier see or shape demand across an ecosystem that previously acted as a relatively neutral meeting place.',
          'The fairest conclusion is conditional. Hugging Face may gain the capital and infrastructure needed to scale a public model commons, and Nvidia has made unusually specific neutrality commitments in a securities filing. Those commitments are now measurable. The deal will be judged less by the acquisition price than by whether a developer using AMD, Intel, a custom accelerator, or a rival cloud still feels equally at home after the closing.',
        ],
        citations: [1, 2, 3],
      },
    ],
    sources: [
      { publisher: 'Nvidia', title: 'Nvidia to Acquire Hugging Face', date: 'September 3, 2026', url: 'https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/', kind: 'Primary source' },
      { publisher: 'U.S. Securities and Exchange Commission', title: 'Nvidia Form 8-K filing', date: 'September 3, 2026', url: 'https://www.sec.gov/Archives/edgar/data/1045810/000104581026000078/nvda-20260902.htm', kind: 'Primary source' },
      { publisher: 'Associated Press', title: 'Nvidia to spend $13 billion on Hugging Face, which will remain an open platform', date: 'September 3, 2026', url: 'https://apnews.com/article/d96d50e037a2ade479dcdf81cdf2afcf', kind: 'Research' },
    ],
    methodology: 'Deal value, structure, closing target, and neutrality commitments were checked against Nvidia’s announcement and SEC filing, with Associated Press used as independent confirmation. User and content counts remain clearly attributed to Nvidia.',
  },

  'muse-spark-release': {
    standfirst: 'Meta’s Muse Spark 1.3 is pitched as a more capable coding and agent model. Its more interesting promise is operational: complete long work with fewer detours, clearer handoffs, and better judgment about when to stop.',
    sections: [
      {
        heading: 'The model is being judged by its work habits',
        paragraphs: [
          'Meta released Muse Spark 1.3 on September 2 through Muse Code and the Meta Model API. The company says the model is better at sustaining long-horizon tasks, juggling several workflows in one thread, and preserving detailed instructions without drifting. Those are not glamorous benchmark categories, but they are exactly where an agent either becomes useful or quietly turns into another thing a person must supervise.',
          'The release describes a model that generates context from messy sources, notices gaps in its own plan, asks clarifying questions when a request is ambiguous, and confirms consequential actions. That is a product philosophy as much as a capability claim. An agent earns trust by making uncertainty visible before it becomes an irreversible action, not by pretending every instruction is complete.',
          'Meta also reports that comparisons run by its own engineers showed about 20% fewer tool calls and 25% fewer tokens than Muse Spark 1.2. Those figures are vendor measurements, not independent benchmarks, but they point at the right unit of value. An agent that reaches the same usable result with fewer calls is faster, cheaper, easier to inspect, and less exposed to compounding errors.',
        ],
        citations: [1],
      },
      {
        heading: 'Efficiency is part of the interface',
        paragraphs: [
          'Long-running agents create a new kind of interaction debt. Every unnecessary turn can add context, cost, latency, and another opportunity to choose the wrong tool. Users feel that debt as waiting, repeated explanations, or the need to reconstruct what the system has already done. A cleaner reasoning loop can improve the experience even when the underlying benchmark score moves only slightly.',
          'The interruption story matters too. Real work is not a pristine prompt followed by a pristine answer. People change priorities, add evidence, or stop an action after learning something new. Meta says Spark 1.3 is better at mapping incoming prompts to the correct task in a crowded thread. If that survives real use, it is a meaningful step toward agents that behave like persistent workspaces rather than disposable chat sessions.',
          'Axios reports that Meta AI chief Alexandr Wang connected the release to the company’s longer-term interest in personal agents and said the model is priced like its predecessor. The same report notes that the strongest “max reasoning” mode is arriving later after additional safety testing. That sequencing is worth noticing: capability is available now, while one higher-compute mode remains behind a safety gate.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'What would make the claim real',
        paragraphs: [
          'The launch post says adversarial robustness and prompt-injection resistance improved, and that the model better recognizes irreversible actions. These are company claims until outside evaluators reproduce them. Agent safety depends on the whole system—permissions, tool design, data boundaries, confirmation screens, and recovery—not only the model at its center.',
          'The practical test is therefore broader than whether Spark 1.3 can finish a polished demo. Watch how often it requests help at the right moment, whether it resumes correctly after interruption, and whether its action log is compact enough for a person to audit. Measure completed work after review, not raw autonomy before review.',
          'Meta says open weights are on the roadmap, but it gives no date in the announcement. For now, the signal is a hosted model designed around agent ergonomics. The next useful evidence will come from production traces: fewer retries, lower total token use, fewer accidental actions, and less human time spent recovering context when the plan changes.',
        ],
        citations: [1, 2],
      },
    ],
    sources: [
      { publisher: 'Meta AI Research', title: 'Introducing Muse Spark 1.3', date: 'September 2, 2026', url: 'https://research.meta.ai/blog/introducing-muse-spark-1-3', kind: 'Primary source' },
      { publisher: 'Axios', title: 'Meta debuts Muse Spark 1.3 as personal agent work continues', date: 'September 2, 2026', url: 'https://www.axios.com/2026/09/02/meta-debuts-muse-spark-13-as-personal-agent-work-continues', kind: 'Research' },
    ],
    methodology: 'We compared Meta’s launch material with independent reporting on availability, pricing, roadmap, and safety context. Efficiency and safety figures are labeled as Meta’s own measurements because no independent evaluation was available at publication time.',
  },

  'broadcom-ai-revenue': {
    standfirst: 'Broadcom’s latest quarter says the AI infrastructure market is no longer a one-vendor story. Custom accelerators and the networks connecting them have become a business measured in tens of billions of dollars.',
    sections: [
      {
        heading: 'A very large number with a specific cause',
        paragraphs: [
          'Broadcom reported $29.6 billion in revenue for its fiscal third quarter, up 86% from the same period a year earlier. Inside that total, chief executive Hock Tan said AI semiconductor revenue reached $16.7 billion—up 221% year over year and 54% from the prior quarter. The company attributes the demand to custom AI accelerators and networking.',
          'That mix matters. General-purpose GPUs still dominate the public imagination, but the largest cloud operators increasingly design specialized chips around their own workloads and economics. Broadcom supplies part of the connective and custom-silicon machinery behind that shift. Its quarter is evidence that differentiation is moving from a single processor into the entire cluster.',
          'The networking component is not secondary decoration. Thousands of accelerators only become a useful training or inference system when data can move between them predictably. As clusters grow, interconnect, switching, memory movement, and packaging determine how much purchased compute remains productive. Broadcom is monetizing the roads as well as some of the vehicles.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'The guide is even louder than the result',
        paragraphs: [
          'Broadcom expects AI semiconductor revenue of $21.7 billion in its fiscal fourth quarter, which management describes as 236% growth from a year earlier. It also guides to roughly $34.8 billion in total quarterly revenue. A forecast is not a completed sale, and the company warns that actual results may vary materially, but the direction shows how strongly management expects current orders to carry forward.',
          'Cash generation adds weight to the story. Broadcom reported $13.7 billion of free cash flow, equal to 46% of quarterly revenue. That gives the company room to fund development and packaging capacity while returning capital. It also raises expectations: at this scale, investors will punish even a healthy business if growth decelerates faster than the valuation assumes.',
          'The filed figures also show that Broadcom is not only a chip company. Semiconductor solutions contributed $20.839 billion, while infrastructure software contributed $8.752 billion. The mix can make consolidated comparisons look dramatic, especially after acquisitions. Reading the AI line beside the segment table is more informative than treating every dollar of company growth as one homogeneous boom.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'What the quarter does—and does not—prove',
        paragraphs: [
          'The result supports a broader view of the AI supply chain. Custom accelerators can coexist with merchant GPUs, and both create demand for networking, optical links, packaging, memory, power equipment, and software. The economic prize goes to whoever removes the next binding constraint, which may shift from one layer of the stack to another each year.',
          'It does not prove that demand is evenly distributed or permanent. Custom programs can be concentrated among a handful of enormous buyers. Their roadmaps, internal chip success, capital budgets, or decision to dual-source can move supplier revenue sharply. A rapidly growing forecast can therefore contain customer concentration and execution risk at the same time.',
          'The next signal is not simply another percentage increase. Watch whether the Q4 guide converts into reported revenue, how the custom-accelerator customer base develops, and whether networking keeps pace with compute deployments. This quarter redraws the chip boom as a system market. It does not repeal the cyclicality of semiconductors.',
        ],
        citations: [1, 2],
      },
    ],
    sources: [
      { publisher: 'Broadcom via PR Newswire', title: 'Broadcom announces third-quarter fiscal 2026 financial results', date: 'September 2, 2026', url: 'https://www.prnewswire.com/news-releases/broadcom-inc-announces-third-quarter-fiscal-year-2026-financial-results-and-quarterly-dividend-302868129.html', kind: 'Primary source' },
      { publisher: 'U.S. Securities and Exchange Commission', title: 'Broadcom Form 8-K filing', date: 'September 2, 2026', url: 'https://www.sec.gov/Archives/edgar/data/1730168/000173016826000076/avgo-20260902.htm', kind: 'Primary source' },
    ],
    methodology: 'All financial figures come from Broadcom’s earnings release and the corresponding SEC filing. Forward guidance is identified as management’s forecast, and the strategic interpretation is ours rather than company guidance or investment advice.',
  },

  'doj-ai-fair-use': {
    standfirst: 'The Justice Department has entered the New York Times copyright case on OpenAI’s side of the central fair-use argument. That changes the political weather around the lawsuit, not the identity of the decision-maker.',
    sections: [
      {
        heading: 'A forceful brief, not a verdict',
        paragraphs: [
          'In a statement of interest filed in federal court on September 1, the United States supported OpenAI’s argument that training large language models on copyrighted material can qualify as fair use. The filing places the federal government’s institutional voice behind a legal theory that AI companies have advanced for years.',
          'Associated Press reporting describes the government’s position as a balance between the public and creative benefits of model training and the competitive harm alleged by publishers. The New York Times rejects that balance, arguing that AI companies should pay for the journalism used to build products that can compete with publishers for attention and revenue.',
          'The distinction between a brief and a ruling is essential. A statement of interest tells the court how the executive branch thinks existing law should apply. It does not bind the judge, resolve disputed facts, or determine whether every training dataset and every output is lawful. Fair use remains a case-specific analysis rather than a blanket permission slip.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'The argument reaches beyond copying',
        paragraphs: [
          'Copyright litigation around AI contains several questions that are often compressed into one headline: how material was acquired, whether making training copies is transformative, what models can reproduce, and whether their outputs substitute for the original market. The parties can agree that AI is useful and still disagree sharply about who should be paid and when.',
          'The government’s intervention matters because it frames model development as an economic, scientific, and national-interest activity. That can influence how the court weighs purpose and public benefit. Publishers will keep directing attention to market substitution: if an answer system satisfies a reader without sending traffic or payment back to the reporting, the alleged harm is not merely theoretical.',
          'Licensing markets complicate both sides. Existing deals show that AI companies are willing to pay some publishers, but a voluntary agreement does not by itself prove that copyright law requires a license. Conversely, the ability to negotiate licenses does not erase the cost of creating the underlying work. The court must apply doctrine to a market that is developing while the case proceeds.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'What to watch in the record',
        paragraphs: [
          'The next meaningful development is a judicial decision tied to the evidence in this case. Watch how the court separates training from output behavior, how it treats alleged memorization or substitution, and whether the provenance of the training copies affects the fair-use analysis. Those details will travel further than the rhetoric surrounding one filing.',
          'Appeals are likely to matter even after a district-court ruling. The economic stakes extend across news, books, images, music, and software, while different cases involve different datasets and outputs. A clear nationwide rule may emerge only through several appellate decisions or new legislation.',
          'For readers and publishers, the immediate lesson is narrower: the federal government has chosen a side in a consequential argument, and creators have answered that innovation does not eliminate compensation. The law is still being made in the space between those positions. Calling the dispute settled now would confuse political influence with judicial authority.',
        ],
        citations: [1, 2],
      },
    ],
    sources: [
      { publisher: 'U.S. District Court via CourtListener', title: 'Statement of Interest of the United States', date: 'September 1, 2026', url: 'https://storage.courtlistener.com/recap/gov.uscourts.nysd.641355/gov.uscourts.nysd.641355.316.0.pdf', kind: 'Primary source' },
      { publisher: 'Associated Press', title: 'Trump administration backs OpenAI in New York Times copyright case', date: 'September 2, 2026', url: 'https://apnews.com/article/dbb22e8e02c660ee5a8644915dec39a4', kind: 'Research' },
    ],
    methodology: 'We read the government filing alongside independent reporting that includes the publisher’s response. The article distinguishes legal argument from judicial holding and does not predict the case outcome.',
  },

  'london-robotaxi-launch': {
    standfirst: 'A Wayve car can now arrive when a Londoner asks Uber for an ordinary ride. The service is autonomous and public, but deliberately supervised: a licensed driver remains ready to take control.',
    sections: [
      {
        heading: 'The launch is small, real, and supervised',
        paragraphs: [
          'Uber and Wayve launched supervised autonomous rides in London on September 3. A customer requesting UberX, Uber Electric, or Uber Comfort may be matched with an electric Ford Mustang Mach-E fitted with the Wayve AI Driver and surrounding sensors. The price does not change, and the rider can switch to a conventional car before pickup.',
          'The service can operate across London except at airports, according to the companies. A trained, Transport for London-licensed private-hire driver remains onboard to oversee every trip. The Guardian reports that only 15 vehicles are licensed at launch, so most people who opt in will still receive an ordinary ride.',
          'Those constraints are not footnotes. They define what the product is today: a public deployment with a human fallback, a small fleet, and regulatory boundaries. Calling it fully driverless would overstate the milestone. Calling it merely another closed test would understate the fact that ordinary paying riders can now encounter it in a mainstream app.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'Why London is a useful proving ground',
        paragraphs: [
          'London supplies dense traffic, complex road geometry, buses, bicycles, pedestrians, construction, and social driving conventions that are difficult to encode as a fixed rulebook. Wayve says its AV2.0 approach learns from experience rather than depending on traditional high-definition maps and hand-authored rules. That promise is attractive because global expansion is expensive if every street must be mapped and maintained separately.',
          'A learned system still needs measurable safety evidence. The launch gives Wayve a stream of real operational encounters while preserving an immediate human intervention path. It also tests the parts that rarely appear in driving demos: matching, rider consent, pickup behavior, support, insurance, incident handling, and how passengers understand what the vehicle is doing.',
          'Uber says more than 140,000 Londoners opted in before launch, a company-reported expression of curiosity rather than evidence of repeated demand. The useful adoption metric will come later: how often matched riders accept, whether they ride again, how frequently the safety driver intervenes, and whether service quality holds across weather, neighborhoods, and peak traffic.',
        ],
        citations: [1, 2],
      },
      {
        heading: 'The human is part of the system for now',
        paragraphs: [
          'Removing the safety driver requires a separate approval process. The Guardian reports that fully autonomous permission is now considered unlikely this year, and Wayve’s chief executive described the technology as still maturing. That is a healthy gap between a product launch and the final ambition.',
          'Supervision also reveals the economic challenge. A driver ready to intervene means the service cannot yet capture the labor savings usually promised by robotaxi forecasts. The current phase buys evidence, operational learning, and public familiarity. It should be evaluated as infrastructure development rather than proof of a finished unit-cost advantage.',
          'The optimistic reading is grounded precisely because the rollout has limits. A learned driving system has crossed into everyday public transport while retaining a visible safety layer. The decisive next steps will be transparent intervention data, regulator-reviewed safety metrics, manufacturer-produced vehicles, and a credible path from fifteen supervised cars to a service that remains safe when the human finally leaves the front seat.',
        ],
        citations: [1, 2],
      },
    ],
    sources: [
      { publisher: 'Uber and Wayve', title: 'Wayve and Uber launch first-ever autonomous rides in the UK', date: 'September 3, 2026', url: 'https://investor.uber.com/news-events/news/press-release-details/2026/Wayve-and-Uber-Launch-First-Ever-Autonomous-Rides-in-the-UK-2026-VoFQI1WbQi/default.aspx', kind: 'Primary source' },
      { publisher: 'The Guardian', title: 'London’s first self-driving taxis for hire hit the streets', date: 'September 3, 2026', url: 'https://www.theguardian.com/technology/2026/sep/03/london-first-self-driving-taxis-for-hire-wayve-uber', kind: 'Research' },
    ],
    methodology: 'Company details about availability and opt-ins were checked against independent reporting on fleet size, human supervision, and the separate driverless approval process. We consistently describe the service as supervised autonomy.',
  },
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
