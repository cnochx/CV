import classNames from 'classnames';
import {FC, memo} from 'react';

import {SectionLayoutProps} from '../../../data/Utils/UtilImportPropsDef';

const SectionLayout: FC<SectionLayoutProps> = memo(
  ({children, sectionId, noPadding = false, className, IsMain}) => {
    return (
      <section
        aria-labelledby={sectionId}
        className={classNames(className,
          {'px-4 py-16 md:py-24 lg:px-8 scroll-mt-24': !noPadding},
          {'scroll-mt-[120px]': IsMain,})}
        id={sectionId}>

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