import {StaticImageData} from 'next/image';

/**
 * Defines the shared header configuration structure used across portfolio sections.
 */
export interface HeaderDataDef {
  /** Header configuration for the hero section. */
  HeroMain: HeaderItem[];

  /** Header configuration for the main about section. */
  AboutMain: HeaderItem[];

  /** Header configuration for the main contractor section. */
  ContractorMain: HeaderItem[];

  /** Header configuration for the contractor problem-solving section. */
  ContractorSolve: HeaderItem[];

  /** Header configuration for the contractor focus section. */
  ContractorFocus: HeaderItem[];

  /** Header configuration for the contractor differentiation section. */
  ContractorDifferent: HeaderItem[];

  /** Header configuration for the main skills section. */
  SkillsMain: HeaderItem[];

  /** Header configuration for the SAP skills subsection. */
  SkillsSapDev: HeaderItem[];

  /** Header configuration for the web development skills subsection. */
  SkillsWebDev: HeaderItem[];

  /** Header configuration for the Drupal and PHP skills subsection. */
  SkillsDrupalDev: HeaderItem[];

  /** Header configuration for the methods and quality subsection. */
  SkillsMethods: HeaderItem[];

  /** Header configuration for the main CV section. */
  CVMain: HeaderItem[];

  /** Header configuration for the CV introduction section. */
  CVIs: HeaderItem[];

  /** Header configuration for the Fincaferien section in the CV. */
  CVFinca: HeaderItem[];

  /** Header configuration for the BA section in the CV. */
  CVBa: HeaderItem[];

  /** Header configuration for the SC section in the CV. */
  CVSc: HeaderItem[];

  /** Header configuration for the FF section in the CV. */
  CVFf: HeaderItem[];

  /** Header configuration for the main education section. */
  EducationMain: HeaderItem[];

  /** Header configuration for the SA education subsection. */
  EducationSa: HeaderItem[];

  /** Header configuration for the SM education subsection. */
  EducationSm: HeaderItem[];

  /** Header configuration for the WD education subsection. */
  EducationWd: HeaderItem[];

  /** Header configuration for the IC education subsection. */
  EducationIc: HeaderItem[];

  /** Header configuration for the main contact section. */
  ContactMain: HeaderItem[];

  /** Optional header configuration for the project section. */
  ProjectMain?: HeaderItem[];
}

export default HeaderDataDef;

/**
 * Defines one reusable header content entry for a section.
 */
export interface HeaderItem {
  /** Theme variant used to resolve section styling. */
  Variant?: ThemeVariant;

  /** Main title displayed in the section header. */
  Title: string;

  /** Optional custom title color class or value. */
  TitleColor?: string;

  /** Optional subtitle displayed below or beside the title. */
  SubTitle?: string;

  /** Main descriptive content rendered inside the section header. */
  Description: JSX.Element;

  /** Optional image source rendered with the section header. */
  ImageSrc?: string | StaticImageData;

  /** Controls whether additional spacing should be rendered below the section. */
  ShowSpacer?: boolean;
}

/**
 * Defines the allowed theme variants used across section headers.
 */
export type ThemeVariant =
  | 'dark'
  | 'bright'
  | 'dark-pill'
  | 'dark-pill-bg'
  | 'bright-pill'
  | 'bright-pill-bg'
  | null;