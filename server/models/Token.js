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
    type: String,
    required: true
  },
  cap: {
    type: Number,
    required: true
  },
  quorum: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});

module.exports = dynamoose.model('Token', Token);
