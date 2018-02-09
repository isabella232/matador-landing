const dynamoose = require('../config/dynamoose');

const Company = new dynamoose.Schema({
    company_id: {
        type: Number,
        rangeKey: true
    },
    repName: {
        type: String,  //Name of rep
        required: true
    },
    repTitle: {
        type: String, // Title of rep
        required: true
    },
    repEmail: {
        type: String, // Email of rep
        required: true,
    },
    repPhone: {
        type: Number,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    entityType: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    }
});

module.exports = dynamoose.model('Company', Company);
