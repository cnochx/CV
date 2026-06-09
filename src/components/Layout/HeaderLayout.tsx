import {FC, memo, PropsWithChildren} from 'react';

import {ThemeVariant} from '../../data/HeaderDataDef';
import {setBorder} from '../../data/LayoutDef';
import {getBorderColorClass, getFontColorClass} from '../../utils/SectionHelper';

type HeaderLayoutProps = PropsWithChildren<{
  /**
   * Additional class names applied to the wrapping header element.
   */
  ClassName: string;

  /**
   * Theme variant used to resolve the font color styling.
   */
  Variant: ThemeVariant;

  /**
   * Border mode controlling whether and how a decorative bottom border is rendered.
   */
  SetBorder: setBorder;
}>;

/**
 * Renders a reusable header wrapper with themed font color and an optional bottom border.
 *
 * Dependencies:
 * - Uses `getFontColorClass` to resolve the text color class from the provided theme variant.
 * - Uses `getBorderColorClass` to resolve the border color class when the primary border is enabled.
 *
 * Operations:
 * - Applies the resolved font color class to the outer `header` element.
 * - Renders nested content through `children`.
 * - Conditionally renders a decorative bottom border when `SetBorder` is set to `'primary'`.
 * - Memoizes the component with `React.memo` to avoid unnecessary re-renders when props remain unchanged.
 *
 * @param {HeaderLayoutProps} props - Props used to render the header layout wrapper.
 * @param {React.ReactNode} props.children - Content rendered inside the header.
 * @param {string} props.ClassName - Additional class names applied to the outer `header` element.
 * @param {ThemeVariant} props.Variant - Theme variant used to determine the font color styling.
 * @param {setBorder} props.SetBorder - Border configuration that controls whether the decorative bottom border is shown.
 * @returns {JSX.Element} Rendered header wrapper containing the provided content and, optionally, a decorative border.
 */
const HeaderLayout: FC<HeaderLayoutProps> = memo(({
                                                    children,
                                                    ClassName,
                                                    SetBorder,
                                                    Variant,
                                                  }) => {
  // set Font color
  const fontColorClass = getFontColorClass(Variant);

  // Set Boolean, if a border unter the HTag should be rendered
  const shouldRenderBorder = SetBorder === 'primary' || SetBorder === 'secondary' || SetBorder === 'default';

  // Set the Bordercolor, based on SetBorder
  const borderColor = shouldRenderBorder
    ? getBorderColorClass(SetBorder)
    : '';

  return (
    <header className={`${ClassName} ${fontColorClass}`}>
      {children}
      {shouldRenderBorder ? (
        <span className={`absolute inset-x-0 -bottom-1 border-b-2 ${borderColor}`} />
      ) : null}
    </header>
  );
});

HeaderLayout.displayName = 'HeaderLayout';

export default HeaderLayout;