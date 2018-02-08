import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Indicator from '../components/indicator/indicator';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


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
          <div className={this.props.referenceBack && !this.props.reference ? classString : `checkedOff ${classString}`}>
            <div className="ml-2 mr-2">
              <Indicator active={this.props.reference} />
            </div>
            <div>
              {this.props.text}
            </div>
          </div>
          <div className={this.state.visibility ? 'dropdown z-depth-2 d-block pl-2' : 'dropdown z-depth-2 d-block pl-2 dropdownHide'}>
            {this.props.dropdownText}
            <div className="d-flex flex-row-reverse ">
              <RaisedButton primary onClick={() => { this.props.referenceBack ? this.setVisibilityAndMarkComplete() : null; }} label="Next" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
