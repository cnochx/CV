/**
 * Defines additional layout and helper text elements
 * that can be attached to various sections.
 *
 * Operations:
 * - Provides optional prefix/suffix content for standard sections.
 * - Provides reusable skill-related helper texts for the skills section.
 */
interface AdditionalElementsDef {
  /** Additional text configuration for the contractor main section. */
  ContractorMain: AdditionalTextItemDefault;

  /** Additional text configuration for the main skills section. */
  SkillsMain: AdditionalTextItemDefault;

  /** Shared helper texts used for skill experience and role labels. */
  SkillsItem: AdditionalTextItemSkill;

  CVMain: AdditionalTextItemDefault;
}
export default AdditionalElementsDef;

/**
 * Defines optional prefix and suffix content for a section.
 *
 * Operations:
 * - Allows injecting rich JSX before and after the main section content.
 */
export interface AdditionalTextItemDefault {
  /** Optional JSX rendered before the main section content. */
  Prefix?: JSX.Element;

  /** Optional JSX rendered after the main section content. */
  Suffix?: JSX.Element;
}

/**
 * Defines additional helper texts used in the skills section.
 *
 * Operations:
 * - Provides formatted labels for experience range descriptions.
 * - Provides descriptive text for the current role or responsibility.
 */
export interface AdditionalTextItemSkill {
  /** Text rendered before the experience value (e.g. "Experience:"). */
  ExperiencePrefix: string;

  /** Text rendered after the experience value (e.g. "years"). */
  ExperienceSuffix: string;

  /** Descriptive text used to explain the role or responsibility. */
  RoleText: string;
}