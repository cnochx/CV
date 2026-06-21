import {BgImageSrc} from '../../data/utilComp/generalTypeDef';

/**
 * Resolves a background-image src value from supported image source shapes.
 *
 * Operations
 * - Returns a string for plain string sources and static image imports.
 * - Unwraps ImgItem sources until a concrete image source is found.
 * - Falls back to an empty string when the value is missing or unusable.
 *
 * @param imageSrc - Image source used for CSS background rendering.
 * @returns CSS background-image value or an empty fallback.
 */
export const resolveImgSrc = (imageSrc: BgImageSrc): string => {
  if (!imageSrc) {
    return "";
  }

  if (typeof imageSrc === 'string') {
    return imageSrc ? imageSrc : '';
  }

  if ('ImgSrc' in imageSrc && imageSrc.ImgSrc) {
    return resolveImgSrc(imageSrc.ImgSrc);
  }

  if ('ImgStatic' in imageSrc && imageSrc.ImgStatic?.src) {
    return imageSrc.ImgStatic.src;
  }

  if ('src' in imageSrc && imageSrc.src) {
    return imageSrc.src;
  }

  return "";
};