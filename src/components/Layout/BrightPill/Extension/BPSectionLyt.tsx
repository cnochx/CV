import classNames from 'classnames';
import {FC, memo} from 'react';

import {SectionLytProps} from '../../../../data/Utils/UtilImportPropsDef';



const BPSectionLyt: FC<SectionLytProps> = memo(
  ({
     children,
     SectionId,
     LabelId,
     sectionClassName,
     noPadding,
     IsMain
     = false}) => {
    const sectionClasses = classNames(sectionClassName, {
      'px-4 py-16 md:py-12 lg:px-8': !noPadding,
      'scroll-mt-[120px]': IsMain,
    });

    return (
      <section
        aria-labelledby={LabelId}
        className={sectionClasses}
        id={SectionId}
      >
        {noPadding ? (
          children
        ) : (
          <div className="mx-auto max-w-screen-lg">
            {children}
          </div>
        )}
      </section>
    );
  },
);

BPSectionLyt.displayName = 'BPSectionLyt';
export default BPSectionLyt;