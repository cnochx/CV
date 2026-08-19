import Lenis from 'lenis';
import {FC, memo, useEffect} from 'react';

import {useMotionGate} from '../../hooks/useMotionGate';

/**
 * Owns in-page anchor navigation and, on capable clients, smooth scrolling.
 *
 * The nav `Link`s are rendered with `scroll={false}` because Next's own hash
 * handling jumps instantly and would beat any animation to the target. This
 * component therefore takes over anchor navigation completely — and does so for
 * *every* client, not just the ones that get Lenis:
 *
 * - Lenis active (desktop, motion allowed, no Save-Data): animated scroll.
 * - Otherwise: native `scrollIntoView`, which honours the CSS
 *   `scroll-behavior` and `scroll-margin-top` already defined in the design.
 *
 * The scroll offset is read from the target's computed `scroll-margin-top`, so
 * the CSS stays the single source of truth for how far below the fixed header a
 * section should land — no duplicated magic number.
 *
 * Renders nothing; this is a behavior-only component.
 */
const SmoothScroll: FC = memo(() => {
  const {allowSmoothScroll} = useMotionGate();

  useEffect(() => {
    const lenis = allowSmoothScroll
      ? new Lenis({
          duration: 1.05,
          // Apple-quiet glide: fast start, long settle, no overshoot.
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 0,
        })
      : null;

    let frame = 0;
    if (lenis) {
      const raf = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    }

    const handleAnchorClick = (event: MouseEvent) => {
      // Let modified clicks (new tab, download, etc.) behave natively.
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href*="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute('href')?.split('#')[1];
      if (!hash) return;

      const destination = document.getElementById(hash);
      if (!destination) return;

      event.preventDefault();

      // CSS owns the header offset via scroll-margin-top.
      const scrollMargin = parseFloat(window.getComputedStyle(destination).scrollMarginTop) || 0;

      if (lenis) {
        lenis.scrollTo(destination, {offset: -scrollMargin});
      } else {
        destination.scrollIntoView({block: 'start'});
      }

      window.history.replaceState(null, '', `#${hash}`);
    };

    document.addEventListener('click', handleAnchorClick);

    // With Lenis driving the viewport, the CSS smooth scroll must stand down so
    // the two engines cannot fight over the same scroll position.
    const previousBehavior = document.documentElement.style.scrollBehavior;
    if (lenis) {
      document.documentElement.style.scrollBehavior = 'auto';
    }

    return () => {
      if (frame) cancelAnimationFrame(frame);
      document.removeEventListener('click', handleAnchorClick);
      document.documentElement.style.scrollBehavior = previousBehavior;
      lenis?.destroy();
    };
  }, [allowSmoothScroll]);

  return null;
});

SmoothScroll.displayName = 'SmoothScroll';
export default SmoothScroll;
