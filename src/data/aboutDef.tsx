import {ForwardRefExoticComponent, SVGProps} from 'react';

/**
 * About section
 */
export interface about {
  header: string;
  profileImageSrc?: string;
  description: string;
  aboutItems: aboutItem[];
  imagePublicURL?: string;
  imagePublicAlt: string;
}

export interface aboutItem {
  label: string;
  text: string;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}