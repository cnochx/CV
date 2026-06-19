import {FC, memo} from 'react';

import {BrightPillArticleLytProps} from '../../../../data/Utils/UtilImportPropsDef';


const BPArticleLyt: FC<BrightPillArticleLytProps> = memo(
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

BPArticleLyt.displayName = 'BPArticleLyt';
export default BPArticleLyt;