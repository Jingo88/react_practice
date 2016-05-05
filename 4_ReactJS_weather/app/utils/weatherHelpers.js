var fs = require('fs');
var axios = require('axios');


var weatherKey = fs.readFile('../../keys.txt')

var currentWeather = "http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY"
var fiveDayWeather = "http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5"

var weatherHelp = {

}

module.exports = weatherhelp;