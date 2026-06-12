import {ForwardRefExoticComponent, SVGProps} from 'react';

/**
 * ApoutPre section
 */

export interface AbtHeader {
  title: string;
  description: JSX.Element;
}

export interface About {
  header: string;
  profileImageSrc?: string;
  description: string;
  aboutItems: AboutItem[];
  imagePublicURL?: string;
  imagePublicAlt: string;
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}
