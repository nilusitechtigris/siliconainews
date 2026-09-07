'use client';

import dynamic from 'next/dynamic';
import { ArrowLeft, ArrowRight, Braces, Network } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { NewsFeed } from '@/components/NewsFeed';
import { SiteFrame } from '@/components/SiteFrame';
import { categories, graphNodes, stories, type NodeCategory } from '@/data/news';

const KnowledgeGraph = dynamic(() => import('@/components/KnowledgeGraph'), {
  ssr: false,
  loading: () => <div className="graph-skeleton" role="status" aria-label="Loading knowledge graph"><span /><span /><span /><span /><span /></div>,
});

export default function GraphPage() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<NodeCategory | null>(null);
  const activeNode = graphNodes.find((node) => node.id === selectedNode);
  const topicStories = useMemo(() => {
    if (!selectedTopic) return [];
    const storyIds = new Set(graphNodes.filter((node) => node.category === selectedTopic).flatMap((node) => node.storyIds));
    return stories.filter((story) => storyIds.has(story.id));
  }, [selectedTopic]);
  const connectedStories = useMemo(() => activeNode
    ? stories.filter((story) => activeNode.storyIds.includes(story.id))
    : topicStories, [activeNode, topicStories]);

  useEffect(() => {
    const syncRequestedNode = window.setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      const requestedNode = params.get('node');
      const requestedTopic = params.get('topic');
      const validTopic = categories.find((topic) => topic === requestedTopic) ?? null;
      const node = graphNodes.find((item) => item.id === requestedNode);
      if (node) setSelectedNode(node.id);
      if (validTopic) setSelectedTopic(validTopic);
      else if (node) setSelectedTopic(node.category);
    }, 0);
    return () => window.clearTimeout(syncRequestedNode);
  }, []);

  const selectNode = (nodeId: string) => {
    const node = graphNodes.find((item) => item.id === nodeId);
    const topic = selectedTopic ?? node?.category ?? null;
    setSelectedNode(nodeId);
    if (topic && !selectedTopic) setSelectedTopic(topic);
    const params = new URLSearchParams();
    if (topic) params.set('topic', topic);
    params.set('node', nodeId);
    window.history.replaceState(null, '', `/graph?${params.toString()}`);
  };

  const selectTopic = (topic: NodeCategory) => {
    setSelectedTopic(topic);
    setSelectedNode(null);
    window.history.replaceState(null, '', `/graph?topic=${encodeURIComponent(topic)}`);
  };

  const clearNode = () => {
    setSelectedNode(null);
    window.history.replaceState(null, '', selectedTopic ? `/graph?topic=${encodeURIComponent(selectedTopic)}` : '/graph');
  };

  const clearGraphFilter = () => {
    if (selectedNode) {
      clearNode();
      return;
    }
    setSelectedTopic(null);
    window.history.replaceState(null, '', '/graph');
  };

  return (
    <SiteFrame>
      <div className="graph-route">
          <section className="route-masthead route-blue" id="top">
            <a className="route-back" href="/"><ArrowLeft size={15} /> Back to switchboard</a>
            <div><span>KNOWLEDGE GRAPH</span><Network size={30} aria-hidden="true" /></div>
            <h1>Follow the connections.</h1>
            <p>Search the accumulated archive, see why entities connect, and reveal the reporting behind every relationship.</p>
          </section>
          <section className="graph-section section-chapter" id="graph" aria-labelledby="graph-title">
            <div className="section-heading graph-heading section-heading-graph">
              <div className="section-identity">
                <span className="chapter-number">MAP</span>
                <div>
                  <span className="section-index blue-text">LIVE ENTITY NETWORK</span>
                  <h2 id="graph-title">Nothing happens alone.</h2>
                  <p className="section-description">Choose a topic, explore its core and one-hop neighbors, then reveal the reporting behind each entity.</p>
                </div>
              </div>
              <div className="section-command graph-command">
                <Network size={19} aria-hidden="true" />
                <span><i>GUIDED EXPLORE</i><strong>Topic → node → reporting</strong><small>Start focused, then follow only the connections that matter.</small></span>
              </div>
            </div>
            <KnowledgeGraph selectedNode={selectedNode} selectedTopic={selectedTopic} onSelect={selectNode} onTopicChange={selectTopic} />
            {selectedTopic && (
              <a className="graph-result-link" href="#briefing">
                <span><Braces size={17} /> {connectedStories.length} {activeNode ? 'node-connected' : `${selectedTopic.toLowerCase()}-related`} {connectedStories.length === 1 ? 'story' : 'stories'} found</span>
                Read reporting <ArrowRight size={16} />
              </a>
            )}
          </section>
          {selectedTopic && (
            <NewsFeed
              stories={connectedStories}
              activeLabel={activeNode?.label ?? selectedTopic}
              onClearFilter={clearGraphFilter}
              onExplore={selectNode}
              sectionNumber="LINK"
              eyebrow="CONNECTED REPORTING"
              title={activeNode ? `Stories around ${activeNode.label}.` : `${selectedTopic} stories in view.`}
              description={activeNode ? 'These reports share a direct relationship with the selected graph entity.' : `Reporting connected to the ${selectedTopic.toLowerCase()} topic core, newest first.`}
              runLabel={`${connectedStories.length} CONNECTED ${connectedStories.length === 1 ? 'STORY' : 'STORIES'}`}
            />
          )}
      </div>
    </SiteFrame>
  );
}
