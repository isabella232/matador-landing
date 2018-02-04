import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import CompanyInfo from './company/index';
import ST20 from './st20/index';
import { createCompany, createST20, createSTO } from "../../api/tokenStudio";
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
		const  { companyOpen, st20Open, stoOpen, companyComplete, st20Complete, stoComplete } = this.state;
		return (
			<div className="mt-5 main-container d-flex flex-column align-items-center">
				<h1>Design Your Token</h1>
				<div className="main-tile-container mt-5 d-flex flex-row justify-content-around align-self-center flex-wrap">
					<div onClick={() => this.setState({ companyOpen: true })}>
						<Tile
							focused={!companyComplete && !st20Complete && !stoComplete}
							completed={companyComplete}
							link="/"
							img="./img/user.png"
							title="Company Details"
						/>
					</div>
					<div onClick={() => this.setState({ st20Open: true })}>
						<Tile
							focused={companyComplete && !st20Complete && !stoComplete}
							completed={st20Complete}
							link="/"
							img="./img/user.png"
							title="ST-20"
						/>
					</div>
					<div onClick={() => this.setState({ stoOpen: true })}>
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
					<RaisedButton label="Create Token" primary />
				</div>
				<div className="mt-5">
					<h6>Back</h6>
				</div>

				<CompanyInfo
					open={companyOpen}
					close={() => this.setState({ companyOpen: false })}
					onSubmit={() => this.setState({ companyComplete: true, companyOpen: false })}
				/>
                <ST20
					open={st20Open}
					close={() => this.setState({ st20Open: false })}
					onSubmit={() => this.setState({ st20Complete: true, st20Open: false })}
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ form }) => {
	return form;
};

export default connect(mapStateToProps, { createCompany, createST20, createSTO })(TokenStudio);

