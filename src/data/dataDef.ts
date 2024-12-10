import {StaticImageData} from 'next/image';
import {FC, ForwardRefExoticComponent, SVGProps} from 'react';

import {IconProps} from '../components/Icon/Icon';
import {HeroActionItem} from './HeroDataDef';

/**
 * About section
 */
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

/**
 * Stat section
 */
export interface Stat {
  title: string;
  value: number;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

/**
 * Skills section
 */

export interface Skill {
  name: string;
  level: number;
  max?: number;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

/**
 * Portfolio section
 */
export interface PortfolioItem {
  title: string;
  description: string;
  url: string;
  image: string | StaticImageData;
}

/**
 * CV section
 */

export interface CVSubHeader {
  title: string;
  content: JSX.Element;
  showSpacer: boolean;
}
export interface SummaryItem {
  siKey: number;
  date: string;
  location: string;
  title: string;
  content:JSX.Element;
  experiences: expItem[];
}

export interface TimelineItem {
  tlKey: number;
  date: string;
  location: string;
  title: string;
  about: string;
  content: JSX.Element;
  experiences: expItem[];
  reference: HeroActionItem[];
}
export interface expItem {
  eiKey: number;
  text: string;
}
export interface LifeItem {
  liKey: number;
  relationshipStatus: string;
  familyStatus: string;
  privateInterests: string;
  location: string;
  legal: string;
}

export interface SubHeader {
  title: string;
  content: JSX.Element;
  showSpacer: boolean;
}

export interface ProjectItem {
  piKey: number;
  title: string;
  stack: string;
  role: string;
  content: JSX.Element;
}

export interface FrlSubHeader {
  title: string;
  content: JSX.Element;
  showSpacer: boolean;
}

export interface Freelance {
  title: string;
  stack: expItem[];
  content: JSX.Element;
}

/**
 * Testimonial section
 */
export interface TestimonialSection {
  imageSrc?: string | StaticImageData;
  testimonials: Testimonial[];
}

export interface Testimonial {
  image?: string;
  label: string;
  text: string;
}

/**
 * Contact section
 */
export interface ContactSection {
  headerText?: string;
  description: string;
  items: ContactItem[];
}

export const ContactType = {
  Email: 'Email',
  Phone: 'Phone',
  Location: 'Location',
  Github: 'Github',
  LinkedIn: 'LinkedIn',
  Facebook: 'Facebook',
  Twitter: 'Twitter',
  Instagram: 'Instagram',
} as const;

export type ContactType = (typeof ContactType)[keyof typeof ContactType];

export interface ContactItem {
  type: ContactType;
  text: string;
  href?: string;
}

export interface ContactValue {
  Icon: FC<IconProps> | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
  srLabel: string;
}

/**
 * Social items
 */
export interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}

