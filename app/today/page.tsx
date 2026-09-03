'use client';

import { ArrowLeft, BookOpen } from 'lucide-react';
import { NewsFeed } from '@/components/NewsFeed';
import { SiteFrame } from '@/components/SiteFrame';
import { stories } from '@/data/news';

const leadingStories = stories.slice(0, 3);

export default function TodayPage() {
  return (
    <SiteFrame>
      <section className="route-masthead route-coral" id="top">
        <a className="route-back" href="/"><ArrowLeft size={15} /> Back to switchboard</a>
        <div><span>LATEST PULSE</span><BookOpen size={30} aria-hidden="true" /></div>
        <h1>Start with today.</h1>
        <p>Three consequential developments selected for a focused read before you explore the wider newsroom.</p>
      </section>
      <NewsFeed
        stories={leadingStories}
        onClearFilter={() => undefined}
        onExplore={(nodeId) => window.location.assign(`/graph?node=${encodeURIComponent(nodeId)}`)}
        sectionNumber="NOW"
        eyebrow="TODAY'S NEWS"
        title="The essential three."
        description="A shorter route through the latest pulse, ordered by editorial significance."
        runLabel="LATEST PULSE · 3 ESSENTIAL STORIES"
      />
    </SiteFrame>
  );
}
