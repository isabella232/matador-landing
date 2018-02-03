import React from 'react';

import './tile.css';

export const Tile = props => (
  <div className="row tile-container">
    <div className="column" />
    <div className="column"><img src={props.img} alt="" /></div>
    <div className="column">{props.title}</div>
  </div>
);
