import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PostContext from './PostContext';

import { getPosts, editPost } from '../helpers/wallApiHelpers';

const PostProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [postToEdit, setPostToEdit] = useState({});

  const fetchPosts = async () => {
    setIsFetching(true);
    const data = await getPosts();
    setPostList(data);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const refreshPosts = () => {
    setIsFetching(true);
    fetchPosts();
    setIsFetching(false);
  };

  const setEdit = (postData) => {
    setIsEditing(true);
    setPostToEdit(postData);
  };

  const submitEdit = async (postData) => {
    await editPost(postData);
    setIsEditing(false);
    setPostToEdit({});
  };

  return (
    <PostContext.Provider
      value={{
        postList,
        isFetching,
        isEditing,
        postToEdit,
        refreshPosts,
        setIsFetching,
        setEdit,
        submitEdit,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

PostProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostProvider;
