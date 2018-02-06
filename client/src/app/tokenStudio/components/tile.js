import React from 'react';
import PropTypes from 'prop-types';

import Indicator from '../../components/indicator/indicator';
import './tile.css';

const Tile = props => (
  <div className={props.focused ? 'row tile-container d-flex flex-column justify-content-around row focused z-depth-1' : 'row tile-container d-flex flex-column justify-content-around row z-depth-1'}>
    <div className="column mt-2 mr-2 d-flex flex-column align-items-end">
      <Indicator active={props.completed} />
    </div>
    <div className="column tile-img d-flex justify-content-center">
      {props.icon}
    </div>
    <div className="column d-flex justify-content-center">{props.title}</div>
  </div>
);

Tile.propTypes = {
  focused: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default Tile;
