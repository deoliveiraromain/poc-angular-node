/**
 * Created by Romain on 18/11/2015.
 */

var index = require('./index');
var pictures = require('./pictures');
var movies = require('./movies');
var music = require('./music');

module.exports = function (app) {
    app.use('/pictures', pictures);
    app.use('/movies', movies);
    app.use('/music', music);
    app.use('*', index);
};
