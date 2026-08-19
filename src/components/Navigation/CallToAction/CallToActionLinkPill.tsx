import {FC, memo} from 'react';

import {IconDef} from '../../../data/utilComp/generalTypeDef';
import {CallToActionProps} from '../../../data/utilComp/UtilImportPropsDef';



const CallToAction: FC<CallToActionProps> = memo(
  ({CallToActionItem}) => {
    const {CtaHref, CtaIcon, CtaText} = CallToActionItem;

    const Icon: IconDef = CtaIcon;

    return (
      <div className="mx-auto max-w-screen-lg">
        <a
          className="w-full sm:w-1/3 flex gap-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm sm:text-base font-medium text-frost-100 ring-accent-400 backdrop-blur-md transition-colors duration-200 hover:border-accent-400/55 hover:bg-accent-400/15 hover:text-accent-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ink-950"
          href={CtaHref}
          rel="noopener noreferrer"
          target="_blank"
        >
          {Icon ? <Icon className="h-7 w-7" /> : null}
          <span>{CtaText}</span>
        </a>
      </div>
    );
  },
);

CallToAction.displayName = 'CallToAction';
export default CallToAction;