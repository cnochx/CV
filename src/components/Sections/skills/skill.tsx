import {FC, memo, useMemo, useState} from 'react';
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/solid'; // Heroicons v2

import {Skill as SkillType} from '../../../data/skillDataDef';
import {subSkillTexts} from '../../../data/generalData';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, expLevel, max = 10, years, groupOfOrigin} = skill;
  const [isOpen, setIsOpen] = useState(false);
  const percentage = useMemo(() => Math.round((expLevel / max) * 100), [expLevel, max]);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
 };

  return (
    <div className={`flex flex-col w-96 h-auto border rounded-2xl p-4 ${isOpen ? 'border-amber-500' : 'border-neutral-300'} ${isOpen ? 'hover:bg-gray-100' : ''}`}>
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleAccordion}>
        <h4 className="ml-2 text-sm font-medium">
          <strong>{name}</strong>
        </h4>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-amber-500" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-neutral-500" />
        )}
      </div>
      <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300 mb-2">
        <div className="h-full rounded-full bg-orange-400" style={{width: `${percentage}%`}} />
      </div>
      {isOpen && (
        <div className="ml-2 mt-2 text-sm text-neutral-600">
          {years ? <p>{subSkillTexts.experiencePre} {years} {subSkillTexts.experiencePost}</p> : null}
          {groupOfOrigin && groupOfOrigin.length > 0 && (
            <>
              <p>
                <em className="italic">{subSkillTexts.roleText}</em>
              </p>
              <ul className="list-disc pl-4">
                {groupOfOrigin.map((origin) => (
                  <li className="mr-2" key={origin.oKey}>
                    {origin.origin}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
});

Skill.displayName = 'Skill';