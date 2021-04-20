import { FETCH_POSTS, FETCH_POSTS_FAIL, FETCH_POSTS_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  posts: [],
  loading: false
};

export default function (state: any = INITIAL_STATE, action: any) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false };
    case FETCH_POSTS_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
}
