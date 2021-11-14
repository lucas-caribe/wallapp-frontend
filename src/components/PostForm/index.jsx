import React, { useState, useEffect, useContext } from 'react';
import { BiSend } from 'react-icons/bi';

import PostContext from '../../context/PostContext';

import Loading from '../Loading';

import { createPost } from '../../helpers/wallApiHelpers';

import './style.css';

const MAX_CHARS = 250;

function PostForm() {
  const [isValidPost, setIsValidPost] = useState(false);
  const [postBody, setPostBody] = useState('');

  const {
    refreshPosts,
    isFetching,
    setIsFetching,
    isEditing,
    postToEdit,
    submitEdit,
  } = useContext(PostContext);

  useEffect(() => {
    if (isEditing) {
      setPostBody(postToEdit.body);
      setIsValidPost(true);
    }
  }, [isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidPost) {
      setIsFetching(true);

      if (isEditing) {
        await submitEdit({ ...postToEdit, body: postBody });
      } else {
        await createPost({ body: postBody });
      }

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
    <form className="post-form" onSubmit={handleSubmit}>
      {isFetching && <Loading />}
      <div className="textarea-container">
        <textarea
          placeholder="What are you thinking?"
          maxLength="250"
          rows="4"
          value={postBody}
          onChange={handleChange}
        />
      </div>
      <hr />
      <div className="form-controls">
        <span>{MAX_CHARS - postBody.length}</span>
        <button disabled={!isValidPost} type="submit">
          <BiSend />
        </button>
      </div>
    </form>
  );
}

export default PostForm;
