// data/cv/items/ebmaster / Web Developer | Full-stack Development, Ferienhaus-Vermittlung fincaferien.de GmbH

import {BaseAlContentDef} from '../Utils/GeneralDef';

export const CVContentDataFf: BaseAlContentDef = {
  AlCompany: 'Ferienhaus-Vermittlung fincaferien.de GmbH',
  AlCountry: 'Germany',
  AlDateEnd: '12/2019',
  AlDateStrt: '04/2024',
  AlDateCustom: true,
  AlDescription1: {
    DnHead: 'Web development, operations, optimization and technical infrastructure.',
    DnId: 'description1',
    DnText: (
      <>
        <p>Long-term responsibility for full-stack web development, operations, optimization and technical infrastructure.</p>
        <p>
          Developed and maintained websites and web applications with PHP, Drupal, HTML and CSS, managed Linux and
          network environments and improved traffic, performance and usability through technical SEO and
          usability-focused optimization.
        </p>
      </>
    )
  },
  AlDescription2: {
    DnHead: 'Key responsibilities and focus areas',
    DnId: 'key_responsibilities_and_focus_areas',
    DnText: (
      <>
        <ul className="list-disc space-y-4 pl-6">
          <li>Developed and maintained websites using PHP, Drupal7, HTML, and CSS.</li>
          <li>Customized and extended Drupal modules to support business-specific requirements and workflows.</li>
          <li>Administered Linux systems and managed Samba and network environments for stable, secure operations.</li>
          <li>Used Git and Jira in development and project workflows to support collaboration, versioning, and issue tracking.</li>
          <li>Performed technical SEO, website audits, and performance optimization to improve search visibility and loading times.</li>
          <li>Analyzed usage data and derived technical improvements to enhance usability, conversion, and user experience</li>
        </ul>
      </>
    )
  },
  AlDescription3: {
    DnHead: 'Achievements',
    DnId: 'achievements',
    DnText: (
      <>
        <ul className="list-disc space-y-4 pl-6">
          <li>Increased organic traffic through targeted technical SEO measures, performance tuning, and content‑friendly platform improvements.</li>
          <li>Improved performance and usability via structured optimization initiatives, including applying usability methods such as those recommended by Jakob Nielsen.</li>
        </ul>
      </>
    )
  },
  AlHeaderItem: {
    HdrId: 'title',
    HdrTitle: 'Webmaster / Web Developer | Full-stack Development'
  },
  AlId: 'webmaster_web_developer_ff',
  AlKey: 6,
  AlLocation: 'Bockenem',
  AlRole: 'Contract-based',
  AlDivide: true,
  AlSkills: {
    SeiSkillsHead: 'Technicals',
    SeiId: 'technicals',
    SeiEnableSkills: true,
    SeiSkillsItems: [
      {
        AlsKey: 1,
        AlsId: 'html',
        AlsOpen: false,
        AlsName: 'HTML'
      },
      {
        AlsKey: 1,
        AlsId: 'css',
        AlsOpen: false,
        AlsName: 'CSS'
      },
      {
        AlsKey: 1,
        AlsId: 'php',
        AlsOpen: false,
        AlsName: 'PHP'
      },
      {
        AlsKey: 1,
        AlsId: 'drupal7',
        AlsOpen: false,
        AlsName: 'Drupal7'
      },
      {
        AlsKey: 2,
        AlsId: 'git',
        AlsOpen: false,
        AlsName: 'Git'
      },
      {
        AlsKey: 3,
        AlsId: 'jira',
        AlsOpen: false,
        AlsName: 'Jira'
      },
      {
        AlsKey: 4,
        AlsId: 'linux',
        AlsOpen: false,
        AlsName: 'Linux'
      },
      {
        AlsKey: 5,
        AlsId: 'samba',
        AlsOpen: false,
        AlsName: 'Samba'
      },
      {
        AlsKey: 6,
        AlsId: 'seo_sea',
        AlsOpen: false,
        AlsName: 'SEO/SEA'
      }
    ]
  }
}



