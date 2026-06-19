import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';

import heroImage from '../images/hero_background.webp';
import {Hero} from './HeroDataDef';
import {SectionId} from './SectionIdData';

/**
 * HeroPre section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  title: `Senior Full-Stack Engineer - `,
  subTitle: `Martin Grellmann.`,
  name: 'martin_grellmann',
  descrList: [
    {
      hdlKey: 1,
      listElement: (
        <>
          <span>S/4HANA Development, SAP BTP, enterprise APIs and clean-core aligned full-stack engineering.</span>
        </>
      ),
    },
    {
      hdlKey: 2,
      listElement: (
        <>
          <span>
            20+ years in software engineering with recent specialization in modern SAP full-stack development.
          </span>
        </>
      ),
    },
    {
      hdlKey: 3,
      listElement: (
        <>
          <span className="block pl-8 sm:pl-12">
            ABAP, CDS, OData, RAP, CAP, Fiori / UI5, SAP BTP and S/4HANA modernization.
          </span>
        </>
      ),
    },
    {
      hdlKey: 4,
      listElement: (
        <>
          <span>
            Strong additional background in JavaScript, TypeScript, React, Node.js, PHP, Drupal and REST integration.
          </span>
        </>
      ),
    },
    {
      hdlKey: 5,
      listElement: (
        <>
          <span className="block pl-8 sm:pl-12">
            Focused on scalable business applications, maintainability, clean code and sustainable architecture.
          </span>
        </>
      ),
    },
  ],
  actions: [
    {
      href: '/assets/cv_martin_grellmann.pdf',
      text: 'CV (employee)',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: '/assets/cv_martin_grellmann-ext.pdf',
      text: 'CV (contractor)',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};
