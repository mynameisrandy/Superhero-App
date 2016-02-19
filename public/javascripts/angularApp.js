var superheroApp = angular.module('superheroApp', ['ui.router']);

// CONFIG
superheroApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('list', {
		url: '/list',
		templateUrl: 'views/list.html',
		controller: 'ListController'
	});

	$urlRouterProvider.otherwise('/list');
}]);

// Controller
superheroApp.controller('ListController', ['$scope', '$http', function($scope, $http) {

	$http.get('/characters').then(function(characters) {
		console.log(characters.data);
		$scope.characters = characters.data;

	});

}]);