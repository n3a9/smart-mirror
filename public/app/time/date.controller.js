'use strict';

appControllers.controller('DateController', DateController);

DateController.$inject = ['$scope'];

function DateController($scope) {
	var vm = this;
	vm.format = 'MMMM d, yyyy';
}