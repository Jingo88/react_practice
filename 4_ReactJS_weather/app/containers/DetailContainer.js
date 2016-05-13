var React = require('react');
var Detail = require('../components/Detail');

const DetailContainer = React.createClass({
	contextTypes:{
		router: React.PropTypes.object.isRequired
	},
	handleFiveClick: function(city){
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