'use strict';

appControllers.controller('TimeController', TimeController);

TimeController.$inject = ['$scope'];

function TimeController($scope) {
	var vm = this;
	vm.format = 'h:mm a';
}