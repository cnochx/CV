import {PropsWithChildren, ReactNode} from 'react';

import {SetHover} from '../SectionHelperDef';
import {SectionId} from '../SectionIdData';
import {SkillItem, SkillsCollection} from '../Skills/SkillCollectionDef';
import {
  BaseAlContentDef,
  BaseCallToActionItemDef,
  BaseDescriptionDef,
  BaseHeaderItemDef,
  BaseIndexContentDef,
  BaseSuffixDef,
  ExtAlSkills,
  ExtCallToActionDef,
  ImgItem,
} from './GeneralDef';
import {HdrVariantStyleType, HeadingTag, ImgSrcType, StrngUndfndType} from './generalTypeDef';

/**
 * Props for the `SkillsArticle` component.
 *
 * Defines the content model and identity context for one top-level
 * skills article, including its optional background image settings.
 */
export type SkillsArticleProps = PropsWithChildren<{
  /** Skills collection rendered by the article. */
  Item: SkillsCollection;

  /** Parent section identifier used to derive stable nested DOM ids. */
  ParentSectionId: string;

  /** Subsection identifier used to keep generated ids unique. */
  SectionSubId: string;

  /** Optional image source used for the article background or media area. */
  ImageSrc?: ImgSrcType;

  /** Optional background-position value used to adjust the visible image crop. */
  BackgroundPosition?: string;
}>;

/**
 * Props for the `SkillsSection` component.
 *
 * Defines the nested skill entry and its id context inside a parent
 * `SkillsArticle` instance.
 */
export type SkillsProps = PropsWithChildren<{
  /** Skill entry rendered by the section. */
  SkillItem: SkillItem;

  /** Base identifier used to derive stable nested element ids. */
  Id: string;

  /** Parent section identifier used to scope generated child ids. */
  ParentSectionId: string;
}>;

/**
 * Props for the `ContentIndexLyt` component.
 *
 * Defines the top-level structured content used to render an index-style
 * layout section with grouped header, description, content, and actions.
 */
export type ContentIndexLytProps = PropsWithChildren<{
  /** Structured content model rendered by the layout. */
  IdxContent: BaseIndexContentDef;

  /** Main section identifier used for semantic structure and DOM ids. */
  MainSectionId: string;
}>;

/**
 * Props for the `ContentArticleLyt` component.
 *
 * Defines the article list and heading semantics used by the content layout.
 */
export type ContentArticleLytProps = PropsWithChildren<{
  /** Section identifier assigned to the rendered article wrapper. */
  SectionId: string;

  /** Content article collection rendered inside the layout. */
  AlContent: BaseAlContentDef[];

  /** Semantic heading tag used for article titles. */
  ArticleTitleTag: HeadingTag;
}>;

/**
 * Props for the `ContentSectionLyt` component.
 *
 * Defines a single content section and the heading semantics used to render it.
 */
export type ContentSectionLytProps = PropsWithChildren<{
  /** Optional section identifier assigned to the rendered section. */
  SectionId: StrngUndfndType;

  /** Content item rendered by the section layout. */
  AlContent: BaseAlContentDef;

  /** Semantic heading tag used for the article title. */
  ArticleTitleTag: HeadingTag;
}>;

/**
 * Props for the `ArtSkillsLyt` component.
 *
 * Defines the skill collection rendered in an article-style layout section.
 */
export type ArtSkillsLytProps = PropsWithChildren<{
  /** Optional section identifier assigned to the rendered wrapper. */
  SectionId: StrngUndfndType;

  /** Extended skills collection rendered by the layout. */
  AlSkills: ExtAlSkills;

  /** Semantic heading tag used for the article title. */
  ArticleTitleTag: HeadingTag;
}>;

export type SkillsElmntProps = PropsWithChildren<{
  /** Optional section identifier assigned to the rendered wrapper. */
  ParentId: string;

  /** Extended skills collection rendered by the layout. */
  AlSkills: ExtAlSkills | undefined;

  /** Semantic heading tag used for the article title. */
  ArticleTitleTag?: HeadingTag;

  /** Optional additional class names applied to the list wrapper */
  UlClassName?: string;

  /** Optional additional class names applied to the list item */
  LiClassName?: string;

  /** Optional additional class names applied to the Descriotion wrapper. */
  DescriptionClassName?: string;
}>;

/**
 * Props for the `ArtSkillsLyt` component.
 *
 * Defines the skill collection rendered in an article-style layout section.
 */
export type SkillsLytProps = PropsWithChildren<{
  /** Optional section identifier assigned to the rendered wrapper. */
  SectionId: StrngUndfndType;

  /** Extended skills collection rendered by the layout. */
  AlSkills: ExtAlSkills;

  /** Semantic heading tag used for the article title. */
  ArticleTitleTag: HeadingTag;
}>;

/**
 * Props for the `ArtDescriptionLyt` component.
 *
 * Defines the description block rendered inside an article-style section,
 * including optional disclosure state handling.
 */
export type ArtDescriptionLyt = PropsWithChildren<{
  /** Optional section identifier assigned to the description wrapper. */
  SectionId: StrngUndfndType;

  /** Description content rendered by the layout. */
  AlDescription: BaseDescriptionDef | undefined;

  /** Semantic heading tag used for the description title. */
  ArticleTitleTag: HeadingTag;

  /** Optional open state used for collapsible rendering. */
  IsOpen?: boolean;

  /** Optional toggle callback used by interactive disclosure UIs. */
  OnToggle?: () => void;
}>;

/**
 * Props for the `AsideExtShell` component.
 *
 * Defines the aside wrapper, associated action content, and optional divider behavior.
 */
export type AsideLytProps = PropsWithChildren<{
  /** Optional additional class names applied to the aside wrapper. */
  ClassName?: string;

  /** Section identifier used for semantic structure and DOM associations. */
  SectionId: StrngUndfndType;

  /** Optional call-to-action content rendered inside the aside. */
  CallToActionItem?: ExtCallToActionDef;

  /** Enables rendering of a visual divider when set. */
  DisplayDivide?: boolean;
}>;

/**
 * Props for the `ArticleFooterLyt` component.
 *
 * Defines the footer wrapper and optional suffix content rendered at the bottom of an article.
 */
export type ArticleFooterLytProps = PropsWithChildren<{
  /** Optional additional class names applied to the footer wrapper. */
  footerClassName?: string;

  /** Section identifier used to derive footer-related ids. */
  SectionId: string;

  /** Optional suffix content rendered in the footer area. */
  BottomSuffix?: BaseSuffixDef;
}>;

/**
 * Props for the `BrightPillArticleLyt` component.
 *
 * Defines the wrapper and accessible labeling information for a pill-styled article layout.
 */
export type BrightPillArticleLytProps = PropsWithChildren<{
  /** Optional article identifier assigned to the rendered article element. */
  ArticleId?: StrngUndfndType;

  /** Required class names applied to the outer parent wrapper. */
  ParentClassName: string;

  /** Optional accessible label reference assigned to the article. */
  LabelledBy?: string;

  /** Optional additional class names applied to the article element. */
  ArticleClassName?: string;
}>;

/**
 * Props for the `ArticleExtShel` component.
 *
 * Defines the structural shell used to wrap article content with optional accessibility metadata.
 */
export type ArticleExtShelProps = PropsWithChildren<{
  /** Optional article identifier assigned to the rendered article element. */
  ArticleId: StrngUndfndType;

  /** Required class names applied to the outer div wrapper. */
  DivClassName?: string;

  /** Optional accessible label reference assigned to the article. */
  LabelledBy: string;

  /** Optional additional class names applied to the article element. */
  ArticleClassName?: string;

  /** Optional boolean flag to display a sub-div within the article. */
  DisplaySubDiv?: boolean;
}>;

/**
 * Props for the `HeaderLayout` component.
 *
 * Defines the visual variant, optional suffix content, and interaction behavior
 * for a reusable semantic header wrapper.
 */
export type HeaderLayoutProps = PropsWithChildren<{
  /** Optional additional class names applied to the header wrapper. */
  ClassName: StrngUndfndType | null;

  /** Optional semantic variant used to resolve the text styling. */
  UseVariantText?: HdrVariantStyleType;

  /** Optional semantic variant used to resolve the background styling. */
  UseVariantBg?: HdrVariantStyleType;

  /** Enables automatic semantic text color resolution when set. */
  UseTextColor?: boolean;

  /** Optional border variant used to resolve divider styling. */
  SetBorder: HdrVariantStyleType | undefined;

  /** Optional additional class names applied to the title suffix wrapper. */
  TitleSuffixClassName?: StrngUndfndType;

  /** Optional element rendered before or alongside the main header content. */
  TitleSuffix?: ReactNode | undefined;

  /** Optional hover behavior applied to the header wrapper. */
  SetHover?: SetHover;
}>;

/**
 * Props for the `HeaderLyt` component.
 *
 * Defines the header wrapper styling, optional underline behavior,
 * and optional metadata content used to render title and suffix sections.
 */
export type HeaderLytProps = PropsWithChildren<{
  /** Optional additional class names applied to the header element. */
  HeaderClassName?: string;

  /** When true, renders an underline below the header content. */
  SetUnderline?: boolean;

  /**
   * Optional additional class names applied to the underline element.
   * Falls back to a default underline style when omitted.
   */
  UnderlineClassName?: string;

  /** Optional header data used to render title, subtitle, and suffix content. */
  HeaderItem?: BaseHeaderItemDef;

  /** Optional custom date or metadata node rendered in the header area. */
  AlDateCustomVal?: ReactNode | undefined;

  /** Optional base identifier used to derive stable nested header ids. */
  HeaderId?: string;

  /** Optional semantic heading tag used for the suffix title. */
  SuffixTitleTag?: HeadingTag;
}>;

/**
 * Props for the `PillLayout` component.
 *
 * Defines the outer and overlay class names and optional image source
 * used by the pill-style media layout.
 */
export type PillLayoutProps = PropsWithChildren<{
  /** Required class names applied to the outer wrapper. */
  ClassNameParent: string;

  /** Required class names applied to the overlay layer. */
  ClassNameOverlay: string;

  /** Optional image source rendered by the layout. */
  ImgSrc?: ImgSrcType;
}>;

/**
 * Props for the `SectionLayout` component.
 *
 * Defines a semantic section wrapper with optional padding behavior.
 */
export type SectionLayoutProps = PropsWithChildren<{
  /** Optional additional class names applied to the section element. */
  className?: string;

  /** Section identifier assigned to the rendered section element. */
  sectionId: string;

  /** Disables default section padding when set. */
  noPadding?: boolean;

  /** Marks the section as a main section for layout and scroll handling. */
  IsMain: boolean;
}>;

/**
 * Props for the `SectionExtShell` component.
 *
 * Defines the structural wrapper for section content, including optional
 * outer and inner class customization and optional inner div suppression.
 */
export type SectionExtShellProps = PropsWithChildren<{
  /** Optional additional class names applied to the section element. */
  ClassNameSection?: string;

  /** Optional additional class names applied to the inner wrapper div. */
  ClassNameSubDiv?: string;

  /** Marks the section as a main section for layout and scroll handling. */
  IsMain: boolean;

  /** Enables default section padding when set. */
  Padding?: boolean;

  /** Section identifier assigned to the rendered section element. */
  SectionId: string;

  /** When true, suppresses rendering of the default inner wrapper div. */
  HideDiv?: boolean;

  /** Optional label identifier for accessibility purposes. */
  LabelBy?: string;
}>;

/**
 * Props for the `ImageElement` component.
 *
 * Defines the image item, semantic image type, and wrapper styling
 * used to render a responsive `next/image` instance.
 */
export type ImageElementProps = PropsWithChildren<{
  /** Optional image item resolved and rendered by the component. */
  ImgItem?: ImgItem;

  /** Semantic image type such as `mobile` or `screen`. */
  ImgType: string;

  /** Section identifier used to derive the image element id and alt text. */
  SectionId: string;

  /** Optional additional class names applied to the image element. */
  ClassName?: string;
}>;

/**
 * Props for the `SectionLyt` component.
 *
 * Defines a semantic section wrapper, optional inner wrapper classes,
 * and label binding for accessibility.
 */
export type SectionLytProps = PropsWithChildren<{
  /** Optional additional class names applied to the section wrapper. */
  sectionClassName?: string;

  /** Optional additional class names applied to the inner div wrapper. */
  DivClassname?: string;

  /** Section identifier assigned to the rendered section element. */
  SectionId: string;

  /** Label element id referenced by the section for accessibility. */
  LabelId: string;

  /** Disables default section padding when set. */
  noPadding?: boolean;

  /** Marks the section as a main section for layout and scroll handling. */
  IsMain?: boolean;
}>;

/**
 * Props for the `CallToAction` component.
 *
 * Defines the call-to-action item rendered by the component.
 */
export type CallToActionProps = {
  /** Structured action content rendered by the component. */
  CallToActionItem: BaseCallToActionItemDef;
};

/**
 * Props for the navigation component.
 *
 * Defines the available section targets, the current section state,
 * and the section selection callback.
 */
export type NavProps = {
  /** Ordered section list rendered by the navigation. */
  navSections: SectionId[];

  /** Currently active section, when available. */
  currentSection: SectionId | null;

  /** Callback invoked when a section is selected. */
  onSelectSection: (section: SectionId) => void;
};

/**
 * Props for a single navigation item component.
 *
 * Defines the target section, active state, visual classes,
 * and item selection behavior.
 */
export type NavItemProps = {
  /** Section represented by the navigation item. */
  section: SectionId;

  /** Marks the item as active when true. */
  current: boolean;

  /** Class names applied when the item is active. */
  activeClass: string;

  /** Class names applied when the item is inactive. */
  inactiveClass: string;

  /** Optional click handler invoked before section selection. */
  onClick?: () => void;

  /** Callback invoked when the section is selected. */
  onSelect: (section: SectionId) => void;
};

/**
 * Structured section id collection.
 *
 * Groups the derived ids used by article and section wrappers,
 * headings, suffix areas, and accessibility bindings.
 */
export type SectionIdsType = {
  /** Main section identifier. */
  idMain: StrngUndfndType;

  /** Article identifier. */
  idArticle: StrngUndfndType;

  /** Main heading identifier. */
  idHMain: StrngUndfndType;

  /** Secondary heading identifier. */
  idHSub: StrngUndfndType;

  /** Suffix wrapper identifier. */
  idSuffix: StrngUndfndType;

  /** `aria-labelledby` reference value for the article element. */
  articleLabelBy: string;
};

/**
 * Structured header id collection.
 *
 * Groups the derived ids used by header wrappers and suffix sections.
 */
export type HeaderIdsType = {
  /** Header identifier. */
  idH: StrngUndfndType;

  /** Suffix identifier. */
  idSuffix: StrngUndfndType;

  /** `aria-labelledby` reference value for the section. */
  sectionLabelBy: StrngUndfndType;
};

/**
 * Structured content id collection.
 *
 * Groups the derived ids used by section wrappers, headings,
 * description blocks, skills, actions, and accessibility bindings.
 */
export type ContentIdsType = {
  /** Section identifier. */
  idSection: StrngUndfndType;

  /** Main heading identifier. */
  idHMain: StrngUndfndType;

  /** Secondary heading identifier. */
  idHSub: StrngUndfndType;

  /** First description heading and content identifiers. */
  idDescription1: {
    /** Heading identifier for the first description block. */
    hdng: StrngUndfndType;

    /** Content identifier for the first description block. */
    id: StrngUndfndType;
  };

  /** Second description heading and content identifiers. */
  idDescription2: {
    /** Heading identifier for the second description block. */
    hdng: StrngUndfndType;

    /** Content identifier for the second description block. */
    id: StrngUndfndType;
  };

  /** Third description heading and content identifiers. */
  idDescription3: {
    /** Heading identifier for the third description block. */
    hdng: StrngUndfndType;

    /** Content identifier for the third description block. */
    id: StrngUndfndType;
  };

  /** Skills section identifier. */
  idSkills: StrngUndfndType;

  /** Call-to-action section identifier. */
  idCallToAction: StrngUndfndType;

  /** `aria-labelledby` reference value for the section. */
  sectionLabelBy: StrngUndfndType;
};