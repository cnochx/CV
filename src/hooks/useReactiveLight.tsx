import {MouseEvent as ReactMouseEvent, useCallback, useEffect, useRef} from 'react';

import {useMotionGate} from './useMotionGate';

/** Maximum tilt in degrees — Apple restraint (Designsheet §5: caps at ±4°). */
const TILT_MAX_DEG = 4;

/** Must outlast the CSS glide-back so the transform is only dropped at rest. */
const TILT_SETTLE_MS = 450;

/**
 * Grace period before a leave is honoured.
 *
 * The tilt rotates the surface, which moves its own edges. Right at the border
 * that can make the pointer alternate between inside and outside, so hover would
 * switch on and off repeatedly. Ignoring very short leaves absorbs that.
 */
const LEAVE_GRACE_MS = 90;

export interface ReactiveLight {
  /** Ref to attach to the element that should catch the light. */
  ref: React.RefObject<HTMLElement>;
  /** Caches geometry, positions the sheen and switches to direct-follow mode. */
  onPointerEnter: (event: ReactMouseEvent<HTMLElement>) => void;
  /** Pointer handler updating the light position and tilt. */
  onPointerMove: (event: ReactMouseEvent<HTMLElement>) => void;
  /** Handler easing light and tilt back to rest when the pointer leaves. */
  onPointerLeave: () => void;
  /**
   * Grace period in milliseconds that a consumer should wait before treating a
   * leave as real, so hover-driven styling does not flicker at the edges either.
   */
  leaveGraceMs: number;
  /** True when the effect is active for this client. */
  isEnabled: boolean;
}

/**
 * Cursor-following sheen plus perspective tilt for glass surfaces (Tier 1, §5).
 *
 * Performance shape of this hook — all three points matter for it to feel like
 * the surface is glued to the cursor rather than lagging behind it:
 *
 * 1. **No React state.** Values are written as CSS custom properties directly on
 *    the node, so a 60fps pointer stream causes zero re-renders.
 * 2. **Geometry is cached on enter.** `getBoundingClientRect()` forces a layout
 *    read; doing it per `mousemove` competes with the compositor. It is read once
 *    per hover (and kept fresh on scroll/resize) instead.
 * 3. **The tilt transition is disabled while moving.** A `transition` on
 *    `transform` restarts its easing on every pointer event, which reads as
 *    stutter. During movement the surface follows directly (`.tilt-following`);
 *    the transition is only re-enabled for the glide back to rest on leave.
 *
 * Gated to fine pointers with motion allowed — touch devices and
 * `prefers-reduced-motion` users get the flat Tier 0 card.
 *
 * @returns {ReactiveLight} Ref, pointer handlers and the enabled flag.
 */
export const useReactiveLight = (): ReactiveLight => {
  const {allowPointerEffects} = useMotionGate();
  const ref = useRef<HTMLElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const frameRef = useRef(0);
  const pendingRef = useRef<{x: number; y: number} | null>(null);
  const settleRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /** Refreshes cached geometry while the pointer is over the surface. */
  useEffect(() => {
    if (!allowPointerEffects) return;

    const handleViewportChange = () => {
      if (rectRef.current && ref.current) {
        rectRef.current = ref.current.getBoundingClientRect();
      }
    };

    window.addEventListener('scroll', handleViewportChange, {passive: true});
    window.addEventListener('resize', handleViewportChange, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleViewportChange);
      window.removeEventListener('resize', handleViewportChange);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [allowPointerEffects]);

  const onPointerEnter = useCallback(
    (event: ReactMouseEvent<HTMLElement>) => {
      const element = ref.current;
      if (!allowPointerEffects || !element) return;

      // A leave that is being debounced is cancelled: the pointer never really left.
      if (settleRef.current) {
        clearTimeout(settleRef.current);
        settleRef.current = null;
      }

      const rect = element.getBoundingClientRect();
      rectRef.current = rect;

      // Place the sheen under the cursor before it fades in, so it never
      // flashes at its resting position in the corner.
      element.style.setProperty('--mx-px', `${Math.round(event.clientX - rect.left)}px`);
      element.style.setProperty('--my-px', `${Math.round(event.clientY - rect.top)}px`);

      // `primed` enables the transform, `following` removes the transition.
      element.classList.add('tilt-primed', 'tilt-following');
    },
    [allowPointerEffects],
  );

  const onPointerMove = useCallback(
    (event: ReactMouseEvent<HTMLElement>) => {
      if (!allowPointerEffects || !ref.current) return;

      pendingRef.current = {x: event.clientX, y: event.clientY};
      if (frameRef.current) return;

      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = 0;

        const element = ref.current;
        const rect = rectRef.current;
        const pointer = pendingRef.current;
        if (!element || !rect || !pointer) return;

        const offsetX = pointer.x - rect.left;
        const offsetY = pointer.y - rect.top;
        const relativeX = offsetX / rect.width;
        const relativeY = offsetY / rect.height;

        // Pixel offsets drive the sheen, which is translated rather than repainted.
        element.style.setProperty('--mx-px', `${Math.round(offsetX)}px`);
        element.style.setProperty('--my-px', `${Math.round(offsetY)}px`);
        // Tilt away from the cursor: the left edge lifts when pointing right.
        element.style.setProperty('--tilt-y', `${((relativeX - 0.5) * 2 * TILT_MAX_DEG).toFixed(2)}deg`);
        element.style.setProperty('--tilt-x', `${((0.5 - relativeY) * 2 * TILT_MAX_DEG).toFixed(2)}deg`);
      });
    },
    [allowPointerEffects],
  );

  const onPointerLeave = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    }
    rectRef.current = null;
    pendingRef.current = null;

    // Re-enable the transition so the surface glides back instead of snapping.
    element.classList.remove('tilt-following');
    element.style.setProperty('--tilt-x', '0deg');
    element.style.setProperty('--tilt-y', '0deg');

    // Drop the transform once the glide has finished, returning the card to a
    // plain, uncomposited element with crisp edges.
    if (settleRef.current) clearTimeout(settleRef.current);
    settleRef.current = setTimeout(() => {
      settleRef.current = null;
      ref.current?.classList.remove('tilt-primed');
    }, TILT_SETTLE_MS);
  }, []);

  return {
    ref,
    onPointerEnter,
    onPointerMove,
    onPointerLeave,
    leaveGraceMs: allowPointerEffects ? LEAVE_GRACE_MS : 0,
    isEnabled: allowPointerEffects,
  };
};

export default useReactiveLight;
