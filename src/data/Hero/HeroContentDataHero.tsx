
import {ArrowDownTrayIcon, ChatBubbleLeftRightIcon} from '@heroicons/react/24/outline';

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
        AlsName: 'Architect of Drupal and modern SAP landscapes'
      },
      {
        AlsId: 'senior_full_stack_developer',
        AlsKey: 2,
        AlsOpen: false,
        AlsName: 'Senior Full-Stack Developer',
      },
      {
        AlsId: 'problem_solver',
        AlsKey: 3,
        AlsOpen: false,
        AlsName: 'Current Drupal, Webapp and SAP full-stack expertise',
      },
      {
        AlsId: 'modernization_specialist',
        AlsKey: 4,
        AlsOpen: false,
        AlsName: 'Modernization and refactoring specialist'
      },
      {
        AlsId: 'balanced_decisions',
        AlsKey: 5,
        AlsOpen: false,
        AlsName: 'Clean design, solid implementation'
      }
    ]
  },
  AlCallToAction: {
      AeiEnableCallToAction: true,
      AeiCallToActionItems: [
        {
          CtaKey: 1,
          CtaType: 'linkPill',
          CtaHref: '/assets/cv_martin_grellmann.pdf',
          CtaIcon: ArrowDownTrayIcon,
          CtaText: 'CV (employee)',
          CtaPrimary: true
        },
        {
          CtaKey: 2,
          CtaType: 'linkPill',
          CtaHref: '/assets/cv_martin_grellmann-ext.pdf',
          CtaIcon: ArrowDownTrayIcon,
          CtaText: 'CV (contractor)',
          CtaPrimary: true
        },
        {
          CtaKey: 2,
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