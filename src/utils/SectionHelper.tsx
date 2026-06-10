import {
  BackgroundColor,
  ColorVariant,
  SetBackgroundColor,
  SetBorder,
  SetFontColor,
} from '../data/LayoutDef';

/**
 * Shared helper functions for resolving semantic layout variants
 * to Tailwind CSS utility classes.
 *
 * Operations:
 * - Maps semantic background variants to Tailwind background classes.
 * - Maps semantic color variants to Tailwind text color classes.
 * - Maps semantic border variants to Tailwind border classes.
 * - Resolves optional spacing classes for vertically stacked layouts.
 */

/**
 * Maps normalized background color variants to their Tailwind background classes.
 *
 * @constant {Readonly<Record<SetBackgroundColor, string>>}
 */
const BACKGROUND_COLOR_CLASS_MAP: Readonly<Record<SetBackgroundColor, string>> = {
  dark: 'bg-neutral-800',
  bright: 'bg-neutral-50',
  medium: 'bg-neutral-700',
};

/**
 * Resolves the Tailwind background class for a semantic background variant.
 *
 * Operations:
 * - Maps dark-related variants to the shared dark background class.
 * - Maps bright-related variants to the shared bright background class.
 * - Maps `medium-contrast` to the shared medium background class.
 * - Falls back to the dark background class for unsupported or missing values.
 *
 * @param {BackgroundColor} variant - Semantic background variant to resolve.
 * @returns {string} Tailwind CSS class for the resolved background color.
 */
export function getBackGroundColorClass(
  variant: BackgroundColor
): string {
  switch (variant) {
    case 'dark':
    case 'dark-pill':
    case 'dark-pill-bg':
      return BACKGROUND_COLOR_CLASS_MAP.dark;

    case 'bright':
    case 'bright-pill':
    case 'bright-pill-bg':
      return BACKGROUND_COLOR_CLASS_MAP.bright;

    case 'medium-contrast':
      return BACKGROUND_COLOR_CLASS_MAP.medium;

    default:
      return BACKGROUND_COLOR_CLASS_MAP.dark;
  }
}

/**
 * Maps normalized font color variants to their Tailwind text color classes.
 *
 * @constant {Readonly<Record<SetFontColor, string>>}
 */
const FONT_COLOR_CLASS_MAP: Readonly<Record<SetFontColor, string>> = {
  dark: 'text-neutral-900',
  bright: 'text-neutral-50',
  contrast: 'text-fuchsia-400',
  contrastAlt: 'text-cyan-500',
  default: 'text-neutral-500',
};

/**
 * Resolves the Tailwind text color class for a semantic color variant.
 *
 * Operations:
 * - Maps dark-related variants to a bright text color for contrast.
 * - Maps bright-related variants to a dark text color for contrast.
 * - Maps contrast variants to their dedicated accent colors.
 * - Falls back to the default text color for unsupported or missing values.
 *
 * @param {ColorVariant} variant - Semantic color variant to resolve.
 * @returns {string} Tailwind CSS class for the resolved font color.
 */
export function getFontColorClass(
  variant: ColorVariant
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

    case 'contrast':
      return FONT_COLOR_CLASS_MAP.contrast;

    case 'contrast_alt':
      return FONT_COLOR_CLASS_MAP.contrastAlt;

    default:
      return FONT_COLOR_CLASS_MAP.default;
  }
}

/**
 * Maps semantic border variants to their Tailwind border classes.
 *
 * @constant {Readonly<Record<SetBorder, string>>}
 */
const BORDER_COLOR_CLASS_MAP: Readonly<Record<SetBorder, string>> = {
  primary: 'border-fuchsia-400',
  secondary: 'border-cyan-500',
  default: 'border-fuchsia-500',
  none: 'border-none',
};

/**
 * Resolves the Tailwind border class for a semantic border variant.
 *
 * Operations:
 * - Maps primary and secondary variants to their dedicated accent border classes.
 * - Maps `none` to a border reset class.
 * - Falls back to the default border class for unsupported values.
 *
 * @param {SetBorder} type - Semantic border variant to resolve.
 * @returns {string} Tailwind CSS class for the resolved border color.
 */
export function getBorderColorClass(
  type: SetBorder
): string {
  switch (type) {
    case 'primary':
      return BORDER_COLOR_CLASS_MAP.primary;

    case 'secondary':
      return BORDER_COLOR_CLASS_MAP.secondary;

    case 'none':
      return BORDER_COLOR_CLASS_MAP.none;

    default:
      return BORDER_COLOR_CLASS_MAP.default;
  }
}

/**
 * Base Tailwind classes for vertically stacked layout sections.
 *
 * @constant {string}
 */
const SPACER_BASE_CLASS = 'flex flex-col space-y-32';

/**
 * Additional Tailwind margin class applied when extra top spacing is required.
 *
 * @constant {string}
 */
const SPACER_MARGIN_CLASS = 'mt-8';

/**
 * Resolves the Tailwind spacing classes for vertically stacked content.
 *
 * Operations:
 * - Returns the shared base stack classes by default.
 * - Appends an additional top margin when `showSpacer` is enabled.
 *
 * @param {boolean | undefined} showSpacer - Whether to include additional top spacing.
 * @returns {string} Tailwind CSS class string for the resolved spacing setup.
 */
export function getSpacerClass(
  showSpacer: boolean | undefined
): string {
  return showSpacer
    ? `${SPACER_BASE_CLASS} ${SPACER_MARGIN_CLASS}`
    : SPACER_BASE_CLASS;
}