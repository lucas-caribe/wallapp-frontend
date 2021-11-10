import React from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef(({ placeholder, type, onChange }, ref) => (
  <input
    className="form-input"
    placeholder={placeholder}
    type={type}
    ref={ref}
    onChange={onChange}
  />
));

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
