import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { BsThreeDots } from 'react-icons/bs';
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai';

import UserContext from '../../context/UserContext';
import PostContext from '../../context/PostContext';

import getTimeSince from '../../utils/getTimeSince';
import { deletePost } from '../../helpers/wallApiHelpers';

import './style.css';

function Post({ post }) {
  const [loggedOwner, setLoggedOwner] = useState(false);
  const [isEditSectionVisible, setIsEditSectionVisible] = useState(false);
  const { username, isLoggedIn } = useContext(UserContext);
  const { refreshPosts, setEdit } = useContext(PostContext);
  const { id, owner, body, created_at: createdAt } = post;

  const timeSince = getTimeSince(new Date(createdAt));

  useEffect(() => {
    if (isLoggedIn && username === owner) {
      setLoggedOwner(true);
    } else {
      setLoggedOwner(false);
    }
  }, [username, isLoggedIn]);

  const handleDelete = async () => {
    setIsEditSectionVisible(false);
    if (global.confirm('Are you sure?')) {
      await deletePost(id);
      await refreshPosts();
    }
  };

  const handleEdit = () => {
    setIsEditSectionVisible(false);
    setEdit(post);
    window.scrollTo(0, 0);
  };

  const renderEditSection = () => (
    <>
      <BsThreeDots
        tabIndex={0}
        onFocus={() => setIsEditSectionVisible(true)}
        onBlur={() => setTimeout(() => setIsEditSectionVisible(false), 200)}
        className="toggle-edit-section"
      />
      <div className={`edit-section ${isEditSectionVisible ? 'visible' : ''}`}>
        <button className="edit-button" type="button" onClick={handleEdit}>
          <AiTwotoneEdit />
          edit
        </button>
        <hr />
        <button className="delete-button" type="button" onClick={handleDelete}>
          <AiFillDelete />
          delete
        </button>
      </div>
    </>
  );

  return (
    <div className="post">
      <div className="post-header">
        <div className="user-image" />
        <div className="user-info">
          <span className="post-username">{owner}</span>
          <span className="posted-time">{timeSince}</span>
        </div>
      </div>
      <div className="post-body">
        <p>{body}</p>
      </div>
      {loggedOwner && renderEditSection()}
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
