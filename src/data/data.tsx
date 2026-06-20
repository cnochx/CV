
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import testimonialImage from '../images/testimonial.webp';
import {
  ContactSection,
  ContactType,
  Social,
  SubHeader,
  TestimonialSection,
} from './dataDef';

export const ptfHeader: SubHeader = {
  title: 'I am proficient with the technical stack',
  content: <></>,
  showSpacer: false,
};



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



