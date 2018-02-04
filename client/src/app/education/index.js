import React, { Component } from 'react';
import './education.css';
import Button from '../components/button/button';
import { Link } from 'react-router-dom';

import '../stylesheets/_shadows.scss';


export default class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.checklists
    }

    // this.toggleCheck = this.toggleCheck.bind(this);
  }

  // toggleCheck() {
  //   const list = document.querySelector('ul');
  //   list.addEventListener('click', (ev) => {
  //     if (ev.target.tagName === 'LI') {
  //       ev.target.classList.toggle('checked');
  //     }
  //   }, false);
  // }

  continueButton() {
    if (/* listitem 1,2,3,4 are all checked) */true) {

    }
  }

  handleChecked(e) {
    switch (e.target.value) {
      case "cl1":
      console.log("uya:")
        this.setState({
          checklist1: true
        })
      case "cl2":
        this.setState({
          checklist2: true
        })
      case "cl3":
        this.setState({
          checklist3: true
        })
      case "cl4":
        this.setState({
          checklist4: true
        })
    }
  }

  checkComplete = (event) => {
    this.props.updateChecklist(this.state)
  }

  render() {
    // this.toggleCheck();
    return (
      <div>
        <h1 className="text-center">Edu-fucking-cation</h1>
        <form className="">
          <div className="col-xs-12  d-flex justify-content-center" >
            <span className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
              <ul className="checkmark">
                <li className={this.props.checklist1 ? "checkedOff " : '' + "col-xs-10 checklistItem z-depth-2"} id="education1">Read the <Link to="https://www.polymath.network/resources/whitepaper" onClick={this.handleChecked} value="cl1">Polymath Whitepaper</Link> </li>
                <li className={this.props.checklist2 ? "checkedOff " : '' + "col-xs-10 checklistItem z-depth-2"} id="education2" onClick={(e) => { this.handleChecked(e) }} value="cl2">Watch the Polymath instructional video, which explains ST20 and what you need to know to make one </li>
                <li className={this.props.checklist3 ? "checkedOff " : '' + "col-xs-10 checklistItem z-depth-2"} id="education3"  onClick={this.handleChecked} value="cl1">Get a metamask account </li>
                <div className="text-box z-depth-2 d-none">Metamask in a chrome extension that makes it very easy to use ethereum in the browser. The is the simpliest way to use an account with the Polymath Network to
                 make ST-20 tokens. However it is not required and if you know what you are doing you can use many other services. Click here to see how to get a metamask account. Once
                 you have it set up, we are going to ask you to sign a message in the browser to go forward. Then you can go to the next step.
                </div>
                <li className={this.props.checklist4 ? "checkedOff " : '' + "col-xs-10 checklistItem z-depth-2"} id="education4"  onClick={this.handleChecked} value="cl1">Purchase POLY tokens </li>


              </ul>
              {/* <ul id="myUL">
                <li>Hit the gym</li>
                <li className="checked">Pay bills</li>
                <li>Meet George</li>
                <li>Buy eggs</li>
                <li>Read a book</li>
                <li>Organize office</li>
              </ul> */}
              {/* <div className="roundedTwo">
                <input type="checkbox" value="None" id="roundedTwo" name="check" checked />
                <label htmlFor="roundedTwo" />
              </div> */}
            </span>
          </div>
          <span className="col-xs-12 d-flex justify-content-center">
            <span className="justify-content-right">
              <div className="z-depth-1">
                <Link to="/"><Button title="Back" /></Link>
              </div>
            </span>
            <div className="col-xs-1" >SPACE</div>
            <div className="z-depth-1">
              <Link to="/tokenstudio"><Button title="Continue" /></Link>
            </div>
          </span>
        </form>
      </div>
    );
  }
}
// col-xs-offset-1
