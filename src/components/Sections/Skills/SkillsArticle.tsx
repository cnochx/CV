import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/solid';
import {FC, memo, PropsWithChildren} from 'react';

import {SkillItem, SkillsCollection} from '../../../data/skillCollectionDef';
import {
  getBackGroundColorClass,
  getBorderColorClass,
  getFontColorClass,
} from '../../../utils/SectionHelper';
import useAccordion from '../../../utils/useAccordion';
import HeaderLayout from '../../Layout/HeaderLayout';
import SkillsSection from './SkillsSection';

/**
 * Props for the `SkillsArticle` component.
 *
 * Defines the data source for one skill accordion card and
 * the identifiers required to generate stable DOM ids.
 */
type SkillsArticleProps = PropsWithChildren<{
  /** Skills collection rendered by the accordion card. */
  Item: SkillsCollection;

  /** Parent section id used as the base for generated DOM ids. */
  ParentSectionId: string;

  /** Subsection id used to keep generated DOM ids unique. */
  SectionSubId: string;
}>;

/**
 * Renders one interactive accordion card for a single skill's collection.
 *
 * Dependencies:
 * - Uses `useAccordion` to manage open, hover, click, and keyboard interaction state.
 * - Uses `SectionHelper` utilities to resolve semantic Tailwind classes for background, font, and border styling.
 * - Uses `HeaderLayout` to render the accordion heading with shared layout rules.
 * - Uses `SkillsSection` to render the individual skill items inside the expanded content area.
 * - Uses Hero icons to visualize the expanded and collapsed states.
 *
 * Operations:
 * - Builds stable DOM ids for the article, heading, and expandable content region.
 * - Resolves visual state classes based on hover and interaction state.
 * - Toggles the accordion on click and keyboard interaction.
 * - Renders the skills list only while the accordion is expanded.
 * - Applies accessible accordion metadata through `aria-expanded`, `aria-controls`, and `aria-labelledby`.
 *
 * @param {SkillsArticleProps} props - Component props for the skills accordion card.
 * @param {SkillsCollection} props.Item - Skills collection containing the title, group key, and rendered skill entries.
 * @param {string} props.ParentSectionId - Parent section identifier used to generate unique DOM ids.
 * @param {string} props.SectionSubId - Subsection identifier used to generate unique DOM ids.
 * @param {React.ReactNode} [props.children] - Optional nested content included through `PropsWithChildren`.
 * @returns {JSX.Element} Interactive accordion card for one skill group.
 */
export const SkillsArticle: FC<SkillsArticleProps> = memo(
  ({Item, ParentSectionId, SectionSubId}) => {
    const {Head, Id, SgKey, Skills} = Item;

    // Resolve background colors for inactive and active visual states.
    const backgroundColorDark: string = getBackGroundColorClass('dark');
    const backgroundColorBright: string = getBackGroundColorClass('bright');

    // Resolve font colors for inactive, active, and accent states.
    const fontColorDark: string = getFontColorClass('bright');
    const fontColorBright: string = getFontColorClass('dark');
    const fontColorContrast: string = getFontColorClass('contrast');
    const fontColorContrastAlt: string = getFontColorClass('contrast_alt');

    // Resolve border colors for inactive and active visual states.
    const borderColorPrimary: string = getBorderColorClass('primary');
    const borderColorSecondary: string = getBorderColorClass('secondary');

    // Build stable DOM ids for the accordion structure.
    const ArticleId = `${ParentSectionId}-${SgKey}-${SectionSubId}-article`;
    const TitleId = `${ParentSectionId}-${SgKey}-${SectionSubId}-title`;

    // Resolve accordion state and interaction handlers.
    const {
      isOpen,
      isHovered,
      toggleAccordion,
      handleMouseEnter,
      handleMouseLeave,
      handleKeyDown,
    } = useAccordion();

    const isActiveVisual = isHovered;

    // Resolve visual classes based on the current interaction state.
    const articleClassName = isActiveVisual
      ? `mb-4 flex flex-col gap-4 rounded-2xl border p-4 ${backgroundColorBright} ${fontColorDark} transition-colors duration-200 ${borderColorSecondary}`
      : `mb-4 flex flex-col gap-4 rounded-2xl border p-4 ${backgroundColorDark} ${fontColorBright} transition-colors duration-200 ${borderColorPrimary}`;

    const headerClassName = isActiveVisual
      ? `relative w-full text-center ${fontColorDark}`
      : `relative w-full text-center ${fontColorBright}`;

    const titleClassName = isActiveVisual
      ? `text-lg font-bold ${fontColorDark}`
      : `text-lg font-bold ${fontColorBright}`;

    const iconClassName = isActiveVisual
      ? `font-bold h-8 w-8 shrink-0 ${fontColorContrastAlt} transition-colors duration-200`
      : `font-bold h-8 w-8 shrink-0 ${fontColorContrast} transition-colors duration-200`;

    return (
      <article
        aria-controls={`${ArticleId}-content`}
        aria-expanded={isOpen}
        className={`${articleClassName} cursor-pointer`}
        id={ArticleId}
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="button"
        tabIndex={0}
      >
        <div className="flex items-center justify-between gap-3">
          <HeaderLayout
            ClassName={headerClassName}
            SetBorder="none"
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
            {Skills.map((SkillItem: SkillItem) => (
              <SkillsSection
                Id={Id}
                Key={SkillItem.SKey}
                ParentSectionId={ArticleId}
                SkillItem={SkillItem}
              />
            ))}
          </div>
        )}
      </article>
    );
  }
);

SkillsArticle.displayName = 'SkillsArticle';
export default SkillsArticle;