import { useEffect, useState } from 'react';
import { ShieldCheck, ChevronDown, Sparkles, Scale, BookOpen } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

interface HeroProps {
  onExplore: () => void;
}

interface Stat { n: number; suffix: string; l: string }

export default function Hero({ onExplore }: HeroProps) {
  const [offsetY, setOffsetY] = useState(0);
  const [countersStart, setCountersStart] = useState(false);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    const t = setTimeout(() => setCountersStart(true), 600);
    return () => { window.removeEventListener('scroll', onScroll); clearTimeout(t); };
  }, []);

  const stats: Stat[] = [
    { n: 7, suffix: '+', l: 'Key Situations' },
    { n: 30, suffix: 's', l: 'To Understand' },
    { n: 24, suffix: 'x7', l: 'Helplines' },
  ];

  const c1 = useCountUp(stats[0].n, 1200, countersStart);
  const c2 = useCountUp(stats[1].n, 1400, countersStart);
  const c3 = useCountUp(stats[2].n, 1600, countersStart);
  const counts = [c1, c2, c3];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with parallax */}
      <div className="absolute inset-0" style={{ transform: `translateY(${offsetY * 0.4}px) scale(1.1)` }}>
        <img
          src="https://images.pexels.com/photos/3699921/pexels-photo-3699921.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Indian national flag at sunset"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/75 to-slate-950/95" />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-tr from-saffron/10 via-transparent to-emerald-500/10" style={{ backgroundSize: '200% 200%' }} />

      {/* Floating decorative shapes */}
      <div className="absolute left-[8%] top-[22%] z-5 animate-float">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md">
          <Scale className="h-7 w-7 text-amber-400/80" />
        </div>
      </div>
      <div className="absolute right-[10%] top-[30%] z-5 animate-float-slow">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md">
          <BookOpen className="h-7 w-7 text-emerald-400/80" />
        </div>
      </div>
      <div className="absolute left-[15%] bottom-[28%] z-5 animate-float-rotate">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md">
          <ShieldCheck className="h-6 w-6 text-white/70" />
        </div>
      </div>
      <div className="absolute right-[18%] bottom-[24%] z-5 animate-float">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/20 bg-amber-500/10 backdrop-blur-md">
          <Sparkles className="h-6 w-6 text-amber-400/80" />
        </div>
      </div>

      {/* Tricolor accent bar */}
      <div className="tricolor-bar absolute top-0 left-0 right-0 h-1.5 z-20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium text-white/90">Know Your Rights · Be Your Own Shield</span>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-white animate-fade-up md:text-6xl">
            Know Your <span className="text-shimmer">Police Rights</span>
            <br />
            <span className="text-2xl font-bold text-white/90 md:text-4xl">A citizen's quick guide for India</span>
          </h1>

          <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-white/80">
            Stopped, questioned, arrested, or facing a refused FIR — find out your rights, what to do,
            and where to complain, all within 30 seconds.
          </p>

          <div className="mt-8 flex flex-wrap animate-fade-up gap-4">
            <button
              onClick={onExplore}
              className="group inline-flex animate-glow items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-base font-bold text-slate-900 transition-all hover:bg-amber-400 hover:scale-105 active:scale-95"
            >
              <ShieldCheck className="h-5 w-5" />
              Explore Situations
            </button>
            <a
              href="#emergency"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
            >
              Emergency Contacts
            </a>
          </div>

          {/* Quick stats with animated counters */}
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.l}
                className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-md transition-all hover:border-amber-400/40 hover:bg-white/10"
              >
                <div className="text-2xl font-extrabold text-amber-400 md:text-3xl">
                  {counts[i]}{s.suffix}
                </div>
                <div className="mt-1 text-xs font-medium text-white/70 md:text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator with pulse ring */}
      <button
        onClick={onExplore}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transition-colors hover:text-white"
        aria-label="Scroll down"
      >
        <div className="relative flex h-12 w-12 items-center justify-center">
          <span className="absolute h-12 w-12 animate-pulse-ring rounded-full border-2 border-white/40" />
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
            <ChevronDown className="h-5 w-5 animate-bounce text-white/80" />
          </span>
        </div>
      </button>
    </section>
  );
}
