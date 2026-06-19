import React, {FC, memo} from 'react';

import {EducationSectionData} from '../../../data/Education/EducationSectionData';
import {SectionId} from '../../../data/SectionIdData';
import PBIndexLyt from '../../Layout/BrightPill/Main/PBIndexLyt';


const Education: FC = memo(() => {

  return (
    <PBIndexLyt
      IdxContent={EducationSectionData}
      MainSectionId={SectionId.Education}
    />
  );

});

Education.displayName = 'Education';
export default Education;