var React = require('react')

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
	something: {
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

function TheDate(props){
	var date = conversionHelpers.getDate(props.data)
	return <h6>{date}</h6>
}

function DetailUI(props){
	console.log(props)
	return(
		<ul>
			<TheDate data={props.data.dt} />
			<li>Max Temp: </li>
			<li>Min Temp: </li>
			<li>Humidity: </li>
			<li>Pressure: </li>
			<li>Speed: </li>
		</ul>
	)
}

function Detail(props){
	console.log(props)
	return (
		<div style={styles.container}>
			<h1>{props.city}</h1>
			<DetailUI data={props.weather}/>
		</div>
	)
}

module.exports = Detail
