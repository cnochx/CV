

import {BaseAlContentDef} from '../utilComp/GeneralDef';

export const ContractorContentDataSolve: BaseAlContentDef = {
  AlKey: 2,
  AlId: 'solve',
  AlHeaderItem: {
    HdrId: 'title',
    HdrTitle: 'Problems I solve',
  },
  AlDescription1: {
    DnId: 'modernizing',
    DnHead: 'Systems That Have Grown for Years and Now Need to Change',
    DnText: (
      <>
        <p>
          I work with companies whose software still runs, but has become expensive to change. That happens
          in SAP landscapes with twenty years of custom code, and it happens just as much in a PHP platform
          that nobody has maintained for five years. The technology differs, the problem does not.
        </p>

        <p>
          My background: 20+ years in web and enterprise development, with the recent years split between
          ABAP Objects, CDS, OData, SAP BTP and Fiori on one side, and PHP, React, TypeScript, Node.js and
          REST APIs on the other.
        </p>

        <p>
          If any of the following sounds familiar, we probably have something to talk about:
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
        AlsId: 'legacy_code_debt',
        AlsKey: 1,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Legacy code debt',
          DnId: 'title',
          DnText: (
            <>
              <p>
                Too much grown custom code, poorly documented and hard to test. Every change takes longer
                than the estimate, and nobody can say for sure what a given report actually does.
              </p>
            </>
          ),
        },
      },
      {
        AlsId: 'nobody_knows_the_system',
        AlsKey: 2,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Nobody knows the system any more',
          DnId: 'title',
          DnText: (
            <>
              <p>
                The developers who built it have left, there is no documentation, and the business rules only
                exist inside the code. This is where AI-assisted analysis plus disciplined verification saves
                the most time.
              </p>
            </>
          ),
        },
      },
      {
        AlsId: 'upgrade_risk',
        AlsKey: 3,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Upgrade and migration risk',
          DnId: 'title',
          DnText: (
            <>
              <p>
                Business-critical custom code that makes every upgrade, support package or platform move a
                risk. Moving that code into clean, upgrade-safe structures takes the risk out of the calendar.
              </p>
            </>
          ),
        },
      },
      {
        AlsId: 'integration_spaghetti',
        AlsKey: 4,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Integration spaghetti',
          DnId: 'title',
          DnText: (
            <>
              <p>
                Point-to-point connections, old RFC and BAPI calls, undocumented interfaces between shops,
                partners and internal systems. I replace them with documented API-driven integration that
                works across on-premise and cloud.
              </p>
            </>
          ),
        },
      },
      {
        AlsId: 'broken_business_processes',
        AlsKey: 5,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Business processes that quietly broke',
          DnId: 'title',
          DnText: (
            <>
              <p>
                Availability that is wrong, bookings that do not arrive, orders that need a manual fix every
                day. Usually a symptom of the points above, and usually the reason someone finally calls.
              </p>
            </>
          ),
        },
      },
      {
        AlsId: 'delivery_pressure',
        AlsKey: 6,
        AlsOpen: false,
        AlsDescription: {
          DnHead: 'Delivery pressure',
          DnId: 'title',
          DnText: (
            <>
              <p>
                Pressure from the business to deliver new features faster, without breaking what already
                works. That is a sequencing problem, and it can be planned.
              </p>
            </>
          ),
        },
      },
    ],
  },
};
export default ContractorContentDataSolve;
