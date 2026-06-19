// data/cv/items/jobSAP.ts


import {BaseAlContentDef} from '../Utils/GeneralDef';

export const ContractorContentDataSolve: BaseAlContentDef = {
  AlKey: 2,
  AlId: 'solve',
  AlHeaderItem: {
    HdrId: 'title',
    HdrTitle: 'Problems I solve',
  },
  AlDescription1:{
    DnId: 'modernizing',
    DnHead: 'SAP Clean Core Modernization for Heavily Customized Landscapes',
    DnText: (
      <>
        <p>
          I help companies with heavily customized SAP systems to reduce technical debt,
          get ready for S/4HANA and move towards a clean, upgrade-friendly core.
          That typically means refactoring legacy ABAP, stabilizing critical
          interfaces, and designing API-driven architectures that play nicely
          with cloud and non-SAP systems.
        </p>

        <p>
          My background: 20+ years in enterprise and web development, with recent
          years focused on ABAP Objects, CDS/OData, SAP BTP, UI5/Fiori and
          API-centric integration scenarios.
          <br />
          I help organizations that are stuck between a heavily customized ECC
          system and the pressure to move towards a lean, upgradeable S/4HANA
          and cloud landscape.
        </p>

        <p>
          If you’re looking at S/4HANA or already there, you probably see at least
          some of these challenges:
        </p>
      </>
    ),
  },
  AlDateCustom: false,
  AlDivide: true,
  AlSkills: {
    SeiEnableSkills: true,
    SeiId: 'details',
    SeiSkillsItems: [
      {
        AlsId: 'legacy_code_debt',
        AlsKey: 1,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Legacy Code Debt',
          DnId: 'title',
          DnText: (
            <>
              <p>Refactor too much legacy ABAP and Z-logic, poorly documented and hard to test in a modern approach.</p>
            </>
          )
        }
      },
      {
        AlsId: 'upgrade_risk',
        AlsKey: 2,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Upgrade Risk',
          DnId: 'title',
          DnText: (
            <>
              <p>Refactor Business-critical custom code that makes every upgrade or support package risky to
                clean core code</p>
            </>
          )
        }
      },
      {
        AlsId: 'integration_spaghetti',
        AlsKey: 3,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Integration Spaghetti',
          DnId: 'title',
          DnText: (
            <>
              <p>Refactor “Spaghetti” integrations using old RFC/BAPI calls and point-to-point connections,
                process-oriented into a object oriented SAP standard‑aligned architecture.</p>
            </>
          )
        }
      },
      {
        AlsId: 'missing_clean_core_strategy',
        AlsKey: 4,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Missing Clean-Core Strategy',
          DnId: 'title',
          DnText: (
            <>
              <p>Develop a "no clear" strategy for clean core, extensions and SAP BTP into an Technical‑debt‑reducing SAP
                core strategy.</p>
            </>
          )
        }
      },
      {
        AlsId: 'delivery_pressure',
        AlsKey: 5,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Delivery Pressure',
          DnId: 'title',
          DnText: (
            <>
              <p>Resolve the Pressure from the business to deliver new features faster – without breaking what works.</p>
            </>
          )
        }
      }
    ]
  }
}
export default ContractorContentDataSolve