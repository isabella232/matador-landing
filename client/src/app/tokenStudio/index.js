import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import ContactIcon from 'material-ui/svg-icons/social/person';
import GroupIcon from 'material-ui/svg-icons/social/group';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';
import GavelIcon from 'material-ui/svg-icons/action/gavel';
import { Link } from 'react-router-dom';

import ContactInfoForm from './contactDetails';
import CompanyInfo from './company';
import St20Form from './st20';
import StoForm from './sto';
import { createContact, createCompany, createST20, createSTO, toggleForm } from '../../api/tokenStudio';
import Tile from './components/tile';
import './style.css';

const IconStyle = { width: '1em', height: '1em' };

class TokenStudio extends Component {

	static propTypes = {
	  createContact: PropTypes.func.isRequired,
	  createCompany: PropTypes.func.isRequired,
      createST20: PropTypes.func.isRequired,
	  createSTO: PropTypes.func.isRequired,
	};

  render() {
    const {
      openState, contactComplete, companyComplete, st20Complete, stoComplete,
    } = this.props.TokenStudio;
		const { form } = this.props;
    return (
      <div className="mt-5 main-container d-flex flex-column align-items-center">
        <h1>Design Your Token</h1>
        <div className="main-tile-container mt-5 row">
          <div
            className="col-lg-3 col-md-12 col-sm-12 d-flex justify-content-center"
            onClick={() => this.props.toggleForm({ ...openState, contact: true })}
          >
            <Tile
              focused={!contactComplete & !companyComplete && !st20Complete && !stoComplete}
              completed={contactComplete}
              icon={<ContactIcon style={IconStyle} />}
              title="Contact Information"
            />
          </div>
          <div
            className="col-lg-3 col-md-12 col-sm-12 d-flex justify-content-center"
            onClick={() => contactComplete ? this.props.toggleForm({ ...openState, company: true }) : null}
          >
            <Tile
              focused={contactComplete && !companyComplete && !st20Complete && !stoComplete}
              completed={companyComplete}
              icon={<GroupIcon style={IconStyle} />}
              title="Company Details"
            />
          </div>
          <div
            className="col-lg-3 col-md-12 col-sm-12 d-flex justify-content-center"
            onClick={() => companyComplete ? this.props.toggleForm({ ...openState, st20: true }) : null}
          >
            <Tile
              focused={companyComplete && !st20Complete && !stoComplete}
              completed={st20Complete}
              icon={<AssignmentIcon style={IconStyle} />}
              title="ST-20"
            />
          </div>
          <div
            className="col-lg-3 col-md-12 col-sm-12 d-flex justify-content-center"
            onClick={() => st20Complete ? this.props.toggleForm({ ...openState, sto: true }) : null}
          >
            <Tile
              focused={companyComplete && st20Complete && !stoComplete}
              completed={stoComplete}
              icon={<GavelIcon style={IconStyle} />}
              title="STO"
            />
          </div>
        </div>
				<br />
				<Link to={{ pathname: '/sales'}}>
	          <RaisedButton
	            className="mt-4"
	            label="Create Token"
	            primary
	            disabled={!companyComplete || !st20Complete || !stoComplete}
	          />
				</Link>
        <div className="mt-2">
          <h6>Back</h6>
        </div>

        <ContactInfoForm
          open={openState.contact}
          close={() => this.props.toggleForm({ ...openState, contact: false })}
          onSubmit={() => this.props.createContact()}
        />
        <CompanyInfo
          open={openState.company}
          close={() => this.props.toggleForm({ ...openState, company: false })}
          onSubmit={() => {
						this.props.createCompany({
							...form.companyInfoForm.values,
							...form.contactInfoForm.values})
					}}
        />
        <St20Form
          open={openState.st20}
					close={() => this.props.toggleForm({ ...openState, st20: false })}
          onSubmit={() => this.props.createST20()}
        />
        <StoForm
          open={openState.sto}
					close={() => this.props.toggleForm({ ...openState, sto: false })}
          onSubmit={() => {
						this.props.createSTO({
							...form.st20Form.values,
							...form.stoForm.values
						})
					}}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ form, TokenStudio }) => ({ TokenStudio, form });

export default connect(mapStateToProps, {
  createContact, createCompany, createST20, createSTO, toggleForm,
})(TokenStudio);
