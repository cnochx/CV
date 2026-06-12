import {ChevronDownIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';

import IconButtonLayout from '../Layout/IconButtonLayout';

/**
 * Props for the Nav component.
 *
 * Defines the target section used by the jump navigation button.
 */
type NavProps = {
  /** Section identifier used to build the jump link target. */
  jumpSectionId: string;
};

/**
 * Renders a bottom-aligned navigation control that links to the next section.
 *
 * Dependencies:
 * - Uses `IconButtonLayout` to render the shared semantic icon button wrapper.
 * - Uses `ChevronDownIcon` to display the directional jump indicator.
 *
 * Operations:
 * - Builds an in-page anchor link from the provided section identifier.
 * - Applies an accessible label for the icon-only navigation control.
 * - Positions the navigation button at the bottom center of the current view.
 *
 * @param {NavProps} props - Component props.
 * @param {string} props.jumpSectionId - Section identifier used to build the jump link target.
 * @returns {JSX.Element} Rendered jump navigation control.
 */
const Nav: FC<NavProps> = memo(({jumpSectionId}) => {
  return (
    <nav className="absolute inset-x-0 bottom-6 flex justify-center">
      <IconButtonLayout
        color="highlight"
        href={`/#${jumpSectionId}`}
        label="Jump to next section"
      >
        <ChevronDownIcon
          aria-hidden="true"
          className="h-5 w-5 bg-transparent sm:h-6 sm:w-6"
        />
      </IconButtonLayout>
    </nav>
  );
});

Nav.displayName = 'Nav';
export default Nav;