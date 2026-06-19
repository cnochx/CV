/**
 * Describes one top-level skills group rendered in the skills section.
 *
 * Operations:
 * - Defines the visible group heading.
 * - Provides stable identifiers for rendering and DOM id generation.
 * - Collects all nested skill entries that belong to the group.
 */
export interface SkillsCollection {
  /** Visible title of the skills group. */
  Head: string;

  /** Numeric group key used for ordering or id generation. */
  SgKey: number;

  /** Stable string identifier for the skills group. */
  Id: string;

  /** List of skill entries that belong to the group. */
  Skills: SkillItem[];
}

/**
 * Describes one skill entry inside a skills group.
 *
 * Operations:
 * - Stores the display name and stable identifier of the skill.
 * - Provides experience level and years of experience.
 * - Links the skill to one or more origin contexts or roles.
 */
export interface SkillItem {
  /** Numeric key used for ordering or identification within the group. */
  SKey: number;

  /** Visible display name of the skill. */
  Name: string;

  /** Stable string identifier for the individual skill entry. */
  IdSub: string;

  /** Relative experience level used for scoring or visual display. */
  ExpLevel: number;

  /** Optional maximum value used for normalized experience rendering. */
  Max?: number;

  /** Number of years of practical experience with the skill. */
  Years: number;

  /** List of professional or personal contexts where the skill was applied. */
  GroupOfOrigin: SkillOrigin[];
}

/**
 * Describes one origin entry for a skill.
 *
 * Operations:
 * - Connects a skill to a specific role, certification, or background context.
 * - Provides a stable numeric key and a typed origin label.
 */
export interface SkillOrigin {
  /** Numeric key used to identify the origin entry. */
  OKey: number;

  /** Origin label describing where or in which role the skill was applied. */
  Origin: OriginType;
}

/**
 * Defines the supported origin labels for skill entries.
 *
 * Operations:
 * - Standardizes the allowed role, certification, and background labels.
 * - Ensures origin values stay consistent across the skills dataset.
 */
export type OriginType =
  | 'private Interest'
  | 'Senior SAP Developer'
  | 'Technical Lead / IT Specialist'
  | 'SAP Technical Consultant, SAP Full-Stack Development'
  | 'Software Developer and Linux Administrator'
  | 'Webmaster / Web Developer'
  | 'Certification of Full-Stack Web Developer'
  | 'Software Architect'
  | 'Certification of Scrum Master PSMI';