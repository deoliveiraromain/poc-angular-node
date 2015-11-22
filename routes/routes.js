/**
 * Created by Romain on 18/11/2015.
 */

var index = require('./index');
var pictures = require('./pictures');
var movies = require('./movies');
var music = require('./music');

module.exports= function(app){
    app.use('/mediaGallery/pictures', pictures);
    app.use('/mediaGallery/movies', movies);
    app.use('/mediaGallery/music', music);


    app.use('/mediaGallery', index);
};
