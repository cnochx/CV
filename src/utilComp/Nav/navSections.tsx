import {SectionId} from '../../data/SectionIdData';

/**
 * Provides the canonical section order used by the page navigation.
 *
 * Operations:
 * - Defines the linear navigation flow across all top-level sections.
 * - Acts as the single source of truth for header links and next-section jumps.
 *
 * @constant {SectionId[]}
 */
export const navSections: SectionId[] = [
  SectionId.Hero,
  SectionId.About,
  SectionId.Contractor,
  SectionId.Skills,
  SectionId.CV,
  SectionId.Education,
  SectionId.Testimonials,
  SectionId.Contact,
];

/**
 * Human-readable label for each section in the navigation.
 *
 * Decouples what a link *says* from what it *points at*. The nav used to render
 * the raw section id with a `first-letter:uppercase` rule, which tied the two
 * together, so the abbreviation `cv` came out as "Cv".
 *
 * Labels can now be edited without touching anchors, and screen readers
 * announce the label instead of the identifier.
 *
 * @constant {Record<SectionId, string>}
 */
export const navLabels: Record<SectionId, string> = {
  [SectionId.Hero]: 'Home',
  [SectionId.About]: 'About',
  [SectionId.Contractor]: 'Contractor',
  [SectionId.Skills]: 'Skills',
  [SectionId.CV]: 'CV',
  [SectionId.Education]: 'Education',
  [SectionId.Portfolio]: 'Stack',
  [SectionId.Testimonials]: 'Reference',
  [SectionId.Contact]: 'Contact',
};

/**
 * Resolves the next section identifier for the current navigation position.
 *
 * Uses the shared `navSections` order to look up the current section and
 * returns the following entry in the sequence. If the section is unknown
 * or already the last item, the function returns `null` as a safe fallback.
 *
 * @param {SectionId} section - Current section identifier in the page flow.
 * @returns {SectionId | null} Next section identifier or `null` when no next section exists.
 */
export const getNextSection = (section: SectionId): SectionId | null => {
  const currentIndex = navSections.indexOf(section);

  if (currentIndex === -1 || currentIndex >= navSections.length - 1) {
    return null;
  }

  return navSections[currentIndex + 1];
};