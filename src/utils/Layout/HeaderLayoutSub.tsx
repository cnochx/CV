import {SetHover} from '../../data/SectionHelperDef';

const ICON_BUTTON_COLOR_MAP = {
  bright: {
    border: 'border-neutral-100',
    text: 'text-neutral-100',
  },
  dark: {
    border: 'border-neutral-800',
    text: 'text-neutral-800',
  },
  highlight: {
    border: 'border-fuchsia-400',
    text: 'text-fuchsia-400',
  },
  highlightAlt: {
    border: 'border-cyan-500',
    text: 'text-cyan-500',
  }
} as const;

/**
 * Resolves header text and hover classes for a semantic color variant.
 *
 * Operations:
 * - Falls back to the `bright` color variant when `colorVar` is `null` or `undefined`.
 * - Applies the semantic text color class when `useFontColor` is enabled.
 * - Applies an optional hover class when provided and not equal to `none`.
 * - Merges the resolved classes with any additional header class names.
 *
 * @param {keyof typeof ICON_BUTTON_COLOR_MAP | null | undefined} colorVar - Semantic color variant used to resolve text styling.
 * @param {boolean} [useFontColor=true] - Controls whether the semantic font color should be applied automatically.
 * @param {string | null} className - Optional additional class names applied to the header wrapper.
 * @param {SetHover} [setHover] - Optional hover class applied to the header wrapper.
 * @returns {string} Space-separated Tailwind class string for the header element.
 */
export function getHeaderClass(
  colorVar: keyof typeof ICON_BUTTON_COLOR_MAP | null | undefined,
  useFontColor: boolean = true,
  className: string | null,
  setHover?: SetHover
): string {
  const resolvedColor: keyof typeof ICON_BUTTON_COLOR_MAP =
    colorVar ?? 'bright';

  const c = ICON_BUTTON_COLOR_MAP[resolvedColor];
  const fontColorClass = useFontColor ? c.text : '';

  const hoverClass =
    setHover && setHover !== 'none'
      ? setHover
      : '';

  return [fontColorClass, hoverClass, className]
    .filter(Boolean)
    .join(' ');
}

/**
 * Resolves decorative header border settings for a semantic color variant.
 *
 * Operations:
 * - Returns no border when `colorVar` is `null` or `undefined`.
 * - Determines whether a bottom border should be rendered based on the border token.
 * - Maps the selected color variant to a semantic border color class.
 * - Returns both a render flag and a composed Tailwind class string for the border.
 *tic color variant used to resolve border styling.
 * @param {SetColor} setBorder - Border variant used to control whether the border is rendered.
 * @returns {{ borderRender: boolean; borderClass: string }} Border render flag and Tailwind class string.
 */
export function getHeaderBorder(
  setBorder: keyof typeof ICON_BUTTON_COLOR_MAP | null | undefined,
) {

  const resolvedColor: keyof typeof ICON_BUTTON_COLOR_MAP =
    setBorder ?? 'bright';

  const c = ICON_BUTTON_COLOR_MAP[resolvedColor];

  const borderRender =
    setBorder === 'bright' ||
    setBorder === 'dark' ||
    setBorder === 'highlight' ||
    setBorder === 'highlightAlt';

  return {
    borderRender: borderRender,
    borderColorClass: c.border
  };
}

export default getHeaderBorder;