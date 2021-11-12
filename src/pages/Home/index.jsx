import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';

import PostList from '../../components/PostList';
import PostInput from '../../components/PostInput';

function Home() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div>
      {isLoggedIn && <PostInput />}
      <PostList />
    </div>
  );
}

export default Home;
