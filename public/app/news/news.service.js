'use strict';

angular.module('NewsService', [])
.factory('News', News);

News.$inject = ['$http'];

function News($http) {
	var service = {
		getNews: getNews
	};

	return service;

	function getNews() {
		return $http({
			method: 'GET',
			url: 'https://bingapis.azure-api.net/api/v5/news/',
			headers: {
				'Ocp-Apim-Subscription-Key': 'bd2c0d9118a1424aaa0bcf155e1b5aeb'
			}
		}).then(function success(response) {
			return response.data;
		}, function error(error) {
			return error.data;
		});
	}
}