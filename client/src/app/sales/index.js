import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReceiptQuadrant from './components/receiptQuadrant'


class SalesPage extends Component {

  componentWillMount = () => {
    console.log(this.props.match.params.id);
  };
  render() {
    const fakeCompany = {
      id: 1,
      repName: "Dave",
      repTitle: "Manager",
      repEmail: "dave@polymath.network",
      repPhone: 6473339999,
      companyName: "Pokymath",
      entityType: "Corp",
      address: "100 Street Road",
      website: "www.pokymath.com"
    }

    const fakeToken = {
      ticker: "POKY",
      supply: 100000,
      owner: "0xb794F5eA0ba39494cE839613fffBA74279579268",
      jurisdictionCountry: "US", //i think there should be two juridctionCoutnry: and jursidictionState: in the db 
      jurisdictionState: "CA",
      offeringType: "Security",
      cap: 100000,
      quorum: 75,
      startDate: "July 5th 2018",
      endDate: "August 5th 2018",
      lockup: "One Year" //acutally not in the dynamo db yet
    }


    return (


      <div className="container z-depth-3 mt-5 pt-5 pb-5 d-flex flex-column align-items-center">
        <h1>Receipt</h1>
        <div className="line-break" />
        <div className="row w-100">

          <div className="col d-flex justify-content-center">
            <ReceiptQuadrant
              title='Contact Info'
              row1={{ Name: fakeCompany.repName }}
              row2={{ Title: fakeCompany.repTitle }}
              row3={{ Email: fakeCompany.repEmail }}
              row4={{ Phone: fakeCompany.repPhone }}
              row5={{ empty: "empty" }}
              row6={{ empty: "empty" }}
            />
          </div>

          <div className="col d-flex justify-content-center">
            <ReceiptQuadrant
              title='ST20 Info'
              infoObject={fakeToken}
              row1={{ Ticker: fakeToken.ticker }}
              row2={{ Supply: fakeToken.supply }}
              row3={{ Owner: fakeToken.owner }}
              row4={{ Country: fakeToken.jurisdictionCountry }}
              row5={{ State: fakeToken.jurisdictionState }}
              row6={{ empty: "empty" }}
            />
          </div>

          <div className="col d-flex justify-content-center">
            <ReceiptQuadrant
              title='Company Info'
              row1={{ Name: fakeCompany.companyName }}
              row2={{ Type: fakeCompany.entityType }}
              row3={{ Address: fakeCompany.address }}
              row4={{ Website: fakeCompany.website }}
              row5={{ empty: "empty" }}
              row6={{ empty: "empty" }}
            />
          </div>

          <div className="col d-flex justify-content-center">
            <ReceiptQuadrant
              title='STO Info'
              row1={{ OfferingType: fakeToken.offeringType }}
              row2={{ Cap: fakeToken.cap }}
              row3={{ Start: fakeToken.startDate }}
              row4={{ End: fakeToken.endDate }}
              row5={{ Quorum: fakeToken.quorum }}
              row6={{ Lockup: fakeToken.lockup }}
            />
          </div>
        </div>
        <br/><br/>
        <div className=" d-flex flex-row" >
          <span className=" z-depth-1 buttonTransition" >
            <FlatButton secondary href="/tokenstudio" label="Go Back to Edit" className='' />
          </span>
          <span/>
          <span className="z-depth-1 buttonTransition" >
            <FlatButton primary label="Pay POLY" disabled={true} />
          </span>
        </div>

      </div>
    );
  }
}

//const mapStateToProps = ({  }) => ({  });
//export default connect(mapStateToProps, {  })(SalesPage);
export default SalesPage;
