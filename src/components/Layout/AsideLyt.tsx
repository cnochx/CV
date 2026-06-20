import React, {FC, memo} from 'react';

import {BaseCalToActionItemDef} from '../../data/utilComp/GeneralDef';
import {AsideLytProps} from '../../data/utilComp/UtilImportPropsDef';
import CallToAction from '../Navigation/CallToAction/CallToAction';


/**
 * Renders an article aside layout with optional custom content and call-to-action items.
 *
 * Dependencies:
 * - Uses `CallToAction` to render each configured call-to-action entry.
 *
 * Operations:
 * - Wraps children and call-to-action content inside a `<aside>` with a stable `id`.
 * - Applies the provided layout class name to the aside element.
 * - Iterates over `CallToActions` and renders one `CallToAction` component per entry.
 *
 * @param {AsideLytProps} props - Component props.
 * @param {React.ReactNode} [props.children] - Optional custom content rendered above the call-to-action list.
 * @param {string} [props.ClassName] - Optional Tailwind class string applied to the aside wrapper.
 * @param {string} [props.SectionId] - Optional DOM id used to anchor or reference the aside section.
 * @param {import('../../data/Content/LayoutTypeDef').CallToActionItemDef[]} [props.
 * CallToActions] - Optional call-to-action entries rendered inside the aside.
 * @returns {JSX.Element} Rendered aside layout with optional call-to-action content.
 */
const AsideLyt: FC<AsideLytProps> = memo(({children, SectionId, CallToActionItem, DisplayDivide = true}) => {
    return (
      <>
        <aside
          className="flex flex-col space-y-32"
          id={SectionId}>

          <div className="flex flex-col items-stretch">
          {children}

          {CallToActionItem?.AeiCallToActionItems.length ? (
            <>
              {CallToActionItem?.AeiCallToActionItems.map((CallToActionItem: BaseCalToActionItemDef) => (
                <CallToAction
                  CallToActionItem={CallToActionItem}
                  key={CallToActionItem.CtaKey}
                />
              ))}
            </>
          ) : null}

            {DisplayDivide
              ? (<div className="pt-12 mb-4">
                  <hr className="mt-1 border-0 border-b-2 border-fuchsia-400" />
                </div>)
              : <div className="pt-8"> </div>}

          </div>
        </aside>
      </>
    );
  },
);

AsideLyt.displayName = 'AsideLyt';
export default AsideLyt;