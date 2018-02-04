import React from 'react';
import PropTypes from 'prop-types';

import './indicator.css';

const Indicator = props => (
  <div className={props.active ? ['indicator-container active'] : 'indicator-container'} />
);

Indicator.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Indicator;
