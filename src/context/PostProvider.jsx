import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PostContext from './PostContext';

import { getPosts } from '../helpers/wallApiHelpers';

const PostProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPostList(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const refreshPosts = () => {
    fetchPosts();
  };

  return (
    <PostContext.Provider value={{ postList, refreshPosts }}>
      {children}
    </PostContext.Provider>
  );
};

PostProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostProvider;
