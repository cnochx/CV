import {FC, memo} from 'react';

import {additionalInterests, education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';
import AdditionalSection from './AdditionalSection';
import AdditionalInterests from './AdditionalInterests';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Skills">
          <p className="pb-8">Value based on years</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
        <ResumeSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <AdditionalSection title="Interests">
          {additionalInterests.map((interest, index) => (
            <AdditionalInterests item={interest} key={index} />
          ))}
        </AdditionalSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
