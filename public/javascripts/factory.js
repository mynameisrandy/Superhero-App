// factory
superheroApp.factory('dataFactory', ['$http', function($http) {

	// URL
	// var urlBase = 'http://localhost:3000';

	// Create an object
	var _dataFactory = {};
	
	// // Get Characters
	// _dataFactory.getChars = function() {
	// 	return $http.get(urlBase + '/characters');
	// 	console.log("GET CHARACTERS");
	// };

	// // Get Character
	// _dataFactory.getChar = function(id) {
	// 	return $http.get(urlBase + '/characters/' + id).error(function(data) {
 //            console.log('I cant get character', data);
 //      });
	// };

	// // Get Movies
	// _dataFactory.getMovies = function() {
	// 	return $http.get(urlBase + '/movies');
	// 	console.log("GET MOVIES");
	// };

	// // Get Movie
	// _dataFactory.getMovie = function(id) {
	// 	return $http.get(urlBase + '/movies/' + id).error(function(data) {
 //            console.log('I cant get movie', data);
 //      	});
	// };


	// Get Characters
	_dataFactory.getChars = function() {
		return $http.get('/characters');
		console.log("GET CHARACTERS");
	};

	// Get Character
	_dataFactory.getChar = function(id) {
		return $http.get('/characters/' + id).error(function(data) {
            console.log('I cant get character', data);
      });
	};

	// Get Movies
	_dataFactory.getMovies = function() {
		return $http.get('/movies');
		console.log("GET MOVIES");
	};

	// Get Movie
	_dataFactory.getMovie = function(id) {
		return $http.get('/movies/' + id).error(function(data) {
            console.log('I cant get movie', data);
      	});
	};

	// Return the object
	return _dataFactory;

}]);