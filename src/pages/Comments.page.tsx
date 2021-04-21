import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Comment } from '../components/Comment';
import { fetchComments } from '../redux/actions/comments.actions';
import { Store } from '../interfaces/redux.interfaces';
import { AppDispatch } from '../redux';
import { Placeholder } from '../components/Placeholder';

export const CommentsPage = () => {
  const { postId }: any = useParams();
  const dispatch: AppDispatch = useDispatch();
  const { comments, loading } = useSelector((store: Store) => store.comments);

  useEffect(() => {
    dispatch(fetchComments(postId));
  }, []);

  if (loading) {
    return (
      <Placeholder />
    );
  } else {
    return (
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        {comments.map((comment) => <Comment key={comment.name} {...comment} />)}
      </div>
    );
  }
};
