import { ArrowLeft, BarChart3 } from 'lucide-react';
import { MetricsWidget } from '@/components/MetricsWidget';
import { SiteFrame } from '@/components/SiteFrame';

export default function EvolutionPage() {
  return (
    <SiteFrame>
      <section className="route-masthead route-amber" id="top">
        <a className="route-back" href="/"><ArrowLeft size={15} /> Back to switchboard</a>
        <div><span>TECH EVOLUTION</span><BarChart3 size={30} aria-hidden="true" /></div>
        <h1>Read the curve.</h1>
        <p>Compare the economics and capability shifts underneath today&apos;s technology headlines.</p>
      </section>
      <MetricsWidget />
    </SiteFrame>
  );
}
