'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { TerminalMode } from '@/components/TerminalMode';
import { useTerminalMode } from '@/hooks/useTerminalMode';

type SiteFrameProps = {
  children: ReactNode;
  minimalHeader?: boolean;
};

export function SiteFrame({ children, minimalHeader = false }: SiteFrameProps) {
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

    const observeNewSections = () => {
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)').forEach((section) => observer.observe(section));
    };
    sections.forEach((section) => observer.observe(section));
    const mutationObserver = new MutationObserver(observeNewSections);
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      root.classList.remove('motion-ready');
    };
  }, []);

  return (
    <main>
      <Header
        onTerminalOpen={() => setTerminalOpen(true)}
        onGraphOpen={() => window.location.assign('/graph')}
        minimal={minimalHeader}
      />
      {children}
      <TerminalMode open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </main>
  );
}
