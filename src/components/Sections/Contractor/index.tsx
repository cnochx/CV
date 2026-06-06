import {FC, memo, useMemo} from 'react';

import {ContractorContData, ContractorData} from '../../../data/ContractorData';
import {SectionId, SectionSubId} from '../../../data/sectionIdData';
import Section from '../../Layout/Section';
import CntrctrArticle from './CntrctrArticle';

const Contractor: FC = memo(() => {
  const {Solve, Focus, Different} = ContractorData;
  const {ImageSrc, Title, Suffix, Prefix} = ContractorContData;

  const resolveSrc = useMemo(() => {
    if (!ImageSrc) return undefined;
    return typeof ImageSrc === 'string' ? ImageSrc : ImageSrc.src;
  }, [ImageSrc]);

  const TitleId = `${SectionId.Contractor}-title`;

  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Contractor}>
      <div className="flex flex-col gap-y-12">

        <div className="relative overflow-hidden rounded-2xl bg-cover bg-center"
             style={ImageSrc ? {backgroundImage: `url(${resolveSrc}`} : undefined}>
          <div className="absolute inset-0 bg-stone-600/40" />
          <header className="relative z-10 flex flex-col gap-y-3 px-6 py-10 text-white sm:px-8 sm:py-12">
            <div className="relative h-max">
              <h2 className="text-2xl font-bold sm:text-3xl" id={TitleId}>
                {Title}
              </h2>
              <span className="absolute inset-x-0 -bottom-1 border-b-2 border-fuchsia-400" />
            </div>
            <div className="max-w-3xl text-sm leading-7 text-white/90 sm:text-base">
              {Prefix}
            </div>
          </header>
        </div>

        <div className="flex flex-col divide-y-2 divide-fuchsia-400">
          <CntrctrArticle
            Item={Solve}
            ParentSectionId={SectionId.Contractor}
            SectionSubId={SectionSubId.Solve}
          />

          <CntrctrArticle
            Item={Focus}
            ParentSectionId={SectionId.Contractor}
            SectionSubId={SectionSubId.Focus}
          />

          <CntrctrArticle
            Item={Different}
            ParentSectionId={SectionId.Contractor}
            SectionSubId={SectionSubId.Different}
          />
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-cover bg-center"
             style={ImageSrc ? {backgroundImage: `url(${resolveSrc}`} : undefined}>
          <div className="absolute inset-0 bg-stone-600/40" />
          <footer className="relative z-10 px-6 py-8 text-white sm:px-8 sm:py-10">
            <div className="space-y-4 text-sm leading-7 text-white/90 sm:text-base">
              {Suffix}
            </div>
          </footer>
        </div>
      </div>

      <hr className="mt-8 border-0 border-b-2 border-fuchsia-400" />

    </Section>
  );
});

Contractor.displayName = 'Contractor';
export default Contractor;