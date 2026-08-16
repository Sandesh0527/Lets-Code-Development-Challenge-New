import { Lightbulb } from 'lucide-react';
import { tips } from '@/data/contacts';

export default function QuickTips() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700">
              <Lightbulb className="h-4 w-4" />
              Remember These
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Golden Rules When Dealing with Police
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Keep these simple principles in mind. They protect you in almost every situation.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/4267611/pexels-photo-4267611.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Police officers interacting with citizens"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {tips.map((tip, i) => (
              <div
                key={i}
                style={{ animationDelay: `${i * 60}ms` }}
                className="group animate-fade-up rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-amber-300 hover:bg-amber-50/50 hover:shadow-md"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
