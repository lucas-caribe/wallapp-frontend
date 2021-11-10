import React, { useState, useEffect } from 'react';

import Post from '../Post';

const postList = [
  {
    id: 1,
    body: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    owner: 'lucasmoc47',
    createdAt: '2021-11-10 07:50:00',
  },
];

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(postList);
    };

    fetchPosts();
  }, []);

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
