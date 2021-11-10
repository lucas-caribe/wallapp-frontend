import React from 'react';

import Post from '../../components/Post';
import PostInput from '../../components/PostInput';

function Home() {
  return (
    <div>
      <PostInput />
      <Post />
    </div>
  );
}

export default Home;
