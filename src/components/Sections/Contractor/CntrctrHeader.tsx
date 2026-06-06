import {FC, memo, PropsWithChildren} from 'react';

import {CntrctrMain as CntrctrMainType} from '../../../data/ContractorDataDef';

type CntrctrArticleProps = PropsWithChildren<{
  Item: CntrctrMainType;
  ParentSectionId: string;
  SectionSubId: string;
}>;

const CntrctrHeader: FC<CntrctrArticleProps> = memo(({
                                                       Item,
                                                       ParentSectionId,
                                                       SectionSubId,
                                                     }) => {

  const Title = Item.Title;

  const TitleId = `${ParentSectionId}-${SectionSubId}-title`;

  return (
    <header className="col-span-1 flex justify-center md:justify-start">
      <div className="relative h-max">
        <h3 className="text-xl font-bold uppercase"
            id={TitleId}>{Title}</h3>
        <span className="absolute inset-x-0 -bottom-1 border-b-2 border-fuchsia-400" />
      </div>
    </header>
  );
});

CntrctrHeader.displayName = 'CntrctrHeader';
export default CntrctrHeader;