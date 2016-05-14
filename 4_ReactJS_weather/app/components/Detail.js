var React = require('react');
var PropTypes = React.PropTypes;

var conversionHelpers = require('../utils/conversionHelpers');

var styles = {
	wrapping: {
		alignItems: 'center',
		minHeight: '95vh',
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
	},
	myButtons:{
		backgroundColor: "#19647E"
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

	var F = {
		max: conversionHelpers.kelToFar(props.data.temp.max),
		min: conversionHelpers.kelToFar(props.data.temp.min),
		day: conversionHelpers.kelToFar(props.data.temp.day),
		night: conversionHelpers.kelToFar(props.data.temp.night),
		morn: conversionHelpers.kelToFar(props.data.temp.morn),
		eve: conversionHelpers.kelToFar(props.data.temp.eve),
	}

	var C = {
		max: conversionHelpers.kelToCel(props.data.temp.max),
		min: conversionHelpers.kelToCel(props.data.temp.min),
		day: conversionHelpers.kelToCel(props.data.temp.day),
		night: conversionHelpers.kelToCel(props.data.temp.night),
		morn: conversionHelpers.kelToCel(props.data.temp.morn),
		eve: conversionHelpers.kelToCel(props.data.temp.eve),
	}

	var speed = conversionHelpers.meterToFeet(props.data.speed)

	return(
		<div className="row">
			<div className="col s12">

				<TheDate 
					data={props.data.dt}/>
				<ul className="col s12 m4">
					<li style={styles.paddingList}>Max Temp: {F["max"]}&#8457;/{C["max"]}&#8451;</li>
					<li style={styles.paddingList}>Min Temp: {F["min"]}&#8457;/{C["min"]}&#8451;</li>
					<li style={styles.paddingList}>Day Avg Temp: {F["day"]}&#8457;/{C["day"]}&#8451; </li>
					<li style={styles.paddingList}>Night Temp: {F["night"]}&#8457;/{C["night"]}&#8451;</li>
					<li style={styles.paddingList}>Morning Temp: {F["morn"]}&#8457;/{C["morn"]}&#8451;</li>
					<li style={styles.paddingList}>Evening Temp: {F["eve"]}&#8457;/{C["eve"]}&#8451;</li>
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
	return (
		<div 
			style={styles.wrapping}
			className="container">
			<h1 style={styles.heading}>
				{props.city}
			</h1>
			<DetailUI 
				data={props.weather}
				city={props.city}/>
			<div className="row">

				<button
					onClick = {props.onFiveClick.bind(null, props.city)}
					className="waves-effect waves-light btn col s12 m4 offset-m4"
					style={styles.myButtons}>
					<i className="material-icons right">
						cloud
					</i>
						Five Day Forecast
					<i className="material-icons left">
						cloud
					</i>
					</button>
			</div>
		</div>
	)
}

Detail.PropTypes ={
	data: PropTypes.object.isRequired,
	city: PropTypes.string.isRequired,
	onFiveClick: PropTypes.func.isRequired
}


module.exports = Detail
