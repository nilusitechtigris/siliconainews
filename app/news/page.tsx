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
        <div><span>COMPLETE ARCHIVE</span><Newspaper size={30} aria-hidden="true" /></div>
        <h1>The full newsroom.</h1>
        <p>Today’s reporting and every earlier edition, accumulated in one sourced, human-readable archive.</p>
      </section>
      <div className="signal-ticker" aria-label="Trending topics">
        <span className="ticker-label">SIGNAL WIRE</span>
        <div><i>#01</i> RESEARCH AGENTS <b>3.1 WORKDAYS</b></div>
        <div><i>#02</i> AGENT CONTAINMENT <b>WIKI INCIDENT</b></div>
        <div><i>#03</i> MUSIC AI <b>$0.08 · FULL SONG</b></div>
        <div><i>#04</i> LOCAL INFERENCE <b>PAIR ROUTER</b></div>
      </div>
      <NewsFeed
        stories={stories}
        onClearFilter={() => undefined}
        onExplore={(nodeId) => window.location.assign(`/graph?node=${encodeURIComponent(nodeId)}`)}
        eyebrow="ALL NEWS"
        title="Every signal, one desk."
        description="Browse every published pulse—newest first—or map any story into the cumulative knowledge graph."
        runLabel={`ARCHIVE · ${stories.length} STORIES`}
      />
    </SiteFrame>
  );
}
