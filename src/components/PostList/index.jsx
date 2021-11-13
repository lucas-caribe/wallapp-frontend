import React, { useContext } from 'react';

import PostContext from '../../context/PostContext';

import Post from '../Post';

import './style.css';

function PostList() {
  const { postList, isFetching } = useContext(PostContext);

  return (
    <div className="post-list">
      {isFetching && <p>Loading...</p>}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
