import {FC, memo} from 'react';

import {IconDef} from '../../../data/utilComp/generalTypeDef';
import {CallToActionProps} from '../../../data/utilComp/UtilImportPropsDef';
import {getCtaPillClass} from '../../../utilComp/Layout/CtaLayoutSub';


const CallToAction: FC<CallToActionProps> = memo(
  ({CallToActionItem}) => {

    const {CtaHref, CtaIcon, CtaText, CtaPrimary} = CallToActionItem;

    const Icon: IconDef = CtaIcon;

    return (
      <div className="mx-auto max-w-screen-lg">
        <a
          className={getCtaPillClass(CtaPrimary, 'w-full px-5 py-2.5 sm:w-1/3')}
          href={CtaHref}
        >
          {Icon ? <Icon className="h-6 w-6" /> : null}
          <span>{CtaText}</span>
        </a>
      </div>
    );
  },
);

CallToAction.displayName = 'CallToAction';
export default CallToAction;