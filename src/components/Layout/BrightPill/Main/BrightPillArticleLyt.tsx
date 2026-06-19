// components/Layout/BrightPill/Main/BrightPillArticleLyt.tsx
import React, {FC, memo} from 'react';

import {HeadingTag} from '../../../../data/Layout/LayoutTypeDef';
import {BaseAlContentDef} from '../../../../data/Utils/GeneralDef';
import {ContentArticleLytProps} from '../../../../data/Utils/UtilImportPropsDef';
import ArticleExtShell from '../../ExtShell/ArticleExtShell';
import BrightPillArtHeaderLyt from '../Extension/BrightPillArtHeaderLyt';
import BrightPillSectionLyt from './BrightPillSectionLyt';
import {customAlContent} from '../../../../utils/Layout/CustomAlContent';
import {getArticleIds} from '../../../../utils/SectionHelper';

const BrightPillArticleLyt: FC<ContentArticleLytProps> = memo(
  ({AlContent, SectionId, ArticleTitleTag}) => {
    if (!AlContent || AlContent.length === 0) {
      return null;
    }



    return (
      <>
        {AlContent.map((AlItem: BaseAlContentDef) => {
          const ContentItem: BaseAlContentDef = customAlContent(AlItem);
          const {AlHeaderItem} = ContentItem;
          const articleIds = getArticleIds(SectionId, ContentItem);
          const ArticleTitleTagSub: HeadingTag =
            ArticleTitleTag === 'h3' ? 'h4' : 'h5';
          const ArticleTitleTagContentSub: HeadingTag =
            ArticleTitleTag === 'h4' ? 'h5' : 'h6';

          return (
            <ArticleExtShell
              ArticleClassName="flex flex-col"
              ArticleId={articleIds.idArticle}
              DivClassName="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0"
              LabelledBy={articleIds.articleLabelBy}
              key={ContentItem.AlId ?? articleIds.idArticle}
            >
              <BrightPillArtHeaderLyt
                AlDateCustomVal={AlItem.AlDateCustomVal}
                ArticleId={articleIds.idArticle}
                HeaderClassName="flex flex-col"
                HeaderItem={AlHeaderItem}
                SetUnderline={true}
                UnderlineClassName="mt-1 h-px w-2/3 border-b-2 border-fuchsia-400"
              >
                <ArticleTitleTag
                  className="text-lg font-bold uppercase md:text-xl"
                  id={articleIds.idMain}
                >
                  {AlHeaderItem?.HdrTitle}
                </ArticleTitleTag>

                {AlHeaderItem.HdrSubTitle ? (
                  <ArticleTitleTagSub
                    className="text-base font-bold md:text-lg"
                    id={articleIds.idHSub}
                  >
                    {AlHeaderItem.HdrSubTitle}
                  </ArticleTitleTagSub>
                ) : null}
              </BrightPillArtHeaderLyt>

              <BrightPillSectionLyt
                AlContent={ContentItem}
                ArticleTitleTag={ArticleTitleTagContentSub}
                SectionId={articleIds.idArticle}
              />
            </ArticleExtShell>
          );
        })}
      </>
    );
  },
);

BrightPillArticleLyt.displayName = 'BrightPillArticleLyt';
export default BrightPillArticleLyt;