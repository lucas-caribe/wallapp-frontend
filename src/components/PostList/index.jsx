import React, { useContext } from 'react';

import PostContext from '../../context/PostContext';

import Post from '../Post';

function PostList() {
  const { postList, isFetching } = useContext(PostContext);

  return (
    <div>
      {isFetching && <p>Loading...</p>}
      <h1>PostList</h1>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
