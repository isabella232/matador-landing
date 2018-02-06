import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';

import './App.css';

class App extends Component {
  static propTypes = {
    route: PropTypes.object.isRequired,
  }

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
