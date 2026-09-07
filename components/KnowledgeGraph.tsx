'use client';

import { ArrowRight, Crosshair, List, Maximize2, Minus, Network, Plus, Search } from 'lucide-react';
import { forceCenter, forceCollide, forceLink, forceManyBody, forceRadial, forceSimulation, type SimulationLinkDatum, type SimulationNodeDatum } from 'd3-force';
import { useEffect, useMemo, useRef, useState } from 'react';
import { categories, graphLinks, graphNodes, type GraphNode, type NodeCategory } from '@/data/news';

type SimNode = GraphNode & SimulationNodeDatum;
type Viewport = { x: number; y: number; k: number };

const colors: Record<NodeCategory, string> = {
  Hardware: '#8ef0b3', Models: '#86bdf8', Policy: '#f3b75a', Robotics: '#f08f7b',
};

type KnowledgeGraphProps = {
  selectedNode: string | null;
  selectedTopic: NodeCategory | null;
  onSelect: (nodeId: string) => void;
  onTopicChange: (topic: NodeCategory) => void;
  compact?: boolean;
};

const topicDescriptions: Record<NodeCategory, string> = {
  Hardware: 'Chips, memory, networks, and the energy beneath them.',
  Models: 'Frontier systems, open weights, context, and agent workflows.',
  Policy: 'Rules, courts, safety thresholds, and institutional power.',
  Robotics: 'Autonomy, embodied intelligence, and machines in motion.',
};

export default function KnowledgeGraph({ selectedNode, selectedTopic, onSelect, onTopicChange, compact = false }: KnowledgeGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ x: number; y: number; originX: number; originY: number } | null>(null);
  const [nodes, setNodes] = useState<SimNode[]>([]);
  const [dimensions, setDimensions] = useState({ width: 760, height: compact ? 420 : 530 });
  const [viewport, setViewport] = useState<Viewport>({ x: 0, y: 0, k: 1 });
  const [query, setQuery] = useState('');
  const [listView, setListView] = useState(false);
  const [hover, setHover] = useState<{ node: SimNode; x: number; y: number } | null>(null);
  const [colorTheme, setColorTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const syncTheme = () => setColorTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
    syncTheme();
    window.addEventListener('silicon-theme-change', syncTheme);
    return () => window.removeEventListener('silicon-theme-change', syncTheme);
  }, []);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;
    const observer = new ResizeObserver(([entry]) => {
      const width = Math.max(300, entry.contentRect.width);
      setDimensions({ width, height: compact ? 420 : Math.max(460, Math.min(560, width * 0.66)) });
    });
    observer.observe(shell);
    return () => observer.disconnect();
  }, [compact]);

  const topicStats = useMemo(() => Object.fromEntries(categories.map((topic) => {
    const coreIds = new Set(graphNodes.filter((node) => node.category === topic).map((node) => node.id));
    const topicLinks = graphLinks.filter((link) => coreIds.has(link.source) || coreIds.has(link.target));
    const neighborIds = new Set(topicLinks.flatMap((link) => [link.source, link.target]).filter((id) => !coreIds.has(id)));
    const storyIds = new Set(graphNodes.filter((node) => coreIds.has(node.id)).flatMap((node) => node.storyIds));
    return [topic, { nodes: coreIds.size, neighbors: neighborIds.size, stories: storyIds.size }];
  })), []);

  const topicGraph = useMemo(() => {
    if (!selectedTopic) return { nodes: [] as GraphNode[], links: [] as typeof graphLinks };
    const coreIds = new Set(graphNodes.filter((node) => node.category === selectedTopic).map((node) => node.id));
    const links = graphLinks.filter((link) => coreIds.has(link.source) || coreIds.has(link.target));
    const visibleIds = new Set([...coreIds, ...links.flatMap((link) => [link.source, link.target])]);
    return { nodes: graphNodes.filter((node) => visibleIds.has(node.id)), links };
  }, [selectedTopic]);

  useEffect(() => {
    if (!selectedTopic) return;

    const simulationNodes: SimNode[] = topicGraph.nodes.map((node) => ({ ...node }));
    const links: SimulationLinkDatum<SimNode>[] = topicGraph.links.map((link) => ({ ...link }));
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const boundaryRadius = Math.min(dimensions.width, dimensions.height) * .31;
    const neighborRadius = Math.min(dimensions.width, dimensions.height) * .43;
    const simulation = forceSimulation(simulationNodes)
      .force('link', forceLink<SimNode, SimulationLinkDatum<SimNode>>(links).id((node) => node.id).distance((link) => {
        const source = link.source as SimNode;
        const target = link.target as SimNode;
        return source.category === selectedTopic && target.category === selectedTopic ? 78 : 112;
      }).strength(.56))
      .force('charge', forceManyBody().strength(-230))
      .force('center', forceCenter(centerX, centerY))
      .force('radial', forceRadial<SimNode>((node) => node.category === selectedTopic ? boundaryRadius * .56 : neighborRadius, centerX, centerY).strength((node) => node.category === selectedTopic ? .62 : .94))
      .force('collision', forceCollide<SimNode>().radius((node) => dimensions.width < 520 ? 18 + node.weight * .45 : 23 + node.weight * .8).strength(.96));

    let ticks = 0;
    simulation.on('tick', () => {
      simulationNodes.forEach((node) => {
        if (node.x === undefined || node.y === undefined) return;
        const deltaX = node.x - centerX;
        const deltaY = node.y - centerY;
        const distance = Math.max(1, Math.hypot(deltaX, deltaY));
        const isCore = node.category === selectedTopic;
        const limit = isCore ? boundaryRadius - 18 : boundaryRadius + 30;
        const crossedEdge = isCore ? distance > limit : distance < limit;
        if (!crossedEdge) return;
        node.x = centerX + deltaX / distance * limit;
        node.y = centerY + deltaY / distance * limit;
        node.vx = (node.vx ?? 0) * .18;
        node.vy = (node.vy ?? 0) * .18;
      });
      ticks += 1;
      if (ticks % 3 === 0 || simulation.alpha() < .04) setNodes(simulationNodes.map((node) => ({ ...node })));
    });
    return () => { simulation.stop(); };
  }, [dimensions, selectedTopic, topicGraph]);

  const visibleNodes = useMemo(() => nodes.filter((node) => {
    const queryMatch = !query || node.label.toLowerCase().includes(query.toLowerCase());
    return queryMatch;
  }), [nodes, query]);

  const selectedConnections = useMemo(() => selectedNode ? topicGraph.links
    .filter((link) => link.source === selectedNode || link.target === selectedNode)
    .map((link) => ({
      ...link,
      sourceNode: graphNodes.find((node) => node.id === link.source),
      targetNode: graphNodes.find((node) => node.id === link.target),
    })) : [], [selectedNode, topicGraph.links]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || listView) return;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * ratio;
    canvas.height = dimensions.height * ratio;
    canvas.style.width = `${dimensions.width}px`;
    canvas.style.height = `${dimensions.height}px`;
    const context = canvas.getContext('2d');
    if (!context) return;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, dimensions.width, dimensions.height);
    context.save();
    context.translate(viewport.x, viewport.y);
    context.scale(viewport.k, viewport.k);

    const focusedNode = selectedNode ?? hover?.node.id;
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const boundaryRadius = Math.min(dimensions.width, dimensions.height) * .31;

    if (selectedTopic) {
      context.beginPath();
      context.arc(centerX, centerY, boundaryRadius, 0, Math.PI * 2);
      context.fillStyle = colorTheme === 'light' ? `${colors[selectedTopic]}12` : `${colors[selectedTopic]}0b`;
      context.fill();
      context.setLineDash([7, 7]);
      context.strokeStyle = `${colors[selectedTopic]}8a`;
      context.lineWidth = 1.2;
      context.stroke();
      context.setLineDash([]);
      const edgeLabel = `${selectedTopic.toUpperCase()} TOPIC EDGE`;
      context.font = '700 9px ui-monospace, SFMono-Regular, Menlo, monospace';
      context.textAlign = 'center';
      const edgeLabelWidth = context.measureText(edgeLabel).width + 18;
      context.fillStyle = colorTheme === 'light' ? 'rgba(247, 246, 241, .96)' : 'rgba(8, 11, 9, .96)';
      context.fillRect(centerX - edgeLabelWidth / 2, centerY - boundaryRadius - 9, edgeLabelWidth, 18);
      context.strokeStyle = `${colors[selectedTopic]}73`;
      context.strokeRect(centerX - edgeLabelWidth / 2, centerY - boundaryRadius - 9, edgeLabelWidth, 18);
      context.fillStyle = colors[selectedTopic];
      context.fillText(edgeLabel, centerX, centerY - boundaryRadius + 4);
    }

    topicGraph.links.forEach((link) => {
      const source = nodes.find((node) => node.id === link.source);
      const target = nodes.find((node) => node.id === link.target);
      if (!source || !target || source.x === undefined || source.y === undefined || target.x === undefined || target.y === undefined) return;
      const emphasized = !selectedNode || source.id === selectedNode || target.id === selectedNode;
      context.beginPath();
      context.moveTo(source.x, source.y);
      context.lineTo(target.x, target.y);
      context.strokeStyle = colorTheme === 'light'
        ? (emphasized ? 'rgba(45, 75, 57, .42)' : 'rgba(65, 83, 71, .16)')
        : (emphasized ? 'rgba(122, 149, 132, .38)' : 'rgba(77, 91, 82, .13)');
      context.lineWidth = emphasized ? 1 : .7;
      context.stroke();

      if (focusedNode && (source.id === focusedNode || target.id === focusedNode)) {
        const midpointX = (source.x + target.x) / 2;
        const midpointY = (source.y + target.y) / 2;
        context.font = '600 8px ui-monospace, SFMono-Regular, Menlo, monospace';
        context.textAlign = 'center';
        const label = link.relation.toUpperCase();
        const labelWidth = context.measureText(label).width + 12;
        context.fillStyle = colorTheme === 'light' ? 'rgba(243, 241, 234, .94)' : 'rgba(8, 11, 9, .94)';
        context.fillRect(midpointX - labelWidth / 2, midpointY - 9, labelWidth, 17);
        context.strokeStyle = colorTheme === 'light' ? 'rgba(47, 103, 148, .35)' : 'rgba(134, 189, 248, .35)';
        context.strokeRect(midpointX - labelWidth / 2, midpointY - 9, labelWidth, 17);
        context.fillStyle = colorTheme === 'light' ? '#315b7d' : '#a9d1f7';
        context.fillText(label, midpointX, midpointY + 3);
      }
    });

    nodes.forEach((node) => {
      if (node.x === undefined || node.y === undefined) return;
      const matches = visibleNodes.some((visible) => visible.id === node.id);
      const isSelected = node.id === selectedNode;
      const isCore = node.category === selectedTopic;
      const radius = (isCore ? 7 : 5) + node.weight * (isCore ? .72 : .58);
      context.globalAlpha = matches ? (isCore ? 1 : .82) : .13;
      if (isSelected) {
        context.beginPath();
        context.arc(node.x, node.y, radius + 9, 0, Math.PI * 2);
        context.fillStyle = `${colors[node.category]}1f`;
        context.fill();
      }
      context.beginPath();
      context.arc(node.x, node.y, radius, 0, Math.PI * 2);
      context.fillStyle = isCore ? colors[node.category] : (colorTheme === 'light' ? '#f7f6f1' : '#0d100f');
      context.shadowBlur = isSelected ? 20 : 10;
      context.shadowColor = colors[node.category];
      context.fill();
      context.shadowBlur = 0;
      if (!isCore) {
        context.strokeStyle = colors[node.category];
        context.lineWidth = 2;
        context.stroke();
      }
      context.fillStyle = colorTheme === 'light' ? (isSelected ? '#101914' : '#35463b') : (isSelected ? '#f5f7f1' : '#aab2aa');
      context.font = `${isSelected ? 600 : 500} ${isSelected ? 12 : 10}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      context.textAlign = 'center';
      context.fillText(node.label, node.x, node.y + radius + 17);
      if (!isCore) {
        context.fillStyle = colorTheme === 'light' ? '#657068' : '#737e76';
        context.font = '700 7px ui-monospace, SFMono-Regular, Menlo, monospace';
        context.fillText('1 HOP', node.x, node.y + radius + 28);
      }
    });
    context.restore();
    context.globalAlpha = 1;
  }, [colorTheme, dimensions, hover, listView, nodes, selectedNode, selectedTopic, topicGraph.links, viewport, visibleNodes]);

  const nodeAt = (clientX: number, clientY: number) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return null;
    const x = (clientX - rect.left - viewport.x) / viewport.k;
    const y = (clientY - rect.top - viewport.y) / viewport.k;
    return nodes.find((node) => node.x !== undefined && node.y !== undefined && Math.hypot(node.x - x, node.y - y) < 21 / viewport.k) ?? null;
  };

  const selectNode = (nodeId: string) => { onSelect(nodeId); };
  const centerSelected = () => {
    const node = nodes.find((item) => item.id === selectedNode);
    if (node?.x === undefined || node.y === undefined) return;
    setViewport((current) => ({
      ...current,
      x: dimensions.width / 2 - node.x! * current.k,
      y: dimensions.height / 2 - node.y! * current.k,
    }));
  };
  const fitAll = () => {
    const positioned = nodes.filter((node) => node.x !== undefined && node.y !== undefined);
    if (!positioned.length) {
      setViewport({ x: 0, y: 0, k: 1 });
      return;
    }
    const minX = Math.min(...positioned.map((node) => node.x!));
    const maxX = Math.max(...positioned.map((node) => node.x!));
    const minY = Math.min(...positioned.map((node) => node.y!));
    const maxY = Math.max(...positioned.map((node) => node.y!));
    const graphWidth = Math.max(1, maxX - minX + 120);
    const graphHeight = Math.max(1, maxY - minY + 120);
    const scale = Math.min(1.35, Math.max(.5, Math.min(dimensions.width / graphWidth, dimensions.height / graphHeight)));
    setViewport({
      k: scale,
      x: dimensions.width / 2 - ((minX + maxX) / 2) * scale,
      y: dimensions.height / 2 - ((minY + maxY) / 2) * scale,
    });
  };
  const chooseTopic = (topic: NodeCategory) => {
    setViewport({ x: 0, y: 0, k: 1 });
    setQuery('');
    setHover(null);
    onTopicChange(topic);
    setListView(false);
  };

  return (
    <div className="graph-shell" ref={shellRef}>
      <section className={`topic-gate ${selectedTopic ? 'has-selection' : ''}`} aria-labelledby="topic-gate-title">
        <div className="topic-gate-heading">
          <span>STEP 01 · SET THE LENS</span>
          <strong id="topic-gate-title">{selectedTopic ? `${selectedTopic} network selected.` : 'Choose a topic first.'}</strong>
          <small>{selectedTopic ? 'Switch topics here at any time. The graph below shows the topic core plus its direct neighbors.' : 'We will build a focused map, then place directly connected outside nodes one hop beyond its edge.'}</small>
        </div>
        <div className="topic-options" role="group" aria-label="Choose a graph topic">
          {categories.map((topic, index) => {
            const stats = topicStats[topic];
            return (
              <button key={topic} type="button" className={selectedTopic === topic ? 'active' : ''} onClick={() => chooseTopic(topic)} aria-pressed={selectedTopic === topic}>
                <span className="topic-option-index">0{index + 1}</span>
                <span className="topic-option-copy">
                  <b><i style={{ background: colors[topic] }} />{topic}</b>
                  <small>{topicDescriptions[topic]}</small>
                  <em>{stats.nodes} core · {stats.neighbors} one-hop · {stats.stories} stories</em>
                </span>
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </section>

      {selectedTopic && <>
        <div className="graph-toolbar">
          <label className="graph-search">
            <Search size={15} aria-hidden="true" />
            <span className="sr-only">Search nodes in the selected topic</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => {
              if (event.key === 'Enter' && visibleNodes[0]) selectNode(visibleNodes[0].id);
            }} placeholder={`Search ${selectedTopic.toLowerCase()} network…`} />
          </label>
          <div className="graph-view-toggle" role="group" aria-label="Graph view mode">
            <button type="button" className={!listView ? 'active' : ''} onClick={() => setListView(false)} aria-label="Visual graph view" data-tooltip="Graph view"><Network size={16} /></button>
            <button type="button" className={listView ? 'active' : ''} onClick={() => setListView(true)} aria-label="Accessible list view" data-tooltip="List view"><List size={16} /></button>
          </div>
        </div>

        <div className="graph-scope-strip" aria-label="Graph boundary legend">
          <span><i className="core-node-key" style={{ background: colors[selectedTopic] }} /> Inside line · {selectedTopic} topic</span>
          <span><i className="hop-node-key" /> Outside line · directly connected, one hop away</span>
          <strong>STEP 02 · SELECT A NODE</strong>
        </div>

        {listView ? (
        <div className="graph-list" style={{ height: dimensions.height }}>
          {visibleNodes.map((node) => (
            <button key={node.id} type="button" className={selectedNode === node.id ? 'active' : ''} onClick={() => selectNode(node.id)}>
              <span className="node-swatch" style={{ background: colors[node.category] }} />
              <span><strong>{node.label}</strong><i>{node.category === selectedTopic ? `${node.category} · topic core` : `${node.category} · 1 hop`}</i></span>
              <b>{node.storyIds.length} {node.storyIds.length === 1 ? 'story' : 'stories'}</b>
            </button>
          ))}
        </div>
      ) : (
        <div className="canvas-wrap" style={{ height: dimensions.height }}>
          <canvas
            ref={canvasRef}
            aria-label={`${selectedTopic} knowledge graph. Solid nodes are inside the topic edge; outlined nodes are one direct connection outside it. Switch to list view for keyboard navigation.`}
            onPointerDown={(event) => {
              const target = nodeAt(event.clientX, event.clientY);
              if (target) { selectNode(target.id); return; }
              dragRef.current = { x: event.clientX, y: event.clientY, originX: viewport.x, originY: viewport.y };
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              if (dragRef.current) {
                setViewport((current) => ({ ...current, x: dragRef.current!.originX + event.clientX - dragRef.current!.x, y: dragRef.current!.originY + event.clientY - dragRef.current!.y }));
                return;
              }
              const target = nodeAt(event.clientX, event.clientY);
              setHover(target ? { node: target, x: event.clientX - event.currentTarget.getBoundingClientRect().left, y: event.clientY - event.currentTarget.getBoundingClientRect().top } : null);
            }}
            onPointerUp={() => { dragRef.current = null; }}
            onPointerLeave={() => { dragRef.current = null; setHover(null); }}
            onWheel={(event) => {
              const direction = event.deltaY < 0 ? .12 : -.12;
              setViewport((current) => ({ ...current, k: Math.min(2.1, Math.max(.5, current.k + direction)) }));
            }}
          />
          {hover && <div className="node-tooltip" style={{ left: hover.x, top: hover.y }}><b>{hover.node.label}</b><span>{hover.node.category === selectedTopic ? 'Topic core' : 'One hop outside'} · {hover.node.storyIds.length} stories · select to explain links</span></div>}
          <div className="graph-zoom" aria-label="Graph zoom controls">
            <button type="button" onClick={() => setViewport((current) => ({ ...current, k: Math.min(2.1, current.k + .18) }))} aria-label="Zoom in" data-tooltip="Zoom in"><Plus size={16} /></button>
            <button type="button" onClick={() => setViewport((current) => ({ ...current, k: Math.max(.5, current.k - .18) }))} aria-label="Zoom out" data-tooltip="Zoom out"><Minus size={16} /></button>
            <button className="graph-control-separator" type="button" onClick={centerSelected} disabled={!selectedNode} aria-label="Center selected node" data-tooltip="Center selected"><Crosshair size={16} /></button>
            <button type="button" onClick={fitAll} disabled={!nodes.length} aria-label="Fit all visible nodes to screen" data-tooltip="Fit all"><Maximize2 size={16} /></button>
          </div>
        </div>
      )}
      <section className={`connection-ledger ${selectedNode ? 'is-active' : ''}`} aria-live="polite" aria-label="Graph relationship details">
        <div className="connection-ledger-heading">
          <Network size={16} aria-hidden="true" />
          <span>
            <strong>{selectedNode ? 'Connections explained' : 'What connects these nodes?'}</strong>
            <small>{selectedNode ? `${selectedConnections.length} visible relationships around ${graphNodes.find((node) => node.id === selectedNode)?.label}` : `Select a node inside or just outside the ${selectedTopic} edge to reveal its relationships.`}</small>
          </span>
        </div>
        {selectedConnections.length > 0 && (
          <div className="connection-rows">
            {selectedConnections.map((connection) => (
              <div key={`${connection.source}-${connection.target}`}>
                <b className={connection.source === selectedNode ? 'selected' : ''}>{connection.sourceNode?.label}</b>
                <span>{connection.relation}<ArrowRight size={12} aria-hidden="true" /></span>
                <b className={connection.target === selectedNode ? 'selected' : ''}>{connection.targetNode?.label}</b>
              </div>
            ))}
          </div>
        )}
      </section>
      <footer className="graph-footer">
        <span><Maximize2 size={13} /> SCROLL TO ZOOM · DRAG TO PAN</span>
        <span>{topicGraph.nodes.length} NODES · {topicGraph.links.length} CONNECTIONS · {topicGraph.nodes.filter((node) => node.category !== selectedTopic).length} ONE-HOP</span>
      </footer>
      </>}
    </div>
  );
}
