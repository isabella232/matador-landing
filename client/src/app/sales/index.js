import React, { Component } from 'react';
import { connect } from 'react-redux';

class SalesPage extends Component {

  componentWillMount = () => {
    console.log(this.props.match.params.id);
  };

  render() {
    return (
      <h1>{this.props.match.params.id}</h1>
    )
  }
}

export default SalesPage;
