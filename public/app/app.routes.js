'use strict';

angular.module('app.routes', ['ui.router'])
.config(configure);

configure.$inject = ['$stateProvider', '$urlRouterProvider'];

function configure($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state('home', {
		url: '/home',
		views: {
			'weather': {
				templateUrl: 'app/weather/weather.html',
				controller: 'WeatherController',
				controllerAs: 'weather'
			},
			'mainScreen': {
				templateUrl: 'app/mainScreen/mainScreen.html',
				controller: 'MainScreenController',
				controllerAs: 'mainScreen'
			}
		}
	});
}