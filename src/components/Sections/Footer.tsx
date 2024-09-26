import {ChevronUpIcon} from '@heroicons/react/24/solid';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import {footerItems} from '../../data/FooterData';
import Imprint from '../Imprint';
import Socials from '../Socials';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => {
  const {link, Icon, textContent, copyrightText} = footerItems;
  return (
    <footer className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-16 sm:pb-8 sm:pt-14">
      <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
        <a
          className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
          href={`/#${SectionId.Hero}`}>
          <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
        </a>
      </div>
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex gap-x-4 text-neutral-500">
          <Socials />
        </div>
        <section className="flex flex-col items-center gap-y-6">
          <Imprint />

        </section>
        <aside className="flex flex-col justify-center items-center">
          <div className="my-4" />
          <a
            className={classNames(
              '-m-2 flex items-center gap-x-1 rounded-md p-2 ring-yellow focus:outline-none focus:ring-2',
            )}
            href={link}>
            {textContent}
            {Icon && <Icon className="h-5 w-5 text-yellow" />}
          </a>
          <div className="my-4" />
          <span className="text-sm text-neutral-700">{currentYear} {copyrightText}</span>
        </aside>
      </div>
    </footer>
  )
});

Footer.displayName = 'Footer';
export default Footer;
