const router = require('express').Router();

const Company = require('../models/Company');

/* GET tokens listing. */
router.get('/', function(req, res, next) {
    res.status(200).json('companies api');
});

/* POST new company */
router.post('/', function(req, res, next) {
  const newCompany = new Company(req.body);
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
