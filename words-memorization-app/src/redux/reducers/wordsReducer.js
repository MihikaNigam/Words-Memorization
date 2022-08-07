import _ from "lodash";
import {
  FETCH_WORD,
  FETCH_WORDS,
  CREATE_WORD,
  EDIT_WORD,
  DELETE_WORD,
} from "../actions/types";

const WordReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_WORDS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_WORD:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_WORD:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_WORD:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_WORD:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
export default WordReducer;
