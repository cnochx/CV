
import {HiOutlineEnvelope} from 'react-icons/hi2';

import WoodImage from '../../images/wood.webp';
import {BaseIndexContentDef} from '../utilComp/GeneralDef';
import {CVContentDataBa} from './CVContentDataBa';
import {CVContentDataFf} from './CVContentDataFf';
import {CVContentDataFfx} from './CVContentDataFfx';
import {CVContentDataIds} from './CVContentDataIds';
import {CVContentDataIs} from './CVContentDataIs';
import {CVContentDataSc} from './CVContentDataSc';


export const CVSectionData:BaseIndexContentDef = {
  IxHeader : {
    HdrId: 'professional_work',
    HdrTitle: 'Professional Work',
    HdrSubTitle: 'Martin Grellmann - Senior Full-Stack Engineer',
    HdrTitleSuffix: {
      SxKey: 1,
      SxId: 'header-suffix',
      SxTitle: 'S/4HANA Development | Enterprise APIs | Clean Core | Drupal',
      SxSuffix: (
      <>
        <p className="mt-4">German citizen with unrestricted work and residence permit in Brazil. Senior software engineer with 20+ years of experience in
          full-stack web development and recent specialization in modern SAP full-stack development, including SAP BTP, S/4HANA
          modernization, ABAP, CDS, OData, Fiori/UI5, and API integration.</p>
        <p className="mt-4">Focused on scalable business applications, Knowledge of clean architecture and SOLID principles.</p>
        <ul className="mt-4">
          <li>Goiás, Brazil | Timezone: America/Sao_Paulo, BRT, UTC−03:00, no DST)</li>
          <li>Leipzig, Germany | Timezone: Europe/Berlin, CET/CEST, UTC+01:00 / UTC+02:00)</li>
        </ul>
      </>)
  }},
  IxMainImg: {
    ImgKey: 1,
    ImgSrc: WoodImage,
    ImgType: 'main'
  },
  IxContent: [
    CVContentDataFfx,
    CVContentDataIs,
    CVContentDataBa,
    CVContentDataSc,
    CVContentDataIds,
    CVContentDataFf,
  ],
  IxBottomSuffix: {
    SxKey: 1,
    SxId: 'content-suffix',
    SxTitle: 'Senior Full-Stack Developer - Martin Grellmann',
    SxSuffix: (
    <>
      <p className="mt-4">Senior Full-Stack Developer is with strong and current SAP full-stack expertise across ABAP, SAP BTP, S/4HANA, CDS,
        OData, Fiori/UI5, and enterprise API integration. Early adopter of modern SAP technologies including RAP, CAP,
        ABAP Cloud and SAP BTP. Strong conceptual understanding and hands-on experimentation combined with extensive
        experience in enterprise software architecture, API integration and full-stack development.</p>
      <p className="mt-4">Combines long-standing web engineering experience with modern SAP extension and migration work, especially in
        S/4HANA readiness, clean-core aligned development, and integration between SAP and external platforms.</p>
      <p className="mt-4">Martin Grellmann brings a quality-first mindset with emphasis on maintainability, clean code, architecture,
        refactoring, and production-ready solutions and durable engineering quality rather than quick fixes.</p>
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
    AeiEnableCallToAction: true
  }
}
export default CVSectionData;