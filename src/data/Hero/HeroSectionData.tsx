

import ChevronDownIcon from '@heroicons/react/24/solid/ChevronDownIcon';

import home from '../../images/home.webp';
import homeMobile from '../../images/home_mobile.webp';
import {SectionId} from '../SectionIdData';
import {BaseIndexContentDef} from '../utilComp/GeneralDef';
import HeroContentDataHero from './HeroContentDataHero';


export const HeroSectionData:BaseIndexContentDef = {
  IxHeader : {
    HdrId: 'professional_work',
    HdrTitle: 'Senior Full-Stack Engineer',
    HdrSubTitle: 'Martin Grellmann',
  },
  IxImages: [
    {
      ImgKey: 1,
      ImgSrc: home,
      ImgId: 'screen',
      ImgType: 'screen'
    },
    {
      ImgKey: 2,
      ImgSrc: homeMobile,
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
        CtaHref: `#${SectionId.About}`
      }
    ]
  }
}
export default HeroSectionData;