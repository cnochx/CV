
/*
 * `SetColor` and `Tailwind` lived here to support a runtime class builder in
 * SectionHelper. That builder was never called, and several of its tokens
 * (purple, pink, stone) named colors that v3.4 retired. Both were removed
 * together with it — the semantic variants that are actually in use live in
 * HeaderLayoutSub and IconButtonLayoutSub, where they are full literal class
 * names that Tailwind's scanner can see.
 */

/**
 * Defines the supported hover style values.
 *
 * Allows either a custom hover class string or `none` to disable
 * additional hover styling.
 */
export type SetHover =
  | string
  | 'none';