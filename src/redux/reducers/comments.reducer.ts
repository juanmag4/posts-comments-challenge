import { ICommentState } from "../../interfaces/redux.interfaces";
import { ADD_COMMENT, FETCH_COMMENTS, FETCH_COMMENTS_FAIL, FETCH_COMMENTS_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  comments: [],
  userGeneratedComments: [],
  loading: false
};

export default function commentsReducer (state: ICommentState = INITIAL_STATE, action: any) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { ...state, loading: true };
    case FETCH_COMMENTS_SUCCESS:
      const { comments, postId } = action.payload;
      const customCommentsForPost = state.userGeneratedComments
        .filter((comment) => comment.postId === postId);

      return { ...state, comments: comments.concat(customCommentsForPost), loading: false };
    case FETCH_COMMENTS_FAIL:
      return { ...state, loading: false };
    case ADD_COMMENT:
      const comment = action.payload;
      const userGeneratedComments = state.userGeneratedComments.concat(comment);

      return { ...state, userGeneratedComments };
    default:
      return state;
  }
}
