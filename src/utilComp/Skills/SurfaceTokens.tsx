/**
 * Shared Tailwind utility tokens for the skills card surface system.
 *
 * v3.4 "Clean Core" (treasures/designsheet-grellmann-app-v3.4.html §6):
 * resting borders are neutral glass (white/10) — accents retire to states
 * (P6). Active = cyan hairline + cyan glow shadow instead of a double ring.
 * Image overlays are ink-950 alphas under the glass fill; hover LIGHTENS the
 * overlay (more image shows through = the card "catches light"). The rim
 * vignette survives from v1 with softened v3 values — it reads as ambient
 * occlusion and stays licensed for image cards only.
 *
 * The outer and inner overlay tokens are intentionally split so both card
 * levels stay visually aligned while keeping different depth strengths.
 */

export const SKILLS_SURFACE_TOKENS = {
  // `lit` + `tilt-target` are Tier 1 utilities (globalStyles.scss) driven by
  // useReactiveLight; they collapse to flat surfaces under reduced motion.
  containerBase:
    'group relative overflow-hidden rounded-2xl text-frost-100 transition-colors duration-200 lit tilt-target',

  articleSpacing:
    'flex flex-col gap-4 p-4 cursor-pointer bg-cover bg-center bg-no-repeat',

  sectionSpacing:
    'flex h-auto w-96 flex-col p-4 cursor-pointer',

  borderActive: 'border border-accent-400/55',
  borderInactive: 'border border-white/10',

  iconActive: 'text-accent-400',
  iconInactive: 'text-primary-400',

  progressActive: 'bg-accent-400',
  progressInactive: 'bg-primary-400',

  overlayOuter:
    'absolute inset-0 rounded-2xl bg-ink-950/45 transition-colors duration-200 group-hover:bg-ink-950/25',

  overlayInner:
    'absolute inset-0 rounded-2xl bg-ink-950/35 transition-colors duration-200 group-hover:bg-ink-950/20',

  rimOuter:
    'absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.28)_78%,rgba(0,0,0,0.5)_100%)]',

  rimInner:
    'absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.14)_72%,rgba(0,0,0,0.3)_100%)]',

  contentLayer: 'relative z-10',

  activeRingOuter: 'shadow-glow-accent',

  activeRingInner: 'shadow-glow-accent',
} as const;
