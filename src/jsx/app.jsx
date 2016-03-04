import React from "react"

var IntroName = React.createClass({
	render: function(){
		var person = this.props.data
		return(
			<h1> Welcome to the Biography Updater{person.name}</h1>
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
})

var App = React.createClass({
	render: function(){
		return(
			<div>
				<IntroName data={this.props.person} />
				<Bio data={this.props.person}/>
			</div>
		)
	}
})

export default App