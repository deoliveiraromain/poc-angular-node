/**
 * Created by Romain on 17/11/2015.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.sendFile('./public/views/index.html');
});

module.exports = router;
