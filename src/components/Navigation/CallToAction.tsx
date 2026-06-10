import {memo} from 'react';
import {HiOutlineEnvelope} from 'react-icons/hi2';

/**
 * Props for the `CallToAction` component.
 *
 * Defines the parent section identifier used to generate
 * a stable DOM id for the rendered call-to-action block.
 */
type CallToActionProps = {
  /** Section identifier used as the base for the generated aside id. */
  SectionId: string;
};

/**
 * Renders a contact-focused call-to-action block with a mail link.
 *
 * Dependencies:
 * - Uses `react-icons` to render the envelope icon inside the action link.
 * - Uses `memo` to avoid unnecessary re-renders when props remain unchanged.
 *
 * Operations:
 * - Builds a stable `aside` id from the provided section identifier.
 * - Renders a full-width email link styled as a call-to-action button.
 * - Displays an envelope icon together with the contact label.
 * - Opens the user's default mail client through a `mailto:` link.
 *
 * @param {CallToActionProps} props - Component props for the call-to-action block.
 * @param {string} props.SectionId - Section identifier used to generate a unique DOM id.
 * @returns {JSX.Element} Contact call-to-action block with a mail link.
 */
const CallToAction = memo(({SectionId}: CallToActionProps) => {
  const asideId = `${SectionId}-call_to_action`;

  return (
    <aside className="flex flex-col items-stretch mt-4" id={asideId}>
      <a
        className="flex items-center justify-center gap-3
                  text-white bg-gradient-to-r
                  from-purple-500
                  to-pink-500 hover:bg-gradient-to-l
                  focus:ring-4
                  focus:outline-none
                  focus:ring-purple-200
                  dark:focus:ring-purple-800
                  font-medium
                  rounded-lg
                  text-base
                  px-8
                  py-4
                  me-2
                  mb-2
                  border border-cyan-500 w-full"
        href="mailto:martin@grellmann.eu?subject=Send from grellmann.app CV"
      >
        <HiOutlineEnvelope className="h-7 w-7" />
        <span>Let's talk ... send me an eMail</span>
      </a>
    </aside>
  );
});

CallToAction.displayName = 'CallToAction';
export default CallToAction;