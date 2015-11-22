/**
 * Created by Romain on 17/11/2015.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource MOVIE');
});

module.exports = router;