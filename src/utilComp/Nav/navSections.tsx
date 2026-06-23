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