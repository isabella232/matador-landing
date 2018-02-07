const router = require('express').Router();
const dynamoose = require('dynamoose');

const Company = require('../models/company');

/* POST new company */
router.post('/api/company', function(req, res, next) {
  const newCompany = new Company(req.body.data);
  newCompany.save(function(err) {
    if(err) {
      console.log(err);
      res.status(401).send();
      return;
    }
    res.status(201).send();
  })
});

module.exports = router;
