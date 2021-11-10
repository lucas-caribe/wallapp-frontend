import React from 'react';

/* eslint-disable */
function Post({ post }) {
  const { owner, body, createdAt } = post;

  return (
    <div className="post">
      <div className="post-header">
        <div className="user-info">
          <span>user-img</span>
          <span>{owner}</span>
        </div>
        <span className="posted-time">{createdAt}</span>
      </div>
      <div className="post-body">
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Post;
