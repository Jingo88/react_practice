var React = require('react');

var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
	contextTypes:{
		router: React.PropTypes.object.isRequired
	},
	handleFiveClick: function(city){
		console.log('WE ARE IN HANDLE FIVE')
		console.log(city)
		console.log('what is the city?')
		this.context.router.push({
			pathname: '/forecast/' + city
		})
	},
	render: function(){
		return (
			<Detail 
				weather={this.props.location.state.weather}
				city={this.props.routeParams.city}
				onFiveClick= {this.handleFiveClick}/>
		)
	}
})

module.exports = DetailContainer;