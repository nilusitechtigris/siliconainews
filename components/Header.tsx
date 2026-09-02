'use client';

import { BarChart3, Menu, Network, TerminalSquare, Volume2, VolumeX, X } from 'lucide-react';
import { useState } from 'react';
import { usePulseCountdown } from '@/hooks/usePulseCountdown';

type HeaderProps = {
  audioEnabled: boolean;
  onAudioToggle: () => void;
  onTerminalOpen: () => void;
  onGraphOpen: () => void;
};

const navItems = [
  { label: 'Briefing', href: '#briefing' },
  { label: 'Signals', href: '#signals' },
  { label: 'Graph', href: '#graph' },
];

export function Header({ audioEnabled, onAudioToggle, onTerminalOpen, onGraphOpen }: HeaderProps) {
  const countdown = usePulseCountdown();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Silicon AI News home">
          <span className="brand-mark">S</span>
          <span>Silicon <em>AI</em> News</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
        </nav>

        <div className="header-tools">
          <button
            className="icon-button header-icon"
            type="button"
            onClick={onAudioToggle}
            aria-pressed={audioEnabled}
            aria-label={audioEnabled ? 'Turn interface sounds off' : 'Turn interface sounds on'}
            data-tooltip={audioEnabled ? 'Sound on' : 'Sound off'}
          >
            {audioEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
          <button
            className="icon-button header-icon"
            type="button"
            onClick={onTerminalOpen}
            aria-label="Open terminal mode"
            data-tooltip="Terminal · Ctrl Shift K"
          >
            <TerminalSquare size={16} />
          </button>
          <div className="pulse-pill" aria-label={`Next AI news pulse in ${countdown}`}>
            <span className="live-dot" />
            <span className="pulse-label">NEXT PULSE</span> <strong>{countdown}</strong>
          </div>
          <button className="icon-button menu-button" type="button" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <Menu size={19} />
          </button>
        </div>
      </header>

      <div className={`mobile-drawer ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <button className="drawer-backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)} />
        <aside aria-label="Mobile navigation">
          <div className="drawer-heading">
            <span className="mono-label">NAVIGATION</span>
            <button className="icon-button" type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={20} /></button>
          </div>
          {navItems.map((item, index) => (
            <a href={item.href} key={item.label} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item.label}</a>
          ))}
          <button className="drawer-action" type="button" onClick={() => { onGraphOpen(); setMenuOpen(false); }}><Network size={18} /> Open graph viewer</button>
          <a className="drawer-action" href="#signals" onClick={() => setMenuOpen(false)}><BarChart3 size={18} /> View metric signals</a>
        </aside>
      </div>
    </>
  );
}
