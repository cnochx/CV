import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/solid';
import React, {FC, memo} from 'react';

import {ArtDescriptionLyt} from '../../../../data/Utils/UtilImportPropsDef';

const BPArtDescriptionLyt: FC<ArtDescriptionLyt> = memo(({
                                                                   AlDescription,
                                                                   SectionId,
                                                                   ArticleTitleTag,
                                                                   IsOpen,
                                                                   OnToggle,
                                                                 }) => {
  if (!AlDescription) return null;

  const baseId = `${SectionId}-${AlDescription.DnId}`;
  const titleId = `${baseId}-title`;
  const contentId = `${baseId}-content`;
  const iconClassName = 'ml-2 h-7 w-7 shrink-0 text-fuchsia-400';
  const buttonClassName = [
    'flex w-full items-center justify-between pb-2 text-left text-lg font-bold',
    !IsOpen ? 'border-b border-fuchsia-400' : '',
  ].join(' ');

  return (
    <section
      aria-labelledby={titleId}
      className="md:col-span-2 md:col-start-2"
      id={baseId}
    >
      {AlDescription.DnHead ? (
        <ArticleTitleTag className="mt-4" id={titleId}>
          <button
            aria-controls={contentId}
            aria-expanded={IsOpen}
            className={buttonClassName}
            onClick={OnToggle}
            type="button"
          >
            <span>{AlDescription.DnHead}</span>

            <span aria-hidden="true">
              {IsOpen ? (
                <ChevronUpIcon className={iconClassName} />
              ) : (
                <ChevronDownIcon className={iconClassName} />
              )}
            </span>
          </button>
        </ArticleTitleTag>
      ) : null}

      {IsOpen ? (
        <div className="mt-1 flex flex-col space-y-4" id={contentId}>
          {AlDescription.DnText}
        </div>
      ) : null}
    </section>
  );
});

BPArtDescriptionLyt.displayName = 'BPArtDescriptionLyt';
export default BPArtDescriptionLyt;