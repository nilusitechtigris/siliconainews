'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';
type ThemeToggleProps = { className?: string; showLabel?: boolean };

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0c0f0e' : '#f3f1ea');
  window.dispatchEvent(new CustomEvent('silicon-theme-change', { detail: theme }));
}

export function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  function toggleTheme() {
    applyTheme(nextTheme);
    localStorage.setItem('silicon-theme', nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      className={`icon-button theme-toggle ${showLabel ? 'theme-toggle-labeled' : ''} ${className}`.trim()}
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      data-tooltip={showLabel ? undefined : `${nextTheme === 'light' ? 'Light' : 'Dark'} mode`}
    >
      {theme === 'dark' ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
      {showLabel && <span>Switch to {nextTheme} mode</span>}
    </button>
  );
}
