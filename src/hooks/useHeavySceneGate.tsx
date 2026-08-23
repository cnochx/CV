import {RefObject, useEffect, useState} from 'react';

/** Below this, a WebGL scene competes with the main thread for too little gain. */
const MIN_CPU_CORES = 4;

/** How far ahead of the viewport the scene may start loading. */
const PRELOAD_MARGIN = '200px';

/**
 * Decides whether a heavyweight (WebGL) enhancement may mount (Designsheet §8).
 *
 * Every condition below exists to protect the static experience, which is
 * already complete without the scene:
 *
 * - `prefers-reduced-motion` — the scene animates continuously, so it must not
 *   mount at all rather than merely animate less.
 * - `pointer: fine` and a minimum viewport — a decorative background object is
 *   not worth the battery on phones, which are also the ranking-relevant
 *   version of the page.
 * - `Save-Data` and low core counts — respect explicit and implicit signals
 *   that the device or connection is constrained.
 * - WebGL availability — probed with a throwaway context so a failure surfaces
 *   here rather than as a blank canvas.
 * - **After `load`** — the scene's chunk must never compete with the content,
 *   the fonts or the LCP element for bandwidth.
 * - **In view** — nothing is fetched for a section the visitor never reaches.
 *
 * @param {RefObject<Element>} containerRef - Element whose visibility gates the mount.
 * @returns {boolean} True once the scene is allowed to load and mount.
 */
export const useHeavySceneGate = (containerRef: RefObject<Element>): boolean => {
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isCapable = (): boolean => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
      if (!window.matchMedia('(pointer: fine)').matches) return false;
      if (window.innerWidth < 1024) return false;

      const connection = (
        navigator as Navigator & {connection?: {saveData?: boolean}}
      ).connection;
      if (connection?.saveData === true) return false;

      const cores = navigator.hardwareConcurrency;
      if (typeof cores === 'number' && cores < MIN_CPU_CORES) return false;

      // Probe WebGL rather than assume it: a failed context would otherwise
      // only show up as an empty canvas over the poster.
      try {
        const canvas = document.createElement('canvas');
        const context =
          canvas.getContext('webgl2') ?? canvas.getContext('webgl');
        if (!context) return false;
        (context as WebGLRenderingContext)
          .getExtension('WEBGL_lose_context')
          ?.loseContext();
      } catch {
        return false;
      }

      return true;
    };

    if (!isCapable() || !('IntersectionObserver' in window)) return;

    let observer: IntersectionObserver | null = null;

    const startObserving = () => {
      observer = new IntersectionObserver(
        entries => {
          if (!entries.some(entry => entry.isIntersecting)) return;
          setIsAllowed(true);
          observer?.disconnect();
        },
        {rootMargin: PRELOAD_MARGIN},
      );
      observer.observe(container);
    };

    if (document.readyState === 'complete') {
      startObserving();
      return () => observer?.disconnect();
    }

    window.addEventListener('load', startObserving, {once: true});

    return () => {
      window.removeEventListener('load', startObserving);
      observer?.disconnect();
    };
  }, [containerRef]);

  return isAllowed;
};

export default useHeavySceneGate;
