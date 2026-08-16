import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { getBotReply } from '@/data/chatbot';

interface Message {
  role: 'user' | 'bot';
  text: string;
  followUps?: string[];
}

const initialMessages: Message[] = [
  {
    role: 'bot',
    text: "Namaste! I'm your Police Rights assistant. Tell me what's happening — stopped, arrested, FIR refused, asked for a bribe — and I'll guide you.",
    followUps: ['I was stopped by police', 'Police refused my FIR', 'Asked for a bribe'],
  },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((m) => [...m, { role: 'user', text: trimmed }]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const reply = getBotReply(trimmed);
      setMessages((m) => [...m, { role: 'bot', text: reply.text, followUps: reply.followUps }]);
      setTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/40 transition-all hover:scale-105 active:scale-95"
        aria-label="Open chat assistant"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="absolute h-4 w-4 animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative h-4 w-4 rounded-full bg-emerald-500" />
          </span>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-40 flex h-[min(560px,70vh)] w-[min(400px,calc(100vw-3rem))] animate-slide-in flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-slate-100 bg-gradient-to-r from-slate-900 to-slate-800 p-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-white">
              <Bot className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold text-white">Rights Assistant</div>
              <div className="flex items-center gap-1 text-xs text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Online · Free guidance
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto scrollbar-thin bg-slate-50 p-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}>
                <div className={`flex max-w-[85%] gap-2 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${m.role === 'user' ? 'bg-slate-300 text-slate-700' : 'bg-amber-100 text-amber-600'}`}>
                    {m.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div>
                    <div className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${m.role === 'user' ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 border border-slate-200'}`}>
                      {m.text}
                    </div>
                    {m.followUps && m.followUps.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {m.followUps.map((f, fi) => (
                          <button
                            key={fi}
                            onClick={() => send(f)}
                            className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 transition-colors hover:bg-amber-100"
                          >
                            {f}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start animate-fade-up">
                <div className="flex gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="rounded-2xl bg-white px-4 py-3 border border-slate-200">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300" style={{ animationDelay: '0ms' }} />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300" style={{ animationDelay: '150ms' }} />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="flex items-center gap-1.5 bg-slate-50 px-4 py-1.5 text-[10px] text-slate-400">
            <Sparkles className="h-3 w-3" />
            Guidance only — not legal advice. For emergencies dial 112.
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-slate-100 bg-white p-3">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send(input)}
              placeholder="Type your situation..."
              className="flex-1 rounded-full bg-slate-100 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white transition-all hover:bg-amber-400 disabled:opacity-40 active:scale-95"
              aria-label="Send"
            >
              <Send className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
