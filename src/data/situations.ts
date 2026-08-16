import {
  ShieldQuestion,
  Lock,
  FileText,
  Search,
  AlertOctagon,
  BadgeIndianRupee,
  Gavel,
  type LucideIcon,
} from 'lucide-react';

export interface Action {
  text: string;
}

export interface Complaint {
  label: string;
  detail: string;
}

export interface Situation {
  id: string;
  icon: LucideIcon;
  title: string;
  short: string;
  summary: string;
  rights: string[];
  whatToDo: string[];
  complaint: Complaint[];
  legalBasis: string;
  color: string;
}

export const situations: Situation[] = [
  {
    id: 'stop-question',
    icon: ShieldQuestion,
    title: 'Stopped or Questioned',
    short: 'Police stop you on the street for questioning',
    summary:
      'A police officer can ask for your name and address if they reasonably suspect you of an offence, but you cannot be arrested merely for refusing to answer unrelated questions.',
    rights: [
      'You have the right to ask the officer their name, rank, and police station (Police Regulations / CrPC).',
      'You cannot be arrested merely for refusing to answer questions that are not relevant to any offence.',
      'A woman cannot be questioned at a police station between 6 PM and 6 AM except in rare exceptions; she can be questioned at her residence.',
      'If you are detained, you must be informed of the grounds of arrest at the earliest (Article 22(1) of the Constitution).',
    ],
    whatToDo: [
      'Stay calm and polite — do not run or argue aggressively.',
      'Ask the officer for their name, rank, and badge/ID number and note it down.',
      'Provide only your basic identity details (name, address) when legally asked.',
      'You may remain silent on matters not connected to any suspected offence.',
      'If you feel detained without cause, ask clearly: "Am I under arrest, and for what offence?"',
      'Note the time, location, and any witnesses around you.',
    ],
    complaint: [
      { label: 'Senior Officers', detail: 'Write to the Superintendent of Police (SP) or Commissioner with the officer\'s name and rank.' },
      { label: 'Human Rights Commission', detail: 'File a complaint with the NHRC or your State Human Rights Commission.' },
    ],
    legalBasis: 'Article 22(1), Constitution of India; Sections of BNSS 2023; Police Regulations',
    color: 'blue',
  },
  {
    id: 'arrest-detained',
    icon: Lock,
    title: 'Arrested or Detained',
    short: 'What happens when you are placed under arrest',
    summary:
      'If arrested, you have powerful constitutional protections — you must be told why, allowed a lawyer, and produced before a magistrate within 24 hours.',
    rights: [
      'Right to be informed of the grounds of arrest at the time of arrest (Article 22(1)).',
      'Right to consult and be defended by a legal practitioner of your choice (Article 22(1)).',
      'Right to be produced before a magistrate within 24 hours of arrest, excluding travel time (Article 22(2)).',
      'Right not to be detained beyond 24 hours without magistrate\'s authority.',
      'Right to inform a family member or friend of your arrest and location (Standing Directions on Arrests / D.K. Basu guidelines).',
      'Right to be examined by a medical practitioner, with the report signed by you and the officer (D.K. Basu guidelines).',
    ],
    whatToDo: [
      'Ask clearly and repeatedly: "What is the offence I am being arrested for?"',
      'Demand that your family or a friend be informed of your arrest and whereabouts.',
      'Request to speak to your lawyer immediately; if you cannot afford one, ask for legal aid.',
      'Insist on a medical examination — note any existing injuries and have them recorded.',
      'Remember: you must be produced before a magistrate within 24 hours.',
      'Note the names and badge numbers of all arresting officers.',
      'A woman can generally be arrested only by a woman officer, and not after sunset/before sunrise except in exceptional cases.',
    ],
    complaint: [
      { label: 'Magistrate', detail: 'Inform the magistrate when produced about any illegal detention or mistreatment.' },
      { label: 'State Legal Services Authority', detail: 'Contact for free legal aid — dial 15100 (NALSA helpline).' },
      { label: 'Human Rights Commission', detail: 'File a complaint with NHRC / SHRC for violation of arrest guidelines.' },
    ],
    legalBasis: 'Article 22(1) & 22(2), Constitution; D.K. Basu v. State of W.B.; BNSS 2023',
    color: 'red',
  },
  {
    id: 'fir-refused',
    icon: FileText,
    title: 'FIR Refused',
    short: 'Police refuse to register your FIR',
    summary:
      'If the police refuse to register an FIR, the law gives you several clear escalation paths — they cannot simply turn you away.',
    rights: [
      'On receiving information of a cognizable offence, police MUST register an FIR (Section 173 BNSS / earlier Section 154 CrPC).',
      'If the officer refuses, you can send the information in writing by post to the Superintendent of Police, who must investigate.',
      'You can approach the Magistrate under Section 175(4) BNSS / Section 156(3) CrPC to direct FIR registration.',
      'A woman can lodge an FIR online or at any police station regardless of where the incident occurred (Zero FIR).',
    ],
    whatToDo: [
      'Politely but firmly ask the officer to register the FIR — it is your legal right for a cognizable offence.',
      'If refused, get the officer\'s name and station details.',
      'Send a written complaint by registered post to the Superintendent of Police (SP) of the district.',
      'If no action is taken, approach the Judicial Magistrate with a complaint under Section 175 BNSS.',
      'Keep a copy of every complaint, postal receipt, and acknowledgement.',
      'You can also file an online FIR / e-complaint on your state police website where available.',
    ],
    complaint: [
      { label: 'Superintendent of Police', detail: 'Send written complaint by registered post — they are duty-bound to act.' },
      { label: 'Judicial Magistrate', detail: 'File a private complaint under Section 175 BNSS / 156(3) CrPC.' },
      { label: 'State Police Complaint Authority', detail: 'Most states have a Police Complaints Authority for such grievances.' },
    ],
    legalBasis: 'Section 173 & 175 BNSS 2023 (earlier 154 & 156(3) CrPC); Zero FIR policy',
    color: 'amber',
  },
  {
    id: 'search-seize',
    icon: Search,
    title: 'Search & Seize',
    short: 'Police want to search you or seize property',
    summary:
      'Police need legal authority and proper procedure to search you or your property — and you have rights during every step.',
    rights: [
      'A search of your person or home generally requires a written search warrant from a magistrate, except in specific exceptions.',
      'For a home search, two independent witnesses from the locality must be present (Section 103 BNSS / CrPC).',
      'A list of all seized items must be prepared and signed by the witnesses — you are entitled to a copy.',
      'Women can be searched only by another woman, with due regard to decency.',
      'You have the right to see and read the search warrant before allowing entry.',
    ],
    whatToDo: [
      'Ask to see the search warrant and read it carefully before allowing entry.',
      'Verify the identity of the officers and note names and ranks.',
      'Insist on two independent witnesses from your locality being present during a home search.',
      'Watch the preparation of the seizure list — ensure every item taken is listed.',
      'Demand a signed copy of the seizure list before the officers leave.',
      'Record the search on your phone if it is safe to do so.',
    ],
    complaint: [
      { label: 'Superintendent of Police', detail: 'Report any illegal or warrantless search by the concerned officers.' },
      { label: 'Magistrate', detail: 'Raise the issue before the magistrate when the seizure is produced in court.' },
      { label: 'Human Rights Commission', detail: 'File a complaint if property was taken without proper procedure.' },
    ],
    legalBasis: 'Sections 100-103 BNSS 2023 (earlier CrPC); Articles 20 & 21, Constitution',
    color: 'emerald',
  },
  {
    id: 'threat-abuse',
    icon: AlertOctagon,
    title: 'Threatened or Assaulted',
    short: 'An officer threatens, abuses, or assaults you',
    summary:
      'Police misconduct is a serious violation of your fundamental rights — the law provides clear avenues for accountability.',
    rights: [
      'No one can be subjected to torture or cruel, inhuman, or degrading treatment (Article 21, Constitution).',
      'Any police officer who abuses, threatens, or assaults you can face departmental action and criminal prosecution.',
      'Custodial violence is a punishable offence and a violation of human rights.',
      'You have the right to a medical examination to document injuries immediately.',
    ],
    whatToDo: [
      'Get immediate medical attention and ensure every injury is documented with date and time.',
      'Note the names, ranks, and station of the officers involved.',
      'Collect contact details of any witnesses who saw the incident.',
      'File a written complaint with the SP / Commissioner and keep a copy with acknowledgement.',
      'File a complaint with the State Human Rights Commission and NHRC.',
      'Approach the Magistrate to register a criminal case against the officers.',
      'If in custody, inform the magistrate immediately when produced.',
    ],
    complaint: [
      { label: 'Police Complaints Authority', detail: 'Most states have a PCA to investigate serious police misconduct.' },
      { label: 'NHRC / SHRC', detail: 'File a complaint with the National or State Human Rights Commission.' },
      { label: 'Judicial Magistrate', detail: 'File a private complaint to initiate criminal proceedings.' },
    ],
    legalBasis: 'Article 21, Constitution; IPC / BNS 2023; D.K. Basu guidelines',
    color: 'rose',
  },
  {
    id: 'bribe-demand',
    icon: BadgeIndianRupee,
    title: 'Asked for a Bribe',
    short: 'An officer asks you for a bribe',
    summary:
      'Giving or taking a bribe is a criminal offence. If an officer demands a bribe, you can report it while protecting yourself.',
    rights: [
      'Demanding or accepting a bribe is an offence under the Prevention of Corruption Act, 1988.',
      'Giving a bribe is also an offence — but if you are forced to pay under threat, reporting it promptly can protect you.',
      'You have the right to refuse and to report the demand with evidence.',
      'The Anti-Corruption Bureau (ACB) / CBI can register a case and conduct a "trap" operation.',
    ],
    whatToDo: [
      'Do not pay the bribe if you can safely refuse.',
      'Note the officer\'s name, rank, station, time, and place of the demand.',
      'Note any witnesses who heard or saw the demand.',
      'Contact the Anti-Corruption Bureau (ACB) of your state, or the CBI Anti-Corruption Unit.',
      'File a written complaint with the ACB — they can arrange a trap to catch the officer red-handed.',
      'If forced to pay, keep evidence (transaction record, witnesses) and report immediately.',
    ],
    complaint: [
      { label: 'Anti-Corruption Bureau (ACB)', detail: 'Each state has an ACB — file a complaint to arrange a trap operation.' },
      { label: 'CBI Anti-Corruption', detail: 'For central government / UT police officers, contact CBI ACU.' },
      { label: 'Central Vigilance Commission', detail: 'Can be approached for corrupt central government officials.' },
    ],
    legalBasis: 'Prevention of Corruption Act, 1988; Lokpal and Lokayuktas Act, 2013',
    color: 'violet',
  },
  {
    id: 'where-to-complain',
    icon: Gavel,
    title: 'Where to Complain',
    short: 'Quick directory of complaint authorities',
    summary:
      'A quick map of every authority you can approach when your rights are violated by the police.',
    rights: [
      'You have the right to seek redress from multiple independent authorities, not just the police.',
      'Complaints can be filed in writing, by post, online, or in person — keep a stamped/acknowledged copy.',
      'Free legal aid is available to those who cannot afford a lawyer.',
    ],
    whatToDo: [
      'Start with the immediate superior officer (SHO → Inspector → SP/Commissioner).',
      'Approach the State / National Human Rights Commission for rights violations.',
      'File with the State Police Complaints Authority for serious misconduct.',
      'Approach the Anti-Corruption Bureau for bribe demands.',
      'Contact the State Legal Services Authority for free legal aid.',
      'File a petition before the High Court or Supreme Court for fundamental rights violations (writ petitions).',
    ],
    complaint: [
      { label: 'NHRC', detail: 'National Human Rights Commission — manhelpline@nhrc.nic.in / 14433' },
      { label: 'State Human Rights Commission', detail: 'Every major state has its own SHRC.' },
      { label: 'Police Complaints Authority', detail: 'State-level authority for police misconduct.' },
      { label: 'High Court / Supreme Court', detail: 'Writ petitions under Article 226 / 32 for rights violations.' },
    ],
    legalBasis: 'Article 226 & 32, Constitution; Protection of Human Rights Act, 1993',
    color: 'cyan',
  },
];
