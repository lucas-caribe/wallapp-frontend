import React, { useState } from 'react';

function PostInput() {
  const [isValidPost, setIsValidPost] = useState(false);
  const [postBody, setPostBody] = useState('');
  const [remainingChars, setRemainingChars] = useState(250);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postBody.length) {
      console.log(postBody);
    } else {
      setIsValidPost(false);
    }
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setPostBody(value);
    setIsValidPost(value.length);
    setRemainingChars(250 - value.length);
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
        <span>{remainingChars}</span>
        <button disabled={!isValidPost} type="submit">
          post
        </button>
      </div>
    </form>
  );
}

export default PostInput;
