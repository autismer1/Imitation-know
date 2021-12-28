import {
  GET_SPECIAL_LIST,
  GET_DISCUSS_LIST,
  GET_COLUMN_LIST,
  GET_COLLECT_LIST,
} from "./constants";
import {
  SPECIALS,
  ROUNDTABLES,
  FAVLISTS,
  RECOMMENDATIONS,
} from "@/services/api/discover";

// 最新专题
export const getSpecialAction = (data) => ({
  type: GET_SPECIAL_LIST,
  data,
});

export const getAllSpecialAction = (limit, offset) => {
  return async (dispatch) => {
    const data = await SPECIALS(limit, offset);
    dispatch(getSpecialAction(data));
  };
};

// 圆桌讨论
export const getDiscussAction = (data) => ({
  type: GET_DISCUSS_LIST,
  data,
});

export const getAllDiscussAction = (offset = 10, limit = 10) => {
  return async (dispatch, getState) => {
    const lastData = getState().getIn(['discover', 'discuss'])
    const { data } = await ROUNDTABLES(limit, offset);
    data.forEach(item => {
      const index = lastData.findIndex(sitem => sitem.url_token === item.url_token)
      lastData.splice(index, 1)
    })
    dispatch(getDiscussAction([...lastData, ...data]));
  };
};

// 收藏夹
export const getCollectAction = (data) => ({
  type: GET_COLLECT_LIST,
  data,
});

export const getAllCollectAction = (limit, offset) => {
  return async (dispatch) => {
    const { data } = await FAVLISTS(limit, offset);
    dispatch(getCollectAction(data));
  };
};

// 专栏
export const getColumnAction = (data) => ({
  type: GET_COLUMN_LIST,
  data,
});

export const getAllColumnAction = (limit, offset) => {
  return async (dispatch) => {
    const { data } = await RECOMMENDATIONS(limit, offset);
    dispatch(getColumnAction(data));
  };
};
