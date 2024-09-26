/**
 * Imprint
 */
import {ForwardRefExoticComponent, SVGProps} from 'react';

export interface FooterItems {
  link: string;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
  textContent: JSX.Element;
  copyrightText: string;
}

export interface ImprintItems {
  header: string;
  adressheader: string;
  personInCharge: string;
  addressGermany: AddressItem[];
  addressBrazil: AddressItem[];
  onlineAddress: LinkItem[];
  headerLegal: string;
  legalContent: JSX.Element;
}

export interface LinkItem {
  liKey: number;
  linkLabel: string;
  text: string;
  href?: string;
}

export interface AddressItem {
  aiKey: number;
  text: string;
}
