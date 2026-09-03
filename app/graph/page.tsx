'use client';

import dynamic from 'next/dynamic';
import { ArrowLeft, ArrowRight, Braces, Network } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { NewsFeed } from '@/components/NewsFeed';
import { SiteFrame } from '@/components/SiteFrame';
import { graphNodes, stories } from '@/data/news';

const KnowledgeGraph = dynamic(() => import('@/components/KnowledgeGraph'), {
  ssr: false,
  loading: () => <div className="graph-skeleton" role="status" aria-label="Loading knowledge graph"><span /><span /><span /><span /><span /></div>,
});

export default function GraphPage() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const activeNode = graphNodes.find((node) => node.id === selectedNode);
  const connectedStories = useMemo(() => activeNode
    ? stories.filter((story) => activeNode.storyIds.includes(story.id))
    : [], [activeNode]);

  useEffect(() => {
    const syncRequestedNode = window.setTimeout(() => {
      const requestedNode = new URLSearchParams(window.location.search).get('node');
      if (requestedNode && graphNodes.some((node) => node.id === requestedNode)) setSelectedNode(requestedNode);
    }, 0);
    return () => window.clearTimeout(syncRequestedNode);
  }, []);

  const selectNode = (nodeId: string) => {
    setSelectedNode(nodeId);
    window.history.replaceState(null, '', `/graph?node=${encodeURIComponent(nodeId)}`);
  };

  const clearNode = () => {
    setSelectedNode(null);
    window.history.replaceState(null, '', '/graph');
  };

  return (
    <SiteFrame>
      {({ playTick }) => (
        <div className="graph-route">
          <section className="route-masthead route-blue" id="top">
            <a className="route-back" href="/"><ArrowLeft size={15} /> Back to switchboard</a>
            <div><span>KNOWLEDGE GRAPH</span><Network size={30} aria-hidden="true" /></div>
            <h1>Follow the connections.</h1>
            <p>Search an entity, filter a cluster, and reveal the reporting connected to it.</p>
          </section>
          <section className="graph-section section-chapter" id="graph" aria-labelledby="graph-title">
            <div className="section-heading graph-heading section-heading-graph">
              <div className="section-identity">
                <span className="chapter-number">MAP</span>
                <div>
                  <span className="section-index blue-text">LIVE ENTITY NETWORK</span>
                  <h2 id="graph-title">Nothing happens alone.</h2>
                  <p className="section-description">Select an entity to reveal its connected stories directly below the map.</p>
                </div>
              </div>
              <div className="section-command graph-command">
                <Network size={19} aria-hidden="true" />
                <span><i>EXPLORE MODE</i><strong>Search or select an entity</strong><small>Zoom, pan, or switch to accessible list view.</small></span>
              </div>
            </div>
            <KnowledgeGraph selectedNode={selectedNode} onSelect={selectNode} onTick={playTick} />
            {activeNode && (
              <a className="graph-result-link" href="#briefing">
                <span><Braces size={17} /> {activeNode.storyIds.length} connected {activeNode.storyIds.length === 1 ? 'story' : 'stories'} found</span>
                Read results <ArrowRight size={16} />
              </a>
            )}
          </section>
          {activeNode && (
            <NewsFeed
              stories={connectedStories}
              activeLabel={activeNode.label}
              onClearFilter={clearNode}
              onExplore={selectNode}
              sectionNumber="LINK"
              eyebrow="CONNECTED REPORTING"
              title={`Stories around ${activeNode.label}.`}
              description="These reports share a direct relationship with the selected graph entity."
              runLabel={`${connectedStories.length} CONNECTED ${connectedStories.length === 1 ? 'STORY' : 'STORIES'}`}
            />
          )}
        </div>
      )}
    </SiteFrame>
  );
}
