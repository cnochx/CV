import {FC, memo} from 'react';

import {additionalInterests, education, experience, SectionId, skills, summaryItems} from '../../../data/data';
import Section from '../../Layout/Section';
import AdditionalInterests from './AdditionalInterests';
import AdditionalSection from './AdditionalSection';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import SummaryItem from './SummaryItem';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Resume">
          {summaryItems.map((item) => (
            <SummaryItem item={item} key={`${item.title}-${item.siKey}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <p className="pb-8">Value based on years</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
        <ResumeSection title="Work">
          {experience.map((item) => (
            <TimelineItem item={item} key={`${item.title}-${item.tlKey}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Education">
          {education.map((item) => (
            <TimelineItem item={item} key={`${item.title}-${item.tlKey}`} />
          ))}
        </ResumeSection>
        <AdditionalSection title="Interests">
          {additionalInterests.map((interest) => (
            <AdditionalInterests item={interest} key={interest.liKey} />
          ))}
        </AdditionalSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
