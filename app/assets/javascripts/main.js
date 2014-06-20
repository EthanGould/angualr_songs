var SongsApp = angular.module('SongsApp', ['ngRoute']);

SongsApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.otherwise( {
    templateUrl: '../assets/mainIndex.html',
    controller: 'IndexController'
  });
}]);
