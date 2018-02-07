const express = require('express');
const router = express.Router();

/* GET users listing. */
router.post('/api/users', function(req, res, next) {
  res.status(200).json('user api');
});

module.exports = router;
