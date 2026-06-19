import React, {FC, memo} from 'react';

import {EducationSectionData} from '../../../data/Education/EducationSectionData';
import {SectionId} from '../../../data/sectionIdData';
import BrightPillIndexLyt from '../../Layout/BrightPill/Main/BrightPillIndexLyt';


const Education: FC = memo(() => {

  return (
    <BrightPillIndexLyt
      IdxContent={EducationSectionData}
      MainSectionId={SectionId.Education}
    />
  );

});

Education.displayName = 'Education';
export default Education;