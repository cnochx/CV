import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';

import {SkillItem} from '../../../data/Skills/SkillCollectionDef';
import {SkillsArticleProps} from '../../../data/Utils/UtilImportPropsDef';
import {SKILLS_SURFACE_TOKENS} from '../../../utils/Skills/SurfaceTokens';
import useAccordion from '../../../utils/useAccordion';
import HeaderLayout from '../../Layout/DarkSpecial/HeaderLayout';
import SkillsSection from './SkillsSection';
import {resolveImageSrc} from '../../../utils/SectionHelper';

const SkillsArticle: FC<SkillsArticleProps> = memo(
  ({
     Item,
     ParentSectionId,
     SectionSubId,
     ImageSrc,
     BackgroundPosition = 'center',
   }) => {
    const {Head, Id, SgKey, Skills} = Item;

    const resolvedImgSrc = resolveImageSrc(ImageSrc);

    const ArticleId = `${ParentSectionId}-${SgKey}-${SectionSubId}-article`;
    const TitleId = `${ParentSectionId}-${SgKey}-${SectionSubId}-title`;

    const {
      isOpen,
      isHovered,
      toggleAccordion,
      handleMouseEnter,
      handleMouseLeave,
      handleKeyDown,
    } = useAccordion();

    const isActiveVisual = isHovered;

    const articleClassName = isActiveVisual
      ? `${SKILLS_SURFACE_TOKENS.containerBase} ${SKILLS_SURFACE_TOKENS.articleSpacing} ${SKILLS_SURFACE_TOKENS.borderActive}`
      : `${SKILLS_SURFACE_TOKENS.containerBase} ${SKILLS_SURFACE_TOKENS.articleSpacing} ${SKILLS_SURFACE_TOKENS.borderInactive}`;

    const headerClassName =
      'relative m-4 w-full text-center text-neutral-100';

    const titleClassName =
      'text-lg font-bold text-neutral-100';

    const iconClassName = isActiveVisual
      ? `h-8 w-8 shrink-0 transition-colors duration-200 ${SKILLS_SURFACE_TOKENS.iconActive}`
      : `h-8 w-8 shrink-0 transition-colors duration-200 ${SKILLS_SURFACE_TOKENS.iconInactive}`;

    return (
      <article
        aria-controls={`${ArticleId}-content`}
        aria-expanded={isOpen}
        className={articleClassName}
        id={ArticleId}
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="button"
        style={
          resolvedImgSrc
            ? {
              backgroundImage: `url(${resolvedImgSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: BackgroundPosition,
              backgroundRepeat: 'no-repeat',
            }
            : undefined
        }
        tabIndex={0}
      >
        <div className={SKILLS_SURFACE_TOKENS.overlayOuter} />
        <div className={SKILLS_SURFACE_TOKENS.rimOuter} />

        <div className={SKILLS_SURFACE_TOKENS.contentLayer}>
          <div className="flex items-center justify-between gap-3">
            <HeaderLayout
              ClassName={headerClassName}
              SetBorder={null}
              UseVariantBg="bright"
              UseVariantText="dark"
            >
              <h3 className={titleClassName} id={TitleId}>
                {Head}
              </h3>
            </HeaderLayout>

            {isOpen ? (
              <ChevronUpIcon className={iconClassName} />
            ) : (
              <ChevronDownIcon className={iconClassName} />
            )}
          </div>

          {isOpen && (
            <div
              aria-labelledby={TitleId}
              className="flex flex-wrap gap-4"
              id={`${ArticleId}-content`}
            >
              {Skills.map((skillItem: SkillItem) => (
                <SkillsSection
                  Id={Id}
                  ParentSectionId={ArticleId}
                  SkillItem={skillItem}
                  key={skillItem.SKey}
                />
              ))}
            </div>
          )}
        </div>
      </article>
    );
  }
);

SkillsArticle.displayName = 'SkillsArticle';
export default SkillsArticle;