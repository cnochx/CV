import {HomePageMeta} from './HomepageDataDef';

export const homePageMeta: HomePageMeta = {
  title: 'Martin Grellmann | Senior Full-Stack Engineer | SAP BTP | S/4HANA | Enterprise APIs',
  description:
    'Online CV of Martin Grellmann, Senior Full-Stack Engineer with 20+ years of experience in software engineering and a strong focus on SAP BTP, S/4HANA modernization, ABAP, CDS, OData, Fiori/UI5, enterprise API integration and clean-core aligned development.',
  image: 'https://www.grellmann.app/images/profilepic.jpg',
  url: 'https://www.grellmann.app',
  ogImg: 'https://www.grellmann.app/images/profilepic_og.jpg',
  ogImgType: 'image/jpeg',
  ogImgWidth: '1200',
  ogImgHeight: '630',
  ogImgAlt: 'Martin Grellmann, Senior Full-Stack Engineer',
  ogType: 'profile',
  ogLinkPreView: 'Martin Grellmann CV',
  twitterCardType: 'summary_large_image',
  twitterCreator: '@martinRudra',

  structuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': 'https://www.grellmann.app/#profilepage',
        url: 'https://www.grellmann.app/',
        name: 'Martin Grellmann — Senior Full-Stack Engineer & SAP Technical Consultant',
        dateModified: '2025-01-15T00:00:00+01:00',
        mainEntity: {'@id': 'https://www.grellmann.app/#person'},
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.grellmann.app/#website',
        url: 'https://www.grellmann.app/',
        name: 'Martin Grellmann',
        publisher: {'@id': 'https://www.grellmann.app/#person'},
        inLanguage: 'en',
      },
      {
        '@type': 'Person',
        '@id': 'https://www.grellmann.app/#person',
        name: 'Martin Grellmann',
        alternateName: 'Martin Rudra Grellmann',
        url: 'https://www.grellmann.app/',
        image: {
          '@type': 'ImageObject',
          url: 'https://www.grellmann.app/images/martin_grellmann.jpg',
          caption: 'Martin Grellmann, Senior SAP BTP Developer and Full-Stack Engineer',
        },
        jobTitle: 'Senior Full-Stack Engineer & SAP Technical Consultant',
        description:
          'Senior Full-Stack Engineer and SAP Technical Consultant with 20+ years experience. Expert in SAP BTP, S/4HANA, ABAP, Fiori/UI5, CDS, OData, clean-core. Based in Leipzig, Germany.',
        knowsAbout: [
          'SAP BTP',
          'SAP S/4HANA',
          'ABAP',
          'SAP Fiori',
          'SAP UI5',
          'SAP CDS Views',
          'OData Services',
          'SAP Clean Core',
          'SAP CAP',
          'SAP RAP',
          'Enterprise APIs',
          'Full-Stack Web Development',
          'JavaScript',
          'TypeScript',
          'React',
          'Next.js',
          'PHP',
          'Drupal',
          'MySQL',
          'Linux Administration',
          'Agile',
          'Scrum',
        ],
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'iSAQB Certified Professional for Software Architecture (CPSA-F)',
            credentialCategory: 'Professional Certification',
            recognizedBy: {
                            '@type': 'Organization',
                            name: 'iSAQB'},
          },
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Professional Scrum Master I (PSM I)',
            credentialCategory: 'Professional Certification',
            url: 'https://scrum.org/certificates/542876',
            recognizedBy: {
                            '@type': 'Organization',
                            name: 'Scrum.org',
                            url: 'https://scrum.org',
            },
          },
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Full Stack Web Developer',
            credentialCategory: 'Vocational Training Certificate',
            recognizedBy: {
                            '@type': 'Organization',
                            name: 'indisoft GmbH'
            },
          },
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'intecsoft group',
          url: 'https://www.intecsoft.de',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Leipzig',
          addressRegion: 'Saxony',
          addressCountry: 'DE',
        },
        nationality: 'German',
        sameAs: [
          'https://www.linkedin.com/in/martingrellmann',
          'https://twitter.com/martinRudra',
          'https://martin-grellmann.de',
        ],
      },
    ],
  },
};