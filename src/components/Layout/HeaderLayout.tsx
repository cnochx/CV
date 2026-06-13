import classNames from 'classnames';
import {FC, memo} from 'react';

import {HeaderLayoutProps} from '../../data/Layout/LayoutTypeDef';
import getHeaderBorder, {getHeaderClass} from '../../Utils/Layout/HeaderLayoutSub';

/**
 * Renders a shared header wrapper with optional semantic styling and bottom border decoration.
 *
 * Dependencies:
 * - Uses `getHeaderClass` to resolve the wrapper classes from the variant, hover setting, and font color flag.
 * - Uses `getHeaderBorder` to resolve whether a decorative bottom border should be rendered.
 *
 * Operations:
 * - Renders nested header content inside a relative inner wrapper.
 * - Adds a decorative bottom border only when the configured border variant is supported.
 * - Renders optional prefix content after the main header content.
 *
 * @param {HeaderLayoutProps} props - Component props.
 * @param {React.ReactNode} props.children - Nested header content.
 * @returns {JSX.Element} Rendered header wrapper.
 */
const HeaderLayout: FC<HeaderLayoutProps> = memo(
  ({
     children,
     ClassName,
     SetBorder,
     SetHover,
     Variant,
     UseFontColor = true,
     PrefixClassName,
     Prefix
   }) => {
    const headerClass = getHeaderClass(Variant, UseFontColor, ClassName, SetHover);
    const {borderRender, borderColorClass} = getHeaderBorder(SetBorder);

    return (
      <header className={headerClass || undefined}>
        <div className="relative h-max">
          {children}

          {borderRender
            ? <span
              className={classNames(
                'absolute inset-x-0 -bottom-1 border-b-2',
                borderColorClass,
              )}
            />
            : null}
        </div>

        {Prefix ? (
          <div className={PrefixClassName}>
            {Prefix}
          </div>
        ) : null}
      </header>
    );
  },
);

HeaderLayout.displayName = 'HeaderLayout';
export default HeaderLayout;