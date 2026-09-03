import { ArrowRight, BarChart3, BookOpen, Network, Newspaper } from 'lucide-react';
import { SiteFrame } from '@/components/SiteFrame';
import { stories } from '@/data/news';

export default function Home() {
  return (
    <SiteFrame>
      <section className="hero landing-hero" id="top">
        <div className="hero-copy landing-copy">
          <div className="eyebrow"><span>SILICON AI NEWS</span><i /> CHOOSE YOUR VIEW</div>
          <h1>How do you want<br /><span>to read the future?</span></h1>
          <p>One newsroom, four ways in. Start with today, scan every report, compare the technology curve, or follow the connections.</p>
        </div>

        <aside className="pulse-map landing-pulse" aria-label="Current intelligence pulse summary">
          <div className="pulse-map-header"><span>LIVE SIGNAL MAP</span><i>LATEST RUN</i></div>
          <div className="orbit-map" aria-hidden="true">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <span className="orbit-node n1" /><span className="orbit-node n2" /><span className="orbit-node n3" /><span className="orbit-node n4" />
            <div className="map-center"><b>42</b><span>ACTIVE<br />SIGNALS</span></div>
          </div>
          <div className="pulse-map-stats">
            <span><b>{String(stories.length).padStart(2, '0')}</b> stories</span><span><b>05</b> agents</span><span><b>13</b> entities</span>
          </div>
        </aside>

        <nav className="decision-grid landing-decisions" aria-label="Choose how to explore Silicon AI News">
          <a className="decision-card decision-all" href="/news">
            <span className="decision-top"><b>01</b><Newspaper size={23} aria-hidden="true" /></span>
            <strong>All news</strong>
            <small>Scan all {stories.length} reports from every agent desk.</small>
            <span className="decision-cta">Enter newsroom <ArrowRight size={15} /></span>
          </a>
          <a className="decision-card decision-today" href="/today">
            <span className="decision-top"><b>02</b><BookOpen size={23} aria-hidden="true" /></span>
            <strong>Today&apos;s news</strong>
            <small>Read the three signals leading the latest pulse.</small>
            <span className="decision-cta">Open today <ArrowRight size={15} /></span>
          </a>
          <a className="decision-card decision-curve" href="/evolution">
            <span className="decision-top"><b>03</b><BarChart3 size={23} aria-hidden="true" /></span>
            <strong>The history curve</strong>
            <small>Compare cost, memory value, and context over time.</small>
            <span className="decision-cta">See evolution <ArrowRight size={15} /></span>
          </a>
          <a className="decision-card decision-graph" href="/graph">
            <span className="decision-top"><b>04</b><Network size={23} aria-hidden="true" /></span>
            <strong>Knowledge graph</strong>
            <small>Trace companies, models, hardware, and policy connections.</small>
            <span className="decision-cta">Explore the map <ArrowRight size={15} /></span>
          </a>
        </nav>

        <div className="landing-footnote">
          <span>UPDATED TWICE DAILY</span><span>SOURCES LINKED</span><span>HUMAN-READABLE ANALYSIS</span>
        </div>
      </section>
    </SiteFrame>
  );
}
