import {FC, memo} from 'react';

import {IconDef} from '../../../data/utilComp/generalTypeDef';
import {CallToActionProps} from '../../../data/utilComp/UtilImportPropsDef';



const CallToAction: FC<CallToActionProps> = memo(
  ({CallToActionItem}) => {
    const {CtaHref, CtaIcon, CtaText} = CallToActionItem;

    const Icon: IconDef = CtaIcon;

    // v3.4 primary CTA (designsheet §6): the purple→pink gradient retires —
    // gradients are licensed for 1–2px aurora hairlines only, never fills.
    // Solid primary-400 with ink-950 label = 8.04:1, hover 300 = 11.24:1.
    return (
      <div className="mt-4 flex flex-col items-stretch">
        <a
          className="mb-2 inline-flex w-full items-center justify-center gap-x-2 rounded-full bg-primary-400 px-8 py-4 text-base font-semibold text-ink-950 shadow-e1 transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-300 hover:shadow-glow-primary-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 motion-reduce:hover:transform-none"
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