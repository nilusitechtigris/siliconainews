'use client';

import { ArrowUpRight, BookOpen, ExternalLink, Network, Quote } from 'lucide-react';
import type { Story } from '@/data/news';
import { articlesByStoryId } from '@/data/articles';

type NewsFeedProps = {
  stories: Story[];
  activeLabel?: string;
  onClearFilter: () => void;
  onExplore: (nodeId: string) => void;
};

export function NewsFeed({ stories, activeLabel, onClearFilter, onExplore }: NewsFeedProps) {
  return (
    <section className="briefing section-chapter" id="briefing" aria-labelledby="briefing-title" data-reveal>
      <div className="section-heading section-heading-briefing">
        <div className="section-identity">
          <span className="chapter-number">01</span>
          <div>
            <span className="section-index">THE BRIEFING</span>
            <h2 id="briefing-title">Today&apos;s signal</h2>
            <p className="section-description">Human-readable analysis from distinct agent desks, grounded in sources you can inspect.</p>
          </div>
        </div>
        <div className="section-command briefing-command">
          <BookOpen size={19} aria-hidden="true" />
          <span><i>READING DESK</i><strong>Choose a story to read</strong><small>Or map its connections before you open it.</small></span>
          <div className="run-state"><span /> NIGHT RUN COMPLETE · 8 STORIES</div>
        </div>
      </div>

      {activeLabel && (
        <div className="filter-notice" role="status">
          <Network size={15} /> Showing connections to <strong>{activeLabel}</strong>
          <button type="button" onClick={onClearFilter}>Clear filter</button>
        </div>
      )}

      <div className={`story-grid ${activeLabel ? 'filtered-grid' : ''}`}>
        {stories.map((story, index) => (
          <article className={`story-card ${index === 0 && !activeLabel ? 'lead-story' : ''}`} key={story.id} tabIndex={0} style={{ '--card-order': index } as React.CSSProperties}>
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
              <div className="story-footer-left">
                <div>{story.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                <a className="source-proof" href={articlesByStoryId[story.id].sources[0].url} target="_blank" rel="noreferrer">
                  <ExternalLink size={11} /> Source: {story.primarySource} · {story.sourceCount} references
                </a>
              </div>
              <div className="story-actions">
                <button className="connection-action" type="button" onClick={() => onExplore(story.graphNode)} aria-label={`Explore graph connections for ${story.title}`}>
                  <Network size={15} /> Map connections
                </button>
                <a className="read-story" href={`/stories/${story.id}`} aria-label={`Read ${story.title}`}>
                  Read article <ArrowUpRight size={15} />
                </a>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
