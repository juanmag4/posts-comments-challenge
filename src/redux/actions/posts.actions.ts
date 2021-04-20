import axios from '../axios.instance';
import { FETCH_POSTS, FETCH_POSTS_FAIL, FETCH_POSTS_SUCCESS } from './types';

export const fetchPosts = () => async (dispatch: any) => {
  dispatch({ type: FETCH_POSTS });

  try {
    const response = await axios.get('/posts');
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAIL });
  }
};
