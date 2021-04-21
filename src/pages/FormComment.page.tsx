import React from 'react';
import { useForm } from "react-hook-form";
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD_COMMENT } from '../redux/actions/types';
import { FormData } from '../interfaces/formComment.interfaces';

export const FormComment = () => {
  const { postId }: any = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(({ name, email, body }) => {
    dispatch({ type: ADD_COMMENT, payload: { name, email, body, postId } });
    history.push(`/comments/${postId}`);
  });

  return (
    <form className="ui form" onSubmit={onSubmit}>
      <div className="field">
        <label>Name</label>
        <input type="text" placeholder="Name" {...register("name", { required: true, maxLength: 50 })} />
      </div>
      <div className="field">
        <label>Email</label>
        <input type="text" placeholder="Email" {...register("email", { required: true, maxLength: 50 })} />
      </div>
      <div className="field">
        <label>Comment</label>
        <textarea rows={10} {...register("body", { required: true })}></textarea>
      </div>
      <button className="ui button" type="submit">Add Comment</button>
    </form>
  )
};
