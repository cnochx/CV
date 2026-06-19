// Industrial Clerk – DAA GmbH

import {BaseAlContentDef} from '../Utils/GeneralDef';


export const EductionContentDataIcDaa: BaseAlContentDef = {
  AlKey: 4,
  AlId: 'industrial_clerk_daa',
  AlHeaderItem: {
    HdrId: 'title',
    HdrSubId: 'sub_title',
    HdrTitle: 'Industrial Clerk',
    HdrSubTitle: 'DAA GmbH',
  },
  AlDescription1: {
    DnId: 'industrial_clerk_apprenticeship',
    DnHead: 'Industrial Clerk Apprenticeship',
    DnText: (
      <>
        <p>Two‑year vocational apprenticeship as an Industrial Clerk in Hildesheim, providing a solid foundation in
          business processes, commercial management, and office administration. The program covered fundamentals such as
          accounting, cost and performance calculation, procurement, order processing, and customer communication,
          giving me a practical understanding of how companies operate and make decisions. This early business education
          has shaped my entire career by enabling me to connect technical solutions with real commercial requirements and
          organizational structures.</p>
      </>
    ),
  },
  AlLocation: 'Hildesheim',
  AlCountry: 'Germany',
  AlDateStrt: '08/2002',
  AlDateEnd: '04/2004',
  AlDateCustom: true,
  AlRole: 'Apprenticeship, Certification',
  AlDivide: false,
};