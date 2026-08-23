import dynamic from 'next/dynamic';
import {FC, memo, useCallback, useRef, useState} from 'react';

import {useHeavySceneGate} from '../../hooks/useHeavySceneGate';
import CleanCorePoster from './CleanCorePoster';

/**
 * The WebGL scene is code-split and never server-rendered: it must not appear
 * in the initial bundle, and it has nothing to contribute to the HTML.
 */
/* eslint-disable-next-line react-memo/require-memo --
   dynamic() already returns a memoized wrapper component. */
const CleanCoreScene = dynamic(() => import('./CleanCoreScene'), {ssr: false});

/**
 * Hero background object, composed as two stacked layers (Designsheet §7.2/§8).
 *
 * Layer 1 is the SSR'd SVG poster and is always present. Layer 2 is the WebGL
 * scene, which mounts only for clients that pass every gate in
 * `useHeavySceneGate`, and only after the page has loaded and the hero is in
 * view. When it does mount it fades in on top of the poster, so there is never
 * a moment where the hero shows nothing — and if the chunk fails, the poster
 * simply stays.
 *
 * Guarantees this component is responsible for:
 * - `aria-hidden` and `pointer-events: none`: decorative, never focusable,
 *   never in the way of the headline or the CTAs in front of it.
 * - Fixed aspect box rendered from SSR, so swapping in the canvas cannot shift
 *   layout (CLS stays 0).
 * - No text inside the canvas — all copy lives in the DOM next to it.
 */
const CleanCore: FC = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isSceneAllowed = useHeavySceneGate(containerRef);
  const [isSceneVisible, setIsSceneVisible] = useState(false);

  /** Fades the canvas in only once it has actually produced a frame. */
  const handleSceneReady = useCallback(() => {
    setIsSceneVisible(true);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[min(88vw,720px)] -translate-x-1/2 -translate-y-1/2"
      ref={containerRef}>
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${
          isSceneVisible ? 'opacity-0' : 'opacity-100'
        }`}>
        <CleanCorePoster />
      </div>

      {isSceneAllowed && (
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            isSceneVisible ? 'opacity-100' : 'opacity-0'
          }`}>
          <CleanCoreScene onReady={handleSceneReady} />
        </div>
      )}
    </div>
  );
});

CleanCore.displayName = 'CleanCore';
export default CleanCore;
