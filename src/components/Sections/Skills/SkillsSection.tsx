import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/solid';
import {FC, memo, MouseEvent, useMemo} from 'react';

import AdditionalElements from '../../../data/AdditionalElements';
import {SkillsProps} from '../../../data/Utils/UtilImportPropsDef';
import {SKILLS_SURFACE_TOKENS} from '../../../UtilComp/Skills/SurfaceTokens';
import useAccordion from '../../../UtilComp/UseAccordion';
import HeaderLayout from '../../Layout/DarkSpecial/HeaderLayout';



/**
 * Renders one nested accordion card for a single skill entry.
 *
 * Dependencies:
 * - Uses `useAccordion` to manage nested open, hover, click, and keyboard interaction state.
 * - Uses `AdditionalElements` to resolve shared experience and role text fragments.
 * - Uses `SKILLS_SURFACE_TOKENS` to apply the shared surface, overlay, rim, and active ring styles.
 * - Uses `HeaderLayout` to render the nested card heading with shared layout behavior.
 * - Uses Hero icons to indicate expanded and collapsed state.
 *
 * Operations:
 * - Builds stable DOM ids for the nested section, title, and expandable content region.
 * - Computes the progress bar percentage from `ExpLevel`.
 * - Applies active and inactive visual styling for border, icon, progress bar, and ring state.
 * - Prevents click and keyboard events from bubbling to the parent accordion.
 * - Renders experience and origin details only while the nested accordion is expanded.
 *
 * Accessibility:
 * - Exposes accordion state through `aria-expanded` and `aria-controls`.
 * - Connects the expandable region to its heading through `aria-labelledby`.
 *
 * @param {SkillsProps} props - Component props for the nested skill card.
 * @param {SkillItem} props.SkillItem - Skill entry containing title, ids, experience level, and detail content.
 * @param {string} props.Id - Parent skills collection id used in generated DOM ids.
 * @param {string} props.ParentSectionId - Parent section id used to scope nested DOM ids.
 * @param {React.ReactNode} [props.children] - Optional nested React content passed through `PropsWithChildren`.
 * @returns {JSX.Element} Nested interactive accordion card for a single skill item.
 */
const SkillsSection: FC<SkillsProps> = memo(
  ({
     SkillItem,
     Id,
     ParentSectionId,
   }) => {
    const {SKey, Name, IdSub, ExpLevel, Years, GroupOfOrigin} = SkillItem;
    const Max = 10;

    const IdPrefix = `${ParentSectionId}-${Id}-${SKey}-${IdSub}`;
    const SectionId = `${IdPrefix}-section`;
    const TitleId = `${IdPrefix}-title`;
    const ContentId = `${IdPrefix}-content`;

    const {
      SkillsItem: {ExperiencePrefix, ExperienceSuffix, RoleText},
    } = AdditionalElements;

    const percentage = useMemo(() => {
      return Math.round((ExpLevel / Max) * 100);
    }, [ExpLevel, Max]);

    const {
      isOpen,
      isHovered,
      toggleAccordion,
      handleMouseEnter,
      handleMouseLeave,
      handleKeyDown,
    } = useAccordion();

    const isActiveVisual = isHovered || isOpen;

    const sectionClassName = isActiveVisual
      ? `${SKILLS_SURFACE_TOKENS.containerBase} ${SKILLS_SURFACE_TOKENS.sectionSpacing} ${SKILLS_SURFACE_TOKENS.borderActive} ${SKILLS_SURFACE_TOKENS.activeRingInner}`
      : `${SKILLS_SURFACE_TOKENS.containerBase} ${SKILLS_SURFACE_TOKENS.sectionSpacing} ${SKILLS_SURFACE_TOKENS.borderInactive}`;

    const titleClassName = 'ml-2 text-sm font-medium text-neutral-100';

    const iconClassName = isActiveVisual
      ? `h-6 w-6 transition-colors duration-200 ${SKILLS_SURFACE_TOKENS.iconActive}`
      : `h-6 w-6 transition-colors duration-200 ${SKILLS_SURFACE_TOKENS.iconInactive}`;

    const detailTextClassName = 'ml-2 mt-2 text-sm text-neutral-100';

    const progressBarClassName = isActiveVisual
      ? `h-full rounded-full transition-colors duration-200 ${SKILLS_SURFACE_TOKENS.progressActive}`
      : `h-full rounded-full transition-colors duration-200 ${SKILLS_SURFACE_TOKENS.progressInactive}`;

    /**
     * Toggles the nested accordion and prevents the interaction
     * from bubbling to the parent accordion container.
     *
     * @param {MouseEvent<HTMLElement>} event - Click event triggered on the nested section wrapper.
     * @returns {void} Does not return a value.
     */
    const handleSectionClick = (event: MouseEvent<HTMLElement>): void => {
      event.stopPropagation();
      toggleAccordion();
    };

    return (
      <section
        aria-controls={ContentId}
        aria-expanded={isOpen}
        className={sectionClassName}
        id={SectionId}
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
        <div className={SKILLS_SURFACE_TOKENS.overlayInner} />
        <div className={SKILLS_SURFACE_TOKENS.rimInner} />

        <div className={SKILLS_SURFACE_TOKENS.contentLayer}>
          <div className="mb-4 flex items-center justify-between">
            <HeaderLayout
              ClassName={null}
              SetBorder={null}
              UseVariantBg={null}
              UseVariantText={null}
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

          <div className="mb-2 h-5 w-full overflow-hidden rounded-full bg-neutral-100/40">
            <div
              className={progressBarClassName}
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
        </div>
      </section>
    );
  }
);

SkillsSection.displayName = 'SkillsSection';
export default SkillsSection;