var React = require('react');
var GetCity = require('../components/GetCity');
// var weatherHelpers = require('../utils/weatherHelpers')


var GetCityContainer = React.createClass({
	contextTypes: {
		router : React.PropTypes.object.isRequired
	},
	getDefaultProps: function(){
		return {
			direction: 'column'
		}		
	},
	getInitialState: function(){
		return {
			city: ''
		}
	},
	handleSubmitCity: function(event){
		event.preventDefault()
		
		this.context.router.push({
			pathname: '/forecast/' + this.state.city
		})
		// console.log(
		// 	weatherHelpers.getCurrentWeather(this.state.city)
		// )
		// console.log(
		// 	weatherHelpers.getFiveDayWeather(this.state.city)
		// )
	},
	handleUpdateCity: function(event){
		this.setState({
			city: event.target.value
		})
	},
	render: function(){
		return(
			<GetCity 
				direction = {this.props.direction}
				onSubmitCity = {this.handleSubmitCity}
				onUpdateCity = {this.handleUpdateCity}
				city = {this.state.city}/>
		)
	}
})

module.exports = GetCityContainer;