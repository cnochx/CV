import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {header, profileImageSrc, description, aboutItems, imagePublicURL, imagePublicAlt} = aboutData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <article className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <a href={imagePublicURL} rel="noopener noreferrer" target="_blank"><Image alt={imagePublicAlt} className="h-full w-full object-cover" src={profileImageSrc} /></a>
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <header className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">{header}</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
          </header>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-bold text-white">{label}:</span>
                <span className=" text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Section>
  );
});

About.displayName = 'About';
export default About;
