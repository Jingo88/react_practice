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
	},
	paddingList: {
		padding: ".5em",
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
	var maxTempF = conversionHelpers.kelToFar(props.data.temp.max)
	var minTempF = conversionHelpers.kelToFar(props.data.temp.min)
	var dayTempF = conversionHelpers.kelToFar(props.data.temp.day)
	var eveTempF = conversionHelpers.kelToFar(props.data.temp.eve)
	var mornTempF = conversionHelpers.kelToFar(props.data.temp.morn)
	var nightTempF = conversionHelpers.kelToFar(props.data.temp.night)

	var maxTempC = conversionHelpers.kelToCel(props.data.temp.max)
	var minTempC = conversionHelpers.kelToCel(props.data.temp.min)
	var dayTempC = conversionHelpers.kelToCel(props.data.temp.day)
	var eveTempC = conversionHelpers.kelToCel(props.data.temp.eve)
	var mornTempC = conversionHelpers.kelToCel(props.data.temp.morn)
	var nightTempC = conversionHelpers.kelToCel(props.data.temp.night)

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
					<li style={styles.paddingList}>Max Temp: {maxTempF}&#8457;/{maxTempC}&#8451;</li>
					<li style={styles.paddingList}>Min Temp: {minTempF}&#8457;/{minTempC}&#8451;</li>
					<li style={styles.paddingList}>Day Avg Temp: {dayTempF}&#8457;/{dayTempC}&#8451; </li>
					<li style={styles.paddingList}>Night Temp: {nightTempF}&#8457;/{nightTempC}&#8451;</li>
					<li style={styles.paddingList}>Evening Temp: {eveTempF}&#8457;/{eveTempC}&#8451;</li>
					<li style={styles.paddingList}>Morning Temp: {mornTempF}&#8457;/{mornTempC}&#8451;</li>
				</ul>
				<ul className="col s12 m4">
					<li style={styles.paddingList}>Description: {props.data.weather[0].description}</li>
					<li style={styles.paddingList}>Humidity: {props.data.humidity} %</li>
					<li style={styles.paddingList}>Wind Speed: {speed} ft/sec | {props.data.speed} meter/sec </li>
					<li style={styles.paddingList}>Cloudiness: {props.data.clouds} %</li>
				</ul>
				<TheIcon 
					data={props.data.weather[0].description}
					style={styles.imageSize}/>
			</div>
		</div>
	)
}

function Detail(props){
	console.log(props)
	return (
		<div 
			style={styles.wrapping}
			className="container">
			<DetailUI 
				data={props.weather}
				city={props.city}/>
			<button
				onClick = {props.onFiveClick.bind(props.city)}
				className = "waves-effect waves-light btn">BACK TO FIVE DAY SCHEDULE</button>
		</div>
	)
}

module.exports = Detail
