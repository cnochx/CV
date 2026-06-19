import {ForwardRefExoticComponent, SVGProps} from 'react';

/**
 * HeroPre section
 */
export interface Hero {
  imageSrc: string;
  title: string;
  subTitle: string;
  name: string;
  descrList: HeroDescList[];
  actions: HeroActionItem[];
}

export interface HeroActionItem {
  href: string;
  text: string;
  primary?: boolean;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

export interface HeroDescList {
  hdlKey: number;
  listElement: JSX.Element;
}
