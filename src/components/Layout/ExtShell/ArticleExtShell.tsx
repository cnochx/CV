// components/Layout/BrightPill/Main/BrightPillArticleShell.tsx
import {FC, memo} from 'react';

import {ArticleExtShelProps} from '../../../data/utilComp/UtilImportPropsDef';

const ArticleExtShell: FC<ArticleExtShelProps> = memo(({ArticleId,
                                                    DivClassName,
                                                    LabelledBy,
                                                    ArticleClassName,
                                                    children}) => {

    return (
      <article
        aria-labelledby={LabelledBy ?? undefined}
        className={ArticleClassName}
        id={ArticleId ?? undefined}
      >
        <div className={DivClassName}>
          {children}
        </div>
      </article>
    );
  },
);

ArticleExtShell.displayName = 'ArticleExtShell';
export default ArticleExtShell;