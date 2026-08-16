import { ShieldCheck, Scale, Heart } from 'lucide-react';
import { situations } from '@/data/situations';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="tricolor-bar h-1" />
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-slate-900">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-bold">Know Your Police Rights</div>
                <div className="text-xs text-white/50">A citizen's guide for India</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Built for the Independence Day Lets Code Challenge. Empowering every Indian citizen
              to understand their rights and act confidently in any situation involving the police.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white/80">Situations</h4>
            <ul className="mt-4 space-y-2">
              {situations.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('situations')}
                    className="text-sm text-white/60 transition-colors hover:text-amber-400"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white/80">Quick Access</h4>
            <ul className="mt-4 space-y-2">
              <li><button onClick={() => onNavigate('situations')} className="text-sm text-white/60 hover:text-amber-400 transition-colors">All Situations</button></li>
              <li><button onClick={() => onNavigate('emergency')} className="text-sm text-white/60 hover:text-amber-400 transition-colors">Emergency Contacts</button></li>
              <li><a href="tel:112" className="text-sm text-white/60 hover:text-amber-400 transition-colors">Dial 112 — Emergency</a></li>
              <li><a href="tel:15100" className="text-sm text-white/60 hover:text-amber-400 transition-colors">Dial 15100 — Legal Aid</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <div className="flex items-center gap-2 text-xs text-white/40">
            <Scale className="h-4 w-4" />
            <span>Information is general guidance, not legal advice. For emergencies, dial 112.</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/40">
            <span>Made with</span>
            <Heart className="h-3.5 w-3.5 text-amber-500" />
            <span>for India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
