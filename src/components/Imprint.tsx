import classNames from 'classnames';
import {FC, memo} from 'react';

import {imprintItems} from '../data/FooterData';

const Imprint: FC = memo(() => {
  const {header, adressheader, personInCharge, addressGermany, addressBrazil, onlineAddress, headerLegal, legalContent} = imprintItems;
  return (
    <section className="flex gap-x-4 items-start">
      <article className="order-1 flex-col w-1/2 gap-y-4 md:order-2 flex">
        <header>
          <h3 className="font-bold text-xl text-white">{header}</h3>
        </header>
        <section className="w-1/2">
          {adressheader &&
            <h4 className="font-bold text-white">{adressheader}</h4>
          }
          {personInCharge &&
            <>
              <p className="text-white"><strong className="font-bold">{personInCharge}</strong></p>
            </>}
          {addressGermany &&
            <>
              <hr className="border-gray-400 my-4" />
              <address>
                <ul>
                  {addressGermany.map(({aiKey, text}) => {
                    return (
                      <li className="text-neutral-400" key={aiKey}>{text}</li>
                    );
                  })}
                </ul>
              </address>
            </>
          }
          {addressBrazil &&
            <>
              <hr className="border-gray-400 my-4" />
              <address>
                <ul>
                  {addressBrazil.map(({aiKey, text}) => {
                    return (
                      <li className="text-neutral-200" key={aiKey}>{text}</li>
                    );
                  })}
                </ul>
              </address>
            </>
          }
          {onlineAddress &&
            <>
              <hr className="border-gray-400 my-4" />
              <address>
                <ul>
                  {onlineAddress.map(({liKey, linkLabel, text, href}) => {
                    return (
                      <li key={liKey}>
                        <span className="text-neutral-400">{linkLabel}</span>
                        <a className={classNames(
                          '-m-2 flex rounded-md p-2 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500',
                          {'hover:text-white': href},
                        )}
                           href={href}
                           target="_blank">
                          <span className="ml-3 text-sm sm:text-base">{text}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </address>
            </>
          }
        </section>
      </article>
      <article className="order-3 flex flex-col w-1/2 gap-y-4">
      <header>
        <h3 className="font-bold text-xl text-white">{headerLegal}</h3>
      </header>
      {legalContent && <section>{legalContent}</section>}
    </article>
  </section>
  )
});

Imprint.displayName = 'Imprint';
export default Imprint;
