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
  description: `German citizen with unrestricted work and residence permit in Brazil. Senior software engineer with 20+ years of experience in full-stack web development and recent specialization in modern SAP full-stack development, including SAP BTP, S/4HANA modernization, ABAP, CDS, OData, Fiori/UI5 and API integration.`,
  aboutItems: [
    {label: 'Location', text: 'Goiás, Brazil and Leipzig, Germany', Icon: MapIcon},
    {label: 'Nationality', text: 'German citizen / unrestricted work and residence permit in Brazil', Icon: FlagIcon},
    {label: 'Specialization', text: 'Senior Full-Stack Engineer, SAP BTP, S/4HANA, enterprise APIs, clean core', Icon: BuildingOffice2Icon},
    {label: 'Experience', text: '20+ years software engineering and full-stack development', Icon: CalendarIcon},
    {label: 'Architecture', text: 'iSAQB CPSA-F Foundation Level training completed, exam planned for Q3 2026', Icon: AcademicCapIcon},
    {label: 'Certifications', text: 'Scrum Master PSMI, Full-Stack Web Developer certification', Icon: AcademicCapIcon},
    {label: 'Methods', text: 'Clean Code, SOLID, refactoring, code reviews, sustainable architecture', Icon: SparklesIcon},
    {label: 'Education', text: 'Industrial Clerk (2002 - 2004)', Icon: BuildingOffice2Icon},
  ],
  imagePublicURL: 'https://grellmann.app/images/profilepic.jpg',
  imagePublicAlt: 'Martin Grellmann, Senior Full-Stack Engineer'
};

export const sumHeader: CVSubHeader = {
  title: 'Summary',
  content: (
    <>
      <p className="pb-8">Senior Full-Stack Developer with 20+ years of experience in software engineering and focused modern specialization in SAP full-stack development across SAP BTP, S/4HANA, ABAP, CDS, OData and Fiori/UI5.</p>
      <p>Early adopter of modern SAP technologies including RAP, CAP, ABAP Cloud and SAP BTP. Strong conceptual understanding, hands-on experimentation and extensive experience in enterprise software architecture, API integration and clean, maintainable application development.</p>
    </>
  ),
  showSpacer: false
};

export const summaryItems: SummaryItem[] = [
  {
    siKey: 1,
    date: '01/2025 - Present',
    location: 'Intecsoft GmbH & Co, Dresden, Germany',
    title: 'Senior SAP Developer',
    content: (
      <>
        <p>Contract-based SAP development role focused on modernization and integration in S/4HANA-related projects.</p>
        <p>Improved backend API interfaces in an S/4HANA project to increase integration readiness and maintainability, supported productive web services during hypercare in the FI environment and refactored a SAP Business Suite Dynpro application into object-oriented ABAP for better maintainability and future S/4HANA compatibility in an IS-U context.</p>
      </>
    ),
    experiences: []
  },
  {
    siKey: 2,
    date: '03/2025 - Present',
    location: 'Ferienhausvermittlung fincaferien, Düsseldorf, Germany',
    title: 'Technical Lead / IT Specialist',
    content: (
      <>
        <p>Lead technical modernization and digital transformation of a multi-site vacation rental platform based on Drupal.</p>
        <p>Designed and implemented a cloud-based infrastructure strategy, created a modernization roadmap for the legacy platform architecture, developed API-driven integrations and supported digitalization initiatives across booking, content and operational workflows.</p>
      </>
    ),
    experiences: []
  },
  {
    siKey: 3,
    date: '02/2022 - 12/2024',
    location: 'BA Business Advice GmbH, Oldenburg, Germany',
    title: 'SAP Technical Consultant, SAP Full-Stack Development',
    content: (
      <>
        <p>SAP consulting and development with focus on ABAP, UI5, Fiori, S/4HANA, SAP BTP and modern extension models.</p>
        <p>Developed and enhanced SAP applications using ABAP, CDS, OData and UI5, contributed to ERP-to-S/4HANA migration projects, refactored existing applications and worked on side-by-side and developer extensibility scenarios in S/4HANA Public Cloud.</p>
      </>
    ),
    experiences: []
  },
  {
    siKey: 4,
    date: '02/2021 - 01/2022',
    location: 'Sengicon GmbH, Leipzig, Germany',
    title: 'Software Developer and Linux Administrator',
    content: (
      <>
        <p>Full-stack development in an Industry 4.0 environment with React frontends, PHP backends, API integration and Linux-based infrastructure.</p>
        <p>Successfully converted an outdated PHP web application to a modern PHP REST backend and connected it to a newly created React web frontend including database modelling.</p>
      </>
    ),
    experiences: []
  },
  {
    siKey: 5,
    date: '04/2004 - 12/2019',
    location: 'Ferienhaus-Vermittlung fincaferien.de GmbH, Bockenem, Germany',
    title: 'Webmaster / Web Developer',
    content: (
      <>
        <p>Long-term responsibility for web development, operations, optimization and technical infrastructure.</p>
        <p>Developed and maintained websites and web applications with PHP, Drupal, HTML and CSS, managed Linux and network environments and improved traffic, performance and usability through technical SEO and usability-focused optimization.</p>
      </>
    ),
    experiences: []
  },
];

export const expHeader: CVSubHeader = {
  title: 'Work',
  content: <></>,
  showSpacer: false,
};

export const experience: TimelineItem[] = [
  {
    tlKey: 1,
    date: '01/2025 - Present',
    location: 'Intecsoft GmbH & Co, Dresden, Germany',
    title: 'Senior SAP Developer',
    about: 'Modernization and integration in S/4HANA-related projects.',
    content: (
      <>
        <p>Improved backend API interfaces in an S/4HANA project to increase integration readiness and maintainability.</p>
        <p>Supported productive web services and API interfaces during hypercare in the FI environment.</p>
        <p>Refactored a SAP Business Suite Dynpro application into object-oriented ABAP for better maintainability and future S/4HANA compatibility in an IS-U context.</p>
        <p>Worked closely with business stakeholders, solution managers and developers to align implementation with functional requirements.</p>
      </>
    ),
    experiences: [
      {eiKey: 1, text: 'ABAP Objects'},
      {eiKey: 2, text: 'ABAP SQL'},
      {eiKey: 3, text: 'CDS Views'},
      {eiKey: 4, text: 'OData'},
      {eiKey: 5, text: 'SAP BTP'},
      {eiKey: 6, text: 'REST'},
      {eiKey: 7, text: 'Fiori/UI5'},
      {eiKey: 8, text: 'S/4HANA'},
      {eiKey: 9, text: 'Clean Core'},
    ],
    reference: [
      {
        href: '/assets/cv_martin_grellmann.pdf',
        text: 'Current CV',
        primary: true,
        Icon: ArrowDownTrayIcon,
      },
    ],
  },
  {
    tlKey: 2,
    date: '03/2025 - Present',
    location: 'Ferienhausvermittlung fincaferien, Düsseldorf, Germany',
    title: 'Technical Lead / IT Specialist',
    about: 'Modernization and digital transformation of a multi-site vacation rental platform.',
    content: (
      <>
        <p>Designed and implemented a cloud-based infrastructure strategy to improve scalability and maintainability.</p>
        <p>Designed a modernization roadmap for a legacy Drupal platform architecture, including API-driven integrations and service-oriented design.</p>
        <p>Developed and integrated enterprise APIs connecting business services with Drupal CMS.</p>
        <p>Drove digitalization initiatives across booking, content and operational workflows.</p>
      </>
    ),
    experiences: [
      {eiKey: 1, text: 'Drupal'},
      {eiKey: 2, text: 'PHP'},
      {eiKey: 3, text: 'Cloud infrastructure'},
      {eiKey: 4, text: 'REST APIs'},
      {eiKey: 5, text: 'Automation'},
      {eiKey: 6, text: 'Web technologies'},
    ],
    reference: [
      {
        href: '/assets/cv_martin_grellmann.pdf',
        text: 'Current CV',
        primary: true,
        Icon: ArrowDownTrayIcon,
      },
    ],
  },
  {
    tlKey: 3,
    date: '02/2022 - 12/2024',
    location: 'BA Business Advice GmbH, Oldenburg, Germany',
    title: 'SAP Technical Consultant, SAP Full-Stack Development',
    about: 'SAP consulting and development with focus on ABAP, UI5, Fiori, S/4HANA and SAP BTP.',
    content: (
      <>
        <p>Developed and enhanced SAP applications using ABAP, CDS, OData and UI5.</p>
        <p>Contributed to ERP-to-S/4HANA migration projects and MII-related work.</p>
        <p>Refactored existing applications to improve maintainability, future readiness and architectural quality.</p>
        <p>Built UI5 Freestyle and Fiori Elements applications and contributed to initiatives involving SAP BTP, RAP and CAP.</p>
      </>
    ),
    experiences: [
      {eiKey: 1, text: 'SAP ABAP'},
      {eiKey: 2, text: 'ABAP CDS'},
      {eiKey: 3, text: 'OData v2/v4'},
      {eiKey: 4, text: 'SAP UI5'},
      {eiKey: 5, text: 'Fiori Elements'},
      {eiKey: 6, text: 'RAP'},
      {eiKey: 7, text: 'CAP'},
      {eiKey: 8, text: 'SAP BTP'},
      {eiKey: 9, text: 'S/4HANA Public Cloud'},
      {eiKey: 10, text: 'JavaScript'},
      {eiKey: 11, text: 'TypeScript'},
      {eiKey: 12, text: 'Jest'},
    ],
    reference: [
      {
        href: '/assets/cv_martin_grellmann.pdf',
        text: 'Current CV',
        primary: true,
        Icon: ArrowDownTrayIcon,
      },
    ],
  },
  {
    tlKey: 4,
    date: '02/2021 - 01/2022',
    location: 'Sengicon GmbH, Leipzig, Germany',
    title: 'Software Developer and Linux Administrator',
    about: 'Full-stack development in an Industry 4.0 environment.',
    content: (
      <>
        <p>Developed React-based web frontends and refactored and modernized existing PHP applications.</p>
        <p>Built and integrated REST-based APIs with PHP and modelled databases with MySQL, MariaDB and PostgreSQL.</p>
        <p>Performed testing with PHPUnit and Jest and installed, configured and administered Linux and LAMP environments.</p>
      </>
    ),
    experiences: [
      {eiKey: 1, text: 'React'},
      {eiKey: 2, text: 'JavaScript'},
      {eiKey: 3, text: 'PHP'},
      {eiKey: 4, text: 'REST'},
      {eiKey: 5, text: 'PHPUnit'},
      {eiKey: 6, text: 'Jest'},
      {eiKey: 7, text: 'Linux'},
      {eiKey: 8, text: 'Apache'},
      {eiKey: 9, text: 'MySQL'},
      {eiKey: 10, text: 'MariaDB'},
      {eiKey: 11, text: 'PostgreSQL'},
      {eiKey: 12, text: 'Composer'},
    ],
    reference: [
      {
        href: '/assets/cv_martin_grellmann.pdf',
        text: 'Current CV',
        primary: true,
        Icon: ArrowDownTrayIcon,
      },
    ],
  },
  {
    tlKey: 5,
    date: '04/2004 - 12/2019',
    location: 'Ferienhaus-Vermittlung fincaferien.de GmbH, Bockenem, Germany',
    title: 'Webmaster / Web Developer',
    about: 'Web development, operations, optimization and technical infrastructure.',
    content: (
      <>
        <p>Developed and maintained websites and web applications with PHP, Drupal, HTML and CSS.</p>
        <p>Customized and extended Drupal modules, managed Linux, Samba and network environments and used Git and Jira in development workflows.</p>
        <p>Successfully increased organic traffic through targeted technical SEO strategies and enhanced website performance and user experience through usability improvements.</p>
      </>
    ),
    experiences: [
      {eiKey: 1, text: 'PHP'},
      {eiKey: 2, text: 'Drupal 7'},
      {eiKey: 3, text: 'HTML'},
      {eiKey: 4, text: 'CSS'},
      {eiKey: 5, text: 'Git'},
      {eiKey: 6, text: 'Jira'},
      {eiKey: 7, text: 'Linux'},
      {eiKey: 8, text: 'Samba'},
      {eiKey: 9, text: 'SEO/SEA'},
    ],
    reference: [
      {
        href: '/assets/cv_martin_grellmann.pdf',
        text: 'Current CV',
        primary: true,
        Icon: ArrowDownTrayIcon,
      },
    ],
  },
];

export const eduHeader: CVSubHeader = {
  title: 'Education',
  content: <></>,
  showSpacer: false,
};

export const education: TimelineItem[] = [
  {
    tlKey: 1,
    date: '06/2025 - 06/2026',
    location: 'Software Academy by intecsoft, Dresden, Germany',
    title: 'Software Architect',
    about: 'iSAQB CPSA-F Foundation Level training completed.',
    content: (
      <>
        <p>iSAQB CPSA-F Foundation Level training completed, exam planned for Q3 2026.</p>
      </>
    ),
    experiences: [],
    reference: undefined,
  },
  {
    tlKey: 2,
    date: '05/2020 - 06/2020',
    location: 'Indisoft GmbH, Leipzig, Germany',
    title: 'Agile Project Management',
    about: 'Scrum Master PSMI certification by Scrum.org.',
    content: (
      <>
        <p>Agile project management training with Scrum Master PSMI certification.</p>
      </>
    ),
    experiences: [],
    reference: undefined,
  },
  {
    tlKey: 3,
    date: '2020 - 2021',
    location: 'Indisoft GmbH, Leipzig, Germany',
    title: 'Training Full-Stack Web Developer',
    about: 'Full-Stack Web Developer certification.',
    content: (
      <>
        <p>Training covered modern web development, JavaScript, PHP, MySQL, Linux administration, content management and related best practices.</p>
      </>
    ),
    experiences: [],
    reference: undefined,
  },
  {
    tlKey: 4,
    date: '2002 - 2004',
    location: 'DAA GmbH, Hildesheim, Germany',
    title: 'Industrial Clerk',
    about: 'Industrial Clerk training.',
    content: (
      <>
        <p>Vocational education focused on business processes, commercial management and organizational foundations.</p>
      </>
    ),
    experiences: [],
    reference: undefined,
  },
];

export const addHeader: CVSubHeader = {
  title: 'Additional',
  content: <></>,
  showSpacer: false,
};

export const additionalInterests: LifeItem[] = [
  {
    liKey: 1,
    relationshipStatus: '',
    familyStatus: '',
    privateInterests: 'Focused on durable engineering quality, maintainability, architecture, refactoring and scalable business applications.',
    location: 'Available across Germany and Brazil; listed locations are Goiás, Brazil and Leipzig, Germany.',
    legal: 'German citizen with unrestricted work and residence permit in Brazil. Languages: German (native), English (professional working proficiency).',
  },
];

export const proHeader: SubHeader = {
  title: 'Projects',
  content: (
    <p>Selected project examples and technology areas from SAP, web engineering and platform modernization.</p>
  ),
  showSpacer: true,
};

export const projectItem: ProjectItem[] = [
  {
    piKey: 1,
    title: 'S/4HANA backend interface improvements',
    stack: 'ABAP Objects, CDS, OData, S/4HANA, REST',
    role: 'Senior SAP Developer',
    content: (
      <>
        <p>Improved backend API interfaces in an S/4HANA project to increase integration readiness and maintainability while supporting productive web services during hypercare in the FI environment.</p>
      </>
    ),
  },
  {
    piKey: 2,
    title: 'Business Suite Dynpro refactoring for S/4HANA readiness',
    stack: 'Classical ABAP, OOP ABAP, IS-U',
    role: 'Senior SAP Developer',
    content: (
      <>
        <p>Refactored a legacy SAP Business Suite Dynpro application into object-oriented ABAP to improve maintainability and future S/4HANA compatibility.</p>
      </>
    ),
  },
  {
    piKey: 3,
    title: 'Drupal platform modernization roadmap for fincaferien',
    stack: 'Drupal, PHP, cloud infrastructure, REST APIs',
    role: 'Technical Lead / IT Specialist',
    content: (
      <>
        <p>Designed a modernization roadmap for a legacy multi-site vacation rental platform, including API-driven integrations, service-oriented architecture and digitalization of operational workflows.</p>
      </>
    ),
  },
  {
    piKey: 4,
    title: 'SAP UI5 and Fiori applications',
    stack: 'SAP UI5, Fiori Elements, OData v2/v4, TypeScript, Jest',
    role: 'SAP Technical Consultant',
    content: (
      <>
        <p>Built UI5 Freestyle and Fiori Elements applications and contributed to side-by-side and developer extensibility scenarios in S/4HANA Public Cloud.</p>
      </>
    ),
  },
  {
    piKey: 5,
    title: 'PHP REST backend and React frontend modernization',
    stack: 'PHP, React, REST, MariaDB, Linux',
    role: 'Software Developer and Linux Administrator',
    content: (
      <>
        <p>Converted an outdated PHP application into a modern PHP REST backend and connected it to a newly developed React frontend including database modelling.</p>
      </>
    ),
  },
  {
    piKey: 6,
    title: 'Drupal-based vacation rental platform operations and SEO',
    stack: 'Drupal 7, PHP, HTML, CSS, Linux, SEO',
    role: 'Webmaster / Web Developer',
    content: (
      <>
        <p>Maintained and optimized a long-running web platform, improved traffic through technical SEO and strengthened performance and user experience through usability-oriented improvements.</p>
      </>
    ),
  },
];

export const ptfHeader: SubHeader = {
  title: 'I am proficient with the technical stack',
  content: <></>,
  showSpacer: false,
};

export const portfolioItems: PortfolioItem[] = [
  {title: 'HTML5', description: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', image: porfolioImage1},
  {title: 'CSS3', description: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', image: porfolioImage2},
  {title: 'JavaScript', description: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', image: porfolioImage3},
  {title: 'Linux', description: 'Linux systems and administration', url: 'https://ubuntu.com/server', image: porfolioImage4},
  {title: 'PHP', description: 'PHP', url: 'https://www.php.net', image: porfolioImage5},
  {title: 'Drupal', description: 'Drupal CMS', url: 'https://www.drupal.org', image: porfolioImage6},
  {title: 'MySQL', description: 'MySQL', url: 'https://www.mysql.com', image: porfolioImage7},
  {title: 'Scrum Master PSMI', description: 'Professional Scrum Master I', url: 'https://www.scrum.org/assessments/professional-scrum-master-i-certification', image: porfolioImage8},
  {title: 'PostgreSQL', description: 'PostgreSQL', url: 'https://www.postgresql.org', image: porfolioImage9},
  {title: 'Cloud Infrastructure', description: 'Cloud-oriented infrastructure thinking', url: 'https://cloud.google.com/learn/what-is-cloud-infrastructure', image: porfolioImage10},
  {title: 'Node.js', description: 'Node.js', url: 'https://nodejs.org/en', image: porfolioImage11},
  {title: 'React', description: 'React', url: 'https://react.dev', image: porfolioImage12},
  {title: 'TypeScript', description: 'TypeScript', url: 'https://www.typescriptlang.org', image: porfolioImage13},
  {title: 'SAP UI5', description: 'SAP UI5', url: 'https://sapui5.hana.ondemand.com/sdk/', image: porfolioImage14},
  {title: 'Fiori Elements', description: 'Fiori Elements', url: 'https://experience.sap.com/fiori-design-web/', image: porfolioImage15},
  {title: 'ABAP', description: 'ABAP', url: 'https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm', image: porfolioImage16},
  {title: 'SAP BTP', description: 'SAP Business Technology Platform', url: 'https://www.sap.com/products/technology-platform.html', image: porfolioImage17},
  {title: 'S/4HANA Extensibility', description: 'S/4HANA Public Cloud extensibility', url: 'https://community.sap.com/t5/enterprise-resource-planning-blogs-by-sap/sap-s-4hana-extensibility-simplified-guide-for-beginners/ba-p/13548988', image: porfolioImage18},
];

export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      label: 'SAP full-stack development',
      text: 'ABAP, CDS, OData, Fiori/UI5, RAP, CAP and SAP BTP form the core of my current specialization.',
    },
    {
      label: 'Modernization and clean core',
      text: 'I focus on S/4HANA modernization, migration support, clean-core aligned extensions and refactoring of legacy applications.',
    },
    {
      label: 'Durable engineering quality',
      text: 'Maintainability, clean code, SOLID principles, code reviews and sustainable architecture are central to the way I build software.',
    },
  ],
};

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Ways to contact me',
  items: [
    {
      type: ContactType.Email,
      text: 'martin@grellmann.eu',
      href: 'mailto:martin@grellmann.eu',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Martin Grellmann',
      href: 'https://www.linkedin.com/in/martingrellmann',
    },
    {
      type: ContactType.Github,
      text: 'Martin Grellmann / chnochx',
      href: 'https://github.com/chnochx',
    },
    {
      type: ContactType.Phone,
      text: '+49 171 3242937 / +55 62 99828-5979',
      href: 'tel:+491713242937',
    },
  ],
};

export const socialLinks: Social[] = [
  {
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/martingrellmann',
  },
  {
    label: 'Github',
    Icon: GithubIcon,
    href: 'https://github.com/chnochx',
  },
];
