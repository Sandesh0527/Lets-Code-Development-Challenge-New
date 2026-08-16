import type { Situation } from '@/data/situations';

const colorMap: Record<string, { bg: string; ring: string; icon: string; badge: string }> = {
  blue: { bg: 'bg-blue-50', ring: 'hover:ring-blue-300', icon: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
  red: { bg: 'bg-red-50', ring: 'hover:ring-red-300', icon: 'text-red-600', badge: 'bg-red-100 text-red-700' },
  amber: { bg: 'bg-amber-50', ring: 'hover:ring-amber-300', icon: 'text-amber-600', badge: 'bg-amber-100 text-amber-700' },
  emerald: { bg: 'bg-emerald-50', ring: 'hover:ring-emerald-300', icon: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700' },
  rose: { bg: 'bg-rose-50', ring: 'hover:ring-rose-300', icon: 'text-rose-600', badge: 'bg-rose-100 text-rose-700' },
  violet: { bg: 'bg-violet-50', ring: 'hover:ring-violet-300', icon: 'text-violet-600', badge: 'bg-violet-100 text-violet-700' },
  cyan: { bg: 'bg-cyan-50', ring: 'hover:ring-cyan-300', icon: 'text-cyan-600', badge: 'bg-cyan-100 text-cyan-700' },
};

interface Props {
  situation: Situation;
  index: number;
  onOpen: () => void;
}

export default function SituationCard({ situation, index, onOpen }: Props) {
  const c = colorMap[situation.color] ?? colorMap.blue;
  const Icon = situation.icon;

  return (
    <button
      onClick={onOpen}
      style={{ animationDelay: `${index * 60}ms` }}
      className={`group animate-fade-up text-left rounded-2xl border border-slate-200 bg-white p-6 ring-2 ring-transparent ${c.ring} transition-all hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2`}
    >
      <div className="flex items-start justify-between">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.bg} ${c.icon} transition-transform group-hover:scale-110`}>
          <Icon className="h-6 w-6" />
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${c.badge}`}>
          #{index + 1}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{situation.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{situation.short}</p>

      <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-slate-900 group-hover:gap-2.5 transition-all">
        <span>View rights & steps</span>
        <span className={c.icon}>→</span>
      </div>
    </button>
  );
}
