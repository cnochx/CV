import {FC, memo} from 'react';

import {CallToActionProps} from '../../../data/utilComp/UtilImportPropsDef';

const CallToAction: FC<CallToActionProps> = memo(({CallToActionItem}) => {
  const {CtaHref, CtaIcon, CtaPre, CtaText} = CallToActionItem;


  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base">
        {CtaPre ? (
          <span className="text-sm font-normal tracking-normal text-neutral-600 sm:text-base">
            {CtaPre}
          </span>
        ) : null}

        <a
          className="inline-flex items-center gap-x-2 font-semibold text-cyan-500 underline decoration-cyan-400/70 decoration-2 underline-offset-4 transition-colors hover:text-fuchsia-300 hover:decoration-fuchsia-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          href={CtaHref}
        >
          {CtaIcon ? (
            <CtaIcon aria-hidden="true" className="h-5 w-5 shrink-0" />
          ) : null}
          <span>{CtaText}</span>
        </a>
      </div>
    </div>
  );
});

CallToAction.displayName = 'CallToAction';
export default CallToAction;