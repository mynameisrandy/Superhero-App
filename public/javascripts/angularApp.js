var superheroApp = angular.module('superheroApp', ['ui.router', 'ngAnimate']);

//-------------------CONFIG---------------------//

superheroApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'views/home.html'
	});

	$stateProvider
		.state('list', {
		url: '/list',
		templateUrl: 'views/list.html',
		controller: 'ListController'
	});

	$stateProvider
		.state('details', {
		url: '/details/{characterId}',
		templateUrl: 'views/details.html',
		controller: 'detailsController'
	});

	$stateProvider
		.state('movieList', {
		url: '/movieList',
		templateUrl: 'views/movieList.html',
		controller: 'movieController'
	});

	$stateProvider
		.state('movieDetails', {
		url: '/movieDetails/{movieId}',
		templateUrl: 'views/movieDetails.html',
		controller: 'moviedetailsController'
	});

	$urlRouterProvider.otherwise('/home');
}]);


//-------------------CONTROLLERS---------------------//



// List
superheroApp.controller('ListController', ['$scope', '$http', function($scope, $http) {
	$http.get('/characters').then(function(characters) {
		console.log(characters.data);
		$scope.characters = characters.data;
		// ngAnimate 
		$scope.pageClass = 'list';
	});
}]);


// Details
superheroApp.controller('detailsController', ['$scope', '$http','$stateParams', function($scope, $http, $stateParams) {
	var ID = $stateParams.characterId;
	$http.get('/characters/'+ID).then(function(characters) {
		console.log(characters.data.name);

		$scope.alias = characters.data.alias;
		$scope.city = characters.data.city;
		$scope.name = characters.data.name;
		$scope.image = characters.data.image;
		$scope.affiliation = characters.data.affiliation;

		// ngAnimate 
		$scope.pageClass = 'details';
	});
}]);


// List
superheroApp.controller('movieController', ['$scope', '$http', function($scope, $http) {
	$http.get('/movies').then(function(movies) {
		console.log(movies.data);
		$scope.movies = movies.data;
		// ngAnimate 
		$scope.pageClass = 'list';
	});
}]);

// Details
superheroApp.controller('moviedetailsController', ['$scope', '$http','$stateParams', function($scope, $http, $stateParams) {
	var ID = $stateParams.movieId;
	$http.get('/movies/'+ID).then(function(movies) {
		console.log(movies.data.name);

		$scope.movieName = movies.data.movieName;
		$scope.movieYear = movies.data.movieYear;
		$scope.movieImage = movies.data.movieImage;
		$scope.moviveDesc = movies.data.moviveDesc;
		$scope.director = movies.data.director;
		$scope.writers = movies.data.writers;
		$scope.stars = movies.data.stars;

		// ngAnimate 
		$scope.pageClass = 'details';
	});
}]);