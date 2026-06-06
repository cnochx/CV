import {ChevronDownIcon} from '@heroicons/react/24/solid';
import {FC, memo, PropsWithChildren} from 'react';

type NavProps = PropsWithChildren<{
  jumpSectionId: string;
  classAttribute: string;
}>;

const Nav: FC<NavProps> = memo(({jumpSectionId, classAttribute}) => {
  return (
    <nav className="absolute inset-x-0 bottom-6 flex justify-center">
      <a
        className={classAttribute}
        href={`/#${jumpSectionId}`}>
        <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
      </a>
    </nav>
  );
});

Nav.displayName = 'Nav';
export default Nav;