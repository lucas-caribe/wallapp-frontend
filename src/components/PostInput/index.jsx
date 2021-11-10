import React from 'react';

function PostInput() {
  const onSubmit = (e) => {
    e.preventDefault();
    global.alert('submitted');
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea name="post" id="" cols="30" rows="10" maxLength="250" />
      <div className="form-controls">
        <span>250</span>
        <button type="submit">post</button>
      </div>
    </form>
  );
}

export default PostInput;
