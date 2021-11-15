import React, { useContext } from 'react';

import PostContext from '../../context/PostContext';

import Post from '../Post';
import Loading from '../Loading';

import './style.css';

function PostList() {
  const { postList, isFetching } = useContext(PostContext);

  if (!postList.length) {
    return (
      <div className="post-list">
        <h4 className="no-posts">No posts yet...</h4>
      </div>
    );
  }

  return (
    <div className="post-list">
      {isFetching && <Loading />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
