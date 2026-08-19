import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/solid';
import {FC, memo, MouseEvent, useCallback} from 'react';

import {SkillItem} from '../../../data/Skills/SkillCollectionDef';
import {SkillsArticleProps} from '../../../data/utilComp/UtilImportPropsDef';
import {useReactiveLight} from '../../../hooks/useReactiveLight';
import {resolveImageSrc} from '../../../utilComp/SectionHelper';
import {SKILLS_SURFACE_TOKENS} from '../../../utilComp/Skills/SurfaceTokens';
import UseAccordion from '../../../utilComp/UseAccordion';
import HeaderLayout from '../../Layout/DarkSpecial/HeaderLayout';
import SkillsSection from './SkillsSection';


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
    } = UseAccordion();

    // Tier 1: cursor sheen + ≤4° tilt on the glass surface (§5).
    const reactiveLight = useReactiveLight();

    /** Sets the hover state and caches the tilt geometry for this hover. */
    const handleArticleEnter = useCallback(() => {
      handleMouseEnter();
      reactiveLight.onPointerEnter();
    }, [handleMouseEnter, reactiveLight]);

    /** Clears both the hover state and the tilt when the pointer leaves. */
    const handleArticleLeave = useCallback(() => {
      handleMouseLeave();
      reactiveLight.onPointerLeave();
    }, [handleMouseLeave, reactiveLight]);

    const handleTriggerClick = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        toggleAccordion();
      },
      [toggleAccordion],
    );

    const isActiveVisual = isHovered;

    const articleClassName = isActiveVisual
      ? `${SKILLS_SURFACE_TOKENS.containerBase} ${SKILLS_SURFACE_TOKENS.articleSpacing} ${SKILLS_SURFACE_TOKENS.borderActive}`
      : `${SKILLS_SURFACE_TOKENS.containerBase} ${SKILLS_SURFACE_TOKENS.articleSpacing} ${SKILLS_SURFACE_TOKENS.borderInactive}`;

    const headerClassName =
      'relative m-4 w-full text-center text-frost-100';

    const titleClassName =
      'text-lg font-bold text-frost-100';

    const iconClassName = isActiveVisual
      ? `h-8 w-8 shrink-0 transition-colors duration-200 ${SKILLS_SURFACE_TOKENS.iconActive}`
      : `h-8 w-8 shrink-0 transition-colors duration-200 ${SKILLS_SURFACE_TOKENS.iconInactive}`;

    return (
      <article
        className={articleClassName}
        id={ArticleId}
        onClick={toggleAccordion}
        onMouseEnter={handleArticleEnter}
        onMouseLeave={handleArticleLeave}
        onMouseMove={reactiveLight.onPointerMove}
        ref={reactiveLight.ref as React.RefObject<HTMLDivElement>}
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
                <button
                  aria-controls={`${ArticleId}-content`}
                  aria-expanded={isOpen}
                  className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
                  onClick={handleTriggerClick}
                  onKeyDown={handleKeyDown}
                  type="button">
                  {Head}
                </button>
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