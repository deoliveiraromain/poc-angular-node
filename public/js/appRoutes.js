/**
 * Created by Romain on 22/11/2015.
 */
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainCtrl'
        });

    $routeProvider.when('/movies', {
            templateUrl: 'views/movies.html',
            controller: 'MoviesCtrl'
    });

    $routeProvider.when('/pictures', {
        templateUrl: 'views/pictures.html',
        controller: 'PicturesCtrl'
    });

    $routeProvider.when('/music', {
        templateUrl: 'views/music.html',
        controller: 'MusicCtrl'
    });

    $locationProvider.html5Mode(true);

}]);