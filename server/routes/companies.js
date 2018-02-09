const router = require('express').Router();
const Company = require('../models/Company');

/* GET tokens listing. */
router.get('/', function(req, res) {
    res.status(200).json('companies api');
});

/* POST new company */
router.post('/', function(req, res) {
    return Company
        .create(req.body)
        .then(company => res.status(201).send(company))
        .catch(error => res.status(401).send(error));
});

// PUT company
router.put('/', function(req, res) {
    return Company
        .update(req.body.data)
        .then(company => res.status(202).send(company))
        .catch(error => res.status(422).send(error));
});

module.exports = router;
