var IndexController = function($scope, $http, songData){
  $scope.data = songData;

  songData.loadSongs();
};
