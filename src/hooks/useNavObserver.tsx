import {useEffect} from 'react';

import {SectionId} from '../data/sectionIdData';

/**
 * Observes visible sections and reports the currently active section identifier.
 *
 * Operations:
 * - Resolves section DOM elements from the provided section identifiers.
 * - Detects the section intersecting the navigation offset area near the top of the viewport.
 * - Recomputes the active section on intersection, scroll, and resize events.
 *
 * @param {SectionId[]} sections - Ordered section identifiers used to resolve observed DOM elements.
 * @param {(section: SectionId | null) => void} handler - Callback invoked with the active section identifier.
 * @returns {void} Does not return a value.
 */
export const useNavObserver = (
  sections: SectionId[],
  handler: (section: SectionId | null) => void,
): void => {
  useEffect(() => {
    const elements = sections
      .map(section => document.getElementById(section))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const updateActiveSection = () => {
      const current = elements
        .map(element => ({
          id: element.id as SectionId,
          top: element.getBoundingClientRect().top,
          bottom: element.getBoundingClientRect().bottom,
        }))
        .filter(({top, bottom}) => top <= 120 && bottom >= 120)
        .sort((a, b) => Math.abs(a.top - 120) - Math.abs(b.top - 120))[0];

      if (current) {
        handler(current.id);
      }
    };

    updateActiveSection();

    const observer = new IntersectionObserver(updateActiveSection, {
      root: null,
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      rootMargin: '-120px 0px -60% 0px',
    });

    elements.forEach(element => observer.observe(element));
    window.addEventListener('scroll', updateActiveSection, {passive: true});
    window.addEventListener('resize', updateActiveSection);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [sections, handler]);
};