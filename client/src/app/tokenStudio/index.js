import React, { Component } from 'react';

import { Tile } from './components/tile';

class TokenStudio extends Component {
  render() {
    return (
      <div className="container">
        <h1>Design Your Token</h1>
        <Tile
          img="./img/user.svg"
          title="Personal"
        />
      </div>
    );
  }
}

export default TokenStudio;
