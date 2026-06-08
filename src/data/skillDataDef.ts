/**
 * Skills section
 */
export interface SkillsCollection {
  head: string;
  sgKey: number;
  skills: SkillItem[];
}

export interface SkillItem {
  sKey: number;
  name: string;
  expLevel: number;
  max?: number;
  years?: number;
  groupOfOrigin: SkillOrigin[];
}

export interface SkillOrigin {
  oKey: number;
  origin: OriginType;
}

export type OriginType =
  | 'private Interest'
  | 'Senior SAP Developer'
  | 'Technical Lead / IT Specialist'
  | 'SAP Technical Consultant, SAP Full-Stack Development'
  | 'Software Developer and Linux Administrator'
  | 'Webmaster / Web Developer'
  | 'Certification of Full-Stack Web Developer'
  | 'Software Architect'
  | 'Scrum Master PSMI';