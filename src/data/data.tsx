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
  LifeItem,
  PortfolioItem,
  ProjectItem,
  Social,
  SubHeader,
  SummaryItem,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

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
 * About section
 */
export const aboutData: About = {
  header: 'About me',
  profileImageSrc: profilepic,
  description: `With 20 years experience, I develop reasonable solutions for complex challenges, adhering to Clean Code and S.O.L.I.D. principles to ensure high software quality.`,
  aboutItems: [
    {label: 'Location', text: 'Povoado do Moinho, Alto Paraíso de Goiás, Brazil', Icon: MapIcon},
    {label: 'Study', text: 'Certified Full-Stack Web Developer', Icon: AcademicCapIcon},
    {label: 'Nationality', text: 'German / Brazil Residence', Icon: FlagIcon},
    {label: 'Job Training', text: 'Full-Stack Web Developer (2021)', Icon: AcademicCapIcon},
    {label: 'Age', text: '49', Icon: CalendarIcon},
    {label: 'Job Training', text: 'Scrum Master PSMI (2020)', Icon: AcademicCapIcon},
    {label: 'Interests', text: 'Travel, Family, Music', Icon: SparklesIcon},
    {label: 'Job Education', text: 'Industrial clerk (2004)', Icon: BuildingOffice2Icon},
  ],
  imagePublicURL: 'https://grellmann.app/images/profilepic.jpg',
  imagePublicAlt: 'MArtin Grellmann, Full-Stack software engineer'
};

export const sumHeader: CVSubHeader = {
  title: 'Summary',
  content: (
    <>
        <p className="pb-8">My career is marked by the commitment to continuous learning. I deliver high-quality, reliable software solutions. I thrive in
          collaborative environments and am dedicated to developing innovative and efficient solutions.</p>
    </>
  ),
  showSpacer: false
}

export const summaryItems: SummaryItem[] = [

  {
    siKey: 1,
    date: 'February 2022 - Present',
    location: 'BA Business Advice GmbH, Germany',
    title: 'SAP Technical Consultant, SAP Full-Stack Development',
    content: (
      <>
        <p>Business consulting and SAP solutions expert with extensive experience in SAP ABAP (Clean Core), SAP MII, SAP UI5 Freestyle, SAP Fiori Elements, SAP S4/HANA Public Cloud Side-By-Side Extension, SAP RAP, SAP CAP, OData v2, OData v4, and ABAP CDS. Proficient in implementing migrations from ERP to S/4 HANA and refactoring existing applications. Also experienced in JavaScript, TypeScript, and Jest.js for the UI5 framework.</p>
      </>
    ),
    experiences: [],
  },
  {
    siKey: 2,
    date: 'February 2021 – January 2022',
    location: 'Sengicon GmbH, Germany',
    title: 'Software Developer and Linux Administrator',
    content: (
      <>
        <p>Focused on full-stack software development and Industry 4.0 applications. I possess extensive experience in refactoring PHP code and developing React web frontends with Material Design. Additionally, I have a strong background in the installation, configuration, and administration of LAMP-stacks under Linux environments. My skill set also includes conducting comprehensive application tests using PHPUnit and Jest.js, as well as database modeling and integrating RESTful APIs with PHP.</p>
      </>
    ),
    experiences: [],
  },
  {
    siKey: 3,
    date: 'April 2002 – December 2019',
    location: 'Ferienhaus-Vermittlung fincaferien.de GmbH, Germany',
    title: 'Webmaster (with development tasks)',
    content: (
      <>
        <p>Dynamic and results-driven web and network enhancer with extensive experience in web development, network management, and search engine optimization. Adept at leveraging a diverse skill set to drive traffic, improve user experience, and maintain robust network systems. Demonstrated expertise in HTML, CSS, PHP, Drupal, Git, Jira, SEO, SEA, and Linux administration. Proven ability to monitor analytics, develop effective SEO strategies, and perform comprehensive website audits. Skilled in managing both Linux (Samba) and Windows networks to ensure seamless operations.</p>
      </>
    ),
    experiences: [],
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
    location: 'BA Business Advice GmbH, Oldenburg, Germany',
    title: 'SAP Technical Consultant, SAP Full-Stack Development',
    about: 'Business consulting and SAP solutions.',
    content: (
      <>
        <p>
          Delivered expert SAP solutions tailored to client needs. Leveraged extensive technical skills to realise
          Solution in SAP landscapes and enhance business processes.
          Provided comprehensive business consulting services and SAP solutions. Specialized in SAP ABAP, SAP MII, SAP
          UI5 Freestyle, SAP Fiori Elements, and SAP S4/HANA Public Cloud
          Side-By-Side Extension. Successfully implemented migrations from ERP to S/4 HANA and refactored existing
          applications.
        </p>
        <header>
          <h5 className="font-bold text-lg mt-4">Technical Skills</h5>
        </header>
        <ul className="list-inside list-disc">
          <li>Proficient in SAP ABAP (Clean Core), SAP MII, SAP UI5 Freestyle, SAP Fiori Elements, SAP RAP, SAP CAP,
            OData v2, OData v4, and ABAP CDS.
          </li>
          <li>Experienced in using JavaScript, TypeScript, and Jest.js for the UI5 framework.</li>
          <li>Extensive experience with S4/Hana Cloud - Public Edition: Side-By-Side Extension and S4/Hana Cloud -
            Public Edition: Developer Extension.
          </li>
          <li>Competent with SAP BTP (Business Technology Platform).</li>
        </ul>
        <header>
          <h5 className="font-bold text-lg mt-4">Additional Information</h5>
        </header>
        <ul className="list-inside list-disc">
          <li>Successfully implemented migrations from ERP to S/4 HANA and refactored existing applications.</li>
          <li>Demonstrated proficiency in JavaScript, TypeScript, and Jest.js for the UI5 framework.</li>
        </ul>
        <header>
          <h5 className="font-bold text-lg mt-4">Achievements</h5>
        </header>
        <ul className="list-inside list-disc">
          <li>Implemented migrations from ERP to S/4 HANA.</li>
          <li>Refactored existing applications to enhance performance and maintainability.</li>
          <li>Experienced in problem-solving within SAP technology and customizing ABAP Application und UI5,
            consistently delivering innovative solutions to complex challenges.
          </li>
        </ul>
      </>
    ),
    experiences: [
      {
        eiKey: 1,
        text: 'SAP ABAP (Clean Core)',
      },
      {
        eiKey: 2,
        text: 'SAP MII',
      },
      {
        eiKey: 3,
        text: 'SAP UI5 Freestyle',
      },
      {
        eiKey: 3,
        text: 'SAP Fiori Elements',
      },
      {
        eiKey: 4,
        text: 'S4/HANA Cloud - Public Edition: Side-By-Side Extension',
      },
      {
        eiKey: 5,
        text: 'S4/HANA Cloud - Public Edition: Developer Extension',
      },
      {
        eiKey: 6,
        text: 'SAP RAP',
      },
      {
        eiKey: 7,
        text: 'SAP CAP',
      },
      {
        eiKey: 7,
        text: 'oData v2',
      },
      {
        eiKey: 7,
        text: 'oData v4',
      },
{
  eiKey: 8,
    text: 'ABAP CDS',
},
{
eiKey: 8,
  text: 'ABAP BTP',
},
    ],
    reference: [
      {
        href: '/assets/reference/sap_projectlist.pdf',
        text: 'SAP Projectlist',
        primary: true,
        Icon: ArrowDownTrayIcon,
      },
    ],
  },
  {
    tlKey: 2,
    date: 'February 2021 - January 2022',
    location: 'Sengicon GmbH, Leipzig, Germany',
    title: 'Software developer and Linux administrator',
    about: 'Full-stack software development and Industry 4.0 applications.',
    content: (
      <>
        <p>
          Developed and maintained full-stack applications, ensuring seamless integration between front-end and back-end
          systems.
          Implemented Industry 4.0 solutions to enhance automation and data exchange in manufacturing technologies.
        </p>
        <header>
          <h5 className="font-bold text-lg mt-4">Technical Skills</h5>
        </header>
        <header>
          <h6 className="mt-4 font-semibold">React Web Frontends with Material Design</h6>
        </header>
        <ul className="list-inside list-disc">
          <li>Created dynamic and responsive web frontends using React and Material Design principles.</li>
          <li>Enhanced user experience through intuitive and visually appealing interfaces.</li>
          <li>Developed a custom router in React to manage client-side navigation efficiently.</li>
        </ul>
        <header>
          <h6 className="mt-4 font-semibold">PHP Code Refactoring</h6>
        </header>
        <ul className="list-inside list-disc">
          <li>Refactored legacy PHP code to improve performance, maintainability, and scalability.</li>
          <li>Utilized Composer for dependency management and PHPUnit for unit testing, ensuring robust and error-free
            code.
          </li>
        </ul>
        <header>
          <h6 className="mt-4 font-semibold">Database Modeling</h6>
        </header>
        <ul className="list-inside list-disc">
          <li>Designed and implemented relational database models using MySQL, MariaDB, and PostgreSQL.</li>
          <li>Ensured data integrity and optimized database performance through efficient schema design and indexing.
          </li>
        </ul>
        <header>
          <h6 className="mt-4 font-semibold">Integration of RESTful APIs with PHP</h6>
        </header>
        <ul className="list-inside list-disc">
          <li>Developed and integrated RESTful APIs using PHP to facilitate communication between different software
            systems.
          </li>
          <li>Ensured secure and efficient data exchange between client and server applications.</li>
        </ul>
        <header>
          <h5 className="mt-4 font-semibold">Application Testing</h5>
        </header>
        <ul className="list-inside list-disc">
          <li>Conducted rigorous application tests using PHPUnit for PHP and Jest.js for JavaScript to ensure
            high-quality software delivery.
          </li>
          <li>Identified and resolved bugs and performance issues through systematic testing and debugging.</li>
        </ul>
        <header>
          <h6 className="mt-4 font-semibold">LAMP-Stack Management</h6>
        </header>
        <ul className="list-inside list-disc">
          <li>Installed, configured, and administered LAMP-stacks (Linux, Apache, MySQL, PHP) to support web
            applications.
          </li>
          <li> Expertise in setting up and managing Linux servers, including CentOS as a virtual machine (VM).</li>
        </ul>
        <header>
          <h5 className="mt-4 font-semibold">System Administration</h5>
        </header>
        <ul className="list-inside list-disc">
          <li>Installation, configuration, and administration of Linux and LAMP-stacks.</li>
          <li>Hardening and managing CentOS as a virtual machine (VM).</li>
        </ul>
        <header>
          <h5 className="font-bold text-lg mt-4">Additional Information</h5>
        </header>
        <ul className="list-inside list-disc">
          <li>Proficient in version control systems like Git.</li>
          <li>Strong understanding of web security practices and performance optimization.</li>
          <li>Excellent problem-solving skills and attention to detail.</li>
          <li>Ability to collaborate effectively with cross-functional teams.</li>
          <li>Ability to collaborate effectively with cross-functional teams.</li>
          <li>Experienced in problem-solving within software development, consistently delivering innovative solutions
            to complex challenges.
          </li>
        </ul>
        <header>
          <h5 className="font-bold text-lg mt-4">Achievements</h5>
        </header>
        <ul className="list-inside list-disc">
          <li>Implemented Industry 4.0 solutions to enhance automation and data exchange in manufacturing
            technologies.
          </li>
          <li>Distinguished myself in particular by successfully converting an outdated PHP web application to a modern
            PHP REST backend with a connection to an independently created new React-Web-Frontend including
            Database modelling.
          </li>
        </ul>
      </>
    ),
    experiences: [
      {
        eiKey: 1,
        text: 'PHP',
      },
      {
        eiKey: 2,
        text: 'Composer',
      },
      {
        eiKey: 3,
        text: 'PHPUnit',
      },
      {
        eiKey: 4,
        text: 'JavaScript',
      },
      {
        eiKey: 5,
        text: 'Typescript',
      },
      {
        eiKey: 6,
        text: 'React.js',
      },
      {
        eiKey: 7,
        text: 'Jest.js',
      },
      {
        eiKey: 8,
        text: ' Database modeling',
      },
      {
        eiKey: 9,
        text: ' Database management',
      },
      {
        eiKey: 10,
        text: 'MySQL',
      },
      {
        eiKey: 11,
        text: 'MariaDB',
      },
      {
        eiKey: 12,
        text: 'PostgreSQL',
      },
    ],
    reference: [
      {
        href: '/assets/reference/translated_sengicon.pdf',
        text: 'Letter of recommendation (Translated from German)',
        primary: true,
        Icon: ArrowDownTrayIcon,
      },
    ],
  },
  {
    tlKey: 3,
    date: 'April 2002 - December 2019',
    location: 'Ferienhaus-Vermittlung fincaferien.de GmbH, Bockenem, Germany',
    title: 'Webmaster (with development tasks)',
    about: 'Fincaferien was one of the first German agencies to successfully broker vacation homes online.',
    content: (
      <>
        <p>Extensive experience in web development, network management, and SEO.
          Skilled in driving traffic, improving user experience, maintaining robust networks, and managing
          Linux.</p>
        <header>
          <h6 className="font-bold text-lg mt-4">Technical Skills</h6>
        </header>
        <header>
          <h5 className="font-bold text-lg mt-4">Web Development</h5>
        </header>
        <ul className="list-inside list-disc">
          <li>Developed and maintained websites using HTML, CSS, PHP, and Drupal.</li>
          <li>Customized Drupal modules to meet specific client needs and enhance functionality.</li>
          <li>Proficient in creating and maintaining web pages with a strong understanding of usability design
            principles.
          </li>
        </ul>
        <header>
          <h5 className="font-bold text-lg mt-4">PHP, Drupal</h5>
        </header>
        <ul className="list-inside list-disc">
          <li>Experienced in developing and managing dynamic web applications and Drupal content management systems,
            including custom module development.
          </li>
        </ul>
        <header>
          <h5 className="font-bold text-lg mt-4">Project Management</h5>
        </header>
        <ul className="list-inside list-disc">
          <li>Utilized Git for version control and Jira for project management to facilitate smooth and efficient
            development processes.
          </li>
          <li>Collaborated with cross-functional teams to deliver projects on time and within scope.</li>
        </ul>
        <header>
          <h5 className="font-bold text-lg mt-4">Linux Administration</h5>
        </header>
        <ul className="list-inside list-disc">
          <li>Competent in managing Linux-based systems, including Samba for file
            sharing and network management.
          </li>
          <li>Managed Linux (Samba) and Windows networks, ensuring secure and efficient operations.</li>
          <li>Performed regular maintenance and troubleshooting to minimize downtime.</li>
        </ul>
        <header>
          <h5 className="font-bold text-lg mt-4">SEO Strategies</h5>
        </header>
        <ul className="list-inside list-disc">
          <li>Developed and implemented SEO strategies to boost website traffic and improve search engine rankings.</li>
          <li>Conducted thorough website audits to identify areas for improvement.</li>
        </ul>
        <header>
          <h5 className="font-bold text-lg mt-4">Analytics Monitoring</h5>
        </header>
        <ul className="list-inside list-disc">
          <li>Monitored website analytics to track performance metrics, user behavior, and campaign effectiveness.</li>
          <li>Utilized data insights to optimize user experience and content strategy.</li>
        </ul>

        <header>
          <h5 className="font-bold text-lg mt-4">Additional Information</h5>
        </header>
        <ul className="list-inside list-disc">
          <li>Self-taught and adept at acquiring the know-how to solve complex problems in Web Design, PHP, Drupal,
            SEO / SEM and Project management.
            .</li>
        </ul>
        <header>
          <h5 className="font-bold text-lg mt-4">Achievements</h5>
        </header>
        <ul className="list-inside list-disc">
          <li>Successfully increased organic traffic through targeted technical SEO strategies.</li>
          <li>Enhanced website performance and user experience, resulting in a reduction in bounce rate through
            implementing usability methods recommended by Jacob Nielsen.
          </li>
        </ul>
      </>
    ),
    experiences: [
      {
        eiKey: 1,
        text: 'HTML',
      },
      {
        eiKey: 1,
        text: 'CSS',
      },
      {
        eiKey: 2,
        text: 'Usability',
      },
      {
        eiKey: 2,
        text: 'Drupal',
      },
      {
        eiKey: 3,
        text: 'Git',
      },
      {
        eiKey: 3,
        text: 'Jira',
      },
      {
        eiKey: 4,
        text: 'Linux Administration',
      },
      {
        eiKey: 5,
        text: 'Samba',
      },
      {
        eiKey: 5,
        text: 'SEO',
      },
      {
        eiKey: 5,
        text: 'SEA',
      },
      {
        eiKey: 5,
        text: 'Analytics Monitoring',
      },
    ],
    reference: [
      {
        href: '/assets/reference/translated_fincaferien.pdf',
        text: 'Letter of recommendation (Translated from German)',
        primary: true,
        Icon: ArrowDownTrayIcon,
      },
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
    reference: [],
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
    location: 'Sengicon GmbH, Leipzig, Germany',
    title: 'Full-Stack Web Developer, Practical Internship',
    about: 'Practical Internship to get deep into best practises.',
    content: (
      <p>Practical training covered best practices in LAMP-Stack, Javascript, PHP,
        MySQL and Linux-Administration.</p>
    ),
    experiences: [],
    reference: [],
  },
  {
    tlKey: 2,
    date: '',
    location: 'Indisoft GmbH, Leipzig, Germany',
    title: 'Certification of Full-Stack Web Developer',
    about: '',
    content:(
      <p>Training covered best practices in responsive web design, Javascript and
        PHP, MySQL, content management, e-commerce, and online marketing,
        including SEO, SEA and Google Analytics.
        Included a Scrum Master (PSMI) certificate.</p>
    ),
    experiences: [],
    reference: [
      {
        href: '/assets/reference/translated_cert_full_stack_web_dev.pdf',
        text: 'Certificate Full stack web developer (Translated from German)',
        primary: true,
        Icon: ArrowDownTrayIcon,
      },
      {
        href: '/assets/reference/translated_cert_agile_project_managament.pdf',
        text: 'Certificate Agile Project Management (Translated from German)',
        primary: true,
        Icon: ArrowDownTrayIcon,
      },
    ],
  },
  {
    tlKey: 3,
    date: '',
    location: 'DAA GmbH, Hildesheim, Germany',
    title: 'Vocational training as an Industrial Clerk',
    about: '',
    content: (
      <p>Focused on business processes, commercial management and control,
        and economic and social studies.</p>
    ),
    experiences: [],
    reference: [],
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
    privateInterests: 'I am interested in electronic music, a DJ since 3 decades and developing our property in Moinho, Alto Paraíso de Goiás.',
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
