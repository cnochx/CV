import Image from 'next/image';
import {FC, memo} from 'react';

import {AboutData} from '../../../data/About/about';
import HeaderData from '../../../data/HeaderData';
import {SectionId} from '../../../data/SectionIdData';
import SectionLayout from '../../Layout/DarkSpecial/SectionLayout';


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


  const TitleId = `${SectionId.About}-title`;

  return (
    <SectionLayout
        IsMain={true}
        className="bg-neutral-800 px-4 py-16 md:py-24 lg:px-8 scroll-mt-24"
        sectionId={SectionId.About}>

      <div className="mx-auto max-w-screen-lg">
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
                    src={profileImageSrc}
                    width={128}
                  />
                </a>
              </div>
            )}
          </div>

          <div className="col-span-1 flex flex-col gap-y-6 md:col-span-3">

            <header className="flex flex-col gap-y-2">
              <h2 className="text-2xl font-bold text-neutral-100"
                  id={TitleId}>{Title}</h2>
              <span className="absolute inset-x-0 -bottom-1 border-b-2 border-fuchsia-400" />
            </header>

            <section className="col-span-1 flex flex-col gap-y-6 md:col-span-3">

              <div className="prose prose-sm text-neutral-200 sm:prose-base">
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
                      <span className="text-sm font-bold text-neutral-100">{label}:</span>{' '}
                      <span className="text-sm text-neutral-200">{text}</span>
                    </div>
                  </li>
                ))}
              </ul>

            </section>

          </div>

        </article>
      </div>

      <hr className="mt-8 border-0 border-b-2 border-fuchsia-400" />

    </SectionLayout>
  );
});

About.displayName = 'About';
export default About;