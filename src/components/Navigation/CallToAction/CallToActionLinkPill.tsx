import {FC, memo} from 'react';

import {IconDef} from '../../../data/Layout/LayoutTypeDef';
import {CallToActionProps} from '../../../data/utilComp/UtilImportPropsDef';



const CallToAction: FC<CallToActionProps> = memo(
  ({CallToActionItem}) => {
    const {CtaHref, CtaIcon, CtaText} = CallToActionItem;

    const Icon: IconDef = CtaIcon;

    return (
      <div className="mx-auto max-w-screen-lg">
        <a
          className="w-full sm:w-1/3 flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm sm:text-base font-medium text-neutral-900 border-fuchsia-400 ring-fuchsia-400 ring-offset-bg-cyan-500/80 hover:bg-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-500/20"
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