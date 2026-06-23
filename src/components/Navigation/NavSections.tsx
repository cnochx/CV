import {ChevronDownIcon} from '@heroicons/react/24/solid';
import Link from 'next/link';
import {FC, memo, useMemo} from 'react';

import {SectionId} from '../../data/SectionIdData';
import {getNextSection} from '../../utilComp/Nav/navSections';

/**
 * Props for the `Nav` component.
 *
 * Defines the current section context and optional wrapper styling
 * for the next-section jump control.
 */
type NavProps = {
  /** Current section identifier used to resolve the next navigation target. */
  currentSectionId: SectionId;

  /** Optional additional class names applied to the outer `nav` element. */
  className?: string;
};

/**
 * Renders a compact jump control that links to the next page section.
 *
 * Dependencies:
 * - Uses `getNextSection` to resolve the next section identifier from the shared navigation order.
 * - Uses Next.js `Link` to perform hash-based in-page navigation.
 * - Uses `ChevronDownIcon` as the visual indicator for forward section flow.
 *
 * Operations:
 * - Memorizes the next section lookup for the current section identifier.
 * - Returns `null` when the current section is unknown or already the last section in the sequence.
 * - Renders the icon above a separate circular background layer to keep the foreground glyph visually clear.
 * - Exposes an accessible label and title for the jump interaction.
 *
 * @param {NavProps} props - Component props.
 * @param {SectionId} props.currentSectionId - Current section identifier in the navigation flow.
 * @param {string} [props.className] - Optional class names for the outer wrapper element.
 * @returns {JSX.Element | null} Rendered next-section navigation control or `null` when no next target exists.
 */
const NavSections: FC<NavProps> = memo(({currentSectionId, className}) => {
  const nextSection = useMemo(
    () => getNextSection(currentSectionId),
    [currentSectionId],
  );

  if (!nextSection) {
    return null;
  }

  return (
    <nav className={className || undefined}>
      <Link
        aria-label="Jump to next section"
        className="relative flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12"
        href={`/#${nextSection}`}
        title="Jump to next section"
      >
        <span className="absolute inset-0 rounded-full bg-cyan-300/20 ring-1 ring-fuchsia-400 ring-offset-2 ring-offset-gray-800 transition-colors duration-200" />
        <ChevronDownIcon className="relative z-10 h-8 w-8 text-fuchsia-400 sm:h-6 sm:w-6" />
      </Link>
    </nav>
  );
});

NavSections.displayName = 'NavSections';

export default NavSections;