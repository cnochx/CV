

import {BaseAlContentDef} from '../Utils/GeneralDef';

export const ContractorContentDataDifferent: BaseAlContentDef = {
  AlKey: 3,
  AlId: 'different',
  AlHeaderItem: {
    HdrId: 'title',
    HdrTitle: 'Why I’m different',
  },
  AlDescription1:{
    DnId: 'modernizing',
    DnHead: 'SAP Modernization Architect: Bridging Business, IT, and Custom Code',
    DnText: (
      <>
        <p>
          I think and work like an architect, not just a developer: clear target architecture, step‑by‑step roadmap,
          and honest trade‑offs instead of “just one more custom enhancement”. I speak the language of both business
          and IT, and I’m used to turning vague modernization goals into concrete, deliverable work packages.
        </p>

        <p>
          That means I do not just look at ABAP code in isolation, but at how
          custom code, extensions, interfaces and platform decisions fit together
          in a maintainable target architecture.
        </p>

        <p>Here are many strong ABAP developers. What I offer is a specific mix of roles:</p>
      </>
    ),
  },
  AlDateCustom: false,
  AlDivide: false,
  AlSkills: {
    SeiEnableSkills: true,
    SeiId: 'details',
    SeiSkillsItems: [
      {
        AlsId: 'architect',
        AlsKey: 1,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Architect',
          DnId: 'title',
          DnText: (
            <>
              <p>I create a clear blueprint: where you are, where you want to go, and which steps get you there with
                acceptable risk and budget. No “magic big bang”, but realistic, incremental modernization.</p>
            </>
          )
        }
      },
      {
        AlsId: 'modernization_expert',
        AlsKey: 2,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Modernization expert',
          DnId: 'title',
          DnText: (
            <>
              <p>I enjoy working in brownfield landscapes with technical debt. I can read old code, talk to the people
                who built it, and translate that into cleaner, testable, extensible solutions that respect your existing
                investments.</p>
            </>
          )
        }
      },
      {
        AlsId: 'consultant',
        AlsKey: 3,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Consultant',
          DnId: 'title',
          DnText: (
            <>
              <p>I don’t just deliver code, I explain trade‑offs and options in a way decision‑makers understand: what
                must stay in the core, what should move to BTP, and what should be retired.</p>
            </>
          )
        }
      },
    ]
  }
}
export default ContractorContentDataDifferent