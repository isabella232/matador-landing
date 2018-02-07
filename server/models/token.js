const dynamoose = require('dynamoose');
const Schema = dynamoose.Schema;

const Token = new Schema({
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
  type: {
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
