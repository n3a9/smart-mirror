'use strict';

appControllers.controller('WeatherController', WeatherController);

WeatherController.$inject = ['Weather', 'datafactory'];

function WeatherController(Weather, datafactory) {
	var vm = this;
	var weatherCodes = datafactory.getWeatherCodes();

	// Initial call for weather info
	weather(Weather, vm, weatherCodes);

	function updateLater() {
		setTimeout(function() {
			weather(Weather, vm, weatherCodes);
			updateLater();
		}, 60000);
	}

	updateLater();
}

function weather(Weather, vm, weatherCodes) {
	Weather.getWeather().then(function(weather) {
		if (weather.name) {
			vm.temp = Math.round(weather.main.temp);
			vm.current = weather.name;
			vm.imageCode = weatherCodes[weather.weather[0].icon];
			var weatherDesc = weather.weather[0].description;
			vm.description = weatherDesc.charAt(0).toUpperCase() + weatherDesc.slice(1);
			vm.high = Math.round(weather.main.temp_max);
			vm.low = Math.round(weather.main.temp_min);
		} else {
			vm.current = weather;
		}
	});
}