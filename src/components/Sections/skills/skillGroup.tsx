import {FC, memo, PropsWithChildren} from 'react';

import {SkillGroup as SkillGroupType} from '../../../data/skillDataDef';
import {Skill} from './skill';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {head, skills} = skillGroup;

  return (
    <div className="flex flex-col gap-4 mb-4"> {/* Added mb-4 for small distance between containers */}
      <span className="w-full text-center text-lg font-bold">{head}</span>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';