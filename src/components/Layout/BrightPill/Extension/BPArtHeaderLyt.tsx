import {memo} from 'react';

import {HeaderLytProps} from '../../../../data/Utils/UtilImportPropsDef';
import {getHeaderIds} from '../../../../utilComp/SectionHelper';


/**
 * Renders a header layout wrapper with optional underline and an accessible suffix section for extended header content.[file:1]
 *
 * Dependencies
 * - Uses getId to build stable, related DOM ids for the header suffix section.[file:1]
 *
 * Operations
 * - Wraps arbitrary children inside a semantic header element.[file:1]
 * - Optionally renders an underline bar below the main header content.[file:1]
 * - Conditionally renders a labeled suffix section with heading and text, wired via aria-labelledby for accessibility.[file:1]
 *
 * @param HeaderLytProps props - Component props.
 * @param React.ReactNode props.children - Main header content rendered inside the header wrapper.
 * @param string | undefined props.HeaderClassName - Additional Tailwind class names applied to the header element.
 * @param boolean | undefined props.SetUnderline - When true, renders an underline bar below the header content.
 * @param string | undefined props.UnderlineClassName - Optional Tailwind classes for the underline bar, falling back to a default underline style when omitted.
 * @param HeaderItemType | undefined props.HeaderItem - Optional header metadata including title suffix, heading, and content used to render the suffix section.
 * @param string | undefined props.SectionId - Base identifier used to derive stable ids for the suffix section and its children.
 * @returns JSX.Element Header layout wrapper with an optional underline and suffix section.
 */
const BPArtHeaderLyt = memo(({children,
                          HeaderClassName,
                          SetUnderline,
                          UnderlineClassName,
                          HeaderItem,
                          ArticleId,
                          SuffixTitleTag}: HeaderLytProps) => {

  const headerIds = getHeaderIds(
    ArticleId,
    HeaderItem);

  const setUnderlineClassName =
    UnderlineClassName ?? 'mt-1 h-px w-3/4 border-b-2 border-fuchsia-400';

  return (
    <header className={HeaderClassName}>

      <div className="flex flex-col justify-start">
        {children}
      </div>

      {SetUnderline && <div className={setUnderlineClassName} />}

      {HeaderItem?.HdrTitleSuffix?.SxSuffix && (
        <section
          aria-labelledby={headerIds.sectionLabelBy}
          className="mt-8"
          id={headerIds.idSuffix}>

          {HeaderItem.HdrTitleSuffix.SxTitle && SuffixTitleTag
            ? (<SuffixTitleTag
              className="text-xl font-bold sm:text-xl"
              id={headerIds.idH}>
              {HeaderItem.HdrTitleSuffix.SxTitle}
            </SuffixTitleTag>)
            : null}

          <div
            className="text-sm leading-7 sm:text-base">
            {HeaderItem.HdrTitleSuffix.SxSuffix}
          </div>

        </section>
      )}

    </header>
  );
});

BPArtHeaderLyt.displayName = 'BPArtHeaderLyt';
export default BPArtHeaderLyt;