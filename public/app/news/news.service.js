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
			url: 'https://newsapi.org/v1/articles?source=time&sortBy=latest&apiKey=a35876acede64316bf3d4c2c4dae5ace'
		}).then(function success(response) {
			return response.data;
			console.log(5 + 6);
		}, function errorthrown(error) {
			return error.data.message
		});
	}
}
