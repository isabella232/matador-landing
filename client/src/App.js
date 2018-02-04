import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

import './App.css';

class App extends Component {
  render() {
    const { route } = this.props;

    return (
      <div className="App">
        <h1>Matafuckingdor</h1>
        <div>
          {renderRoutes(route.routes)}
        </div>
      </div>
    );
  }
}

export default App;
