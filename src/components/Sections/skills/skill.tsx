import {FC, memo, useMemo} from 'react';

import {Skill as SkillType} from '../../../data/skillDataDef';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, expLevel, max = 10, years, groupOfOrigin} = skill;
  const percentage = useMemo(() => Math.round((expLevel / max) * 100), [expLevel, max]);

  return (
    <div className="flex flex-col w-96 h-64 border border-amber-500 rounded p-4">
      <p className="ml-2 text-sm font-medium"><strong>{name}</strong></p>
      <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
        <div className="h-full rounded-full bg-orange-400" style={{width: `${percentage}%`}} />
      </div>
      <div className="ml-2 mt-2 text-sm text-neutral-600">
        {years ? <p>Experience since: {years} years</p> : null}
        {groupOfOrigin && groupOfOrigin.length > 0 && (
          <>
            <p><em className="italic">Applied the skill into the role of:</em></p>
            <ul className="list-disc pl-4">
              {groupOfOrigin.map(origin => (
                <li className="mr-2" key={origin.oKey}>{origin.origin}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';