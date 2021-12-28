import { Map } from "immutable";
import {
  GET_SPECIAL_LIST,
  GET_DISCUSS_LIST,
  GET_COLLECT_LIST,
  GET_COLUMN_LIST,
} from "./constants";

const defaultState = Map({
  special: {},
  discuss: [],
  collect: [],
  column: []
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_SPECIAL_LIST:
      return state.set("special", action.data);
    case GET_DISCUSS_LIST:
      return state.set("discuss", action.data);
    case GET_COLLECT_LIST:
      return state.set("collect", action.data);
    case GET_COLUMN_LIST:
      return state.set("column", action.data);
    default:
      return state;
  }
}

export default reducer;
