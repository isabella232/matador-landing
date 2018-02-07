import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Indicator from '../components/indicator/indicator';
import FlatButton from 'material-ui/FlatButton';

export default class ChecklistItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false,
    };
  }

  setVisibilityAndMarkComplete() {
    this.props.toggleChecklist({
      ...this.props.EducationReducer,
      [this.props.checklistKey]: true,
    });
    this.setState({ visibility: !this.state.visibility });
  }
  render() {
    const classString = 'checklistItem z-depth-2 d-flex align-items-center ';


    return (
      <div>
        <div onClick={() => { this.setState({ visibility: !this.state.visibility }); }}>
          <div
            className={this.props.reference ? `checkedOff ${classString}` : classString}
          >
            <div className="ml-2 mr-2">
              <Indicator active={this.props.reference} />
            </div>
            <div className="">
              {this.props.text}
            </div>
          </div>
          {this.state.visibility ?
            <div className="dropdown">
              {this.props.dropdownText}
              {/* <FlatButton onClick={() => { this.setState({ visibility: !this.state.visibility }); }} label="Next" className="" /> */}
              <FlatButton onClick={() => { this.props.referenceBack ? this.setVisibilityAndMarkComplete() : null; }} label="Next" />
            </div>
                        : null}
        </div>
      </div>
    );
  }
}
