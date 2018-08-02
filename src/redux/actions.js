import {
  reqHeadCateList,
  reqFocusList,
  reqPolicyDescList,
  reqTagList,
  reqNewItemList,
  reqPopularItemList,
  reqFlashSaleIndexVO,
  reqTopicList,
  reqCateList,
  reqBanner,
  reqColumn,
  reqFindMore,
  reqRecommend,
  reqTenfifteen,
  reqYxLook,
  reqZhenpin,
  reqCategory,
  reqPref

} from '../api/index'
import {RECEIVE_HEADCATES,
  RECEIVE_FOCUSLISTS,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_TAGLISTS,
  RECEIVE_NEWITEMLISTS,
  RECEIVE_POPULARITEMLISTS,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_TOPICLISTS,
  RECEIVE_CATELISTS,
  RECEIVE_BANNER,
  RECEIVE_COLUMN,
  RECEIVE_FINDMORE,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEEN,
  RECEIVE_YXLOOK,
  RECEIVE_ZHENPIN,
  RECEIVE_CATEGORY,
  RECEIVE_PREF
}from './action-types'
const receiveHeadcates = (headCateList) => ({type: RECEIVE_HEADCATES, data: headCateList})
const receiveFocusList = (result) => ({type: RECEIVE_FOCUSLISTS, data: result})
const receivePolicyDescList = (result) => ({type: RECEIVE_POLICYDESCLIST, data: result})
const receiveNewItemList = (result) => ({type: RECEIVE_NEWITEMLISTS, data: result})
const receiveTagList = (result) => ({type: RECEIVE_TAGLISTS, data: result})
const receivePopularItemList = (result) => ({type: RECEIVE_POPULARITEMLISTS, data: result})
const receiveFlashSaleIndexVO = (result) => ({type: RECEIVE_FLASHSALEINDEXVO, data: result})
const receiveTopicList = (result) => ({type: RECEIVE_TOPICLISTS, data: result})
const receiveCateList = (result) => ({type: RECEIVE_CATELISTS, data: result})
const receiveBanner = (result) => ({type: RECEIVE_BANNER, data: result})
const receiveColumn = (result) => ({type: RECEIVE_COLUMN, data: result})
const receiveRecommend = (result) => ({type: RECEIVE_RECOMMEND, data: result})
const receiveTenfifteen = (result) => ({type: RECEIVE_TENFIFTEEN, data: result})
const receiveZhenpin = (result) => ({type: RECEIVE_ZHENPIN, data: result})
const receiveYxLook = (result) => ({type: RECEIVE_YXLOOK, data: result})
const receiveFindMore = (result) => ({type: RECEIVE_FINDMORE, data: result})
const receiveCategory = (result) => ({type: RECEIVE_CATEGORY, data: result})
const receivePref = (result) => ({type: RECEIVE_PREF, data: result})
export const getHeadCateList = () => {
  return async dispatch => {
    const result = await reqHeadCateList()
    console.log(result)
    if (result.code === 0) {
      const headCateList=result.data// 更新成功
      dispatch(receiveHeadcates(headCateList))
    }
  }
}
export const getFocusList = () => {
  return async dispatch => {
    const responce = await reqFocusList()
    if (responce.code === 0) {
      const result=responce.data// 更新成功
      dispatch(receiveFocusList(result))
    }
  }
}
export const getPolicyDescList = () => {
  return async dispatch => {
    const responce = await reqPolicyDescList()
    if (responce.code === 0) {
      const result=responce.data// 更新成功
      dispatch(receivePolicyDescList(result))
    }
  }
}
export const getNewItemList = () => {
  return async dispatch => {
    const responce = await reqNewItemList()
    if (responce.code === 0) {
      const result=responce.data// 更新成功
      dispatch(receiveNewItemList(result))
    }
  }
}
export const getTagList = () => {
  return async dispatch => {
    const responce = await reqTagList()
    if (responce.code === 0) {
      const result=responce.data// 更新成功
      dispatch(receiveTagList(result))
    }
  }
}
export const getPopularItemList = () => {
  return async dispatch => {
    const responce = await reqPopularItemList()
    if (responce.code === 0) {
      const result=responce.data// 更新成功
      dispatch(receivePopularItemList(result))
    }
  }
}
export const getFlashSaleIndexVO = () => {
  return async dispatch => {
    const responce = await reqFlashSaleIndexVO()

    if (responce.code === 0) {
      const result=responce.data// 更新成功
      dispatch(receiveFlashSaleIndexVO(result))
    }
  }
}
export const getTopicList= () => {
  return async dispatch => {
    const responce = await reqTopicList()

    if (responce.code === 0) {
      const result=responce.data// 更新成功
      dispatch(receiveTopicList(result))
    }
  }
}
export const getCateList= () => {
  return async dispatch => {
    const responce = await reqCateList()

    if (responce.code === 0) {
      const result=responce.data// 更新成功
      dispatch(receiveCateList(result))
    }
  }
}
export const getBanner= () => {
  return async dispatch => {
    const responce = await reqBanner()

    if (responce.code === 0) {
      const result=responce.data// 更新成功
      dispatch(receiveBanner(result))
    }
  }
}
export const getColumn= () => {
  return async dispatch => {
    const responce = await reqColumn()

    if (responce.code === 0) {
      const result=responce.data// 更新成功
      dispatch(receiveColumn(result))
    }
  }
}
export const getRecommend= () => {
  return async dispatch => {
    const responce = await reqRecommend()

    if (responce.code === 0) {
      const result=responce.data// 更新成功
      dispatch(receiveRecommend(result))
    }
  }
}
export const getTenfifteen= () => {
  return async dispatch => {
    const responce = await reqTenfifteen()

    if (responce.code === 0) {
      const result=responce.data// 更新成功
      dispatch(receiveTenfifteen(result))
    }
  }
}
export const getZhenpin= () => {
  return async dispatch => {
    const responce = await reqZhenpin()

    if (responce.code === 0) {
      const result=responce.data// 更新成功
      dispatch(receiveZhenpin(result))
    }
  }
}
export const getYxLook= () => {
  return async dispatch => {
    const responce = await reqYxLook()

    if (responce.code === 0) {
      const result=responce.data// 更新成功
      dispatch(receiveYxLook(result))
    }
  }
}
export const getFindMore= () => {
  return async dispatch => {
    const responce = await reqFindMore()
    if (responce.code === 0) {
      const result=responce.data// 更新成功
      dispatch(receiveFindMore(result))
    }
  }
}
export const getCategory= () => {
  return async dispatch => {
    const responce = await reqCategory()
    if (responce.code === 0) {
      const result=responce.data// 更新成功
      dispatch(receiveCategory(result))
    }
  }
}
export const getPref= () => {
  return async dispatch => {
    const responce = await reqPref()
    if (responce.code === 0) {
      const result=responce.data// 更新成功
      dispatch(receivePref(result))
    }
  }
}