import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import CompanyInfo from './company';
import St20Form from './st20';
import StoForm from './sto';
import { createCompany, createST20, createSTO, toggleCompanyForm, toggleSt20Form, toggleStoForm } from "../../api/tokenStudio";
import Tile from './components/tile';
import './style.css';

class TokenStudio extends Component {
	state = {
		companyOpen: false,
		companyComplete: false,
		st20Open: false,
		st20Complete: false,
		stoOpen: false,
		stoComplete: false,
	};

	render() {
		const  { companyOpen, st20Open, stoOpen, companyComplete, st20Complete, stoComplete } = this.props.TokenStudio;
		return (
			<div className="mt-5 main-container d-flex flex-column align-items-center">
				<h1>Design Your Token</h1>
				<div className="main-tile-container mt-5 row">
					<div
						className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center"
						onClick={() => this.props.toggleCompanyForm(true)}
					>
						<Tile
							focused={!companyComplete && !st20Complete && !stoComplete}
							completed={companyComplete}
							link="/"
							img="./img/user.png"
							title="Company Details"
						/>
					</div>
					<div
						className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center"
						onClick={() => this.props.toggleSt20Form(true)}
					>
						<Tile
							focused={companyComplete && !st20Complete && !stoComplete}
							completed={st20Complete}
							link="/"
							img="./img/user.png"
							title="ST-20"
						/>
					</div>
					<div
						className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center"
						onClick={() => this.props.toggleStoForm(true)}
					>
						<Tile
							focused={companyComplete && st20Complete && !stoComplete}
							completed={stoComplete}
							link="/"
							img="./img/user.png"
							title="STO"
						/>
					</div>
				</div>
				<div className="mt-5 z-depth-1">
					<RaisedButton
						label="Create Token"
						primary
						disabled={!companyComplete && !st20Complete && !stoComplete}
					/>
				</div>
				<div className="mt-5">
					<h6>Back</h6>
				</div>

				<CompanyInfo
					open={companyOpen}
					close={() => this.props.toggleCompanyForm(false)}
					onSubmit={() => this.props.createCompany(this.props.companyInfoForm)}
				/>
                <St20Form
					open={st20Open}
					close={() => this.props.toggleSt20Form(false)}
					onSubmit={() => this.props.createST20(this.props.st20Form)}
				/>
				<StoForm
					open={stoOpen}
					close={() => this.props.toggleStoForm(false)}
					onSubmit={() => this.props.createSTO(this.props.stoForm)}
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ form, TokenStudio }) => {
	return {TokenStudio, form};
};

export default connect(mapStateToProps, { createCompany, createST20, createSTO, toggleCompanyForm, toggleSt20Form, toggleStoForm })(TokenStudio);

