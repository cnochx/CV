import classNames from 'classnames';
import React, {FC, memo} from 'react';

import HeroSectionData from '../../../data/Hero/HeroSectionData';
import {heroData} from '../../../data/HeroData';
import {SectionId} from '../../../data/SectionIdData';
import {HeadingTag} from '../../../data/utilComp/generalTypeDef';
import SkillsElmnt from '../../Layout/ExtElmnt/SkillsElmnt';
import ArticleExtShell from '../../Layout/ExtShell/ArticleExtShell';
import HeaderExtShell from '../../Layout/ExtShell/HeaderExtShell';
import SectionExtShell from '../../Layout/ExtShell/SectionExtShell';
import NavSections from '../../Navigation/NavSections';
import Socials from '../../Socials';

/**
 * Renders the landing hero section with responsive media, profile content,
 * primary actions, social links, and a jump control to the next section.
 *
 * Dependencies:
 * - Uses `heroData` as the structured content source for action links.
 * - Uses `HeroSectionData` to provide responsive hero media and header content.
 * - Uses `useIsMobile` to resolve the active image variant for the current viewport.
 * - Uses `resolveImgSrc` to transform the selected image item into a renderable source path.
 * - Uses `SectionExtShell`, `ArticleExtShell`, and `HeaderExtShell` to compose the semantic hero layout.
 * - Uses `SkillsElmnt` to render the highlighted hero content entries.
 * - Uses `Socials` to render external profile links.
 * - Uses `NavSections` to render the next-section jump navigation for the hero context.
 *
 * Operations:
 * - Selects the mobile or screen hero image variant based on the current viewport category.
 * - Resolves heading levels for the hero title, subtitle, and content entries from the available header metadata.
 * - Renders the background image as an absolutely positioned `next/image` layer behind the hero content.
 * - Displays the main hero copy inside a semi-transparent blurred article shell for readability over the image.
 * - Maps configured action items to styled call-to-action links with optional icons.
 * - Positions the next-section jump control at the bottom center of the hero viewport.
 *
 * Layout notes:
 * - The outer `SectionExtShell` suppresses its default inner wrapper through `HideDiv`
 *   so the hero can manage its own full-width and full-height composition.
 * - The hero background layer stays behind the content stack through explicit z-index separation.
 * - The next-section control is rendered in a dedicated absolute wrapper to keep its placement
 *   independent of the main article layout.
 *
 * @returns {JSX.Element} Rendered hero section with responsive media and navigation affordances.
 */
const Hero: FC = memo(() => {
  const {actions} = heroData;

  const {
    IxHeader,
    IxContent,
  } = HeroSectionData ?? {};

  // v3.4 hero (designsheet §7.2): the photo background and glass panel retire —
  // the atmosphere is glow blobs on the ink-950 canvas. The headline becomes
  // the page's H1 and the guaranteed LCP element (SSR'd DOM, no image race).
  const ArticleTitleTagMain: HeadingTag = 'h1';
  const ArticleTitleTagContent: HeadingTag =
    IxHeader.HdrSubId ? 'h3' : 'h2';

  return (
    <SectionExtShell
      ClassNameSection="relative w-full overflow-hidden"
      HideDiv={true}
      IsMain={true}
      Padding={false}
      SectionId={SectionId.Hero}
    >
      {/* L0 glow layer — pure decoration, zero layout impact (§5) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-[12vw] -top-[18vw] h-[56vw] w-[56vw] rounded-full bg-[radial-gradient(closest-side,rgba(232,121,249,0.20),transparent)]" />
        <div className="absolute -right-[16vw] top-[22vh] h-[44vw] w-[44vw] rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.16),transparent)]" />
        <div className="absolute -bottom-[14vw] left-[26vw] h-[38vw] w-[38vw] rounded-full bg-[radial-gradient(closest-side,rgba(157,140,245,0.16),transparent)]" />
      </div>

      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-4 py-24 lg:px-8">

        <ArticleExtShell
          ArticleClassName="mx-auto flex w-full max-w-3xl flex-col items-center gap-y-8 text-center sm:gap-y-10"
          ArticleId={`${SectionId.Hero}-intro`}
          DisplaySubDiv={false}
          LabelledBy={`${SectionId.Hero}-${IxHeader.HdrId}`}
        >
          <HeaderExtShell
            HeaderClassName="flex w-full flex-col items-center"
            HeaderId={SectionId.Hero}
            HeaderItem={IxHeader}
          >
            {/* Eyebrow (visually above the display headline via column-reverse) */}
            <div className="flex flex-col-reverse items-center gap-y-4">
              <ArticleTitleTagMain
                className="text-4xl font-bold tracking-tight text-frost-100 sm:text-h1 lg:text-display"
                id={`${SectionId.Hero}-${IxHeader.HdrId}`}
              >
                {IxHeader.HdrTitle}
              </ArticleTitleTagMain>

              {IxHeader?.HdrSubTitle && (
                <p
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-400 sm:text-sm"
                  id={`${SectionId.Hero}-${IxHeader.HdrSubId}`}
                >
                  {IxHeader.HdrSubTitle}
                </p>
              )}
            </div>
          </HeaderExtShell>

          <SectionExtShell
            ClassNameSection="w-full min-w-0"
            IsMain={false}
            Padding={false}
            SectionId={`${SectionId.Hero}-content`}
          >
            {IxContent?.map((ContentItem) => (
              <SkillsElmnt
                AlSkills={ContentItem?.AlSkills}
                ArticleTitleTag={ArticleTitleTagContent}
                DescriptionClassName=""
                LiClassName="w-full"
                ParentId={`${SectionId.Hero}-content`}
                UlClassName="w-full px-2 text-base font-medium text-frost-300 sm:space-y-1.5 sm:text-lg"
                key={ContentItem?.AlSkills?.SeiId}
              />
            ))}
          </SectionExtShell>

          <aside className="flex flex-col items-center gap-y-8">
            <div className="flex w-full flex-wrap justify-center gap-3">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-ink-950 sm:text-base',
                    primary
                      ? 'border-primary-400 bg-primary-400 text-ink-950 shadow-e1 ring-accent-400 hover:bg-primary-300'
                      : 'border-white/10 bg-white/5 text-frost-100 ring-accent-400 backdrop-blur-md hover:border-accent-400/55 hover:bg-accent-400/15 hover:text-accent-300',
                  )}
                  href={href}
                  key={text}
                >
                  {text}
                  {Icon && <Icon className="h-5 w-5 sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>

            <div className="flex justify-center gap-x-4 text-frost-100">
              <Socials />
            </div>
          </aside>
        </ArticleExtShell>

        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
        <NavSections
          currentSectionId={SectionId.Hero}/>
        </div>

      </div>
    </SectionExtShell>
  );
});

Hero.displayName = 'Hero';
export default Hero;