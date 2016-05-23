'use strict';

var day = angular.module('app.day', []);

day.directive('currentDay', function(dateFilter) {
	return function(scope, element, attrs) {
		var format;

		scope.$watch(attrs.currentDay, function(value) {
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