import {FC, memo} from 'react';

import {
  addHeader,
  additionalInterests,
  education,
  eduHeader,
  experience,
  expHeader,
  SectionId,
  sumHeader,
  summaryItems} from '../../../data/data';
import {skillSubHeader} from '../../../data/generalData';
import {skills} from '../../../data/skillData';
import Section from '../../Layout/Section';
import {SkillGroup} from '../skills/skillGroup';
import AdditionalInterests from './AdditionalInterests';
import AdditionalSection from './AdditionalSection';
import ResumeSection from './ResumeSection';
import SummaryItem from './SummaryItem';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title={sumHeader.title}>
          {sumHeader.content}
          <div className="flex flex-col space-y-4">
            {sumHeader.showSpacer && <br />}
          </div>
          {summaryItems.length >= 1 ?
            summaryItems.map((item) => (
              <SummaryItem item={item} key={`${item.title}-${item.siKey}`} />
            ))
            : null
          }
        </ResumeSection>
        <ResumeSection title={skillSubHeader.title}>
          {skillSubHeader.content}
          <div className="flex flex-col space-y-32">
            {skillSubHeader.showSpacer && <br />}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillGroup) => (
              <SkillGroup key={`${skillGroup.head}-${skillGroup.sgKey}`} skillGroup={skillGroup} />
            ))}
          </div>
        </ResumeSection>
        <ResumeSection title={expHeader.title}>
          {expHeader.content}
          <div className="flex flex-col space-y-32">
            {expHeader.showSpacer && <br />}
          </div>
          {experience.length >= 1 ?
            experience.map((item) => (
            <TimelineItem item={item} key={`${item.title}-${item.tlKey}`} />
          )): null
          }
        </ResumeSection>
        <ResumeSection title={eduHeader.title}>
          {eduHeader.content}
          <div className="flex flex-col space-y-32">
            {eduHeader.showSpacer && <br />}
          </div>
          {education.map((item) => (
            <TimelineItem item={item} key={`${item.title}-${item.tlKey}`} />
          ))}
        </ResumeSection>
        <AdditionalSection title={addHeader.title}>
          {addHeader.content}
          <div className="flex flex-col space-y-32">
            {addHeader.showSpacer && <br />}
          </div>
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
