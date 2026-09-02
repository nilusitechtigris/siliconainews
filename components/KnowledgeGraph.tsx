'use client';

import { Crosshair, List, Maximize2, Minus, Network, Plus, Search } from 'lucide-react';
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation, type SimulationLinkDatum, type SimulationNodeDatum } from 'd3-force';
import { useEffect, useMemo, useRef, useState } from 'react';
import { categories, graphLinks, graphNodes, type GraphNode, type NodeCategory } from '@/data/news';

type SimNode = GraphNode & SimulationNodeDatum;
type Viewport = { x: number; y: number; k: number };

const colors: Record<NodeCategory, string> = {
  Hardware: '#8ef0b3', Models: '#86bdf8', Policy: '#f3b75a', Robotics: '#f08f7b',
};

type KnowledgeGraphProps = {
  selectedNode: string | null;
  onSelect: (nodeId: string) => void;
  onTick?: () => void;
  compact?: boolean;
};

export default function KnowledgeGraph({ selectedNode, onSelect, onTick, compact = false }: KnowledgeGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ x: number; y: number; originX: number; originY: number } | null>(null);
  const [nodes, setNodes] = useState<SimNode[]>(graphNodes.map((node) => ({ ...node })));
  const [dimensions, setDimensions] = useState({ width: 760, height: compact ? 420 : 530 });
  const [viewport, setViewport] = useState<Viewport>({ x: 0, y: 0, k: 1 });
  const [category, setCategory] = useState<NodeCategory | 'All'>('All');
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

  useEffect(() => {
    const simulationNodes: SimNode[] = graphNodes.map((node) => ({ ...node }));
    const links: SimulationLinkDatum<SimNode>[] = graphLinks.map((link) => ({ ...link }));
    const simulation = forceSimulation(simulationNodes)
      .force('link', forceLink<SimNode, SimulationLinkDatum<SimNode>>(links).id((node) => node.id).distance(96).strength(.62))
      .force('charge', forceManyBody().strength(-290))
      .force('center', forceCenter(dimensions.width / 2, dimensions.height / 2))
      .force('collision', forceCollide<SimNode>().radius((node) => 25 + node.weight).strength(.9));

    let ticks = 0;
    simulation.on('tick', () => {
      ticks += 1;
      if (ticks % 3 === 0 || simulation.alpha() < .04) setNodes(simulationNodes.map((node) => ({ ...node })));
    });
    return () => { simulation.stop(); };
  }, [dimensions]);

  const visibleNodes = useMemo(() => nodes.filter((node) => {
    const categoryMatch = category === 'All' || node.category === category;
    const queryMatch = !query || node.label.toLowerCase().includes(query.toLowerCase());
    return categoryMatch && queryMatch;
  }), [category, nodes, query]);

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

    graphLinks.forEach((link) => {
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
    });

    nodes.forEach((node) => {
      if (node.x === undefined || node.y === undefined) return;
      const matches = visibleNodes.some((visible) => visible.id === node.id);
      const isSelected = node.id === selectedNode;
      const radius = 7 + node.weight * .72;
      context.globalAlpha = matches ? 1 : .15;
      if (isSelected) {
        context.beginPath();
        context.arc(node.x, node.y, radius + 9, 0, Math.PI * 2);
        context.fillStyle = `${colors[node.category]}1f`;
        context.fill();
      }
      context.beginPath();
      context.arc(node.x, node.y, radius, 0, Math.PI * 2);
      context.fillStyle = colors[node.category];
      context.shadowBlur = isSelected ? 20 : 10;
      context.shadowColor = colors[node.category];
      context.fill();
      context.shadowBlur = 0;
      context.fillStyle = colorTheme === 'light' ? (isSelected ? '#101914' : '#35463b') : (isSelected ? '#f5f7f1' : '#aab2aa');
      context.font = `${isSelected ? 600 : 500} ${isSelected ? 12 : 10}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      context.textAlign = 'center';
      context.fillText(node.label, node.x, node.y + radius + 17);
    });
    context.restore();
    context.globalAlpha = 1;
  }, [colorTheme, dimensions, listView, nodes, selectedNode, viewport, visibleNodes]);

  const nodeAt = (clientX: number, clientY: number) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return null;
    const x = (clientX - rect.left - viewport.x) / viewport.k;
    const y = (clientY - rect.top - viewport.y) / viewport.k;
    return nodes.find((node) => node.x !== undefined && node.y !== undefined && Math.hypot(node.x - x, node.y - y) < 21 / viewport.k) ?? null;
  };

  const selectNode = (nodeId: string) => { onSelect(nodeId); onTick?.(); };
  const resetView = () => { setViewport({ x: 0, y: 0, k: 1 }); setQuery(''); setCategory('All'); };

  return (
    <div className="graph-shell" ref={shellRef}>
      <div className="graph-toolbar">
        <label className="graph-search">
          <Search size={15} aria-hidden="true" />
          <span className="sr-only">Search nodes</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => {
            if (event.key === 'Enter' && visibleNodes[0]) selectNode(visibleNodes[0].id);
          }} placeholder="Search entities…" />
        </label>
        <div className="graph-view-toggle" role="group" aria-label="Graph view mode">
          <button type="button" className={!listView ? 'active' : ''} onClick={() => setListView(false)} aria-label="Visual graph view" data-tooltip="Graph view"><Network size={16} /></button>
          <button type="button" className={listView ? 'active' : ''} onClick={() => setListView(true)} aria-label="Accessible list view" data-tooltip="List view"><List size={16} /></button>
        </div>
      </div>

      <div className="cluster-filter" role="group" aria-label="Filter graph by cluster">
        {(['All', ...categories] as const).map((item) => (
          <button key={item} type="button" className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>
            {item !== 'All' && <span style={{ background: colors[item] }} />}{item}
          </button>
        ))}
      </div>

      {listView ? (
        <div className="graph-list" style={{ height: dimensions.height }}>
          {visibleNodes.map((node) => (
            <button key={node.id} type="button" className={selectedNode === node.id ? 'active' : ''} onClick={() => selectNode(node.id)}>
              <span className="node-swatch" style={{ background: colors[node.category] }} />
              <span><strong>{node.label}</strong><i>{node.category}</i></span>
              <b>{node.storyIds.length} {node.storyIds.length === 1 ? 'story' : 'stories'}</b>
            </button>
          ))}
        </div>
      ) : (
        <div className="canvas-wrap" style={{ height: dimensions.height }}>
          <canvas
            ref={canvasRef}
            aria-label="Interactive knowledge graph. Switch to list view for keyboard navigation."
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
              setViewport((current) => ({ ...current, k: Math.min(2.1, Math.max(.65, current.k + direction)) }));
            }}
          />
          {hover && <div className="node-tooltip" style={{ left: hover.x, top: hover.y }}><b>{hover.node.label}</b><span>{hover.node.category} · {hover.node.storyIds.length} stories</span></div>}
          <div className="graph-zoom" aria-label="Graph zoom controls">
            <button type="button" onClick={() => setViewport((current) => ({ ...current, k: Math.min(2.1, current.k + .18) }))} aria-label="Zoom in" data-tooltip="Zoom in"><Plus size={16} /></button>
            <button type="button" onClick={() => setViewport((current) => ({ ...current, k: Math.max(.65, current.k - .18) }))} aria-label="Zoom out" data-tooltip="Zoom out"><Minus size={16} /></button>
            <button type="button" onClick={resetView} aria-label="Reset graph view" data-tooltip="Reset"><Crosshair size={16} /></button>
          </div>
        </div>
      )}
      <footer className="graph-footer">
        <span><Maximize2 size={13} /> SCROLL TO ZOOM · DRAG TO PAN</span>
        <span>{visibleNodes.length} NODES · {graphLinks.length} CONNECTIONS</span>
      </footer>
    </div>
  );
}
