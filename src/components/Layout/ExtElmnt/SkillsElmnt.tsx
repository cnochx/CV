import classNames from 'classnames';
import React, {FC, memo} from 'react';

import {BaseAlSkills} from '../../../data/utilComp/GeneralDef';
import {SkillsElmntProps} from '../../../data/utilComp/UtilImportPropsDef';

const SkillsElmnt: FC<SkillsElmntProps> = memo(({
                                                  AlSkills,
                                                  ParentId,
                                                  ArticleTitleTag,
                                                  LiClassName,
                                                  UlClassName,
                                                  DescriptionClassName,
                                                }) => {
  if (!AlSkills?.SeiSkillsItems?.length) {
    return null;
  }

  const renderDescription = (SkillItem: BaseAlSkills) => {
    if (!SkillItem.AlsDescription) {
      return null;
    }

    return (
      <div id={`${ParentId}-${SkillItem.AlsKey}-${SkillItem.AlsId}-${SkillItem.AlsDescription.DnId}`}>
        {SkillItem.AlsDescription.DnHead && (
          <p
            className="mt-4 text-lg font-bold"
            id={`${ParentId}-${SkillItem.AlsKey}-${SkillItem.AlsId}-${SkillItem.AlsDescription.DnId}-head`}
          >
            {SkillItem.AlsDescription.DnHead}
          </p>
        )}

        <div className="mt-0 flex flex-col space-y-2">
          {SkillItem.AlsDescription.DnText}
        </div>
      </div>
    );
  };

  const renderSkills = () => {
    switch (AlSkills.SeiDisplaySkills) {
      case 'list':
        return (
          <ul className={classNames(
            'w-full px-2',
            UlClassName
          )}>
            {AlSkills?.SeiSkillsItems?.map((SkillItem: BaseAlSkills) => (
              <React.Fragment key={SkillItem.AlsKey}>
                {SkillItem.AlsName && (
                  <li
                    className={classNames(
                      'w-full',
                              LiClassName)}
                    id={`${ParentId}-${SkillItem.AlsKey}-${SkillItem.AlsId}`}
                  >
                    <span>{SkillItem.AlsName}</span>
                  </li>
                )}
                {renderDescription(SkillItem)}
              </React.Fragment>
            ))}
          </ul>
        );

      case 'pills':
        return (
          <div className="flex flex-wrap gap-2">
            {AlSkills?.SeiSkillsItems?.map((SkillItem: BaseAlSkills) => (
              <React.Fragment key={SkillItem.AlsKey}>
                {SkillItem.AlsName && (
                  <span className="cursor-pointer rounded-full border border-fuchsia-400 bg-neutral-600 px-2 py-0.5 text-xs text-neutral-100 transition-transform duration-200 hover:-translate-y-0.5 hover:border-fuchsia-400/75 hover:bg-neutral-200 hover:text-neutral-600">
                    {SkillItem.AlsName}
                  </span>
                )}
                {renderDescription(SkillItem)}
              </React.Fragment>
            ))}
          </div>
        );

      case 'onlyDescription':
        return (
          <div className={DescriptionClassName}>
            {AlSkills?.SeiSkillsItems?.map((SkillItem: BaseAlSkills) => (
              <React.Fragment key={SkillItem.AlsKey}>
                {renderDescription(SkillItem)}
              </React.Fragment>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full min-w-0">
      {AlSkills.SeiSkillsHead && ArticleTitleTag ? (
        <ArticleTitleTag
          className="mt-4 text-lg font-bold"
          id={`${ParentId}-${AlSkills.SeiId}-description-title`}
        >
          {AlSkills.SeiSkillsHead}
        </ArticleTitleTag>
      ) : null}

      {renderSkills()}
    </div>
  );
});

SkillsElmnt.displayName = 'SkillsElmnt';
export default SkillsElmnt;