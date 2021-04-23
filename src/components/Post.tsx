import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../interfaces/posts.interfaces';

export const Post: FC<IPost> = ({ body, title, id }) => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{title}</div>
      </div>
      <div className="content">
        <p>{body}</p>
      </div>
      <div className="extra content">
        <div className="post-button-section">
          <Link to={`/comments/${id}`} className="ui button">See Comments</Link>
          <Link to={`/add-comment/${id}`} className="ui button">Add Comments</Link>
        </div>
      </div>
    </div>
  )
};
