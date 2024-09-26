import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/hero_background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-01.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-02.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-03.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-04.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-05.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-06.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-07.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-08.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-09.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import porfolioImage13 from '../images/portfolio/portfolio-13.jpg';
import porfolioImage14 from '../images/portfolio/portfolio-14.jpg';
import porfolioImage15 from '../images/portfolio/portfolio-15.jpg';
import porfolioImage16 from '../images/portfolio/portfolio-16.jpg';
import porfolioImage17 from '../images/portfolio/portfolio-17.jpg';
import porfolioImage18 from '../images/portfolio/portfolio-18.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  CVSubHeader,
  Hero,
  HomepageMeta,
  LifeItem,
  PortfolioItem,
  ProjectItem,
  SkillGroup,
  Social,
  SubHeader,
  SummaryItem,
  TestimonialSection,
  TimelineItem,
} from './dataDef';



/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Martin (Rudra) Grellmann',
  description: 'Curriculum vitae of Martin (Rudra) Grellmann',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'stack',
  Resume: 'CV',
  Freelance: 'Freelance',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'foresight',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Martin (Rudra) Grellmann.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a <strong className="text-stone-100">Full-Stack software engineer</strong>, with the Knowledge as <strong
        className="text-stone-100">SAP Technical Consultant</strong>.
      </p>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">I am an innovative and down-to-earth team player
          continuously learning and able to develop <strong className="text-stone-100">reasonable solutions for
          complex problems</strong>.</p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">I work according to the principles of
        <strong className="text-stone-100">Clean Code and S.O.L.I.D.</strong> to guarantee
        <strong className="text-stone-100">high software quality</strong>.</p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">I have 20 years of
        <strong className="text-stone-100">experience in web development</strong>, seven years in
        <strong className="text-stone-100">Linux administration</strong>, three and half years
        <strong className="text-stone-100">experience in business software development</strong> (ERP)
        and have dabbled in <strong className="text-stone-100">various tech skills throughout my career</strong>.</p>
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
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  header: 'About me',
  profileImageSrc: profilepic,
  description: `With 20 years in web development, seven in Linux administration, and three and a half in ERP, I develop reasonable solutions for complex challenges, adhering to Clean Code and S.O.L.I.D. principles to ensure high software quality.`,
  aboutItems: [
    {label: 'Location', text: 'Leipzig, Germany and Povoado do Moinho, Alto Paraíso de Goiás, Brazil', Icon: MapIcon},
    {label: 'Study', text: 'Self-studied', Icon: AcademicCapIcon},
    {label: 'Nationality', text: 'German / Brazil Residence', Icon: FlagIcon},
    {label: 'Job Training', text: 'Full-Stack Web Developer (2021)', Icon: AcademicCapIcon},
    {label: 'Age', text: '49', Icon: CalendarIcon},
    {label: 'Job Training', text: 'Scrum Master PSMI (2020)', Icon: AcademicCapIcon},
    {label: 'Interests', text: 'Travel, Family, Music', Icon: SparklesIcon},
    {label: 'Job Education', text: 'Industrial clerk (2004)', Icon: BuildingOffice2Icon},
  ],
};

export const sumHeader: CVSubHeader = {
  title: 'Summary',
  content: (
    <>
        <p className="pb-8">My career is marked by a commitment to continuous learning. I deliver high-quality, reliable software solutions. I thrive in
          collaborative environments and am dedicated to developing innovative and efficient solutions.</p>
    </>
  ),
  showSpacer: false
}

export const summaryItems: SummaryItem[] = [
  {
    siKey: 1,
    date: 'April 2004 – December 2019',
    location: 'Ferienhaus-Vermittlung fincaferien.de GmbH, Germany',
    title: 'Webmaster (with development tasks)',
    experiences: [
      {
        eiKey: 1,
        text: 'HTML/HTML5, CSS/CSS3, Git and Jira, PHP, Drupal SEO, SEA and Linux administration.',
      },
    ],
  },
  {
    siKey: 2,
    date: 'February 2021 – January 2022',
    location: 'Sengicon GmbH, Germany',
    title: 'Software Developer and Linux Administrator',
    experiences: [
      {
        eiKey: 1,
        text: 'Full-stack software development and Industry 4.0 applications on LAMP Stack.',
      },
      {
        eiKey: 2,
        text: 'Refactoring PHP code to PHP 8 with PHP Unit',
      },
      {
        eiKey: 3,
        text: 'React web frontends with Material Design.',
      },
    ],
  },
  {
    siKey: 1,
    date: 'February 2022 - Present',
    location: 'BA Business Advice GmbH, Germany',
    title: 'SAP Technical Consultant, SAP Full-Stack Development',
    experiences: [
      {
        eiKey: 1,
        text: 'Business consulting and SAP solutions.',
      },
      {
        eiKey: 2,
        text: 'SAP ABAP, SAP MII, SAP UI5 Freestyle, SAP Fiori Elements.',
      },
      {
        eiKey: 3,
        text: 'SAP S4/Hana Public Cloud Side-By-Side Extension.',
      },
      {
        eiKey: 4,
        text: 'S4/Hana Public Cloud Side-By-Side Extension.',
      },
      {
        eiKey: 5,
        text: 'SAP RAP and SAP CAP.',
      },
      {
        eiKey: 6,
        text: 'Implemented migrations from ERP to S/4 HANA and refactored existing applications.',
      },
    ],
  },

];

/**
 * Skills section
 */

export const skillHeader: CVSubHeader = {
  title: 'Skills',
  content: (
   <>
      <p className="pb-8">Value based on years</p>
   </>
  ),
  showSpacer: false
};

export const skills: SkillGroup[] = [

  {
    name: 'Techniques / Administration',
    skills: [
      {
        name: 'Clean Core / S.O.L.I.D.',
        level: 8,
      },
      {
        name: 'Git / Gitflow',
        level: 9,
      },
      {
        name: 'Jira',
        level: 8,
      },
      {
        name: 'Linuxadministration',
        level: 8
      },
      {
        name: 'OOP (ABAP / JS / PHP)',
        level: 8,
      },
      {
        name: 'Scrum Master',
        level: 5,
      }
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'CSS / CSS 3',
        level: 10,
      },
      {
        name: 'Drupal 7',
        level: 8,
      },
      {
        name: 'HTML / HTML 5',
        level: 10,
      },
      {
        name: 'Javascript',
        level: 10,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'React Framework',
        level: 7,
      }
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js / NPM',
        level: 8,
      },
      {
        name: 'MySql',
        level: 8,
      },
      {
        name: 'PHP / Composer',
        level: 9,
      },
      {
        name: 'UnitPHP',
        level: 5,
      },
      {
        name: 'Python',
        level: 4,
      },
    ],
  },
  {
    name: 'SAP Full-Stack Development',
    skills: [
      {
        name: 'SAP ABAP (Modern, Clean Core)',
        level: 7,
      },
      {
        name: 'SAP MII',
        level: 7,
      },
      {
        name: 'SAP UI5 Freestyle',
        level: 8,
      },
      {
        name: 'SAP Fiori Elements',
        level: 7,
      },
      {
        name: 'SAP S/4Hana Cloud - Public Edition Extensions',
        level: 6,
      },
      {
        name: 'SAP BTP',
        level: 5,
      },
    ],
  },
];

export const expHeader: CVSubHeader = {
  title: 'Work',
  content: (
    <>
    </>
  ),
  showSpacer: false
};

export const experience: TimelineItem[] = [
  {
    tlKey: 1,
    date: 'February 2022 - Present',
    location: 'BA Business Advice GmbH, Germany',
    title: 'SAP Technical Consultant, SAP Full-Stack Development',
    about: 'Business consulting and SAP solutions.',
    content: (
      <>
      <p>Including SAP ABAP, SAP MII, SAP UI5 Freestyle, SAP Fiori Elements, SAP S4/Hana Public Cloud Side-By-Side
        Extension, S4/Hana Public Cloud Side-By-Side Extension, SAP RAP and SAP CAP. Implemented migrations from ERP to
        S/4 HANA and refactored existing applications.</p>
      </>
    ),
    experiences: [
      {
        eiKey: 1,
        text: 'SAP ABAP (Clean Core).',
      },
      {
        eiKey: 2,
        text: 'SAP MII, SAP UI5 Freestyle and SAP Fiori Elements.',
      },
      {
        eiKey: 3,
        text: 'SAP S4/Hana Public Cloud Side-By-Side Extension, S4/Hana Public Cloud Side-By-Side Extension, ',
      },
      {
        eiKey: 4,
        text: 'SAP BTP Side-By-Side Extension',
    },
      {
        eiKey: 5,
        text: 'SAP RAP and SAP CAP.',
      },
      {
        eiKey: 6,
        text: 'S/4HANA Cloud – Public Edition Extension (Key User / Developer / Side-by-Side).',
      },
      {
        eiKey: 7,
        text: 'Implemented migrations from ERP to S/4 HANA and refactored existing applications.',
      },
    ],
  },
  {
    tlKey: 2,
    date: 'February 2021 - January 2022',
    location: 'Sengicon GmbH, Germany',
    title: 'Software developer and Linux administrator',
    about: 'Full-stack software development and Industry 4.0 applications.',
    content: (
      <>
        <p>
          Refactoring PHP code and conducted application tests using PHPUnit. Developing React web frontends with
          Material Design. Also Installation, configuration of Linux and LAMP-stacks under Linux. Hardening and
          administration of CentOS. </p>
      </>
    ),
    experiences: [
      {
        eiKey: 1,
        text: 'PHP, Composer, PHPUnit',
      },
      {
        eiKey: 2,
        text: 'React web frontends with Material Design.',
      },
      {
        eiKey: 3,
        text: 'Installation, configuration of Linux and LAMP-stacks.',
      },
      {
        eiKey: 4,
        text: 'Hardening and administration of CentOS.',
      },
    ],
  },
  {
    tlKey: 3,
    date: 'April 2004 - December 2019',
    location: 'Ferienhaus-Vermittlung fincaferien.de GmbH, Germany',
    title: 'Webmaster (with development tasks)',
    about: 'Fincaferien was one of the first German agencies to successfully broker vacation homes online.',
    content: (
      <>
        <p>
          Active involvement in web and network enhancements. Experience with
          HTML/HTML5, CSS/CSS3, Git, Jira, PHP, Drupal, SEO, SEA and Linux administration.</p>
      </>
    ),
    experiences: [
      {
        eiKey: 1,
        text: 'HTML/HTML5, CSS/CSS3',
      },
      {
        eiKey: 2,
        text: 'PHP, Drupal',
      },
      {
        eiKey: 3,
        text: 'Git and Jira',
      },
      {
        eiKey: 4,
        text: 'SEO, SEA',
      },
      {
        eiKey: 5,
        text: 'Linux administration',
      }
    ],
  },
  {
    tlKey: 4,
    date: 'August 1998 - Juli 2002',
    location: 'As freelance work in Germany: Berlin, Hanover, Braunschweig, and Wolfsburg',
    title: 'Stagehand',
    about: 'At events, concerts, congresses, corporate events and trade fair appearances',
    content: (
      <p>
        In order to comply with the safety protocols, I had completed a
        safety training for rigging technology.
      </p>
    ),
    experiences: [],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */

export const eduHeader: CVSubHeader = {
  title: 'Education',
  content: (
    <>
    </>
  ),
  showSpacer: false
};

export const education: TimelineItem[] = [
  {
    tlKey: 1,
    date: '',
    location: 'DAA GmbH in Hildesheim, Germany',
    title: 'Industrial Clerk',
    about: '',
    content: (
      <p>Focused on business processes, commercial management and control,
        and economic and social studies.</p>
    ),
    experiences: [],
  },

  {
    tlKey: 2,
    date: '',
    location: 'Indisoft GmbH, Germany',
    title: 'Full-Stack Web Developer',
    about: '',
    content:(
      <p>Training covered best practices in responsive web design, Javascript and
        PHP, MySQL, content management, e-commerce, and online marketing,
        including SEO, SEA and Google Analytics.
        Included a Scrum Master (PSMI) certificate.</p>
    ),
    experiences: [],
  },
  {
    tlKey: 3,
    date: '',
    location: 'Full-Stack Web Developer, Practical Internship',
    title: 'Further training as a Full-Stack Web Developer',
    about: 'Practical Internship to get deep into best practises.',
    content: (
      <p>Practical training covered best practices in LAMP-Stack, Javascript, PHP,
        MySQL and Linux-Administration.</p>
    ),
    experiences: [],
  },
];

/**
 * Additional section
 */
export const addHeader: CVSubHeader = {
  title: 'Interests',
  content: (
    <>
    </>
  ),
  showSpacer: false
};

export const additionalInterests: LifeItem[] = [
  {
    liKey: 1,
    relationshipStatus: '',
    familyStatus: '',
    privateInterests: 'I am interested in electronic music and developing our property in Alto Paraíso de Goiás.',
    location: 'I live in Germany for a small part of the year, but I spend most of my time in Brazil.',
    legal: 'I have an official Brazilian National Migratory Registry Card (CRNM) with an unrestricted work and residence permit.',
  }
];

export const proHeader: SubHeader = {
  title: 'Projects',
  content: (
    <>
      <p>Outstanding projects that I have realized alone or together with others.</p>
    </>
  ),
  showSpacer: true
};

export const projectItem: ProjectItem[] = [
  {
    piKey: 1,
    title: 'Serverless React Website with Next.js on Vercel',
    stack: 'node.js, next.js, Typescript, react.js, Serverless, Vercel',
    role: 'Full-Stack Developer',
    content: (
      <>
        <p>I have developed a highly customized version of a this React resume website. This project is a robust fork
          of reactresume.com and is built using Next.js, TypeScript, React.js, and Webpack. The website is hosted on
          Vercel, leveraging serverless architecture for enhanced performance and scalability.
        </p>
      </>
    ),
  },
  {
    piKey: 2,
    title: 'Business Logic as Loading App API in ABAP for Logistics Execution Module',
    stack: 'ABAP Clean Core',
    role: 'SAP Developer, Technical Consultant',
    content: (
      <>
        <p>I developed a robust loading application API in OOP-ABAP, adhering to the Clean Core principles. The app
          based on the Logistics Execution (LE) module. This API efficiently collects the necessary data for a delivery
          number and utilizes a custom Z-table to ensure the delivery is blocked for other users, maintaining data
          integrity and preventing conflicts. Implanted for an Metal processing company.</p>
      </>
    ),
  },
  {
    piKey: 3,
    title: 'UI5 Customization for QM Feedbacks, Hosted on SAP MII',
    stack: 'UI5 Freestyle, SAP MII',
    role: 'Frontend-Developer, Technical Consultant',
    content: (
      <>
        <p>
          I developed a customized QM feedback mask with advanced input recognition logic using JavaScript. The system
          identifies specific patterns in user input, such as decimal numbers and number ranges before and after the
          decimal point, effectively serving as shortcuts where only the decimal points represent the exact value. This
          microservice, hosted on SAP MII, was implemented for a steelworks company in Austria and is based on the SAP
          QM-Module.
        </p>
        <p>Although the logic ideally belongs in the controller area (business logic) following the MVC principle, it was
          a requirement to implement it in the frontend.
        </p>
      </>
    ),
  },
  {
    piKey: 4,
    title: 'Z-Application in Classic ABAP with Multi-layered Dynpro\n',
    stack: 'Classical ABAP, OOP, Dynpro',
    role: 'SAP-Developer, Technical Consultant',
    content: (
      <>
        <p>
          I developed a custom Z application in classic ABAP that includes a multi-layered screen for output. The
          application contains sophisticated logic that compiles the appropriate items from all customer orders to be
          rolled based on optimal conditions such as length, weight, type and output. The backend was implemented using
          ABAP Object-Oriented Programming (ABAP-OOP) to ensure efficient and maintainable code. Implemented for a
          German steel mill.
        </p>
      </>
    ),
  },
  {
    piKey: 5,
    title: 'React Frontend for CNC Tool Maintenance',
    stack: 'react.js, Webpack, LAMP-Stack',
    role: 'Frontend-Devloper',
    content: (
      <>
        <p>I developed a React frontend for CNC tool maintenance, interfacing with a PHP RESTful API. To
          meet the requirement of reducing dependencies, I wrote a custom, simple router. The frontend is served by
          Apache on a CentOS virtual machine, ensuring a streamlined and efficient user experience.</p>
      </>
    ),
  },
  {
    piKey: 6,
    title: 'PHP RESTful API Backend Refactoring for CNC Tool Maintenance\n',
    stack: 'PHP, OOP, MariaDB, LAMP-Stack',
    role: 'Backend Developer',
    content: (
      <>
        <p>
          I led the refactoring of a process-oriented PHP 4.5 backend to an object-oriented PHP 8.0 backend and
          transformed it into a microservice for monitoring tool maintenance for CNC machines. The RESTful API I
          developed includes robust authorization mechanisms, comprehensive business logic and efficient database
          modeling in MariaDB. Additionally, I set up the Apache server on a virtual machine with Debian OS, creating
          a classic LAMP stack environment. Implemented for a German metal processing company.
        </p>
      </>
    ),
  },
  {
    piKey: 7,
    title: 'Setting Up CentOS / Rocky Linux',
    stack: 'CentOS',
    role: 'Linux-Administrator',
    content: (
      <>
        <p>I performed a full setup with sufficient security guidelines of a CentOS installation on a virtual machine.
          This included configuring the system to meet specific requirements and ensuring robust backup procedures were
          in place to ensure the integrity and reliability of the system.</p>
        <p>The Linux VM was used as a template for all subsequent projects.</p>
      </>
    ),
  },
  {
    piKey: 8,
    title: 'Complete Setup and Customization of Drupal 8 Installation',
    stack: 'Drupal 8, PHP',
    role: 'Full-stack Developer',
    content: (
      <>
        <p>I executed a complete setup and customization of a Drupal 8 installation, incorporating a purchased theme.
          This involved configuring the system, customizing the theme to meet specific requirements, and ensuring a
          seamless and visually appealing user experience.
        </p>
      </>
    ),
  },
  {
    piKey: 9,
    title: 'Maintenance and Optimization of Drupal 7 e-commerce Platform',
    stack: 'Drupal 7, PHP, Composer',
    role: 'Full-Stack Developer, SEO-Expert',
    content: (
      <>
        <p>I took care of the maintenance and technical debt reduction for a Drupal 7 installation that contained
          exclusively custom, purchased modules. Additionally, I integrated technical SEO elements to improve the
          visibility and performance of the platform as a webshop or e-commerce platform.</p>
        <p>
          The platform was spread across 3 domains that were separate from each other</p>
      </>
    ),
  },
  {
    piKey: 10,
    title: 'Setup, Protection, and Maintenance of Ubuntu Office Server\n',
    stack: 'Ubuntu Server',
    role: 'Linux-Administrator',
    content: (
      <>
        <p>
          I was responsible for the setup, protection, and maintenance of an Ubuntu server application used as an office
          server. This included configuring Samba for file sharing, Apache for web services, and integrating the server
          into the Windows network to ensure seamless connectivity and functionality.</p>
      </>
    ),
  },
  {
    piKey: 11,
    title: 'Setup, Protection, and Maintenance of a Windows Network',
    stack: 'Windows 98, Windows NT, Windows XP and Windows 7',
    role: '',
    content: (
      <>
        <p>I managed the setup, protection, and maintenance of a Windows network encompassing various systems. This
          involved ensuring network security, optimizing system performance, and maintaining seamless connectivity
          across all platforms.</p>
      </>
    ),
  },
];

/**
 * Portfolio section
 */
export const ptfHeader: SubHeader = {
  title: 'I am proficient with the technical stack',
  content: (
    <></>
  ),
  showSpacer: false
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'HTML5',
    description: 'HTML5',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    image: porfolioImage1,
  },
  {
    title: 'CSS3',
    description: 'CSS3',
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
    image: porfolioImage2,
  },
  {
    title: 'JavaScript',
    description: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    image: porfolioImage3,
  },
  {
    title: 'Ubuntu',
    description: 'Ubuntu',
    url: 'https://ubuntu.com/server',
    image: porfolioImage4,
  },
  {
    title: 'PHP 8',
    description: 'PHP 8',
    url: 'https://www.php.net',
    image: porfolioImage5,
  },
  {
    title: 'Drupal',
    description: 'Drupal',
    url: 'https://www.drupal.org',
    image: porfolioImage6,
  },
  {
    title: 'MySQL',
    description: 'MySQL',
    url: 'https://www.mysql.com',
    image: porfolioImage7,
  },
  {
    title: 'Scrum Master PSMI',
    description: 'Scrum Master PSMI',
    url: 'https://www.scrum.org/assessments/professional-scrum-master-i-certification',
    image: porfolioImage8,
  },
  {
    title: 'CentOS',
    description: 'CentOS',
    url: 'https://www.centos.org',
    image: porfolioImage9,
  },
  {
    title: 'Rocky Linux',
    description: 'Rocky Linux',
    url: 'https://rockylinux.org',
    image: porfolioImage10,
  },
  {
    title: 'Node.js',
    description: 'Node.js',
    url: 'https://nodejs.org/en',
    image: porfolioImage11,
  },
  {
    title: 'React',
    description: 'React',
    url: 'https://react.dev',
    image: porfolioImage12,
  },
  {
    title: 'Material UI',
    description: 'Material UI',
    url: 'https://mui.com/material-ui/',
    image: porfolioImage13,
  },
  {
    title: 'UI5',
    description: 'UI5',
    url: 'https://sapui5.hana.ondemand.com/sdk/#/',
    image: porfolioImage14,
  },
  {
    title: 'Fiori Elements',
    description: 'Fiori Elements',
    url: 'https://experience.sap.com/fiori-design-web/',
    image: porfolioImage15,
  },
  {
    title: 'ABAP',
    description: 'ABAP',
    url: 'https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm',
    image: porfolioImage16,
  },
  {
    title: 'SAP BTP',
    description: 'SAP BTP',
    url: 'https://www.sap.com/products/technology-platform.html',
    image: porfolioImage17,
  },
  {
    title: 'S/4Hana Cloud - Public Edition Extension',
    description: 'S/4Hana Cloud - Public Edition Extension',
    url: 'https://community.sap.com/t5/enterprise-resource-planning-blogs-by-sap/sap-s-4hana-extensibility-simplified-guide-for-beginners/ba-p/13548988',
    image: porfolioImage18,
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      label: 'Full-Stack Development',
      text: 'For me, full-stack development means that new technologies can be learned quickly based on existing knowledge.',
      image: '',
    },
    {
      label: 'Cloud Development',
      text: 'The future is now, and all previous technologies have led to the cloud. That\'s why there\'s no way around developments in the cloud.',
      image: '',
    },
    {
      label: 'Clean Code and Microservices',
      text: 'Embracing clean code, S.O.L.I.D principles, and microservices enhances software maintainability, scalability, and reliability, fostering an efficient development environment.',
      image: '',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Ways to contact me:',
  items: [
    {
      type: ContactType.Email,
      text: 'martin@grellmann.eu',
      href: 'mailto:martin@grellmann.eu',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Martin Grellmann',
      href: 'https://www.linkedin.com/in/martingrellmann/',
    },
    {
      type: ContactType.Github,
      text: 'Martin Grellmann (chnochx)',
      href: 'https://github.com/chnochx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/martingrellmann/'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/chnochx'},
];
