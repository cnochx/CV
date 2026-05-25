import {SubHeader, SubSkillTexts} from './generalDataDef';

/**
 * Skills section
 */
export const skillSubHeader: SubHeader = {
  title: 'Skills',
  content: (
    <>
      <p className="pb-8">The rating reflects practical experience, depth of application and long-term use in professional projects. I also indicate the approximate years of experience and the roles in which each skill was applied most strongly.</p>
    </>
  ),
  showSpacer: false
};

export const subSkillTexts: SubSkillTexts = {
  experiencePre: 'Experience:',
  experiencePost: 'years',
  roleText: 'Applied mainly in the role of:',
};