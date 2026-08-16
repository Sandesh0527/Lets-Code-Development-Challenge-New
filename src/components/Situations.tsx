import { useState } from 'react';
import { situations, type Situation } from '@/data/situations';
import SituationCard from './SituationCard';
import SituationDetail from './SituationDetail';

export default function Situations() {
  const [active, setActive] = useState<Situation | null>(null);

  return (
    <section id="situations" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-amber-600">
            Situation → Rights → What To Do → Where to Complain
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
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
