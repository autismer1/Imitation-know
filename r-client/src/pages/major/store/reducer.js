import { Map } from "immutable";
import {
  GET_VIDEO_LIST,
  GET_FOLLOW_LIST,
  GET_HOT_LIST,
  GET_RECOMMEND_LIST,
} from "./constants";

const defaultState = Map({
  video: [],
  recommend: [],
  hot: [],
  follow: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_VIDEO_LIST:
      return state.set("video", action.data);
    case GET_FOLLOW_LIST:
      return state.set("follow", action.data);
    case GET_HOT_LIST:
      return state.set("hot", action.data);
    case GET_RECOMMEND_LIST:
      return state.set("recommend", action.data);
    default:
      return state;
  }
}

export default reducer;
