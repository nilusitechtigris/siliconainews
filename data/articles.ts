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
      { publisher: 'Broadcom Investor Relations', title: 'Broadcom announces third-quarter fiscal 2026 financial results', date: 'September 2, 2026', url: 'https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-third-quarter-fiscal-year-2026-financial', kind: 'Primary source' },
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
};
