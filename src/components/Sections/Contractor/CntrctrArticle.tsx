import {FC, memo, PropsWithChildren} from 'react';

import {CntrctrMain as CntrctrHeaderType} from '../../../data/ContractorDataDef';
import CntrctrHeader from './CntrctrHeader';
import CntrctrSection from './CntrctrSection';

type CntrctrHeaderProps = PropsWithChildren<{
  Item: CntrctrHeaderType;
  ParentSectionId: string;
  SectionSubId: string;
}>;

const CntrctrArticle: FC<CntrctrHeaderProps> = memo(({
                                                       Item,
                                                       ParentSectionId,
                                                       SectionSubId,
                                                     }) => {

  const ItemId = `${ParentSectionId}-${SectionSubId}`;

  return (
    <article className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4" id={ItemId}>

      <CntrctrHeader Item={Item}
                     ParentSectionId={ParentSectionId}
                     SectionSubId={SectionSubId} />

      <CntrctrSection Item={Item}
                      ParentSectionId={ParentSectionId}
                      SectionSubId={SectionSubId} />

    </article>
  );
});

CntrctrArticle.displayName = 'CntrctrHeader';
export default CntrctrArticle;