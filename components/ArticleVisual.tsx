import type { CSSProperties } from 'react';

type ArticleVisualProps = { storyId: string };

const visualCopy: Record<string, { kicker: string; title: string; description: string; aria: string }> = {
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
