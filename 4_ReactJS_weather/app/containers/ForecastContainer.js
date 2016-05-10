var React = require('react');

var Forecast = require('../components/Forecast');
var weatherHelpers = require('../utils/weatherHelpers');

var ForecastContainer = React.createClass({
	getInitialState: function(){
		return {
			isLoading: true,
			forecastData: {}
		}
	},
	componentDidMount: function(){
		this.getForecast(this.props.routeParams.city)
	},
	componentWillReceiveProps: function(nextProps){
		this.getForecast(nextProps.routeParams.city)
	},
	getForecast : function(city){
		// weatherHelpers.getCurrentWeather(city)
		weatherHelpers.getFiveDayWeather(city)
			.then(function(data){
				this.setState({
					isLoading: false,
					forecastData : data
				})
			}.bind(this))
	},
	getDetailForecast: function(){

	},
	render: function(){
		return(
			<div>
				<Forecast
					city = {this.props.routeParams.city}
					isLoading = {this.state.isLoading}
					forecastData = {this.state.forecastData}/>
			</div>
		)
	}
})

module.exports = ForecastContainer;