import type { CSSProperties } from 'react';

type ArticleVisualProps = { storyId: string };

const visualCopy: Record<string, { kicker: string; title: string; description: string; aria: string }> = {
  'gpt-6-astra-launch': {
    kicker: 'CAPABILITY GATE 01',
    title: 'Performance and access now move through the same security gate.',
    description: 'OpenAI reports near-saturated benchmark scores while classifying Astra at its Critical cyber threshold; the measurements are provider-reported.',
    aria: 'Three bars rising from zero to show OpenAI reported scores of 98 percent on FrontierMath Tier 4, 99.9 percent on ARC-AGI-3, and 100 percent on ExploitBench, followed by a restricted cyber access marker.',
  },
  'weathernext-3-launch': {
    kicker: 'FORECAST PIPELINE 02',
    title: 'Fresh observations become a new global forecast every hour.',
    description: 'Live satellite mosaics feed resolutions from 5 to 25 kilometers; the longest operational ensemble horizon is 15 days.',
    aria: 'Weather forecasting flow from live satellite observations through an hourly model refresh to multi-resolution output and a 15-day main forecast horizon.',
  },
  'google-workspace-live-voice': {
    kicker: 'CONTEXT PATH 03',
    title: 'A spoken request can now cross several private work surfaces.',
    description: 'The useful path is voice to permissioned retrieval to a generated result—with source review still visible before the user acts.',
    aria: 'Voice agent flow from spoken request through a permission checkpoint, retrieval from mail files and chat, generated work, and user review.',
  },
  'superintelligence-ban-proposal': {
    kicker: 'POLICY STACK 04',
    title: 'The announced framework moves from pause to permanent prohibition.',
    description: 'The sponsors propose a temporary development pause, a federal regulator, a superintelligence ban, and international coordination; it is not current law.',
    aria: 'Four-stage policy diagram showing a temporary pause, rules from a proposed federal regulator, a permanent superintelligence ban, and international coordination.',
  },
  'tesla-cybercab-austin-launch': {
    kicker: 'RECOVERY PATH 05',
    title: 'Removing the wheel moves every fallback outside manual driving.',
    description: 'Cybercab’s camera-led autonomy must resolve the trip, stop safely, or reach support because no passenger can take control.',
    aria: 'Cybercab control diagram from camera sensing through autonomous driving to a checkpoint with either completed ride, safe stop, or remote support and no manual takeover.',
  },
  'nvidia-huggingface-acquisition': {
    kicker: 'DEAL PATH 01',
    title: 'A platform acquisition arrives with a testable neutrality promise.',
    description: 'The $12.93 billion agreement targets a first-half 2027 close after regulatory review; Nvidia says rival models, clouds, and hardware will remain supported.',
    aria: 'Acquisition diagram moving from 11.9 billion dollars of purchase consideration and up to 1 billion dollars of employee retention through regulatory review to a target close in the first half of 2027.',
  },
  'muse-spark-release': {
    kicker: 'EFFICIENCY TRACE 02',
    title: 'The release is designed to spend fewer moves on the same work.',
    description: 'Meta engineers report roughly 20% fewer tool calls and 25% fewer tokens than Muse Spark 1.2; the figures are vendor measurements, not independent benchmarks.',
    aria: 'Bar comparison using Muse Spark 1.2 as a 100 percent baseline, with Muse Spark 1.3 at approximately 80 percent of tool calls and 75 percent of tokens.',
  },
  'broadcom-ai-revenue': {
    kicker: 'REVENUE SIGNAL 03',
    title: 'AI semiconductor revenue is moving from result to a larger forecast.',
    description: 'Broadcom reported $16.7 billion for fiscal Q3 and guided to $21.7 billion for Q4. The second bar is a company forecast, not completed revenue.',
    aria: 'Two horizontal bars comparing Broadcom fiscal third-quarter AI semiconductor revenue of 16.7 billion dollars with its fourth-quarter guidance of 21.7 billion dollars.',
  },
  'doj-ai-fair-use': {
    kicker: 'LEGAL PATH 04',
    title: 'The government joined the argument; the court still owns the decision.',
    description: 'A statement of interest can influence the fair-use analysis, but it is neither a judgment nor a blanket rule for every training dataset.',
    aria: 'Legal process diagram moving from copyrighted works and model training to the Justice Department fair-use position and a pending judicial decision.',
  },
  'london-robotaxi-launch': {
    kicker: 'SUPERVISION STACK 05',
    title: 'Autonomy reaches the rider with a human fallback still onboard.',
    description: 'The public service combines Wayve’s AI Driver, licensed human oversight, rider consent, and a small supervised fleet.',
    aria: 'Ride flow diagram from Wayve AI Driver through a licensed safety driver and rider opt-in to a supervised London journey.',
  },
  'memory-wall': {
    kicker: 'SYSTEM MAP 01',
    title: 'Compute is widening faster than the road feeding it.',
    description: 'A conceptual view of arithmetic capacity growing ahead of memory movement under long-context inference.',
    aria: 'Concept diagram comparing a wide compute engine with a narrower memory bandwidth path and a growing context cache.',
  },
  'agent-economy': {
    kicker: 'WORKFLOW MAP 02',
    title: 'Every autonomous step adds a verification surface.',
    description: 'The cost of an agent run includes tool calls, retries, review, and recovery—not tokens alone.',
    aria: 'Agent workflow diagram moving from a task through planning and tools to a human checkpoint and a verified result.',
  },
  'robot-middle': {
    kicker: 'CONTROL LOOP 03',
    title: 'Useful robots close the loop after reality changes.',
    description: 'Long-horizon behavior depends on repeatedly sensing, planning, acting, checking, and recovering.',
    aria: 'Circular robotics control loop showing sense, plan, act, verify, and recover around a changing real world.',
  },
  'open-weights': {
    kicker: 'PLACEMENT MAP 04',
    title: 'Capability becomes useful when it fits the boundary.',
    description: 'Small open models can occupy the device, local server, or cloud layer according to latency and privacy needs.',
    aria: 'Deployment diagram comparing an on-device model, a local private server, and a cloud model escalation path.',
  },
  'energy-ledger': {
    kicker: 'LOAD CURVE 05',
    title: 'Flexible compute can follow cleaner hours.',
    description: 'A conceptual daily schedule moves deferrable work away from carbon-intensive periods while preserving urgent demand.',
    aria: 'Twenty-four-hour bar chart with clean energy availability rising around midday and flexible compute shifted into that window.',
  },
  'compute-policy': {
    kicker: 'EVIDENCE CHAIN 06',
    title: 'Policy becomes real when every claim has a record.',
    description: 'Model lineage, evaluations, controls, incidents, and reports form a connected audit trail.',
    aria: 'Five-stage audit trail from model version through evaluation and controls to incident records and regulatory reporting.',
  },
  'context-memory': {
    kicker: 'MEMORY STACK 07',
    title: 'A larger window is one layer of continuity.',
    description: 'Working context, retrieved material, and explicit durable memory have different jobs and controls.',
    aria: 'Three-layer memory diagram with active context above retrieved project material and durable user-controlled facts.',
  },
  chiplets: {
    kicker: 'PACKAGE MAP 08',
    title: 'The accelerator is becoming a system in miniature.',
    description: 'Compute tiles, I/O, memory, and fabric create one machine only when the package connects them coherently.',
    aria: 'Chiplet package floorplan showing compute tiles, input output die, high bandwidth memory, and a shared interconnect fabric.',
  },
};

function Diagram({ storyId }: ArticleVisualProps) {
  switch (storyId) {
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
