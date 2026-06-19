// data/cv/items/Training Full-Stack Web Developer, Indisoft GmbH

import {LinkIcon} from '@heroicons/react/24/outline';

import {SectionId} from '../sectionIdData';
import {BaseAlContentDef} from '../Utils/GeneralDef';

export const CVContentDataIds: BaseAlContentDef = {

  /** Optional country label rendered for the entry. */
  AlCompany: 'Indisoft GmbH',
  AlCountry: 'Germany',
  AlCallToAction: {
    AeiCallToActionItems: [
      {
      CtaId: 'calltoaction',
      CtaIcon: LinkIcon,
      CtaHref: `#${SectionId.Education}`,
      CtaKey: 1,
      CtaPre: 'See also in:',
      CtaText: 'Education Part',
      CtaType: 'linkSimple',
    }
    ],
    AeiEnableCallToAction: true,
  },
  AlDateEnd: '01/2021',
  AlDateStrt: '01/2020',
  AlDateCustom: true,
  AlHeaderItem: {
    HdrId: 'title',
    HdrTitle: 'Training Full-Stack Web Developer'
  },
  AlId: 'training_Full-Stack_Web_Developer_is',
  AlKey: 5,
  AlLocation: 'Leipzig',
  AlRole: 'Certification',
  AlDivide: true,
}