import {FC, memo, PropsWithChildren, useEffect, useRef} from 'react';

/**
 * Fail-safe scroll reveal (Tier 1, Designsheet §5/§8).
 *
 * Design rule that drives this implementation: **content must never depend on
 * JavaScript to become visible.** The markup therefore ships fully visible, and
 * the hidden state is only ever applied by the very same code path that also
 * starts observing the element. If the script never runs, throws, or a chunk
 * fails to load, the reader still sees everything — the site just doesn't animate.
 *
 * That is the opposite of the usual `initial={{opacity: 0}}` approach, which
 * bakes an invisible state into the HTML and hopes JS resolves it. On a CV that
 * has to be readable by humans, search crawlers and non-JS LLM agents alike,
 * that bet is not worth making.
 *
 * Implementation:
 * - `.reveal` marks a candidate; it has no visual effect on its own.
 * - The effect adds `.reveal-armed` (opacity 0, shifted) and starts observing.
 * - When the element scrolls into view, `.reveal-in` transitions it back.
 * - Elements already in view when armed reveal on the observer's first callback,
 *   so above-the-fold content appears immediately.
 * - `prefers-reduced-motion` skips arming entirely: nothing is ever hidden.
 *
 * Animates `opacity` and `transform` only (P8), and reveals once per element.
 */
export interface RevealProps {
  /** Optional classes applied to the wrapper element. */
  className?: string;
  /** Delay in milliseconds before this element transitions in. */
  Delay?: number;
  /**
   * Semantic element rendered as the wrapper, so the reveal does not force an
   * extra `div` into otherwise meaningful markup.
   */
  Element?: 'div' | 'article' | 'section' | 'aside';
}

const Reveal: FC<PropsWithChildren<RevealProps>> = memo(
  ({children, className, Delay = 0, Element = 'div'}) => {
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const element = elementRef.current;
      if (!element) return;

      // Motion safety: reduced-motion users keep the static Tier 0 layout.
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      // Without IntersectionObserver we simply never animate — content stays visible.
      if (!('IntersectionObserver' in window)) return;

      if (Delay) {
        element.style.transitionDelay = `${Delay}ms`;
      }

      // Arm and observe together: hiding and the path that un-hides are inseparable.
      element.classList.add('reveal-armed');

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('reveal-in');
            observer.unobserve(entry.target);
          });
        },
        {rootMargin: '0px 0px -80px 0px'},
      );

      observer.observe(element);

      return () => {
        observer.disconnect();
        // Never leave a disarmed element hidden behind.
        element.classList.remove('reveal-armed');
      };
    }, [Delay]);

    const Wrapper = Element;

    return (
      <Wrapper className={['reveal', className].filter(Boolean).join(' ')} ref={elementRef as never}>
        {children}
      </Wrapper>
    );
  },
);

Reveal.displayName = 'Reveal';
export default Reveal;
