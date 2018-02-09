const Sequelize = require('sequelize');
const sequelize = require('../config/dbConnection');

const Company = sequelize.define('company', {
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
        type: Sequelize.INTEGER,
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
    address: {
        type: Sequelize.STRING,
        required: true
    },
    website: {
        type: Sequelize.STRING,
        required: true
    }
})

// create the table with a dummy data
Company.sync({force: true}).then(() => {
    return Company.create({
        repName: 'Jane Doe',
        repTitle: 'COO',
        repEmail: 'user@email.com',
        repPhone: 1420420420,
        companyName: 'No Name',
        entityType: 'Private',
        address: '420 Hell Drive, Unknown, B5S S1T',
        website: 'website.com'
    });
});

module.exports = Company;