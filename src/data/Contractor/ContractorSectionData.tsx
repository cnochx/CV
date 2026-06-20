import {HiOutlineEnvelope} from 'react-icons/hi2';

import WoodImage from '../../images/wood.webp';
import {BaseIndexContentDef} from '../utilComp/GeneralDef';
import ContractorContentDataDifferent from './ContractorContentDataDifferent';
import ContractorContentDataFocus from './ContractorContentDataFocus';
import ContractorContentDataSolve from './ContractorContentDataSolve';



export const ContractorSectionData:BaseIndexContentDef = {
  IxHeader : {
    HdrId: 'title',
    HdrSubId: 'sub_title',
    HdrTitle: 'Independent SAP Engineer & Architect',
    HdrSubTitle: 'Martin Grellmann',
    HdrTitleSuffix: {
      SxId: 'title_suffix',
      SxTitle: 'S/4HANA Development | Enterprise APIs | Clean Core | Drupal',
      SxSuffix: (
      <>
        <p className="mt-4">I’m an SAP engineer and architect who enjoys untangling heavily customized landscapes and turning them into
          clean‑core, upgradeable systems.</p>
        <p className="mt-4">I work where ABAP, architecture and integration meet: clarifying the real problems, designing a realistic
          target picture, and then modernizing code, interfaces and UIs step by step so S/4HANA becomes something your
          teams can actually live with, not just survive.</p>
      </>)
  }},
  IxMainImg: {
    ImgKey: 1,
    ImgId: '',
    ImgSrc: WoodImage,
    ImgAlt: ''
  },
  IxImages: [
    {
      ImgKey: 1,
      ImgId: 'top',
      ImgSrc: WoodImage,
    },
    {
      ImgKey: 1,
      ImgId: 'bottom',
      ImgSrc: WoodImage,
    }
  ],
  IxContent: [
    ContractorContentDataSolve,
    ContractorContentDataFocus,
    ContractorContentDataDifferent
  ],
  IxBottomSuffix: {
    SxId: 'content-suffix',
    SxTitle: 'Senior Full-Stack Developer - Martin Grellmann',
    SxSuffix: (
    <>
      <p className="mt-4">I’m direct, transparent, and used to speaking with both C‑level and developers. My goal is not
        to sell the biggest project, but helping to make your SAP landscape simpler, safer and easier to evolve.</p>
      <p className="mt-4">In my experience, a quick-and-dirty implementation may resolve the issue quickly, but it
        ultimately requires more effort overall. Therefore, I generally recommend a high-quality implementation — it may
        require more effort initially, but it ensures that the technical details are implemented properly.</p>
    </>
    )},
  IxCallToAction: {
    AeiCallToActionItems: [
      {
        CtaKey: 1,
        CtaType: 'contact',
        CtaHref: 'mailto:martin@grellmann.eu?subject=Send from grellmann.app CV',
        CtaIcon: HiOutlineEnvelope,
        CtaText: "Let's talk ... send me an email"
      }
    ],
    AeiEnableCallToAction: true,
  }
}
export default ContractorSectionData;