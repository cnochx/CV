import {Dialog, Transition} from '@headlessui/react';
import {Bars3BottomRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';

import {SectionId} from '../../data/SectionIdData';
import {NavItemProps, NavProps} from '../../data/utilComp/UtilImportPropsDef';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';



const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);

  const navSections = useMemo(
    () => [
      SectionId.Hero,
      SectionId.About,
      SectionId.Contractor,
      SectionId.Skills,
      SectionId.CV,
      SectionId.Education,
      SectionId.Testimonials,
      SectionId.Contact,
    ],
    [],
  );

  const handleSectionChange = useCallback((section: SectionId | null) => {
    if (section) {
      setCurrentSection(section);
    }
  }, []);

  const handleSelectSection = useCallback((section: SectionId) => {
    setCurrentSection(section);
  }, []);

  useNavObserver(navSections, handleSectionChange);

  return (
    <>
      <MobileNav
        currentSection={currentSection}
        navSections={navSections}
        onSelectSection={handleSelectSection}
      />
      <DesktopNav
        currentSection={currentSection}
        navSections={navSections}
        onSelectSection={handleSelectSection}
      />
    </>
  );
});

/**
 * Shared class recipe for the nav Contact CTA.
 *
 * Rests as a glass pill and hovers exactly like the primary CTA (designsheet
 * §7.1): the nav promise and the hero promise are the same gesture.
 */
const NAV_CTA_CLASS =
  'rounded-full border border-white/[.16] bg-white/5 px-4 py-1.5 text-sm font-semibold ' +
  'text-frost-100 backdrop-blur-md transition duration-200 ease-out first-letter:uppercase ' +
  'hover:-translate-y-0.5 hover:scale-[1.03] hover:border-primary-300 hover:bg-primary-300 ' +
  'hover:text-ink-950 hover:shadow-glow-primary-lg motion-reduce:hover:transform-none ' +
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950';

const DesktopNav: FC<NavProps> = memo(({navSections, currentSection, onSelectSection}) => {
  // v3.4 nav language (designsheet §6): inactive = muted, hovers with the cyan
  // response wash; active = fuchsia identity wash pill ("you are here").
  const baseClass =
    'rounded-full p-1.5 px-3 font-bold first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400';
  const activeClass = classNames(baseClass, 'bg-primary-400/15 text-primary-400');
  const inactiveClass = classNames(baseClass, 'text-ink-400 sm:hover:bg-accent-400/15 sm:hover:text-accent-300');

  // §7.1: the Contact CTA is the geometric center (grid 1fr auto 1fr); the
  // remaining links split symmetrically around it.
  const linkSections = navSections.filter(section => section !== SectionId.Contact);
  const splitAt = Math.ceil(linkSections.length / 2);
  const leftSections = linkSections.slice(0, splitAt);
  const rightSections = linkSections.slice(splitAt);

  const renderItems = (sections: SectionId[]) =>
    sections.map(section => (
      <NavItem
        activeClass={activeClass}
        current={section === currentSection}
        inactiveClass={inactiveClass}
        key={section}
        onSelect={onSelectSection}
        section={section}
      />
    ));

  return (
    <header
      className="fixed top-0 z-50 hidden w-full border-b border-white/10 bg-ink-950/60 p-4 backdrop-blur sm:block"
      id={headerID}>
      <nav className="mx-auto grid max-w-screen-xl grid-cols-[1fr_auto_1fr] items-center gap-x-4">
        <div className="flex justify-end gap-x-4">{renderItems(leftSections)}</div>

        <NavItem
          activeClass={NAV_CTA_CLASS}
          current={currentSection === SectionId.Contact}
          inactiveClass={NAV_CTA_CLASS}
          onSelect={onSelectSection}
          section={SectionId.Contact}
        />

        <div className="flex justify-start gap-x-4">{renderItems(rightSections)}</div>
      </nav>
    </header>
  );
});

const MobileNav: FC<NavProps> = memo(({navSections, currentSection, onSelectSection}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleContactClick = useCallback(() => {
    onSelectSection(SectionId.Contact);
  }, [onSelectSection]);

  const baseClass =
    'rounded-full p-2 px-4 first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400';
  const activeClass = classNames(baseClass, 'bg-primary-400/15 font-bold text-primary-400');
  const inactiveClass = classNames(baseClass, 'font-medium text-frost-300');

  return (
    <>
      {/* §7.1: on mobile the Contact CTA stays visible beside the burger */}
      <Link
        className="fixed right-16 top-2 z-40 rounded-full border border-white/[.16] bg-ink-950/70 px-4 py-2.5 text-sm font-semibold text-frost-100 backdrop-blur-md transition-colors duration-200 hover:border-primary-300 hover:bg-primary-300 hover:text-ink-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 sm:hidden"
        href={`#${SectionId.Contact}`}
        onClick={handleContactClick}>
        Contact
      </Link>

      <button
        aria-label="Menu Button"
        className="fixed right-2 top-2 z-40 rounded-full bg-primary-400 p-2 ring-offset-ink-950/60 hover:bg-primary-300 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 sm:hidden"
        onClick={toggleOpen}>
        <Bars3BottomRightIcon className="h-8 w-8 text-ink-950" />
        <span className="sr-only">Open sidebar</span>
      </button>

      <Transition.Root as={Fragment} show={isOpen}>
        <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-ink-950/75" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full">
            <div className="relative w-4/5 border-r border-white/10 bg-ink-900">
              <nav className="mt-5 flex flex-col gap-y-2 px-2">
                {navSections.map(section => (
                  <NavItem
                    activeClass={activeClass}
                    current={section === currentSection}
                    inactiveClass={inactiveClass}
                    key={section}
                    onClick={toggleOpen}
                    onSelect={onSelectSection}
                    section={section}
                  />
                ))}
              </nav>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
});

const NavItem: FC<NavItemProps> = memo(
  ({section, current, inactiveClass, activeClass, onClick, onSelect}) => {
    const handleClick = useCallback(() => {
      onSelect(section);
      onClick?.();
    }, [onClick, onSelect, section]);

    return (
      <Link
        aria-current={current ? 'location' : undefined}
        className={current ? activeClass : inactiveClass}
        href={`#${section}`}
        onClick={handleClick}>
        {section}
      </Link>
    );
  },
);

Header.displayName = 'Header';
DesktopNav.displayName = 'DesktopNav';
MobileNav.displayName = 'MobileNav';
NavItem.displayName = 'NavItem';

export default Header;