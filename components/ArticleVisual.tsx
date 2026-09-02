import type { CSSProperties } from 'react';

type ArticleVisualProps = { storyId: string };

const visualCopy: Record<string, { kicker: string; title: string; description: string; aria: string }> = {
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
