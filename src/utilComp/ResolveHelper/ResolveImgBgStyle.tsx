import {CSSProperties} from 'react';

export interface BackgroundStyleOptions {
  BgImg?: string;
  BgImgPosition?: string;
  BgImgSize?: string;
  BgImgRepeat?: string;
}

/**
 * Resolves inline background styles for section-like wrappers.
 *
 * Operations
 * - Returns undefined when no background image is provided.
 * - Applies default size, position, and repeat behavior for background rendering.
 *
 * @param options - Background style configuration. Add like: {BgImg, BgImgPosition, BgImgSize, BgImgRepeat}
 * @returns Inline style object for React elements or undefined fallback.
 */
export const resolveImgBgStyle = ({
    BgImg,
    BgImgPosition = 'center',
    BgImgSize = 'cover',
    BgImgRepeat = 'no-repeat',
  }: BackgroundStyleOptions): CSSProperties | undefined => {

  if (!BgImg?.trim()) {
    return undefined;
  }

  return {
    backgroundImage: BgImg,
    backgroundSize: BgImgSize,
    backgroundPosition: BgImgPosition,
    backgroundRepeat: BgImgRepeat,
  };
};