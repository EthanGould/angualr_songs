var SongsApp = angular.module('SongsApp' ['ngRoute']);

SongsApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: '../songIndex.html',
    controller: 'songsController'
  });
}]);
