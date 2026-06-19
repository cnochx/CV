/**
 * Provides the stable section identifiers used for main page navigation and anchors.
 */
export const SectionId = {
  Hero: 'home',
  About: 'about',
  Contractor: 'contractor',
  Skills: 'skills',
  CV: 'cv',
  Education: 'education',
  Portfolio: 'stack',
  Testimonials: 'foresight',
  Contact: 'contact',
} as const;

/**
 * Defines the allowed main section identifier values.
 */
export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Provides the stable subsection identifiers used for nested navigation and section anchors.
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

/**
 * Defines the allowed subsection identifier values.
 */
export type SectionSubId = (typeof SectionSubId)[keyof typeof SectionSubId];