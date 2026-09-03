import type { CSSProperties } from 'react';

type ArticleVisualProps = { storyId: string };

const visualCopy: Record<string, { kicker: string; title: string; description: string; aria: string }> = {
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
};

function Diagram({ storyId }: ArticleVisualProps) {
  switch (storyId) {
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
