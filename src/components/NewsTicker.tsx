import { Siren } from 'lucide-react';

const items = [
  'You cannot be arrested without being told the grounds of arrest — Article 22(1)',
  'Dial 112 for police, fire, or ambulance — works without SIM or balance',
  'If FIR is refused, send your complaint by registered post to the SP',
  'A woman cannot be arrested after sunset except in exceptional cases',
  'You must be produced before a magistrate within 24 hours of arrest',
  'Demand a copy of the seizure list whenever police take your belongings',
  'Never pay a bribe — report to the Anti-Corruption Bureau',
  'Free legal aid: dial 15100 (NALSA helpline)',
  'Women helpline 1091 is available 24x7 across India',
];

export default function NewsTicker() {
  const doubled = [...items, ...items];

  return (
    <div className="relative flex items-center gap-3 overflow-hidden border-y border-white/10 bg-slate-950 py-3">
      <div className="z-10 flex shrink-0 items-center gap-2 bg-amber-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-900">
        <Siren className="h-3.5 w-3.5 animate-pulse" />
        Know This
      </div>
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((t, i) => (
          <span key={i} className="mx-8 text-sm font-medium text-white/70">
            {t}
            <span className="ml-8 text-amber-500">●</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent" />
    </div>
  );
}
