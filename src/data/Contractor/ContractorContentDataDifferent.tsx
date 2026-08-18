

import {BaseAlContentDef} from '../utilComp/GeneralDef';

export const ContractorContentDataDifferent: BaseAlContentDef = {
  AlKey: 3,
  AlId: 'different',
  AlHeaderItem: {
    HdrId: 'title',
    HdrTitle: 'Why I’m different',
  },
  AlDescription1: {
    DnId: 'modernizing',
    DnHead: 'Between Business, Enterprise Software and the Open Web',
    DnText: (
      <>
        <p>
          I think and work like an architect, not only like a developer: a clear target picture, a
          step-by-step roadmap, and honest trade-offs instead of one more quick enhancement. I speak the
          language of business and of IT, and I am used to turning vague modernization goals into concrete
          work packages.
        </p>

        <p>
          What makes the profile unusual is the combination. There are many strong ABAP developers and many
          strong web engineers. Few people work in both worlds at the same time, and that is exactly where
          most modernization projects get stuck.
        </p>
      </>
    ),
  },
  AlDateCustom: false,
  AlDivide: false,
  AlSkills: {
    SeiEnableSkills: true,
    SeiId: 'details',
    SeiDisplaySkills: 'onlyDescription',
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
              <p>
                I create a clear blueprint: where you are, where you want to go, and which steps get you
                there with acceptable risk and budget. No big bang, but realistic, incremental modernization.
              </p>
            </>
          ),
        },
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
              <p>
                I enjoy brownfield landscapes with technical debt. I can read old code, talk to the people
                who built it, and turn that into cleaner, testable solutions that respect what you have
                already paid for.
              </p>
            </>
          ),
        },
      },
      {
        AlsId: 'ai_assisted_with_verification',
        AlsKey: 3,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'AI-assisted, but verified',
          DnId: 'title',
          DnText: (
            <>
              <p>
                I use AI to read and summarize unknown code, which shortens the analysis phase considerably.
                I do not use it as a source of truth. Every finding is checked against the running system
                before it goes into a decision, and I will tell you where the method has limits.
              </p>
            </>
          ),
        },
      },
      {
        AlsId: 'two_worlds',
        AlsKey: 4,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Two worlds, one method',
          DnId: 'title',
          DnText: (
            <>
              <p>
                SAP and the open web. ABAP Objects, CDS and BTP on one side, React, TypeScript, Node.js and
                PHP on the other. That means I can design an integration end to end instead of handing it
                over at the system boundary.
              </p>
            </>
          ),
        },
      },
      {
        AlsId: 'business_domain_knowledge',
        AlsKey: 5,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Domain knowledge, not only code',
          DnId: 'title',
          DnText: (
            <>
              <p>
                Fifteen years in a holiday-rental agency and four years in industrial SAP projects. I have
                sat on the business side of these processes, which shortens a lot of requirement discussions.
              </p>
            </>
          ),
        },
      },
      {
        AlsId: 'consultant',
        AlsKey: 6,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Consultant',
          DnId: 'title',
          DnText: (
            <>
              <p>
                I do not only deliver code. I explain options and trade-offs in a way decision-makers
                understand: what has to stay in the core, what should move out, and what should simply be
                retired.
              </p>
            </>
          ),
        },
      },
    ],
  },
};
export default ContractorContentDataDifferent;
