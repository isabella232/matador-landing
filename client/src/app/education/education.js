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
        <div className="text-center ">Please click on each info box below to get educated on the Matador Process, and checkoff every list item by pressing the next button.</div><br />
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
                    <div >
                      <a href='https://www.polymath.network/' target='_blank'>Polymath</a> is a blockchain platform built on ethereum that makes it easy for companies to “tokenize” their assets. Right now, launching a security token is a really difficult process. Issuers need to make sure they have legitimate investors on board. They need to know who their investors are, they need to make sure they’re verified, and they need to make sure they’re trading to the right people. <br /><br /> That verification process can be slow, and incredibly expensive. Polymath bakes KYC <strong>directly into</strong> the tokens. This way, the token “knows” who’s trading it. It “knows” where it’s going. <br /><br /> There’s no need to “verify” investors because the token regulates itself. It automatically restricts token holders from trading to anyone who’s not verified, which saves issuers a lot of time, money, and headaches. <br /><br /> Matador is a seperate organization that is providing end to end services to companies that want to build on top of the Polymath platform. Matador can take a company interested in creating a Security Token, and guide them through each step of the process of using the Polymath platform.
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
                      An STO is a Security Token Offering that is created to create a legally compliant token on the Polymath Network. In the crypto world, people have the option to buy utility tokens or security tokens. <br /><br /> Utility tokens aren't “investments”, in the traditional sense. They are a way for buyers to access a company’s product in the future. The tokens only purpose is to access the network, and be used for functionality. It does not give the buyer any ownership of the company. <br /><br /> Security tokens are tokens that are backed by real assets. Companies can turn their shares into tokens, and issue them to investors through the blockchain to raise money. Investors could buy these tokens to get shares in the company, and therefore own a piece of the company. <br/><br/> Matador is here to help guide you through the process of creating a security token. The Matador website was built out to have a streamlined wizard that interacts with the Polymath network. This wizard can create a real Security Token in under 10 minutes, if all the necessary information has already been pre-determined. 
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
                      What type of user is the Matador Wizard targeted for? 
                    </div>
                  }
                  dropdownText={
                    <div>
                      This wizard is for security token issuers who want to create their tokens through the Polymath platform. As you’ll soon find out, the easiest,fastest, most cost-effective way to launch a security token is by going through the Polymath platform.  <br /><br /> In this wizard, we’ll take you through the process of designing your token, adding features to it, and creating it from scratch in a matter of a few clicks — even if you’ve never written a line of code in your life. It's design is simple, and anyone at a company should be able to create a Security token. 
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
                      What will you need to create your Security token
                    </div>
                  }
                  dropdownText={
                    <div>
                      You can easily go through the Matador Wizard and create a token without the full information, and you can even create a test token. This allows you to understand how simple it is to do. When you are ready to create a real Security Token investors can buy, you will need to provide the following information:
                      <ul>
                        <li>Company information - Company name, address, phone number, country and province/state</li>
                        <li>Company contract information - Name of person to contact and their email </li>
                        <li>Security Token Offering information - How many tokens you want to issue, how much you want to raise and for how long, the token ticker symbol, the divisibility of the tokens,</li>
                      </ul>
                      Once all of the information is gathered, you can go through the wizard in a matter of minutes. There are a few technical things you will need to learn in order to use the Polymath network. This includes getting an ethereum addess, and obtaining POLY tokens in that ethereum address so you can access the network. This is explained further in the next task. 
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
                      The Polymath network is built on top of the ethereum network, which means you will need an ethereum account. Inside of that ethereum account , you will need to have POLY tokens to access the network. <br /><br /> The easiest way to get an etherum account is through the Google Chrome extension Metamask. They have an <a href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn'>excellent video describing</a> how to install Metamask and create an ethereum account. Once you go through that you will need to purchase some ether. <br /><br /> There are a lot of ways to buy ether, which is the native token you need to access the ethereum network. Depending on your country, you should pick an exchange that is very popular and has a good reputation. The best known one is <a href='https://www.coinbase.com/join'>Coinbase</a> which is based in the US. We recommend using them if they service your country. <br/><br/> You should purchase enough ethereum so that you can buy 100,000 POLY, and then a little bit extra for transaction fees. After that you will have to send your ether you purchased to your metamask account. (This will need to be changed if the 100,000 POLY changes)
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
                        <li>Go to an exchange such as <a href='https://etherdelta.com/#0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec-ETH'>Ether Delta</a> (This probably should never be our solution, we need to wait till a better exchange offers poly)</li>
                        <li>Trade ETH for POLY</li>
                        <li>Withdraw to your account</li>
                        <li>Come to wizard and go through the steps to build a token</li>
                      </ul>
                       If you now have 100,000 POLY you can create your security token and launch it on the Polymath Network. If you just want to see how the process works, you can click continue below and go through the process, without having to yet purchase any ether or poly. 
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
          <span className=" z-depth-1 buttonTransition" >
            <FlatButton href="/" label="Back" className='' />
          </span>
          <span className="z-depth-1 offset-lg-2 offset-md-2 offset-sm-2 offset-xs-2 buttonTransition" >
            <Link to='/tokenstudio' className={this.props.EducationReducer.checklist6 ? "" :'disabled-link'}><FlatButton label="Continue" /></Link>
          </span>
        </span>



      </div>
    );
  }
}

const mapStateToProps = ({ EducationReducer }) => ({ EducationReducer });


export default connect(mapStateToProps, { toggleChecklist })(Education);

