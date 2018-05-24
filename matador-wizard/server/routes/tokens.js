const router = require('express').Router();
const Token = require('../models/Token');

/* GET tokens listing. */
router.get('/', function(req, res) {
    Token.findAll()
        .then(tokens => {
            res.status(200).json(tokens);
            console.log(tokens);
        }).catch(err => {
	    console.log(err);
	    res.status(401).send(err);
	});
});

// POST create tokens
router.post('/', function(req, res) {
   console.log(req.body.postData);
 
   return Token
      .create(req.body.postData)
      .then(token => {
        res.status(201).send(token)
      })
      .catch(error => {
          console.log(error);
          res.status(401).send(error)
      });
});

module.exports = router;
