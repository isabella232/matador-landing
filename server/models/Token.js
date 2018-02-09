const Sequelize = require('sequelize');
const sequelize = require('../config/dbConnection');

const Token = sequelize.define('token', {
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
    jurisdiction: {
        type: Sequelize.STRING,
        required: true
    },
    offeringType: {
        type: Sequelize.STRING
    },
    cap: {
        type: Sequelize.INTEGER
    },
    quorum: {
        type: Sequelize.INTEGER
    },
    startDate: {
        type: Sequelize.DATEONLY
    },
    endDate: {
        type: Sequelize.DATEONLY
    }
})

// create the table with a dummy data
Token.sync({force: true}).then(() => {
   return Token.create({
       ticker: 'JON',
       supply: 10000000,
       owner: 'John Doe',
       jurisdiction: 'BBD',
       offeringType: 'ASDF',
       cap: 2000000,
       quorum: 30000,
       startDate: new Date(),
       endDate: '2018-02-28'
   });
});

module.exports = Token;
//
// Token.findAll().then(tokens => {
//     if (err) { console.log('fucking error')};
//
//     console.log(tokens);
// })