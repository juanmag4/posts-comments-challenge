import { ADD_COMMENT, FETCH_COMMENTS, FETCH_COMMENTS_FAIL, FETCH_COMMENTS_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  comments: []
};

export default function (state: any = INITIAL_STATE, action: any) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { ...state, loading: true };
    case FETCH_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload, loading: false };
    case FETCH_COMMENTS_FAIL:
      return { ...state, loading: false };
    case ADD_COMMENT:
      return { ...state, comments: state.comment.concat(action.payload) };
    default:
      return state;
  }
}
