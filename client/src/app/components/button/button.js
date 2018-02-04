import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = props => (
  <div className="button-container d-flex justify-content-center align-items-center">
    <h6>{props.title}</h6>
  </div>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
