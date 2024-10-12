import {FC, memo, useState} from 'react';
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/solid'; // Heroicons v2

import {SkillGroup as SkillGroupType} from '../../../data/skillDataDef';
import {Skill} from './skill';

export const SkillGroup: FC<{skillGroup: SkillGroupType}> = memo(({skillGroup}) => {
  const {head, skills} = skillGroup;
  const [isContainerOpen, setIsContainerOpen] = useState(false);

  const toggleContainer = () => {
    setIsContainerOpen((prev) => !prev);
 };

  return (
    <div className={`flex flex-col gap-4 mb-4 border rounded-2xl p-4 ${isContainerOpen ? 'border-amber-500 hover:bg-gray-100' : 'border-neutral-300'}`}>
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleContainer}>
        <h3 className="w-full text-center text-lg font-bold">{head}</h3>
        {isContainerOpen ? (
          <ChevronUpIcon className="w-6 h-6 text-amber-500" />
        ) : (
          <ChevronDownIcon className="w-6 h-6 text-neutral-500" />
        )}
      </div>
      {isContainerOpen && (
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <Skill key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      )}
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';