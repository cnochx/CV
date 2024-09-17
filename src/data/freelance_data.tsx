import {
  Freelance,
  FrlHeader,
} from './freelance_dataDef';


/**
 * Freelance Section
 */
export const frlHeader: FrlHeader = {
  title: `Freelance`,
  content: (
    <>
      <p>In principle, I am open to freelance offers. Feel free to contact me via email.</p>
    </>
  ),
  showSpacer: true,
}

export const freelance: Freelance = {
  title: 'Freelance',
  content: (
    <>
      <p className="prose prose-sm text-gray-300 sm:prose-base">I've extensive experience and skills in responsive web design, full-stack development, JavaScript backend development, database modelling, PHP development, SAP UI5 Freestyle development, ABAP development, S/4 HANA Cloud - Public Edition Extensions, and BTP - Node development, making me a strong candidate for various freelance opportunities.</p>
    </>
  ),
  highlight: 'Regular communication is important, feel free to stay in touch',
  stack: [
    {
      iKey: 1,
      text: 'SEO / SEA',
    },
    {
      iKey: 2,
      text: 'Responsive Web Design',
    },
    {
      iKey: 3,
      text: 'Full-Stack Development',
    },
    {
      iKey: 4,
      text: 'JavaScript Backend Development',
    },
    {
      iKey: 5,
      text: 'Database Modelling',
    },
    {
      iKey: 6,
      text: 'PHP Development',
    },
    {
      iKey: 7,
      text: 'Drupal',
    },
    {
      iKey: 8,
      text: 'Wordpresss',
    },
    {
      iKey: 9,
      text: 'SAP UI5 Freestyle Development',
    },
    {
      iKey: 10,
      text: 'ABAP Development',
    },
    {
      iKey: 11,
      text: 'S/4 HANA Cloud - Public Edition Extensions',
    },
    {
      iKey: 12,
      text: 'BTP - Node Development',
    },
    {
      iKey: 13,
      text: 'Project-management in Scrum',
    },
  ]
};
