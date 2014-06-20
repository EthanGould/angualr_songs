angular.module('SongsApp').factory('songData', ['$http', function($http){
  var songData = {
    songs: [{title: 'monkey soup...'}]
  };

    songsHandler = function(data){
        songData.songs = data;
        console.log('Successfully loaded songs.');
    };

    errorHandler = function(){
        console.error('Failed to load songs.');
    };

    // adding a method to the productData objectwe created above
    songData.loadSongs = function(){
        $http.get('./songs.json')
            .success(songsHandler)
            .error(errorHandler);
    };
    console.log('Initialized songData');
    // return productData object created above
    return songData;

}]);
