import {StaticImageData} from 'next/image';


interface HeaderData {
  HeroMain: HeaderItem[];
  AboutMain: HeaderItem[];
  ContractorMain: HeaderItem[];
  ContractorSolve: HeaderItem[];
  ContractorFocus: HeaderItem[];
  ContractorDifferent: HeaderItem[];
  SkillsMain: HeaderItem[];
  SkillsSapDev: HeaderItem[];
  SkillsWebDev: HeaderItem[];
  SkillsDrupalDev: HeaderItem[];
  SkillsMethods: HeaderItem[];
  CvMain: HeaderItem[];
  CvIs: HeaderItem[];
  CvFinca: HeaderItem[];
  CvBa: HeaderItem[];
  CvSc: HeaderItem[];
  CvFf: HeaderItem[];
  EducationMain: HeaderItem[];
  EducationSa: HeaderItem[];
  EducationSm: HeaderItem[];
  EducationWd: HeaderItem[];
  EducationIc: HeaderItem[];
  ContactMain: HeaderItem[];
  ProjectMain?: HeaderItem[];
}
export default HeaderData;


export interface HeaderItem {
  Variant?: ThemeVariant
  Title: string;
  SubTitle?: string;
  Description: JSX.Element;
  ImageSrc?: string | StaticImageData;
  ShowSpacer: boolean;
}

export type ThemeVariant =
  | 'dark'
  | 'bright'
  | 'dark-pill'
  | 'dark-pill-bg'
  | 'bright-pill'
  | 'bright-pill-bg';