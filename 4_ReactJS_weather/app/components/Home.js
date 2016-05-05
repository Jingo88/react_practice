var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');
// var styles = require('../styles/styles');

var styles = {
	//flexDirection - flexible items are displayed vertically as a column
	//display:flex - all flexible items be the same length
	container: {
		backgroundSize: 'cover',
		backgroundImage: "url('app/images/simple.jpg')",
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '100%',
		color: 'white'
	},
	header: {
		fontSize: 45,
		color: "#FEFFF8",
		fontWeight: 100,
	},
}

function Home(props){
	return(
		<div style={styles.container}>
			<h1> WE ARE HOME STATELESS FUNCTIONAL COMPONENT</h1>
			<GetCityContainer />
		</div>
	)
}

module.exports = Home;