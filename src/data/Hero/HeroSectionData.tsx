

import ChevronDownIcon from '@heroicons/react/24/solid/ChevronDownIcon';

import {SectionId} from '../SectionIdData';
import {BaseIndexContentDef} from '../utilComp/GeneralDef';
import HeroContentDataHero from './HeroContentDataHero';


export const HeroSectionData: BaseIndexContentDef = {
  IxHeader: {
    HdrId: 'main_title',
    HdrSubId: 'main_sub_title',
    HdrTitle: 'Senior Full-Stack Engineer',
    HdrSubTitle: 'Martin Grellmann',
  },
  IxImages: [
    {
      ImgKey: 1,
      ImgSrc: '/images/home.webp',
      ImgId: 'screen',
      ImgType: 'screen',
    },
    {
      ImgKey: 2,
      ImgSrc: '/images/home_mobile.webp',
      ImgId: 'mobile',
      ImgType: 'mobile',
    },
  ],
  IxContent: [
    HeroContentDataHero,
  ],
  IxCallToAction: {
    AeiEnableCallToAction: true,
    AeiCallToActionItems: [
      {
        CtaKey: 1,
        CtaType: 'jump',
        CtaIcon: ChevronDownIcon,
        CtaText: 'Contact',
        CtaHref: `#${SectionId.About}`,
      },
    ],
  },
};
export default HeroSectionData;