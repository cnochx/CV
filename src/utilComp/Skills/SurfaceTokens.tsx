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
  // `bg-clip-padding` keeps the background image out of the border area. A
  // border is painted over the background by default, and the overlay/vignette
  // layers only cover the padding box — so a 10% white hairline would show the
  // raw wood texture through it and read as a blotchy edge instead of a line.
  // Clipping the background makes the border sit on the dark section surface.
  containerBase:
    'group relative overflow-hidden rounded-2xl bg-clip-padding text-frost-100 transition-colors duration-200',

  // Tier 1 motion utilities (globalStyles.scss), driven by useReactiveLight and
  // collapsing to flat surfaces under reduced motion.
  //
  // Deliberately applied to the OUTER card only: CSS custom properties inherit,
  // so tagging the nested cards as well would make them rotate with the parent's
  // --tilt-* values and paint a second sheen gradient — visually wrong and a
  // needless per-frame compositing cost.
  articleSpacing:
    'flex flex-col gap-4 p-4 cursor-pointer bg-cover bg-center bg-no-repeat lit tilt-target',

  sectionSpacing:
    'flex h-auto w-96 flex-col p-4 cursor-pointer',

  borderActive: 'border border-accent-400/55',
  borderInactive: 'border border-white/10',

  iconActive: 'text-accent-400',
  iconInactive: 'text-primary-400',

  progressActive: 'bg-accent-400',
  progressInactive: 'bg-primary-400',

  // Hover-driven states are selected in React, not with `group-hover`. CSS
  // hover switches the instant the pointer crosses the geometric edge, which
  // the tilt itself keeps moving — that ignores the leave hysteresis and makes
  // the surface flicker. Driving them from the debounced state keeps every
  // hover reaction in sync.
  overlayBase: 'absolute inset-0 rounded-2xl transition-colors duration-200',

  overlayOuterRest: 'bg-ink-950/45',
  overlayOuterActive: 'bg-ink-950/25',

  overlayInnerRest: 'bg-ink-950/35',
  overlayInnerActive: 'bg-ink-950/20',

  rimOuter:
    'absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.28)_78%,rgba(0,0,0,0.5)_100%)]',

  rimInner:
    'absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.14)_72%,rgba(0,0,0,0.3)_100%)]',

  contentLayer: 'relative z-10',

  activeRingOuter: 'shadow-glow-accent',

  activeRingInner: 'shadow-glow-accent',
} as const;
