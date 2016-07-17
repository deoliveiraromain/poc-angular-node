/**
 * Created by Romain on 17/11/2015.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
    console.log("Index requested");
   // res.sendFile('./public/index.html');
   // res.sendFile("/index.html", {"root": './public'});
    console.log(router.get('appPath'));
    console.log("dirname : " + __dirname);
    res.sendFile('/index.html', { root: './public'});
    //res.sendFile(router.get('appPath') + '/index.html');
});

module.exports = router;

