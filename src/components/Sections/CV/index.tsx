import React, {FC, memo} from 'react';

import CVSectionData from '../../../data/CV/CVSectionData';
import {SectionId} from '../../../data/sectionIdData';
import BrightPillIndexLyt from '../../Layout/BrightPill/Main/BrightPillIndexLyt';


const CV: FC = memo(() => {


  return (
    <BrightPillIndexLyt
      IdxContent={CVSectionData}
      MainSectionId={SectionId.CV}
    />
  );

});

CV.displayName = 'CV';
export default CV;