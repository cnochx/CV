/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'stack',
  Resume: 'CV',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'foresight',
  Contractor: 'contractor',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Section definition
 */
export const SectionSubId = {
  summary: 'summary',
  skills: 'skills',
  experience: 'experience',
  work: 'work',
  education: 'education',
  additional: 'additional',
  freelance: 'summary',
  Solve: 'solve',
  Focus: 'focus',
  Different: 'different',
} as const;

export type SectionSubId = (typeof SectionSubId)[keyof typeof SectionSubId];