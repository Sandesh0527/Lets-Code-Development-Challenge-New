import { useEffect, useState } from 'react';
import {
  X,
  ShieldCheck,
  ListChecks,
  Footprints,
  Gavel,
  BookMarked,
  CheckCircle2,
} from 'lucide-react';
import type { Situation } from '@/data/situations';

interface Props {
  situation: Situation;
  onClose: () => void;
}

const colorMap: Record<string, { accent: string; chip: string; icon: string }> = {
  blue: { accent: 'text-blue-600', chip: 'bg-blue-50 text-blue-700 border-blue-200', icon: 'bg-blue-100 text-blue-600' },
  red: { accent: 'text-red-600', chip: 'bg-red-50 text-red-700 border-red-200', icon: 'bg-red-100 text-red-600' },
  amber: { accent: 'text-amber-600', chip: 'bg-amber-50 text-amber-700 border-amber-200', icon: 'bg-amber-100 text-amber-600' },
  emerald: { accent: 'text-emerald-600', chip: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: 'bg-emerald-100 text-emerald-600' },
  rose: { accent: 'text-rose-600', chip: 'bg-rose-50 text-rose-700 border-rose-200', icon: 'bg-rose-100 text-rose-600' },
  violet: { accent: 'text-violet-600', chip: 'bg-violet-50 text-violet-700 border-violet-200', icon: 'bg-violet-100 text-violet-600' },
  cyan: { accent: 'text-cyan-600', chip: 'bg-cyan-50 text-cyan-700 border-cyan-200', icon: 'bg-cyan-100 text-cyan-600' },
};

export default function SituationDetail({ situation, onClose }: Props) {
  const c = colorMap[situation.color] ?? colorMap.blue;
  const Icon = situation.icon;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center md:items-center">
      <div
        className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity ${show ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      <div
        className={`relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto scrollbar-thin rounded-t-3xl bg-white md:rounded-3xl transition-all duration-300 ${show ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-100 bg-white/95 p-6 backdrop-blur">
          <div className="flex items-center gap-4 pr-4">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${c.icon}`}>
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">{situation.title}</h3>
              <p className="text-sm text-slate-500">{situation.short}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-8 p-6">
          {/* Summary */}
          <p className="rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
            {situation.summary}
          </p>

          {/* Rights */}
          <section>
            <div className="flex items-center gap-2">
              <ShieldCheck className={`h-5 w-5 ${c.accent}`} />
              <h4 className="text-base font-bold text-slate-900">Your Rights</h4>
            </div>
            <ul className="mt-3 space-y-2.5">
              {situation.rights.map((r, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-700">
                  <CheckCircle2 className={`mt-0.5 h-4.5 w-4.5 shrink-0 ${c.accent}`} />
                  <span className="leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* What to do */}
          <section>
            <div className="flex items-center gap-2">
              <Footprints className={`h-5 w-5 ${c.accent}`} />
              <h4 className="text-base font-bold text-slate-900">What To Do</h4>
            </div>
            <ol className="mt-3 space-y-3">
              {situation.whatToDo.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-700">
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${c.chip} border`}>
                    {i + 1}
                  </span>
                  <span className="leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Where to complain */}
          <section>
            <div className="flex items-center gap-2">
              <Gavel className={`h-5 w-5 ${c.accent}`} />
              <h4 className="text-base font-bold text-slate-900">Where To Complain</h4>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {situation.complaint.map((cmp, i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-2">
                    <ListChecks className={`h-4 w-4 ${c.accent}`} />
                    <span className="text-sm font-bold text-slate-900">{cmp.label}</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{cmp.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Legal basis */}
          <div className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <BookMarked className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Legal Basis</span>
              <p className="mt-0.5 text-sm text-slate-700">{situation.legalBasis}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
