import {ChevronDownIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';

import IconButtonLayout from '../Layout/IconButtonLayout';

/**
 * Props for the `Nav` component.
 *
 * Defines the section target used by the fixed jump navigation control.
 */
type NavProps = {
  /** Section identifier used to build the in-page jump link target. */
  jumpSectionId: string;
};

/**
 * Renders a fixed jump navigation control that links to the next section.
 *
 * The component displays a centered icon-only button near the bottom of the
 * visible viewport and links to the provided section anchor. Visibility is
 * controlled by the custom `tall-nav` Tailwind screen, so the control only
 * appears when the viewport height meets the configured minimum threshold.
 *
 * Dependencies:
 * - Uses `IconButtonLayout` to render the shared semantic icon button wrapper.
 * - Uses `ChevronDownIcon` to display the directional jump indicator.
 *
 * Operations:
 * - Builds an in-page anchor link from the provided section identifier.
 * - Applies an accessible label for the icon-only navigation control.
 * - Fixes the control to the bottom center of the viewport.
 * - Hides the control by default and reveals it only on tall enough viewports.
 *
 * @param {NavProps} props Component props.
 * @param {string} props.jumpSectionId Section identifier used to build the
 *   in-page anchor link target.
 * @returns {JSX.Element} A fixed jump navigation control linked to the next section.
 */
const Nav: FC<NavProps> = memo(({jumpSectionId}) => {
  return (
    <nav className="fixed inset-x-0 bottom-6 z-50 hidden tall-nav:flex justify-center">

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