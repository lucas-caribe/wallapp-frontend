import React from 'react';
import { VscError } from 'react-icons/vsc';
import PropTypes from 'prop-types';

import './style.css';

function Input({ placeholder, type, registerCallback, error, icon }) {
  return (
    <div className="input-error-container">
      <div
        className={`input-container ${error && 'error-outline'}`}
        data-error={!!error}
      >
        {icon && icon()}
        <input
          className="form-input"
          placeholder={placeholder}
          type={type}
          {...registerCallback()}
        />
        {error && <VscError className="error-icon" />}
      </div>
      {error && <span className="error-message">{error.message}</span>}
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  registerCallback: PropTypes.func.isRequired,
  icon: PropTypes.func,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

Input.defaultProps = {
  error: null,
  icon: null,
};

export default Input;
