import React, { Component } from 'react';

export default class Education extends Component {
  render() {
    return (
      <div>
        <h1>Edu-fucking-cation</h1>
        <form>
          <li className="col-xs-12" >
            <span className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
              <div className="col-xs-2">Checkmark</div>
              <div className="col-xs-10">Description</div>
            </span>
          </li>
          <span className="col-xs-12">
            <button type="submit" value="Submit" className="btn btn-warning">Back</button>
            <button type="submit" value="Submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}
