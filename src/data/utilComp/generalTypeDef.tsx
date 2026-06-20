import {StaticImageData} from 'next/image';
import React, {ForwardRefExoticComponent, PropsWithChildren, SVGProps} from 'react';
import {IconType} from 'react-icons';

/**
 * Props for the `IconButtonLayout` component.
 *
 * Defines the link target, accessible label, and semantic styling for the icon button wrapper.
 */
export type IconButtonLayoutProps = PropsWithChildren<{
  /** Link target rendered by the anchor element. */
  href: string;

  /** Accessible label used for the icon-only action. */
  label: string;

  /** Semantic color variant used to resolve the button styling. */
  color?: 'bright' | 'dark' | 'highlight' | 'highlightAlt';

  /** Optional additional class names applied to the anchor element. */
  className?: string;
}>;

/**
 * Defines the supported icon component shapes accepted by shared icon helpers.
 */
export type IconDef =
  | IconType
  | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>
  | undefined;

export type ImgSrcType =
  | string
  | StaticImageData
  | undefined;

export type BgImageSrc =
  | string
  | StaticImageData
  | ImgItem
  | undefined;

/**
 * Defines the allowed semantic header and layout style variants.
 */
export type HdrVariantStyleType =
  | 'bright'
  | 'dark'
  | 'highlight'
  | 'highlightAlt'
  | null;

/**
 * Defines one date range label used by timeline items.
 */
export type DateType = string;

/**
 * Defines the supported call-to-action interaction variants.
 */
export type CallToActionType =
  | 'contact'
  | 'jump'
  | 'linkPill'
  | 'linkSimple';

export type StrngUndfndType = string | undefined;

export type RoleType =
  | 'Contract-based'
  | 'Project-based'
  | 'Contractor'
  | 'Part-time job'
  | 'Certification'
  | 'Training'
  | 'Training, Certification'
  | 'Apprenticeship, Certification'
  | undefined;

export type HeadingTag = keyof React.JSX.IntrinsicElements;
