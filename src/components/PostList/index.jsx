import React, { useContext } from 'react';

import PostContext from '../../context/PostContext';

import Post from '../Post';

function PostList() {
  const { postList } = useContext(PostContext);

  return (
    <div>
      <h1>PostList</h1>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
