import React from 'react';
import PropTypes from 'prop-types';
import CheckIcon from 'material-ui/svg-icons/action/check-circle';

import './indicator.css';

const IconStyle = { width: '24px', height: '24px' };

const Indicator = props => (
  <div className={props.active ? ['indicator-container active'] : 'indicator-container'}>
    <CheckIcon
      style={IconStyle}
      color="#43A047"
    />
  </div>
);

Indicator.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Indicator;
