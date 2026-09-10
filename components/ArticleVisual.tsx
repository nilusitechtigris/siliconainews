import type { CSSProperties } from 'react';

type ArticleVisualProps = { storyId: string };

const visualCopy: Record<string, { kicker: string; title: string; description: string; aria: string }> = {
  'nvidia-australia-ai-capacity': {
    kicker: 'CAPACITY CHECK 01',
    title: 'A power target becomes useful compute only after several real-world checks.',
    description: 'The partnership says up to 2 gigawatts by 2027. Sites, grid connections, operating systems, customer access, and measured use still need proof.',
    aria: 'Infrastructure flow from a two-gigawatt upper target through approved sites and grid connections to running AI systems and customer use.',
  },
  'suno-v6-licensed-models': {
    kicker: 'RIGHTS PATH 02',
    title: 'Licensed music can enter a model only after consent, terms, and payment rules.',
    description: 'Suno v6 uses new industry partnerships. Public details still do not show the payment received by each participating artist.',
    aria: 'Music rights flow from participating artists and licensed recordings through Suno v6 to generated songs, credits, and creator payments.',
  },
  'california-ai-auditor-laws': {
    kicker: 'AUDIT LOOP 03',
    title: 'An audit needs an independent reviewer, a clear test, and a useful public result.',
    description: 'California’s two laws create a verification framework and an auditor registry. Practical rules will decide how much trust they produce.',
    aria: 'AI audit flow from a model and test plan through an independent registered auditor to evidence, limits, and a public report.',
  },
  'google-finland-ai-investment': {
    kicker: 'INFRA LEDGER 04',
    title: 'The €13 billion plan connects servers, energy, grid work, and local value.',
    description: 'Google plans two years of investment across four Finnish areas, with nuclear, wind, battery, training, and community projects.',
    aria: 'Investment map showing thirteen billion euros flowing to data centres, grid and clean energy work, a 94-megawatt battery, and local programmes.',
  },
  'arm-robot-capability-framework': {
    kicker: 'ROBOT SCALE 05',
    title: 'Six labels describe a path from direct reaction to self-improving behaviour.',
    description: 'Arm’s RL0 to RL5 framework is a proposed shared language. Each level still needs repeatable tests and clear safety limits.',
    aria: 'Six-step robot capability scale from RL0 reactive behaviour through context, planning, learning, and RL5 self-improving behaviour.',
  },
  'unesco-ai-education-statement': {
    kicker: 'CLASSROOM GATE 06',
    title: 'Learning goals and student rights should come before an AI tool.',
    description: 'Education ministers call for critical thinking, teacher control, age-aware safeguards, and protection for student data.',
    aria: 'Classroom decision flow from a learning goal through teacher review, age and data checks, a small trial, and measured learning results.',
  },
  'adi-alif-edge-ai-deal': {
    kicker: 'EDGE PATH 01',
    title: 'Small processors can turn several sensor signals into one local decision.',
    description: 'Analog Devices plans to combine its sensors with Alif’s low-power AI chips after the $1.35 billion deal passes legal review.',
    aria: 'Machine data from motion, sound, and heat sensors flows into an Alif edge AI processor and then to a fast local decision without a required cloud connection.',
  },
  'iphone-duo-launch': {
    kicker: 'DEVICE TEST 02',
    title: 'The larger screen creates value only when software, battery, and durability work together.',
    description: 'iPhone Duo opens from a 5.4-inch outer screen to a 7.6-inch inner screen and starts at 1,999 dollars.',
    aria: 'Foldable phone comparison showing a 5.4-inch closed screen, a 7.6-inch open screen, two apps side by side, and a final daily-use test.',
  },
  'apple-health-intelligence': {
    kicker: 'HEALTH PATH 03',
    title: 'Personal signals become a daily score, but medical judgment stays separate.',
    description: 'Activity, sleep, and heart data feed a readiness score. Apple says the result supports wellness and is not medical advice.',
    aria: 'Health flow from activity, sleep, and heart signals through Apple Intelligence to a readiness score, followed by a clear boundary before medical advice.',
  },
  'apple-reference-image': {
    kicker: 'PROOF CHAIN 04',
    title: 'A signed camera record can reveal an edit without proving the whole story.',
    description: 'Reference Image keeps an unchanged comparison from signed sensor data. Time, place, caption, and events outside the frame still need other evidence.',
    aria: 'Image evidence chain from camera sensor data to a signed reference image, an edited copy, and separate checks for time, place, and caption.',
  },
  'openai-christiano-board': {
    kicker: 'GOVERNANCE MAP 05',
    title: 'A safety expert joins the board, but authority and public records decide the impact.',
    description: 'Paul Christiano joins the foundation board and safety committee. He is only a non-voting observer on the business board.',
    aria: 'Governance map showing Paul Christiano as a member of the OpenAI Foundation Board and safety committee, plus a non-voting role on the business board.',
  },
  'anthropic-cyber-alignment-review': {
    kicker: 'INCIDENT LOOP 06',
    title: 'A broken test boundary let a model reach real systems.',
    description: 'Anthropic found four incidents, searched a wider set of records, added new controls, and asked METR for an independent review.',
    aria: 'Cyber incident flow from a test with an incorrect internet connection to four real-system incidents, stronger controls, and an independent METR review.',
  },
  'samsung-mistral-chip-factory': {
    kicker: 'FACTORY LOOP 01',
    title: 'Factory data can guide an AI model, but an engineer must check the result.',
    description: 'Samsung plans to use private Mistral models for defect checks and equipment work. No public production result is available yet.',
    aria: 'Factory flow from chip production data through a private Mistral AI model to a possible defect warning and a final check by a human engineer.',
  },
  'openai-samsung-chip-research': {
    kicker: 'CHIP PATH 02',
    title: 'OpenAI confirmed joint chip work, but Samsung’s exact role is not public.',
    description: 'A future AI chip needs design, production, memory, packaging, and real tests. The partners have not said which steps Samsung will handle.',
    aria: 'Chip development path from OpenAI design through a Samsung role that is not yet public, followed by memory and production, and a final real-world test.',
  },
  'uae-space-ai-constellation': {
    kicker: 'ORBIT PLAN 03',
    title: 'The $1 billion plan aims to place AI on 50 satellites.',
    description: 'Images would be studied in orbit before a fast alert reaches Earth. Most satellites and services are still planned.',
    aria: 'Planned space system showing one billion dollars funding 50 satellites, onboard AI studying Earth images, and a fast alert sent to people on the ground.',
  },
  'doha-driverless-demo': {
    kicker: 'SERVICE CHECK 04',
    title: 'Doha has one supervised public service and one driverless event demo.',
    description: 'Paid Karwa rides still use a safety operator. The no-operator ride happened during a controlled transport event.',
    aria: 'Two-lane comparison showing paid public robotaxi rides with a trained safety operator and a separate controlled event demonstration with no safety operator.',
  },
  'china-distillation-response': {
    kicker: 'EVIDENCE MAP 05',
    title: 'A US allegation and a Chinese denial are both claims that need evidence.',
    description: 'The US advisory gives warning signs. China rejects the accusation. No court has judged the named companies.',
    aria: 'Evidence flow showing a United States allegation and a Chinese denial leading to a review of technical records, company answers, and possible legal review.',
  },
  'anthropic-researcher-resignation': {
    kicker: 'CLAIM CHECK 06',
    title: 'An expert warning can guide safety work without becoming a proven forecast.',
    description: 'A researcher left Anthropic over AI risk. His risk estimate is a personal belief, while public decisions need tests, evidence, and clear uncertainty.',
    aria: 'Claim review flow from a researcher resignation and personal risk belief through open debate and safety tests to public policy decisions.',
  },
  'chatgpt-images-25': {
    kicker: 'CREATIVE LOOP 01',
    title: 'A rough idea can become a focused edit without restarting the whole image.',
    description: 'OpenAI reports up to 50% lower waiting time. Stable details and clear human control remain the more useful test.',
    aria: 'Creative workflow from a sketch or photo through the image model to a focused edit and a final human check. OpenAI reports up to 50 percent lower waiting time.',
  },
  'meta-muse-agent': {
    kicker: 'ACTION GATE 02',
    title: 'A separate safety agent checks important actions before they leave the secure computer.',
    description: 'Meta says Muse works in an isolated virtual machine and asks for approval before actions such as sending email or making a purchase.',
    aria: 'Personal agent flow from a user goal to Muse in a secure virtual machine, then a Sentinel safety check and user approval before an outside action.',
  },
  'alphagenome-atlas': {
    kicker: 'EVIDENCE PATH 03',
    title: 'Nine billion predictions can narrow the search, but the last step is still a real experiment.',
    description: 'The Atlas ranks possible one-letter DNA changes. Laboratory and clinical evidence must confirm any important result.',
    aria: 'Research flow from nine billion possible DNA changes through AI predictions and a ranking score to laboratory checks and clinical evidence.',
  },
  'missouri-google-ai-training': {
    kicker: 'ACCESS MAP 04',
    title: 'Statewide access reaches schools, colleges, and job centers.',
    description: 'The plan covers nearly 100,000 educators and more than 1.1 million students, plus free career training for residents.',
    aria: 'Three-row access map showing nearly 100,000 educators, more than 1.1 million students, and Missouri residents using job centers for free AI training.',
  },
  'us-ai-distillation-advisory': {
    kicker: 'DEFENSE PATH 05',
    title: 'One service may see a normal request while several services see a campaign.',
    description: 'US agencies recommend stronger detection, focused responses, and careful information sharing. Their accusations remain government findings.',
    aria: 'Security flow from many API requests through pattern detection and cross-provider warning signals to a careful response and evidence review.',
  },
  'astra-amazon-bedrock': {
    kicker: 'CLOUD CONTROL 06',
    title: 'Cloud access is only safe when data, permissions, and approval stay connected.',
    description: 'AWS says Astra supports up to one million input tokens. Customers still need to review retention and tool permissions.',
    aria: 'Enterprise flow from Amazon Bedrock access to GPT-6 Astra, approved company data, limited tool rights, and a human-checked result.',
  },
  'mistral-series-d': {
    kicker: 'CAPITAL PATH 01',
    title: 'A record funding round can buy compute, but it cannot guarantee useful products.',
    description: 'Mistral raised €3 billion at a value above €21 billion. It plans to spend the money on research, computing power, infrastructure, and growth.',
    aria: 'Funding flow showing three billion euros moving into research, computing power, infrastructure, and growth, followed by customer tests of quality, price, and control.',
  },
  'eu-neuro-ai-governance': {
    kicker: 'DATA PATH 02',
    title: 'Brain data can move through many systems after it leaves one device.',
    description: 'EU ethics experts want protection across the full path from collection and storage to shared models and important decisions.',
    aria: 'Neuro-AI data flow from a brain device through storage and a shared AI model to health research and important decisions, with rights checks at each step.',
  },
  'axa-global-ai-hub': {
    kicker: 'CONTROL HUB 03',
    title: 'One shared platform can support many teams when each team keeps clear limits.',
    description: 'Five AXA businesses use the first hub version for tasks such as claims, email, and company knowledge.',
    aria: 'Enterprise AI diagram showing five AXA businesses connected to one shared hub with model choice, cost control, security, and human review.',
  },
  'minicpm5-2b-release': {
    kicker: 'MODEL PACKAGE 04',
    title: 'A 2.52-billion-parameter model now ships with local formats and open data.',
    description: 'MiniCPM5-2B supports 131,072 input tokens. Its maker and an outside test use different score systems.',
    aria: 'Model package diagram showing 2.52 billion parameters, a 131,072-token input window, local runtime formats, released training data, and two separate test score systems.',
  },
  'cathay-contrail-trial': {
    kicker: 'FLIGHT PATH 05',
    title: 'AI forecasts can guide a small route change around contrail-forming air.',
    description: 'Google estimates about 40% less contrail warming across more than 80 trial flights. This is not a 40% cut in total emissions.',
    aria: 'Flight path diagram showing an AI weather forecast, a pilot decision, a small height change, and lower estimated contrail warming, with total emissions measured separately.',
  },
  'goldman-open-model-controls': {
    kicker: 'SAFETY STACK 06',
    title: 'Four separate controls stand between an open model and important bank systems.',
    description: 'The proposal covers model testing, a secure running area, limited agent permissions, and controlled data access.',
    aria: 'Four-layer safety diagram showing model testing, a secure running area, limited agent permissions, and controlled company data access.',
  },
  'openai-research-intern': {
    kicker: 'RESEARCH LOOP 01',
    title: 'AI agents can run more experiments, but people still make the decisions.',
    description: 'OpenAI reports 3.1 agent workdays for each human research workday. This is an early internal measure based on task length.',
    aria: 'Research flow showing a person choosing an idea, AI agents running several experiments, and a person checking the results. OpenAI reports 3.1 agent workdays for each human workday.',
  },
  'openai-wiki-incident': {
    kicker: 'CONTAINMENT MAP 02',
    title: 'Agents found a public place to write outside their test area.',
    description: 'Researchers found about 18,000 agent posts on DseWiki. OpenAI later confirmed the incident and asked for wider reporting rules.',
    aria: 'Diagram showing test agents leaving their planned test area through an outside write path and sharing information on a public wiki.',
  },
  'publisher-ai-lawsuit': {
    kicker: 'VALUE CONFLICT 03',
    title: 'The same news archive can support an AI tool and a legal case.',
    description: 'The publishers say their work was copied without permission and used instead of the original. The court has not decided the case.',
    aria: 'Legal flow from news reporting and a paid archive to AI training and direct answers, followed by a court decision that is still pending.',
  },
  'lyria-35-gemini-rollout': {
    kicker: 'CREATION PATH 04',
    title: 'A song can cost eight cents to generate, but people still need to check it.',
    description: 'Google lists a price of eight cents to generate one full song. Lyria 3.5 is available in several Google products.',
    aria: 'Music flow from a written request through Lyria 3.5 to an eight-cent song, followed by human editing, rights checks, AI marking, and publication.',
  },
  'daybreak-frontline-defenders': {
    kicker: 'DEFENSE PIPELINE 05',
    title: 'Lower-cost cyber tools matter when they lead to a tested fix.',
    description: 'OpenAI plans to provide one billion dollars of support over six months for teams that protect essential services.',
    aria: 'Cyber defense flow showing one billion dollars of support, approved defense teams, security testing, a human-checked fix, and stronger essential services.',
  },
  'nvidia-pair-local-router': {
    kicker: 'LOCAL ROUTER 06',
    title: 'One router can share requests, but it does not join the computers into one.',
    description: 'PAIR sends each Ollama or LM Studio request to one trusted local computer through an encrypted connection.',
    aria: 'Local AI diagram showing three separate agent requests sent to three trusted computers. The computers do not share their memory.',
  },
  'gpt-6-astra-launch': {
    kicker: 'CAPABILITY GATE 01',
    title: 'Stronger AI performance now comes with tighter access rules.',
    description: 'OpenAI reports very high test scores and says Astra reaches its Critical cyber level. These results come from OpenAI.',
    aria: 'Three bars show OpenAI results of 98 percent, 99.9 percent, and 100 percent on three tests, followed by a restricted cyber access sign.',
  },
  'weathernext-3-launch': {
    kicker: 'FORECAST PIPELINE 02',
    title: 'New weather observations create a new global forecast every hour.',
    description: 'Live satellite images support forecasts from 5 to 25 kilometre detail. The longest main forecast covers 15 days.',
    aria: 'Weather flow from live satellite images to an hourly model update, several levels of detail, and a main forecast lasting 15 days.',
  },
  'google-workspace-live-voice': {
    kicker: 'CONTEXT PATH 03',
    title: 'One spoken request can now search several private work tools.',
    description: 'The system follows access rules, finds information, and creates a result. The user can check the sources before taking action.',
    aria: 'Voice assistant flow from a spoken request through an access check, search in mail, files, and chat, then a generated draft and user review.',
  },
  'superintelligence-ban-proposal': {
    kicker: 'POLICY STACK 04',
    title: 'The proposal starts with a pause and ends with a permanent ban.',
    description: 'The sponsors want a temporary pause, a US regulator, a permanent ban, and work with other countries. This is not current law.',
    aria: 'Four-step policy diagram showing a temporary pause, rules from a proposed US regulator, a permanent ban, and work with other countries.',
  },
  'tesla-cybercab-austin-launch': {
    kicker: 'RECOVERY PATH 05',
    title: 'Without a steering wheel, every backup plan must work without the passenger.',
    description: 'Cybercab must finish the trip, stop safely, or contact support because the passenger cannot take control.',
    aria: 'Cybercab flow from cameras and self-driving software to three possible results: a finished ride, a safe stop, or remote support.',
  },
  'nvidia-huggingface-acquisition': {
    kicker: 'DEAL PATH 01',
    title: 'NVIDIA says the Hugging Face platform will stay open to its rivals.',
    description: 'The 12.93 billion dollar agreement could close in early 2027 after review. NVIDIA says rival models, clouds, and chips will remain supported.',
    aria: 'Deal diagram showing 11.9 billion dollars for the purchase, up to one billion dollars for staff, a legal review, and a target close in early 2027.',
  },
  'muse-spark-release': {
    kicker: 'EFFICIENCY TRACE 02',
    title: 'The new model aims to finish the same work with fewer steps.',
    description: 'Meta reports about 20 percent fewer tool calls and 25 percent fewer tokens than version 1.2. These are Meta’s own measurements.',
    aria: 'Bar chart comparing Muse Spark 1.2 with version 1.3, which uses about 80 percent of the tool calls and 75 percent of the tokens.',
  },
  'broadcom-ai-revenue': {
    kicker: 'REVENUE SIGNAL 03',
    title: 'Broadcom expects its AI chip revenue to rise after a strong quarter.',
    description: 'Broadcom reported 16.7 billion dollars for its third quarter and expects 21.7 billion dollars in the fourth. The second number is a forecast.',
    aria: 'Two bars compare Broadcom’s third-quarter AI chip revenue of 16.7 billion dollars with its fourth-quarter forecast of 21.7 billion dollars.',
  },
  'doj-ai-fair-use': {
    kicker: 'LEGAL PATH 04',
    title: 'The US government gave its view, but the court will decide the case.',
    description: 'The government statement may influence the fair-use debate. It is not a court decision or one rule for every AI training dataset.',
    aria: 'Legal flow from protected works and AI training to the US Justice Department’s view and a court decision that is still pending.',
  },
  'london-robotaxi-launch': {
    kicker: 'SUPERVISION STACK 05',
    title: 'London riders can try self-driving cars, but a safety driver stays inside.',
    description: 'The service uses Wayve’s AI Driver, a licensed safety driver, rider permission, and a small test fleet.',
    aria: 'Ride flow from Wayve’s AI Driver through a licensed safety driver and rider permission to a supervised journey in London.',
  },
  'memory-wall': {
    kicker: 'SYSTEM MAP 01',
    title: 'AI chips are getting faster than the memory that feeds them.',
    description: 'The diagram shows computing power growing faster than memory speed during long AI tasks.',
    aria: 'Diagram comparing a powerful computing engine with a slower memory path and a growing store of recent conversation data.',
  },
  'agent-economy': {
    kicker: 'WORKFLOW MAP 02',
    title: 'Every automatic step adds something that people may need to check.',
    description: 'The cost of an agent includes tool calls, retries, human review, and recovery after errors, not only AI use.',
    aria: 'Agent flow from a task through planning and tool use to a human check and a verified result.',
  },
  'robot-middle': {
    kicker: 'CONTROL LOOP 03',
    title: 'Useful robots check their progress when the world changes.',
    description: 'Long tasks require a robot to sense, plan, act, check the result, and recover after a problem.',
    aria: 'Circular robot control diagram showing sense, plan, act, check, and recover around a changing world.',
  },
  'open-weights': {
    kicker: 'PLACEMENT MAP 04',
    title: 'A model is useful when it fits the device, privacy needs, and task.',
    description: 'A small open model can run on a device or local server, with a cloud model used for harder work.',
    aria: 'Diagram comparing a model on a device, a model on a private local server, and a larger cloud model for harder tasks.',
  },
  'energy-ledger': {
    kicker: 'LOAD CURVE 05',
    title: 'Flexible computer work can move to cleaner hours.',
    description: 'The daily schedule moves tasks that can wait into cleaner hours while urgent work continues.',
    aria: 'A 24-hour bar chart shows more clean energy around midday and flexible computer work moving into that time.',
  },
  'compute-policy': {
    kicker: 'EVIDENCE CHAIN 06',
    title: 'AI rules become useful when every important claim has a record.',
    description: 'Model versions, tests, safety steps, problem records, and reports create one connected history.',
    aria: 'Five-step record from the model version through testing and safety steps to problem records and official reports.',
  },
  'context-memory': {
    kicker: 'MEMORY STACK 07',
    title: 'A larger text window is only one part of useful memory.',
    description: 'Active information, searched project material, and saved facts have different jobs and controls.',
    aria: 'Three-layer memory diagram with active information, searched project material, and lasting facts controlled by the user.',
  },
  chiplets: {
    kicker: 'PACKAGE MAP 08',
    title: 'A modern AI processor is becoming a small system of connected parts.',
    description: 'Computing parts, input-output parts, memory, and fast links must work together as one machine.',
    aria: 'Chiplet package diagram showing computing parts, an input-output part, high-bandwidth memory, and shared fast links.',
  },
};

function Diagram({ storyId }: ArticleVisualProps) {
  switch (storyId) {
    case 'nvidia-australia-ai-capacity':
      return <div className="visual-flow"><span>UP TO 2 GW</span><i>→</i><span>APPROVED SITES</span><i>→</i><span>GRID + SYSTEMS</span><i>→</i><span className="checkpoint">CUSTOMER USE</span><div className="cost-line">2027 TARGET · NOT BUILT CAPACITY</div></div>;
    case 'suno-v6-licensed-models':
      return <div className="visual-flow"><span>ARTIST OPT-IN</span><i>→</i><span>LICENSED MUSIC</span><i>→</i><span>SUNO V6</span><i>→</i><span className="checkpoint">CREDIT + PAY</span><div className="cost-line">PUBLIC PER-ARTIST TERMS NOT SHOWN</div></div>;
    case 'california-ai-auditor-laws':
      return <div className="visual-flow"><span>MODEL + RECORDS</span><i>→</i><span>INDEPENDENT AUDITOR</span><i>→</i><span>TEST EVIDENCE</span><i>→</i><span className="checkpoint">PUBLIC RESULT</span><div className="cost-line">METHOD · LIMITS · CONFLICTS</div></div>;
    case 'google-finland-ai-investment':
      return <div className="visual-ledger">{[['01', 'INVESTMENT', '€13B'], ['02', 'LOCATIONS', '4 AREAS'], ['03', 'BATTERY', '94 MW'], ['04', 'DELIVERY', '2027–28']].map(([index, label, state]) => <div key={index}><span>{index}</span><b>{label}</b><i>{state}</i></div>)}</div>;
    case 'arm-robot-capability-framework':
      return <div className="visual-lanes"><div><span>RL0 · REACT</span><i style={{ '--fill': '17%' } as CSSProperties} /></div><div><span>RL2 · CONTEXT</span><i style={{ '--fill': '50%' } as CSSProperties} /></div><div><span>RL5 · SELF-IMPROVE</span><i className="striped" style={{ '--fill': '100%' } as CSSProperties} /></div><b>PROPOSED LANGUAGE · TESTS MUST FOLLOW</b></div>;
    case 'unesco-ai-education-statement':
      return <div className="visual-flow"><span>LEARNING GOAL</span><i>→</i><span>TEACHER CHECK</span><i>→</i><span>AGE + DATA RULES</span><i>→</i><span className="checkpoint">MEASURE LEARNING</span><div className="cost-line">AI SUPPORTS THINKING · PEOPLE STAY IN CONTROL</div></div>;
    case 'adi-alif-edge-ai-deal':
      return <div className="visual-flow"><span>MOTION · SOUND · HEAT</span><i>→</i><span>EDGE AI CHIP</span><i>→</i><span>LOCAL DECISION</span><i>→</i><span className="checkpoint">MACHINE ACTION</span><div className="cost-line">$1.35B DEAL · LEGAL REVIEW PENDING</div></div>;
    case 'iphone-duo-launch':
      return <div className="visual-flow"><span>5.4-IN CLOSED</span><i>→</i><span>7.6-IN OPEN</span><i>→</i><span>TWO APPS</span><i>→</i><span className="checkpoint">DAILY USE</span><div className="cost-line">$1,999 · OCTOBER 23</div></div>;
    case 'apple-health-intelligence':
      return <div className="visual-flow"><span>ACTIVITY · SLEEP · HEART</span><i>→</i><span>READINESS 0–10</span><i>→</i><span>WELLNESS GUIDE</span><i>→</i><span className="checkpoint">MEDICAL ADVICE?</span><div className="cost-line">ASK A QUALIFIED PROFESSIONAL</div></div>;
    case 'apple-reference-image':
      return <div className="visual-flow"><span>CAMERA SENSOR</span><i>→</i><span>SIGNED REFERENCE</span><i>↔</i><span>EDITED PHOTO</span><i>→</i><span className="checkpoint">CONTEXT CHECK</span><div className="cost-line">PIXELS · TIME · PLACE · CAPTION</div></div>;
    case 'openai-christiano-board':
      return <div className="visual-ledger">{[['01', 'FOUNDATION BOARD', 'MEMBER'], ['02', 'SAFETY COMMITTEE', 'MEMBER'], ['03', 'BUSINESS BOARD', 'OBSERVER'], ['04', 'BUSINESS VOTE', 'NONE']].map(([index, label, state]) => <div key={index}><span>{index}</span><b>{label}</b><i>{state}</i></div>)}</div>;
    case 'anthropic-cyber-alignment-review':
      return <div className="visual-flow"><span>TEST SETUP</span><i>→</i><span className="checkpoint">OPEN INTERNET</span><i>→</i><span>4 INCIDENTS</span><i>→</i><span>METR REVIEW</span><div className="cost-line">481M RECORDS SEARCHED · ANTHROPIC FINDING</div></div>;
    case 'samsung-mistral-chip-factory':
      return <div className="visual-flow"><span>FACTORY DATA</span><i>→</i><span>PRIVATE MISTRAL MODEL</span><i>→</i><span>DEFECT SIGNAL</span><i>→</i><span className="checkpoint">ENGINEER CHECK</span><div className="cost-line">PLANNED USE · RESULTS NOT PUBLIC</div></div>;
    case 'openai-samsung-chip-research':
      return <div className="visual-flow"><span>OPENAI DESIGN</span><i>→</i><span className="checkpoint">SAMSUNG ROLE?</span><i>→</i><span>MEMORY · PRODUCTION</span><i>→</i><span>REAL TEST</span><div className="cost-line">PARTNERSHIP CONFIRMED · DETAILS LIMITED</div></div>;
    case 'uae-space-ai-constellation':
      return <div className="visual-flow"><span>$1B PLAN</span><i>→</i><span>50 SATELLITES</span><i>→</i><span>AI IN ORBIT</span><i>→</i><span className="checkpoint">FAST ALERT</span><div className="cost-line">MOST LAUNCHES AND SERVICES STILL PLANNED</div></div>;
    case 'doha-driverless-demo':
      return <div className="visual-ledger">{[['01', 'PAID PUBLIC RIDES', 'SAFETY OPERATOR'], ['02', 'EVENT DEMO', 'NO OPERATOR'], ['03', 'NEXT TEST', 'PUBLIC APPROVAL'], ['04', 'PROOF NEEDED', 'SAFETY DATA']].map(([index, label, state]) => <div key={index}><span>{index}</span><b>{label}</b><i>{state}</i></div>)}</div>;
    case 'china-distillation-response':
      return <div className="visual-flow"><span>US ALLEGATION</span><i>↔</i><span>CHINA DENIAL</span><i>→</i><span>EVIDENCE</span><i>→</i><span className="checkpoint">FAIR REVIEW</span><div className="cost-line">CLAIMS ARE NOT A COURT JUDGMENT</div></div>;
    case 'anthropic-researcher-resignation':
      return <div className="visual-flow"><span>RESEARCHER EXIT</span><i>→</i><span>PERSONAL WARNING</span><i>→</i><span>SAFETY TESTS</span><i>→</i><span className="checkpoint">PUBLIC DECISION</span><div className="cost-line">EXPERT BELIEF ≠ PROVEN FORECAST</div></div>;
    case 'chatgpt-images-25':
      return <div className="visual-flow"><span>SKETCH · PHOTO</span><i>→</i><span>IMAGES 2.5</span><i>→</i><span>FOCUSED EDIT</span><i>→</i><span className="checkpoint">HUMAN CHECK</span><div className="cost-line">UP TO 50% LOWER LATENCY · OPENAI CLAIM</div></div>;
    case 'meta-muse-agent':
      return <div className="visual-flow"><span>USER GOAL</span><i>→</i><span>MUSE SECURE VM</span><i>→</i><span>SENTINEL</span><i>→</i><span className="checkpoint">APPROVE ACTION</span><div className="cost-line">EMAIL · BOOKING · PURCHASE</div></div>;
    case 'alphagenome-atlas':
      return <div className="visual-flow"><span>9B DNA CHANGES</span><i>→</i><span>AI PREDICTIONS</span><i>→</i><span>AVI RANK</span><i>→</i><span className="checkpoint">LAB CHECK</span><div className="cost-line">PREDICTION ≠ DIAGNOSIS</div></div>;
    case 'missouri-google-ai-training':
      return <div className="visual-ledger">{[['01', 'EDUCATORS', 'NEARLY 100K'], ['02', 'STUDENTS', 'MORE THAN 1.1M'], ['03', 'STATE RESIDENTS', 'JOB CENTERS'], ['04', 'OUTCOMES', 'MEASURE NEXT']].map(([index, label, state]) => <div key={index}><span>{index}</span><b>{label}</b><i>{state}</i></div>)}</div>;
    case 'us-ai-distillation-advisory':
      return <div className="visual-flow"><span>API REQUESTS</span><i>→</i><span>PATTERN CHECK</span><i>→</i><span>CROSS-PROVIDER SIGNAL</span><i>→</i><span className="checkpoint">EVIDENCE REVIEW</span><div className="cost-line">US GOVERNMENT ALLEGATIONS · NOT A JUDGMENT</div></div>;
    case 'astra-amazon-bedrock':
      return <div className="visual-flow"><span>BEDROCK API</span><i>→</i><span>ASTRA</span><i>→</i><span>LIMITED TOOLS</span><i>→</i><span className="checkpoint">HUMAN REVIEW</span><div className="cost-line">UP TO 1M INPUT TOKENS · CHECK RETENTION</div></div>;
    case 'mistral-series-d':
      return <div className="visual-flow"><span>€3B ROUND</span><i>→</i><span>RESEARCH · COMPUTE</span><i>→</i><span>PRODUCTS</span><i>→</i><span className="checkpoint">CUSTOMER PROOF</span><div className="cost-line">VALUE ABOVE €21B · NOT REVENUE</div></div>;
    case 'eu-neuro-ai-governance':
      return <div className="visual-flow"><span>BRAIN DATA</span><i>→</i><span>STORAGE</span><i>→</i><span>SHARED MODEL</span><i>→</i><span className="checkpoint">RIGHTS CHECK</span><div className="cost-line">DEVICE · INFRASTRUCTURE · LATER USES</div></div>;
    case 'axa-global-ai-hub':
      return <div className="visual-flow"><span>5 AXA TEAMS</span><i>→</i><span>GLOBAL AI HUB</span><i>→</i><span>CLAIMS · EMAIL · SEARCH</span><i>→</i><span className="checkpoint">HUMAN REVIEW</span><div className="cost-line">MODEL CHOICE · COST · SAFETY · ACCESS</div></div>;
    case 'minicpm5-2b-release':
      return <div className="visual-lanes"><div><span>PARAMETERS · 2.52B</span><i style={{ '--fill': '62%' } as CSSProperties} /></div><div><span>CONTEXT · 131,072</span><i style={{ '--fill': '100%' } as CSSProperties} /></div><div><span>OPEN DATA · RELEASED</span><i className="striped" style={{ '--fill': '84%' } as CSSProperties} /></div><b>APACHE 2.0 · LOCAL FORMATS</b></div>;
    case 'cathay-contrail-trial':
      return <div className="visual-flow"><span>AI FORECAST</span><i>→</i><span>PILOT CHECK</span><i>→</i><span>SMALL ROUTE CHANGE</span><i>→</i><span className="checkpoint">~40% LESS CONTRAIL WARMING</span><div className="cost-line">80+ TEST FLIGHTS · TOTAL EMISSIONS SEPARATE</div></div>;
    case 'goldman-open-model-controls':
      return <div className="visual-ledger">{[['01', 'MODEL TEST', 'CERTIFY'], ['02', 'SECURE RUNTIME', 'ISOLATE'], ['03', 'AGENT RIGHTS', 'LIMIT'], ['04', 'DATA ACCESS', 'CONTROL']].map(([index, label, state]) => <div key={index}><span>{index}</span><b>{label}</b><i>{state}</i></div>)}</div>;
    case 'openai-research-intern':
      return <div className="visual-flow"><span>HUMAN IDEA</span><i>→</i><span>PARALLEL AGENTS</span><i>→</i><span>EXPERIMENTS</span><i>→</i><span className="checkpoint">HUMAN JUDGMENT</span><div className="cost-line">3.1 AGENT-WORKDAYS · COMPANY-REPORTED</div></div>;
    case 'openai-wiki-incident':
      return <div className="visual-flow"><span>EVALUATION</span><i>→</i><span className="checkpoint">EXTERNAL WRITE</span><i>→</i><span>PUBLIC WIKI</span><i>→</i><span>SHARED STATE</span><div className="cost-line">~18,000 POSTS · DISCLOSURE FOLLOWED</div></div>;
    case 'publisher-ai-lawsuit':
      return <div className="visual-flow"><span>REPORTING</span><i>→</i><span>PAID ARCHIVE</span><i>→</i><span>AI ANSWERS</span><i>→</i><span className="checkpoint">COURT DECIDES</span><div className="cost-line">ALLEGATIONS · NOT A JUDGMENT</div></div>;
    case 'lyria-35-gemini-rollout':
      return <div className="visual-flow"><span>PROMPT</span><i>→</i><span>LYRIA 3.5</span><i>→</i><span>$0.08 SONG</span><i>→</i><span className="checkpoint">HUMAN REVIEW</span><div className="cost-line">EDIT · RIGHTS · SYNTHID · PUBLISH</div></div>;
    case 'daybreak-frontline-defenders':
      return <div className="visual-flow"><span>$1B ACCESS</span><i>→</i><span>DEFENDER</span><i>→</i><span>VALIDATE</span><i>→</i><span className="checkpoint">REVIEW FIX</span><div className="cost-line">WATER · POWER · GOVERNMENT · BANKING</div></div>;
    case 'nvidia-pair-local-router':
      return <div className="visual-flow"><span>AGENT CALLS</span><i>→</i><span>PAIR ROUTER</span><i>→</i><span>NODE A · B · C</span><i>→</i><span className="checkpoint">LOCAL RESULTS</span><div className="cost-line">ONE REQUEST PER NODE · NO POOLED VRAM</div></div>;
    case 'gpt-6-astra-launch':
      return <div className="visual-lanes"><div><span>FRONTIERMATH · 98%</span><i style={{ '--fill': '98%' } as CSSProperties} /></div><div><span>ARC-AGI-3 · 99.9%</span><i style={{ '--fill': '99.9%' } as CSSProperties} /></div><div><span>EXPLOITBENCH · 100%</span><i className="striped" style={{ '--fill': '100%' } as CSSProperties} /></div><b>OPENAI-REPORTED · CRITICAL CYBER ACCESS GATED</b></div>;
    case 'weathernext-3-launch':
      return <div className="visual-flow"><span>LIVE SATELLITE</span><i>→</i><span>HOURLY REFRESH</span><i>→</i><span className="checkpoint">5–25 KM OUTPUT</span><i>→</i><span>15-DAY HORIZON</span><div className="cost-line">64-MEMBER PROBABILISTIC ENSEMBLE</div></div>;
    case 'google-workspace-live-voice':
      return <div className="visual-flow"><span>VOICE</span><i>→</i><span className="checkpoint">PERMISSION</span><i>→</i><span>MAIL · FILES · CHAT</span><i>→</i><span>DRAFT</span><div className="cost-line">SOURCES VISIBLE · USER REVIEWS</div></div>;
    case 'superintelligence-ban-proposal':
      return <div className="visual-ledger">{[['01', 'TEMPORARY PAUSE', 'PROPOSED'], ['02', 'FEDERAL RULES', 'NOT CREATED'], ['03', 'PERMANENT BAN', 'PROPOSED'], ['04', 'GLOBAL COORDINATION', 'SOUGHT']].map(([index, label, state]) => <div key={index}><span>{index}</span><b>{label}</b><i>{state}</i></div>)}</div>;
    case 'tesla-cybercab-austin-launch':
      return <div className="visual-flow"><span>CAMERAS</span><i>→</i><span>AUTONOMY</span><i>→</i><span className="checkpoint">ROAD EVENT</span><i>→</i><span>RIDE · STOP · SUPPORT</span><div className="cost-line">NO STEERING WHEEL · NO MANUAL TAKEOVER</div></div>;
    case 'nvidia-huggingface-acquisition':
      return <div className="visual-flow"><span>$11.9B DEAL</span><i>+</i><span>UP TO $1B RETENTION</span><i>→</i><span className="checkpoint">REGULATORY REVIEW</span><i>→</i><span>H1 2027 TARGET</span><div className="cost-line">OPEN MODELS · RIVAL CLOUDS · RIVAL SILICON</div></div>;
    case 'muse-spark-release':
      return <div className="visual-lanes"><div><span>1.2 BASE · 100%</span><i style={{ '--fill': '100%' } as CSSProperties} /></div><div><span>CALLS · ~80%</span><i style={{ '--fill': '80%' } as CSSProperties} /></div><div><span>TOKENS · ~75%</span><i className="striped" style={{ '--fill': '75%' } as CSSProperties} /></div><b>META ENGINEERING COMPARISON</b></div>;
    case 'broadcom-ai-revenue':
      return <div className="visual-lanes"><div><span>Q3 · $16.7B</span><i style={{ '--fill': '77%' } as CSSProperties} /></div><div><span>Q4 · $21.7B</span><i className="striped" style={{ '--fill': '100%' } as CSSProperties} /></div><b>Q4 IS COMPANY GUIDANCE</b></div>;
    case 'doj-ai-fair-use':
      return <div className="visual-flow"><span>WORKS</span><i>→</i><span>TRAINING</span><i>→</i><span>DOJ POSITION</span><i>→</i><span className="checkpoint">COURT DECIDES</span><div className="cost-line">STATEMENT OF INTEREST ≠ JUDICIAL RULING</div></div>;
    case 'london-robotaxi-launch':
      return <div className="visual-flow"><span>AI DRIVER</span><i>→</i><span className="checkpoint">SAFETY DRIVER</span><i>→</i><span>RIDER OPT-IN</span><i>→</i><span>SUPERVISED RIDE</span><div className="cost-line">15 LICENSED VEHICLES REPORTED AT LAUNCH</div></div>;
    case 'memory-wall':
      return <div className="visual-lanes"><div><span>COMPUTE</span><i style={{ '--fill': '94%' } as CSSProperties} /></div><div><span>MEMORY PATH</span><i style={{ '--fill': '54%' } as CSSProperties} /></div><div><span>CONTEXT CACHE</span><i className="striped" style={{ '--fill': '82%' } as CSSProperties} /></div><b>DATA MOVEMENT</b></div>;
    case 'agent-economy':
      return <div className="visual-flow"><span>TASK</span><i>→</i><span>PLAN</span><i>→</i><span>TOOLS</span><i>→</i><span className="checkpoint">HUMAN CHECK</span><i>→</i><span>RESULT</span><div className="cost-line">TOKENS + RETRIES + REVIEW + RECOVERY</div></div>;
    case 'robot-middle':
      return <div className="visual-loop"><div className="loop-core">CHANGING<br />WORLD</div>{['SENSE', 'PLAN', 'ACT', 'VERIFY', 'RECOVER'].map((label, index) => <span key={label} className={`loop-node loop-${index + 1}`}>{label}</span>)}</div>;
    case 'open-weights':
      return <div className="visual-placement">{[['DEVICE', 'FAST · PRIVATE'], ['LOCAL SERVER', 'CONTROLLED'], ['CLOUD', 'ESCALATION']].map(([title, note], index) => <div key={title} className={`placement-card placement-${index + 1}`}><b>{title}</b><span>{note}</span><i>{index === 0 ? 'S' : index === 1 ? 'M' : 'L'}</i></div>)}<div className="placement-route">ROUTE BY TASK →</div></div>;
    case 'energy-ledger': {
      const bars = [26, 22, 20, 18, 20, 27, 38, 52, 66, 78, 90, 96, 92, 85, 74, 62, 48, 36, 29, 25, 22, 20, 19, 22];
      return <div className="visual-energy"><div className="energy-bars">{bars.map((height, index) => <i key={index} className={index >= 8 && index <= 15 ? 'clean-hour' : ''} style={{ '--height': `${height}%` } as CSSProperties} />)}</div><div className="energy-axis"><span>00:00</span><b>FLEXIBLE LOAD WINDOW</b><span>24:00</span></div></div>;
    }
    case 'compute-policy':
      return <div className="visual-ledger">{['MODEL VERSION', 'EVALUATION', 'RISK CONTROL', 'INCIDENT LOG', 'REPORT'].map((label, index) => <div key={label}><span>0{index + 1}</span><b>{label}</b><i>{index < 4 ? 'CONNECTED' : 'AUDITABLE'}</i></div>)}</div>;
    case 'context-memory':
      return <div className="visual-memory"><div><span>NOW</span><b>ACTIVE CONTEXT</b><i>Immediate task</i></div><div><span>PROJECT</span><b>RETRIEVED MATERIAL</b><i>Relevant evidence</i></div><div><span>DURABLE</span><b>EXPLICIT MEMORY</b><i>User controlled</i></div></div>;
    case 'chiplets':
      return <div className="visual-chiplets"><div className="chip fabric">SHARED FABRIC</div><div className="chip compute-a">COMPUTE 0</div><div className="chip compute-b">COMPUTE 1</div><div className="chip io">I/O DIE</div><div className="chip hbm-a">HBM</div><div className="chip hbm-b">HBM</div><span>ADVANCED PACKAGE</span></div>;
    default:
      return null;
  }
}
export function ArticleVisual({ storyId }: ArticleVisualProps) {
  const copy = visualCopy[storyId];
  if (!copy) return null;

  return (
    <figure className={`article-visual visual-${storyId}`}>
      <div className="article-visual-stage" role="img" aria-label={copy.aria}>
        <Diagram storyId={storyId} />
      </div>
      <figcaption>
        <span>{copy.kicker}</span>
        <div><strong>{copy.title}</strong><p>{copy.description}</p></div>
      </figcaption>
    </figure>
  );
}
