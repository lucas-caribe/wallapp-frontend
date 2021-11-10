import React from 'react';

function Post() {
  return (
    <div className="post">
      <div className="post-header">
        <div className="user-info">
          <span>user-img</span>
          <span>lucasmoc47</span>
        </div>
        <span className="posted-time">1 minute ago</span>
      </div>
      <div className="post-body">
        <p>
          If you set your goals ridiculously high and it&apos;s a failure, you
          will fail above everyone else&apos;s success
        </p>
      </div>
    </div>
  );
}

export default Post;
