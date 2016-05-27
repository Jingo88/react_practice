var axios = require('axios');

// USING TYLER'S API KEY (THE GUY WHO WROTE THE TUTORIAL)
var _baseURL = "http://api.openweathermap.org/data/2.5/"
var _APIKEY = "b714ec74bbab5650795063cb0fdf5fbe"


// Endpoint Example
// http://api.openweathermap.org/data/2.5/weather?q=newyork&type=accurate&APPID=b714ec74bbab5650795063cb0fdf5fbe

//the string "weather" after 2.5/ can be changed to "forecast/daily"

// cnt gives you back how many days you want
// everything else is self explanatory
// Writing a function that returns an object is more "programmatically correct"
// Otherwise we would have to do some manual reassignment to pass "city" from the wrapper functions
function getQueryStringData(city){
	return {
		q : city,
		type: 'accurate',
		APPID: _APIKEY,
		cnt: 5
	}
}

// invoked in the makeWeatherURL function
// Object.keys returns an array
// .map goes through that array and applies a callback to each key
// return a string of the key and value 
// .join will join each string returned from every iteration of .map
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
	var qString = getQueryStringData(city) //JS object from above
	var url = makeWeatherURL("weather", qString)
	
	//hit url endpoint with axios
	return axios.get(url)
		//JS promise to wait
		//data is JSON object that was returned
		.then(function(data){
				//Send data back to where it was called
				return data
			})
		//Give me an error if there is one
		.catch(function(err){
			console.warn("Error with the getCurrentWeather" + err)
		})
}

function getFiveDayWeather(city){
	var qString = getQueryStringData(city) //JS object from above
	var url = makeWeatherURL("forecast/daily", qString)

	//hit url endpoint with axios
	return axios.get(url)
		//JS promise to wait
		//data is JSON object that was returned
		.then(function(data){
				console.log(data)
				//Send data back to where it was called
				return data	
			})
		//Give me an error if there is one
		.catch(function(err){
			console.warn("Error with the getCurrentWeather" + err)
		})	
}


module.exports = {
	getCurrentWeather: getCurrentWeather,
	getFiveDayWeather: getFiveDayWeather
};
