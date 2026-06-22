import classNames from 'classnames';
import {FC, memo} from 'react';

import {SectionExtShellProps} from '../../../data/utilComp/UtilImportPropsDef';

/**
 * Generic section shell component.
 *
 * Provides a semantic `<section>` wrapper with optional:
 * - default page padding and max-width container,
 * - scroll-margin offset for in-page navigation,
 * - and an inner div wrapper that can be suppressed when needed.
 *
 * Operations:
 * - Builds a composed section class name from:
 *   - the optional `ClassNameSection`,
 *   - the default padding classes when `Padding` is true,
 *   - and a scroll offset class when `IsMain` is true.
 * - Builds an inner wrapper class name when `Padding` is enabled to
 *   constrain content to `max-w-screen-lg`.
 * - Renders children either inside the inner div (default) or directly
 *   inside the section when `HideDiv` is true.
 *
 * Intended use:
 * - as a base layout primitive for top-level sections like Hero, About, Skills,
 *   where consistent padding, width scroll behavior are required.
 *
 * @param {SectionExtShellProps} props Component props.
 * @param {ReactNode} props.children Section content to render.
 * @param {string} [props.ClassNameSection] Optional Tailwind class names
 *   applied to the `<section>` element.
 * @param {string} [props.ClassNameSubDiv] Optional Tailwind class names
 *   applied to the inner wrapper `<div>` when rendered.
 * @param {boolean} [props.IsMain=false] When true, applies an additional
 *   scroll-margin top (`scroll-mt-[120px]`) to align in-page anchors under
 *   a fixed header.
 * @param {boolean} [props.Padding=false] When true, applies default section
 *   padding and centers content in a `max-w-screen-lg` container.
 * @param {string} props.SectionId Section id used for the `id` attribute and
 *   referenced by `aria-labelledby`.
 * @param {boolean} [props.HideDiv=false] When true, skips rendering the inner
 *   wrapper `<div>` and renders children directly inside the `<section>`.
 * @returns {JSX.Element} A semantic section shell with optional inner wrapper.
 */
const SectionExtShell: FC<SectionExtShellProps> = memo(
  ({
     children,
     ClassNameSection,
     ClassNameSubDiv,
     IsMain = false,
     Padding = false,
     SectionId,
     HideDiv = false,
   }) => {
    const sectionClassName = classNames(
      ClassNameSection,
      Padding && 'px-4 py-16 md:py-24 lg:px-8 scroll-mt-24',
      IsMain && 'scroll-mt-[120px]');

    const subDivClassName = classNames(
      ClassNameSubDiv,
      Padding && 'mx-auto max-w-screen-lg'
    );

    return (
      <section
        aria-labelledby={SectionId}
        className={classNames('relative z-10', sectionClassName)}
        id={SectionId}
      >
        {!HideDiv && (
          <div className={subDivClassName}>
            {children}
          </div>
        )}
        {HideDiv && <>{children}</>}
      </section>
    );
  },
);

SectionExtShell.displayName = 'SectionExtShell';
export default SectionExtShell;