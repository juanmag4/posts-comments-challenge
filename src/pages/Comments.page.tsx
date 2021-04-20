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
    <div>
      {comments.map((comment: IComment) => <Comment {...comment} />)}
    </div>
  )
};
