import {BgImageSrc, StrngUndfndType} from '../../data/utilComp/generalTypeDef';

/**
 * Resolves a CSS `background-image` value from a flexible image source.
 *
 * Supports plain string paths, static imports, and nested ImgItem-like
 * structures by unwrapping until a concrete source is found, then wrapping
 * it in a `url(...)` expression for use in inline styles.
 *
 * @param {BgImageSrc} imageSrc Image source used for CSS background rendering.
 * @returns {StrngUndfndType} A `url(...)` string suitable for
 *   `backgroundImage`, an empty string for explicit empty sources,
 *   or `undefined` when no usable source is available.
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