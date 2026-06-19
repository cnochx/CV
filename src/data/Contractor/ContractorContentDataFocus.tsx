

import {BaseAlContentDef} from '../Utils/GeneralDef';

export const ContractorContentDataFocus: BaseAlContentDef = {
  AlKey: 2,
  AlId: 'focus',
  AlHeaderItem: {
    HdrId: 'title',
    HdrTitle: 'My work focuses on',
  },
  AlDescription1:{
    DnId: 'modernizing',
    DnHead: 'Modernizing Complex SAP Landscapes Without Breaking the Core',
    DnText: (
      <>
        <p>
          I help organizations modernize heavily customized SAP landscapes by combining clean‑core architecture, code
          remediation, robust integration design, and modern user experiences. That means defining target architectures
          that keep your S/4HANA core close to standard, moving extensions into the right layers (in‑app, ABAP Cloud,
          and BTP side‑by‑side), and systematically transforming custom code so it becomes upgrade‑safe and maintainable
          again.</p>
        <p>Along the way, I replace fragile point‑to‑point interfaces with API‑driven OData/REST integrations that work
          across on‑prem and cloud, and build Fiori/UI5 and web frontends that match real business processes.</p>
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
        AlsId: 'architecture_clean_core_stategie',
        AlsKey: 1,
        AlsOpen: false,
        AlsDescription: {
          DnId: 'title',
          DnHead: 'Architecture & clean‑core strategy',
          DnText: (
            <>
              <p>Designing target architectures that keep the SAP core close to standard, move extensions into the
                right layers (in‑app, ABAP Cloud, BTP side‑by‑side) and reduce modification risk.</p>
            </>
          )
        }
      },
      {
        AlsId: 'code_modernization_s4hana_readiness',
        AlsKey: 2,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Code modernization & S/4HANA readiness',
          DnId: 'title',
          DnText: (
            <>
              <p>Assessing custom code, refactoring or retiring where needed, and aligning extensions with SAP’s
                extensibility and upgrade guidance so your landscape becomes maintainable again.</p>
            </>
          )
        }
      },
      {
        AlsId: 'api_driven_integration',
        AlsKey: 3,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'API‑driven integration',
          DnId: 'title',
          DnText: (
            <>
              <p>Assessing custom code, refactoring or retiring where needed, and aligning extensions with SAP’s
                extensibility and upgrade guidance so your landscape becomes maintainable again.</p>
            </>
          )
        }
      },
      {
        AlsId: 'usable_modern_uis',
        AlsKey: 4,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'PI‑driven integration',
          DnId: 'title',
          DnText: (
            <>
              <p>Building Fiori/UI5 and web frontends that reflect real‑world processes instead of technical tables,
                increasing adoption and reducing “Excel on the side”.</p>
            </>
          )
        }
      }
    ]
  }
}
export default ContractorContentDataFocus