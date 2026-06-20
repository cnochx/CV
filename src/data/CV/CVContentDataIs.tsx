// data/cv/items/Senior SAP Developer, Intecsoft GmbH & Co

import {BaseAlContentDef} from '../utilComp/GeneralDef';

export const CVContentDataIs: BaseAlContentDef = {
  AlCompany: 'Intecsoft GmbH & Co',
  AlCountry: 'Germany',
  AlDateEnd: 'Present',
  AlDateStrt: '01/2025',
  AlDateCustom: true,
  AlDescription1: {
    DnHead: 'Modernization and integration in S/4HANA-related projects.',
    DnId: 'general_description',
    DnText: (
      <>
        <p>SAP development role focused on modernization and integration in S/4HANA-related projects.
          Improved backend API interfaces in an S/4HANA project to increase integration readiness and maintainability,
          supported productive web services during hypercare in the FI environment and refactored a SAP Business Suite
          Dynpro application into object-oriented ABAP for better maintainability and future S/4HANA compatibility in an
          IS-U context.
        </p>
        <p>
          Worked closely with business stakeholders, solution managers and developers to align implementation with
          functional requirements.
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
            <li>Designed and implemented technical concepts for API interfaces in an
              S/4HANA project, improving integration readiness and long-term maintainability.</li>
            <li>Refactored an existing SAP Business Suite application with the goal of future-proofing
              it for S/4HANA and cloud-readiness in an IS-U context.</li>
            <li>Developed and enhanced solutions based on ABAP Objects, CDS Views, and OData services, aligned with
          clean-core principles.</li>
            <li>Contributed to hypercare activities for productive web service and API interfaces in
          the FI environment, ensuring stability and issue resolution in production.</li>
            <li>Collaborated closely with business stakeholders, solution managers, and development teams to align
              technical implementation with functional and architectural requirements.</li>
            <li>Performed code reviews and contributed to maintaining high software quality
              standards, including clean code and refactoring.</li>
            </ul>
      </>
    )
  },
  AlDescription3: {
    DnHead: 'Modernization and hypercare work,  Development',
    DnId: 'operation',
    DnText: (
      <>
        <ul className="list-disc space-y-4 pl-6">
        <li>Participated in the modernization of a classic R/3 application from the IS-U domain towards S/4HANA and
          cloud-readiness, including object-oriented redesign. </li>
          <li>Stabilized and supported productive API interfaces as
          part of hypercare, with a focus on reliability and maintainability in real-world usage.</li>
        </ul>

        <p><span className="mt-4 text-lg font-bold">Professional development</span><br />
          <ul className="list-disc space-y-4 pl-6">
            <li>Successfully completed the iSAQB CPSA‑F Foundation Level training in 2025; certification exam planned for
          Q3 2026.</li>
          </ul>
        </p>
      </>
    )
  },
  AlHeaderItem: {
    HdrId: 'title',
    HdrTitle: 'Senior SAP Developer'
  },
  AlId: 'senior_sap_developer_is',
  AlKey: 2,
  AlLocation: 'Dresden',
  AlRole: 'Contract-based',
  AlDivide: true,
  AlSkills: {
    SeiEnableSkills: true,
    SeiId: 'skills',
    SeiSkillsHead: 'Technical',
    SeiSkillsItems: [
      {
        AlsKey: 1,
        AlsId: 'abap_objects',
        AlsName: 'ABAP Objects',
        AlsOpen: false,
      },
      {
        AlsKey: 2,
        AlsId: 'abap_sql',
        AlsOpen: false,
        AlsName: 'ABAP SQL',
      },
      {
        AlsKey: 3,
        AlsId: 'cds_views',
        AlsOpen: false,
        AlsName: 'CDS Views',
      },
      {
        AlsKey: 4,
        AlsId: 'sap_btp',
        AlsOpen: false,
        AlsName: 'SAP BTP',
      },
      {
        AlsKey: 5,
        AlsId: 'rest',
        AlsOpen: false,
        AlsName: 'REST',
      },
      {
        AlsKey: 6,
        AlsId: 'fiori_ui5',
        AlsOpen: false,
        AlsName: 'Fiori/UI5',
      },
      {
        AlsKey: 7,
        AlsId: 's4hana',
        AlsOpen: false,
        AlsName: 'S/4HANA',
      },
      {
        AlsKey: 8,
        AlsId: 'clean_core',
        AlsOpen: false,
        AlsName: 'Clean Core',
      }
    ]
  }
}




