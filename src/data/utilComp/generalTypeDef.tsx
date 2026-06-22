import {StaticImageData} from 'next/image';
import React, {ForwardRefExoticComponent, PropsWithChildren, SVGProps} from 'react';
import {IconType} from 'react-icons';

import {ImgItem} from './GeneralDef';

/**
 * Props for the `IconButtonLayout` component.
 *
 * Defines the target, accessible label, and optional styling variant
 * for the icon button wrapper.
 */
export type IconButtonLayoutProps = PropsWithChildren<{
  /** Link target rendered by the anchor element. */
  href: string;

  /** Accessible label for the icon-only action. */
  label: string;

  /** Optional semantic color variant. */
  color?: 'bright' | 'dark' | 'highlight' | 'highlightAlt';

  /** Optional additional class names. */
  className?: string;
}>;

/** Supported icon component shapes accepted by shared icon helpers. */
export type IconDef =
  | IconType
  | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>
  | undefined;

/** Supported image source types for direct image rendering. */
export type ImgSrcType =
  | string
  | StaticImageData;

/** Supported image source types for flexible image resolution helpers. */
export type BgImageSrc =
  | string
  | StaticImageData
  | ImgItem
  | undefined;

/** Supported semantic header and layout style variants. */
export type HdrVariantStyleType =
  | 'bright'
  | 'dark'
  | 'highlight'
  | 'highlightAlt'
  | null;

/** Date label type used by timeline and article entries. */
export type DateType = string;

/** Supported call-to-action behavior variants. */
export type CallToActionType =
  | 'contact'
  | 'jump'
  | 'linkPill'
  | 'linkSimple';

/** Shared helper type for optional string values. */
export type StrngUndfndType = string | undefined;

/** Supported role labels used by content entries. */
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

/** Semantic heading tag names supported by layout components. */
export type HeadingTag = keyof React.JSX.IntrinsicElements;

/** Supported semantic image type variants. */
export type ImagesType =
  | 'mobile'
  | 'screen'
  | 'undefined'
  | 'top'
  | 'bottom'
  | 'main';

/** Define the type of Display of skills. */
export type DisplaySkills =
  | 'pills'
  | 'pillsExt'
  | 'list'
  | 'onlyDescription'
  | undefined;