import {BgImageSrc, StrngUndfndType} from '../data/utilComp/generalTypeDef';

/**
 * Resolves a CSS background-image value from supported image source shapes.
 *
 * Operations
 * - Returns a url(...) string for plain string sources and static image imports.
 * - Unwraps ImgItem sources until a concrete image source is found.
 * - Falls back to an empty string when the value is missing or unusable.
 *
 * @param imageSrc - Image source used for CSS background rendering.
 * @returns CSS background-image value or an empty fallback.
 */
export const resolveBgImage = (imageSrc: BgImageSrc): StrngUndfndType => {
  if (!imageSrc) {
    return undefined;
  }

  if (typeof imageSrc === 'string') {
    return imageSrc ? `url(${imageSrc})` : '';
  }

  if ('ImgSrc' in imageSrc && imageSrc.ImgSrc) {
    return resolveBgImage(imageSrc.ImgSrc);
  }

  if ('ImgStatic' in imageSrc && imageSrc.ImgStatic?.src) {
    return `url(${imageSrc.ImgStatic.src})`;
  }

  if ('src' in imageSrc && imageSrc.src) {
    return `url(${imageSrc.src})`;
  }

  return undefined;
};