import {
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';

import heroImage from '../images/hero_background.webp';
import {SectionId} from './data';
import {
  Hero,
} from './HeroDataDef';

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  title: `Call Rudra - `,
  subTitle: `Martin Grellmann.`,
  name: 'call_rudra',
  descrList: [
    {
      hdlKey: 1,
      listElement: (
        <>
          <span>Innovative, certified Full-stack web developer and Full-stack software engineer.</span>
        </>
      ),
    },
    {
      hdlKey: 2,
      listElement: (
        <>
          <span>Over 20 years in full-stack web development.</span>
        </>
      ),
    },
    {
      hdlKey: 3,
      listElement: (
        <>
          <span>HTML, CSS, JS, PHP, MySQL and Drupal.</span>
        </>
      ),
    },
    {
      hdlKey: 4,
      listElement: (
        <>
         <span> 3.5 years in business software development.</span>
        </>
      ),
    },
    {
      hdlKey: 5,
      listElement: (
        <>
          <span>PHP, Node.js, Javascript, React, Samba.</span>
        </>
      ),
    },
    {
      hdlKey: 6,
      listElement: (
        <>
          <span>2.5 years of experience in SAP technology.</span>
        </>
      ),
    },
    {
      hdlKey: 7,
      listElement: (
        <>
          <span>ABAP, Fiori / UI5, Side-by-Side and Developer Extension.</span>
        </>
      ),
    },
  ],
  actions: [
    {
      href: '/assets/cv_martin_grellmann.pdf',
      text: 'CV as PDF',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: '/assets/cv_martin_grellmann-ext.pdf',
      text: 'CV in detail as PDF',
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
