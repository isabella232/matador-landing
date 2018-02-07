const dynamoose = require('dynamoose');

dynamoose.AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

dynamoose.setDefaults({ create: true });

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
