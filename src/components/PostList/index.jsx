import React, { useState } from 'react';

import Post from '../Post';

const postList = [
  {
    id: 1,
    body: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    owner: 'lucasmoc47',
    createdAt: '2021-11-10 07:50:00',
  },
];

/* eslint-disable */
function PostList() {
  const [posts, setPosts] = useState(postList);

  return (
    <div>
      <h1>PostList</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
