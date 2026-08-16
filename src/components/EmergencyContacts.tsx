import { Phone, Siren } from 'lucide-react';
import { emergencyContacts } from '@/data/contacts';

export default function EmergencyContacts() {
  return (
    <section id="emergency" className="relative overflow-hidden bg-slate-900 py-20 md:py-28">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Gavel and justice"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-1.5 text-sm font-semibold text-red-300">
            <Siren className="h-4 w-4" />
            Available 24x7
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Emergency & Helpline Numbers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
            Save these numbers now. In a crisis, a single call can make the difference.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {emergencyContacts.map((c, i) => (
            <a
              key={c.tag}
              href={`tel:${c.number.replace(/[^0-9+]/g, '')}`}
              style={{ animationDelay: `${i * 60}ms` }}
              className="group animate-fade-up rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-amber-400/50 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-red-500/20 px-2.5 py-1 text-xs font-bold text-red-300">
                  {c.tag}
                </span>
                <Phone className="h-4 w-4 text-white/40 transition-colors group-hover:text-amber-400" />
              </div>
              <div className="mt-3 text-2xl font-extrabold tracking-tight text-white">
                {c.number}
              </div>
              <div className="mt-1 text-sm font-medium text-white/80">{c.name}</div>
              <div className="mt-2 text-xs leading-relaxed text-white/50">{c.desc}</div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-6 text-center">
          <p className="text-sm text-amber-100/90">
            <strong className="font-bold text-amber-300">112</strong> is India's single unified emergency number for police, fire, and ambulance — works from any phone, even without a SIM card or balance.
          </p>
        </div>
      </div>
    </section>
  );
}
