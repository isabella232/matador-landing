import React from 'react';
import PropTypes from 'prop-types';
import CheckIcon from 'material-ui/svg-icons/action/check-circle';

import './indicator.css';

const IconStyle = { width: '24px', height: '24px' };

const Indicator = props => (
  <div>
    { props.active ?
      <CheckIcon
        style={IconStyle}
        color="#43A047"
      />
      :
      null
    }
  </div>
);

Indicator.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Indicator;
