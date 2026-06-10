import {FC, memo, PropsWithChildren} from 'react';

import {ThemeVariant} from '../../data/HeaderDataDef';
import {SetBorder, SetHover} from '../../data/LayoutDef';
import {getBorderColorClass, getFontColorClass} from '../../utils/SectionHelper';

/**
 * Props for the `HeaderLayout` component.
 *
 * Defines the wrapper styling, visual variant, optional hover behavior,
 * and border rendering for shared header content.
 */
type HeaderLayoutProps = PropsWithChildren<{
  /** Optional additional class names applied to the header wrapper. */
  ClassName: string | null;

  /** Theme variant used to resolve the semantic font color. */
  Variant: ThemeVariant;

  /** Border variant used to resolve the optional bottom border style. */
  SetBorder: SetBorder;

  /** Optional hover class applied to the header wrapper. */
  SetHover?: SetHover;

  /** Controls whether the semantic font color should be applied automatically. */
  UseFontColor?: boolean;
}>;

/**
 * Renders a reusable header wrapper with optional semantic font color,
 * hover styling, and bottom border decoration.
 *
 * Dependencies:
 * - Uses `SectionHelper` utilities to resolve semantic font and border color classes.
 * - Uses `PropsWithChildren` to render nested heading or header content.
 * - Uses `memo` to avoid unnecessary re-renders when props remain unchanged.
 *
 * Operations:
 * - Resolves a semantic font color class from the provided theme variant.
 * - Resolves an optional semantic border class from the configured border variant.
 * - Applies an optional hover class when hover styling is enabled.
 * - Builds the final `className` from all available class fragments.
 * - Omits the `class` attribute when no class value is resolved.
 * - Renders a decorative bottom border only for supported border variants.
 *
 * @param {HeaderLayoutProps} props - Component props used to configure the header wrapper.
 * @param {React.ReactNode} props.children - Nested header content rendered inside the wrapper.
 * @param {string | null} props.ClassName - Additional class names applied to the header element.
 * @param {ThemeVariant} props.Variant - Theme variant used to resolve semantic font styling.
 * @param {SetBorder} props.SetBorder - Border variant used to resolve the optional bottom border.
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
    // Resolve the semantic font color class when enabled.
    const fontColorClass = UseFontColor ? getFontColorClass(Variant) : '';

    // Determine whether a decorative border should be rendered.
    const shouldRenderBorder =
      SetBorder === 'primary' ||
      SetBorder === 'secondary' ||
      SetBorder === 'default';

    // Resolve the semantic border class only when a border should be shown.
    const borderColor = shouldRenderBorder ? getBorderColorClass(SetBorder) : '';

    // Resolve the optional hover class.
    const hoverClass =
      SetHover && SetHover !== 'none'
        ? SetHover
        : '';

    // Build the final header class from all available class fragments.
    const headerClassName = [fontColorClass, hoverClass, ClassName]
      .filter(Boolean)
      .join(' ');

    return (
      <header className={headerClassName || undefined}>
        {children}
        {shouldRenderBorder ? (
          <span className={`absolute inset-x-0 -bottom-1 border-b-2 ${borderColor}`} />
        ) : null}
      </header>
    );
  }
);

HeaderLayout.displayName = 'HeaderLayout';
export default HeaderLayout;