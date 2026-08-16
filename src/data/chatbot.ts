import { situations } from './situations';
import { emergencyContacts, tips } from './contacts';

export interface BotReply {
  text: string;
  followUps?: string[];
  situationId?: string;
}

interface Rule {
  keywords: string[];
  reply: BotReply;
}

const situational: Rule[] = situations.map((s) => ({
  keywords: s.title.toLowerCase().split(' ').concat(s.short.toLowerCase().split(' ')).concat(s.id.split('-')),
  reply: {
    text: s.summary,
    situationId: s.id,
    followUps: ['What are my rights here?', 'What should I do?', 'Where can I complain?'],
  },
}));

const rules: Rule[] = [
  ...situational,
  {
    keywords: ['right', 'rights'],
    reply: {
      text:
        'Your key rights with the police: be informed of grounds of arrest (Art. 22), consult a lawyer, be produced before a magistrate within 24 hours, refuse to answer unrelated questions, and protection from torture (Art. 21). Tell me your situation for specific rights.',
      followUps: situations.slice(0, 4).map((s) => s.title),
    },
  },
  {
    keywords: ['arrest', 'arrested', 'detained', 'custody'],
    reply: {
      text:
        'If arrested: ask the grounds of arrest, demand to inform a family member, request a lawyer, insist on a medical exam, and remember you must be produced before a magistrate within 24 hours.',
      situationId: 'arrest-detained',
      followUps: ['Where can I complain?', 'FIR refused', 'Asked for a bribe'],
    },
  },
  {
    keywords: ['fir', 'complaint', 'register', 'case'],
    reply: {
      text:
        'If police refuse to register your FIR: send your complaint by registered post to the Superintendent of Police, or approach the Magistrate under Section 175 BNSS. You can also file a Zero FIR at any police station.',
      situationId: 'fir-refused',
      followUps: ['Where can I complain?', 'Stopped or Questioned'],
    },
  },
  {
    keywords: ['search', 'seize', 'seizure', 'warrant', 'property'],
    reply: {
      text:
        'For a search: ask to see the warrant, demand two independent witnesses for a home search, and get a signed copy of the seizure list. Women can only be searched by another woman.',
      situationId: 'search-seize',
      followUps: ['Arrested or Detained', 'Where can I complain?'],
    },
  },
  {
    keywords: ['bribe', 'corruption', 'money', 'pay', 'rupee'],
    reply: {
      text:
        'If asked for a bribe: do not pay if you can safely refuse, note the officer\'s details, and report to the Anti-Corruption Bureau (ACB) of your state. They can arrange a "trap" to catch the officer red-handed.',
      situationId: 'bribe-demand',
      followUps: ['Where can I complain?', 'Threatened or Assaulted'],
    },
  },
  {
    keywords: ['abuse', 'assault', 'threat', 'torture', 'beaten', 'hit', 'harass'],
    reply: {
      text:
        'If threatened or assaulted: get immediate medical attention to document injuries, note the officers\' names, file a complaint with the SP and the State Human Rights Commission, and approach the Magistrate.',
      situationId: 'threat-abuse',
      followUps: ['Where can I complain?', 'Arrested or Detained'],
    },
  },
  {
    keywords: ['stop', 'question', 'street', 'detain', 'check'],
    reply: {
      text:
        'If stopped and questioned: stay calm, ask for the officer\'s name and rank, provide basic identity only, and you may stay silent on unrelated matters. A woman cannot be questioned at the station between 6 PM and 6 AM.',
      situationId: 'stop-question',
      followUps: ['Arrested or Detained', 'Search & Seize'],
    },
  },
  {
    keywords: ['complain', 'where', 'authority', 'report', 'helpline', 'contact'],
    reply: {
      text:
        'You can complain to: your SP/Commissioner, State & National Human Rights Commission, Police Complaints Authority, Anti-Corruption Bureau, and file writ petitions in the High Court or Supreme Court. Dial 112 for emergencies, 15100 for legal aid.',
      situationId: 'where-to-complain',
      followUps: emergencyContacts.slice(0, 4).map((c) => `${c.name} - ${c.number}`),
    },
  },
  {
    keywords: ['woman', 'women', 'female', 'girl'],
    reply: {
      text:
        'Special protections for women: cannot be arrested after sunset/before sunrise (except rare cases), can only be searched by a woman officer, cannot be questioned at the station between 6 PM and 6 AM. Dial 1091 — Women Helpline, 24x7.',
      followUps: ['Arrested or Detained', 'Where can I complain?'],
    },
  },
  {
    keywords: ['lawyer', 'legal', 'aid', 'attorney', 'counsel'],
    reply: {
      text:
        'You have the right to consult a lawyer of your choice (Article 22). If you cannot afford one, free legal aid is available — dial 15100 (NALSA helpline) or contact your State Legal Services Authority.',
      followUps: ['Arrested or Detained', 'Where can I complain?'],
    },
  },
  {
    keywords: ['emergency', 'number', 'call', 'police number', 'help'],
    reply: {
      text: 'For any emergency — police, fire, or ambulance — dial 112 (works across India). Women in distress: 1091. Cyber crime: 1930.',
      followUps: emergencyContacts.slice(0, 5).map((c) => `${c.name} - ${c.number}`),
    },
  },
];

function score(text: string, keywords: string[]): number {
  const lower = text.toLowerCase();
  let s = 0;
  for (const k of keywords) {
    if (lower.includes(k)) s += k.length > 4 ? 2 : 1;
  }
  return s;
}

export function getBotReply(input: string): BotReply {
  const text = input.trim();
  if (!text) return { text: 'Please type your question about police rights.', followUps: [] };

  let best: Rule | null = null;
  let bestScore = 0;
  for (const r of rules) {
    const sc = score(text, r.keywords);
    if (sc > bestScore) {
      bestScore = sc;
      best = r;
    }
  }

  if (best && bestScore > 0) return best.reply;

  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  return {
    text:
      'I can help with situations like: being stopped, arrested, FIR refusal, search & seizure, threats, bribes, and where to complain. Try asking about one of these.',
    followUps: situations.slice(0, 4).map((s) => s.title),
    tip: undefined,
  } as BotReply & { tip?: undefined };
}
