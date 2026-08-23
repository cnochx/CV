import {FC, memo, useEffect, useRef} from 'react';

/**
 * Decorative glow layer with scroll parallax (Tier 1, Designsheet §5, layer L0).
 *
 * Three blobs travel at different fractions of the scroll distance, which is what
 * separates the background plane from the content plane — the 2D stand-in for the
 * depth a Tier 2 scene would add later.
 *
 * Implemented with one passive scroll listener that writes a single CSS custom
 * property inside `requestAnimationFrame`; the blobs consume it through
 * `translate3d`, so the browser keeps them on the compositor and React never
 * re-renders during scroll.
 *
 * Guarantees:
 * - `aria-hidden` and `pointer-events: none`: carries no information, never
 *   intercepts input.
 * - Absolutely positioned with fixed sizes, so it cannot shift layout (CLS = 0).
 * - Purely additive: if the effect never runs, the blobs simply sit still.
 * - Skipped entirely under `prefers-reduced-motion`.
 */
const GlowParallax: FC = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = container.getBoundingClientRect();
      // Progress from 0 (section top at viewport top) to 1 (scrolled fully past).
      const progress = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1);
      container.style.setProperty('--scroll-progress', progress.toFixed(4));
    };

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', handleScroll, {passive: true});
    window.addEventListener('resize', handleScroll, {passive: true});

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="glow-layer pointer-events-none absolute inset-0 z-0 overflow-hidden"
      ref={containerRef}>
      <div className="glow-blob glow-blob--primary absolute -left-[12vw] -top-[18vw] h-[56vw] w-[56vw] rounded-full bg-[radial-gradient(closest-side,rgba(232,121,249,0.20),transparent)]" />
      <div className="glow-blob glow-blob--accent absolute -right-[16vw] top-[22vh] h-[44vw] w-[44vw] rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.16),transparent)]" />
      <div className="glow-blob glow-blob--violet absolute -bottom-[14vw] left-[26vw] h-[38vw] w-[38vw] rounded-full bg-[radial-gradient(closest-side,rgba(157,140,245,0.16),transparent)]" />
    </div>
  );
});

GlowParallax.displayName = 'GlowParallax';
export default GlowParallax;
