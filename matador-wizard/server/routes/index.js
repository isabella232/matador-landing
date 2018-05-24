const router = require('express').Router();

// Route Imports
const tokens = require('./tokens');

// Routes
router.use('/api/tokens', tokens);

/* GET home page. */
router.get('/api', function(req, res) {
  res.status(200).json({ message: "matador api" });
});

module.exports = router;
