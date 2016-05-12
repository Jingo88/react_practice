var React = require('react');

var Forecast = require('../components/Forecast');
var weatherHelpers = require('../utils/weatherHelpers');

var ForecastContainer = React.createClass({
	contextTypes: {
		router : React.PropTypes.object.isRequired
	},
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
		weatherHelpers.getFiveDayWeather(city)
			.then(function(data){
				this.setState({
					isLoading: true,
					forecastData : data
				})
			}.bind(this))
	},
	handleDetailClick: function(weather){
		console.log('WE ARE CLICKING SHIT')
		console.log(weather)
		this.context.router.push({
			pathname: '/detail/' + this.state.forecastData.data.city.name,
			state: {
				weather: weather
			}
		})
	},
	render: function(){
		return(
			<div>
				<Forecast
					city = {this.props.routeParams.city}
					isLoading = {this.state.isLoading}
					forecastData = {this.state.forecastData}
					onDetailClick = {this.handleDetailClick}/>
			</div>
		)
	}
})

module.exports = ForecastContainer;