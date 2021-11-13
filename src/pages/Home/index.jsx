import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';

import PostList from '../../components/PostList';
import PostForm from '../../components/PostForm';

function Home() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div className="main-content">
      {isLoggedIn && <PostForm />}
      <PostList />
    </div>
  );
}

export default Home;
