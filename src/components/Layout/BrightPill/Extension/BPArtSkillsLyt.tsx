import React, {FC, memo} from 'react';

import {BaseAlSkills} from '../../../../data/utilComp/GeneralDef';
import {ArtSkillsLytProps} from '../../../../data/utilComp/UtilImportPropsDef';

const BPArtSkillsLyt: FC<ArtSkillsLytProps> = memo(({
                                                    AlSkills,
                                                    SectionId,
                                                    ArticleTitleTag,
                                                  }) => {

  return (

    <>
      {AlSkills?.SeiSkillsItems?.length ? (
        <section
          aria-labelledby={`${SectionId}-${AlSkills?.SeiId}-title`}
          id={`${SectionId}-${AlSkills?.SeiId}`}>
          {AlSkills?.SeiSkillsHead ? (
            <ArticleTitleTag className="font-bold text-lg mt-4" id={`${SectionId}-${AlSkills?.SeiId}-title`}>
              {AlSkills?.SeiSkillsHead}
            </ArticleTitleTag>
          ) : null}

          <div className="flex flex-wrap mt-2 gap-2">
            {AlSkills?.SeiSkillsItems.map((SkillItem: BaseAlSkills) => (
              <>
                {SkillItem.AlsName && (
                  <span
                    className="hover-stable cursor-pointer rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-xs text-frost-100 hover:bg-accent-400/15 hover:text-accent-300 hover:border-accent-400/55 hover:-translate-y-0.5 transition-transform duration-200"
                    key={SkillItem.AlsKey}>
                {SkillItem.AlsName}
              </span>)}

                {SkillItem.AlsDescription && (
                  <>
                    {SkillItem.AlsDescription.DnHead && (
                      <p className="font-bold text-lg mt-4"
                         id={`${SectionId}-${SkillItem.AlsDescription.DnId}`}>
                        {SkillItem.AlsDescription.DnHead}
                      </p>
                    )}

                    <div className="flex flex-col mt-0 space-y-2">
                      {SkillItem.AlsDescription.DnText}
                    </div>
                  </>
                )}

              </>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
});

BPArtSkillsLyt.displayName = 'BPArtSkillsLyt';
export default BPArtSkillsLyt;