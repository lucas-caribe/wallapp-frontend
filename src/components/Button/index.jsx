import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Button({ children }) {
  return (
    <button className="form-button" type="submit">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
