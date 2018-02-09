const router = require('express').Router();
const Token = require('../models/Token');

/* GET tokens listing. */
router.get('/', function(req, res) {
  res.status(200).json('tokens api');
});

// POST create tokens
router.post('/', function(req, res) {
    return Token
      .create(req.body)
      .then(token => res.status(201).send(token))
      .catch(error => res.status(401).send(error));
});

// PUT token
router.put('/', function(req, res) {
  return Token
      .update(req.body.data)
      .then(token => res.status(202).send(token))
      .catch(error => res.status(422).send(error));
});

module.exports = router;