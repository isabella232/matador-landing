const router = require('express').Router();

const Token = require('../models/token');

/* GET tokens listing. */
router.get('/api/tokens', function(req, res, next) {
  res.status(200).json('tokens api');
});

// POST create tokens
router.post('/api/tokens', function(req, res, next) {
  const newToken = new Token(req.body.data);
  newToken.save(function(err) {
    if(errr) {
      console.log(err);
      res.status(401).send();
      return;
    }
    res.status(201).send();
  })
});

// PUT token
router.put('/api/tokens', function(req, res, next) {
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
