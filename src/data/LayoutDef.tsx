/**
 * Defines the supported border style variants used to resolve
 * Tailwind border color classes in layout and section helpers.
 */
export type SetBorder =
  | 'primary'
  | 'secondary'
  | 'default'
  | 'none';

/**
 * Defines the supported visual theme variants used across components
 * to resolve font colors, backgrounds, and section styling.
 *
 * Includes standard themes, pill-based theme variations,
 * contrast variants, and `null` as an optional fallback state.
 */
export type ColorVariant =
  | 'dark'
  | 'bright'
  | 'dark-pill'
  | 'dark-pill-bg'
  | 'bright-pill'
  | 'bright-pill-bg'
  | 'contrast'
  | 'contrast_alt'
  | null;

/**
 * Defines the supported hover configuration values.
 *
 * Allows any custom hover class string or the explicit `'none'`
 * value to disable hover styling.
 */
export type SetHover =
  | string
  | 'none';

/**
 * Defines the supported background color variants used to resolve
 * Tailwind background classes for sections and layout containers.
 *
 * Includes standard theme variants, pill-related background variants,
 * a medium contrast option, and `null` as an optional fallback state.
 */
export type BackgroundColor =
  | 'dark'
  | 'bright'
  | 'dark-pill'
  | 'dark-pill-bg'
  | 'bright-pill'
  | 'bright-pill-bg'
  | 'medium-contrast'
  | null;

/**
 * Defines the supported semantic font color groups used to resolve
 * Tailwind text color classes.
 */
export type SetFontColor =
  | 'bright'
  | 'dark'
  | 'default'
  | 'contrast'
  | 'contrastAlt';

/**
 * Defines the supported semantic background color groups used to resolve
 * Tailwind background classes from normalized theme values.
 */
export type SetBackgroundColor =
  | 'dark'
  | 'bright'
  | 'medium';