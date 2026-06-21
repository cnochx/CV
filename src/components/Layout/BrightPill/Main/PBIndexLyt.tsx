import React, {FC, memo} from 'react';

import {SectionId} from '../../../../data/SectionIdData';
import {HeadingTag, StrngUndfndType} from '../../../../data/utilComp/generalTypeDef';
import {ContentIndexLytProps} from '../../../../data/utilComp/UtilImportPropsDef';
import {getId} from '../../../../utilComp/SectionHelper';
import AsideLyt from '../../AsideLyt';
import BPArtFooterLyt from '../Extension/BPArtFooterLyt';
import BPArtHeaderLyt from '../Extension/BPArtHeaderLyt';
import BPArtPillLyt from '../Extension/BPArtPillLyt';
import BPSectionLyt from '../Extension/BPSectionLyt';
import BPArticleLyt from './BPArticleLyt';

/**
 * Renders the contractor index layout section, combining header, description, main article,
 * and footer content into a single accessible main section.
 *
 * Dependencies
 * - Uses BPSectionLyt as the semantic main section wrapper.
 * - Uses BPArtPillLyt to render background imagery with an overlay.
 * - Uses BPArtHeaderLyt for the hero header area with optional suffix content.
 * - Uses BPArticleLyt to render the main contractor-specific article content.
 * - Uses BPArtFooterLyt to render call-to-action and bottom suffix content.
 * - Uses getId and SectionId.Contractor to build stable DOM ids for headings and suffixes.
 *
 * Operations
 * - Derives aria-labelledby ids so the main section is labeled by its headings and suffix title.
 * - Renders a hero header inside a pill-styled layout with an image overlay.
 * - Optionally renders a descriptive intro block when description content is provided.
 * - Renders the contractor article and a footer pill with CTAs and bottom suffix.
 *
 * @param ContentIndexLytProps props - Component props.
 * @param IndexLytProps['IdxContent'] props.IdxContent - Structured content for header, description, article body, and footer.
 * @returns JSX.Element Contractor index layout section.
 */
const PBIndexLyt: FC<ContentIndexLytProps> = memo(({IdxContent, MainSectionId}) => {

  const {IxHeader, IxDescription, IxCallToAction} = IdxContent;

  const idH2: StrngUndfndType = getId(
    SectionId.Contractor,
    IxHeader?.HdrId,
  );

  const idH3: StrngUndfndType = getId(
    SectionId.Contractor,
    IxHeader?.HdrSubId,
  );

  const idSuffixH3: StrngUndfndType = getId(
    SectionId.Contractor,
    IxHeader?.HdrTitleSuffix?.SxId,
  );

  const mainSectionLabelBy: StrngUndfndType = [idH2, idH3, idSuffixH3]
    .filter(Boolean)
    .join(' ');


  const ArticleMainTitleTag: HeadingTag = 'h2';
  const ArticleSubTitleTag: HeadingTag = 'h3';
  const ArticleContentTitleTag: HeadingTag =
    IxHeader?.HdrSubTitle ? 'h4' : 'h3';


  const classNameOverlay = IdxContent.IxMainImg?.ImgSrc
    ? 'absolute inset-0 bg-gray-800/50'
    : 'absolute inset-0 bg-gray-900/95';


  return (
    <BPSectionLyt
      IsMain={true}
      LabelId={mainSectionLabelBy}
      SectionId={MainSectionId}
      sectionClassName="bg-neutral-100 scroll-mt-24">

      <article className="flex flex-col gap-y-12">
        <BPArtPillLyt
          ClassNameOverlay={classNameOverlay}
          ClassNameParent="relative overflow-hidden rounded-2xl bg-cover bg-center"
          ImgSrc={IdxContent.IxMainImg?.ImgSrc}>

          <BPArtHeaderLyt
            ArticleId={MainSectionId}
            HeaderClassName="relative z-10 flex flex-col gap-y-3 px-6 py-10 text-neutral-100 sm:px-8 sm:py-12"
            HeaderItem={IxHeader}
            SetUnderline={true}
            SuffixTitleTag={ArticleContentTitleTag}>

            <ArticleMainTitleTag className="text-2xl font-bold sm:text-3xl" id={idH2}>
              {IxHeader.HdrTitle}
            </ArticleMainTitleTag>
            {IxHeader?.HdrSubTitle ? (
              <ArticleSubTitleTag
                className="text-2xl font-bold sm:text-2xl"
                id={idH3}>
                {IxHeader?.HdrSubTitle}
              </ArticleSubTitleTag>
            ) : null}
          </BPArtHeaderLyt>

        </BPArtPillLyt>

        {IxDescription && (
          <section>
            {IxDescription.DnHead ? (
              <p
                className="text-2xl font-bold sm:text-2xl"
                id={`${IxDescription.DnId}}-title`}>
                {IxDescription.DnText}
              </p>
            ) : null}

            <div className="mt-8 max-w text-neutral-100">
              {IxDescription.DnHead}
            </div>
          </section>
        )}

        {IdxContent.IxContent && (<BPArticleLyt
          AlContent={IdxContent.IxContent}
          ArticleTitleTag={ArticleContentTitleTag}
          SectionId={MainSectionId}
        />)}

        <BPArtPillLyt
          ClassNameOverlay={classNameOverlay}
          ClassNameParent="relative overflow-hidden rounded-2xl bg-cover bg-center"
          ImgSrc={IdxContent?.IxMainImg?.ImgSrc}
        >
          <BPArtFooterLyt
            BottomSuffix={IdxContent.IxBottomSuffix}
            SectionId={MainSectionId}
            footerClassName="relative z-10 flex flex-col gap-y-3 px-6 py-10 text-neutral-100 sm:px-8 sm:py-12"
          />

        </BPArtPillLyt>

        <AsideLyt
          CallToActionItem={IxCallToAction}
          SectionId={MainSectionId}
        />


      </article>
    </BPSectionLyt>
  );
});

PBIndexLyt.displayName = 'PBIndexLyt';
export default PBIndexLyt;