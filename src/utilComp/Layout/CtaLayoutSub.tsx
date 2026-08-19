/**
 * Shared class recipes for the call-to-action family.
 *
 * Single source of truth for the v3.4 "Clean Core" CTA language
 * (treasures/designsheet-grellmann-app-v3.4.html §6/§9) so the hero actions,
 * the pill CTAs and the jump CTA cannot drift apart.
 *
 * Two variants, strict roles:
 * - `primary`   — solid `primary-400` fill with `ink-950` label (8.04:1),
 *                 hover lightens to 300 (11.24:1) + lift + wide fuchsia glow.
 *                 Reserved for the one main action of a section.
 * - `secondary` — glass pill (white/5 + white/10 hairline). Hover speaks the
 *                 cyan response: wash `accent-400/14`, cyan border and label,
 *                 plus lift and cyan glow. No accent border at rest (P6).
 *
 * Motion note: transforms are flattened under `prefers-reduced-motion`, while
 * color, border and glow changes stay fully visible.
 */

const CTA_BASE =
  'inline-flex items-center justify-center gap-x-2 rounded-full text-sm font-medium ' +
  'transition duration-200 ease-out focus:outline-none focus-visible:ring-2 ' +
  'focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ' +
  'motion-reduce:hover:transform-none sm:text-base';

const CTA_VARIANT_MAP = {
  primary:
    'border border-primary-400 bg-primary-400 font-semibold text-ink-950 shadow-e1 ' +
    'hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-300 hover:shadow-glow-primary-lg',
  secondary:
    'border border-white/10 bg-white/5 text-frost-100 backdrop-blur-md ' +
    'hover:-translate-y-0.5 hover:border-accent-400/55 hover:bg-accent-400/15 ' +
    'hover:text-accent-300 hover:shadow-glow-accent',
} as const;

/**
 * Resolves the class string for one call-to-action pill.
 *
 * Operations:
 * - Selects the `primary` recipe when the CTA is flagged as primary, otherwise `secondary`.
 * - Merges the shared base classes, the variant recipe and any extra classes.
 *
 * @param {boolean | undefined} isPrimary - Controls whether the primary recipe is applied.
 * @param {string} [className] - Optional additional classes, typically sizing or width.
 * @returns {string} Space-separated Tailwind class string for the CTA element.
 */
export function getCtaPillClass(
  isPrimary: boolean | undefined,
  className?: string,
): string {
  const variant = isPrimary ? 'primary' : 'secondary';

  return [CTA_BASE, CTA_VARIANT_MAP[variant], className]
    .filter(Boolean)
    .join(' ');
}

export default getCtaPillClass;
