import {useEffect, useState} from 'react';

/** Width threshold used to classify viewports below `sm` as mobile. */
const MOBILE_BREAKPOINT = 640;

/**
 * React hook that detects whether the current viewport is mobile-sized.
 *
 * Uses `window.matchMedia` with a max-width query just below the configured
 * mobile breakpoint and keeps the returned boolean in sync when the viewport changes.
 *
 * @returns {boolean} `true` when the viewport width is below `640px`,
 *   otherwise `false`.
 */
export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return isMobile;
};