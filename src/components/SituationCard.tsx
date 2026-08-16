import { useRef, useCallback, type MouseEvent } from 'react';
import type { Situation } from '@/data/situations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const colorMap: Record<string, { bg: string; ring: string; icon: string; badge: string; glow: string }> = {
  blue: { bg: 'bg-blue-50', ring: 'hover:ring-blue-300', icon: 'text-blue-600', badge: 'bg-blue-100 text-blue-700', glow: 'hover:shadow-blue-200' },
  red: { bg: 'bg-red-50', ring: 'hover:ring-red-300', icon: 'text-red-600', badge: 'bg-red-100 text-red-700', glow: 'hover:shadow-red-200' },
  amber: { bg: 'bg-amber-50', ring: 'hover:ring-amber-300', icon: 'text-amber-600', badge: 'bg-amber-100 text-amber-700', glow: 'hover:shadow-amber-200' },
  emerald: { bg: 'bg-emerald-50', ring: 'hover:ring-emerald-300', icon: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700', glow: 'hover:shadow-emerald-200' },
  rose: { bg: 'bg-rose-50', ring: 'hover:ring-rose-300', icon: 'text-rose-600', badge: 'bg-rose-100 text-rose-700', glow: 'hover:shadow-rose-200' },
  violet: { bg: 'bg-violet-50', ring: 'hover:ring-violet-300', icon: 'text-violet-600', badge: 'bg-violet-100 text-violet-700', glow: 'hover:shadow-violet-200' },
  cyan: { bg: 'bg-cyan-50', ring: 'hover:ring-cyan-300', icon: 'text-cyan-600', badge: 'bg-cyan-100 text-cyan-700', glow: 'hover:shadow-cyan-200' },
};

interface Props {
  situation: Situation;
  index: number;
  onOpen: () => void;
}

export default function SituationCard({ situation, index, onOpen }: Props) {
  const { ref, visible } = useScrollReveal<HTMLButtonElement>();
  const c = colorMap[situation.color] ?? colorMap.blue;
  const Icon = situation.icon;
  const cardRef = useRef<HTMLButtonElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (el) el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
  };

  const setRefs = useCallback((node: HTMLButtonElement | null) => {
    ref.current = node;
    cardRef.current = node;
  }, []);

  return (
    <button
      ref={setRefs}
      onClick={onOpen}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`reveal group text-left rounded-2xl border border-slate-200 bg-white p-6 ring-2 ring-transparent ${c.ring} ${c.glow} transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 ${visible ? 'reveal-visible' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-start justify-between">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.bg} ${c.icon} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
          <Icon className="h-6 w-6" />
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${c.badge} transition-transform group-hover:scale-110`}>
          #{index + 1}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-slate-700">{situation.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{situation.short}</p>

      <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-all group-hover:gap-3">
        <span>View rights & steps</span>
        <span className={`transition-transform ${c.icon} group-hover:translate-x-1`}>→</span>
      </div>

      {/* Bottom accent line */}
      <div className={`mt-4 h-1 w-0 rounded-full bg-current ${c.icon} transition-all duration-500 group-hover:w-full opacity-20`} />
    </button>
  );
}
