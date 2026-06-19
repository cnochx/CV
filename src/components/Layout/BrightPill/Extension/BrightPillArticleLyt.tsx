import {FC, memo} from 'react';

import {BrightPillArticleLytProps} from '../../../../data/Utils/UtilImportPropsDef';


const BrightPillArticleLyt: FC<BrightPillArticleLytProps> = memo(
  ({
     children,
     ArticleId,
     ParentClassName,
     ArticleClassName,
     LabelledBy,
   }) => {


    return (
      <div className={ParentClassName}>
        <article aria-labelledby={LabelledBy}
                 className={ArticleClassName || undefined}
                 id={ArticleId}>

          {children}

        </article>
      </div>

    );
  },
);

BrightPillArticleLyt.displayName = 'BrightPillArticleLyt';
export default BrightPillArticleLyt;