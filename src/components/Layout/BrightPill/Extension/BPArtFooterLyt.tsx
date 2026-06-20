import {FC, memo} from 'react';

import {ArticleFooterLytProps} from '../../../../data/utilComp/UtilImportPropsDef';


/**
 * Renders an article footer layout with optional custom content, suffix block, and call-to-action items.
 *
 * Dependencies:
 * - Uses `CallToAction` to render each configured call-to-action entry.
 *
 * Operations:
 * - Wraps footer-specific content inside a `<footer>` element with the provided layout classes.
 * - Optionally renders a suffix header and body when `BottomSuffix` is provided.
 * - Iterates over `CallToActions` and renders one `CallToAction` component per entry.
 *
 * @param {ArticleFooterLytProps} props - Component props.
 * @param {React.ReactNode} [props.children] - Optional footer content rendered before the suffix and CTAs.
 * @param {string} [props.footerClassName] - Tailwind class string applied to the footer wrapper.
 * @param {import('../../data/Content/LayoutTypeDef').CallToActionItemDef[]} [props.CallToActions] - Optional call-to-action entries rendered in the footer.
 * @param {import('../../../../data/utilComp/generalTypeDef').CntSuffixDef} [props.BottomSuffix] - Optional suffix block with title and content rendered above the CTAs.
 * @param {HeadingTag} [props.FooterTitleTag] - Optional heading tag applied to the suffix title.
 * @returns {JSX.Element} Rendered article footer layout.
 */
const BPArtFooterLyt: FC<ArticleFooterLytProps> = memo(({children,
                                                            footerClassName,
                                                            BottomSuffix,
                                                            SectionId}) => {

    return (
      <>
        <footer
          className={footerClassName}
          id={`${SectionId}=${BottomSuffix?.SxId}`}>
          {children && children}

          {BottomSuffix && BottomSuffix ? (
            <header>
              <h6 className="font-bold text-l" id={`${SectionId}=${BottomSuffix.SxId}-title`}>
                {BottomSuffix.SxTitle}
              </h6>
            </header>
          ) : null}

          {BottomSuffix ? (
            <div className="suffixClassNammax space-y-4 text-sm leading-7 text-neutral-100 sm:text-base">
              {BottomSuffix.SxSuffix}
            </div>
          ) : undefined}

        </footer>
      </>
    );
  },
);

BPArtFooterLyt.displayName = 'BPArtFooterLyt';
export default BPArtFooterLyt;