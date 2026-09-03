'use client';

import { ArrowLeft, BookOpen } from 'lucide-react';
import { NewsFeed } from '@/components/NewsFeed';
import { SiteFrame } from '@/components/SiteFrame';
import { latestStories } from '@/data/news';

export default function TodayPage() {
  return (
    <SiteFrame>
      <section className="route-masthead route-coral" id="top">
        <a className="route-back" href="/"><ArrowLeft size={15} /> Back to switchboard</a>
        <div><span>LATEST PULSE</span><BookOpen size={30} aria-hidden="true" /></div>
        <h1>Start with today.</h1>
        <p>All {latestStories.length} consequential developments from the newest pulse, collected in one focused edition.</p>
      </section>
      <NewsFeed
        stories={latestStories}
        onClearFilter={() => undefined}
        onExplore={(nodeId) => window.location.assign(`/graph?node=${encodeURIComponent(nodeId)}`)}
        sectionNumber="NOW"
        eyebrow="TODAY'S NEWS"
        title="Today’s complete pulse."
        description="Every report published in the latest run, ordered for a clear start-to-finish read."
        runLabel={`LATEST PULSE · ${latestStories.length} STORIES`}
      />
    </SiteFrame>
  );
}
