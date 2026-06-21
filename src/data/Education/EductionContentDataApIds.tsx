// Agile Project Management – Indisoft GmbH

import {BaseAlContentDef} from '../utilComp/GeneralDef';

export const EductionContentDataApIds: BaseAlContentDef = {
  AlKey: 2,
  AlId: 'agile-project-management_is',
  AlHeaderItem: {
    HdrId: 'title',
    HdrSubId: 'sub_title',
    HdrTitle: 'Agile Project Management (Scrum)',
    HdrSubTitle: 'Indisoft GmbH',
  },
  AlDescription1: {
    DnId: 'intensive_agile_project_management_training',
    DnHead: 'Intensive agile project management training',
    DnText: (
      <>
        <p>Intensive agile project management (Scrum) training at Indisoft GmbH (Leipzig) with focus on Scrum and Kanban
          (05/2020–06/2020). Covered Scrum roles, events, and artifacts, agile planning and scaling,
          Scrum simulations in practice, and Kanban principles such as WIP limits and continuous improvement.
          Successfully completed the program and obtained the Professional Scrum Master I (PSM I) certification
          from Scrum.org on June 8, 2020.</p>
      </>
    )
  },
  AlLocation: 'Leipzig',
  AlCountry: 'Germany',
  AlDateStrt: '05/2020',
  AlDateEnd: '06/2020',
  AlDateCustom: true,
  AlRole: 'Training, Certification',
  AlDivide: true,
}