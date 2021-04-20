import React from 'react';
import { IComment } from '../interfaces/comment.interfaces';

export const Comment = ({ body, email, name }: IComment) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{body}</p>
      <span>{email}</span>
    </div>
  );
};
