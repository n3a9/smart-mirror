'use strict';

angular.module('DataService', [])
.factory('datafactory', datafactory);

function datafactory() {

    var weatherCodes = {
    	'01d' : 'wi-day-sunny',
    	'01n' : 'wi-night-clear',
    	'02d' : 'wi-day-cloudy',
    	'02n' : 'wi-night-alt-cloudy',
    	'03d' : 'wi-cloud',
    	'03n' : 'wi-cloud',
    	'04d' : 'wi-cloudy',
    	'04n' : 'wi-cloudy',
    	'09d' : 'wi-sprinkle',
    	'09n' : 'wi-sprinkle',
    	'10d' : 'wi-day-rain',
    	'10n' : 'wi-night-alt-rain',
    	'11d' : 'wi-thunderstorm',
    	'11n' : 'wi-thunderstorm',
    	'13d' : 'wi-snow',
    	'13n' : 'wi-snow',
    	'50d' : 'wi-day-fog',
    	'50n' : 'wi-night-fog'
    };

    var data = {
    	getWeatherCodes: getWeatherCodes
    };

    return data;

    function getWeatherCodes() {
    	return weatherCodes;
    }

}
