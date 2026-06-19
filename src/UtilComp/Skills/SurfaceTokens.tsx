/**
 * Shared Tailwind utility tokens for the skills card surface system.
 *
 * Centralizes reusable class fragments for the outer `SkillsArticle` cards and
 * inner `SkillsSection` cards, including layout, active and inactive accent colors,
 * overlay and rim layers, content stacking, and active ring styling.
 *
 * The outer and inner overlay tokens are intentionally split so both card levels
 * can stay visually aligned while keeping different depth and contrast strengths.
 */

export const SKILLS_SURFACE_TOKENS = {
  containerBase:
    'group relative overflow-hidden rounded-2xl text-neutral-100 transition-colors duration-200',

  articleSpacing:
    'flex flex-col gap-4 p-4 cursor-pointer bg-cover bg-center bg-no-repeat',

  sectionSpacing:
    'flex h-auto w-96 flex-col p-4 cursor-pointer',

  borderActive: 'border border-cyan-400',
  borderInactive: 'border border-fuchsia-400',

  iconActive: 'text-cyan-400',
  iconInactive: 'text-fuchsia-400',

  progressActive: 'bg-cyan-400',
  progressInactive: 'bg-fuchsia-400',

  overlayOuter:
    'absolute inset-0 rounded-2xl bg-gray-800/50 transition-colors duration-200 group-hover:bg-stone-700/65',

  overlayInner:
    'absolute inset-0 rounded-2xl bg-gray-800/35 transition-colors duration-200 group-hover:bg-stone-700/45',

  rimOuter:
    'absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.38)_78%,rgba(0,0,0,0.62)_100%)]',

  rimInner:
    'absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(0,0,0,0.16)_72%,rgba(0,0,0,0.34)_100%)]',

  contentLayer: 'relative z-10',

  activeRingOuter:
    'ring-1 ring-fuchsia-400/60 ring-offset-1 ring-offset-stone-800',

  activeRingInner:
    'ring-1 ring-fuchsia-400/60 ring-offset-1 ring-offset-stone-800',
} as const;