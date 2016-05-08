var React = require('react');

function EachDay(props){
	console.log('IS EACH DAY BEING HIT?')
	console.log(props.data)
	return(
		<ul>
			<li>Description: {props.data.weather[0].description}</li>
			<li>Clouds: {props.data.clouds}</li>
			<li>Humidity: {props.data.humidity}</li>
		</ul>
	)
}

function EachDayMap(props){
	return (
		<div>
			{props.data.map(function(day){
				return <EachDay data = {day}/>
			})}
		</div>
	)
}

function FiveDayWeather(props){
	return (
		<div>
			<h3>{props.data.name}</h3>
			<ul>
				<li>Clouds: {props.data[0].clouds}</li>
				<li>Rain: {props.data[0].rain}</li>
				<li>Description: {props.data[0].weather[0].description}</li>
				<li>Main: {props.data[0].weather[0].main}</li>
				<li>Humidity: {props.data[0].humidity}</li>
			</ul>
			<EachDayMap data={props.data}/>
		</div>
	)
}

function Forecast(props){
	console.log(props.forecastData.data)
	return props.isLoading === true
		? <div> LOADING </div>
		: <div> 
				<h3>Forecast Component BLAH BLAH </h3>
				<FiveDayWeather data = {props.forecastData.data.list}/>
			</div>
}

module.exports = Forecast;