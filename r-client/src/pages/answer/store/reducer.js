import { Map } from "immutable";
import {
  GET_RECOMMEND_LIST,
  GET_POPULAR_LIST,
  GET_QUESTION_LIST,
  GET_INVITE_LIST,
} from "./constants";

const defaultState = Map({
  recommend: [],
  popular: [],
  question: [],
  invite: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_RECOMMEND_LIST:
      return state.set("recommend", action.data);
    case GET_POPULAR_LIST:
      return state.set("popular", action.data);
    case GET_QUESTION_LIST:
      return state.set("question", action.data);
    case GET_INVITE_LIST:
      return state.set("invite", action.data);
    default:
      return state;
  }
}

export default reducer;
