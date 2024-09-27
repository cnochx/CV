import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import {freelance, frlHeader} from '../../data/FreelanceData';
import Section from '../Layout/Section';


const Freelance: FC = memo(() => {
  const {content, stack} = freelance;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Freelance}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <article className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
          <header className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-max">
              <h2 className="text-xl font-bold uppercase text-white">{frlHeader.title}</h2>
              <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
            </div>
          </header>
          <section className="col-span-1 flex flex-col md:col-span-3 text-white">
            {frlHeader.content}
            <div className="flex flex-col space-y-32">
              {frlHeader.showSpacer && <br />}
            </div>

            <div className="col-span-1 flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-2">
                {content}
              </div>

              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {stack.map(({iKey, text}) => (
                  <li className="col-span-1 flex  items-start gap-x-2" key={iKey}>
                    <span className=" text-sm text-white">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col space-y-32">
                <br />
              </div>

              <aside className="flex flex-col items-stretch mt-4">
                <a href="mailto:martin@grellmann.eu?subject=Send from grellmann.app CV">
                  <button
                    className="inline-flex items-center justify-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-base px-8 py-4 me-2 mb-2 border border-cyan-500 w-full"
                    type="button">
                    <svg aria-hidden="true" className="w-6 h-6 text-white me-2 ml-2" fill="currentColor"
                         viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path
                        d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    Send an eMail
                  </button>
                </a>
              </aside>

            </div>
          </section>


        </article>
      </div>
    </Section>
  );
});

Freelance.displayName = 'About';
export default Freelance;
