import {SetHover} from '../../data/SectionHelperDef';

/**
 * Provides semantic border and text class mappings for shared icon button helpers.
 *
 * v3.4 "Clean Core" mapping (designsheet §6, semantic variant enum):
 * bright = default on ink surfaces · dark = on accent/frost fills only ·
 * highlight = primary identity accent · highlightAlt = active/response.
 */
const ICON_BUTTON_COLOR_MAP = {
  bright: {
    border: 'bg-white/10',
    text: 'text-frost-100',
  },
  dark: {
    border: 'bg-ink-950',
    text: 'text-ink-950',
  },
  // v3.4: the section-header hairline for the primary variant is the aurora
  // gradient (fuchsia → violet → cyan) — the only gradient in the system,
  // licensed for 1–2px underlines and rails only (designsheet §2).
  highlight: {
    border: 'bg-aurora',
    text: 'text-primary-400',
  },
  highlightAlt: {
    border: 'bg-accent-400',
    text: 'text-accent-400',
  }
} as const;

/**
 * Resolves header text and hover classes for a semantic color variant.
 *
 * Operations:
 * - Falls back to the `bright` color variant when no variant is provided.
 * - Applies the semantic text color class when `useFontColor` is enabled.
 * - Appends the hover class when provided and not equal to `none`.
 * - Merges resolved classes with any additional class names.
 *
 * @param {keyof typeof ICON_BUTTON_COLOR_MAP | null | undefined} useVariantText - Semantic color variant used to resolve text styling.
 * @param {boolean} [useFontColor=true] - Controls whether the semantic font color should be applied automatically.
 * @param {string | null} className - Optional additional class names applied to the header element.
 * @param {SetHover} [setHover] - Optional hover class applied to the header element.
 * @returns {string} Space-separated Tailwind class string for the header element.
 */
export function getHeaderClass(
  useVariantText: keyof typeof ICON_BUTTON_COLOR_MAP | null | undefined,
  useFontColor: boolean = true,
  className: string | null | undefined,
  setHover?: SetHover
): string {
  const resolvedColor: keyof typeof ICON_BUTTON_COLOR_MAP =
    useVariantText ?? 'bright';

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
 * - Falls back to the `bright` color variant when no variant is provided.
 * - Enables border rendering only for supported semantic border variants.
 * - Maps the resolved variant to the matching semantic border color class.
 *
 * @param {keyof typeof ICON_BUTTON_COLOR_MAP | null | undefined} setBorder - Semantic color variant used to resolve border styling.
 * @returns {{ borderRender: boolean; borderColorClass: string }} Border render flag and semantic Tailwind border class.
 */
export function getHeaderBorder(
  setBorder: keyof typeof ICON_BUTTON_COLOR_MAP | null | undefined,
): { borderRender: boolean; borderColorClass: string; } {
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