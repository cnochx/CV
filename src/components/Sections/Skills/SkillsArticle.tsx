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

    /** Sets the hover state and primes the tilt geometry for this hover. */
    const handleArticleEnter = useCallback(
      (event: MouseEvent<HTMLElement>) => {
        handleMouseEnter();
        reactiveLight.onPointerEnter(event);
      },
      [handleMouseEnter, reactiveLight],
    );

    /**
     * Releases the hover state immediately.
     *
     * No debouncing: the wrapper that receives these events does not transform,
     * so a leave is always a real leave. The previous grace period existed only
     * to mask the oscillation caused by measuring the moving card itself.
     */
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

    const articleClassName = [
      SKILLS_SURFACE_TOKENS.containerBase,
      SKILLS_SURFACE_TOKENS.articleSpacing,
      isActiveVisual ? SKILLS_SURFACE_TOKENS.borderActive : SKILLS_SURFACE_TOKENS.borderInactive,
      // Motion phase must come through React: className is controlled, so a
      // class added via classList would be dropped on the next render.
      reactiveLight.tiltClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const headerClassName =
      'relative m-4 w-full text-center text-frost-100';

    const titleClassName =
      'text-lg font-bold text-frost-100';

    const iconClassName = isActiveVisual
      ? `h-8 w-8 shrink-0 transition-colors duration-200 ${SKILLS_SURFACE_TOKENS.iconActive}`
      : `h-8 w-8 shrink-0 transition-colors duration-200 ${SKILLS_SURFACE_TOKENS.iconInactive}`;

    return (
      /* The pointer handlers and the measured geometry live on this wrapper,
         which never transforms. Putting them on the card itself made its own
         tilt move its hit area out from under the cursor: enter → rotate away →
         leave → rotate back → enter, an oscillation that debouncing could only
         slow down, never stop. The wrapper stays put, so a leave now means the
         pointer really left. It also supplies the perspective, giving each card
         its own vanishing point. */
      <div
        className="tilt-scene"
        onMouseEnter={handleArticleEnter}
        onMouseLeave={handleArticleLeave}
        onMouseMove={reactiveLight.onPointerMove}
        ref={reactiveLight.ref as React.RefObject<HTMLDivElement>}>
      <article
        className={articleClassName}
        id={ArticleId}
        onClick={toggleAccordion}
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
        <div
          className={`${SKILLS_SURFACE_TOKENS.overlayBase} ${
            isActiveVisual
              ? SKILLS_SURFACE_TOKENS.overlayOuterActive
              : SKILLS_SURFACE_TOKENS.overlayOuterRest
          }`}
        />
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
      </div>
    );
  }
);

SkillsArticle.displayName = 'SkillsArticle';
export default SkillsArticle;