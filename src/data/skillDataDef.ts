/**
 * Skills section
 */
export interface SubHeader {
  title: string;
  content: JSX.Element;
  showSpacer: boolean;
}


type OriginType =
  | 'private Interest'
  | 'Webmaster (with development tasks)'
  | 'Software Developer and Linux Administrator'
  | 'SAP Technical Consultant, SAP Full-Stack Development'
  | 'Certification of Full-Stack Web Developer'
  | 'Scrum Master PSMI';

export interface Origin {
  oKey: number
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
