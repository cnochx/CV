/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'stack',
  Resume: 'cv',
  Freelance: 'freelance',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'foresight',
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
} as const;

export type SectionSubId = (typeof SectionSubId)[keyof typeof SectionSubId];