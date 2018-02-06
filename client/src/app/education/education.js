import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import ChecklistItem from './checklistItem';
import { toggleChecklist } from '../../api/education'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../stylesheets/_shadows.scss';
import './education.css';


class Education extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    toggleChecklist: PropTypes.func.isRequired,
  };

  render() {
    const oneChecked = {checklist1: true};
    const twoChecked = {checklist2: true};
    const threeChecked = {checklist3: true};
    const fourChecked = {checklist4: true};

    return (
      <div>
        <h1 className="text-center">Edu-fucking-cation</h1>
        <form className="">
          <div className="col-xs-12  d-flex justify-content-center" >
            <span className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
              <ul className="checkmark">
                <li className={this.props.EducationReducer.checklist1 ? "checkedOff " : '' + "col-xs-10 checklistItem z-depth-2"} id="education1">Read the
                  <a href="https://www.polymath.network/resources/whitepaper" target="_blank" onClick={() => { this.props.toggleChecklist(oneChecked) }}>Polymath Whitepaper</a>
                </li>
                <li className={this.props.EducationReducer.checklist2 ? "checkedOff " : '' + "col-xs-10 checklistItem z-depth-2"} id="education2" onClick={() => { this.props.toggleChecklist(twoChecked) }}>Watch the Polymath instructional video, which explains ST20 and what you need to know to make one </li>
                <li className={this.props.EducationReducer.checklist3 ? "checkedOff " : '' + "col-xs-10 checklistItem z-depth-2"} id="education3" onClick={() => { this.props.toggleChecklist(threeChecked) }}>Get a metamask account </li>
                <div className="text-box z-depth-2 d-none">Metamask in a chrome extension that makes it very easy to use ethereum in the browser. The is the simpliest way to use an account with the Polymath Network to
                 make ST-20 tokens. However it is not required and if you know what you are doing you can use many other services. Click here to see how to get a metamask account. Once
                 you have it set up, we are going to ask you to sign a message in the browser to go forward. Then you can go to the next step.
                </div>
                <li className={this.props.EducationReducer.checklist4 ? "checkedOff " : '' + "col-xs-10 checklistItem z-depth-2"} id="education4" onClick={() => { this.props.toggleChecklist(fourChecked) }}>Purchase POLY tokens </li>
              </ul>
            </span>
          </div>
          <span className="col-xs-12 d-flex justify-content-center">
            <span className="justify-content-right">
              <div className="z-depth-1">
                <Link to="/"><FlatButton label="Back" /></Link>
              </div>
            </span>
            <div className="col-xs-1" >SPACE</div>
            <div className="z-depth-1">
              <Link to="/tokenstudio"><RaisedButton label="Continue" /></Link>
            </div>
          </span>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ EducationReducer }) => ({ EducationReducer });

export default connect(mapStateToProps, { toggleChecklist })(Education);

