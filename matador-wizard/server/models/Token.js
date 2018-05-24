const Sequelize = require('sequelize');
const sequelize = require('../config/dbConnection');

const Token = sequelize.define('token', {
	repName: {
		type: Sequelize.STRING,
		required: true
	},
	repTitle: {
		type: Sequelize.STRING,
		required: true
	},
	repEmail: {
		type: Sequelize.STRING,
		required: true
	},
	repPhone: {
		type: Sequelize.STRING,
		required: true
	},
	companyName: {
		type: Sequelize.STRING,
		required: true
	},
	entityType: {
		type: Sequelize.STRING,
		required: true
	},
	description: {
		type: Sequelize.STRING,
		required: true
	},
	website: {
		type: Sequelize.STRING,
		required: true
	},
	ticker: {
		type: Sequelize.STRING,
		required: true
	},
	supply: {
		type: Sequelize.INTEGER,
		required: true
	},
	owner: {
		type: Sequelize.STRING,
		required: true
	},
	offeringType: {
		type: Sequelize.STRING,
		required: true
	},
	tokenName: {
		type: Sequelize.STRING,
		required: true
	},
	ethAddress: {
		type: Sequelize.STRING,
		required: true
	}
});

// create the table with a dummy data
Token.sync();

module.exports = Token;
