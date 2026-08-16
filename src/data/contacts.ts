export interface Contact {
  name: string;
  number: string;
  desc: string;
  tag: string;
}

export const emergencyContacts: Contact[] = [
  { name: 'Emergency (Police / Fire / Ambulance)', number: '112', desc: 'Single unified emergency number across India', tag: '112' },
  { name: 'Women Helpline', number: '1091', desc: '24x7 helpline for women in distress', tag: '1091' },
  { name: 'Senior Citizens Helpline', number: '14567', desc: 'Help for elderly citizens', tag: '14567' },
  { name: 'Child Helpline', number: '1098', desc: '24-hour helpline for children in need', tag: '1098' },
  { name: 'Cyber Crime Helpline', number: '1930', desc: 'Report online / cyber crime fraud', tag: '1930' },
  { name: 'NHRC Helpline', number: '14433', desc: 'National Human Rights Commission', tag: '14433' },
  { name: 'Legal Aid (NALSA)', number: '15100', desc: 'Free legal aid helpline', tag: '15100' },
  { name: 'Anti-Corruption (CBI)', number: '011-24360103', desc: 'CBI Anti-Corruption Unit', tag: 'CBI' },
];

export const tips: string[] = [
  'Always note down the officer\'s name, rank, and station number.',
  'You have the right to remain silent on questions unrelated to any offence.',
  'If arrested, you must be produced before a magistrate within 24 hours.',
  'A woman can only be arrested by a woman officer, and not after sunset except in exceptional cases.',
  'If an FIR is refused, send your complaint by registered post to the Superintendent of Police.',
  'Demand a copy of the seizure list whenever the police take your belongings.',
  'Never pay a bribe — report the demand to the Anti-Corruption Bureau.',
  'Dial 112 for any emergency — police, fire, or ambulance.',
];
