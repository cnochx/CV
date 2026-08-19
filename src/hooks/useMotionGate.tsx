import {useEffect, useState} from 'react';

/**
 * Capability gates for the Tier 1 motion layer.
 *
 * Contract (Designsheet v3.4 §8, "hard guarantees"): every enhancement is
 * opt-out safe. `prefers-reduced-motion` collapses the site to the static
 * Tier 0 design, pointer effects require a fine pointer, and Lenis smooth
 * scroll is desktop-only so touch devices keep their native scrolling.
 *
 * All flags start `false` so server-rendered markup and the first client paint
 * are identical (no hydration mismatch, no motion before the checks resolve).
 */
export interface MotionGate {
  /** True when animations may run at all (no `prefers-reduced-motion: reduce`). */
  allowMotion: boolean;
  /** True when cursor-driven effects make sense (fine pointer + motion allowed). */
  allowPointerEffects: boolean;
  /** True when Lenis smooth scroll should be attached (fine pointer, not Save-Data). */
  allowSmoothScroll: boolean;
}

/**
 * Resolves the motion capability gates for the current client.
 *
 * Operations:
 * - Evaluates `prefers-reduced-motion`, `pointer: fine` and `Save-Data` once mounted.
 * - Subscribes to both media queries so changes apply without a reload.
 * - Keeps every flag `false` during SSR and the first paint.
 *
 * @returns {MotionGate} Resolved capability flags for the motion layer.
 */
export const useMotionGate = (): MotionGate => {
  const [gate, setGate] = useState<MotionGate>({
    allowMotion: false,
    allowPointerEffects: false,
    allowSmoothScroll: false,
  });

  useEffect(() => {
    const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointerQuery = window.matchMedia('(pointer: fine)');

    const handleChange = () => {
      const allowMotion = !reduceQuery.matches;
      const finePointer = pointerQuery.matches;

      // Respect the user's data-saving preference for the heavier scroll hijack.
      const connection = (
        navigator as Navigator & {connection?: {saveData?: boolean}}
      ).connection;
      const saveData = connection?.saveData === true;

      setGate({
        allowMotion,
        allowPointerEffects: allowMotion && finePointer,
        allowSmoothScroll: allowMotion && finePointer && !saveData,
      });
    };

    handleChange();
    reduceQuery.addEventListener('change', handleChange);
    pointerQuery.addEventListener('change', handleChange);

    return () => {
      reduceQuery.removeEventListener('change', handleChange);
      pointerQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return gate;
};

export default useMotionGate;
