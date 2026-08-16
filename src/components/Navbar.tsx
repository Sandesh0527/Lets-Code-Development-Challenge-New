import { useEffect, useState } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (id: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="tricolor-bar absolute top-0 left-0 right-0 h-1" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button onClick={() => go('top')} className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-slate-900">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <span className={`text-base font-bold transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>
            Know Your Police Rights
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          <button onClick={() => go('situations')} className="text-sm font-medium text-white/80 hover:text-amber-400 transition-colors">
            Situations
          </button>
          <button onClick={() => go('tips')} className="text-sm font-medium text-white/80 hover:text-amber-400 transition-colors">
            Golden Rules
          </button>
          <button onClick={() => go('emergency')} className="text-sm font-medium text-white/80 hover:text-amber-400 transition-colors">
            Helplines
          </button>
          <a
            href="tel:112"
            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-red-400"
          >
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
        <div className="border-t border-white/10 bg-slate-900/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            <button onClick={() => go('situations')} className="py-2.5 text-left text-sm font-medium text-white/80 hover:text-amber-400">Situations</button>
            <button onClick={() => go('tips')} className="py-2.5 text-left text-sm font-medium text-white/80 hover:text-amber-400">Golden Rules</button>
            <button onClick={() => go('emergency')} className="py-2.5 text-left text-sm font-medium text-white/80 hover:text-amber-400">Helplines</button>
            <a href="tel:112" className="mt-2 rounded-lg bg-red-500 px-4 py-2.5 text-center text-sm font-bold text-white">Dial 112</a>
          </div>
        </div>
      )}
    </header>
  );
}
