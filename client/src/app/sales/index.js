import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';

class SalesPage extends Component {

  componentWillMount = () => {
    console.log(this.props.match.params.id);
  };

  render() {
    return (
      <div className="container z-depth-3 mt-5 d-flex flex-column align-items-center">
        <h1>Receipt</h1>
        <div className="line-break" />
        <div className="row w-100">
          <div className="col d-flex justify-content-center">
            <h1>User </h1>
          </div>
          <div className="col d-flex justify-content-center">
            <h1>Column</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default SalesPage;
