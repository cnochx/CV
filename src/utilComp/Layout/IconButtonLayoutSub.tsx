
const ICON_BUTTON_COLOR_MAP = {
  bright: {
    text: 'text-fuchsia-400',
    ring: 'ring-neutral-100',
    bg: 'bg-gray-800/90',
    focusRing: 'focus:ring-fuchsia-400',
    offsetRing: 'ring-offset-gray-800',
  },
  dark: {
    text: 'text-neutral-800',
    ring: 'ring-neutral-800',
    bg: 'bg-neutral-700/90',
    focusRing: 'focus:ring-fuchsia-400',
    offsetRing: 'ring-offset-gray-800',
  },
  highlight: {
    text: 'text-fuchsia-400',
    ring: 'ring-fuchsia-400',
    bg: 'bg-cyan-300/40',
    focusRing: 'focus:ring-fuchsia-400',
    offsetRing: 'ring-offset-gray-800',
  },
  highlightAlt: {
    text: 'text-cyan-500',
    ring: 'ring-cyan-500',
    bg: 'bg-fuchsia-400/90',
    focusRing: 'focus:ring-fuchsia-400',
    offsetRing: 'ring-offset-gray-800',
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
