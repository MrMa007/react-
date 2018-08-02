import {combineReducers} from 'redux'
import {RECEIVE_HEADCATES,
  RECEIVE_FOCUSLISTS,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_TAGLISTS,
  RECEIVE_NEWITEMLISTS,
  RECEIVE_POPULARITEMLISTS,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_TOPICLISTS,
  RECEIVE_CATELISTS,
  RECEIVE_ZHENPIN,
  RECEIVE_YXLOOK,
  RECEIVE_TENFIFTEEN,
  RECEIVE_RECOMMEND,
  RECEIVE_FINDMORE,
  RECEIVE_COLUMN,
  RECEIVE_BANNER,
  RECEIVE_CATEGORY,
  RECEIVE_PREF
}from './action-types'













// const pref=[]
function pref(state=[], action) {
  switch (action.type) {
    case RECEIVE_PREF:
      return action.data
    default:
      return state
  }
}

function headCateList(state=[], action) {
  switch (action.type) {
    case RECEIVE_HEADCATES:
      return action.data
    default:
      return state
  }
}
function focusList(state=[], action) {
  switch (action.type) {
    case RECEIVE_FOCUSLISTS:
      return action.data
    default:
      return state
  }
}
function policyDescList(state=[], action) {
  switch (action.type) {
    case RECEIVE_POLICYDESCLIST:
      return action.data
    default:
      return state
  }
}
function newItemList(state=[], action) {
  switch (action.type) {
    case RECEIVE_NEWITEMLISTS:
      return action.data
    default:
      return state
  }
}
function popularItemList(state=[], action) {

  switch (action.type) {
    case RECEIVE_POPULARITEMLISTS:
      return action.data
    default:
      return state
  }
}

function tagLi(state=[], action) {

  switch (action.type) {
    case RECEIVE_TAGLISTS:
      return action.data
    default:
      return state
  }
}
function flashSaleIndexVO(state={}, action) {

  switch (action.type) {
    case RECEIVE_FLASHSALEINDEXVO:
      return action.data
    default:
      return state
  }
}
function topicList(state=[], action) {

  switch (action.type) {
    case RECEIVE_TOPICLISTS:
      return action.data
    default:
      return state
  }
}
function cateList(state=[], action) {

  switch (action.type) {
    case RECEIVE_CATELISTS:
      return action.data
    default:
      return state
  }
}
function column(state=[], action) {

  switch (action.type) {
    case RECEIVE_COLUMN:
      return action.data
    default:
      return state
  }
}
function banner(state=[], action) {

  switch (action.type) {
    case RECEIVE_BANNER:
      return action.data
    default:
      return state
  }
}
function recommend(state={}, action) {

  switch (action.type) {
    case RECEIVE_RECOMMEND:
      return action.data
    default:
      return state
  }
}
function tenfifteen(state=[], action) {

  switch (action.type) {
    case RECEIVE_TENFIFTEEN:
      return action.data
    default:
      return state
  }
}
function zhenpin(state={}, action) {

  switch (action.type) {
    case RECEIVE_ZHENPIN:
      return action.data
    default:
      return state
  }
}
function yxLook(state={}, action) {

  switch (action.type) {
    case RECEIVE_YXLOOK:
      return action.data
    default:
      return state
  }
}
function findMore(state=[], action) {

  switch (action.type) {
    case RECEIVE_FINDMORE:
      return action.data
    default:
      return state
  }
}
function category(state=[], action) {

  switch (action.type) {
    case RECEIVE_CATEGORY:
      return action.data
    default:
      return state
  }
}
export default combineReducers({
  headCateList,
  focusList,
  policyDescList,
  newItemList,
  tagLi,
  popularItemList,
  flashSaleIndexVO,
  topicList,
  cateList,
  banner,
  column,
  recommend,
  tenfifteen,
  zhenpin,
  yxLook,
  findMore,
  category,
  pref,
})