import {FC, memo} from 'react';

import ContractorSectionData from '../../../data/Contractor/ContractorSectionData';
import {SectionId} from '../../../data/SectionIdData';
import PBIndexLyt from '../../Layout/BrightPill/Main/PBIndexLyt';



const Contractor: FC = memo(() => {
  return (
    <PBIndexLyt
      IdxContent={ContractorSectionData}
      MainSectionId={SectionId.Contractor}
    />
  );
});

Contractor.displayName = 'Contractor';
export default Contractor;