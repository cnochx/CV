import {ThemeVariant} from '../data/HeaderDataDef';
import {SetColor, Tailwind} from '../data/SectionHelperDef';
import {StaticImageData} from 'next/image';

/**
 * Maps semantic color tokens to Tailwind color values.
 *
 * Operations:
 * - Provides shared color values for background, text, border, ring, and stroke helpers.
 * - Uses empty strings for tokens that should not resolve to a color utility.
 */
const COLOR_MAP: Readonly<Record<SetColor, string>> = {
  bright: 'neutral-100',
  dark: 'neutral-800',
  mediumDark: 'neutral-700',
  mediumBright: 'gray-800',
  highlight: 'fuchsia-400',
  highlightAlt: 'cyan-500',
  purpleDef: 'purple-500',
  purplePale: 'purple-200',
  purpleDark: 'purple-800',
  pinkDef: 'pink-500',
  stoneBright: 'stone-100',
  stoneMediumBright: 'stone-200',
  stoneDef: 'stone-300',
  default: '',
  none: '',
};

/**
 * Resolves a Tailwind color utility class for a semantic color token.
 *
 * Operations:
 * - Combines the provided utility prefix with the mapped color value.
 * - Appends an opacity modifier when `opacity` is provided.
 * - Returns an empty string when the color token does not map to a color value.
 *
 * @param {Tailwind} utility - Tailwind utility prefix such as `bg`, `text`, `border`, `ring`, or `stroke`.
 * @param {SetColor} type - Semantic color token to resolve.
 * @param {'10' | '20' | '50' | '75' | '90'} [opacity] - Optional opacity modifier appended to the color value.
 * @returns {string} Tailwind CSS class for the resolved color utility.
 */
export const getColorOpacityClassMap = (
  utility: Tailwind,
  type: SetColor,
  opacity?: '10' | '20' | '50' | '75' | '90'
): string => {
  const color = COLOR_MAP[type];
  if (!color) return '';

  return opacity ? `${utility}-${color}/${opacity}` : `${utility}-${color}`;
};

/**
 * Resolves a semantic color token from a theme variant.
 *
 * Operations:
 * - Reverses dark and bright variants when `rev` is enabled.
 * - Maps all other variants to the configured highlight token.
 *
 * @param {ThemeVariant} variant - Theme variant to normalize.
 * @param {boolean} rev - Whether dark and bright variants should be inverted.
 * @returns {string} Resolved semantic color token.
 */
export const mapVariantTypeRev = (variant: ThemeVariant, rev: boolean): SetColor => {
  if (rev) {
    switch (variant) {
      case 'dark':
      case 'dark-pill':
      case 'dark-pill-bg':
        return 'bright';

      case 'bright':
      case 'bright-pill':
      case 'bright-pill-bg':
        return 'dark';

      default:
        return 'highlightAlt';
    }
  }

  switch (variant) {
    case 'dark':
    case 'dark-pill':
    case 'dark-pill-bg':
      return 'dark';

    case 'bright':
    case 'bright-pill':
    case 'bright-pill-bg':
      return 'bright';

    default:
      return 'highlight';
  }
};

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
 * - Returns the shared vertical stack classes by default.
 * - Appends an additional top margin when `showSpacer` is enabled.
 *
 * @param {boolean | undefined} showSpacer - Whether to include additional top spacing.
 * @returns {string} Tailwind CSS class string for the resolved spacing setup.
 */
export function getSpacerClass(showSpacer: boolean | undefined): string {
  return showSpacer
    ? `${SPACER_BASE_CLASS} ${SPACER_MARGIN_CLASS}`
    : SPACER_BASE_CLASS;
}


/**
 * Resolves a usable image source string from either a plain URL or a Next.js static image object.
 *
 * Returns `undefined` when no image source is provided.
 *
 * @param imageSrc - Optional image source value as a string URL or `StaticImageData`.
 * @returns A normalized image source string, or `undefined` if no image source exists.
 */
export const resolveImageSrc = (
  imageSrc?: string | StaticImageData
): string | undefined => {
  if (!imageSrc) return undefined;

  return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
};
