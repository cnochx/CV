import {FC, memo} from 'react';

import ContractorSectionData from '../../../data/Contractor/ContractorSectionData';
import {SectionId} from '../../../data/sectionIdData';
import BrightPillIndexLyt from '../../Layout/BrightPill/Main/BrightPillIndexLyt';



const Contractor: FC = memo(() => {
  return (
    <BrightPillIndexLyt
      IdxContent={ContractorSectionData}
      MainSectionId={SectionId.Contractor}
    />
  );
});

Contractor.displayName = 'Contractor';
export default Contractor;