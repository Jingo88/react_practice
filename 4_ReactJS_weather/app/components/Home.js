var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');
// var styles = require('../styles/styles');

var styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '92vh',
		width: '100%',
		color: 'white'
	},
}

function Home(props){
	return(
		<div style={styles.container}>
			<h1>Get YoSelf The Weather!</h1>
			<GetCityContainer />
		</div>
	)
}

module.exports = Home;