import type {Graph} from 'schema-dts';

import {HomepageMetaDataDef} from './HomepageMetaDataDef';



const structuredData: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': 'https://www.grellmann.app/#profilepage',
      url: 'https://www.grellmann.app/',
      name: 'Martin Grellmann — Senior Full-Stack Engineer & SAP Technical Consultant',
      description:
        'Online CV of Martin Grellmann, Senior Full-Stack Engineer with 20+ years of experience in software engineering and a strong focus on SAP BTP, S/4HANA modernization, ABAP, CDS, OData, Fiori/UI5, enterprise API integration and clean-core aligned development.',
      dateModified: '2026-06-20T00:00:00+01:00',
      inLanguage: 'en',
      isPartOf: {'@id': 'https://www.grellmann.app/#website'},
      mainEntity: {'@id': 'https://www.grellmann.app/#person'},
      about: {'@id': 'https://www.grellmann.app/#person'},
      primaryImageOfPage: {'@id': 'https://www.grellmann.app/#primaryimage'},
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.grellmann.app/#website',
      url: 'https://www.grellmann.app/',
      name: 'Martin Grellmann',
      description:
        'Personal website and online CV of Martin Grellmann, Senior Full-Stack Engineer & SAP Technical Consultant.',
      inLanguage: 'en',
      publisher: {'@id': 'https://www.grellmann.app/#person'},
    },
    {
      '@type': 'ImageObject',
      '@id': 'https://www.grellmann.app/#primaryimage',
      url: 'https://www.grellmann.app/images/martin_grellmann.jpg',
      contentUrl: 'https://www.grellmann.app/images/martin_grellmann.jpg',
      caption: 'Martin Grellmann, Senior SAP BTP Developer and Full-Stack Engineer',
    },
    {
      '@type': 'Person',
      '@id': 'https://www.grellmann.app/#person',
      name: 'Martin Grellmann',
      alternateName: 'Martin Rudra Grellmann',
      url: 'https://www.grellmann.app/',
      image: {'@id': 'https://www.grellmann.app/#primaryimage'},
      jobTitle: 'Senior Full-Stack Engineer & SAP Technical Consultant',
      description:
        'Senior Full-Stack Engineer and SAP Technical Consultant with 20+ years experience. Expert in SAP BTP, S/4HANA, ABAP, Fiori/UI5, CDS, OData, clean-core. Based in Leipzig, Germany.',
      homeLocation: {
        '@type': 'Place',
        name: 'Brazil',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Alto Paraíso de Goiás',
          addressRegion: 'Goiás',
          addressCountry: 'BR',
        },
      },
      workLocation: {
        '@type': 'Place',
        name: 'Leipzig, Saxony, Germany',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Leipzig',
          addressRegion: 'Saxony',
          addressCountry: 'DE',
        },
      },
      nationality: 'German',
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
            name: 'iSAQB',
          },
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
            name: 'indisoft GmbH',
          },
        },
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'intecsoft group',
        url: 'https://www.intecsoft.de',
      },
      sameAs: [
        'https://www.linkedin.com/in/martingrellmann',
        'https://twitter.com/martinRudra',
        'https://martin-grellmann.de',
      ],
      mainEntityOfPage: {'@id': 'https://www.grellmann.app/#profilepage'},
      subjectOf: {'@id': 'https://www.grellmann.app/#profilepage'},
    },
  ],
};

export const HomePageMetaData: HomepageMetaDataDef = {
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
  structuredData,
};