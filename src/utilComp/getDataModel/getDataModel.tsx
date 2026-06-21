import {
  getDataModelProps,
  getDataModelResult,
} from '../../data/utilComp/generalTypeDef';


export const getDataModel = ({searchVal, IxContent}: getDataModelProps ):getDataModelResult => {

  if (!IxContent || !searchVal) return {
    success: false,
    result: null,
  }





  return {
    success: true,
    result: {
      idHtml: '',
      key: 0,
      title: '',
      subtitle: '',
      tag: 'h1',
      content: '',
      SearchVal: '',
    }
  }
}