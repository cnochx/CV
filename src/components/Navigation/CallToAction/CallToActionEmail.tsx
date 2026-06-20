import {FC, memo} from 'react';

import {IconDef} from '../../../data/utilComp/LayoutTypeDef';
import {CallToActionProps} from '../../../data/utilComp/UtilImportPropsDef';



const CallToAction: FC<CallToActionProps> = memo(
  ({CallToActionItem}) => {
    const {CtaHref, CtaIcon, CtaText} = CallToActionItem;

    const Icon: IconDef = CtaIcon;

    return (
      <div className="flex flex-col items-stretch mt-4">
        <a
          className="inline-flex items-center justify-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-base px-8 py-4 me-2 mb-2 border border-cyan-500 w-full"
          href={CtaHref}
        >
          {Icon ? <Icon className="h-7 w-7" /> : null}
          <span>{CtaText ?? "Let's talk ... send me an email"}</span>
        </a>
      </div>
    );
  },
);

CallToAction.displayName = 'CallToAction';
export default CallToAction;