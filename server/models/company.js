const dynamoose = require('dynamoose');
const Schema = dynamoose.Schema;

const Company = new Schema({
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
    number: {
      type: Number,
      required: true
    }
  },
  name: {
    type: String,
    required: true
  },
  type: {
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
