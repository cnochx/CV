// hooks/UseHeaderItemProbs.ts

import {BaseAlContentDef} from '../../data/utilComp/GeneralDef';
import {getCurrentMonthYear} from '../SectionHelper';

export const customAlContent = (
                  AlContent:  BaseAlContentDef):BaseAlContentDef => {

  const ContentItem: BaseAlContentDef = AlContent;

  const dateEnd = AlContent.AlDateEnd === 'Present'
    ? getCurrentMonthYear()
    : AlContent.AlDateEnd;

  /**
   * Converts a `MM/YYYY` label into the `YYYY-MM` value the HTML `datetime`
   * attribute expects. Returns undefined for anything that does not match,
   * so the attribute is omitted instead of carrying an invalid value.
   */
  const toIsoMonth = (value?: string): string | undefined => {
    const match = /^(\d{2})\/(\d{4})$/.exec(value ?? '');
    return match ? `${match[2]}-${match[1]}` : undefined;
  };

  if (AlContent.AlDateCustom && AlContent.AlDateStrt && dateEnd) {
    ContentItem.AlDateCustomVal = (
        <>
          <time dateTime={toIsoMonth(ContentItem.AlDateStrt)}>{ContentItem.AlDateStrt}</time>
          {' – '}
          <time dateTime={toIsoMonth(dateEnd)}>{dateEnd}</time>
        </>
      );
  }

  return ContentItem;

};

