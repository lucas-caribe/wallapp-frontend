import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import UserContext from '../../context/UserContext';
import PostContext from '../../context/PostContext';

import getTimeSince from '../../utils/getTimeSince';
import { deletePost } from '../../helpers/wallApiHelpers';

function Post({ post }) {
  const [loggedOwner, setLoggedOwner] = useState(false);
  const { username, isLoggedIn, setEdit } = useContext(UserContext);
  const { refreshPosts } = useContext(PostContext);
  const { id, owner, body, created_at: createdAt } = post;

  const timeSince = getTimeSince(new Date(createdAt));

  useEffect(() => {
    if (isLoggedIn && username === owner) {
      setLoggedOwner(true);
    }
  }, [username, isLoggedIn]);

  const handleDelete = async () => {
    if (global.confirm('Are you sure?')) {
      await deletePost(id);
      await refreshPosts();
    }
  };

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
      {loggedOwner && (
        <div className="edit-section">
          <button type="button" onClick={() => setEdit(id, post)}>
            edit
          </button>
          <button type="button" onClick={handleDelete}>
            delete
          </button>
        </div>
      )}
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
