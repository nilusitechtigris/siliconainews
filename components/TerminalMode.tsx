'use client';

import { X } from 'lucide-react';
import { newsJson } from '@/data/news';

type TerminalModeProps = { open: boolean; onClose: () => void };

export function TerminalMode({ open, onClose }: TerminalModeProps) {
  if (!open) return null;

  return (
    <section className="terminal-mode" role="dialog" aria-modal="true" aria-label="Raw news terminal">
      <div className="terminal-scanlines" aria-hidden="true" />
      <header>
        <span><b>SAIN://</b> RAW_FEED_V2.6</span>
        <button type="button" onClick={onClose} aria-label="Exit terminal mode"><X size={18} /> ESC</button>
      </header>
      <div className="terminal-copy">
        <p>&gt; AUTHENTICATING NEWSROOM AGENTS <span>OK</span></p>
        <p>&gt; MOUNTING KNOWLEDGE GRAPH <span>OK</span></p>
        <p>&gt; PULSE CHANNEL: {newsJson.pulse}</p>
        <pre>{JSON.stringify(newsJson, null, 2)}</pre>
        <p className="terminal-cursor">&gt; AWAITING NEXT PULSE <i>█</i></p>
      </div>
    </section>
  );
}
