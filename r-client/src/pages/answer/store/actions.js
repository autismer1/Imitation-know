import { GET_INVITE_LIST, GET_POPULAR_LIST, GET_QUESTION_LIST, GET_RECOMMEND_LIST } from "./constants";
import { RECOMMEND, POPULAR, QUESTION, INVITE } from '@/services/api/answer';

// 为你推荐
export const getRecommendAction = (data) => ({
  type: GET_RECOMMEND_LIST,
  data
})

export const getAllRecommendAction = (offset = 0) => {
  return async (dispatch, getState) => {
    const lastData = getState().getIn(['answer', 'recommend'])
    const { data } = await RECOMMEND(offset)
    handleData(data, lastData, 'have')
    dispatch(getRecommendAction([...lastData, ...data]))
  }
}

export const getPopularAction = (data) => ({
  type: GET_POPULAR_LIST,
  data
})

export const getAllPopularAction = (offset = 0) => {
  return async (dispatch, getState) => {
    const lastData = getState().getIn(['answer', 'popular'])
    const { data } = await POPULAR(offset)
    handleData(data, lastData, 'have')
    dispatch(getPopularAction([...lastData, ...data]))
  }
}

export const getQuestionAction = (data) => ({
  type: GET_QUESTION_LIST,
  data
})

export const getAllQuestionAction = (offset = 0) => {
  return async (dispatch, getState) => {
    const lastData = getState().getIn(['answer', 'question'])
    const { data } = await QUESTION(offset)
    handleData(data, lastData, 'have')
    dispatch(getQuestionAction([...lastData, ...data]))
  }
}

export const getInviteAction = (data) => ({
  type: GET_INVITE_LIST,
  data
})

export const getAllInviteAction = (offset = 0) => {
  return async (dispatch, getState) => {
    const lastData = getState().getIn(['answer', 'invite'])
    const { data } = await INVITE(offset)
    handleData(data, lastData, 'no')
    dispatch(getInviteAction([...lastData, ...data]))
  }
}

function handleData (data, lastdata, type) {
  data.forEach(item => {
    const index = lastdata.findIndex(sitem => {
      return type === 'have' ? sitem.question.id === item.question.id : sitem.id === item.id
    })
    lastdata.splice(index, 1)
  })
}