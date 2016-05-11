var React = require('react')

var conversionHelpers = require('../utils/conversionHelpers');


var styles = {
	container: {
		// backgroundSize: '100% 95vh',
		// backgroundImage: "url('app/images/simple.jpg')",
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '95vh',
		width: '100%',
		color: 'white',
		fontSize: "1.3em"
	},
	heading: {
		textDecoration: "underline",
	},
	imageSize: {
		minWidth: "100%"
	}
}

function TheIcon(props){
	var description = props.data
	var theSource = description.replace(" ", "_")
	
	return (
		<div>
			<img src={"./app/images/" + theSource + ".png"} style={styles.imageSize}/>
		</div>
	)
}

function TheDate(props){
	var date = conversionHelpers.getDate(props.data)
	return <h4>{date}</h4>
}

function DetailUI(props){
	console.log(props)
	return(
		<div>
			<TheDate data={props.data.dt} />
			<ul>
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
	)
}

function Detail(props){
	return (
		<div style={styles.container}>
			<h1 style={styles.heading}>{props.city}</h1>
			<DetailUI data={props.weather}/>
		</div>
	)
}

module.exports = Detail
