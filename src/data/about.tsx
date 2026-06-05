import {AcademicCapIcon, CalendarIcon, FlagIcon, SparklesIcon} from '@heroicons/react/20/solid';
import {BuildingOffice2Icon, MapIcon} from '@heroicons/react/24/outline';

import {About, AbtHeader} from './aboutDef';

const mainImage = '/images/martin_grellmann.jpg';

/**
 * ApoutPre section
 */

const AbtHeader: AbtHeader = {
  title: `About Martin Grellmann, Senior Full-Stack Engineer`,
  description: (
    <>
      <p>Who I am – German citizen with unrestricted work and residence permit in Brazil. Architect, Modernizer,
      Consultant - Senior software engineer with 20+ years of experience in full-stack web development and recent specialization
      in modern SAP full-stack development, including SAP BTP, S/4HANA modernization, ABAP, CDS, OData, Fiori/UI5 and API integration.</p>

      <p>On the web side, I’ve spent many years building and running Drupal sites, handling migrations, performance tuning
        and technical SEO/GEO to keep organic traffic and conversions stable during change.</p>
    </>
  )
};
export default AbtHeader;

export const AboutData: About = {
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
