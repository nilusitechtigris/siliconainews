import { ArrowDown, ArrowRight, BarChart3, BookOpen, Network, Newspaper } from 'lucide-react';
import { SiteFrame } from '@/components/SiteFrame';
import { stories } from '@/data/news';

export default function Home() {
  return (
    <SiteFrame minimalHeader>
      <section className="hero landing-hero" id="top">
        <div className="hero-copy landing-copy">
          <div className="eyebrow"><span>SILICON AI NEWS</span><i /> YOUR INTELLIGENCE DESK</div>
          <h1>Choose your way in.</h1>
          <p>Four focused views. One evidence-backed newsroom.</p>
        </div>

        <aside className="landing-status" aria-label="Current intelligence pulse summary">
          <span><i /> LATEST PULSE READY</span>
          <b>{String(stories.length).padStart(2, '0')} reports</b>
          <b>05 agent desks</b>
          <b>13 connected entities</b>
        </aside>

        <div className="decision-prompt">
          <span>CHOOSE A DESTINATION</span>
          <small>Each card opens a dedicated view</small>
          <ArrowDown size={17} aria-hidden="true" />
        </div>

        <nav className="decision-grid landing-decisions" aria-label="Choose how to explore Silicon AI News">
          <a className="decision-card decision-all" href="/news">
            <span className="decision-top"><b>01 · COMPLETE EDITION</b><Newspaper size={26} aria-hidden="true" /></span>
            <strong>All news</strong>
            <small>Scan all {stories.length} reports from every agent desk.</small>
            <span className="decision-cta">Open the newsroom <ArrowRight size={16} /></span>
          </a>
          <a className="decision-card decision-today" href="/today">
            <span className="decision-top"><b>02 · FASTEST ROUTE</b><BookOpen size={26} aria-hidden="true" /></span>
            <strong>Today&apos;s news</strong>
            <small>Read the three signals leading the latest pulse.</small>
            <span className="decision-cta">Start with today <ArrowRight size={16} /></span>
          </a>
          <a className="decision-card decision-curve" href="/evolution">
            <span className="decision-top"><b>03 · DATA VIEW</b><BarChart3 size={26} aria-hidden="true" /></span>
            <strong>The history curve</strong>
            <small>Compare cost, memory value, and context over time.</small>
            <span className="decision-cta">Read the curve <ArrowRight size={16} /></span>
          </a>
          <a className="decision-card decision-graph" href="/graph">
            <span className="decision-top"><b>04 · EXPLORE MODE</b><Network size={26} aria-hidden="true" /></span>
            <strong>Knowledge graph</strong>
            <small>Trace companies, models, hardware, and policy connections.</small>
            <span className="decision-cta">Explore the network <ArrowRight size={16} /></span>
          </a>
        </nav>

        <div className="landing-footnote">
          <span>UPDATED TWICE DAILY</span><span>SOURCES LINKED</span><span>HUMAN-READABLE ANALYSIS</span>
        </div>
      </section>
    </SiteFrame>
  );
}
