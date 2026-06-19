import React, {FC, memo, useCallback, useState} from 'react';

import {ContentSectionLytProps} from '../../../../data/Utils/UtilImportPropsDef';
import AsideLyt from '../../AsideLyt';
import BrightPillArtDescriptionLyt from '../Extension/BrightPillArtDescriptionLyt';
import BrightPillArtSkillsLyt from '../Extension/BrightPillArtSkillsLyt';
import {getContentIds} from '../../../../utils/SectionHelper';

const BrightPillSectionLyt: FC<ContentSectionLytProps> = memo(({
                                                                 AlContent,
                                                                 SectionId,
                                                                 ArticleTitleTag,
                                                               }) => {
  const {
    AlCallToAction,
    AlCompany,
    AlDateCustom,
    AlDateCustomVal,
    AlDivide,
    AlDescription1,
    AlDescription2,
    AlDescription3,
    AlSkills,
    AlRole,
  } = AlContent;

  const [openMap, setOpenMap] = useState({
    description1: true,
    description2: false,
    description3: false,
  });

  const toggleDescription1 = useCallback(() => {
    setOpenMap((prev) => ({
      ...prev,
      description1: !prev.description1,
    }));
  }, []);

  const toggleDescription2 = useCallback(() => {
    setOpenMap((prev) => ({
      ...prev,
      description2: !prev.description2,
    }));
  }, []);

  const toggleDescription3 = useCallback(() => {
    setOpenMap((prev) => ({
      ...prev,
      description3: !prev.description3,
    }));
  }, []);

  const locationCountry = [AlContent.AlLocation, AlContent.AlCountry]
    .filter(Boolean)
    .join(', ');

  const dateRange = [AlContent.AlDateStrt, AlContent.AlDateEnd]
    .filter(Boolean)
    .join(' – ');

  const sectionIds = getContentIds(SectionId, AlContent);

  return (
    <section
      aria-labelledby={sectionIds.sectionLabelBy}
      className="grid grid-cols-1 gap-y-3 md:grid-cols-[180px_minmax(0,1fr)_minmax(0,1fr)] md:gap-x-8"
      id={sectionIds.idSection}
    >
      <div className="text-sm font-medium italic leading-7 text-gray-500 sm:text-base md:col-start-1 md:row-start-1">
        {AlDateCustomVal ? (
          AlDateCustomVal
        ) : !AlDateCustom && dateRange ? (
          <time>{dateRange}</time>
        ) : null}
      </div>

      {(AlCompany || locationCountry) ? (
        <div className="md:col-span-2 md:col-start-2 md:row-start-1">
          <div className="flex flex-col gap-y-1 md:flex-row md:items-center md:gap-x-4">
            <div className="min-w-0 md:flex-1">
              {AlCompany ? <span className="text-lg">{AlCompany}</span> : null}
              {AlCompany && locationCountry ? <span>&nbsp;•&nbsp;</span> : null}
              {locationCountry ? <span>{locationCountry}</span> : null}
              {(AlCompany || locationCountry) && AlRole ? <br /> : null}
              {AlRole ? <span>Role: {AlRole}</span> : null}
            </div>
          </div>
        </div>
      ) : null}

      <BrightPillArtDescriptionLyt
        AlDescription={AlDescription1}
        ArticleTitleTag={ArticleTitleTag}
        IsOpen={openMap.description1}
        OnToggle={toggleDescription1}
        SectionId={SectionId}
      />

      <BrightPillArtDescriptionLyt
        AlDescription={AlDescription2}
        ArticleTitleTag={ArticleTitleTag}
        IsOpen={openMap.description2}
        OnToggle={toggleDescription2}
        SectionId={SectionId}
      />

      <BrightPillArtDescriptionLyt
        AlDescription={AlDescription3}
        ArticleTitleTag={ArticleTitleTag}
        IsOpen={openMap.description3}
        OnToggle={toggleDescription3}
        SectionId={SectionId}
      />

      {AlSkills && AlSkills.SeiEnableSkills ? (
        <div className="md:col-span-2 md:col-start-2">
          <BrightPillArtSkillsLyt
            AlSkills={AlSkills}
            ArticleTitleTag={ArticleTitleTag}
            SectionId={sectionIds.idSkills}
          />
        </div>
      ) : null}

      {AlCallToAction ? (
        <div className="w-full md:col-span-2 md:col-start-2 md:justify-self-center">
          <AsideLyt
            CallToActionItem={AlCallToAction}
            ClassName="mt-4 flex flex-col space-y-4"
            DisplayDivide={false}
            SectionId={sectionIds.idCallToAction}
          />
        </div>
      ) : null}

      {AlDivide ? (
        <div className="md:col-span-3">
          <div className="mb-4 pt-12">
            <hr className="mt-1 border-0 border-b-2 border-fuchsia-400" />
          </div>
        </div>
      ) : (
        <div className="pt-8 md:col-span-3" />
      )}
    </section>
  );
});

BrightPillSectionLyt.displayName = 'CVSection';
export default BrightPillSectionLyt;