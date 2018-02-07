const dynamoose = require('dynamoose');
require('../config/dynamoose');

const Token = new dynamoose.Schema({
  ticker: {
    type: String,
    required: true
  },
  supply: {
    type: Number,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  jurisdiction: {
    type: String,
    required: true
  },
  offeringType: {
    type: String
  },
  cap: {
    type: Number
  },
  quorum: {
    type: Number
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  }
});

module.exports = dynamoose.model('Token', Token);
