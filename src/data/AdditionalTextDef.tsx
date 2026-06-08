
interface AdditionalElements {
  ContractorMain: AdditionalTextItem;
  SkillsMain: AdditionalTextItem;
}
export default AdditionalElements;

export interface AdditionalTextItem {
  Prefix?: JSX.Element;
  Suffix?: JSX.Element;
}