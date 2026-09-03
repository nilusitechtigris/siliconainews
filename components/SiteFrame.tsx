'use client';

import type { ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { TerminalMode } from '@/components/TerminalMode';
import { useTerminalMode } from '@/hooks/useTerminalMode';

type SiteFrameProps = {
  children: ReactNode | ((controls: { playTick: () => void }) => ReactNode);
};

export function SiteFrame({ children }: SiteFrameProps) {
  const [audioEnabled, setAudioEnabled] = useState(false);
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

  const playTick = useCallback(() => {
    if (!audioEnabled) return;
    const AudioContextCtor = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextCtor) return;

    const context = new AudioContextCtor();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = 690;
    gain.gain.setValueAtTime(.025, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .035);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + .04);
    navigator.vibrate?.(8);
  }, [audioEnabled]);

  return (
    <main>
      <Header
        audioEnabled={audioEnabled}
        onAudioToggle={() => setAudioEnabled((current) => !current)}
        onTerminalOpen={() => setTerminalOpen(true)}
        onGraphOpen={() => window.location.assign('/graph')}
      />
      {typeof children === 'function' ? children({ playTick }) : children}
      <TerminalMode open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </main>
  );
}
