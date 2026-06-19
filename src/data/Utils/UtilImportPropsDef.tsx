import {PropsWithChildren, ReactNode} from 'react';

import {HdrVariantStyleType, HeadingTag, ImgSrcType, StrngUndfndType} from '../Layout/LayoutTypeDef';
import {SetHover} from '../SectionHelperDef';
import {SectionId} from '../sectionIdData';
import {SkillItem, SkillsCollection} from '../Skills/SkillCollectionDef';
import {
  BaseAlContentDef, BaseCalToActionItemDef, BaseDescriptionDef, BaseHeaderItemDef,
  BaseIndexContentDef,
  BaseSuffixDef,
  ExtAlSkills,
  ExtCallToActionDef,
} from './GeneralDef';

/**
 * Props for the `SkillsArticle` component.
 *
 * Defines the data source for one top-level skills accordion card and
 * the identifiers required to generate stable nested DOM ids.
 */
export type SkillsArticleProps = PropsWithChildren<{
  /** Skills collection rendered by this accordion card. */
  Item: SkillsCollection;

  /** Parent section id used as the base for generated DOM ids. */
  ParentSectionId: string;

  /** Subsection id used to keep generated DOM ids unique. */
  SectionSubId: string;

  /** Optional background image source as a URL string or `StaticImageData`. */
  ImageSrc?: ImgSrcType;

  /** Optional background position value used to vary the visible image crop per card. */
  BackgroundPosition?: string;
}>;

/**
 * Props for the `SkillsSection` component.
 *
 * Defines the data and DOM id context required to render one nested
 * skill card inside a parent `SkillsArticle` accordion.
 */
export type SkillsProps = PropsWithChildren<{
  /** Skill entry rendered by this nested accordion card. */
  SkillItem: SkillItem;

  /** Parent skills collection id used to build stable DOM ids. */
  Id: string;

  /** Parent accordion section id used to keep nested ids unique. */
  ParentSectionId: string;
}>;

/**
 * Props for the BrightPillIndexLyt component. Defines the structured content model
 * rendered by the contractor index layout.[file:1]
 */
export type ContentIndexLytProps = PropsWithChildren<{
  /**
   * Top-level content for the index layout.
   * Groups header, description, article entries, footer actions, and images.
   */
  IdxContent: BaseIndexContentDef;
  MainSectionId: string;
}>;

export type ContentArticleLytProps = PropsWithChildren<{
  SectionId: string;
  AlContent: BaseAlContentDef[];
  ArticleTitleTag: HeadingTag;
}>;


export type ContentSectionLytProps = PropsWithChildren<{
  SectionId: StrngUndfndType;
  AlContent: BaseAlContentDef;
  ArticleTitleTag: HeadingTag;
}>;

export type ArtSkillsLytProps = PropsWithChildren<{
  SectionId: StrngUndfndType;
  AlSkills: ExtAlSkills;
  ArticleTitleTag: HeadingTag;
}>;

export type ArtDescriptionLyt = PropsWithChildren<{
  SectionId: StrngUndfndType,
  AlDescription: BaseDescriptionDef | undefined,
  ArticleTitleTag: HeadingTag,
  IsOpen?: boolean,
  OnToggle?: () => void
}>;

export type AsideLytProps = PropsWithChildren<{
  ClassName?: string;
  SectionId: StrngUndfndType;
  CallToActionItem?: ExtCallToActionDef;
  DisplayDivide?: boolean;
}>;

export type ArticleFooterLytProps = PropsWithChildren<{
  footerClassName?: string;
  SectionId: string;
  BottomSuffix?:BaseSuffixDef;
}>;

export type BrightPillArticleLytProps = PropsWithChildren<{
  ArticleId?: StrngUndfndType,
  ParentClassName: string,
  LabelledBy?: string,
  ArticleClassName?: string
}>;

export type ArticleExtShelProps = PropsWithChildren<{
  ArticleId?: StrngUndfndType,
  DivClassName: string,
  LabelledBy?: string,
  ArticleClassName?: string
}>;

export type HeaderLayoutProps = PropsWithChildren<{
  /** Optional additional class names applied to the header wrapper. */
  ClassName: StrngUndfndType | null;

  /** Semantic variant used to resolve the header styling. */
  UseVariantText?: HdrVariantStyleType;

  UseVariantBg?: HdrVariantStyleType;

  /** Enables automatic semantic font color resolution when set. */
  UseTextColor?: boolean;

  /** Border variant used to resolve the optional divider styling. */
  SetBorder: HdrVariantStyleType | undefined;

  /** Optional class names applied to the prefix wrapper. */
  TitleSuffixClassName?: StrngUndfndType;

  /** Optional element rendered before the header content. */
  TitleSuffix?:  ReactNode | undefined;

  /** Optional hover behavior applied to the header wrapper. */
  SetHover?: SetHover;
}>;

/**
 * Props for the BrightPillArtHeaderLyt component. Defines the visual configuration and optional suffix section for the header wrapper.
 */
export type HeaderLytProps = PropsWithChildren<{

  /** Additional Tailwind class names applied to the header element. */
  HeaderClassName?: string;

  /** When true, renders an underline bar below the header content. */
  SetUnderline?: boolean;

  /**
   * Optional Tailwind classes for the underline bar.
   * Falls back to a default underline style when omitted.
   */
  UnderlineClassName?: string;

  /**
   * Optional header metadata including title suffix, heading, and content
   * used to render the accessible suffix section.
   */
  HeaderItem?: BaseHeaderItemDef;

  AlDateCustomVal?: ReactNode | undefined;

  /**
   * Base identifier used to derive stable ids for the suffix section
   * and its child elements.
   */
  ArticleId?: StrngUndfndType;

  SuffixTitleTag?: HeadingTag;
}>;

export type PillLayoutProps = PropsWithChildren<{
  ClassNameParent: string;
  ClassNameOverlay: string;
  ImgSrc?: ImgSrcType;
}>;

export type SectionLayoutProps = PropsWithChildren<{
  className?: string;
  sectionId: string;
  noPadding?: boolean;
  IsMain: boolean;
}>

export type SectionLytProps = PropsWithChildren<{
  sectionClassName?: string;
  DivClassname?: string;
  SectionId: string;
  LabelId: string;
  noPadding?: boolean;
  IsMain?: boolean;
}>;

export type CallToActionProps = {
  CallToActionItem: BaseCalToActionItemDef;
};

export type NavProps = {
  navSections: SectionId[];
  currentSection: SectionId | null;
  onSelectSection: (section: SectionId) => void;
};

export type NavItemProps = {
  section: SectionId;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
  onSelect: (section: SectionId) => void;
};

export type SectionIdsType = {
    idMain: StrngUndfndType;
    idArticle: StrngUndfndType;
    idHMain: StrngUndfndType;
    idHSub: StrngUndfndType;
    idSuffix: StrngUndfndType;
    articleLabelBy: StrngUndfndType;
  }

export type HeaderIdsType = {
  idH: StrngUndfndType;
  idSuffix: StrngUndfndType;
  sectionLabelBy: StrngUndfndType;
}

export type ContentIdsType = {
  idSection: StrngUndfndType;
  idHMain: StrngUndfndType;
  idHSub: StrngUndfndType;
  idDescription1: {
    hdng: StrngUndfndType;
    id: StrngUndfndType;
  }
  idDescription2:  {
    hdng: StrngUndfndType;
    id: StrngUndfndType;
  }
  idDescription3: {
    hdng: StrngUndfndType;
    id: StrngUndfndType;
  }
  idSkills: StrngUndfndType;
  idCallToAction: StrngUndfndType;
  sectionLabelBy: StrngUndfndType;
}