var superheroApp = angular.module('superheroApp', ['ui.router', 'ngAnimate']);

//-------------------CONFIG---------------------//

superheroApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	// Home Page
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'views/home.html'
	});

	// Characters
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

	// Movies
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

	// Deadpools
	$stateProvider
		.state('deadpools', {
		url: '/deadpools',
		templateUrl: 'views/deadpools.html',
		controller: 'deadpoolsCtrl'
	});

	$stateProvider
		.state('deadpool', {
		url: '/deadpool/{deadpoolId}',
		templateUrl: 'views/deadpool.html',
		controller: 'deadpoolCtrl'
	});

	$urlRouterProvider.otherwise('/home');
}]);


//-------------------CONTROLLERS---------------------//


// List
superheroApp.controller('ListController', ['$scope', 'dataFactory', function($scope, dataFactory) {
	
	dataFactory.getChars().success(function(data) {
        $scope.characters = data;
        console.log($scope.characters);
		// ngAnimate
        $scope.pageClass = 'list';
   	});

	// $http.get('/characters').then(function(characters) {
	// 	console.log(characters.data);
	// 	$scope.characters = characters.data;
	// 	// ngAnimate 
	// 	$scope.pageClass = 'list';
	// })

}]);

// Details
superheroApp.controller('detailsController', ['$scope', 'dataFactory', '$stateParams', function($scope, dataFactory, $stateParams) {
	
	var id = $stateParams.characterId;
	
	dataFactory.getChar(id).success(function(characters) {
        $scope.alias = characters.alias;
       	console.log($scope.alias);
        $scope.city = characters.city;
		$scope.name = characters.name;
		$scope.bio = characters.bio;
		$scope.image = characters.image;
		$scope.affiliation = characters.affiliation;
		// $scope.affiliation.members = characters.data.affiliation.members;
		// console.log($scope.affiliation.members);
		// ngAnimate
        $scope.pageClass = 'list';
  	});



	// $http.get('/characters/'+ID).then(function(characters) {
	// 	console.log(characters.data.name);

	// 	$scope.alias = characters.data.alias;
		// $scope.city = characters.data.city;
		// $scope.name = characters.data.name;
		// $scope.bio = characters.data.bio;
		// $scope.image = characters.data.image;
		// $scope.affiliation = characters.data.affiliation;
		// // $scope.affiliation.members = characters.data.affiliation.members;
		// // console.log($scope.affiliation.members);
		
	// 	// ngAnimate 
	// 	$scope.pageClass = 'details';
	// });
}]);


// List
superheroApp.controller('movieController', ['$scope', 'dataFactory', function($scope, dataFactory) {
	
	dataFactory.getMovies().success(function(movies) {
        $scope.movies = movies;
        console.log($scope.movies);
		// ngAnimate
        $scope.pageClass = 'list';
   	});

	// $http.get('/movies').then(function(movies) {
	// 	console.log(movies.data);
	// 	$scope.movies = movies.data;
	// 	// ngAnimate 
	// 	$scope.pageClass = 'list';
	// });

}]);

// Details
superheroApp.controller('moviedetailsController', ['$scope', 'dataFactory','$stateParams', function($scope, dataFactory, $stateParams) {
	
	var id = $stateParams.movieId;

	dataFactory.getMovie(id).success(function(movies) {
		$scope.movieName = movies.movieName;
		$scope.movieYear = movies.movieYear;
		$scope.movieImage = movies.movieImage;
		$scope.moviveDesc = movies.moviveDesc;
		$scope.director = movies.director;
		$scope.writers = movies.writers;
		$scope.stars = movies.stars;
	 	// ngAnimate 
	 	$scope.pageClass = 'details';
   	});

	// var ID = $stateParams.movieId;
	// $http.get('/movies/'+ID).then(function(movies) {
	// 	console.log(movies.data.name);
	// 	$scope.movieName = movies.data.movieName;
	// 	$scope.movieYear = movies.data.movieYear;
	// 	$scope.movieImage = movies.data.movieImage;
	// 	$scope.moviveDesc = movies.data.moviveDesc;
	// 	$scope.director = movies.data.director;
	// 	$scope.writers = movies.data.writers;
	// 	$scope.stars = movies.data.stars;
	// 	// ngAnimate 
	// 	$scope.pageClass = 'details';
	// });

}]);


// List
superheroApp.controller('deadpoolsCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('/deadpools').then(function(deadpools) {
		console.log(deadpools.data);
		$scope.deadpools = deadpools.data;
		// ngAnimate 
		$scope.pageClass = 'random';
	});
}]);


// Details
superheroApp.controller('deadpoolCtrl', ['$scope', '$http','$stateParams', function($scope, $http, $stateParams) {
	var ID = $stateParams.deadpoolId;
	$http.get('/deadpools/'+ID).then(function(deadpools) {
		// console.log(deadpools.data.name);
		// To get all the deadpool details data
		$scope.deadpool = deadpools.data;
		console.log($scope.deadpool);

		$scope.alias = deadpools.data.alias;
		$scope.city = deadpools.data.city;
		$scope.name = deadpools.data.name;
		$scope.bio = deadpools.data.bio;
		$scope.image = deadpools.data.image;
		$scope.affiliation = deadpools.data.affiliation;
		
		// ngAnimate 
		$scope.pageClass = 'deadpool';
	});
}]);