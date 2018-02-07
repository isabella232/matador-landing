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

    this.state = {
      visibility1: false,
      visibility2: false,
      visibility3: false,
      visibility4: false,
      visibility5: false,
    }
  }

  static propTypes = {
    toggleChecklist: PropTypes.func.isRequired,
  };

  render() {
    console.log(!this.props.EducationReducer.checklist4)
    return (
      <div className="container-fluid">
        <h1 className="text-center ">Education</h1>

        <form className="container-fluid" >
          <div className="col-xs-12  d-flex justify-content-center">
            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-6" >
              <div className="container-fluid" >


                <div>
                  <div onClick={() => { this.setState({ visibility1: !this.state.visibility1 }) }}>
                    <ChecklistItem
                      text={
                        <span>
                          Read the <a href="https://www.polymath.network/resources/whitepaper" target="_blank">Polymath Whitepaper</a>
                        </span>
                      }
                      referenceBack={true}
                      reference={this.props.EducationReducer.checklist1}
                      EducationReducer={this.props.EducationReducer}
                      toggleChecklist={this.props.toggleChecklist}
                      checklistKey={'checklist1'}
                    />
                  </div>
                  {this.state.visibility1 ?
                    <div className="dropdown">
                      Now this is a textbox where we are storing information
                      <FlatButton onClick={() => { this.setState({ visibility1: !this.state.visibility1 }); }} label="Next" className='' />
                    </div>
                    : null}
                </div>

                <div>
                  <div onClick={() => { this.setState({ visibility2: !this.state.visibility2 }) }}>
                    <ChecklistItem
                      text={
                        <div>
                          Watch the Polymath instructional video, which explains ST20 and what you need to know to make one
                  </div>
                      }
                      referenceBack={this.props.EducationReducer.checklist1}
                      reference={this.props.EducationReducer.checklist2}
                      EducationReducer={this.props.EducationReducer}
                      toggleChecklist={this.props.toggleChecklist}
                      checklistKey={'checklist2'}
                    />
                  </div>
                  {this.state.visibility2 ?
                    <div className="dropdown">
                      Now this is a textbox where we are storing information
                      <FlatButton onClick={() => { this.setState({ visibility2: !this.state.visibility2 }); }} label="Next" className='' />
                    </div>
                    : null}
                </div>

                <div>
                  <div onClick={() => { this.setState({ visibility3: !this.state.visibility3 }) }}>
                    <ChecklistItem
                      text={'Get MetaMask'}
                      referenceBack={this.props.EducationReducer.checklist2}
                      reference={this.props.EducationReducer.checklist3}
                      EducationReducer={this.props.EducationReducer}
                      toggleChecklist={this.props.toggleChecklist}
                      checklistKey={'checklist3'}
                    />
                  </div>
                  {this.state.visibility3 ?
                    <div className="dropdown">
                      Now this is a textbox where we are storing information
                      <FlatButton onClick={() => { this.setState({ visibility3: !this.state.visibility3 }); }} label="Next" className='' />
                    </div>
                    : null}
                </div>

                <div>
                  <div onClick={() => { this.setState({ visibility4: !this.state.visibility4 }) }}>
                    <ChecklistItem
                      text={'Purchase POLY tokens'}
                      referenceBack={this.props.EducationReducer.checklist3}
                      reference={this.props.EducationReducer.checklist4}
                      EducationReducer={this.props.EducationReducer}
                      toggleChecklist={this.props.toggleChecklist}
                      checklistKey={'checklist4'}
                    />
                  </div>
                  {this.state.visibility4 ?
                    <div className="dropdown">
                      Now this is a textbox where we are storing information
                      <FlatButton onClick={() => { this.setState({ visibility4: !this.state.visibility4 }); }} label="Next" className='' />
                    </div>
                    : null}
                </div>

                <div>
                  <div onClick={() => { this.setState({ visibility5: !this.state.visibility5 }) }}>
                    <ChecklistItem
                      text={'Get MetaMask'}
                      referenceBack={this.props.EducationReducer.checklist4}
                      reference={this.props.EducationReducer.checklist5}
                      EducationReducer={this.props.EducationReducer}
                      toggleChecklist={this.props.toggleChecklist}
                      checklistKey={'checklist5'}
                    />
                  </div>
                  {this.state.visibility5 ?
                    <div className="dropdown">
                      Now this is a textbox where we are storing information
                      <FlatButton onClick={() => { this.setState({ visibility5: !this.state.visibility5 }); }} label="Next" className='' />
                    </div>
                    : null}
                </div>

              </div>
            </div>
          </div>
        </form>


        <span className=" d-flex justify-content-center" >
          <span className=" z-depth-1" >
            <FlatButton href="/" label="Back" className='' />
          </span>
          <span className="z-depth-1 offset-lg-2 offset-md-2 offset-sm-2 offset-xs-2" >
            <FlatButton href="/tokenstudio" label="Continue" disabled={!this.props.EducationReducer.checklist5} />
          </span>
        </span>



      </div>
    );
  }
}

const mapStateToProps = ({ EducationReducer }) => ({ EducationReducer });


export default connect(mapStateToProps, { toggleChecklist })(Education);

