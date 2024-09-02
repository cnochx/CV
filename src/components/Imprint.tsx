import classNames from 'classnames';
import {FC, memo} from 'react';

import {imprintItems} from '../data/data';

const Imprint: FC = memo(() => {
  return (
<div className="flex gap-x-4 items-start">
    <div className="order-1 col-span-1 flex flex-col gap-y-4 md:order-2">
      <p><strong className="text-stone-100">{imprintItems.headerText}</strong></p>
      <ul>
        {imprintItems.items.map(({text}) => (
          <li>{text}</li>
        ))}

        <br />

        {imprintItems.linkItems.map(({linkLabel, text, href}) => {

          return (
            <li>
              {linkLabel}
              <a
                className={classNames(
                  '-m-2 flex rounded-md p-2 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500',
                  {'hover:text-white': href},
                )}
                href={href}
                target="_blank">
              <span className="ml-3 text-sm sm:text-base">

              </span>
                <span className="ml-3 text-sm sm:text-base">{text}</span>
              </a>
            </li>
          );
        })}

      </ul>
    </div>


  <div className="order-3 col-span-1 flex flex-col gap-y-4">
    <p><strong className="text-stone-100">{imprintItems.headerDSGVO}</strong></p>
    <ul>

    {imprintItems.itemsDSGVO.map(({text}) => (
      <li>{text}</li>
    ))}
    </ul>
  </div>


</div>


  )
});

Imprint.displayName = 'Imprint';
export default Imprint;
