'use strict';

appControllers.controller('DayController', DayController);

DayController.$inject = ['$scope'];

function DayController($scope) {
	var vm = this;
	vm.format = 'EEEE';
}