var axios = require('axios');


// USING TYLER'S API KEY (THE GUY WHO WROTE THE TUTORIAL)

var _baseURL = "http://api.openweathermap.org/data/2.5/"
var _APIKEY = "b714ec74bbab5650795063cb0fdf5fbe"


// weather api http://api.openweathermap.org/data/2.5/weather?q=newyork&type=accurate&APPID=b714ec74bbab5650795063cb0fdf5fbe
//What are their params, we can change this later with more documentation research

function getQueryStringData(city){
	return {
		q : city,
		type: 'accurate',
		APPID: _APIKEY,
		cnt: 5
	}
}

// invoked in the makeWeatherURL function
// takes the data above and joins all the params together
// This will be dynamic in the future if we want to make changes
function prepRouteParams(queryStringData){
	return Object.keys(queryStringData)
		.map(function(key){
			return key + '=' + encodeURIComponent(queryStringData[key]);
		}).join('&')
}

function makeWeatherURL(type, queryStringData){
	return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getCurrentWeather(city){
	var qString = getQueryStringData(city)
	var url = makeWeatherURL("weather", qString)
	// console.log(url)

	return axios.get(url)
		.then(function(data){
				// console.log(data.data)	
				return data
			})
		.catch(function(err){
			console.warn("Error with the getCurrentWeather" + err)
		})
}

function getFiveDayWeather(city){
	var qString = getQueryStringData(city)
	var url = makeWeatherURL("forecast/daily", qString)

	return axios.get(url)
		.then(function(data){
				// console.log(data.data)
				return data	
			})
		.catch(function(err){
			console.warn("Error with the getCurrentWeather" + err)
		})	
}


module.exports = {
	getCurrentWeather: getCurrentWeather,
	getFiveDayWeather: getFiveDayWeather
};




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