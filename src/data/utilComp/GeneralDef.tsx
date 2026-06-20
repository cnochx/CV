
import {ReactNode} from 'react';

import {CallToActionType, DateType, IconDef, ImgSrcType, RoleType, StrngUndfndType} from './generalTypeDef';

/**
 * Defines the top-level content model rendered for one index section.
 */
export interface BaseIndexContentDef {
  /** Main article entries rendered inside the contractor content section. */
  IxContent: BaseAlContentDef[];

  /** Optional suffix content rendered in the footer area below the main section content. */
  IxBottomSuffix?: BaseSuffixDef | undefined;

  /** Optional call-to-action group rendered in the footer section. */
  IxCallToAction?: ExtCallToActionDef | undefined;

  /** Optional description block rendered below the hero header. */
  IxDescription?: BaseDescriptionDef | undefined;

  /** Header content rendered at the top of the index section. */
  IxHeader: BaseHeaderItemDef;

  /** Optional additional images associated with the section content. */
  IxImages?: ImgItem[] | undefined;

  /** Optional primary image rendered in the hero and footer pill layouts. */
  IxMainImg?: ImgItem | undefined;
}

/**
 * Defines one aligned timeline or CV content entry.
 */
export interface BaseAlContentDef {
  /** Optional suffix content rendered below the main section content. */
  AlBottomSuffix?: BaseSuffixDef;

  /** Optional country label rendered for the entry. */
  AlCountry?: StrngUndfndType;

  /** Optional call-to-action items rendered for the article entry. */
  AlCallToAction?: ExtCallToActionDef | undefined;

  AlDateEnd?: DateType;

  AlDateStrt?: DateType;

  AlDateCustom: boolean;

  AlDateCustomVal?: ReactNode;

  AlDescription1?: BaseDescriptionDef | undefined;

  AlDescription2?: BaseDescriptionDef | undefined;

  AlDescription3?: BaseDescriptionDef | undefined;

  AlDivide: boolean;

  /** Header content rendered at the top of the section. */
  AlHeaderItem: BaseHeaderItemDef;

  AlId?: StrngUndfndType;

  /** Optional additional image sources rendered for the entry. */
  AlImages?: ImgItem[];

  AlKey: number;

  AlCompany?: StrngUndfndType

  /** Optional location label rendered for the entry. */
  AlLocation?: StrngUndfndType;

  /** Optional primary image source rendered for the entry. */
  AlMainImg?: ImgItem | undefined;

  /** Optional role label rendered for the entry. */
  AlRole?: RoleType;

  AlSkills?: ExtAlSkills | undefined;
}

/**
 * Defines one grouped skill configuration rendered for a CV entry.
 */
export interface ExtAlSkills {

  SeiEnableSkills: boolean;

  SeiId: 'skills' | StrngUndfndType;

  SeiSkillsItems: BaseAlSkills[] | undefined;

  SeiSkillsHead?: StrngUndfndType;
}

/**
 * Defines one skill entry rendered inside a grouped skills list.
 */
export interface BaseAlSkills {
  AlsDescription?: BaseDescriptionDef | undefined;

  AlsId: StrngUndfndType;

  /** Stable numeric identifier for the skill entry. */
  AlsKey: number;

  /** Visible display name of the skill entry. */
  AlsName?: StrngUndfndType;

  /** Controls whether the skill entry is initially expanded. */
  AlsOpen: boolean;
}

/**
 * Defines one structured description block with heading, identifier, and content.
 */
export interface BaseDescriptionDef {
  DnHead: string;

  DnId: 'Description1' | 'Description2' | 'Description3' | StrngUndfndType;

  DnText: ReactNode;
}

/**
 * Defines one header content entry rendered in a section header.
 */
export interface BaseHeaderItemDef {
  /** Stable identifier used for the header entry. */
  HdrId: 'title' | StrngUndfndType;

  /** Optional secondary identifier used by subtitle-related markup or lookup logic. */
  HdrSubId?: StrngUndfndType;

  /** Optional subtitle displayed with the main title. */
  HdrSubTitle?: StrngUndfndType;

  /** Main title displayed in the section header. */
  HdrTitle: string;

  /** Optional suffix content rendered with the title block. */
  HdrTitleSuffix?: BaseSuffixDef | undefined;
}

/**
 * Defines one image source entry used by section and content models.
 */
export interface ImgItem {
  /** Alternative text describing the image content. */
  ImgAlt?: StrngUndfndType;

  /** Optional call-to-action associated with the image. */
  ImgCallToAction?: ExtCallToActionDef | undefined;

  /** Optional DOM-friendly identifier used for image-specific markup or lookup behavior. */
  ImgId?: StrngUndfndType;

  /** Stable numeric key used for list rendering. */
  ImgKey?: number;

  /** Image source consumed by Next.js image rendering or static asset imports. */
  ImgSrc: ImgSrcType;
}

/**
 * Defines one call-to-action group with enable state and CTA entries.
 */
export interface ExtCallToActionDef {

  AeiCallToActionItems: BaseCalToActionItemDef[];

  AeiEnableCallToAction: boolean;
}

/**
 * Defines one call-to-action entry rendered inside a section or timeline item.
 */
export interface BaseCalToActionItemDef {
  /** Optional DOM-friendly identifier used for the CTA element. */
  CtaId?: 'calltoaction' | string;

  /** Optional icon rendered with the CTA label. */
  CtaIcon?: IconDef;

  /** Optional target used for link, jump, or mail actions. */
  CtaHref?: 'mailto:martin@grellmann.eu?subject=Send from grellmann.app CV' | string | undefined;

  /** Stable numeric identifier for the call-to-action entry. */
  CtaKey: number;

  /** Optional internal or display name used for the CTA entry. */
  CtaName?: string;

  /** Optional prefix content rendered before the CTA label. */
  CtaPre?: string | undefined;

  /** Marks the CTA as the primary action when set. */
  CtaPrimary?: boolean;

  /** Visible label rendered for the CTA. */
  CtaText?: string | 'Let\'s talk ... send me an email' | undefined;

  /** Action type used to resolve the CTA behavior. */
  CtaType: CallToActionType;
}

/**
 * Defines optional suffix content rendered below a content section.
 */
export interface BaseSuffixDef {
  /** Optional DOM-friendly identifier used for the content suffix wrapper. */
  SxId: 'title-suffix' | StrngUndfndType;

  SxKey?: number;

  /** Suffix content rendered inside the content suffix area. */
  SxSuffix: ReactNode | undefined;

  /** Optional title displayed above the suffix content. */
  SxTitle?: StrngUndfndType;
}