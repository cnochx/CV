import React, {FC, memo} from 'react';

import CVSectionData from '../../../data/CV/CVSectionData';
import {SectionId} from '../../../data/SectionIdData';
import PBIndexLyt from '../../Layout/BrightPill/Main/PBIndexLyt';


const CV: FC = memo(() => {


  return (
    <PBIndexLyt
      IdxContent={CVSectionData}
      MainSectionId={SectionId.CV}
    />
  );

});

CV.displayName = 'CV';
export default CV;