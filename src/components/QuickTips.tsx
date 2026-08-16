import { Lightbulb, Quote } from 'lucide-react';
import { tips } from '@/data/contacts';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function QuickTips() {
  const { ref: leftRef, visible: leftVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, visible: gridVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          {/* Left: sticky intro */}
          <div ref={leftRef} className={`reveal lg:sticky lg:top-28 ${leftVisible ? 'reveal-visible' : ''}`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700">
              <Lightbulb className="h-4 w-4 animate-pulse" />
              Remember These
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Golden Rules When Dealing with Police
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Keep these simple principles in mind. They protect you in almost every situation.
            </p>

            {/* Quote card */}
            <div className="mt-6 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-5">
              <Quote className="h-6 w-6 text-amber-400" />
              <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">
                "Ignorance of the law is not an excuse, but knowing your rights is your greatest protection."
              </p>
              <p className="mt-2 text-xs font-semibold text-amber-700">— Article 21, Constitution of India</p>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]">
              <img
                src="https://images.pexels.com/photos/4267611/pexels-photo-4267611.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Police officers interacting with citizens"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: tips grid */}
          <div ref={gridRef} className="grid gap-4 sm:grid-cols-2">
            {tips.map((tip, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${i * 80}ms` }}
                className={`reveal group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-amber-300 hover:bg-amber-50/50 hover:shadow-lg hover:-translate-y-1 ${
                  gridVisible ? 'reveal-visible' : ''
                }`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-sm font-bold text-white shadow-md transition-transform group-hover:scale-110 group-hover:rotate-6">
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
