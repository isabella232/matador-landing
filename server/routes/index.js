const router = require('express').Router();

// Route Imports
const company = require('./company');
const tokens = require('./tokens');

// Routes
router.use('/company', company);
router.use('/books', books);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({ message: "matador api" });
});

module.exports = router;
