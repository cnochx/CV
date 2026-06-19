// data/cv/items/SAP Technical Consultant | SAP Full-Stack Development, BA Business Advice GmbH

import {BaseAlContentDef} from '../Utils/GeneralDef';

export const CVContentDataBa: BaseAlContentDef = {
  AlCompany: 'BA Business Advice GmbH',
  AlCountry: 'Germany',
  AlDateEnd: '12/2024',
  AlDateStrt: '02/2022',
  AlDateCustom: true,
  AlDescription1: {
    DnHead: 'SAP consulting and development with focus on ABAP, UI5, Fiori, S/4HANA and SAP BTP',
    DnId: 'description1',
    DnText: (
      <>
        <p>
          SAP consulting and development with focus on ABAP, UI5, Fiori, S/4HANA, SAP BTP and modern extension models.
        </p>
        <p>
          Developed and enhanced SAP applications using ABAP, CDS, OData and UI5, contributed to ERP-to-S/4HANA
          migration projects, refactored existing applications and worked on side-by-side and developer extensibility
          scenarios in S/4HANA Public Cloud.
        </p>
      </>
    )
  },
  AlDescription2: {
    DnHead: 'Key responsibilities and focus areas',
    DnId: 'key_responsibilities_focus_areas',
    DnText: (
      <>
        <ul className="list-disc space-y-4 pl-6">
          <li>Developed and extended SAP applications using ABAP, ABAP CDS, OData services, and SAP UI5, including both
            freestyle and Fiori Elements applications.</li>
          <li>Contributed to ERP‑to‑S/4HANA migration and MII projects, supporting modernization of existing SAP
            landscapes.</li>
          <li>Refactored legacy applications to improve maintainability, future readiness, performance, and adherence
            to clean architecture principles.</li>
          <li>Worked on side‑by‑side and developer extensibility scenarios in S/4HANA Public Cloud, applying clean‑core
            aligned extension patterns.</li>
          <li>Used JavaScript, TypeScript, and Jest for SAP frontend development, testing, and UI logic validation.</li>
          <li>Contributed to SAP BTP, RAP, and CAP initiatives, including the design and implementation of cloud‑ready
            services and APIs.</li>
        </ul>
      </>
    )
  },
  AlDescription3: {
    DnId: 'achievements',
    DnHead: 'Achievements',
    DnText: (
      <>
        <ul className="list-disc space-y-4 pl-6">
          <li>Supported multiple ERP‑to‑S/4HANA migration initiatives, helping to transition custom developments to
            S/4HANA‑ready solutions.</li>
          <li>Refactored existing applications to significantly improve maintainability and performance in productive
            systems.</li>
          <li>Solved complex technical issues at the intersection of ABAP backend logic and UI5 frontends, ensuring
            robust, user‑friendly solutions</li>
        </ul>
      </>
    )
  },
  AlHeaderItem: {
    HdrId: 'header',
    HdrTitle: 'SAP Technical Consultant | SAP Full-Stack Development'
  },
  AlId: 'sap_technical_sonsultant_ba',
  AlKey: 3,
  AlLocation: 'Oldenburg',
  AlRole: 'Contract-based',
  AlDivide: true,
  AlSkills: {
    SeiSkillsHead: 'Technicals',
    SeiId: 'technicals',
    SeiEnableSkills: true,
    SeiSkillsItems: [
      {
        AlsKey: 1,
        AlsId: 'sap_abap',
        AlsOpen: false,
        AlsName: 'SAP ABAP'
      },
      {
        AlsKey: 2,
        AlsId: 'abap_cds',
        AlsOpen: false,
        AlsName: 'ABAP CDS'
      },
      {
        AlsKey: 3,
        AlsId: 'odata_v2_v4',
        AlsOpen: false,
        AlsName: 'OData v2/v4'
      },
      {
        AlsKey: 4,
        AlsId: 'sap_ui5',
        AlsOpen: false,
        AlsName: 'SAP UI5'
      },
      {
        AlsKey: 5,
        AlsId: 'fiori_elements',
        AlsOpen: false,
        AlsName: 'Fiori Elements'
      },
      {
        AlsKey: 6,
        AlsId: 'sap_rap',
        AlsOpen: false,
        AlsName: 'SAP CAP'
      },
      {
        AlsKey: 7,
        AlsId: 'sap_cap',
        AlsOpen: false,
        AlsName: 'SAP CAP'
      },
      {
        AlsKey: 8,
        AlsId: 'sap_btp',
        AlsOpen: false,
        AlsName: 'SAP BTP'
      },
      {
        AlsKey: 9,
        AlsId: 's4hana_public_cloud',
        AlsOpen: false,
        AlsName: 'S/4HANA Public Cloud'
      },
      {
        AlsKey: 10,
        AlsId: 'javaScript',
        AlsOpen: false,
        AlsName: 'JavaScript'
      },
      {
        AlsKey: 11,
        AlsId: 'typeScript',
        AlsOpen: false,
        AlsName: 'TypeScript'
      },
      {
        AlsKey: 12,
        AlsId: 'jest',
        AlsOpen: false,
        AlsName: 'Jest'
      }
    ],
  }
}