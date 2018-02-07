const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/api/tokens', function(req, res, next) {
    res.status(200).json('tokens api');
});

module.exports = router;
