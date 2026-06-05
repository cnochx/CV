import {ChevronDownIcon} from '@heroicons/react/24/solid';
import {FC, memo, PropsWithChildren} from 'react';

type NavProps = PropsWithChildren<{
  jumpSectionId: string;
}>;

const Nav: FC<NavProps> = memo(({jumpSectionId}) => {
  return (
      <nav className="absolute inset-x-0 bottom-6 flex justify-center">
        <a
          className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
          href={`/#${jumpSectionId}`}>
          <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
        </a>
      </nav>
  );
});

Nav.displayName = 'Nav';
export default Nav;