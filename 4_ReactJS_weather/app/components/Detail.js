var React = require('react')

var conversionHelpers = require('../utils/conversionHelpers');


var styles = {
	wrapping: {
		alignItems: 'center',
		minHeight: '95vh',
		width: '100%',
		color: 'white',
		fontSize: "1.3em"
	},
	heading: {
		textDecoration: "underline",
		textAlign: "center",
	},
	date:{
		textAlign: "center",
	},
	imageSize: {
		minWidth: "100%"
	}
}

function TheIcon(props){
	var description = props.data
	var theSource = description.replace(" ", "_")
	
	return (
		<div className="col s12 m2">
			<img src={"./app/images/" + theSource + ".png"} style={styles.imageSize}/>
		</div>
	)
}

function TheDate(props){
	var date = conversionHelpers.getDate(props.data)
	return <h4 style={styles.date}>{date}</h4>
}

function DetailUI(props){
	console.log(props)
	var maxTemp = conversionHelpers.kelToFar(props.data.temp.max)
	var minTemp = conversionHelpers.kelToFar(props.data.temp.min)
	var speed = conversionHelpers.meterToFeet(props.data.speed)
	return(
		<div className="row">
			<div className="col s12">
				<h1 style={styles.heading}>
					{props.city}
				</h1>
				<TheDate 
					data={props.data.dt}/>
				<ul className="col s12 m4">
					<li>Max Temp: {maxTemp}</li>
					<li>Min Temp: {minTemp}</li>
					<li>Humidity: {props.data.humidity}%</li>
					<li>Pressure: {props.data.pressure}</li>
					<li>Wind Speed: {speed} ft/sec</li>
				</ul>
				<ul className="col s12 m4">
					<li>Max Temp: {props.data.temp.max}</li>
					<li>Min Temp: {props.data.temp.min}</li>
					<li>Humidity: {props.data.humidity}</li>
					<li>Pressure: {props.data.pressure}</li>
					<li>Speed: {props.data.speed}</li>
				</ul>
				<TheIcon 
					data={props.data.weather[0].description}
					style={styles.imageSize}/>
			</div>
		</div>
	)
}

function Detail(props){
	return (
		<div 
			style={styles.wrapping}
			className="container">
			<DetailUI 
				data={props.weather}
				city={props.city}/>
		</div>
	)
}

module.exports = Detail
