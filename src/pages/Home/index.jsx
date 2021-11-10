import React from 'react';

import PostList from '../../components/PostList';
import PostInput from '../../components/PostInput';

function Home() {
  return (
    <div>
      <PostInput />
      <PostList />
    </div>
  );
}

export default Home;
