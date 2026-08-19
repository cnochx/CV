import {MouseEvent as ReactMouseEvent, useCallback, useRef} from 'react';

import {useMotionGate} from './useMotionGate';

/** Maximum tilt in degrees — Apple restraint (Designsheet §5: caps at ±4°). */
const TILT_MAX_DEG = 4;

export interface ReactiveLight {
  /** Ref to attach to the element that should catch the light. */
  ref: React.RefObject<HTMLElement>;
  /** Pointer handler updating the light position and tilt. */
  onPointerMove: (event: ReactMouseEvent<HTMLElement>) => void;
  /** Handler resetting light and tilt when the pointer leaves. */
  onPointerLeave: () => void;
  /** True when the effect is active for this client. */
  isEnabled: boolean;
}

/**
 * Cursor-following sheen plus perspective tilt for glass surfaces (Tier 1, §5).
 *
 * Writes CSS custom properties (`--mx`, `--my`, `--tilt-x`, `--tilt-y`) directly
 * on the element instead of going through React state: this keeps the effect off
 * the render path entirely, so a 60fps pointer stream costs no re-renders.
 *
 * Gated to fine pointers with motion allowed — touch devices and
 * `prefers-reduced-motion` users get the flat Tier 0 card.
 *
 * @returns {ReactiveLight} Ref, pointer handlers and the enabled flag.
 */
export const useReactiveLight = (): ReactiveLight => {
  const {allowPointerEffects} = useMotionGate();
  const ref = useRef<HTMLElement>(null);

  const onPointerMove = useCallback(
    (event: ReactMouseEvent<HTMLElement>) => {
      const element = ref.current;
      if (!allowPointerEffects || !element) return;

      const rect = element.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width;
      const relativeY = (event.clientY - rect.top) / rect.height;

      element.style.setProperty('--mx', `${relativeX * 100}%`);
      element.style.setProperty('--my', `${relativeY * 100}%`);
      // Tilt away from the cursor: left edge lifts when pointing right.
      element.style.setProperty('--tilt-y', `${(relativeX - 0.5) * 2 * TILT_MAX_DEG}deg`);
      element.style.setProperty('--tilt-x', `${(0.5 - relativeY) * 2 * TILT_MAX_DEG}deg`);
    },
    [allowPointerEffects],
  );

  const onPointerLeave = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    element.style.setProperty('--tilt-x', '0deg');
    element.style.setProperty('--tilt-y', '0deg');
  }, []);

  return {ref, onPointerMove, onPointerLeave, isEnabled: allowPointerEffects};
};

export default useReactiveLight;
