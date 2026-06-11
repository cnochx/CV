import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/solid';
import {FC, memo, MouseEvent, PropsWithChildren, useMemo} from 'react';

import AdditionalElements from '../../../data/AdditionalText';
import {SkillItem} from '../../../data/SkillCollectionDef';
import {getBackGroundColorClass, getBorderColorClass, getFontColorClass} from '../../../utils/SectionHelper';
import useAccordion from '../../../utils/useAccordion';
import HeaderLayout from '../../Layout/HeaderLayout';

type SkillsProps = PropsWithChildren<{
  SkillItem: SkillItem;
  Id: string;
  ParentSectionId: string;
  Key: number;
}>;

/**
 * Renders one nested skills accordion item inside a parent skills article.
 *
 * Dependencies:
 * - Uses `useAccordion` for reusable accordion open and hover logic.
 * - Uses `AdditionalElements` for shared text fragments.
 * - Uses Hero icons (`ChevronDownIcon`, `ChevronUpIcon`) to indicate open and closed state.
 * - Uses React `useMemo` to memoize the percentage calculation for the progress bar.
 *
 * Operations:
 * - Builds unique DOM ids for the nested accordion wrapper and title.
 * - Calculates the experience percentage based on `ExpLevel` and `Max`.
 * - Applies hover-based visual styling to the full nested accordion.
 * - Toggles the nested accordion when the user clicks inside the child container.
 * - Prevents click events from bubbling to the parent accordion.
 * - Renders additional detail content only when the nested accordion is open.
 *
 * Accessibility:
 * - The outer section behaves like a button via `role="button"`.
 * - `aria-expanded` reflects whether the nested accordion is open.
 * - `aria-controls` connects the clickable wrapper to the content element.
 *
 * @param {SkillsProps} props - Component props containing skill data and identifiers.
 * @param {SkillItem} props.SkillItem - List of skill props.
 * @param {string} props.Id - Parent skill collection id.
 * @param {string} props.ParentSectionId - Parent DOM section id.
 * @param {number} props.Key - React key value passed to the component.
 * @param {React.ReactNode} [props.children] - Optional nested React content passed through the props type.
 * @returns {JSX.Element} Rendered nested accordion item with progress bar and optional detail content.
 */
const SkillsSection: FC<SkillsProps> = memo(
  ({
     SkillItem,
     Id,
     ParentSectionId,
     Key,
   }) => {
    // set component vars
    const {SKey, Name, IdSub, ExpLevel, Years, GroupOfOrigin} = SkillItem;
    const Max = 10;

    // Set Background colors
    const backgroundColorDark:string = getBackGroundColorClass('medium-contrast');
    const backgroundColorBright:string = getBackGroundColorClass('bright');

    // Set Font colors
    const fontColorDark:string = getFontColorClass('bright');
    const fontColorBright:string = getFontColorClass('dark');
    const fontColorContrast:string = getFontColorClass('contrast');
    const fontColorContrastAlt:string = getFontColorClass('contrast_alt');

    // Set Border colors
    const borderColorPrimary = getBorderColorClass('primary');
    const borderColorSecondary = getBorderColorClass('secondary');

    // set Id's
    const IdPrefix  = `${ParentSectionId}-${Id}-${SKey}-${IdSub}`;

    const SectionId = `${IdPrefix}-section`;
    const TitleId   = `${IdPrefix}-title`;
    const ContentId = `${IdPrefix}-content`;

    // set additional Elements
    const {
      SkillsItem: {ExperiencePrefix, ExperienceSuffix, RoleText},
    } = AdditionalElements;

    // set percentage
    const percentage = useMemo(() => {
      return Math.round((ExpLevel / Max) * 100);
    }, [ExpLevel, Max]);

    // Set Accordion Logic
    const {
      isOpen,
      isHovered,
      toggleAccordion,
      handleMouseEnter,
      handleMouseLeave,
      handleKeyDown,
    } = useAccordion();

    const isActiveVisual = isHovered;

    // Set CSS Classes
    const sectionClassName = isActiveVisual
      ? `flex h-auto w-96 flex-col rounded-2xl border ${borderColorPrimary} ${backgroundColorBright} p-4 ${fontColorDark} transition-colors duration-200`
      : `flex h-auto w-96 flex-col rounded-2xl border ${borderColorSecondary} ${backgroundColorDark} p-4 ${fontColorBright} transition-colors duration-200`;

    const titleClassName = isActiveVisual
      ? `ml-2 text-sm font-medium ${fontColorDark}`
      : `ml-2 text-sm font-medium ${fontColorBright}`;

    const iconClassName = isActiveVisual
      ? `h-5 w-5 ${fontColorContrast} transition-colors duration-200`
      : `h-5 w-5 ${fontColorContrastAlt} transition-colors duration-200`;

    const detailTextClassName = isActiveVisual
      ? `ml-2 mt-2 text-sm {fontColorContrast}`
      : `ml-2 mt-2 text-sm ${fontColorBright}`;

    /**
     * Toggles the nested accordion and prevents the click from bubbling
     * up to the parent accordion container.
     *
     * @param {MouseEvent<HTMLElement>} event - Mouse event triggered on the nested accordion.
     * @returns {void} Does not return a value; stops propagation and toggles the nested accordion.
     */
    const handleSectionClick = (event: MouseEvent<HTMLElement>): void => {
      event.stopPropagation();
      toggleAccordion();
    };

    return (
      <section
        aria-controls={ContentId}
        aria-expanded={isOpen}
        className={`${sectionClassName} cursor-pointer`}
        id={SectionId}
        key={Key}
        onClick={handleSectionClick}
        onKeyDown={(event) => {
          event.stopPropagation();
          handleKeyDown(event);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="button"
        tabIndex={0}
      >
        <div className="mb-4 flex items-center justify-between">
          <HeaderLayout
            ClassName={null}
            SetBorder="none"
            UseFontColor={false}
            Variant={null}
          >
          <h4 className={titleClassName} id={TitleId}>
            <strong>{Name}</strong>
          </h4>
          </HeaderLayout>

          {isOpen ? (
            <ChevronUpIcon className={iconClassName} />
          ) : (
            <ChevronDownIcon className={iconClassName} />
          )}
        </div>

        <div className="mb-2 h-5 w-full overflow-hidden rounded-full bg-neutral-300">
          <div
            className="h-full rounded-full bg-fuchsia-400"
            style={{width: `${percentage}%`}}
          />
        </div>

        {isOpen && (
          <div
            aria-labelledby={TitleId}
            className={detailTextClassName}
            id={ContentId}
          >
            {Years ? (
              <p>
                {ExperiencePrefix} {Years} {ExperienceSuffix}
              </p>
            ) : null}

            {GroupOfOrigin && GroupOfOrigin.length > 0 && (
              <>
                <p>
                  <em className="italic">{RoleText}</em>
                </p>

                <ul className="list-disc pl-4">
                  {GroupOfOrigin.map((Origin) => (
                    <li className="mr-2" key={Origin.OKey}>
                      {Origin.Origin}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </section>
    );
  }
);

SkillsSection.displayName = 'SkillsSection';
export default SkillsSection;