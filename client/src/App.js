import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

import './App.css';

class App extends Component {
  render() {
    const { route } = this.props;

    return (
      <div className="App">
        <h1>Matafuckingdor</h1>
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

export default App;
