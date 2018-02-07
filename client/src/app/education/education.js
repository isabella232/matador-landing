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
    return (
      <div className="container-fluid">
        <h1 className="text-center ">Education</h1>
        <div className="text-center ">Please click on each info box below to get educated on the Matador Process</div><br />
        <form className="container-fluid" >
          <div className="col-xs-12  d-flex justify-content-center">
            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-6" >
              <div className="container-fluid" >

                <ChecklistItem
                  text={
                    <div>
                      {/* Read the <a href="https://www.polymath.network/resources/whitepaper" target="_blank">Polymath Whitepaper</a> */}
                      What are Polymath and Matador and how do they differ?
                        </div>
                  }
                  referenceBack={true}
                  dropdownText={
                    <div>
                      Polymath makes it easy for companies to “tokenize” their assets. Right now, launching a security token is a really difficult process.<br /><br /> Issuers need to make sure they have legitimate investors on board. They need to know who their investors are. They need to make sure they’re verified. They need to make sure they’re trading to the right people. <br /><br /> That verification process can be slow, and incredibly expensive. Polymath bakes KYC *directly into* the tokens. This way, the token “knows” who’s trading it. It “knows” where it’s going. <br /><br /> There’s no need to “verify” investors because the token regulates itself. It automatically restricts token holders from trading to anyone who’s not verified -- saving issuers a lot of time, money, and headaches. <br /><br /> Matador is ................
                    </div>
                  }
                  reference={this.props.EducationReducer.checklist1}
                  EducationReducer={this.props.EducationReducer}
                  toggleChecklist={this.props.toggleChecklist}
                  checklistKey={'checklist1'}
                />

                <ChecklistItem
                  text={
                    <div>
                      What is an STO, and why should you launch one with Matador?
                      </div>
                  }
                  dropdownText={
                    <div>
                      An STO is a Security Token Offering that is created to build a legally compliant token on the Polymath Network. In the crypto world, people have the option to buy either utility tokens or security tokens. <br /><br /> Utility tokens arent “investments”, in the traditional sense. They are a way for buyers to access a company’s product in the future — almost like retail stores accepting pre-orders for certain products. <br /><br /> Security tokens are tokens that are backed by real assets. Companies can turn their shares into tokens, and issue them to investors through the blockchain to raise money. Investors could buy these tokens to get shares in the company.'
                    </div>
                  }
                  referenceBack={this.props.EducationReducer.checklist1}
                  reference={this.props.EducationReducer.checklist2}
                  EducationReducer={this.props.EducationReducer}
                  toggleChecklist={this.props.toggleChecklist}
                  checklistKey={'checklist2'}
                />



                <ChecklistItem
                  text={
                    <div>
                      Who is this wizard for?
                    </div>
                  }
                  dropdownText={
                    <div>
                      This wizard is for security token issuers who want to create their tokens through the Polymath platform. <br /><br /> As you’ll soon find out, the easiest,fastest, most cost-effective way to launch a security token is by going through the Polymath platform.  <br /><br /> In this wizard, we’ll take you through the process of designing your token, adding features to it, and creating it from scratch in a matter of a few clicks — even if you’ve never written a line of code in your life.
                    </div>
                  } 
                  referenceBack={this.props.EducationReducer.checklist2}
                  reference={this.props.EducationReducer.checklist3}
                  EducationReducer={this.props.EducationReducer}
                  toggleChecklist={this.props.toggleChecklist}
                  checklistKey={'checklist3'}
                />

                <ChecklistItem
                  text={
                    <div>
                      What is the process of creating an STO going to be like
                    </div>
                  }
                  dropdownText={
                    <div>
                      You will need the following information with you:
                      <ul>
                        <li>Basic company information</li>
                        <li>Basic personal information</li>
                        <li>Basic offering information</li>
                      </ul>
                      Then you will go through the wizard and ...........
                    </div>
                  } 
                  referenceBack={this.props.EducationReducer.checklist3}
                  reference={this.props.EducationReducer.checklist4}
                  EducationReducer={this.props.EducationReducer}
                  toggleChecklist={this.props.toggleChecklist}
                  checklistKey={'checklist4'}
                />

                <ChecklistItem
                  text={
                    <div>
                      What is an ethereum wallet and how can you set one up?
                    </div>
                  }
                  dropdownText={
                    <div>
                      The Polymath network is built on top of the ethereum network, which means you will need an ethereum account. Inside of that ethereum account , you will need to have POLY tokens to access the network. <br /><br /> The easiest way to get an etherum account is through the Google Chrome extension Metamask. <br /><br /> Here is how you go about doing that.............
                    </div>
                  }
                  referenceBack={this.props.EducationReducer.checklist4}
                  reference={this.props.EducationReducer.checklist5}
                  EducationReducer={this.props.EducationReducer}
                  toggleChecklist={this.props.toggleChecklist}
                  checklistKey={'checklist5'}
                />

                <ChecklistItem
                  text={
                    <div>
                      How do you purchase and use POLY tokens to access the Polymath Platform?
                    </div>
                  }
                  dropdownText={
                    <div>
                      Once your etheruem account is set up, you will have to purchase POLY tokens to create a Security Token on the Polymath Network. These tokens give you access to the Polymath Network, which automatically makes you a leagally compliant Security Token. You, being the owner of the ethereum account that sent the POLY to the Polymath Network will be the owner of the Security Token. <br/><br/> Here are the steps to obtaining POLY:
                      <ul>
                        <li>Go to an exchange such as XXXX</li>
                        <li>Trade ETH for POLY</li>
                        <li>Withdraw to your account</li>
                        <li>Come to wizard and go through the steps to build a token</li>
                      </ul>
                    </div>
                  } 
                  referenceBack={this.props.EducationReducer.checklist5}
                  reference={this.props.EducationReducer.checklist6}
                  EducationReducer={this.props.EducationReducer}
                  toggleChecklist={this.props.toggleChecklist}
                  checklistKey={'checklist6'}
                />

              </div>
            </div>
          </div>
        </form>


        <span className=" d-flex justify-content-center" >
          <span className=" z-depth-1" >
            <FlatButton href="/" label="Back" className='' />
          </span>
          <span className="z-depth-1 offset-lg-2 offset-md-2 offset-sm-2 offset-xs-2" >
            <FlatButton href="/tokenstudio" label="Continue" disabled={!this.props.EducationReducer.checklist6} />
          </span>
        </span>



      </div>
    );
  }
}

const mapStateToProps = ({ EducationReducer }) => ({ EducationReducer });


export default connect(mapStateToProps, { toggleChecklist })(Education);

