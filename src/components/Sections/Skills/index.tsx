import {FC, memo} from 'react';

import AdditionalElements from '../../../data/AdditionalText';
import HeaderData from '../../../data/HeaderData';
import {SectionId} from '../../../data/sectionIdData';
import SkillsCollectionData from '../../../data/SkillCollection';
import {SkillsCollection} from '../../../data/SkillCollectionDef';
import {
  getBackGroundColorClass,
  getBorderColorClass,
  getFontColorClass,
  getSpacerClass,
} from '../../../utils/SectionHelper';
import HeaderLayout from '../../Layout/HeaderLayout';
import SectionLayout from '../../Layout/SectionLayout';
import CallToAction from '../../Navigation/CallToAction';
import SkillsArticle from './SkillsArticle';

/**
 * Renders the skills overview section of the portfolio.
 *
 * Dependencies:
 * - Uses `HeaderData` to resolve the section variant, title, description, and spacer configuration.
 * - Uses `AdditionalElements` to resolve the section suffix content.
 * - Uses `SkillsCollectionData` to render the individual skills categories.
 * - Uses `SectionHelper` utility functions to resolve semantic Tailwind classes for background, font, border, and spacing.
 * - Uses `Section`, `HeaderLayout`, `SkillsArticle`, and `CallToAction` as layout and content building blocks.
 *
 * Operations:
 * - Resolves theme-based background, font, border, and spacing classes from the configured section variant.
 * - Builds a unique heading id based on the shared `SectionId`.
 * - Renders the section title and description.
 * - Maps all skill collections into responsive `SkillsArticle` cards.
 * - Renders additional suffix content and a call-to-action block below the skills grid.
 * - Adds a themed horizontal divider at the bottom of the section.
 *
 * @returns {JSX.Element} Rendered skills section with heading, description, skill cards, suffix content, and call to action.
 */
const Skills: FC = memo(() => {
  // Resolve section configuration from header data.
  const {
    SkillsMain: [{Variant, Title, Description, ShowSpacer}],
  } = HeaderData;

  // Resolve additional section content displayed below the skills grid.
  const {
    SkillsMain: {Suffix},
  } = AdditionalElements;

  // Resolve semantic Tailwind classes from the configured section variant.
  const backgroundColor: string = getBackGroundColorClass(Variant);
  const fontColor: string = getFontColorClass(Variant);
  const borderColor: string = getBorderColorClass('primary');
  const spacerClass: string = getSpacerClass(ShowSpacer);

  // Build the unique heading id for section accessibility.
  const TitleId: string = `${SectionId.Skills}-title`;

  return (
    <SectionLayout
      className={`px-4 py-16 md:py-24 lg:px-8 ${backgroundDark}`}
      sectionId={SectionId.Skills}
    >
      <div className="mx-auto max-w-screen-lg">
        <HeaderLayout
          ClassName="flex flex-col gap-y-2"
          SetBorder="highlight"
          Variant="bright"
        >
          <h2 className="text-2xl font-bold" id={TitleId}>
            {Title}
          </h2>
        </HeaderLayout>

        <div className={`mt-6 prose prose-sm max-w-none sm:prose-base ${fontColor}`}>
          {Description}
        </div>

        <div className="mt-6 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {SkillsCollectionData.map((SkillsCollection: SkillsCollection) => (
            <SkillsArticle
              Item={SkillsCollection}
              ParentSectionId={SectionId.Skills}
              SectionSubId={SkillsCollection.Id}
              key={SkillsCollection.Id}
            />
          ))}
        </div>

        <div className={`mt-6 ${spacerClass} ${fontColor}`}>
          {Suffix}
        </div>

        <div className={spacerClass}>
          <CallToAction SectionId={SectionId.Skills} />
        </div>
      </div>

      <hr className={`mt-8 border-0 border-b-2 ${borderHighlight}`} />
    </SectionLayout>
  );
});

Skills.displayName = 'Skills';
export default Skills;