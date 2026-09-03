'use client';

import { ArrowDownRight, ArrowUpRight, Cpu, Database, Gauge } from 'lucide-react';
import { useMemo, useState } from 'react';

type Horizon = 'past' | 'now' | 'future';
type MetricKey = 'tokens' | 'vram' | 'context';

const metrics = {
  tokens: {
    label: 'Cost / 1M tokens', unit: '$', inverse: true, icon: Gauge,
    values: { 2021: 28, 2023: 11.2, 2024: 4.8, 2025: 1.4, 2026: 0.62, 2027: 0.31, 2028: 0.18, 2029: 0.09 },
    current: '$0.62', change: '−95.6%', note: 'since 2021',
  },
  vram: {
    label: 'GPU VRAM / $100', unit: 'GB', inverse: false, icon: Cpu,
    values: { 2021: 0.8, 2023: 1.2, 2024: 1.9, 2025: 2.8, 2026: 4.1, 2027: 5.7, 2028: 7.4, 2029: 10.2 },
    current: '4.1 GB', change: '+412%', note: 'since 2021',
  },
  context: {
    label: 'Context window', unit: 'M', inverse: false, icon: Database,
    values: { 2021: 0.008, 2023: 0.1, 2024: 0.5, 2025: 1, 2026: 2, 2027: 4, 2028: 7, 2029: 12 },
    current: '2M', change: '+249×', note: 'since 2021',
  },
} as const;

const ranges: Record<Horizon, number[]> = {
  past: [2021, 2023, 2024, 2025, 2026],
  now: [2024, 2025, 2026],
  future: [2026, 2027, 2028, 2029],
};

export function MetricsWidget() {
  const [metric, setMetric] = useState<MetricKey>('tokens');
  const [horizon, setHorizon] = useState<Horizon>('past');
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);
  const active = metrics[metric];

  const points = useMemo(() => ranges[horizon].map((year) => ({
    year,
    value: active.values[year as keyof typeof active.values],
  })), [active, horizon]);
  const max = Math.max(...points.map((point) => point.value));

  return (
    <section className="signals-section section-chapter" id="signals" aria-labelledby="signals-title" data-reveal>
      <div className="section-heading section-heading-signals">
        <div className="section-identity">
          <span className="chapter-number">02</span>
          <div>
            <span className="section-index amber-text">TECH EVOLUTION</span>
            <h2 id="signals-title">The curve is the story.</h2>
            <p className="section-description">Follow the economics beneath the headlines—from scarce compute to abundant intelligence.</p>
          </div>
        </div>
        <div className="section-command signals-command">
          <Gauge size={19} aria-hidden="true" />
          <span><i>COMPARE MODE</i><strong>Pick a signal and horizon</strong><small>Focus or hover the bars for exact values.</small></span>
        </div>
      </div>

      <div className="metric-workflow" aria-label="How to use the technology comparison">
        <span><b>01</b><i>SELECT</i> Metric</span>
        <span><b>02</b><i>SET</i> Time horizon</span>
        <span><b>03</b><i>INSPECT</i> Exact values</span>
      </div>

      <div className="metrics-shell">
        <div className="metric-selector" role="tablist" aria-label="Technology metric">
          {(Object.entries(metrics) as [MetricKey, typeof metrics[MetricKey]][]).map(([key, item]) => {
            const Icon = item.icon;
            return (
              <button key={key} type="button" role="tab" aria-selected={metric === key} className={metric === key ? 'active' : ''} onClick={() => setMetric(key)}>
                <span className="metric-icon"><Icon size={16} /></span>
                <span><i>{item.label}</i><strong>{item.current}</strong></span>
                <span className={item.inverse ? 'down-change' : 'up-change'}>
                  {item.inverse ? <ArrowDownRight size={13} /> : <ArrowUpRight size={13} />}{item.change}
                </span>
              </button>
            );
          })}
        </div>

        <div className="metric-chart-panel">
          <div className="chart-toolbar">
            <div>
              <span className="mono-label">{active.label.toUpperCase()}</span>
              <h3>{active.current} <small>{active.note}</small></h3>
            </div>
            <div className="horizon-tabs" role="group" aria-label="Time horizon">
              <button type="button" className={horizon === 'past' ? 'active' : ''} onClick={() => setHorizon('past')}>PAST 5Y</button>
              <button type="button" className={horizon === 'now' ? 'active' : ''} onClick={() => setHorizon('now')}>PRESENT</button>
              <button type="button" className={horizon === 'future' ? 'active' : ''} onClick={() => setHorizon('future')}>NEXT 3Y</button>
            </div>
          </div>

          <div className="bar-chart" aria-label={`${active.label} over time`}>
            <div className="chart-rule rule-25" /><div className="chart-rule rule-50" /><div className="chart-rule rule-75" />
            {points.map((point) => {
              const visualValue = active.inverse ? max / point.value : point.value;
              const visualMax = active.inverse ? Math.max(...points.map((p) => max / p.value)) : max;
              const height = 12 + (visualValue / visualMax) * 78;
              const projected = point.year > 2026;
              return (
                <button
                  className={`bar-column ${projected ? 'projected' : ''}`}
                  key={point.year}
                  style={{ '--bar-height': `${height}%` } as React.CSSProperties}
                  type="button"
                  onMouseEnter={() => setHoveredYear(point.year)}
                  onMouseLeave={() => setHoveredYear(null)}
                  onFocus={() => setHoveredYear(point.year)}
                  onBlur={() => setHoveredYear(null)}
                  aria-label={`${point.year}: ${active.unit === '$' ? '$' : ''}${point.value}${active.unit !== '$' ? ` ${active.unit}` : ''}${projected ? ', projected' : ''}`}
                >
                  <span className="bar-fill" />
                  <span className="bar-year">{point.year}</span>
                  {hoveredYear === point.year && (
                    <span className="chart-tooltip">
                      <b>{active.unit === '$' ? '$' : ''}{point.value}{active.unit !== '$' ? active.unit : ''}</b>
                      {projected ? 'PROJECTED' : 'OBSERVED'}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          <div className="projection-note"><span /> Dashed values are editorial projections based on the current improvement curve.</div>
        </div>
      </div>
    </section>
  );
}
