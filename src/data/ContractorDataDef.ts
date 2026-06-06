import {StaticImageData} from 'next/image';

export interface Contractor {
  Solve: CntrctrMain;
  Focus: CntrctrMain;
  Different: CntrctrMain;
}

export interface CntrctrMain {
  Title: string;
  Description: JSX.Element;
  ShowSpacer: boolean;
  Detail: CntrctrItem[];
}

export interface CntrctrItem {
  iKey: number;
  label: string;
  text: string;
}

export interface ContractorCont {
  ImageSrc?: string | StaticImageData;
  Title: string;
  Prefix: JSX.Element;
  Suffix: JSX.Element;
}

