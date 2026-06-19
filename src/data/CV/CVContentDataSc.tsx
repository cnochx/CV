// data/cv/items/Software Developer and Linux Administrator | Full-Stack Development, Sengicon GmbH

import {BaseAlContentDef} from '../Utils/GeneralDef';

export const CVContentDataSc: BaseAlContentDef = {
  AlCompany: 'Sengicon GmbH',
  AlCountry: 'Germany',
  AlDateEnd: '01/2022',
  AlDateStrt: '02/2021',
  AlDateCustom: true,
  AlDescription1: {
    DnHead: 'Full-stack development in an Industry 4.0 environment',
    DnId: 'description1',
    DnText: (
      <>
        <p>
          Full-stack development in an Industry 4.0 environment with React frontends, PHP backends, API integration and
          Linux-based infrastructure.
        </p>
        <p>
          Successfully converted an outdated PHP web application to a modern PHP REST backend and connected it to a
          newly created React web frontend including database modelling.
        </p>
      </>
    )
  },
  AlDescription2: {
    DnId: 'key_responsibilities_focus_areas',
    DnHead: 'Key responsibilities and focus areas',
    DnText: (
      <>
      <ul className="list-disc space-y-4 pl-6">
      <li>Developed React-based web frontends for Industry 4.0 use cases with a focus on usability and data
        visualization.</li>
        <li>Refactored and modernized existing PHP applications to improve structure, performance, and maintainability.</li>
        <li>Designed, implemented, and integrated REST-based APIs in PHP to connect frontends, backends, and external
          systems.</li>
        <li>Modeled relational databases using MySQL, MariaDB, and PostgreSQL for new and existing applications.</li>
        <li>Performed automated tests with PHPUnit and Jest to ensure code quality and reduce regressions.</li>
    </ul>
      </>
    )
  },
  AlDescription3: {
    DnId: 'achievements',
    DnHead: 'Achievements',
    DnText: (
      <>
        <ul className="list-disc space-y-4 pl-6">
        <li>Successfully transformed a legacy PHP web application into a modern REST backend with a new React frontend,
          improving maintainability, scalability, and user experience.</li>
        <li>Contributed to Industry 4.0 solutions that improved automation and data exchange between systems and
          production environments.</li>
      </ul>
      </>
    )

  },
  AlHeaderItem: {
    HdrId: 'header',
    HdrTitle: 'Software Developer and Linux Administrator | Full-Stack Development'
  },
  AlId: 'software_developer_linux_administrator_sc',
  AlKey: 4,
  AlLocation: 'Leipzig',
  AlRole: 'Contract-based',
  AlDivide: true,
  AlSkills: {
    SeiSkillsHead: 'Technicals',
    SeiId: 'technicals',
    SeiEnableSkills: true,
    SeiSkillsItems: [
      {
        AlsKey: 1,
        AlsId: 'react',
        AlsOpen: false,
        AlsName: 'React'
      },
      {
        AlsKey: 2,
        AlsId: 'javascript',
        AlsOpen: false,
        AlsName: 'JavaScript'
      },
      {
        AlsKey: 4,
        AlsId: 'php',
        AlsOpen: false,
        AlsName: 'PHP'
      },
      {
        AlsKey: 5,
        AlsId: 'rest_api',
        AlsOpen: false,
        AlsName: 'REST API'
      },
      {
        AlsKey: 6,
        AlsId: 'phpunit',
        AlsOpen: false,
        AlsName: 'PHPUnit'
      },
      {
        AlsKey: 7,
        AlsId: 'linux',
        AlsOpen: false,
        AlsName: 'Linux'
      },
      {
        AlsKey: 8,
        AlsId: 'apache',
        AlsOpen: false,
        AlsName: 'Apache'
      },
      {
        AlsKey: 9,
        AlsId: 'mysql',
        AlsOpen: false,
        AlsName: 'mySQL'
      },
      {
        AlsKey: 10,
        AlsId: 'mariadb',
        AlsOpen: false,
        AlsName: 'MariaDB'
      },
      {
        AlsKey: 11,
        AlsId: 'postgresql',
        AlsOpen: false,
        AlsName: 'PostgreSQL'
      },
      {
        AlsKey: 12,
        AlsId: 'composer',
        AlsOpen: false,
        AlsName: 'Composer'
      },
      {
        AlsKey: 12,
        AlsId: 'npm',
        AlsOpen: false,
        AlsName: 'NPM'
      },
    ],
  }
}