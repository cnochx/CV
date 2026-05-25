/**
 * Skills section
 */
export interface SubHeader {
  title: string;
  content: JSX.Element;
  showSpacer: boolean;
}

export type OriginType =
  | 'private Interest'
  | 'Webmaster (with development tasks)'
  | 'Webmaster / Web Developer'
  | 'Software Developer and Linux Administrator'
  | 'SAP Technical Consultant, SAP Full-Stack Development'
  | 'Senior SAP Developer'
  | 'Technical Lead / IT Specialist'
  | 'Certification of Full-Stack Web Developer'
  | 'Training Full-Stack Web Developer'
  | 'Software Architect'
  | 'Scrum Master PSMI';

export interface Origin {
  oKey: number;
  origin: OriginType;
}

export interface Skill {
  sKey: number;
  name: string;
  expLevel: number;
  max?: number;
  years?: number;
  groupOfOrigin: Origin[];
}

export interface SkillGroup {
  head: string;
  sgKey: number;
  skills: Skill[];
}