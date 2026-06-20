import {StaticImageData} from 'next/image';

import {ThemeVariant} from '../data/HeaderDataDef';
import {StrngUndfndType} from '../data/Layout/LayoutTypeDef';
import {SetColor, Tailwind} from '../data/SectionHelperDef';
import {BaseAlContentDef, BaseHeaderItemDef} from '../data/Utils/GeneralDef';
import {ContentIdsType, HeaderIdsType, SectionIdsType} from '../data/Utils/UtilImportPropsDef';

/**
 * Provides semantic color mappings used by shared Tailwind helper functions.
 */
const COLOR_MAP: Readonly<Record<SetColor, string>> = {
  bright: 'neutral-100',
  dark: 'neutral-800',
  mediumDark: 'neutral-700',
  mediumBright: 'gray-800',
  highlight: 'fuchsia-400',
  highlightAlt: 'cyan-500',
  purpleDef: 'purple-500',
  purplePale: 'purple-200',
  purpleDark: 'purple-800',
  pinkDef: 'pink-500',
  stoneBright: 'stone-100',
  stoneMediumBright: 'stone-200',
  stoneDef: 'stone-300',
  default: '',
  none: '',
};

/**
 * Resolves a Tailwind color utility class for a semantic color token.
 *
 * Operations:
 * - Combines the provided utility prefix with the mapped semantic color value.
 * - Appends an opacity modifier when one is provided.
 * - Returns an empty string when the color token does not resolve to a usable color value.
 *
 * @param {Tailwind} utility - Tailwind utility prefix such as `bg`, `text`, `border`, `ring`, or `stroke`.
 * @param {SetColor} type - Semantic color token to resolve.
 * @param {'10' | '20' | '50' | '75' | '90'} [opacity] - Optional opacity modifier appended to the resolved color value.
 * @returns {string} Tailwind class string for the resolved color utility.
 */
export const getColorOpacityClassMap = (
  utility: Tailwind,
  type: SetColor,
  opacity?: '10' | '20' | '50' | '75' | '90'
): string => {
  const color = COLOR_MAP[type];
  if (!color) return '';

  return opacity ? `${utility}-${color}/${opacity}` : `${utility}-${color}`;
};

/**
 * Resolves a semantic color token from a theme variant.
 *
 * Operations:
 * - Inverts bright and dark variants when `rev` is enabled.
 * - Maps non-bright and non-dark variants to the configured highlight fallback.
 *
 * @param {ThemeVariant} variant - Theme variant to normalize.
 * @param {boolean} rev - Controls whether bright and dark variants should be reversed.
 * @returns {SetColor} Resolved semantic color token.
 */
export const mapVariantTypeRev = (variant: ThemeVariant, rev: boolean): SetColor => {
  if (rev) {
    switch (variant) {
      case 'dark':
      case 'dark-pill':
      case 'dark-pill-bg':
        return 'bright';

      case 'bright':
      case 'bright-pill':
      case 'bright-pill-bg':
        return 'dark';

      default:
        return 'highlightAlt';
    }
  }

  switch (variant) {
    case 'dark':
    case 'dark-pill':
    case 'dark-pill-bg':
      return 'dark';

    case 'bright':
    case 'bright-pill':
    case 'bright-pill-bg':
      return 'bright';

    default:
      return 'highlight';
  }
};

/**
 * Base Tailwind classes used for vertically stacked layout sections.
 *
 * @constant {string}
 */
const SPACER_BASE_CLASS = 'flex flex-col space-y-32';

/**
 * Additional Tailwind margin class applied when extra top spacing is enabled.
 *
 * @constant {string}
 */
const SPACER_MARGIN_CLASS = 'mt-8';

/**
 * Resolves the Tailwind spacing classes for vertically stacked content.
 *
 * Operations:
 * - Returns the shared vertical stack classes by default.
 * - Appends an additional top margin when `showSpacer` is enabled.
 *
 * @param {boolean | undefined} showSpacer - Controls whether additional top spacing should be added.
 * @returns {string} Tailwind class string for the resolved spacing setup.
 */
export function getSpacerClass(showSpacer: boolean | undefined): string {
  return showSpacer
    ? `${SPACER_BASE_CLASS} ${SPACER_MARGIN_CLASS}`
    : SPACER_BASE_CLASS;
}

/**
 * Resolves a usable image source string from either a plain URL or a Next.js static image object.
 *
 * Operations:
 * - Returns `undefined` when no image source is provided.
 * - Extracts the `.src` value from `StaticImageData` objects.
 * - Returns plain string sources unchanged.
 *
 * @param {string | StaticImageData | undefined} imageSrc - Optional image source value as a string URL or `StaticImageData`.
 * @returns {string | undefined} Normalized image source string, or `undefined` when no source exists.
 */
export const resolveImageSrc = (
              imageSrc?: string | StaticImageData): StrngUndfndType => {

  if (!imageSrc) return undefined;

  return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
};

/**
 * Resolves a URL-friendly slug from free-form text input.
 *
 * Operations:
 * - Normalizes accented characters into their base letter forms.
 * - Removes unsupported characters and trims surrounding whitespace.
 * - Replaces spaces with hyphens and collapses repeated hyphens.
 *
 * @param {string | undefined} input - Source text converted into a slug.
 * @returns {string | undefined} Lowercase slug string suitable for identifiers or URLs.
 */
export const toSlug = ((input: StrngUndfndType): StrngUndfndType => {

  if (!input) return undefined;

  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
});


export const getId = ((SectionId: StrngUndfndType,
                       ElementId: StrngUndfndType):StrngUndfndType => {
    return  ElementId
              ? `${SectionId}-${ElementId}`
              : undefined;
});





/**
 * Resolves the article-related DOM ids for one aligned content entry.
 *
 * Operations
 * - Builds stable nested ids for the article wrapper and header elements.
 * - Combines available heading and suffix ids into one aria-labelledby value.
 *
 * @returns {
 *   idMain: StrngUndfndType;
 *   idSection: string;
 *   idH2: StrngUndfndType;
 *   idH3: StrngUndfndType;
 *   idSuffixH3: StrngUndfndType;
 *   articleLabelBy: StrngUndfndType;
 * } Resolved article id collection.
 * @param SectionId
 * @param AlContent
 */
export const getArticleIds = (
  SectionId: StrngUndfndType,
  AlContent: BaseAlContentDef,
): SectionIdsType  => {

  if (!AlContent) {
    return {
      idMain: undefined,
      idArticle: undefined,
      idHMain: undefined,
      idHSub: undefined,
      idSuffix: undefined,
      articleLabelBy: undefined,
    };
  }

  const idMain: StrngUndfndType = getId(
    SectionId,
    AlContent.AlId,
  );

  const idArticle: StrngUndfndType = getId(
    idMain,
    AlContent.AlKey.toString()
  );

  const idHMain: StrngUndfndType = getId(
    idArticle,
    AlContent.AlHeaderItem?.HdrId,
  );

  const idHSub: StrngUndfndType = getId(
    idArticle,
    AlContent.AlHeaderItem?.HdrSubId,
  );

  const idSuffix: StrngUndfndType = getId(
    idArticle,
    AlContent.AlHeaderItem?.HdrTitleSuffix?.SxId,
  );

  const articleLabelBy: StrngUndfndType = [
    idHMain,
    idHSub,
    idSuffix]
    .filter(Boolean)
    .join(' ') || undefined;

  return {
    idMain,
    idArticle,
    idHMain,
    idHSub,
    idSuffix,
    articleLabelBy,
  };
};

//ContentIdsType
export const getContentIds = (
  SectionId: StrngUndfndType,
  AlContent: BaseAlContentDef,
): ContentIdsType  => {

  if (!AlContent) {
    return {
      idSection: undefined,
      idHMain: undefined,
      idHSub: undefined,
      idDescription1: {
        hdng: undefined,
        id: undefined,
      },
      idDescription2: {
        hdng: undefined,
        id: undefined,
      },
      idDescription3: {
        hdng: undefined,
        id: undefined,
      },
      idSkills: undefined,
      idCallToAction: undefined,
      sectionLabelBy: undefined,
    };
  }

  const idMain: StrngUndfndType = getId(
    SectionId,
    AlContent.AlId,
  );

  const idSection: StrngUndfndType = getId(
    idMain,
    AlContent.AlKey.toString()
  );

  const idHMain: StrngUndfndType = getId(
    idSection,
    AlContent.AlHeaderItem?.HdrId
  );

  const idHSub: StrngUndfndType = getId(
    idSection,
    AlContent.AlHeaderItem?.HdrSubId
  );

  const idDescription1idPre = getId(idSection, AlContent.AlDescription1?.DnId);
  const idDescription1 = {
          id: idDescription1idPre,
          hdng: `${idDescription1idPre}}-title`};

  const idDescription2main = getId(idSection, AlContent.AlDescription2?.DnId);
  const idDescription2 = {
    id: idDescription2main,
    hdng: `${idDescription2main}-title`};

  const idDescription3main = getId(idSection, AlContent?.AlDescription3?.DnId);
  const idDescription3 = {
    id: idDescription3main,
    hdng: `${idDescription3main}-title`};

  const idSkills: StrngUndfndType = getId(
    idSection,
    AlContent.AlSkills?.SeiId
  );

  const idCallToAction: StrngUndfndType = getId(
    idSection,
    'call_for_action'
  );

  const sectionLabelBy: StrngUndfndType = [
    idSection,
    idHMain,
    idHSub,
    idDescription1.id,
    idDescription2.id,
    idDescription3.id,
    idSkills,
    idCallToAction]
    .filter(Boolean)
    .join(' ') || undefined;

  return {
    idSection,
    idHMain,
    idHSub,
    idDescription1,
    idDescription2,
    idDescription3,
    idSkills,
    idCallToAction,
    sectionLabelBy,
  };
};

export const getHeaderIds = (
  idArticle: StrngUndfndType,
  HeaderItem: BaseHeaderItemDef | undefined,
): HeaderIdsType  => {

  if (!HeaderItem) {
    return {
      idSuffix: undefined,
      idH: undefined,
      sectionLabelBy: undefined,
    };
  }
  // ToDO:
  //const skillSlug = AlContent?.CntSkillsHead ? toSlug(AlContent?.CntSkillsHead) : 'skills';

  const idSuffix: StrngUndfndType = getId(
    idArticle,
    HeaderItem?.HdrTitleSuffix?.SxId,
  );

  const idH: StrngUndfndType = getId(
    idSuffix,
    'title',
  );

  const sectionLabelBy: StrngUndfndType = idH;

  return {
    idSuffix,
    idH,
    sectionLabelBy
  };
};


export const getCurrentMonthYear = (): string => {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  return `${month}/${year}`;
};
