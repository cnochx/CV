import React, {FC, memo, useMemo} from 'react';
import {HiOutlineEnvelope} from 'react-icons/hi2';

import AdditionalElements from '../../../data/AdditionalElements';
import HeaderData from '../../../data/HeaderData';
import {SectionId} from '../../../data/SectionIdData';
import SkillsCollectionData from '../../../data/Skills/SkillCollection';
import {SkillsCollection} from '../../../data/Skills/SkillCollectionDef';
import {ExtCallToActionDef} from '../../../data/utilComp/GeneralDef';
import HeaderLayout from '../../Layout/DarkSpecial/HeaderLayout';
import SectionLayout from '../../Layout/DarkSpecial/SectionLayout';
import AsideExtShell from '../../Layout/ExtShell/AsideExtShell';
import SkillsArticle from './SkillsArticle';

/**
 * Predefined background-position values used to vary the visible crop
 * of the shared skills background image across top-level cards.
 */
const CARD_BACKGROUND_POSITIONS = [
  '18% center',
  '38% center',
  '62% center',
  '82% center',
];

/**
 * Renders the complete skills overview section of the portfolio.
 *
 * Dependencies:
 * - Uses `HeaderData` to resolve the section title, description, and shared background image.
 * - Uses `AdditionalElements` to render the configured suffix content below the skill cards.
 * - Uses `SkillsCollectionData` as the data source for all top-level skill groups.
 * - Uses `SectionLayout` and `HeaderLayout` for shared section and heading structure.
 * - Uses `SkillsArticle` to render each top-level skill accordion card.
 * - Uses `CallToAction` to render the closing section action.
 *
 * Operations:
 * - Builds a stable heading id for the skills section.
 * - Renders the section heading and descriptive intro content.
 * - Maps over all configured skill collections and renders one `SkillsArticle` per item.
 * - Distributes predefined background-position values across cards to vary the visible crop
 *   of the shared background image.
 * - Renders suffix content and the call-to-action beneath the skill grid.
 *
 * Layout:
 * - Uses a single-column grid on smaller screens and switches to a two-column grid on medium screens and above.
 * - Wraps the skills cards inside a centered section container with a fixed visual rhythm and footer divider.
 *
 * @returns {JSX.Element} Rendered skills overview section with heading, card grid, suffix content, and call-to-action.
 */
const Skills: FC = memo(() => {
  const {
    SkillsMain: [{Title, Description, ImageSrc}],
  } = HeaderData;

  const {
    SkillsMain: {Suffix},
  } = AdditionalElements;

  const callToActionItems = useMemo(
    (): ExtCallToActionDef => ({
      AeiCallToActionItems: [
        {
          CtaKey: 1,
          CtaId: 'calltoAction',
          CtaType: 'contact',
          CtaHref: 'mailto:martin@grellmann.eu?subject=Send from grellmann.app CV',
          CtaText: "Let's talk ... send me an email",
          CtaIcon: HiOutlineEnvelope,
        },
      ],
      AeiEnableCallToAction: false,
    }),
    [],
  );

  const TitleId: string = `${SectionId.Skills}-title`;

  return (
    <SectionLayout
      IsMain={true}
      className="md:py-24 lg:px-8 bg-neutral-800 px-4 py-16"
      sectionId={SectionId.Skills}>
      <div className="mx-auto max-w-screen-lg">

        <HeaderLayout
          ClassName="flex flex-col gap-y-2"
          SetBorder="highlight"
          UseVariantText="bright">

          <h2 className="text-2xl font-bold" id={TitleId}>
            {Title}

          </h2>
        </HeaderLayout>

        <div className="mt-8 max-w text-neutral-100">
          {Description}
        </div>

        <div className="mt-10 rounded-3xl bg-neutral-800 p-6">
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">

            {SkillsCollectionData.map(
              (skillsCollection: SkillsCollection, index: number) => (
                <SkillsArticle
                  BackgroundPosition={
                    CARD_BACKGROUND_POSITIONS[
                    index % CARD_BACKGROUND_POSITIONS.length
                      ]
                  }
                  ImageSrc={ImageSrc}
                  Item={skillsCollection}
                  ParentSectionId={SectionId.Skills}
                  SectionSubId={skillsCollection.Id}
                  key={skillsCollection.Id}
                />
              )
            )}

          </div>
        </div>

        <div className="flex flex-col space-y-32 mt-8 text-neutral-100">
          {Suffix}
        </div>

        <AsideExtShell
          CallToActionItem={callToActionItems}
          SectionId={SectionId.Skills}
        />

      </div>
      
    </SectionLayout>
  );
});

Skills.displayName = 'Skills';
export default Skills;