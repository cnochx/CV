
/**
 * Defines the semantic color tokens used by section style helpers.
 *
 * Keeps shared color variant values consistent across background, text,
 * border, and ring class resolution.
 */
export type SetColor =
  | 'bright'
  | 'dark'
  | 'mediumDark'
  | 'mediumBright'
  | 'highlight'
  | 'highlightAlt'
  | 'purpleDef'
  | 'purpleDark'
  | 'purplePale'
  | 'pinkDef'
  | 'stoneBright'
  | 'stoneMediumBright'
  | 'stoneDef'
  | 'default'
  | 'none';

/**
 * Defines the supported hover style values.
 *
 * Allows either a custom hover class string or `none` to disable
 * additional hover styling.
 */
export type SetHover =
  | string
  | 'none';

export type Tailwind =
  | 'bg'
  | 'text'
  | 'border'
  | 'ring'
  | 'stroke'
  | 'from'
  | 'to'
  | 'offset'
  | undefined;