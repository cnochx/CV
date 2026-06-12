import classNames from 'classnames';
import {FC, memo} from 'react';

import {SectionLayoutProps} from '../../data/Layout/LayoutTypeDef';

/**
 * Renders a semantic section wrapper with optional responsive padding and width constraints.
 *
 * Operations:
 * - Applies a unique `id` and `aria-labelledby` for section-level identification.
 * - Adds default horizontal padding and vertical spacing unless `noPadding` is enabled.
 * - Centers content in a max-width container when padding is enabled.
 *
 * @param {SectionLayoutProps} props - Component props.
 * @returns {JSX.Element} Rendered section wrapper.
 */
const SectionLayout: FC<SectionLayoutProps> = memo(
  ({children, sectionId, noPadding = false, className}) => {
    return (
      <section
        aria-labelledby={sectionId}
        className={classNames(className, {
          'px-4 py-16 md:py-24 lg:px-8': !noPadding,
        })}
        id={sectionId}
      >
        <div
          className={classNames({
            'mx-auto max-w-screen-lg': !noPadding,
          })}
        >
          {children}
        </div>
      </section>
    );
  }
);

SectionLayout.displayName = 'SectionLayout';
export default SectionLayout;