// src/data/Education/EducationSection.ts

import WoodImage from '../../images/wood.webp';
import {BaseIndexContentDef} from '../utilComp/GeneralDef';
import {EductionContentDataApIds} from './EductionContentDataApIds';
import {EductionContentDataIcDaa} from './EductionContentDataIcDaa';
import {EductionContentDataSaIs} from './EductionContentDataSaIs';
import {EductionContentDataTfswdIds} from './EductionContentDataTfswdIds';


export const EducationSectionData: BaseIndexContentDef = {
  IxHeader: {
    HdrTitle: 'Education',
    HdrId: 'title',
    HdrSubId: 'sub_title',
    HdrSubTitle: 'Martin Grellmann'
  },

  IxContent: [
    EductionContentDataSaIs,
    EductionContentDataApIds,
    EductionContentDataTfswdIds,
    EductionContentDataIcDaa
  ],

  IxBottomSuffix: {
    SxId: 'bottom',
    SxKey: 1,
    SxSuffix: (
      <>
        <p>Self-educated engineer with a strong engineering mindset, shaped by real-world building, constant experimentation
          and deep technical curiosity. My expertise combines modern web development with SAP full-stack engineering,
          spanning React, Next.js and TypeScript on the frontend, php in the backend.</p>
        <p>SAPUI5, Fiori, OData, CDS and ABAP in enterprise
          environments. I focus on creating scalable, high-quality applications that unite clean architecture, thoughtful
          UX and reliable implementation. The result is development that is both technically rigorous and genuinely useful
          for users and businesses.</p>
      </>
    )
  },

  IxImages: [
    {
      ImgKey: 1,
      ImgId: 'top',
      ImgSrc: WoodImage,
    },
    {
      ImgKey: 1,
      ImgId: 'bottom',
      ImgSrc: WoodImage,
    }
  ]
};