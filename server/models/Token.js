const dynamoose = require('dynamoose');

dynamoose.AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

dynamoose.setDefaults({ create: true });

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
