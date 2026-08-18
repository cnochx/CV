

import {BaseAlContentDef} from '../utilComp/GeneralDef';

export const ContractorContentDataFocus: BaseAlContentDef = {
  AlKey: 2,
  AlId: 'focus',
  AlHeaderItem: {
    HdrId: 'title',
    HdrTitle: 'Where I work',
  },
  AlDescription1: {
    DnId: 'modernizing',
    DnHead: 'Five Areas I Take On as a Contractor',
    DnText: (
      <>
        <p>
          My work has two roots. Twenty years of web engineering, fifteen of them inside a holiday-rental
          agency, and four years of SAP development in industrial projects. Both sides deal with the same
          thing: systems that have grown for a long time and now need to change without breaking.
        </p>
        <p>
          These are the five areas I take on. They overlap more than they look, because the method behind
          them is always the same: understand what is really there, write it down, then rebuild it in steps
          that can each go live.
        </p>
      </>
    ),
  },
  AlDateCustom: false,
  AlDivide: true,
  AlSkills: {
    SeiEnableSkills: true,
    SeiId: 'details',
    SeiDisplaySkills: 'onlyDescription',
    SeiSkillsItems: [
      {
        AlsId: 'sap_s4hana_btp_development',
        AlsKey: 1,
        AlsOpen: false,
        AlsDescription: {
          DnId: 'title',
          DnHead: 'SAP development on S/4HANA and BTP',
          DnText: (
            <>
              <p>
                Custom applications and extensions built the way SAP intends them today: business logic in
                object-oriented ABAP, data exposed through CDS and OData, RAP in the stack, CAP and Node.js
                side-by-side on BTP, and Fiori or UI5 on top. Extensions go into the layer they belong in, so
                the core stays close to standard and upgrades stay boring.
              </p>
            </>
          ),
        },
      },
      {
        AlsId: 'abap_custom_code_refactoring',
        AlsKey: 2,
        AlsOpen: false,
        AlsDescription: {
          DnId: 'title',
          DnHead: 'ABAP custom code refactoring',
          DnText: (
            <>
              <p>
                Reports, Dynpro applications and Z developments that have been extended for twenty years and
                are no longer safe to touch. I read the code, reconstruct the business rules, agree them with
                the people who use the application, and then rebuild it in ABAP Objects with separated layers
                and modern ABAP SQL. In slices, each one releasable on its own.
              </p>
            </>
          ),
        },
      },
      {
        AlsId: 'ai_assisted_legacy_modernization',
        AlsKey: 3,
        AlsOpen: false,
        AlsDescription: {
          DnId: 'title',
          DnHead: 'AI-assisted modernization of legacy applications',
          DnText: (
            <>
              <p>
                The analysis phase is what usually makes legacy projects unaffordable. AI-assisted code
                reading gives me a first map of an unknown system in days instead of months, and every
                finding is then verified against the running system before anyone acts on it. I use this
                daily in two productive environments right now, one SAP and one PHP.
              </p>
            </>
          ),
        },
      },
      {
        AlsId: 'travel_booking_platforms',
        AlsKey: 4,
        AlsOpen: false,
        AlsDescription: {
          DnId: 'title',
          DnHead: 'Travel and booking platforms',
          DnText: (
            <>
              <p>
                Availability and inventory logic, enquiry and booking workflows, property and partner data,
                seasonal pricing, and the interfaces between all of them. I spent fifteen years inside a
                holiday-rental agency and I am back in that platform today, so I know the domain from the
                business side, not only from the code.
              </p>
            </>
          ),
        },
      },
      {
        AlsId: 'full_stack_web_development',
        AlsKey: 5,
        AlsOpen: false,
        AlsDescription: {
          DnId: 'title',
          DnHead: 'Full-stack web development',
          DnText: (
            <>
              <p>
                React and TypeScript on the frontend, PHP or Node.js and REST APIs behind it, relational data
                models underneath, and the Linux or cloud infrastructure it all runs on. Most of this work is
                modernization: taking over an existing codebase, making it maintainable, and writing the
                documentation that was never there.
              </p>
            </>
          ),
        },
      },
    ],
  },
};
export default ContractorContentDataFocus;
