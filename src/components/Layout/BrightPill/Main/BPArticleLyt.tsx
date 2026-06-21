// components/Layout/BrightPill/Main/BPArticleLyt.tsx
import React, {FC, memo} from 'react';

import {BaseAlContentDef} from '../../../../data/utilComp/GeneralDef';
import {HeadingTag} from '../../../../data/utilComp/generalTypeDef';
import {ContentArticleLytProps} from '../../../../data/utilComp/UtilImportPropsDef';
import {customAlContent} from '../../../../utilComp/Layout/CustomAlContent';
import {getArticleIds} from '../../../../utilComp/SectionHelper';
import ArticleExtShell from '../../ExtShell/ArticleExtShell';
import BPArtHeaderLyt from '../Extension/BPArtHeaderLyt';
import BPSectionLyt from './BPSectionLyt';

/**
 * Bright-pill article layout component.
 *
 * Renders a list of article entries inside the bright-pill layout, including:
 * - a structured header with main and optional subtitle,
 * - nested content sections,
 * - and stable, accessibility-friendly ids per article.
 *
 * Operations:
 * - Returns `null` when no article content is provided.
 * - Normalizes each raw `AlContent` item via `customAlContent`.
 * - Derives article- and header-related ids using `getArticleIds`.
 * - Resolves nested heading levels based on the provided `ArticleTitleTag`
 *   (e.g. `h3` → `h4` / `h5`, `h4` → `h5` / `h6`).
 * - Wraps each article in `ArticleExtShell` and delegates header and body
 *   rendering to `BPArtHeaderLyt` and `BPSectionLyt`.
 *
 * Dependencies:
 * - `ContentArticleLytProps` for the base content model and heading semantics.
 * - `customAlContent` to apply per-article content customization.
 * - `getArticleIds` to generate stable DOM ids and `aria-labelledby` values.
 * - `ArticleExtShell` as structural wrapper with accessibility wiring.
 * - `BPArtHeaderLyt` for the visual header section.
 * - `BPSectionLyt` for the article body content layout.
 *
 * @param {ContentArticleLytProps} props Component props.
 * @param {BaseAlContentDef[]} props.AlContent Article content items to render.
 * @param {string} props.SectionId Base section identifier used to derive
 *   article- and header-level DOM ids.
 * @param {HeadingTag} props.ArticleTitleTag Semantic heading tag used for the
 *   main article titles (e.g. `h3`, `h4`), from which nested heading levels
 *   for subtitles and section headings are derived.
 * @returns {JSX.Element | null} A list of bright-pill article layouts or
 *   `null` when no content is available.
 */
const BPArticleLyt: FC<ContentArticleLytProps> = memo(
  ({AlContent, SectionId, ArticleTitleTag}) => {
    if (!AlContent || AlContent.length === 0) {
      return null;
    }

    return (
      <>
        {AlContent.map((AlItem: BaseAlContentDef) => {
          const ContentItem: BaseAlContentDef = customAlContent(AlItem);
          const {AlHeaderItem} = ContentItem ?? {};
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
              <BPArtHeaderLyt
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

                {AlHeaderItem?.HdrSubTitle ? (
                  <ArticleTitleTagSub
                    className="text-base font-bold md:text-lg"
                    id={articleIds.idHSub}
                  >
                    {AlHeaderItem?.HdrSubTitle}
                  </ArticleTitleTagSub>
                ) : null}
              </BPArtHeaderLyt>

              <BPSectionLyt
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

BPArticleLyt.displayName = 'BPArticleLyt';
export default BPArticleLyt;