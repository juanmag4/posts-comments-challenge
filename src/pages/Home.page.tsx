import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../components/Post';
import { Store } from '../interfaces/redux.interfaces';
import { AppDispatch } from '../redux';
import { fetchPosts } from '../redux/actions/posts.actions';
import { Placeholder } from '../components/Placeholder';

export const HomePage: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { posts, loading } = useSelector((store: Store) => store.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (loading) {
    return (
      <Placeholder />
    );
  } else {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {posts.map((post) => <Post key={post.id} {...post} />)}
      </div>
    );
  }
};
