import {SubHeader, SubSkillTexts} from './generalDataDef';

/**
 * Skills section
 */
export const skillSubHeader: SubHeader = {
  title: 'Skills',
  content: (
    <>
      <p className="pb-8">The value is based on experience. Additional I add the years  of experience and in which role I used that skill mostly.</p>
    </>
  ),
  showSpacer: false
};

export  const subSkillTexts: SubSkillTexts = {
  experiencePre: 'Experience since:',
  experiencePost: 'years',
  roleText: 'Applied the skill into the role of:',
}

