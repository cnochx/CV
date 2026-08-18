import {HiOutlineEnvelope} from 'react-icons/hi2';

import WoodImage from '../../images/wood.webp';
import {BaseIndexContentDef} from '../utilComp/GeneralDef';
import ContractorContentDataCvs from './ContractorContentDataCvs';
import ContractorContentDataDifferent from './ContractorContentDataDifferent';
import ContractorContentDataFocus from './ContractorContentDataFocus';
import ContractorContentDataSolve from './ContractorContentDataSolve';



export const ContractorSectionData:BaseIndexContentDef = {
  IxHeader : {
    HdrId: 'title',
    HdrSubId: 'sub_title',
    HdrTitle: 'Independent Engineer & Architect',
    HdrSubTitle: 'Martin Grellmann',
    HdrTitleSuffix: {
      SxId: 'title_suffix',
      SxTitle: 'SAP S/4HANA & BTP | ABAP Refactoring | AI-Assisted Legacy Modernization | Travel Platforms | Full-Stack Web',
      SxSuffix: (
      <>
        <p className="mt-4">I’m an engineer and architect who enjoys untangling systems that have grown for years and turning
          them back into something a team can work with.</p>
        <p className="mt-4">That happens in two worlds. In SAP, where heavily customized landscapes need to become
          clean‑core and upgradeable. And on the web, where grown PHP and JavaScript platforms carry the same kind of
          debt. I clarify the real problem, design a realistic target picture, and modernize code, interfaces and UIs
          step by step — in slices that can each go live.</p>
      </>)
  }},
  IxMainImg: {
    ImgKey: 1,
    ImgId: 'img_main',
    ImgSrc: WoodImage,
    ImgType: 'main'
  },
  IxImages: [
    {
      ImgKey: 1,
      ImgId: 'img_top',
      ImgSrc: WoodImage,
      ImgType: 'top'
    },
    {
      ImgKey: 1,
      ImgId: 'img_bottom',
      ImgSrc: WoodImage,
      ImgType: 'bottom'
    }
  ],
  IxContent: [
    ContractorContentDataSolve,
    ContractorContentDataFocus,
    ContractorContentDataDifferent,
    ContractorContentDataCvs
  ],
  IxBottomSuffix: {
    SxId: 'content-suffix',
    SxTitle: 'How I work — Martin Grellmann',
    SxSuffix: (
    <>
      <p className="mt-4">I’m direct, transparent, and used to speaking with both C‑level and developers. My goal is not
        to sell the biggest project, but to make your system simpler, safer and easier to change.</p>
      <p className="mt-4">In my experience a quick-and-dirty fix solves the issue today and costs more over the year.
        So I usually recommend the proper implementation: a bit more effort at the start, and a system that still
        behaves predictably after the next three changes.</p>
      <p className="mt-4">I work remote, from Brazil and Germany, across time zones, in German and English. Written
        documentation and a clean handover are part of the delivery, not an extra.</p>
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