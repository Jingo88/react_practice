// bring in react library
var React = require('react')
// bring in container component
var Prompt = require('../components/Prompt');

var PromptContainer=React.createClass({
	contextTypes : {
		router: React.PropTypes.object.isRequired
	},
	// Our initial state will have a blank username
	getInitialState: function(){
		return{
			username:''
		}
	},
	// We want to edit the state to change username to the inputed value
	handleUpdateUser: function(e){
		this.setState({
			username: e.target.value
		});
	},
	// build a callback that will do shit when the user submits their answer
	handleSubmitUser: function(e){
		console.log(this.state)
		e.preventDefault();
		var username = this.state.username;

		this.setState({
			username: ''
		});

		if (this.props.routeParams.playerOne){
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
				}
			})
		} else {
			this.context.router.push('/playerTwo/'+this.state.username)
		}
	},
	// render the Prompt component
	// Remember to break down your components between container and presentation
	// It is best practice that when passing a value as a prop to a child we pass them as "On" something
	// That prop will reference a callback in the parent component that will be prefixed with the "Handle"
	render: function(){
		return(
			<Prompt 
				onSubmitUser = {this.handleSubmitUser}
				onUpdateUser = {this.handleUpdateUser}
				header={this.props.route.header}
				username={this.state.username}/>
		)
	}
})

module.exports = PromptContainer;