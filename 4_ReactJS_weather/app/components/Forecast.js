var React = require('react');
var conversionHelpers = require('../utils/conversionHelpers');

var styles = {
	container: {
		// backgroundSize: 'cover',
		// backgroundImage: "url('app/images/simple.jpg')",
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '100%',
		color: 'white'
	},
	something: {
		display: "inline-block",
	}	
}

function EachDay(props){
	//have to use props.data.dt to grab date time IN FUCKING UNIX BLAHHHH
	//how to convert UNIX time to standard time
	//how to break that down to days
	console.log(props.data.dt)	
	var maxTemp = Math.round(conversionHelpers.kelToFar(parseInt(props.data.temp.max)))
	var minTemp = Math.round(conversionHelpers.kelToFar(parseInt(props.data.temp.min)))
	var dayTemp = Math.round(conversionHelpers.kelToFar(parseInt(props.data.temp.day)))
	var eveTemp = Math.round(conversionHelpers.kelToFar(parseInt(props.data.temp.eve)))
	var date = conversionHelpers.getDate(props.data.dt)
	return(
		<ul style={styles.something} className="col s3">
			<li>Description: {props.data.weather[0].description}</li>
			<li>Main: {props.data.weather[0].main}</li>
				<li>Daytime Temp: {dayTemp}</li>
				<li>Evening Temp: {eveTemp}</li>
				<li>Max Temp: {maxTemp}</li>
				<li>Min Temp: {minTemp}</li>
			<li>Clouds: {props.data.clouds}</li>
			<li>Humidity: {props.data.humidity}%</li>
			<li>Pressure: {props.data.pressure}</li>
			<li>Date: {date}</li>
		</ul>
	)
}

function EachDayMap(props){
	return (
		<div className="row">
			{props.data.map(function(day){
				return <EachDay data = {day}/>
			})}
		</div>
	)
}

function FiveDayWeather(props){
	return (
		<div className="container">
			<EachDayMap data={props.data}/>
		</div>
	)
}

function Forecast(props){
	console.log(props.forecastData.data)
	return props.isLoading === true
		? <div> LOADING </div>
		: <div style={styles.container}> 
				<h1>{props.forecastData.data.city.name}</h1>
				<FiveDayWeather data = {props.forecastData.data.list}/>
			</div>
}

module.exports = Forecast;