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
        <div><i>#01</i> OPEN-MODEL PLATFORM <b>$12.93B</b></div>
        <div><i>#02</i> CUSTOM SILICON <b>Q3 $16.7B</b></div>
        <div><i>#03</i> SUPERVISED AUTONOMY <b>15 CARS</b></div>
        <div><i>#04</i> FAIR-USE FIGHT <b>DOJ FILED</b></div>
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
