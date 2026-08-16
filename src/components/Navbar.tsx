import { useEffect, useState } from 'react';
import { ShieldCheck, Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onNavigate: (id: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  const navItems = [
    { id: 'situations', label: 'Situations' },
    { id: 'tips', label: 'Golden Rules' },
    { id: 'emergency', label: 'Helplines' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
        scrolled ? 'bg-slate-950/90 shadow-2xl backdrop-blur-xl' : 'bg-gradient-to-b from-slate-950/40 to-transparent'
      }`}
    >
      <div className="tricolor-bar absolute top-0 left-0 right-0 h-1" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button onClick={() => go('top')} className="group flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-slate-900 transition-transform group-hover:scale-110 group-hover:rotate-6">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <span className="text-base font-bold text-white transition-colors group-hover:text-amber-400">
            Know Your Police Rights
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="group relative text-sm font-medium text-white/80 transition-colors hover:text-amber-400"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <a
            href="tel:112"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-red-500 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/40 active:scale-95"
          >
            <Phone className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
            Dial 112
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="text-white md:hidden"
          aria-label="Menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="py-2.5 text-left text-sm font-medium text-white/80 hover:text-amber-400"
              >
                {item.label}
              </button>
            ))}
            <a href="tel:112" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-2.5 text-sm font-bold text-white">
              <Phone className="h-4 w-4" />
              Dial 112
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
