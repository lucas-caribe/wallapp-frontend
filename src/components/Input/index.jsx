import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Input({ placeholder, type, registerCallback, error }) {
  return (
    <>
      <div className="input-container">
        <input
          className="form-input"
          placeholder={placeholder}
          type={type}
          {...registerCallback()}
        />
        <div className={`outline ${error && 'error-outline'}`} />
      </div>
      {error && <span className="error-message">{error.message}</span>}
    </>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  registerCallback: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

Input.defaultProps = {
  error: null,
};

export default Input;
