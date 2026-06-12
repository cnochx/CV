import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/solid';
import {StaticImageData} from 'next/image';
import {FC, memo, PropsWithChildren} from 'react';

import {SkillItem, SkillsCollection} from '../../../data/Skills/SkillCollectionDef';
import {resolveImageSrc} from '../../../Utils/SectionHelper';
import {SKILLS_SURFACE_TOKENS} from '../../../Utils/Skills/surfaceTokens';
import useAccordion from '../../../Utils/useAccordion';
import HeaderLayout from '../../Layout/HeaderLayout';
import SkillsSection from './SkillsSection';

/**
 * Props for the `SkillsArticle` component.
 *
 * Defines the data source for one top-level skills accordion card and
 * the identifiers required to generate stable nested DOM ids.
 */
type SkillsArticleProps = PropsWithChildren<{
  /** Skills collection rendered by this accordion card. */
  Item: SkillsCollection;

  /** Parent section id used as the base for generated DOM ids. */
  ParentSectionId: string;

  /** Subsection id used to keep generated DOM ids unique. */
  SectionSubId: string;

  /** Optional background image source as a URL string or `StaticImageData`. */
  ImageSrc?: string | StaticImageData;

  /** Optional background position value used to vary the visible image crop per card. */
  BackgroundPosition?: string;
}>;

/**
 * Renders one top-level accordion card for a single skills collection.
 *
 * Dependencies:
 * - Uses `useAccordion` to manage open, hover, click, and keyboard interaction state.
 * - Uses `resolveImageSrc` to normalize optional image input into a usable background image URL.
 * - Uses `SKILLS_SURFACE_TOKENS` to apply shared surface, border, overlay, rim, and content layer styles.
 * - Uses `HeaderLayout` to render the card heading with shared layout behavior.
 * - Uses `SkillsSection` to render nested skill entries inside the expanded content area.
 * - Uses Heroicons to visualize expanded and collapsed state.
 *
 * Operations:
 * - Builds stable DOM ids for the article wrapper, heading, and expandable content region.
 * - Resolves an optional background image and applies it as an inline card background when available.
 * - Applies hover-driven visual styling for border and icon color while keeping open state independent.
 * - Toggles the accordion on click and keyboard interaction.
 * - Renders nested `SkillsSection` items only while the accordion is expanded.
 *
 * Accessibility:
 * - Exposes accordion state through `aria-expanded` and `aria-controls`.
 * - Connects the expandable content region to its heading through `aria-labelledby`.
 *
 * @param {SkillsArticleProps} props - Component props for the top-level skills accordion card.
 * @param {SkillsCollection} props.Item - Skills collection containing the title, ids, and nested skill entries.
 * @param {string} props.ParentSectionId - Parent section identifier used to generate stable DOM ids.
 * @param {string} props.SectionSubId - Subsection identifier used to keep generated ids unique.
 * @param {string | StaticImageData} [props.ImageSrc] - Optional background image source.
 * @param {string} [props.BackgroundPosition='center'] - Optional CSS background-position value for the card background.
 * @param {React.ReactNode} [props.children] - Optional nested React content included through `PropsWithChildren`.
 * @returns {JSX.Element} Interactive accordion card for one skills collection.
 */
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
              UseFontColor={false}
              Variant="bright"
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