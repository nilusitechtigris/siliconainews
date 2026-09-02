'use client';

import { useEffect, useRef, useState } from 'react';

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export function useTerminalMode() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const progress = useRef<string[]>([]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setTerminalOpen(false);
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setTerminalOpen((current) => !current);
        return;
      }
      progress.current = [...progress.current, event.key].slice(-KONAMI.length);
      if (KONAMI.every((key, index) => progress.current[index]?.toLowerCase() === key.toLowerCase())) {
        setTerminalOpen(true);
        progress.current = [];
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return { terminalOpen, setTerminalOpen };
}
