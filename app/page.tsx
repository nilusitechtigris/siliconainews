'use client';

import dynamic from 'next/dynamic';
import { ArrowRight, BarChart3, BookOpen, Braces, Network, Newspaper, X } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Header } from '@/components/Header';
import { MetricsWidget } from '@/components/MetricsWidget';
import { NewsFeed } from '@/components/NewsFeed';
import { TerminalMode } from '@/components/TerminalMode';
import { graphNodes, stories } from '@/data/news';
import { useTerminalMode } from '@/hooks/useTerminalMode';

const KnowledgeGraph = dynamic(() => import('@/components/KnowledgeGraph'), {
  ssr: false,
  loading: () => <div className="graph-skeleton" role="status" aria-label="Loading knowledge graph"><span /><span /><span /><span /><span /></div>,
});

export default function Home() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [mobileGraphOpen, setMobileGraphOpen] = useState(false);
  const { terminalOpen, setTerminalOpen } = useTerminalMode();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.documentElement;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    root.classList.add('motion-ready');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -8% 0px' });

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      root.classList.remove('motion-ready');
    };
  }, []);

  const activeNode = graphNodes.find((node) => node.id === selectedNode);
  const visibleStories = useMemo(() => activeNode
    ? stories.filter((story) => activeNode.storyIds.includes(story.id))
    : stories, [activeNode]);

  const playTick = useCallback(() => {
    if (!audioEnabled) return;
    const AudioContextCtor = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (AudioContextCtor) {
      const context = new AudioContextCtor();
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = 'sine'; oscillator.frequency.value = 690;
      gain.gain.setValueAtTime(.025, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .035);
      oscillator.connect(gain); gain.connect(context.destination);
      oscillator.start(); oscillator.stop(context.currentTime + .04);
    }
    navigator.vibrate?.(8);
  }, [audioEnabled]);

  const handleNodeSelect = (nodeId: string) => {
    setSelectedNode(nodeId);
    playTick();
  };

  const openGraphFor = (nodeId: string) => {
    handleNodeSelect(nodeId);
    if (window.matchMedia('(max-width: 760px)').matches) setMobileGraphOpen(true);
    else document.getElementById('graph')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main>
      <Header
        audioEnabled={audioEnabled}
        onAudioToggle={() => setAudioEnabled((current) => !current)}
        onTerminalOpen={() => setTerminalOpen(true)}
        onGraphOpen={() => setMobileGraphOpen(true)}
      />

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span>DAILY INTELLIGENCE</span><i /> SEP 02, 2026</div>
          <h1>Technology moves fast.<br /><span>We connect the dots.</span></h1>
          <p>Choose your way into the story: scan the newsroom, read today&apos;s lead, compare the technology curve, or explore the network behind it.</p>
        </div>

        <aside className="pulse-map" aria-label="Current intelligence pulse summary">
          <div className="pulse-map-header"><span>LIVE SIGNAL MAP</span><i>02:00 RUN</i></div>
          <div className="orbit-map" aria-hidden="true">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <span className="orbit-node n1" /><span className="orbit-node n2" /><span className="orbit-node n3" /><span className="orbit-node n4" />
            <div className="map-center"><b>42</b><span>ACTIVE<br />SIGNALS</span></div>
          </div>
          <div className="pulse-map-stats">
            <span><b>08</b> stories</span><span><b>05</b> agents</span><span><b>13</b> entities</span>
          </div>
        </aside>

        <nav className="decision-grid" aria-label="Choose how to explore Silicon AI News">
          <button className="decision-card decision-all" type="button" onClick={() => {
            setSelectedNode(null);
            document.getElementById('briefing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
            <span className="decision-top"><b>01</b><Newspaper size={21} aria-hidden="true" /></span>
            <strong>All news</strong>
            <small>Scan all {stories.length} reports from every agent desk.</small>
            <span className="decision-cta">Open newsroom <ArrowRight size={15} /></span>
          </button>
          <a className="decision-card decision-today" href={`/stories/${stories[0].id}`}>
            <span className="decision-top"><b>02</b><BookOpen size={21} aria-hidden="true" /></span>
            <strong>Today&apos;s news</strong>
            <small>Start with the lead story selected from the latest pulse.</small>
            <span className="decision-cta">Read the lead <ArrowRight size={15} /></span>
          </a>
          <a className="decision-card decision-curve" href="#signals">
            <span className="decision-top"><b>03</b><BarChart3 size={21} aria-hidden="true" /></span>
            <strong>The history curve</strong>
            <small>Compare cost, memory value, and context over time.</small>
            <span className="decision-cta">Open evolution <ArrowRight size={15} /></span>
          </a>
          <button className="decision-card decision-graph" type="button" onClick={() => {
              if (window.matchMedia('(max-width: 760px)').matches) setMobileGraphOpen(true);
              else document.getElementById('graph')?.scrollIntoView({ behavior: 'smooth' });
            }}>
            <span className="decision-top"><b>04</b><Network size={21} aria-hidden="true" /></span>
            <strong>Knowledge graph</strong>
            <small>Trace companies, models, hardware, and policy connections.</small>
            <span className="decision-cta">Explore the map <ArrowRight size={15} /></span>
          </button>
        </nav>
      </section>

      <div className="signal-ticker" aria-label="Trending topics">
        <span className="ticker-label">SIGNAL WIRE</span>
        <div><i>#01</i> HBM4 BANDWIDTH <b>↑ 18%</b></div>
        <div><i>#02</i> AGENT ECONOMICS <b>↑ 12%</b></div>
        <div><i>#03</i> EMBODIED AI <b>↑ 9%</b></div>
        <div><i>#04</i> COMPUTE POLICY <b>↑ 7%</b></div>
      </div>

      <NewsFeed
        stories={visibleStories}
        activeLabel={activeNode?.label}
        onClearFilter={() => setSelectedNode(null)}
        onExplore={openGraphFor}
      />

      <MetricsWidget />

      <section className="graph-section section-chapter" id="graph" aria-labelledby="graph-title" data-reveal>
        <div className="section-heading graph-heading section-heading-graph">
          <div className="section-identity">
            <span className="chapter-number">03</span>
            <div>
              <span className="section-index blue-text">KNOWLEDGE GRAPH</span>
              <h2 id="graph-title">Nothing happens alone.</h2>
              <p className="section-description">Select an entity to reveal the stories around it. Every edge is a thread in today&apos;s briefing.</p>
            </div>
          </div>
          <div className="section-command graph-command">
            <Network size={19} aria-hidden="true" />
            <span><i>EXPLORE MODE</i><strong>Search or select an entity</strong><small>Filter the briefing through its connections.</small></span>
          </div>
        </div>
        <KnowledgeGraph selectedNode={selectedNode} onSelect={handleNodeSelect} />
        {activeNode && (
          <a className="graph-result-link" href="#briefing">
            <span><Braces size={17} /> {activeNode.storyIds.length} connected {activeNode.storyIds.length === 1 ? 'story' : 'stories'} found</span>
            Read filtered briefing <ArrowRight size={16} />
          </a>
        )}
      </section>

      <footer className="site-footer">
        <div className="brand footer-brand"><span className="brand-mark">S</span><span>Silicon <em>AI</em> News</span></div>
        <p>Independent signals from a synthetic newsroom.</p>
        <div><span>NO COOKIES</span><span>EDGE RENDERED</span><span>BUILT FOR THE CURIOUS</span></div>
      </footer>

      <button className="graph-mobile-launch" type="button" onClick={() => setMobileGraphOpen(true)} aria-label="Open knowledge graph">
        <Network size={19} /> GRAPH
        {selectedNode && <span>1</span>}
      </button>

      {mobileGraphOpen && (
        <section className="mobile-graph-modal" role="dialog" aria-modal="true" aria-labelledby="mobile-graph-title">
          <button className="modal-backdrop" type="button" aria-label="Close graph" onClick={() => setMobileGraphOpen(false)} />
          <div className="mobile-graph-sheet">
            <div className="sheet-handle" aria-hidden="true" />
            <header><div><span className="section-index blue-text">LIVE ENTITY MAP</span><h2 id="mobile-graph-title">Knowledge graph</h2></div><button className="icon-button" type="button" onClick={() => setMobileGraphOpen(false)} aria-label="Close graph viewer"><X size={20} /></button></header>
            <KnowledgeGraph selectedNode={selectedNode} onSelect={handleNodeSelect} compact />
            {activeNode && <button className="sheet-results" type="button" onClick={() => { setMobileGraphOpen(false); setTimeout(() => document.getElementById('briefing')?.scrollIntoView({ behavior: 'smooth' }), 120); }}>View {activeNode.storyIds.length} connected stories <ArrowRight size={16} /></button>}
          </div>
        </section>
      )}

      <TerminalMode open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </main>
  );
}
