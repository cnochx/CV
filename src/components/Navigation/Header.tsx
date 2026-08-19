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

const DesktopNav: FC<NavProps> = memo(({navSections, currentSection, onSelectSection}) => {
  // v3.4 nav language (designsheet §6): inactive = muted, hovers with the cyan
  // response wash; active = fuchsia identity wash pill ("you are here").
  const baseClass =
    '-m-1.5 rounded-full p-1.5 px-3 font-bold first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400';
  const activeClass = classNames(baseClass, 'bg-primary-400/15 text-primary-400');
  const inactiveClass = classNames(baseClass, 'text-ink-400 sm:hover:bg-accent-400/15 sm:hover:text-accent-300');

  return (
    <header
      className="fixed top-0 z-50 hidden w-full border-b border-white/10 bg-ink-950/60 p-4 backdrop-blur sm:block"
      id={headerID}>
      <nav className="flex justify-center gap-x-8">
        {navSections.map(section => (
          <NavItem
            activeClass={activeClass}
            current={section === currentSection}
            inactiveClass={inactiveClass}
            key={section}
            onSelect={onSelectSection}
            section={section}
          />
        ))}
      </nav>
    </header>
  );
});

const MobileNav: FC<NavProps> = memo(({navSections, currentSection, onSelectSection}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const baseClass =
    'rounded-full p-2 px-4 first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400';
  const activeClass = classNames(baseClass, 'bg-primary-400/15 font-bold text-primary-400');
  const inactiveClass = classNames(baseClass, 'font-medium text-frost-300');

  return (
    <>
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