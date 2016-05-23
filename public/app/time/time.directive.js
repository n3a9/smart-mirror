'use strict';

var time = angular.module('app.time', []);

time.directive('currentTime', function(dateFilter) {
	return function(scope, element, attrs) {
		var format;
		console.log(attrs);

		scope.$watch(attrs.currentTime, function(value) {
			format = value;
			updateTime();
		});

		console.log(format);

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