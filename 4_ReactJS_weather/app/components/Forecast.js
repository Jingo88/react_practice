var React = require('react');
var PropTypes = React.PropTypes
var conversionHelpers = require('../utils/conversionHelpers');

var styles = {
	container: {
		// backgroundSize: 'cover',
		// backgroundImage: "url('app/images/simple.jpg')",
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
		width: '100%',
		color: 'white'
	},
	dayList: {
		display: "inline-block",
	},
	smallh6 : {
		fontWeight: "700",
		fontSize: "1.3em",
		fontDecoration: "underline"
	},
	imageSize: {
		maxWidth: "100%"
	}
}

	// weather description
	// "light rain" === light_rain
	// "moderate rain" === moderate_rain
	// "heavy intensity rain" === heavy_rain
	// "clear sky" === clear_sky
	// "overcast clouds" === overcast_clouds
	// "broken clouds" === broken_clouds
	// "scattered clouds" === scattered_clouds
	// "light snow" === light_snow
	// heavy intensity rain === heavy_intensity_rain

function TheIcon(props){
	// use regex to target all spaces. .replace(" ","_") will only look for first occurrence
	var description = props.data
	var theSource = description.replace(/\s+/g, "_")
	
	return (
		<div>
			<img src={"./app/images/" + theSource + ".png"} style={styles.imageSize}/>
		</div>
	)
}

function TheDate(props){
	
	var date = conversionHelpers.getDate(props.data.dt)
	
	return <h6 style={styles.smallh6}>{date}</h6>
}

function EachDay(props){

	var maxTempF = conversionHelpers.kelToFar(props.data.temp.max)
	var minTempF = conversionHelpers.kelToFar(props.data.temp.min)

	var maxTempC = conversionHelpers.kelToCel(props.data.temp.max)
	var minTempC = conversionHelpers.kelToCel(props.data.temp.min)

	return(
		<ul style={styles.dayList} className="col s12 m3 l3">
			<TheDate data={props.data}/>
			<li>Description: {props.data.weather[0].description}</li>
			<li style={styles.paddingList}>Max Temp: {maxTempF}&#8457; / {maxTempC}&#8451;</li>
				<li style={styles.paddingList}>Min Temp: {minTempF}&#8457; / {minTempC}&#8451;</li>
			<li>Humidity: {props.data.humidity}%</li>
			<TheIcon data = {props.data.weather[0].description}/>
			<button 
				onClick={props.onDetailClick}
				className = "waves-effect waves-light btn"> 
				<i className="material-icons right">
					cloud
				</i>
				More Details 
			</button>
		</ul>
	)
}

function EachDayMap(props){
	return (
		<div className="row">
			{props.data.map(function(day){
				return (
					<EachDay 
						data={day}
						onDetailClick={props.onDetailClick.bind(null, day)}/>
				)
			})}
		</div>
	)
}

function FiveDayWeather(props){
	return (
		<div className="container">
			<EachDayMap 
				data={props.data}
				onDetailClick = {props.onDetailClick}/>
		</div>
	)
}

function Forecast(props){
	console.log(props.forecastData.data)
	return props.isLoading === true
		? <div> LOADING </div>
		: <div style={styles.container}> 
				<h1>{props.forecastData.data.city.name}</h1>
				<FiveDayWeather 
					data={props.forecastData.data.list}
					onDetailClick={props.onDetailClick}/>
			</div>
}

Forecast.PropTypes = {
	city: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
	forecastData: PropTypes.object.isRequired
}


module.exports = Forecast;