import React from 'react';
import PropTypes from 'prop-types';

import getTimeSince from '../../utils/getTimeSince';

function Post({ post }) {
  const { owner, body, createdAt } = post;
  const timeSince = getTimeSince(new Date(createdAt));

  return (
    <div className="post">
      <div className="post-header">
        <div className="user-info">
          <span>user-img</span>
          <span>{owner}</span>
        </div>
        <span className="posted-time">{timeSince}</span>
      </div>
      <div className="post-body">
        <p>{body}</p>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    owner: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
