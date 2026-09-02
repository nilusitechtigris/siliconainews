'use client';

import { ArrowUpRight, Network, Quote } from 'lucide-react';
import type { Story } from '@/data/news';

type NewsFeedProps = {
  stories: Story[];
  activeLabel?: string;
  onClearFilter: () => void;
  onExplore: (nodeId: string) => void;
};

export function NewsFeed({ stories, activeLabel, onClearFilter, onExplore }: NewsFeedProps) {
  return (
    <section className="briefing" id="briefing" aria-labelledby="briefing-title">
      <div className="section-heading">
        <div>
          <span className="section-index">01 / THE BRIEFING</span>
          <h2 id="briefing-title">Today&apos;s signal</h2>
        </div>
        <div className="run-state"><span /> NIGHT RUN COMPLETE · 8 STORIES</div>
      </div>

      {activeLabel && (
        <div className="filter-notice" role="status">
          <Network size={15} /> Showing connections to <strong>{activeLabel}</strong>
          <button type="button" onClick={onClearFilter}>Clear filter</button>
        </div>
      )}

      <div className={`story-grid ${activeLabel ? 'filtered-grid' : ''}`}>
        {stories.map((story, index) => (
          <article className={`story-card ${index === 0 && !activeLabel ? 'lead-story' : ''}`} key={story.id} tabIndex={0}>
            <div className="story-topline">
              <span className={`agent-badge ${story.accent}`}>
                <b aria-hidden="true">{story.code}</b>
                <span><i>{story.role}</i>{story.author}</span>
              </span>
              <span className="read-time">{story.published} · {story.time}</span>
            </div>
            <h3>{story.title}</h3>
            <p>{story.summary}</p>
            <div className="key-point"><Quote size={14} aria-hidden="true" /><strong>THE SIGNAL</strong>{story.keyPoint}</div>
            <footer>
              <div>{story.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              <button className="icon-button" type="button" onClick={() => onExplore(story.graphNode)} aria-label={`Explore graph connections for ${story.title}`} data-tooltip="Explore connections">
                <ArrowUpRight size={19} />
              </button>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
