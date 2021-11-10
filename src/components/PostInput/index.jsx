import React, { useState } from 'react';

function PostInput() {
  const [postBody, setPostBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    global.alert('submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="What are you thinking?"
        cols="30"
        rows="10"
        maxLength="250"
        value={postBody}
        onChange={({ target }) => setPostBody(target.value)}
      />
      <div className="form-controls">
        <span>250</span>
        <button type="submit">post</button>
      </div>
    </form>
  );
}

export default PostInput;
