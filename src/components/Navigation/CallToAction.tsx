import {memo} from 'react';
import {HiOutlineEnvelope} from 'react-icons/hi2';

type CallToActionProps = {
  SectionId: string;
};

const CallToAction = memo(({SectionId}: CallToActionProps) => {
  return (
    <aside className="flex flex-col items-stretch mt-4"
           id={SectionId}>
      <a
        className="flex items-center justify-center gap-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-base px-8 py-4 me-2 mb-2 border border-cyan-500 w-full"
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