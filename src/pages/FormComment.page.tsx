import React, { FC } from 'react';
import { useForm } from "react-hook-form";
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ADD_COMMENT } from '../redux/actions/types';
import { FormData } from '../interfaces/formComment.interfaces';
import { AppDispatch } from '../redux';

const schema = yup.object().shape({
  name: yup.string().required().max(50),
  email: yup.string().required().email(),
  body: yup.string().required()
});

export const FormComment: FC = () => {
  const { postId }: any = useParams();
  const history = useHistory();
  const dispatch: AppDispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = handleSubmit(({ name, email, body }) => {
    dispatch({ type: ADD_COMMENT, payload: { name, email, body, postId } });
    history.push(`/comments/${postId}`);
  });

  return (
    <form className="ui form" onSubmit={onSubmit}>
      <div className={`field${errors?.name ? ' error' : ''}`}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
        />
      </div>
      <div className={`field${errors?.email ? ' error' : ''}`}>
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          {...register("email")}
        />
      </div>
      <div className={`field${errors?.body ? ' error' : ''}`}>
        <label>Comment</label>
        <textarea rows={10} {...register("body")}></textarea>
      </div>
      <button className="ui button" type="submit">Add Comment</button>
    </form>
  )
};
