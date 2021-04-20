import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../components/Post';
import { IPost } from '../interfaces/posts.interfaces';
import { fetchPosts } from '../redux/actions/posts.actions';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((store: any) => store.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {posts.map((post: IPost) => <Post key={post.id} {...post} />)}
    </div>
  )
};
