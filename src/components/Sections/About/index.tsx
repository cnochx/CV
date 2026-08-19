import Image from 'next/image';
import {FC, memo} from 'react';

import {AboutData} from '../../../data/About/about';
import HeaderData from '../../../data/HeaderData';
import {SectionId} from '../../../data/SectionIdData';
import {resolveImgSrc} from '../../../utilComp/ResolveHelper/ResolveImageSrc';
import SectionLayout from '../../Layout/DarkSpecial/SectionLayout';
import Reveal from '../../Motion/Reveal';


const About: FC = memo(() => {
  const {
    profileImageSrc,
    aboutItems,
    imagePublicURL,
    imagePublicAlt,
  } = AboutData;

  const {
    AboutMain: [{Title, Description}],
  } = HeaderData;

  const resolvedImgSrc: string = resolveImgSrc(profileImageSrc)
    ? resolveImgSrc(profileImageSrc)
    : '';


  const TitleId = `${SectionId.About}-title`;

  return (
    <SectionLayout
        IsMain={true}
        className="bg-ink-900 px-4 py-16 md:py-24 lg:px-8"
        sectionId={SectionId.About}>

      <Reveal className="mx-auto max-w-screen-lg">
        <article className="grid grid-cols-1 gap-y-4 md:grid-cols-4">

          <div className="col-span-1 flex justify-center md:justify-start">
            {!!profileImageSrc && (
              <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
                <a href={imagePublicURL} rel="noopener noreferrer" target="_blank">
                  <Image
                    alt={imagePublicAlt}
                    className="h-full w-full object-cover"
                    decoding="async"
                    height={128}
                    loading="lazy"
                    src={resolvedImgSrc}
                    width={128}
                  />
                </a>
              </div>
            )}
          </div>

          <div className="col-span-1 flex flex-col gap-y-6 md:col-span-3">

            <header className="flex flex-col gap-y-2">
              <h2 className="text-h2 font-bold text-frost-100"
                  id={TitleId}>{Title}</h2>
              <span className="h-0.5 w-2/3 rounded bg-aurora" />
            </header>

            <section className="col-span-1 flex flex-col gap-y-6 md:col-span-3">

              <div className="prose prose-sm text-frost-300 sm:prose-base">
                {Description}
              </div>

              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {aboutItems.map(({label, text, Icon}, idx) => (


                  <li className="col-span-1 flex items-start gap-x-3" key={idx}>
                    {Icon && (
                      <span className="mt-0.5 flex w-7 shrink-0 justify-center">
                        <Icon className="h-6 w-6 text-fuchsia-400" />
                      </span>
                    )}
                    <div>
                      <span className="text-sm font-bold text-frost-100">{label}:</span>{' '}
                      <span className="text-sm text-frost-300">{text}</span>
                    </div>
                  </li>
                ))}
              </ul>

            </section>

          </div>

        </article>
      </Reveal>

      <hr className="mt-8 h-0.5 rounded border-0 bg-aurora" />

    </SectionLayout>
  );
});

About.displayName = 'About';
export default About;