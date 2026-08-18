

import {FC, memo, ReactNode} from 'react';

import {BaseAlContentDef} from '../utilComp/GeneralDef';

const linkClass =
  'font-semibold underline decoration-2 underline-offset-4 transition-colors hover:text-fuchsia-600 ' +
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:ring-offset-2';

/**
 * Renders the employee and contractor download pair for one focus area.
 */
const CvPair: FC<{Slug: string; Note: ReactNode}> = memo(({Slug, Note}) => (
  <>
    <p>{Note}</p>
    <p className="mt-1">
      <a className={linkClass} download href={`/assets/cv_martin_grellmann-${Slug}-employee.pdf`}>
        CV employee
      </a>
      <span aria-hidden="true"> · </span>
      <a className={linkClass} download href={`/assets/cv_martin_grellmann-${Slug}-contractor.pdf`}>
        CV contractor
      </a>
    </p>
  </>
));
CvPair.displayName = 'CvPair';

export const ContractorContentDataCvs: BaseAlContentDef = {
  AlKey: 4,
  AlId: 'cvs',
  AlHeaderItem: {
    HdrId: 'title',
    HdrTitle: 'CV by focus area',
  },
  AlDescription1: {
    DnId: 'downloads',
    DnHead: 'Pick the Version That Matches Your Role',
    DnText: (
      <>
        <p>
          One CV that covers all five areas would be a CV that says nothing. So there is a separate version
          per focus area, each with the same facts but a different emphasis, and each in an employee and a
          contractor variant.
        </p>
        <p>
          All of them are three to four pages, in English, and include the reference letters and
          certificates. If you need a German version or a specific format, just ask.
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
        AlsId: 'cv_sap_s4hana_btp',
        AlsKey: 1,
        AlsOpen: false,
        AlsDescription: {
          DnId: 'title',
          DnHead: 'SAP development on S/4HANA and BTP',
          DnText: (
            <CvPair
              Note="ABAP Objects, CDS, OData, RAP, CAP, Fiori and UI5, with the SAP project list included."
              Slug="sap-s4hana-btp"
            />
          ),
        },
      },
      {
        AlsId: 'cv_abap_refactoring',
        AlsKey: 2,
        AlsOpen: false,
        AlsDescription: {
          DnId: 'title',
          DnHead: 'ABAP custom code refactoring',
          DnText: (
            <CvPair
              Note="Grown Z code and Dynpro applications rebuilt in ABAP Objects, R/3 to S/4HANA, Clean Core."
              Slug="abap-refactoring"
            />
          ),
        },
      },
      {
        AlsId: 'cv_legacy_modernization',
        AlsKey: 3,
        AlsOpen: false,
        AlsDescription: {
          DnId: 'title',
          DnHead: 'AI-assisted legacy modernization',
          DnText: (
            <CvPair
              Note="Undocumented systems in ABAP and PHP, including how the analysis method actually works."
              Slug="legacy-modernization"
            />
          ),
        },
      },
      {
        AlsId: 'cv_travel_tech',
        AlsKey: 4,
        AlsOpen: false,
        AlsDescription: {
          DnId: 'title',
          DnHead: 'Travel and booking platforms',
          DnText: (
            <CvPair
              Note="Availability and inventory logic, booking workflows, travel APIs, twenty years in the domain."
              Slug="travel-tech"
            />
          ),
        },
      },
      {
        AlsId: 'cv_full_stack_web',
        AlsKey: 5,
        AlsOpen: false,
        AlsDescription: {
          DnId: 'title',
          DnHead: 'Full-stack web development',
          DnText: (
            <CvPair
              Note="React, TypeScript, Node.js, PHP and REST APIs, with enterprise integration from the SAP years."
              Slug="full-stack-web"
            />
          ),
        },
      },
    ],
  },
};
export default ContractorContentDataCvs;
