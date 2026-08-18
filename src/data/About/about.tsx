
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

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
      text: 'SAP S/4HANA & BTP development, ABAP refactoring, AI-assisted legacy modernization, travel platforms, full-stack web',
      Icon: BuildingOffice2Icon,
    },
    {
      label: 'Experience',
      text: '20+ years software engineering and full-stack web development, 4+ years SAP development, 15 years in travel and booking platforms',
      Icon: CalendarIcon,
    },
    {
      label: 'Architecture',
      text: 'iSAQB CPSA-F Foundation Level training completed, exam planned for Q4 2026',
      Icon: AcademicCapIcon,
    },
    {label: 'Certifications', text: 'Professional Scrum Master I (Scrum.org), Full-Stack Web Developer certification', Icon: AcademicCapIcon},
    {
      label: 'Methods',
      text: 'Clean Code, SOLID, refactoring, code reviews, sustainable architecture, AI-assisted code analysis with manual verification',
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
