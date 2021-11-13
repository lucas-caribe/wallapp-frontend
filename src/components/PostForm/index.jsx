import React, { useState, useEffect, useContext, useRef } from 'react';
import { BiSend } from 'react-icons/bi';

import PostContext from '../../context/PostContext';

import { createPost } from '../../helpers/wallApiHelpers';

import './style.css';

const MAX_CHARS = 250;

function PostForm() {
  const [isValidPost, setIsValidPost] = useState(false);
  const [postBody, setPostBody] = useState('');
  const [textareaHeight, setTextareaHeight] = useState(0);
  const [textContainerHeight, setTextContainerHeight] = useState(0);
  const textAreaRef = useRef(null);

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

  useEffect(() => {
    setTextContainerHeight(`${textAreaRef.current.scrollHeight}px`);
    setTextareaHeight(`${textAreaRef.current.scrollHeight}px`);
  }, [postBody]);

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

    setTextareaHeight(0);
    setTextContainerHeight(`${textAreaRef.current.scrollHeight}px`);
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div
        className="textarea-container"
        style={{ minHeight: textContainerHeight }}
      >
        <textarea
          ref={textAreaRef}
          placeholder="What are you thinking?"
          maxLength="250"
          rows="1"
          value={postBody}
          onChange={handleChange}
          style={{ height: textareaHeight }}
        />
      </div>
      <hr />
      <div className="form-controls">
        <span>{MAX_CHARS - postBody.length}</span>
        <button disabled={!isValidPost} type="submit">
          <BiSend />
        </button>
      </div>
      {isFetching && <p>Loading...</p>}
    </form>
  );
}

export default PostForm;
