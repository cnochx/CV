import type {ThemeVariant} from '../data/HeaderDataDef';

/**
 * Shared layout padding for standard content sections.
 */
const SECTION_BASE_CLASS = 'px-4 py-16 md:py-24 lg:px-8';

/**
 * Variant-specific background classes for top-level sections.
 */
const SECTION_VARIANT_CLASS_MAP: Readonly<Record<'dark' | 'bright', string>> = {
  dark: `bg-neutral-800 ${SECTION_BASE_CLASS}`,
  bright: `bg-neutral-100 ${SECTION_BASE_CLASS}`,
};

/**
 * Shared vertical layout for stacked section content blocks.
 */
const SPACER_BASE_CLASS = 'flex flex-col space-y-32';

/**
 * Optional top margin added when a section needs extra visual separation.
 */
const SPACER_MARGIN_CLASS = 'mt-8';

/**
 * Returns the Tailwind class string for a section wrapper
 * based on the configured visual variant.
 *
 * Falls back to the base spacing layout when no supported
 * background variant is provided.
 */
export function getSectionVariantClass(
  variant: ThemeVariant | undefined
): string {
  switch (variant) {
    case 'dark':
      return SECTION_VARIANT_CLASS_MAP.dark;

    case 'bright':
      return SECTION_VARIANT_CLASS_MAP.bright;

    default:
      return SECTION_BASE_CLASS;
  }
}

/**
 * Returns the Tailwind class string for stacked content spacing.
 *
 * Adds an extra top margin when `showSpacer` is enabled.
 */
export function getSpacerClass(
  showSpacer: boolean | undefined
): string {
  return showSpacer
    ? `${SPACER_BASE_CLASS} ${SPACER_MARGIN_CLASS}`
    : SPACER_BASE_CLASS;
}