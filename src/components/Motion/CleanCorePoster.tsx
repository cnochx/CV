import {FC, memo} from 'react';

/**
 * Static "Clean Core" — a luminous core wrapped in translucent orbiting shells
 * (Designsheet v3.4 §7.2 / §8, layer L0).
 *
 * This is the base layer of the hero object and ships to *everyone*: it is
 * server-rendered SVG with no JavaScript, no bitmap and no network cost beyond
 * the HTML it is written in. The Tier 2 WebGL scene, when it is allowed to
 * mount at all, simply cross-fades over this composition — so the hero never
 * has an empty hole where a canvas failed to load, and mobile, reduced-motion,
 * Save-Data and crawler visits all get a complete picture.
 *
 * Being SVG rather than a rasterised poster means it stays sharp at any size
 * and costs no extra request, which matters more than photographic fidelity for
 * an abstract shape like this.
 *
 * Purely decorative: `aria-hidden`, non-interactive, and it carries no
 * information that is not already stated in the headline next to it.
 */
const CleanCorePoster: FC = memo(() => (
  <svg
    aria-hidden="true"
    className="h-full w-full"
    fill="none"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* The core: frost white centre falling off into the primary accent. */}
      {/* Kept deliberately dim: the hero copy sits directly on top of this, and
          the contrast receipts in §2 assume a near-black backdrop. The object
          may suggest depth, it may not brighten the text's background. */}
      <radialGradient cx="50%" cy="50%" id="cc-core" r="50%">
        <stop offset="0%" stopColor="#f5f5f7" stopOpacity="0.30" />
        <stop offset="35%" stopColor="#f0abfc" stopOpacity="0.16" />
        <stop offset="70%" stopColor="#e879f9" stopOpacity="0.07" />
        <stop offset="100%" stopColor="#e879f9" stopOpacity="0" />
      </radialGradient>

      {/* Shell edges pick up the two fixed accents, bridged by the violet. */}
      <linearGradient id="cc-shell-a" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#e879f9" stopOpacity="0.55" />
        <stop offset="50%" stopColor="#9d8cf5" stopOpacity="0.30" />
        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.50" />
      </linearGradient>
      <linearGradient id="cc-shell-b" x1="100%" x2="0%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.45" />
        <stop offset="55%" stopColor="#9d8cf5" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#e879f9" stopOpacity="0.40" />
      </linearGradient>

      {/* Soft ambient halo behind everything. */}
      <radialGradient cx="50%" cy="50%" id="cc-halo" r="50%">
        <stop offset="0%" stopColor="#9d8cf5" stopOpacity="0.10" />
        <stop offset="100%" stopColor="#9d8cf5" stopOpacity="0" />
      </radialGradient>
    </defs>

    <circle cx="200" cy="200" fill="url(#cc-halo)" r="190" />

    {/* Orbiting shells: ellipses read as circles seen at an angle, which is what
        gives the flat composition its sense of depth. */}
    <g className="cc-shell cc-shell--outer" style={{transformOrigin: '200px 200px'}}>
      <ellipse
        cx="200"
        cy="200"
        rx="150"
        ry="58"
        stroke="url(#cc-shell-a)"
        strokeWidth="1.25"
        transform="rotate(-18 200 200)"
      />
    </g>
    <g className="cc-shell cc-shell--middle" style={{transformOrigin: '200px 200px'}}>
      <ellipse
        cx="200"
        cy="200"
        rx="120"
        ry="112"
        stroke="url(#cc-shell-b)"
        strokeWidth="1"
        transform="rotate(24 200 200)"
      />
    </g>
    <g className="cc-shell cc-shell--inner" style={{transformOrigin: '200px 200px'}}>
      <ellipse
        cx="200"
        cy="200"
        rx="86"
        ry="132"
        stroke="url(#cc-shell-a)"
        strokeWidth="0.9"
        transform="rotate(-64 200 200)"
      />
    </g>

    <circle cx="200" cy="200" fill="url(#cc-core)" r="86" />
  </svg>
));

CleanCorePoster.displayName = 'CleanCorePoster';
export default CleanCorePoster;
