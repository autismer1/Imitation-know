import { GET_VIDEO_LIST, GET_FOLLOW_LIST, GET_RECOMMEND_LIST, GET_HOT_LIST } from "./constants";
import { VIDEO, FOLLOW, HOT, RECOMMEND } from '@/services/api/major';

// 视频
export const getVideoAction = (data) => ({
  type: GET_VIDEO_LIST,
  data
})

export const getAllVideoAction = (offset = 12) => {
  return async (dispatch, getState) => {
    const lastData = getState().getIn(['major', 'video'])
    const { data } = await VIDEO(offset)
    dispatch(getVideoAction([...lastData, ...data]))
  }
}

// 关注
export const getFollowAction = (data) => ({
  type: GET_FOLLOW_LIST,
  data
})

export const getAllFollowAction = (limit = 10) => {
  return async dispatch => {
    const { data } = await FOLLOW(limit)
    dispatch(getFollowAction(data))
  }
}

// 热榜
export const getHotAction = (data) => ({
  type: GET_HOT_LIST,
  data
})

export const getAllHotAction = (limit = 10) => {
  return async dispatch => {
    const { data } = await HOT(limit)
    dispatch(getHotAction(data))
  }
}

// 推荐
export const getRecommendAction = (data) => ({
  type: GET_RECOMMEND_LIST,
  data
})

export const getAllRecommendAction = (limit = 10) => {
  return async dispatch => {
    const { data } = await RECOMMEND(limit)
    dispatch(getRecommendAction(data))
  }
}