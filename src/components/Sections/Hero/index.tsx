import classNames from 'classnames';
import Image from 'next/image';
import React, {FC, memo} from 'react';

import HeroSectionData from '../../../data/Hero/HeroSectionData';
import {heroData} from '../../../data/HeroData';
import {SectionId} from '../../../data/SectionIdData';
import {ImgItem} from '../../../data/utilComp/GeneralDef';
import {HeadingTag} from '../../../data/utilComp/generalTypeDef';
import {useIsMobile} from '../../../hooks/useIsMobile';
import {resolveImgSrc} from '../../../utilComp/ResolveHelper/ResolveImageSrc';
import SkillsElmnt from '../../Layout/ExtElmnt/SkillsElmnt';
import ArticleExtShell from '../../Layout/ExtShell/ArticleExtShell';
import HeaderExtShell from '../../Layout/ExtShell/HeaderExtShell';
import SectionExtShell from '../../Layout/ExtShell/SectionExtShell';
import Nav from '../../Navigation/Nav';
import Socials from '../../Socials';

/**
 * Hero section component.
 *
 * Renders the main landing section of the page, including:
 * - a responsive background image,
 * - the main title and subtitle,
 * - a short highlighted description list,
 * - social profile links,
 * - in-action buttons,
 * - and a fixed jump navigation control to the next section.
 *
 * Dependencies:
 * - Uses `heroData` as the structured content source for text and actions.
 * - Uses `HeroSectionData` as the image source collection for responsive hero media.
 * - Uses `useIsMobile` to resolve whether the mobile or screen image variant
 *   should be displayed.
 * - Uses `SectionExtShell` as the outer semantic section wrapper.
 * - Uses `ImageElement` to render the selected responsive background image.
 * - Uses `Socials` to display social profile links.
 * - Uses `Nav` to render the jump control to the next section.
 *
 * Operations:
 * - Reads hero text and call-to-action data from `heroData`.
 * - Selects the appropriate hero image variant from `HeroSectionData.IxImages`
 *   based on the current viewport category (`mobile` or `screen`).
 * - Renders the hero content centered inside a full-height viewport container.
 * - Displays the content inside a semi-transparent blurred article panel for contrast.
 * - Renders a jump navigation control linked to the About section.
 *
 * Layout notes:
 * - The outer `SectionExtShell` suppresses its default inner wrapper via `HideDiv`
 *   so the hero can control its own full-width and full-height layout.
 * - The background image is rendered as a positioned `next/image` layer through
 *   `ImageElement`, while the content sits above it with higher z-index values.
 *
 * @returns {JSX.Element} The rendered hero section with responsive media,
 *   title, description, actions, social links, and jump navigation.
 */
const Hero: FC = memo(() => {
  const {actions} = heroData;

  const {
    IxImages,
    IxHeader,
    IxContent,
  } = HeroSectionData ?? {};

  // Catch mobile picture
  const isMobile = useIsMobile();
  const imgType = isMobile ? 'mobile' : 'screen';
  const selectedImg: ImgItem | undefined = IxImages?.find((imgItem) => imgItem.ImgType === imgType);
  const resolvedImgSrc: string = resolveImgSrc(selectedImg)
    ? resolveImgSrc(selectedImg)
    : '';

  // Hero ArticleTags
  const ArticleTitleTagMain: HeadingTag = 'h2';
  const ArticleTitleTagSub: HeadingTag = 'h3';
  const ArticleTitleTagContent: HeadingTag =
    IxHeader.HdrSubId ? 'h3' : 'h2';

  return (
    <SectionExtShell
      ClassNameSection="relative w-full max-h-screen overflow-hidden"
      HideDiv={true}
      IsMain={true}
      Padding={false}
      SectionId={SectionId.Hero}
    >
      <Image
        alt={`${SectionId.Hero}-image-${selectedImg?.ImgId}`}
        className="absolute inset-0 z-0 object-cover"
        decoding="async"
        fill
        id={`${SectionId}-image-${imgType ?? 'default'}`}
        priority
        src={resolvedImgSrc}
      />

      <div className="relative z-10 flex max-h-screen w-full items-center justify-center px-4 py-16 lg:px-8">
        <div className="relative flex h-screen w-full items-center justify-center">
          <div className="z-10 max-w-screen-lg max-h-screen px-4 lg:px-0">

            <ArticleExtShell
              ArticleClassName="grid w-full max-w-screen-xl grid-cols-3 gap-x-4 gap-y-1 rounded-xl bg-gray-800/40 p-4 text-center shadow-lg backdrop-blur-sm sm:gap-x-6 sm:gap-y-6 sm:p-6 lg:gap-x-8 lg:gap-y-10 lg: p-8
  "
              ArticleId={SectionId.Hero}
              DisplaySubDiv={false}
              LabelledBy={SectionId.Hero}
            >
              <div className="col-span-3">
                <HeaderExtShell
                  HeaderClassName="space-y-1 sm:space-y-2 lg:space-y-3"
                  HeaderId={SectionId.Hero}
                  HeaderItem={IxHeader}
                >
                  <ArticleTitleTagMain
                    className="text-2xl font-bold text-stone-300 sm:text-5xl lg:text-6xl"
                    id={`${SectionId.Hero}-${IxHeader.HdrId}`}
                  >
                    {IxHeader.HdrTitle}
                  </ArticleTitleTagMain>

                  {IxHeader?.HdrSubTitle && (
                    <ArticleTitleTagSub
                      className="text-xl font-bold text-stone-100 sm:text-4xl lg:text-5xl"
                      id={`${SectionId.Hero}-${IxHeader.HdrSubId}`}
                    >
                      {IxHeader.HdrSubTitle}
                    </ArticleTitleTagSub>
                  )}
                </HeaderExtShell>
              </div>

              <SectionExtShell
                ClassNameSection="col-span-3 w-full min-w-0"
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
                    UlClassName="w-full px-2 w-full px-2 w-full px-2 text-stone-300 font-medium  text-xl  sm:space-y-2  lg:space-y-3 sm:text-2xl lg:text-3xl"
                    key={ContentItem?.AlSkills?.SeiId}
                  />
                ))}
              </SectionExtShell>

              <aside className="col-span-3 flex flex-col items-center gap-y-8 pt-2">
                <div className="flex justify-center gap-x-4 text-neutral-100">
                  <Socials />
                </div>

                <div className="flex w-full flex-wrap justify-center gap-3">
                  {actions.map(({href, text, primary, Icon}) => (
                    <a
                      className={classNames(
                        'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-neutral-100 ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                        primary ? 'border-fuchsia-400 ring-fuchsia-400' : 'border-neutral-100 ring-neutral-100',
                      )}
                      href={href}
                      key={text}
                    >
                      {text}
                      {Icon && <Icon className="h-5 w-5 text-neutral-100 sm:h-6 sm:w-6" />}
                    </a>
                  ))}
                </div>
              </aside>
            </ArticleExtShell>


          </div>
        </div>

        <Nav jumpSectionId={SectionId.About} />

      </div>
    </SectionExtShell>
  );
});

Hero.displayName = 'Hero';
export default Hero;