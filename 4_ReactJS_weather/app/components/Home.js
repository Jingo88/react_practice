var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');
var styles = require('../styles/styles');


function Home(props){
	return(
		<div style={styles.container}>
			<h1> WE ARE HOME STATELESS FUNCTIONAL COMPONENT</h1>
			<GetCityContainer />
		</div>
	)
}

module.exports = Home;