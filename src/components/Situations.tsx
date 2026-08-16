import { useState } from 'react';
import { situations, type Situation } from '@/data/situations';
import SituationCard from './SituationCard';
import SituationDetail from './SituationDetail';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Situations() {
  const [active, setActive] = useState<Situation | null>(null);
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="situations" className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      {/* Decorative background blobs */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div ref={ref} className={`reveal text-center ${visible ? 'reveal-visible' : ''}`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
            Situation → Rights → What To Do → Where to Complain
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Choose Your Situation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            Tap a card below that matches what you're facing. Each one breaks down your rights,
            the exact steps to take, and where to complain.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {situations.map((s, i) => (
            <SituationCard key={s.id} situation={s} index={i} onOpen={() => setActive(s)} />
          ))}
        </div>
      </div>

      {active && <SituationDetail situation={active} onClose={() => setActive(null)} />}
    </section>
  );
}
