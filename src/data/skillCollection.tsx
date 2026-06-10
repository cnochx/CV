import {SkillsCollection} from './skillCollectionDef';

/**
 * Structured skill collection data used to render the skills section.
 *
 * Dependencies:
 * - Uses the `SkillsCollection` type as the structural contract
 *   for all skill groups and nested skill entries.
 *
 * Operations:
 * - Groups skills into themed top-level categories such as SAP,
 *   web engineering, platform work, and methods.
 * - Provides stable identifiers for sections and skill entries.
 * - Stores experience level, years of experience, and role origins
 *   for each listed skill.
 * - Acts as the single source of truth for rendered skill cards
 *   and nested skill details in the UI.
 *
 * Content overview:
 * - `SAP development / Architecture` covers ABAP, CDS, OData, UI5, BTP, RAP/CAP, S/4HANA modernization, and Clean Core.
 * - `Web / API engineering` covers JavaScript, TypeScript, React, Node.js, REST APIs, Next.js, Express.js, and Jest.
 * - `PHP / Drupal / Platforms` covers PHP, Drupal, HTML/CSS, package managers, databases, Linux, LAMP, and cloud infrastructure.
 * - `Methods / Quality` covers Clean Code, SOLID, refactoring, reviews, Git workflows, project tools, agile collaboration, and usability-related topics.
 *
 * @constant {SkillsCollection[]}
 */
const SkillsCollectionData: SkillsCollection[] = [
  {
    Head: 'SAP development / Architecture',
    Id: 'sap_development_architecture',
    SgKey: 1,
    Skills: [
      {
        SKey: 1,
        Name: 'ABAP / ABAP Objects',
        IdSub: 'abap_abap_objects',
        ExpLevel: 9,
        Years: 4.5,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Senior SAP Developer'},
          {OKey: 2, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
        ],
      },
      {
        SKey: 2,
        Name: 'ABAP CDS',
        IdSub: 'abap_cds',
        ExpLevel: 8,
        Years: 4.5,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Senior SAP Developer'},
          {OKey: 2, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
        ],
      },
      {
        SKey: 3,
        Name: 'OData v2 / v4',
        IdSub: 'odata_v2_v4',
        ExpLevel: 8,
        Years: 3,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Senior SAP Developer'},
          {OKey: 2, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
        ],
      },
      {
        SKey: 4,
        Name: 'SAP UI5 / Fiori',
        IdSub: 'sap_ui5_fiori',
        ExpLevel: 8,
        Years: 3,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
        ],
      },
      {
        SKey: 5,
        Name: 'SAP BTP',
        IdSub: 'sap_btp',
        ExpLevel: 7,
        Years: 4.5,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Senior SAP Developer'},
          {OKey: 2, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
        ],
      },
      {
        SKey: 6,
        Name: 'RAP / CAP',
        IdSub: 'rap_cap',
        ExpLevel: 7,
        Years: 2.5,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
        ],
      },
      {
        SKey: 7,
        Name: 'S/4HANA modernization',
        IdSub: 's-4hana_modernization',
        ExpLevel: 8,
        Years: 4.5,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Senior SAP Developer'},
          {OKey: 2, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
        ],
      },
      {
        SKey: 8,
        Name: 'Clean Core',
        IdSub: 'clean_core',
        ExpLevel: 9,
        Years: 4.5,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Senior SAP Developer'},
          {OKey: 2, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
        ],
      },
    ],
  },
  {
    Head: 'Web / API engineering',
    Id: 'web_api_engineering',
    SgKey: 2,
    Skills: [
      {
        SKey: 1,
        Name: 'JavaScript',
        IdSub: 'javascript',
        ExpLevel: 9,
        Years: 12,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 2, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
          {OKey: 3, Origin: 'Software Developer and Linux Administrator'},
          {OKey: 4, Origin: 'Webmaster / Web Developer'},
          {OKey: 5, Origin: 'private Interest'},
        ],
      },
      {
        SKey: 2,
        Name: 'TypeScript',
        IdSub: 'typescript',
        ExpLevel: 8,
        Years: 5,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
          {OKey: 2, Origin: 'Software Developer and Linux Administrator'},
          {OKey: 3, Origin: 'private Interest'},
        ],
      },
      {
        SKey: 3,
        Name: 'React',
        IdSub: 'react',
        ExpLevel: 8,
        Years: 5,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Software Developer and Linux Administrator'},
          {OKey: 2, Origin: 'private Interest'},
        ],
      },
      {
        SKey: 4,
        Name: 'Node.js',
        IdSub: 'node_js',
        ExpLevel: 7,
        Years: 5,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Software Developer and Linux Administrator'},
          {OKey: 2, Origin: 'private Interest'},
        ],
      },
      {
        SKey: 5,
        Name: 'REST APIs',
        IdSub: 'rest_apis',
        ExpLevel: 9,
        Years: 7,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Senior SAP Developer'},
          {OKey: 2, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 3, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
          {OKey: 4, Origin: 'Software Developer and Linux Administrator'},
          {OKey: 5, Origin: 'Webmaster / Web Developer'},
        ],
      },
      {
        SKey: 6,
        Name: 'Next.js',
        IdSub: 'next_js',
        ExpLevel: 7,
        Years: 4,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Certification of Full-Stack Web Developer'},
          {OKey: 2, Origin: 'private Interest'},
        ],
      },
      {
        SKey: 7,
        Name: 'Express.js',
        IdSub: 'express_js',
        ExpLevel: 6,
        Years: 2,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Certification of Full-Stack Web Developer'},
          {OKey: 2, Origin: 'private Interest'},
        ],
      },
      {
        SKey: 8,
        Name: 'Jest',
        IdSub: 'jest',
        ExpLevel: 7,
        Years: 3,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
          {OKey: 2, Origin: 'Software Developer and Linux Administrator'},
        ],
      },
    ],
  },
  {
    Head: 'PHP / Drupal / Platforms',
    Id: 'php_drupal_platforms',
    SgKey: 3,
    Skills: [
      {
        SKey: 1,
        Name: 'PHP',
        IdSub: 'php',
        ExpLevel: 9,
        Years: 16,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 2, Origin: 'Software Developer and Linux Administrator'},
          {OKey: 3, Origin: 'Certification of Full-Stack Web Developer'},
          {OKey: 4, Origin: 'Webmaster / Web Developer'},
        ],
      },
      {
        SKey: 2,
        Name: 'Drupal',
        IdSub: 'drupal',
        ExpLevel: 9,
        Years: 16,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 2, Origin: 'Webmaster / Web Developer'},
        ],
      },
      {
        SKey: 3,
        Name: 'HTML / CSS',
        IdSub: 'html_css',
        ExpLevel: 9,
        Years: 22,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 2, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
          {OKey: 2, Origin: 'Certification of Full-Stack Web Developer'},
          {OKey: 2, Origin: 'Webmaster / Web Developer'},
          {OKey: 3, Origin: 'private Interest'},
        ],
      },
      {
        SKey: 4,
        Name: 'Composer / NPM / Yarn',
        IdSub: 'composer_npm_yarn',
        ExpLevel: 8,
        Years: 7,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 2, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
          {OKey: 3, Origin: 'Software Developer and Linux Administrator'},
          {OKey: 4, Origin: 'Webmaster / Web Developer'},
        ],
      },
      {
        SKey: 5,
        Name: 'MySQL / MariaDB / PostgreSQL',
        IdSub: 'mysql_mariadb_postgresql',
        ExpLevel: 8,
        Years: 8,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 2, Origin: 'Software Developer and Linux Administrator'},
          {OKey: 3, Origin: 'Webmaster / Web Developer'},
        ],
      },
      {
        SKey: 6,
        Name: 'Linux Administration',
        IdSub: 'linux_administration',
        ExpLevel: 7,
        Years: 9,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 2, Origin: 'Software Developer and Linux Administrator'},
          {OKey: 3, Origin: 'Webmaster / Web Developer'},
        ],
      },
      {
        SKey: 7,
        Name: 'Apache / LAMP',
        IdSub: 'apache_lamp',
        ExpLevel: 7,
        Years: 8,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 2, Origin: 'Software Developer and Linux Administrator'},
          {OKey: 3, Origin: 'Webmaster / Web Developer'},
        ],
      },
      {
        SKey: 8,
        Name: 'Cloud infrastructure',
        IdSub: 'cloud_infrastructure',
        ExpLevel: 7,
        Years: 2,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 2, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
        ],
      },
    ],
  },
  {
    Head: 'Methods / Quality',
    Id: 'methods_quality',
    SgKey: 4,
    Skills: [
      {
        SKey: 1,
        Name: 'Clean Code',
        IdSub: 'clean_code',
        ExpLevel: 9,
        Years: 6,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Senior SAP Developer'},
          {OKey: 2, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
          {OKey: 3, Origin: 'Software Developer and Linux Administrator'},
        ],
      },
      {
        SKey: 2,
        Name: 'SOLID principles',
        IdSub: 'solid_principles',
        ExpLevel: 8,
        Years: 6,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 1, Origin: 'Software Developer and Linux Administrator'},
          {OKey: 3, Origin: 'Webmaster / Web Developer'},
        ],
      },
      {
        SKey: 3,
        Name: 'Refactoring',
        IdSub: 'refactoring',
        ExpLevel: 9,
        Years: 8,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Senior SAP Developer'},
          {OKey: 2, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 3, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
          {OKey: 4, Origin: 'Software Developer and Linux Administrator'},
          {OKey: 5, Origin: 'Webmaster / Web Developer'},
        ],
      },
      {
        SKey: 4,
        Name: 'Code Reviews',
        IdSub: 'code_reviews',
        ExpLevel: 7,
        Years: 4,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Senior SAP Developer'},
          {OKey: 2, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
        ],
      },
      {
        SKey: 5,
        Name: 'Git / Gitflow',
        IdSub: 'git_gitflow',
        ExpLevel: 9,
        Years: 14,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 2, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
          {OKey: 3, Origin: 'Software Developer and Linux Administrator'},
          {OKey: 4, Origin: 'Webmaster / Web Developer'},
        ],
      },
      {
        SKey: 6,
        Name: 'Jira / OpenProject',
        IdSub: 'jira_openproject',
        ExpLevel: 8,
        Years: 11,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 2, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
          {OKey: 3, Origin: 'Software Developer and Linux Administrator'},
          {OKey: 4, Origin: 'Webmaster / Web Developer'},
        ],
      },
      {
        SKey: 7,
        Name: 'Scrum / Agile collaboration',
        IdSub: 'scrum_agile_collaboration',
        ExpLevel: 7,
        Years: 5,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 2, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
          {OKey: 3, Origin: 'Certification of Scrum Master PSMI'},
        ],
      },
      {
        SKey: 8,
        Name: 'Problem solving',
        IdSub: 'problem_solving',
        ExpLevel: 9,
        Years: 5,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Senior SAP Developer'},
          {OKey: 2, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 3, Origin: 'SAP Technical Consultant, SAP Full-Stack Development'},
          {OKey: 4, Origin: 'Software Developer and Linux Administrator'},
          {OKey: 5, Origin: 'Webmaster / Web Developer'},
          {OKey: 5, Origin: 'Certification of Full-Stack Web Developer'},
        ],
      },
      {
        SKey: 9,
        Name: 'Usability',
        IdSub: 'usability',
        ExpLevel: 7,
        Years: 5,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 5, Origin: 'Webmaster / Web Developer'},
        ],
      },
      {
        SKey: 10,
        Name: 'SEO / GEO',
        IdSub: 'seo_geo',
        ExpLevel: 10,
        Years: 5,
        GroupOfOrigin: [
          {OKey: 1, Origin: 'Technical Lead / IT Specialist'},
          {OKey: 2, Origin: 'Webmaster / Web Developer'},
          {OKey: 3, Origin: 'Certification of Full-Stack Web Developer'},
        ],
      },
    ],
  },
];

export default SkillsCollectionData;