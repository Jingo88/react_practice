var React = require('react');

var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
	render: function(){
		return(
			<div>
				<h1> WE ARE IN THE FORECAST CONTAINER </h1>
				<Forecast/>
			</div>
		)
	}
})

module.exports = ForecastContainer;