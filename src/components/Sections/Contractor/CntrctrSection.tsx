import {FC, memo, PropsWithChildren} from 'react';

import {CntrctrMain as CntrctrSectorType} from '../../../data/ContractorDataDef';
import CallToAction from '../../Navigation/CallToAction';

type CntrctrSectorProps = PropsWithChildren<{
  Item: CntrctrSectorType;
  ParentSectionId: string;
  SectionSubId: string;
}>;

const CntrctrSection : FC<CntrctrSectorProps> = memo(({Item,
                                                    ParentSectionId,
                                                    SectionSubId}) => {
  const {Description, Detail, ShowSpacer} = Item;

  const ItemId = `${ParentSectionId}-${SectionSubId}-callToAction`;

  const spacerClass = ShowSpacer ? 'flex flex-col space-y-32 mt-8' : 'flex flex-col space-y-32';

  return (
    <section className="col-span-1 flex flex-col md:col-span-3">

      <div className="prose prose-sm sm:prose-base">
        {Description}
      </div>

      <ul className="mt-6 space-y-4">
        {Detail.map(({text, label}, idx) => (
          <li className="flex items-start gap-3" key={idx}>
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-fuchsia-400" />

            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-bold leading-tight">{label}:</span>
              <span className="text-sm italic leading-snug">{text}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className={spacerClass}>
        <CallToAction SectionId={ItemId} />
      </div>

    </section>
  );
});

CntrctrSection.displayName = 'CntrctrSection';
export default CntrctrSection;