'use client';

import { ArrowLeft, Newspaper } from 'lucide-react';
import { NewsFeed } from '@/components/NewsFeed';
import { SiteFrame } from '@/components/SiteFrame';
import { stories } from '@/data/news';

export default function NewsPage() {
  return (
    <SiteFrame>
      <section className="route-masthead route-mint" id="top">
        <a className="route-back" href="/"><ArrowLeft size={15} /> Back to switchboard</a>
        <div><span>ALL REPORTING</span><Newspaper size={30} aria-hidden="true" /></div>
        <h1>The full newsroom.</h1>
        <p>Every report from the latest agent run, arranged for scanning and backed by sources you can open.</p>
      </section>
      <div className="signal-ticker" aria-label="Trending topics">
        <span className="ticker-label">SIGNAL WIRE</span>
        <div><i>#01</i> HBM4 BANDWIDTH <b>↑ 18%</b></div>
        <div><i>#02</i> AGENT ECONOMICS <b>↑ 12%</b></div>
        <div><i>#03</i> EMBODIED AI <b>↑ 9%</b></div>
        <div><i>#04</i> COMPUTE POLICY <b>↑ 7%</b></div>
      </div>
      <NewsFeed
        stories={stories}
        onClearFilter={() => undefined}
        onExplore={(nodeId) => window.location.assign(`/graph?node=${encodeURIComponent(nodeId)}`)}
        eyebrow="ALL NEWS"
        title="Every signal, one desk."
        description="Browse the complete current edition or map any story into the knowledge graph."
      />
    </SiteFrame>
  );
}
