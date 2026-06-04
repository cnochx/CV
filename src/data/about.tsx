import {AcademicCapIcon, CalendarIcon, FlagIcon, SparklesIcon} from '@heroicons/react/20/solid';
import {BuildingOffice2Icon, MapIcon} from '@heroicons/react/24/outline';

import {about} from './aboutDef';

const mainImage = '/images/martin_grellmann.jpg';

/**
 * About section
 */
export const aboutData: about = {
  header: 'About me',
  profileImageSrc: mainImage,
  description: `German citizen with unrestricted work and residence permit in Brazil. Senior software engineer with 20+ years of experience in full-stack web development and recent specialization in modern SAP full-stack development, including SAP BTP, S/4HANA modernization, ABAP, CDS, OData, Fiori/UI5 and API integration.`,
  aboutItems: [
    {label: 'Location', text: 'Goiás, Brazil and Leipzig, Germany', Icon: MapIcon},
    {label: 'Nationality', text: 'German citizen / unrestricted work and residence permit in Brazil', Icon: FlagIcon},
    {
      label: 'Specialization',
      text: 'Senior Full-Stack Engineer, SAP BTP, S/4HANA, enterprise APIs, clean core',
      Icon: BuildingOffice2Icon,
    },
    {
      label: 'Experience',
      text: '20+ years software engineering and full-stack development, 5+ years SAP Development',
      Icon: CalendarIcon,
    },
    {
      label: 'Architecture',
      text: 'iSAQB CPSA-F Foundation Level training completed, exam planned for Q3 2026',
      Icon: AcademicCapIcon,
    },
    {label: 'Certifications', text: 'Scrum Master PSMI, Full-Stack Web Developer certification', Icon: AcademicCapIcon},
    {
      label: 'Methods',
      text: 'Clean Code, SOLID, refactoring, code reviews, sustainable architecture',
      Icon: SparklesIcon,
    },
    {label: 'Education', text: 'Industrial Clerk', Icon: BuildingOffice2Icon},
  ],
  imagePublicURL: '/images/martin_grellmann.jpg',
  imagePublicAlt: 'Martin Grellmann, Senior Full-Stack Engineer',
};
