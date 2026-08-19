/**
 * v3.4 "Clean Core" mapping (designsheet §6): the accent-swap games of v1
 * (fuchsia ring on cyan bg etc.) simplify to tinted glass — bg = own accent
 * at 15% alpha, ring = own accent. Focus is always the cyan response ring.
 */
const ICON_BUTTON_COLOR_MAP = {
  bright: {
    text: 'text-frost-100',
    ring: 'ring-white/10',
    bg: 'bg-white/5 backdrop-blur-md',
    focusRing: 'focus:ring-accent-400',
    offsetRing: 'ring-offset-ink-950',
  },
  dark: {
    text: 'text-ink-950',
    ring: 'ring-ink-950',
    bg: 'bg-frost-100/90',
    focusRing: 'focus:ring-accent-400',
    offsetRing: 'ring-offset-ink-950',
  },
  highlight: {
    text: 'text-primary-400',
    ring: 'ring-primary-400',
    bg: 'bg-primary-400/15',
    focusRing: 'focus:ring-accent-400',
    offsetRing: 'ring-offset-ink-950',
  },
  highlightAlt: {
    text: 'text-accent-400',
    ring: 'ring-accent-400',
    bg: 'bg-accent-400/15',
    focusRing: 'focus:ring-accent-400',
    offsetRing: 'ring-offset-ink-950',
  },
} as const;

export function getIconButtonLayoutClass(
  color: keyof typeof ICON_BUTTON_COLOR_MAP = 'bright'
): string {
  const c = ICON_BUTTON_COLOR_MAP[color];

  return [
    'rounded-full',
    c.bg,
    'p-1',
    'sm:p-2',
    c.text,
    'ring-1',
    c.ring,
    'ring-offset-2',
    c.offsetRing,
    'focus:outline-none',
    'focus:ring-2',
    c.focusRing,
    'transition-colors',
    'duration-200',
  ].join(' ');
}
