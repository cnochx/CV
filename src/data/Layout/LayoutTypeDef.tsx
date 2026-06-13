import {PropsWithChildren} from 'react';

import {SetHover} from '../SectionHelperDef';

/**
 * Props for the SectionLayout component.
 *
 * Defines the semantic section wrapper and its optional layout modifiers.
 */
export type SectionLayoutProps = PropsWithChildren<{
  /** Section identifier applied to the `id` attribute. */
  sectionId: string;

  /** Heading identifier referenced by `aria-labelledby` when available. */
  sectionTitle?: string;

  /** Disables the default inner spacing and width constraints. */
  noPadding?: boolean;

  /** Optional additional class names applied to the section element. */
  className?: string;
}>;

/**
 * Props for the HeaderLayout component.
 *
 * Defines the shared header wrapper styling, variant mapping, and optional prefix content.
 */
export type HeaderLayoutProps = PropsWithChildren<{
  /** Optional additional class names applied to the header wrapper. */
  ClassName: string | null;

  /** Semantic variant used to resolve the header styling. */
  Variant: HeaderClassVariantSub;

  /** Border variant used to resolve the optional divider styling. */
  SetBorder: HeaderClassVariantSub;

  /** Optional hover behavior applied to the header wrapper. */
  SetHover?: SetHover;

  /** Enables automatic semantic font color resolution when set. */
  UseFontColor?: boolean;

  /** Optional class names applied to the prefix wrapper. */
  PrefixClassName?: string | undefined;

  /** Optional element rendered before the header content. */
  Prefix?: JSX.Element | undefined;
}>;

/**
 * Props for the IconButtonLayout component.
 *
 * Defines the link target, accessible label, and visual styling for the icon button wrapper.
 */
export type IconButtonLayoutProps = PropsWithChildren<{
  /** Link target rendered by the anchor element. */
  href: string;

  /** Accessible label for the icon-only action. */
  label: string;

  /** Semantic color variant used to resolve the button styling. */
  color?: 'bright' | 'dark' | 'highlight' | 'highlightAlt';

  /** Optional additional class names applied to the anchor element. */
  className?: string;
}>;

/**
 * Allowed semantic variants used by shared header and button layout helpers.
 */
export type HeaderClassVariantSub =
  | 'bright'
  | 'dark'
  | 'highlight'
  | 'highlightAlt'
  | null
  | undefined;