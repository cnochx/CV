import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import {freelance, frlHeader} from '../../data/freelance_data';
import Section from '../Layout/Section';


const Freelance: FC = memo(() => {
  const {title, content, stack} = freelance;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Freelance}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-max">
              <h2 className="text-xl font-bold uppercase text-white">{frlHeader.title}</h2>
              <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
            </div>
          </div>
          <div className="col-span-1 flex flex-col md:col-span-3 text-white">

            {frlHeader.content}
            <div className="flex flex-col space-y-32">
              {frlHeader.showSpacer && <br />}
            </div>

            <div className="col-span-1 flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-2">
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                {content}
              </div>

              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {stack.map(({iKey, text}) => (
                  <li className="col-span-1 flex  items-start gap-x-2" key={iKey}>
                    <span className=" text-sm text-white">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>


        </div>
      </div>
    </Section>
  );
});

Freelance.displayName = 'About';
export default Freelance;
