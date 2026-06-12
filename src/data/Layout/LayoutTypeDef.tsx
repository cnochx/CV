import {PropsWithChildren} from 'react';

import {SetHover} from '../SectionHelperDef';

/**
 * Props for the SectionLayout component.
 *
 * Defines the semantic section wrapper, spacing behavior, and optional custom classes.
 */
export type SectionLayoutProps = PropsWithChildren<{
  /** Unique section identifier used for the `id` and `aria-labelledby` attributes. */
  sectionId: string;
  /** Optional section title identifier or heading id associated with this section. */
  sectionTitle?: string;
  /** Disables default padding and max-width constraints when set to true. */
  noPadding?: boolean;
  /** Optional additional class names applied to the outer section element. */
  className?: string;
}>;

/**
 * Props for the `HeaderLayout` component.
 *
 * Defines the wrapper styling, visual variant, optional hover behavior,
 * and border rendering for shared header content.
 */
export type HeaderLayoutProps = PropsWithChildren<{
  /** Optional additional class names applied to the header wrapper. */
  ClassName: string | null;

  /** Theme variant used to resolve the semantic font color. */
  Variant: HeaderClassVariantSub;

  /** Border variant used to resolve the optional bottom border style. */
  SetBorder: HeaderClassVariantSub;

  /** Optional hover class applied to the header wrapper. */
  SetHover?: SetHover;

  /** Controls whether the semantic font color should be applied automatically. */
  UseFontColor?: boolean;
}>;

/**
 * Props for the IconButtonLayout component.
 *
 * Defines the visual configuration and link target for a reusable icon button wrapper.
 */
export type IconButtonLayoutProps = PropsWithChildren<{
  /** Link target rendered by the wrapper anchor element. */
  href: string;

  /** Accessible label used for the icon-only link. */
  label: string;

  /** Semantic color variant used to resolve button styling. */
  color?: 'bright' | 'dark' | 'highlight' | 'highlightAlt';

  /** Optional additional class names applied to the anchor element. */
  className?: string;
}>;

export type HeaderClassVariantSub = 'bright' | 'dark' | 'highlight' | 'highlightAlt' | null | undefined;