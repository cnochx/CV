// hooks/UseHeaderItemProbs.ts

import {BaseAlContentDef} from '../../data/Utils/GeneralDef';
import {getCurrentMonthYear} from '../SectionHelper';

export const customAlContent = (
                  AlContent:  BaseAlContentDef):BaseAlContentDef => {

  const ContentItem: BaseAlContentDef = AlContent;

  const dateEnd = AlContent.AlDateEnd === 'Present'
    ? getCurrentMonthYear()
    : AlContent.AlDateEnd;

  const dateRange = [AlContent.AlDateStrt, dateEnd]
    .filter(Boolean)
    .join(' – ');

  if (AlContent.AlDateCustom && AlContent.AlDateStrt && dateEnd) {
    ContentItem.AlDateCustomVal = (
        <time dateTime={`${ContentItem.AlDateStrt}/${dateEnd}`}>
          {dateRange}
        </time>
      );
  }

  return ContentItem;

};

