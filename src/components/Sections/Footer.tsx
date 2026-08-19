import {ChevronUpIcon} from '@heroicons/react/24/solid';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {footerItems} from '../../data/FooterData';
import {SectionId} from '../../data/SectionIdData';
import Imprint from '../Imprint';
import Socials from '../Socials';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => {
  const {link, Icon, textContent, copyrightText} = footerItems;
  return (
    <footer className="relative border-t border-white/10 bg-ink-950 px-4 pb-6 pt-12 sm:px-16 sm:pb-8 sm:pt-14">
      {/* §7.5: back-to-top as a glass circle, hover speaks the cyan response */}
      <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
        <a
          aria-label="Back to top of the page"
          className="rounded-full border border-white/10 bg-ink-900/80 p-1 text-frost-100 backdrop-blur-md transition duration-200 ease-out hover:-translate-y-0.5 hover:border-accent-400/55 hover:bg-accent-400/15 hover:text-accent-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 motion-reduce:hover:transform-none sm:p-2"
          href={`/#${SectionId.Hero}`}>
          <ChevronUpIcon aria-hidden="true" className="h-6 w-6 sm:h-8 sm:w-8" />
        </a>
      </div>
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex gap-x-4 text-ink-400">
          <Socials />
        </div>
        <section className="flex flex-col items-center gap-y-6">
          <Imprint />
        </section>
        <aside className="flex flex-col justify-center items-center">
          <div className="my-4" />
          <a
            className={classNames(
              '-m-2 flex items-center gap-x-1 rounded-md p-2 ring-accent-400 focus:outline-none focus:ring-2',
            )}
            href={link}>
            {textContent}
            {Icon && <Icon className="h-5 w-5 text-primary-400" />}
          </a>
          <div className="my-4" />
          <span className="text-sm text-frost-100">
            {currentYear} {copyrightText}
          </span>
        </aside>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
