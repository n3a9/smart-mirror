'use strict';

var date = angular.module('app.date', []);

date.directive('currentDate', function(dateFilter) {
	return function(scope, element, attrs) {
		var format;

		scope.$watch(attrs.currentDate, function(value) {
			format = value;
			updateTime();
		});

		function updateTime() {
			var dt = dateFilter(new Date(), format);
			element.text(dt);
		}

		function updateLater() {
			setTimeout(function() {
				updateTime();
				updateLater();
			}, 1000);
		}

		updateLater();
	}
});