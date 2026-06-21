import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import HeroSectionData from '../../../data/Hero/HeroSectionData';
import {heroData} from '../../../data/HeroData';
import {SectionId} from '../../../data/SectionIdData';
import {ImgItem} from '../../../data/utilComp/GeneralDef';
import {useIsMobile} from '../../../hooks/useIsMobile';
import {resolveImgSrc} from '../../../utilComp/ResolveHelper/ResolveImageSrc';
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
  const {title, subTitle, descrList, actions} = heroData;
  const {IxImages} = HeroSectionData ?? {};

  // Catch mobile picture
  const isMobile = useIsMobile();
  const imgType = isMobile ? 'mobile' : 'screen';
  const selectedImg: ImgItem | undefined = IxImages?.find((imgItem) => imgItem.ImgType === imgType);
  const resolvedImgSrc: string = resolveImgSrc(selectedImg)
    ? resolveImgSrc(selectedImg)
    : '';

  return (
    <SectionExtShell
      ClassNameSection="relative w-full max-h-screen overflow-hidden"
      ClassNameSubDiv=""
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

      <div className="px-4 py-16 md:py-24 lg:px-8 scroll-mt-24">
        <div className="relative flex h-screen w-full items-center justify-center">
          <div className="z-10 max-w-screen-lg px-4 lg:px-0">

            <article className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">

              <header>
                <h1
                  className="text-4xl font-bold text-stone-300 sm:text-5xl lg:text-7xl"
                  id={SectionId.Hero}
                >
                  {title}
                </h1>
                <h2
                  className="text-3xl font-bold text-stone-100 sm:text-3xl lg:text-5xl"
                  id={SectionId.Hero}
                >
                  {subTitle}
                </h2>
              </header>

              <ul className="list-inside list-none pl-6 text-left">
                {descrList.map(({hdlKey, listElement}) => (
                  <li className="prose-sm text-stone-200 sm:prose-base lg:prose-lg" key={hdlKey}>
                    <strong className="text-stone-100">
                      <span>{listElement}</span>
                    </strong>
                  </li>
                ))}
              </ul>

              <div className="flex gap-x-4 text-neutral-100">
                <Socials />
              </div>

              <div className="flex w-full justify-center gap-x-4">
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

            </article>
          </div>
        </div>

        <Nav jumpSectionId={SectionId.About} />

      </div>
    </SectionExtShell>
  );
});

Hero.displayName = 'Hero';
export default Hero;