import {FC, memo} from 'react';

import {IconButtonLayoutProps} from '../../data/Layout/LayoutTypeDef';
import {getIconButtonLayoutClass} from '../../Utils/Layout/IconButtonLayoutSub';

/**
 * Renders a reusable icon-only link button with semantic Tailwind styling.
 *
 * Dependencies:
 * - Uses `getIconButtonClass` to resolve the shared icon button class set.
 *
 * Operations:
 * - Merges the semantic color classes with optional custom class names.
 * - Applies `aria-label` and `title` so icon-only links expose a readable label.
 *
 * @param {IconButtonLayoutProps} props - Component props.
 * @param {string} props.href - Link target rendered by the wrapper anchor element.
 * @param {string} props.label - Accessible label used for the icon-only link.
 * @param {'bright' | 'dark' | 'highlight' | 'highlightAlt'} [props.color] - Semantic color variant used to resolve button styling.
 * @param {string} [props.className] - Optional additional class names applied to the anchor element.
 * @param {React.ReactNode} props.children - Nested icon or content rendered inside the link.
 * @returns {JSX.Element} Rendered icon button link.
 */
const IconButtonLayout: FC<IconButtonLayoutProps> = memo(
  ({href, label, color = 'bright', className = '', children}) => {
    const iconButtonClass = `${getIconButtonLayoutClass(color)} ${className}`.trim();

    return (
      <a
        aria-label={label}
        className={iconButtonClass}
        href={href}
        title={label}
      >
        {children}
      </a>
    );
  }
);

IconButtonLayout.displayName = 'IconButtonLayout';

export default IconButtonLayout;