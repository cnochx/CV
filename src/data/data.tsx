
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
import testimonialImage from '../images/testimonial.webp';
import {
  ContactSection,
  ContactType,
  PortfolioItem,
  Social,
  SubHeader,
  TestimonialSection,
} from './dataDef';

export const ptfHeader: SubHeader = {
  title: 'I am proficient with the technical stack',
  content: <></>,
  showSpacer: false,
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'HTML5',
    description: 'HTML5',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    image: porfolioImage1,
  },
  {title: 'CSS3', description: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', image: porfolioImage2},
  {
    title: 'JavaScript',
    description: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    image: porfolioImage3,
  },
  {
    title: 'Linux',
    description: 'Linux systems and administration',
    url: 'https://ubuntu.com/server',
    image: porfolioImage4,
  },
  {title: 'PHP', description: 'PHP', url: 'https://www.php.net', image: porfolioImage5},
  {title: 'Drupal', description: 'Drupal CMS', url: 'https://www.drupal.org', image: porfolioImage6},
  {title: 'MySQL', description: 'MySQL', url: 'https://www.mysql.com', image: porfolioImage7},
  {
    title: 'Scrum Master PSMI',
    description: 'Professional Scrum Master I',
    url: 'https://www.scrum.org/assessments/professional-scrum-master-i-certification',
    image: porfolioImage8,
  },
  {title: 'PostgreSQL', description: 'PostgreSQL', url: 'https://www.postgresql.org', image: porfolioImage9},
  {
    title: 'Cloud Infrastructure',
    description: 'Cloud-oriented infrastructure thinking',
    url: 'https://cloud.google.com/learn/what-is-cloud-infrastructure',
    image: porfolioImage10,
  },
  {title: 'Node.js', description: 'Node.js', url: 'https://nodejs.org/en', image: porfolioImage11},
  {title: 'React', description: 'React', url: 'https://react.dev', image: porfolioImage12},
  {title: 'TypeScript', description: 'TypeScript', url: 'https://www.typescriptlang.org', image: porfolioImage13},
  {title: 'SAP UI5', description: 'SAP UI5', url: 'https://sapui5.hana.ondemand.com/sdk/', image: porfolioImage14},
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
    description: 'SAP Business Technology Platform',
    url: 'https://www.sap.com/products/technology-platform.html',
    image: porfolioImage17,
  },
  {
    title: 'S/4HANA Extensibility',
    description: 'S/4HANA Public Cloud extensibility',
    url: 'https://community.sap.com/t5/enterprise-resource-planning-blogs-by-sap/sap-s-4hana-extensibility-simplified-guide-for-beginners/ba-p/13548988',
    image: porfolioImage18,
  },
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



