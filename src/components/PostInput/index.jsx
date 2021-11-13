import React, { useState, useContext } from 'react';

import PostContext from '../../context/PostContext';

import { createPost } from '../../helpers/wallApiHelpers';

const MAX_CHARS = 250;

function PostInput() {
  const [isValidPost, setIsValidPost] = useState(false);
  const [postBody, setPostBody] = useState('');

  const { refreshPosts, isFetching, setIsFetching } = useContext(PostContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidPost) {
      setIsFetching(true);
      await createPost({ body: postBody });
      setPostBody('');
      setIsValidPost(false);
      await refreshPosts();
      setIsFetching(false);
    }
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setPostBody(value);
    setIsValidPost(value.length);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="What are you thinking?"
        cols="30"
        rows="10"
        maxLength="250"
        value={postBody}
        onChange={handleChange}
      />
      <div className="form-controls">
        <span>{MAX_CHARS - postBody.length}</span>
        <button disabled={!isValidPost} type="submit">
          post
        </button>
      </div>
      {isFetching && <p>Loading...</p>}
    </form>
  );
}

export default PostInput;
