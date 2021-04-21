import React, { FC } from 'react';
import { IComment } from '../interfaces/comment.interfaces';

export const Comment: FC<IComment> = ({ body, email, name }) => {
  return (
    <div className="comment">
      <div className="avatar">
        <img src="/images/user_placeholder.jpeg" alt={name} />
      </div>
      <div className="content">
        <a className="author">{name}</a>
        <div className="metadata">
          <span className="date">{email}</span>
        </div>
        <div className="text">
          {body}
        </div>
      </div>
    </div>
  );
};
