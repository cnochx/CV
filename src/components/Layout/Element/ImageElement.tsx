import Image from 'next/image';
import {FC, memo} from 'react';

import {ImageElementProps} from '../../../data/utilComp/UtilImportPropsDef';
import {resolveImgSrc} from '../../../utilComp/ResolveHelper/ResolveImageSrc';

/**
 * Generic image wrapper component.
 *
 * Renders a `next/image` element from a flexible `ImgItem` source and
 * forwards any children as overlay content. The component:
 * - resolves the concrete image URL via `resolveImgSrc`,
 * - builds a semantic `alt` string from the `SectionId` and `ImgType`,
 * - uses `fill` layout to cover the parent container,
 * - and applies the provided Tailwind class names directly to the image.
 *
 * Intended use:
 * - as a background/hero image wrapper where the parent container controls
 *   the size (`relative` + fixed height) and this component simply fills it;
 * - as a typed abstraction over the different image source shapes supported
 *   by your content model (`ImgItem`).
 *
 * @param {ImageElementProps} props Component props.
 * @param {ImgItem} [props.ImgItem] Structured image source to resolve and render.
 * @param {string} props.ImgType Semantic image type (for example `"mobile"` or
 *   `"screen"`), used to distinguish variants and included in the `alt` text.
 * @param {string} props.SectionId Section identifier used to construct the
 *   image `id` and `alt` attributes for better accessibility.
 * @param {string} [props.ClassName] Optional Tailwind class names applied to
 *   the underlying `next/image` element (for positioning and sizing).
 * @param {ReactNode} [props.children] Optional children rendered immediately
 *   after the image, typically overlay content positioned via the parent.
 * @returns {JSX.Element} The resolved `next/image` element followed by any
 *   children passed to the component.
 */
const ImageElement: FC<ImageElementProps> = memo(
  ({
     children,
     ImgItem,
     ImgType,
     SectionId,
     ClassName,
   }) => {
    const resolvedImgSrc: string = resolveImgSrc(ImgItem)
      ? resolveImgSrc(ImgItem)
      : '';

    return (
      <>
        <Image
          alt={`${SectionId}-image-${ImgType ?? 'default'}`}
          className={ClassName}
          decoding="async"
          fill
          id={SectionId}
          priority
          src={resolvedImgSrc}
        />
        {children}
      </>
    );
  },
);

ImageElement.displayName = 'ImageElement';
export default ImageElement;