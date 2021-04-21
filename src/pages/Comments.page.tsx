import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IComment } from '../interfaces/comment.interfaces';
import { Comment } from '../components/Comment';
import { fetchComments } from '../redux/actions/comments.actions';

export const CommentsPage = () => {
  const { postId }: any = useParams();
  const dispatch = useDispatch();
  const { comments } = useSelector((store: any) => store.comments);

  useEffect(() => {
    dispatch(fetchComments(postId));
  }, []);

  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      {comments.map((comment: IComment) => <Comment key={comment.name} {...comment} />)}
    </div>
  )
};
