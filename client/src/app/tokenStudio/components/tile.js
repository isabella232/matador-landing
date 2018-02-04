import React from 'react';

import Indicator from '../../components/indicator/indicator';
import './tile.css';

export const Tile = props => (
  <div className={props.active ? 'tile-container d-flex flex-column row focused z-depth-2' : 'tile-container d-flex flex-column row z-depth-1'}>
    <div className="column d-flex flex-column align-items-end m-2">
      <Indicator active={false} />
    </div>
    <div className="column tile-img d-flex justify-content-center">
      <img src={props.img} alt="" />
    </div>
    <div className="column d-flex justify-content-center">{props.title}</div>
  </div>
);
