import Lenis from 'lenis';
import {FC, memo, useEffect} from 'react';

import {useMotionGate} from '../../hooks/useMotionGate';

/**
 * Attaches Lenis smooth scrolling to the page (Tier 1, Designsheet §4).
 *
 * Deliberate constraints:
 * - Desktop only (`pointer: fine`) — touch devices keep native momentum scroll,
 *   which is both faster and what mobile users expect.
 * - Disabled under `prefers-reduced-motion` and when `Save-Data` is requested.
 * - Anchor navigation is delegated to Lenis so the existing `#section` links and
 *   `useNavObserver` keep working; `scroll-behavior: smooth` in CSS is disabled
 *   while Lenis is active to avoid two scroll engines fighting each other.
 *
 * Renders nothing — this is a behavior-only component.
 */
const SmoothScroll: FC = memo(() => {
  const {allowSmoothScroll} = useMotionGate();

  useEffect(() => {
    if (!allowSmoothScroll) return;

    const lenis = new Lenis({
      duration: 1.05,
      // Apple-quiet glide: fast start, long settle, no overshoot.
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 0,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Let Lenis own in-page anchor jumps (keeps the nav observer in sync).
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href*="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute('href')?.split('#')[1];
      if (!hash) return;

      const destination = document.getElementById(hash);
      if (!destination) return;

      event.preventDefault();
      lenis.scrollTo(destination, {offset: -80});
      window.history.replaceState(null, '', `#${hash}`);
    };

    document.addEventListener('click', handleAnchorClick);

    // Disable the CSS smooth scroll so only one engine drives the viewport.
    const previousBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('click', handleAnchorClick);
      document.documentElement.style.scrollBehavior = previousBehavior;
      lenis.destroy();
    };
  }, [allowSmoothScroll]);

  return null;
});

SmoothScroll.displayName = 'SmoothScroll';
export default SmoothScroll;
