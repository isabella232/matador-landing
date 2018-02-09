const router = require('express').Router();

const Token = require('../models/Token');

/* GET tokens listing. */
router.get('/', function(req, res, next) {
  res.status(200).json('tokens api');
});

// POST create tokens
router.post('/', function(req, res, next) {
  console.log(req.body);
  const newToken = new Token(req.body);
  newToken.save(function(err) {
    if(err) {
      console.log(err);
      res.status(401).send();
      return;
    }
    res.status(201).send();
  })
});

// PUT token
router.put('/', function(req, res, next) {
  Token.update(req.body.data, function(err) {
    if(err) {
      console.log(err);
      res.status(422).send();
      return;
    }
    res.status(202).send();
  })
});

module.exports = router;
