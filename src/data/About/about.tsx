import {AcademicCapIcon, CalendarIcon, FlagIcon, SparklesIcon} from '@heroicons/react/20/solid';
import {BuildingOffice2Icon, MapIcon} from '@heroicons/react/24/outline';

import {AboutDataDef} from './aboutDef';

const mainImage = '/images/martin_grellmann.jpg';

/**
 * Apout section
 */


export const AboutData: AboutDataDef = {
  header: '',
  profileImageSrc: mainImage,
  description: ``,
  aboutItems: [
    {label: 'Location',
      text: 'Goiás, Brazil and Leipzig, Germany',
      Icon: MapIcon},
    {label: 'Nationality',
      text: 'German citizen / unrestricted work and residence permit in Brazil',
      Icon: FlagIcon},
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
      text: 'Clean Code, SOLID, refactoring, code reviews, sustainable architecture, problem solving',
      Icon: SparklesIcon,
    },
    {label: 'Education',
      text: 'Industrial Clerk',
      Icon: BuildingOffice2Icon},
  ],
  imagePublicURL: '/images/martin_grellmann.jpg',
  imagePublicAlt: 'Martin Grellmann, Senior Full-Stack Engineer',
};

export default AboutData;
