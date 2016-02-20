

var superheroApp = angular.module('superheroApp', ['ui.router']);

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

	$urlRouterProvider.otherwise('/home');
}]);

//-------------------CONTROLLERS---------------------//


// List
superheroApp.controller('ListController', ['$scope', '$http', function($scope, $http) {

	$http.get('/characters').then(function(characters) {
		console.log(characters.data);
		$scope.characters = characters.data;
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
	});
}]);