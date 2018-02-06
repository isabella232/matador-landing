import React from 'react';
import PropTypes from 'prop-types';

import Indicator from '../../components/indicator/indicator';
import './tile.css';

const Tile = props => (
  <div className={props.focused ? 'row tile-container d-flex flex-column row focused z-depth-3' : 'row tile-container d-flex flex-column row z-depth-2'}>
    <div className="column mt-2 mr-2 d-flex flex-column align-items-end">
      <Indicator active={props.completed} />
    </div>
    <div className="column tile-img d-flex justify-content-center">
      <img src={props.img} alt="" />
    </div>
    <div className="column d-flex justify-content-center">{props.title}</div>
  </div>
);

Tile.propTypes = {
  focused: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Tile;
