import React from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../interfaces/posts.interfaces';

export const Post = ({ body, title, id }: IPost) => {
  return (
    <Link to={`/comments/${id}`}>
      <div style={{ margin: '20px' }}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </Link>
  )
};
