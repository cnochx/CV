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
          <span>ABAP, Fiori / UI5, Side-by-Side Extension, Developer Extension.</span>
        </>
      ),
    },
  ],
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am an <strong className="text-stone-100">innovative</strong> and a certified <strong className="text-stone-100">Full-stack web developer</strong> and <strong className="text-stone-100">Full-stack software engineer</strong>, with the Knowledge as <strong className="text-stone-100">SAP Technical Consultant</strong>.</p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Experienced in full-stack web development with <strong className="text-stone-100">over 20 years in the field</strong> Proficient in <strong className="text-stone-100">HTML</strong>, <strong className="text-stone-100">CSS</strong>, <strong className="text-stone-100">React</strong>, <strong className="text-stone-100">JavaScript</strong>, <strong className="text-stone-100">Node.js</strong>, <strong className="text-stone-100">PHP</strong>, and <strong className="text-stone-100">MySQL</strong>. Possess 7 years of experience in <strong className="text-stone-100">Linux administration</strong> and 3.5 years in <strong className="text-stone-100">business software development</strong>, including 2.5 years in <strong className="text-stone-100">SAP technology</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">I am committed to <strong className="text-stone-100">continuous learning</strong> and <strong className="text-stone-100">innovation</strong>,
        with a strong focus on <strong className="text-stone-100">clean code</strong> and <strong className="text-stone-100">S.O.L.I.D principles</strong>. Skilled in designing, testing, and maintaining web systems, with a proven track record in <strong className="text-stone-100">business consulting</strong> and <strong className="text-stone-100">Industry 4.0 applications</strong>.</p>
    </>
  ),
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
