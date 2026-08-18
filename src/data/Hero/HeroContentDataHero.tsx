
import {ArrowDownTrayIcon, ChatBubbleLeftRightIcon, RectangleStackIcon} from '@heroicons/react/24/outline';

import {SectionId} from '../SectionIdData';
import {BaseAlContentDef} from '../utilComp/GeneralDef';

export const HeroContentDataHero: BaseAlContentDef = {
  AlKey: 1,
  AlId: 'hero',
  AlSkills: {
    SeiEnableSkills: true,
    SeiId: 'highlights',
    SeiDisplaySkills: 'list',
    SeiSkillsItems: [
      {
        AlsId: 'architect',
        AlsKey: 1,
        AlsOpen: false,
        AlsName: 'Architect of SAP and web landscapes'
      },
      {
        AlsId: 'senior_full_stack_developer',
        AlsKey: 2,
        AlsOpen: false,
        AlsName: 'Senior Full-Stack Developer — SAP and web',
      },
      {
        AlsId: 'problem_solver',
        AlsKey: 3,
        AlsOpen: false,
        AlsName: 'ABAP, CDS, OData and BTP — React, TypeScript, Node.js and PHP',
      },
      {
        AlsId: 'modernization_specialist',
        AlsKey: 4,
        AlsOpen: false,
        AlsName: 'Modernization, refactoring and AI-assisted legacy analysis'
      },
      {
        AlsId: 'balanced_decisions',
        AlsKey: 5,
        AlsOpen: false,
        AlsName: 'Clean design, solid implementation, written handover'
      }
    ]
  },
  AlCallToAction: {
      AeiEnableCallToAction: true,
      AeiCallToActionItems: [
        {
          CtaKey: 1,
          CtaType: 'linkPill',
          CtaHref: '/assets/cv_martin_grellmann-employee.pdf',
          CtaIcon: ArrowDownTrayIcon,
          CtaText: 'CV (employee)',
          CtaPrimary: true
        },
        {
          CtaKey: 2,
          CtaType: 'linkPill',
          CtaHref: '/assets/cv_martin_grellmann-contractor.pdf',
          CtaIcon: ArrowDownTrayIcon,
          CtaText: 'CV (contractor)',
          CtaPrimary: true
        },
        {
          CtaKey: 3,
          CtaType: 'linkPill',
          CtaHref: `#${SectionId.Contractor}`,
          CtaIcon: RectangleStackIcon,
          CtaText: 'CV by focus area',
          CtaPrimary: false
        },
        {
          CtaKey: 4,
          CtaType: 'linkPill',
          CtaHref: `#${SectionId.Contact}`,
          CtaIcon: ChatBubbleLeftRightIcon,
          CtaText: 'Contact',
          CtaPrimary: false
        },
      ]
    },
}
export default HeroContentDataHero