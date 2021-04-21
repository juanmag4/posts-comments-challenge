import { AppDispatch } from '..';
import axios from '../axios.instance';
import { FETCH_COMMENTS, FETCH_COMMENTS_FAIL, FETCH_COMMENTS_SUCCESS } from './types';

export const fetchComments = (postId: string) => async (dispatch: AppDispatch) => {
  dispatch({ type: FETCH_COMMENTS });

  try {
    const response = await axios.get(`/comments?postId=${postId}`);
    dispatch({
      type: FETCH_COMMENTS_SUCCESS,
      payload: { comments: response.data, postId }
    });
  } catch (error) {
    dispatch({ type: FETCH_COMMENTS_FAIL });
  }
};
