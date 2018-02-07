const dynamoose = require('dynamoose');
require('../config/dynamoose');

const Company = new dynamoose.Schema({
  rep: {
    type: String,  //Name of rep
    required: true,
    title: {
      type: String, // Title of rep
      required: true
    },
    email: {
      type: String, // Email of rep
      required: true
    },
    phone: {
      type: Number,
      required: true
    }
  },
  name: {
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
