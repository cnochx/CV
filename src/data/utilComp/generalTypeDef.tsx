import {StaticImageData} from 'next/image';
import React, {ForwardRefExoticComponent, PropsWithChildren, ReactNode, SVGProps} from 'react';
import {IconType} from 'react-icons';

import {
  BaseAlContentDef,
  BaseAlSkills,
  BaseDescriptionDef,
  BaseHeaderItemDef,
  BaseIndexContentDef,
  BaseSuffixDef,
  ExtAlSkills,
  ExtCallToActionDef,
  ImgItem,
} from './GeneralDef';

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

/** Props used by the data model lookup helpers. */
export type getDataModelProps = {
  /** Search key or field name to resolve. */
  searchVal: string;

  /** Optional index content model searched by the helper. */
  IxContent?: BaseIndexContentDef | null;
};

/** Union of content shapes that may be returned by data model helpers. */
export type getDataModelContent =
  | BaseAlContentDef
  | BaseSuffixDef
  | ExtCallToActionDef
  | BaseDescriptionDef
  | BaseHeaderItemDef
  | ImgItem[]
  | ImgItem
  | ExtAlSkills
  | BaseAlSkills[]
  | ReactNode
  | DateType
  | StrngUndfndType
  | boolean
  | RoleType
  | ImgSrcType
  | number
  | string;

/** Structured result object returned by data model lookup helpers. */
export type getDataModelResultObj = {
  /** Optional HTML id for the matched result. */
  idHtml?: string;

  /** Optional stable numeric key. */
  key?: number;

  /** Optional title value of the matched result. */
  title?: StrngUndfndType;

  /** Optional subtitle value of the matched result. */
  subtitle?: StrngUndfndType;

  /** Semantic tag associated with the matched result. */
  tag: HeadingTag;

  /** Matched content payload. */
  content?: getDataModelContent;

  /** Optional normalized search value. */
  SearchVal?: string;
};

/** Result wrapper returned by data model lookup helpers. */
export type getDataModelResult = {
  /** Indicates whether the lookup succeeded. */
  success: boolean;

  /** Resolved result object, or `null` when no match was found. */
  result: getDataModelResultObj | null;
};

/** Supported semantic image type variants. */
export type ImagesType =
  | 'mobile'
  | 'screen'
  | 'undefined'
  | 'top'
  | 'bottom'
  | 'main';