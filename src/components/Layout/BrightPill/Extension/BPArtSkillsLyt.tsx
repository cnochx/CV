import React, {FC, memo} from 'react';

import {BaseAlSkills} from '../../../../data/Utils/GeneralDef';
import {ArtSkillsLytProps} from '../../../../data/Utils/UtilImportPropsDef';

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
                    className="cursor-pointer rounded-full border border-fuchsia-400 bg-neutral-600 px-2 py-0.5 text-xs text-neutral-100 hover:bg-neutral-200 hover:text-neutral-600 hover:border-fuchsia-400/75 hover:-translate-y-0.5 transition-transform duration-200"
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