var React = require('react');
var GetCity = require('../components/GetCity');


// Called from the Home Component
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
			search: true,
			city: ''
		}
	},
	//if the user presses submit without entering a city shit gets fucked up
	handleSubmitCity: function(event){
		// not needed
		// event.preventDefault()

		if (this.state.city === ''){
			this.setState({
				search: false,
				city: ""
			})
		} else {
			this.context.router.push({
				pathname: '/forecast/' + this.state.city
			})	
		}
	},
	handleUpdateCity: function(event){
		this.setState({
			city: event.target.value
		})
	},
	render: function(){
		return(
			<GetCity 
				search = {this.state.search}
				direction = {this.props.direction}
				onSubmitCity = {this.handleSubmitCity}
				onUpdateCity = {this.handleUpdateCity}
				city = {this.state.city}/>
		)
	}
})

module.exports = GetCityContainer;