'use strict';

appControllers.controller('NewsController', NewsController);

NewsController.$inject = ['$scope', 'News'];

function NewsController($scope, News) {
	var vm = this;
	var counter = 1;
	var topNews;

	News.getNews().then(function(news) {
		topNews = news.value;
		vm.newsItem = topNews[0].name;
	});

	function updateLater() {
		setTimeout(function() {
			$scope.$apply(function() {
				vm.newsItem = getNextItem(topNews, counter);
			});
			updateLater();
			if (counter == topNews.length) {
				counter = 0;
			}
			else {
				counter += 1;
			}
		}, 10000);
	}

	updateLater();
}

function getNextItem(topNews, counter) {
	return topNews[counter].name;
}