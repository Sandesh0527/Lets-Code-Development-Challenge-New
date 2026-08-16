import { useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Situations from '@/components/Situations';
import QuickTips from '@/components/QuickTips';
import EmergencyContacts from '@/components/EmergencyContacts';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function App() {
  const scrollTo = useCallback((id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div id="top" className="min-h-screen bg-white">
      <Navbar onNavigate={scrollTo} />
      <Hero onExplore={() => scrollTo('situations')} />
      <Situations />
      <div id="tips">
        <QuickTips />
      </div>
      <EmergencyContacts />
      <Footer onNavigate={scrollTo} />
      <Chatbot />
    </div>
  );
}
