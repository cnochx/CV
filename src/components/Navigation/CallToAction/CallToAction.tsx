import {FC, memo} from 'react';

import {CallToActionProps} from '../../../data/Utils/UtilImportPropsDef';
import CallToActionEmail from './CallToActionEmail';
import CallToActionJump from './CallToActionJump';
import CallToActionLink from './CallToActionLinkPill';
import CallToActionLinkSimple from './CallToActionLinkSimple';



const CallToAction: FC<CallToActionProps> = memo(
  ({CallToActionItem}) => {
    const {CtaType} = CallToActionItem;

    switch (CtaType) {
      case 'linkPill':
        return (
          <CallToActionLink
            CallToActionItem={CallToActionItem}
          />
        );
      case 'linkSimple':
        return (
          <CallToActionLinkSimple
            CallToActionItem={CallToActionItem}
          />
        );

      case 'contact':
        return (
          <CallToActionEmail
            CallToActionItem={CallToActionItem}
          />
        );

      case 'jump':
        return (
          <CallToActionJump
            CallToActionItem={CallToActionItem}
          />
        );

      default:
        // Option: render nothing if type is unknown
        return null;
    }
  },
);

CallToAction.displayName = 'CallToAction';
export default CallToAction;