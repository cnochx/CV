import {MouseEvent as ReactMouseEvent, useCallback, useEffect, useRef} from 'react';

import {useMotionGate} from './useMotionGate';

/** Maximum tilt in degrees — Apple restraint (Designsheet §5: caps at ±4°). */
const TILT_MAX_DEG = 4;

export interface ReactiveLight {
  /** Ref to attach to the element that should catch the light. */
  ref: React.RefObject<HTMLElement>;
  /** Caches geometry and switches the surface into direct-follow mode. */
  onPointerEnter: () => void;
  /** Pointer handler updating the light position and tilt. */
  onPointerMove: (event: ReactMouseEvent<HTMLElement>) => void;
  /** Handler easing light and tilt back to rest when the pointer leaves. */
  onPointerLeave: () => void;
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

  const onPointerEnter = useCallback(() => {
    const element = ref.current;
    if (!allowPointerEffects || !element) return;

    rectRef.current = element.getBoundingClientRect();
    // Follow the cursor directly: no transition to restart on every move.
    element.classList.add('tilt-following');
  }, [allowPointerEffects]);

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

        const relativeX = (pointer.x - rect.left) / rect.width;
        const relativeY = (pointer.y - rect.top) / rect.height;

        element.style.setProperty('--mx', `${relativeX * 100}%`);
        element.style.setProperty('--my', `${relativeY * 100}%`);
        // Tilt away from the cursor: the left edge lifts when pointing right.
        element.style.setProperty('--tilt-y', `${(relativeX - 0.5) * 2 * TILT_MAX_DEG}deg`);
        element.style.setProperty('--tilt-x', `${(0.5 - relativeY) * 2 * TILT_MAX_DEG}deg`);
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
  }, []);

  return {ref, onPointerEnter, onPointerMove, onPointerLeave, isEnabled: allowPointerEffects};
};

export default useReactiveLight;
