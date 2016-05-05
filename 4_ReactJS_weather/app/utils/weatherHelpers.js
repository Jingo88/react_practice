var axios = require('axios');



var weatherHelp = {
	weatherKey : weatherKey,
	getCurrentWeather: function(city){
			return axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&type=accurate&APPID=" + weatherKey)
	},
	getFiveDayWeather: function(city){
			return axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&type=accurate&APPID=" + weatherKey)
	}
}

module.exports = weatherhelp;


//FS MODULE NOT WORKING WHYYYYY

// var fs = require('fs');

// var weatherKey = fs.readFile('keys.txt', function(err, data){
// 	if (err){
// 		return console.error(err);
// 	} else {
// 		return "" + data.toString();
// 	}
// })

// var currentWeather = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&type=accurate&APPID=" + weatherKey
// var fiveDayWeather = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&type=accurate&APPID=" + weatherKey

// function getCurrentWeather(city){
// 	return axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&type=accurate&APPID=" + weatherKey)
// }

// function getFiveDayWeather(city){
// 	return axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&type=accurate&APPID=" + weatherKey)
// }