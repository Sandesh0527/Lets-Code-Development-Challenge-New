import { ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3699921/pexels-photo-3699921.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Indian national flag at sunset"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/75 to-slate-900/90" />
      </div>

      {/* Tricolor accent bar */}
      <div className="tricolor-bar absolute top-0 left-0 right-0 h-1.5 z-20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md animate-fade-up">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium text-white/90">Know Your Rights · Be Your Own Shield</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white text-balance md:text-6xl animate-fade-up">
            Know Your <span className="text-amber-400">Police Rights</span>
            <br />
            <span className="text-2xl font-bold text-white/90 md:text-4xl">A citizen's quick guide for India</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 animate-fade-up">
            Stopped, questioned, arrested, or facing a refused FIR — find out your rights, what to do,
            and where to complain, all within 30 seconds.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up">
            <button
              onClick={onExplore}
              className="group inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-base font-bold text-slate-900 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30 active:scale-95"
            >
              <ShieldCheck className="h-5 w-5" />
              Explore Situations
            </button>
            <a
              href="#emergency"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
            >
              Emergency Contacts
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { n: '7+', l: 'Key Situations' },
              { n: '30s', l: 'To Understand' },
              { n: '24x7', l: 'Helplines' },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-md">
                <div className="text-2xl font-extrabold text-amber-400 md:text-3xl">{s.n}</div>
                <div className="mt-1 text-xs font-medium text-white/70 md:text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={onExplore}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  );
}
