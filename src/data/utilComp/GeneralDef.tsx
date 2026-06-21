import {StaticImageData} from 'next/dist/shared/lib/get-img-props';
import {ReactNode} from 'react';

import {
  CallToActionType,
  DateType,
  IconDef,
  ImagesType,
  ImgSrcType,
  RoleType,
  StrngUndfndType,
} from './generalTypeDef';

/**
 * Top-level structured content model for one index-based section.
 *
 * This interface groups the complete content required to render one main
 * section, including header, descriptions, content articles, call-to-action
 * items, footer suffix content, and related image assets.
 */
export interface BaseIndexContentDef {
  /** Main article entries rendered inside the section body. */
  IxContent: BaseAlContentDef[];

  /** Optional suffix content rendered below the main section content. */
  IxBottomSuffix?: BaseSuffixDef | undefined;

  /** Optional call-to-action group rendered near the section footer. */
  IxCallToAction?: ExtCallToActionDef | undefined;

  /** Optional description block rendered below the section header. */
  IxDescription?: BaseDescriptionDef | undefined;

  /** Header content rendered at the top of the section. */
  IxHeader: BaseHeaderItemDef;

  /** Optional additional images associated with the section. */
  IxImages?: ImgItem[] | undefined;

  /** Optional primary image rendered by hero, pill, or footer layouts. */
  IxMainImg?: ImgItem | undefined;
}

/**
 * Structured content model for one aligned article, timeline, or CV entry.
 *
 * This interface represents one reusable content item containing header data,
 * descriptions, metadata, images, skill groups, and optional call-to-action content.
 */
export interface BaseAlContentDef {
  /** Optional suffix content rendered below the entry content. */
  AlBottomSuffix?: BaseSuffixDef;

  /** Optional country label rendered for the entry. */
  AlCountry?: StrngUndfndType;

  /** Optional call-to-action group rendered for the entry. */
  AlCallToAction?: ExtCallToActionDef | undefined;

  /** Optional end date for the entry. */
  AlDateEnd?: DateType;

  /** Optional start date for the entry. */
  AlDateStrt?: DateType;

  /** Marks the date display as custom when set. */
  AlDateCustom?: boolean;

  /** Optional custom date node rendered instead of a computed date range. */
  AlDateCustomVal?: ReactNode;

  /** Optional first description block rendered for the entry. */
  AlDescription1?: BaseDescriptionDef | undefined;

  /** Optional second description block rendered for the entry. */
  AlDescription2?: BaseDescriptionDef | undefined;

  /** Optional third description block rendered for the entry. */
  AlDescription3?: BaseDescriptionDef | undefined;

  /** Enables a visual divider for the entry when set. */
  AlDivide?: boolean;

  /** Header content rendered at the top of the entry. */
  AlHeaderItem?: BaseHeaderItemDef;

  /** Stable string identifier used for the content item. */
  AlId: StrngUndfndType;

  /** Optional additional image entries associated with the content item. */
  AlImages?: ImgItem[];

  /** Stable numeric key used for list rendering. */
  AlKey: number;

  /** Optional company label rendered for the entry. */
  AlCompany?: StrngUndfndType;

  /** Optional location label rendered for the entry. */
  AlLocation?: StrngUndfndType;

  /** Optional primary image rendered for the entry. */
  AlMainImg?: ImgItem | undefined;

  /** Optional role label rendered for the entry. */
  AlRole?: RoleType;

  /** Optional grouped skills configuration rendered for the entry. */
  AlSkills?: ExtAlSkills | undefined;
}

/**
 * Grouped skills model rendered inside a content entry.
 *
 * Defines whether the skills section is enabled, the section identifier,
 * the optional heading, and the list of skill items.
 */
export interface ExtAlSkills {
  /** Enables rendering of the skills section when true. */
  SeiEnableSkills: boolean;

  /** Identifier used for the skills section. */
  SeiId: 'skills' | StrngUndfndType;

  /** Skill items rendered by the section. */
  SeiSkillsItems: BaseAlSkills[] | undefined;

  /** Optional heading displayed above the skills list. */
  SeiSkillsHead?: StrngUndfndType;
}

/**
 * Single skill item rendered inside a grouped skill collection.
 *
 * Defines the display name, description, stable identifiers,
 * and initial open state of the skill item.
 */
export interface BaseAlSkills {
  /** Optional description block rendered for the skill item. */
  AlsDescription?: BaseDescriptionDef | undefined;

  /** Stable identifier used for the skill item. */
  AlsId: StrngUndfndType;

  /** Stable numeric key used for list rendering. */
  AlsKey: number;

  /** Visible display name of the skill item. */
  AlsName?: StrngUndfndType;

  /** Controls whether the skill item is initially expanded. */
  AlsOpen: boolean;
}

/**
 * Structured description block.
 *
 * Defines a description heading, identifier, and rich content node.
 */
export interface BaseDescriptionDef {
  /** Visible heading rendered for the description block. */
  DnHead: string;

  /** Identifier used for description-specific DOM ids or lookup logic. */
  DnId: 'Description1' | 'Description2' | 'Description3' | StrngUndfndType;

  /** Rich description content rendered inside the description block. */
  DnText: ReactNode;
}

/**
 * Structured header content model for a section or article header.
 *
 * Defines the main title, optional subtitle, optional suffix content,
 * and header-related identifiers.
 */
export interface BaseHeaderItemDef {
  /** Stable identifier used for the header item. */
  HdrId: 'title' | StrngUndfndType;

  /** Optional secondary identifier used for subtitle markup or lookup logic. */
  HdrSubId?: StrngUndfndType;

  /** Optional subtitle displayed below or beside the main title. */
  HdrSubTitle?: StrngUndfndType;

  /** Main title displayed in the header. */
  HdrTitle: string;

  /** Optional suffix content rendered with the title block. */
  HdrTitleSuffix?: BaseSuffixDef | undefined;
}

/**
 * Structured image source entry.
 *
 * Defines image metadata, source variants, optional actions,
 * and semantic image typing used across section and content models.
 */
export interface ImgItem {
  /** Alternative text describing the image content. */
  ImgAlt?: StrngUndfndType;

  /** Optional call-to-action associated with the image. */
  ImgCallToAction?: ExtCallToActionDef | undefined;

  /** Optional identifier used for image-related markup or lookup logic. */
  ImgId?: StrngUndfndType;

  /** Stable numeric key used for list rendering. */
  ImgKey?: number;

  /** Image source consumed by Next.js image rendering or CSS helpers. */
  ImgSrc?: ImgSrcType;

  /** Optional static image import resolved by Next.js. */
  ImgStatic?: StaticImageData;

  /** Semantic image type such as screen, mobile, or other supported variants. */
  ImgType: ImagesType;
}

/**
 * Grouped call-to-action model.
 *
 * Defines whether CTA rendering is enabled and provides the CTA item collection.
 */
export interface ExtCallToActionDef {
  /** CTA items rendered by the group. */
  AeiCallToActionItems: BaseCallToActionItemDef[];

  /** Enables rendering of the CTA group when true. */
  AeiEnableCallToAction: boolean;
}

/**
 * Single call-to-action entry.
 *
 * Defines the label, action type, optional icon, target, and presentation flags
 * for one CTA rendered in a section or content item.
 */
export interface BaseCallToActionItemDef {
  /** Optional identifier used for CTA-specific markup or lookup logic. */
  CtaId?: 'calltoaction' | string;

  /** Optional icon rendered with the CTA label. */
  CtaIcon?: IconDef;

  /** Optional target used for mail, link, download, or jump actions. */
  CtaHref?: 'mailto:martin@grellmann.eu?subject=Send from grellmann.app CV' | string | undefined;

  /** Stable numeric key used for list rendering. */
  CtaKey: number;

  /** Optional internal or display name for the CTA item. */
  CtaName?: string;

  /** Optional prefix text rendered before the CTA label. */
  CtaPre?: string | undefined;

  /** Marks the CTA as the primary action when set. */
  CtaPrimary?: boolean;

  /** Visible text label rendered for the CTA. */
  CtaText?: string | 'Let\'s talk ... send me an email' | undefined;

  /** Semantic action type used to resolve CTA behavior. */
  CtaType: CallToActionType;
}

/**
 * Optional suffix content block.
 *
 * Defines the identifier, optional title, and rendered suffix node
 * displayed below a content or section area.
 */
export interface BaseSuffixDef {
  /** Identifier used for the suffix wrapper. */
  SxId: 'title-suffix' | StrngUndfndType;

  /** Optional stable numeric key used for list rendering. */
  SxKey?: number;

  /** Content rendered inside the suffix area. */
  SxSuffix: ReactNode | undefined;

  /** Optional title rendered above the suffix content. */
  SxTitle?: StrngUndfndType;
}