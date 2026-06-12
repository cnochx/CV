import {FC, memo} from 'react';

import {HeaderLayoutProps} from '../../data/Layout/LayoutTypeDef';
import getHeaderBorder, {getHeaderClass} from '../../Utils/Layout/HeaderLayoutSub';

/**
 * Renders a reusable header wrapper with optional semantic font color,
 * hover styling, and decorative bottom border.
 *
 * Dependencies:
 * - Uses `getHeaderClass` to resolve semantic font and hover classes.
 * - Uses `getHeaderBorder` to resolve border visibility and border styling.
 * - Uses `memo` to avoid unnecessary re-renders when props remain unchanged.
 *
 * Operations:
 * - Resolves the header `className` from the theme variant, hover setting, and additional class names.
 * - Resolves an optional bottom border based on the configured border variant.
 * - Renders a decorative bottom border only when the border variant is supported.
 *
 * @param {HeaderLayoutProps} props - Component props used to configure the header wrapper.
 * @param {React.ReactNode} props.children - Nested header content rendered inside the wrapper.
 * @param {string | null} props.ClassName - Additional class names applied to the header element.
 * @param {ThemeVariant} props.Variant - Theme variant used to resolve semantic font styling.
 * @param {SetColor} props.SetBorder - Border variant used to control bottom border rendering.
 * @param {SetHover} [props.SetHover] - Optional hover class applied to the header element.
 * @param {boolean} [props.UseFontColor=true] - Controls whether the semantic font color class is applied.
 * @returns {JSX.Element} Reusable header wrapper with optional semantic styling and border decoration.
 */
const HeaderLayout: FC<HeaderLayoutProps> = memo(
  ({
     children,
     ClassName,
     SetBorder,
     SetHover,
     Variant,
     UseFontColor = true,
   }) => {

    const headerClass = getHeaderClass(Variant, UseFontColor, ClassName, SetHover);
    const {borderRender, borderClass} = getHeaderBorder(SetBorder);

    return (
      <header className={headerClass || undefined}>
        <div className="relative h-max">
        {children}
        {borderRender ? <span className={borderClass} /> : null}
          </div>
      </header>
    );
  }
);

HeaderLayout.displayName = 'HeaderLayout';
export default HeaderLayout;