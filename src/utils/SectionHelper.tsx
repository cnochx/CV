import type {ThemeVariant} from '../data/HeaderDataDef';
import {setBorder} from '../data/LayoutDef';

/**
 * Shared padding classes used by standard content sections.
 *
 * @constant {string}
 */
const SECTION_BASE_CLASS = 'px-4 py-16 md:py-24 lg:px-8';

/**
 * Maps supported top-level section variants to their Tailwind background
 * and spacing classes.
 *
 * @constant {Readonly<Record<'dark' | 'bright', string>>}
 */
const SECTION_VARIANT_CLASS_MAP: Readonly<Record<'dark' | 'bright', string>> = {
  dark: `bg-neutral-800 ${SECTION_BASE_CLASS}`,
  bright: `bg-neutral-100 ${SECTION_BASE_CLASS}`,
};

/**
 * Returns the Tailwind class string for a section wrapper based on the
 * provided theme variant.
 *
 * Variants related to `dark` return the dark section styling, variants
 * related to `bright` return the bright section styling, and unsupported
 * or missing variants fall back to the shared base spacing classes.
 *
 * @param {ThemeVariant | undefined} variant - Theme variant used to resolve the section wrapper styling.
 * @returns {string} Tailwind class string for the resolved section variant.
 */
export function getSectionVariantClass(
  variant: ThemeVariant | undefined
): string {
  switch (variant) {
    case 'dark':
    case 'dark-pill':
    case 'dark-pill-bg':
      return SECTION_VARIANT_CLASS_MAP.dark;

    case 'bright':
    case 'bright-pill':
    case 'bright-pill-bg':
      return SECTION_VARIANT_CLASS_MAP.bright;

    default:
      return SECTION_BASE_CLASS;
  }
}

/**
 * Maps supported theme groups to their Tailwind font color classes.
 *
 * @constant {Readonly<Record<'bright' | 'dark' | 'default', string>>}
 */
const FONT_COLOR_CLASS_MAP: Readonly<Record<'bright' | 'dark' | 'default', string>> = {
  dark: `text-black`,
  bright: `text-white`,
  default: `text-neutral-500`,
};

/**
 * Returns the Tailwind class string for the font color based on the
 * provided theme variant.
 *
 * Variants related to `dark` return a bright font color for contrast,
 * variants related to `bright` return a dark font color, and unsupported
 * or missing variants fall back to the default font color.
 *
 * @param {ThemeVariant | undefined} variant - Theme variant used to resolve the font color class.
 * @returns {string} Tailwind class string for the resolved font color.
 */
export function getFontColorClass(
  variant: ThemeVariant | undefined
): string {
  switch (variant) {
    case 'dark':
    case 'dark-pill':
    case 'dark-pill-bg':
      return FONT_COLOR_CLASS_MAP.bright;

    case 'bright':
    case 'bright-pill':
    case 'bright-pill-bg':
      return FONT_COLOR_CLASS_MAP.dark;

    default:
      return FONT_COLOR_CLASS_MAP.default;
  }
}

/**
 * Maps supported border types to their Tailwind border color classes.
 *
 * @constant {Readonly<Record<'primary' | 'secondary' | 'default', string>>}
 */
const BORDER_COLOR_CLASS_MAP: Readonly<Record<setBorder, string>> = {
  primary: `border-fuchsia-400`,
  secondary: `border-cyan-500`,
  default: `border-fuchsia-500`,
  none: `border-none`,
};

/**
 * Returns the Tailwind class string for a border color based on the
 * provided border type.
 *
 * Unsupported or missing values fall back to the default border color.
 *
 * @param {'primary' | 'secondary' | 'default' | undefined} type - Border type used to resolve the border color class.
 * @returns {string} Tailwind class string for the resolved border color.
 */
export function getBorderColorClass(
  type: setBorder
): string {
  switch (type) {
    case 'primary':
      return BORDER_COLOR_CLASS_MAP.primary;

    case 'secondary':
      return BORDER_COLOR_CLASS_MAP.secondary;

    default:
      return BORDER_COLOR_CLASS_MAP.default;
  }
}

/**
 * Shared vertical layout classes for stacked section content.
 *
 * @constant {string}
 */
const SPACER_BASE_CLASS = 'flex flex-col space-y-32';

/**
 * Optional top margin class used to add extra visual separation.
 *
 * @constant {string}
 */
const SPACER_MARGIN_CLASS = 'mt-8';

/**
 * Returns the Tailwind class string for stacked content spacing.
 *
 * Adds an extra top margin when `showSpacer` is enabled; otherwise,
 * returns the shared stacked layout classes only.
 *
 * @param {boolean | undefined} showSpacer - Controls whether an additional top margin is included.
 * @returns {string} Tailwind class string for stacked content spacing.
 */
export function getSpacerClass(
  showSpacer: boolean | undefined
): string {
  return showSpacer
    ? `${SPACER_BASE_CLASS} ${SPACER_MARGIN_CLASS}`
    : SPACER_BASE_CLASS;
}