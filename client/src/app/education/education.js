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
import Indicator from '../components/indicator/indicator';




class Education extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    toggleChecklist: PropTypes.func.isRequired,
  };

  render() {
    console.log(!this.props.EducationReducer.checklist4)
    return (
      <div className="container-fluid">
        <h1 className="text-center ">Edu-fucking-cation</h1>
        <form className="container-fluid" style={{ 'border': '1px solid black' }}>
          <div className="col-xs-12  d-flex justify-content-center">
            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-6" style={{ 'border': '1px solid black' }}>
              <div className="container-fluid" >

                {/* 
                <div
                  className={this.props.EducationReducer.checklist1 ? "checkedOff " : '' + "col-xs-12 checklistItem z-depth-2"}
                  id="education1"
                >
                  <div className="row">
                    <span className="ml-4 mr-2 d-flex align-self-center align-items-start">
                      <Indicator active={this.props.EducationReducer.checklist1} />
                    </span>

                  </div>
                </div> */}

                <ChecklistItem
                  text={
                    <span>
                      Read the
                    <a
                        href="https://www.polymath.network/resources/whitepaper"
                        target="_blank"
                        onClick={() => {
                          this.props.toggleChecklist({
                            ...this.props.EducationReducer,
                            checklist1: true
                          })
                        }}
                      >
                        Polymath Whitepaper
                    </a>
                    </span>
                  }
                  referenceBack={true}
                  reference={this.props.EducationReducer.checklist1}
                  EducationReducer={this.props.EducationReducer}
                  toggleChecklist={this.props.toggleChecklist}
                  checklistKey={'checklist1'}
                />

                <ChecklistItem
                  text={<div>Watch the Polymath instructional video, which explains ST20 and what you need to know to make one</div>}
                  referenceBack={this.props.EducationReducer.checklist1}
                  reference={this.props.EducationReducer.checklist2}
                  EducationReducer={this.props.EducationReducer}
                  toggleChecklist={this.props.toggleChecklist}
                  checklistKey={'checklist2'}
                />

                <ChecklistItem
                  text={'Get MetaMask'}
                  referenceBack={this.props.EducationReducer.checklist2}
                  reference={this.props.EducationReducer.checklist3}
                  EducationReducer={this.props.EducationReducer}
                  toggleChecklist={this.props.toggleChecklist}
                  checklistKey={'checklist3'}
                />

                <ChecklistItem
                  text={'Purchase POLY tokens'}
                  referenceBack={this.props.EducationReducer.checklist3}
                  reference={this.props.EducationReducer.checklist4}
                  EducationReducer={this.props.EducationReducer}
                  toggleChecklist={this.props.toggleChecklist}
                  checklistKey={'checklist4'}

                />

                {/* <div
                  className={this.props.EducationReducer.checklist2 ? "checkedOff " : '' + "col-xs-12 checklistItem z-depth-2"}
                  id="education2"
                  onClick={() => {
                    this.props.EducationReducer.checklist1 ? this.props.toggleChecklist({
                      ...this.props.EducationReducer,
                      checklist2: true,
                    })
                      : null
                  }}
                >
                  <div className="row">
                    <span className="ml-4 mr-2 d-flex align-self-center align-items-start">
                      <Indicator active={this.props.EducationReducer.checklist2} />
                    </span>
                    Watch the Polymath instructional video, which explains ST20 and what you need to know to make one
                  </div>
                </div>



                <div
                  className={this.props.EducationReducer.checklist3 ? "checkedOff " : '' + "col-xs-12 checklistItem z-depth-2"}
                  id="education3"
                  onClick={() => {
                    this.props.EducationReducer.checklist2 ? this.props.toggleChecklist({
                      ...this.props.EducationReducer,
                      checklist3: true,
                    })
                      : null
                  }}
                >
                  {/* <div className="row">
                    <span className="ml-4 mr-2 d-flex align-self-center align-items-start">
                      <Indicator active={this.props.EducationReducer.checklist3} />
                    </span>
                    Watch the Polymath instructional video, which explains ST20 and what you need to know to make one
                  </div>
                </div> */}


                {/* 
                <div
                  className="text-box z-depth-2 d-none"
                >
                  Metamask in a chrome extension that makes it very easy to use ethereum in the browser. The is the simpliest way to use an account with the Polymath Network to
                  make ST-20 tokens. However it is not required and if you know what you are doing you can use many other services. Click here to see how to get a metamask account. Once
                  you have it set up, we are going to ask you to sign a message in the browser to go forward. Then you can go to the next step.
                </div>



                <div
                  className={this.props.EducationReducer.checklist4 ? "checkedOff " : '' + "col-xs-12 checklistItem z-depth-2"}
                  id="education4"
                  onClick={() => {
                    this.props.EducationReducer.checklist3 ? this.props.toggleChecklist({
                      ...this.props.EducationReducer,
                      checklist4: true,
                    })
                      : null
                  }}
                >
                  <div className="row">
                    <span className="ml-4 mr-2 d-flex align-self-center align-items-start">
                      <Indicator active={this.props.EducationReducer.checklist4} />
                    </span>
                    Purchase POLY tokens
                  </div>
                </div> */}



              </div>
            </div>
          </div>
        </form>


        <span className="offset-lg-4 offset-md-3 offset-sm-3 offset-xs-2 d-flex">
          <span className="justify-content-center z-depth-1  col-xs-12">
            <FlatButton href="/" label="Back" className='' />
          </span>
          <span className="z-depth-1 offset-lg-2 offset-md-2 offset-sm-2">
            <FlatButton href="/tokenstudio" label="Continue" disabled={!this.props.EducationReducer.checklist4} />
          </span>
        </span>



      </div>
    );
  }
}

const mapStateToProps = ({ EducationReducer }) => ({ EducationReducer });


export default connect(mapStateToProps, { toggleChecklist })(Education);

