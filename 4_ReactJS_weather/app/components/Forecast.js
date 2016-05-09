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
	},
	smallh6 : {
		fontWeight: "700",
		fontSize: "1.3em",
		fontDecoration: "underline"
	}
}


	// weather description
	// "light rain"
	// "clear sky"
	// "overcast clouds"
	// "broken clouds"
	// "heavy intensity rain"
	// ""

function TheDate(props){
	console.log(props)
	var date = conversionHelpers.getDate(props.data.dt)
	
	return <h6 style={styles.smallh6}>{date}</h6>
}

function EachDay(props){
	console.log(props)	
	var maxTemp = Math.round(conversionHelpers.kelToFar(parseInt(props.data.temp.max)))
	var minTemp = Math.round(conversionHelpers.kelToFar(parseInt(props.data.temp.min)))
	var dayTemp = Math.round(conversionHelpers.kelToFar(parseInt(props.data.temp.day)))
	var eveTemp = Math.round(conversionHelpers.kelToFar(parseInt(props.data.temp.eve)))
	
	return(
		<div>
			<ul style={styles.something} className="col s3">
				<TheDate data={props.data}/>
				<li>Description: {props.data.weather[0].description}</li>
				<li>Main: {props.data.weather[0].main}</li>
					<li>Daytime Temp: {dayTemp}</li>
					<li>Evening Temp: {eveTemp}</li>
					<li>Max Temp: {maxTemp}</li>
					<li>Min Temp: {minTemp}</li>
				<li>Clouds: {props.data.clouds}</li>
				<li>Humidity: {props.data.humidity}%</li>
			</ul>
		</div>
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
	// console.log(props.forecastData.data)
	return props.isLoading === true
		? <div> LOADING </div>
		: <div style={styles.container}> 
				<h1>{props.forecastData.data.city.name}</h1>
				<FiveDayWeather data = {props.forecastData.data.list}/>
			</div>
}

module.exports = Forecast;