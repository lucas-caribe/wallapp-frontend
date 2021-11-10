import React from 'react';
import PropTypes from 'prop-types';

function Input({ placeholder, type, value, handleChange }) {
  return (
    <input
      className="form-input"
      placeholder={placeholder}
      type={type}
      onChange={handleChange}
      value={value}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
