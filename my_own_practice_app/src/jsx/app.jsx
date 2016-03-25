import React from "react"

var IntroName = React.createClass({
	render: function(){
		var person = this.props.data

		return(
			<h1> Welcome to the Biography Updater    {person.heroName}</h1>
		)
	}
})

var Bio = React.createClass({
	render: function(){
		var person = this.props.data
		
		return(
			<div>
				<h1>Your Stats are Below</h1>
				<ul>
					<li>Age: {person.age}</li>
					<li>Height: {person.height}</li>
					<li>Favorite Color: {person.favColor}</li>
					<li>Eye Color: {person.eyes}</li>
					<li>Vision: {person.vision}</li>
					<li>Favorite Turtle: {person.favTurtle} </li>
				</ul>
			</div>
		)
	}
});

var BioEdit = React.createClass({
	getInitialState: function(){
		return 
	},
	nameChange: function(e){
		this.setState({name: e.target.value})
	},
	handleSubmit: function(e){
		e.preventDefault;
	},
	render: function(){
		var person = this.props.data
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder = {person.name}
					value = {person.name}
					onChange = {this.nameChange}
				/>
			</form>
		)
	},
});

var App = React.createClass({
	//Setting our state to empty array
	getInitialState: function(){
		this.setState({data: []});
	},
	// Make an ajax call to the props that were passed in with ReactDOM Render
	// That prop is apiUrl and represents an endpoint in our server.js
	getHeroes: function(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.props.url, status, err.toString());
			}.bind(this);
		})
	},
	render: function(){
		console.log(this.props)
		return(
			<div>
				<IntroName data={this.props.person} />
				<Bio data={this.props.person}/>
			</div>
		)
	}
})

export default App



