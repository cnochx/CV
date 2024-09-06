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
  ImprintSection,
  LifeItem,
  PortfolioItem,
  SkillGroup,
  Social,
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
        I am a <strong className="text-stone-100">Full-Stack software engineer</strong>, currently working as <strong
        className="text-stone-100">Technical Consultant</strong>. I am <strong className="text-stone-100">trained</strong>
        on the requirements of <strong className="text-stone-100">enterprise software</strong> development in an
        industrial context. I am a german with Brasilien residence, working as developer <strong
        className="text-stone-100">since 2002</strong>. I am an innovative and down-to-earth team player who <strong
        className="text-stone-100">learns continuously</strong> and <strong className="text-stone-100">analyses quickly
      </strong>.</p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg"><strong className="text-stone-100">Clean
        code</strong> and <strong className="text-stone-100">S.O.L.I.D.</strong> principles are important to me in
        order to guarantee <strong className="text-stone-100">high software quality</strong>. My work is characterized
        by a <strong className="text-stone-100">commitment to best practices</strong>, ensuring that <strong
          className="text-stone-100">what I develop works</strong>.
      </p>
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
  profileImageSrc: profilepic,
  description: `I am an innovative and down-to-earth team player who learns continuously and analyses quickly. I develop 
  creative solutions for complex problems. What I develop works reliably.`,
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
  title: 'Resume',
  content: (
    <>
        <p className="pb-8">My career is marked by a commitment to continuous learning. I deliver high-quality, reliable software solutions. I thrive in
          collaborative environments and am dedicated to developing innovative and efficient solutions for complex
          challenges.</p>x§
    </>
  ),
  showSpacer: true
}

export const summaryItems: SummaryItem[] = [
  {
    siKey: 1,
    date: 'February 2022 - Present',
    location: 'BA Business Advice GmbH, Germany',
    title: 'SAP Technical Consultant, SAP Full-Stack Development',
    experiences: [
      {
        eiKey: 1,
        text: 'Developed and refactored SAP applications, including migrations from ERP to S/4 HANA.',
      },
      {
        eiKey: 2,
        text: 'Worked on various SAP modules and cloud extensions.',
      },
      {
        eiKey: 3,
        text: 'Ensured high software quality through clean code practices.',
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
        text: 'Developed and refactored PHP backend for ERP subsystems.',
      },
      {
        eiKey: 2,
        text: 'Managed Linux VMs and LAMP stacks.',
      },
      {
        eiKey: 3,
        text: 'Developed React web frontends and conducted application tests using PHPUnit.',
      },
    ],
  },
  {
    siKey: 3,
    date: 'April 2004 – December 2001',
    location: 'Ferienhaus-Vermittlung fincaferien.de GmbH, Germany',
    title: 'Webmaster (with development tasks)',
    experiences: [
      {
        eiKey: 1,
        text: 'Led technical SEO implementations and web development.',
      },
      {
        eiKey: 2,
        text: 'Introduced and managed Git and Jira for version and project management.',
      },
      {
        eiKey: 3,
        text: 'Developed and maintained Drupal 7 modules and administered Windows networks.',
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
        level: 5,
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
    about: 'BA Business Advice offers business consulting and SAP solutions.',
    content: (
      <>
      <p>
        Various projects are undertaken in the areas of SAP ABAP, SAP MII, SAP UI5 Freestyle, and SAP Fiori Elements.
        These projects include collaboration and cooperation in development, object-oriented development of individual
        Z-applications in S/4 HANA, as well as collaboration in expert teams and application services. Additionally,
        migrations from ERP to S/4 HANA are implemented, and existing applications are refactored. The projects encompass
        areas such as PPDS, QM, cloud extension (key user, developer, side-by-side), LE, and PM. These have so far been
        carried out in the metal industry, steel industry, manufacturing industry, and public transport.
      </p>
      </>
    ),
    experiences: [
      {
        eiKey: 1,
        text: 'SAP S/4HANA.',
      },
      {
        eiKey: 2,
        text: 'Migration from ERP to S/4HANA.',
      },
      {
        eiKey: 3,
        text: 'Basic topics BTP / S4 Hana Cloud – Public Edition.',
      },
      {
        eiKey: 4,
        text: 'S/4HANA Cloud – Public Edition Extension (Key User / Developer / Side-by-Side).',
      },
      {
        eiKey: 5,
        text: 'ABAP Clean Core.',
      },
    ],
  },
  {
    tlKey: 2,
    date: 'February 2021 - January 2022',
    location: 'Sengicon GmbH, Germany',
    title: 'Software developer and Linux administrator',
    about: 'Sengicon offers full-stack software development and Industry 4.0 applications.',
    content: (
      <>
      <p>
         The application development in the area of ERP subsystems includes PHP backend development for intranet web
        applications and the refactoring of PHP code. Additionally, database schemas and data models were created and
        adapted. In the frontend area, React web frontends were developed and refactored. In the area of system
        administration, various Linux VMs were set up and managed. This also included the installation, configuration,
        and administration of LAMP stacks under Linux. Application tests were conducted using PHPUnit.
      </p>
        <p>
          This also included the installation, configuration, and administration of LAMP stacks under Linux. Application
          tests were conducted using PHPUnit.
        </p>
      </>
    ),
    experiences: [
      {
        eiKey: 1,
        text: 'Setup, management and administration of CentOS / Rocky Linux as VM.',
      },
      {
        eiKey: 2,
        text: 'Application development ERP sub-systems.',
      },
      {
        eiKey: 3,
        text: 'Structure, setup and development of LAMP stack.',
      },
      {
        eiKey: 4,
        text: 'Application development and refactoring REST API in PHP.',
      },
    ],
  },
  {
    tlKey: 3,
    date: 'April 2004 - January 2019',
    location: 'Ferienhaus-Vermittlung fincaferien.de GmbH, Germany',
    title: 'Webmaster (with development tasks)',
    about: 'Fincaferien was one of the first German agencies to successfully broker vacation homes online.',
    content: (
      <>
        <p>
          Special attention was paid to SEO techniques and user-friendliness. Within this framework, I carried out all
          technical SEO implementations and was actively involved in all enhancements. This has given me twenty years
          of valuable experience in web development with HTML/HTML5, CSS/CSS3 and JavaScript web extensions.
        </p>
        <p>
          With the introduction of Git and Jira, I optimized version and project management. The websites were later
          provided with Drupal 7, where completely self-written Drupal modules were used without a maintenance contract.
          This sparked my interest in clean code and best practices. For the web presence with Drupal, I did professional
          photo editing with Adobe Photoshop.
        </p>
        <p>
          I have sixteen years of experience in the maintenance and administration of Windows networks at
          the agency, the core of it was a Linux server with Samba. My knowledge of Linux administration includes the
          setup, maintenance, and administration of Linux systems, including Samba and Apache.
        </p>
      </>
    ),
    experiences: [
      {
        eiKey: 1,
        text: 'Active involvement in all website and network enhancements.',
      },
      {
        eiKey: 2,
        text: '20 years of experience with HTML/HTML5 and CSS/CSS3.',
      },
      {
        eiKey: 3,
        text: '8 years of experience with JavaScript.',
      },
      {
        eiKey: 4,
        text: 'Expertise in implementing Git and Jira.',
      },
      {
        eiKey: 5,
        text: '6 years of experience with Git.',
      },
      {
        eiKey: 6,
        text: '5 years of experience with Drupal 7, Responsible for maintenance and extension of modules.',
      },
      {
        eiKey: 7,
        text: '16 years of expertise in administration of Windows networks.',
      },
      {
        eiKey: 8,
        text: '7 years of expertise in Linux administration.',
      },
      {
        eiKey: 9,
        text: '7 years of experience in professional photo editing with Adobe Photoshop.',
      },
      {
        eiKey: 10,
        text: '20 years of expertise in SEO.',
      },
      {
        eiKey: 11,
        text: '5 years expertise in SEA.',
      },
    ],
  },
  {
    tlKey: 4,
    date: 'August 1998 - Juli 2002',
    location: 'As freelance work in Germany: Berlin, Hanover, Braunschweig, and Wolfsburg',
    title: 'Stagehand',
    about: 'My primary responsibility was to assist with the setup, maintenance, and operation of stage equipment.',
    content: (
        <p>
          Adhering to safety protocols I had a Safety Training for Slinging Techniques.
        </p>
    ),
    experiences: [
      {
        eiKey: 1,
        text: 'Collaborated with others to assemble stage sets, props, and scenery.'
      },
      {
        eiKey: 2,
        text: 'During performances, assists with lights, sound and moving scenery and artist support.',
      },
      {
        eiKey: 3,
        text: 'Effective collaboration and communication with crew.'
      },
    ],
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
    date: 'November 2021 - January 2021',
    location: 'Sengicon GmbH, Germany',
    title: 'Internship as part of the Full-Stack Web Developer training program',
    about: 'Sengicon offers full-stack software development and Industry 4.0 applications.',
    content: (
      <p>The activities included
      the installation and setup of Linux VMs, as well as the installation, configuration, and administration of Apache,
      MySQL/MariaDB, and PHP software stacks under Linux. In addition, Drupal 8 was installed and set up.</p>
    ),
    experiences: [
      {
        eiKey: 1,
        text: 'Installation and setup of Drupal 8 (https://sengicon.de)'
      },
      {
        eiKey: 2,
        text: 'Installation and setup of Linux VMs.'
      },
      {
        eiKey: 3,
        text: 'Structure, setup, and development of the LAMP stack.'
      },
    ],
  },
  {
    tlKey: 2,
    date: 'January 2020 – January 2021',
    location: 'Indisoft GmbH, Germany',
    title: 'Further training as a Full-Stack Web Developer',
    about: 'The further training certified the quality of my knowledge.',
    content: (
      <p>The training covered best practices in responsive web design, the scripting languages
      Javascript and PHP as well as MySQL. Content management, e-commerce, online PR, online marketing
      marketing, SEO, SEA including keyword advertising and controlling with Google Analytics
      were part of it. An internship rounded off the activities.</p>
    ),
    experiences: [
      {
        eiKey: 1,
        text: 'Responsive web design with HTML 5 and CSS 3.',
      },
      {
        eiKey: 2,
        text: 'Content management for programmers (Typo 3).',
      },
      {
        eiKey: 3,
        text: 'Search engine optimisation.',
      },
      {
        eiKey: 4,
        text: 'Search engine marketing.',
      },
      {
        eiKey: 5,
        text: 'Keyword advertising, Google Analytics.',
      },
      {
        eiKey: 6,
        text: 'Online PR, social media marketing - writing for the web',
      },
      {
        eiKey: 7,
        text: 'Agile project management with Scrum Master certificate.',
      },
      {
        eiKey: 8,
        text: 'E-commerce, store systems (WordPress with Whoo-commerce).',
      },
      {
        eiKey: 9,
        text: 'Scripting languages Javascript (Vanilla Javascript).',
      },
      {
        eiKey: 10,
        text: 'Javascript development with Node.js, jQuery, AJAX.',
      },
      {
        eiKey: 11,
        text: ' PHP scripting language (OOP based on concept of MVC).',
      },
      {
        eiKey: 12,
        text: 'Internship.',
      },

    ],
  },
  {
    tlKey: 3,
    date: 'Juni 2020',
    location: 'Indisoft GmbH, Germany',
    title: 'Scrum Master (PSMI)',
    about: 'The Professional Scrum Master I (PSM I) is an entry-level certification provided by Scrum.org.',
    content:(
      <p>It demonstrates a fundamental level of Scrum mastery, including understanding Scrum
      principles and practices.</p>
    ),
    experiences: [
      {
        eiKey: 1,
        text: 'Scrum Theory and Principles (Understand the empirical process and Comprehend the Scrum values ).'
      },
      {
        eiKey: 2,
        text: 'The Scrum Framework (Roles, Events, Artifacts).'
      },
      {
        eiKey: 3,
        text: 'Scrum Roles (Responsibilities of the Scrum Master, Product Owner, and Development Team).'
      },
      {
        eiKey: 4,
        text: 'Scrum Events (Purpose and timing of each event, facilitate and ensure each event\'s effectiveness).'
      },
      {
        eiKey: 5,
        text: 'Scrum Artifacts (Purpose and content of Product Backlog, Sprint Backlog, and Increment, importance of Definition of Done).'
      },
      {
        eiKey: 6,
        text: 'Scaling Scrum (Basics of scaling Scrum for larger projects and teams).'
      },
    ],
  },
  {
    tlKey: 4,
    date: 'August 2002 - Juni 2004',
    location: 'DAA GmbH in Hildesheim, Germany',
    title: 'Training as an industrial clerk',
    about: 'Jobtraining as an industrial clerk',
    content: (
      <p>I focused on business processes, commercial management and control, and economic and social studies.</p>
    ),
    experiences: [
      {
        eiKey: 1,
        text: 'Business processes'
      },
      {
        eiKey: 2,
        text: 'Commercial management and control'
      },
      {
        eiKey: 3,
        text: 'Economic and social studies'
      },
    ],
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
    relationshipStatus: 'I have been married since 2004.',
    familyStatus: 'We have three kids together (born in 2002, 2004, and 2019).',
    privateInterests: 'I am interested in electronic music and developing our property in Alto Paraíso de Goiás.',
    location: 'I live in Germany for a small part of the year, but I spend most of my time in Brazil.',
  }
];

/**
 * Portfolio section
 */
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

/**
 * Imprint items
 */

export const imprintItems: ImprintSection = {
  description: '',
  headerText: 'Person in charge:',
  items: [
    {
      text: 'Martin Grellmann',
    },
    {
      text: 'Vogelmauer 43',
    },
    {
      text: '86152 Augsburg',
    },
    {
      text: 'Germany',
    },
    {
      text: '---',
    },
    {
      text: 'Sitio de Cristal',
    },
    {
      text: '73770-000, Povoado do Moinho',
    },
    {
      text: 'Alto Paraíso de Goiás',
    },
    {
      text: 'Goiás, Brazil',
    },
  ],

  linkItems: [
    {
    linkLabel: 'e-mail:',
    text: 'martin@grellmann.eu',
    href: 'mailto:martin@grellmann.eu',
    },
    {
      linkLabel: 'Fax:',
      text: '+49 322 239 432 99',
      href: 'tel:004932223943299',
    }
  ],

  headerDSGVO: 'Data protection:',

  itemsDSGVO: [
    {
      text: 'The sole purpose of this website is to present my CV and related content.'
    },
    {
      text: 'No data will be collected on this page, apart from the usual log files of the domain hoster. '
    },
    {
      text: 'The Logfiles are not evaluated for business purposes'
    },
    {
      text:
        'By submitting the contact form, name and email will be requested and sent.'
    },
    {
      text:
        'The responsibility for the websites accessed via any links lies with the respective operators.'
    },
    {
      text: 'When a contact request is made, the corresponding e-mail is saved on the host and the e-mail client.'
    },
  ]
};