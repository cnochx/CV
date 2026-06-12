import {StaticImageData} from 'next/image';

/**
 * Defines the full header data structure used across the application.
 *
 * Operations:
 * - Groups all section-specific header configurations by section key.
 * - Stores one or more `HeaderItem` entries for each page section.
 * - Provides an optional configuration for the project section.
 */
interface HeaderDataDef {
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
  CvMain: HeaderItem[];

  /** Header configuration for the CV introduction section. */
  CvIs: HeaderItem[];

  /** Header configuration for the Fincaferien section in the CV. */
  CvFinca: HeaderItem[];

  /** Header configuration for the BA section in the CV. */
  CvBa: HeaderItem[];

  /** Header configuration for the SC section in the CV. */
  CvSc: HeaderItem[];

  /** Header configuration for the FF section in the CV. */
  CvFf: HeaderItem[];

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
 * Defines one reusable header content item for a section.
 *
 * Operations:
 * - Stores the visual theme variant for the section header.
 * - Provides title, subtitle, descriptive content, and optional media.
 * - Controls whether additional spacer styling should be applied.
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

  /** Optional image source used in the header. */
  ImageSrc?: string | StaticImageData;

  /** Controls whether additional spacing should be rendered below the section. */
  ShowSpacer?: boolean;
}

/**
 * Defines the supported theme variants used across section headers.
 *
 * Operations:
 * - Supports standard dark and bright themes.
 * - Supports pill-based theme variants.
 * - Allows `null` as an optional fallback or uninitialized state.
 */
export type ThemeVariant =
  | 'dark'
  | 'bright'
  | 'dark-pill'
  | 'dark-pill-bg'
  | 'bright-pill'
  | 'bright-pill-bg'
  | null;