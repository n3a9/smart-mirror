'use strict';

angular.module('WeatherService', [])
.factory('Weather', Weather);

Weather.$inject = ['$http'];

function Weather($http) {
	var service = {
		getWeather: getWeather
	};

	return service;

	function getWeather() {
		return $http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?zip=94024,us&units=imperial&APPID=40945b64903870c5651aa89cc43e4f97'
		}).then(function success(response) {
			return response.data;
		}, function errorthrown(error) {
			return error.data.message;
		});
	}
}
