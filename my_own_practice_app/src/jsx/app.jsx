import React from "react"

var Hero = React.createClass({
	render: function(){
		var hero = this.props.data
		return(
			<div>
				<li>The secret identity of {hero.heroName} is {hero.realName}</li>
			</div>
		)	
	}
});

var HeroRemove = React.createClass({
	remove: function(){
		return function(e){
			// Stop form or link from activating it's default behavior
			e.preventDefault();
			return this.props.listRemove(hero)
			//Bind to this Class and not the this that happens at the event
		}.bind(this)
	},
	render: function(){
		return(
			<div>
				<a href data-id={this.props.data.id} className="remove-filter button round success" onClick={this.remove(this.props.data)}>Remove {this.props.data.heroName}</a>
			</div>
		)
	}
})

var HeroList = React.createClass({
	removeHeroList: function(hero){
		this.props.appRemove(hero)
	},
	render: function(){
		var removeFunction = this.removeHeroList
		var heroes = this.props.data.map(function(hero){
			return (
				<div key={hero.id}>
					<Hero data={hero} />
					
					<HeroRemove data = {hero}listRemove={removeFunction}/>
				</div>
			)
			
		})
		return (
			<div>
				<h2> Indexed Heroes </h2>
				<ul>
					{heroes}
				</ul>
			</div>
		)
	}
});

var HeroCreate = React.createClass({
	getInitialState: function(){
		return {heroName: '', realName: ''};
	},
	heroNameChange: function(e){
		this.setState({heroName: e.target.value})
	},
	realNameChange: function(e){
		this.setState({realName: e.target.value})
	},
	handleSubmit: function(e){
		e.preventDefault();
		var heroName = this.state.heroName.trim();
		var realName = this.state.realName.trim();
		if (!heroName !== !realName){
			return;
		}

		this.props.heroSubmit({
			heroName: heroName,
			realName: realName
		});
		this.setState({heroName: "", realName: ""})
	},
	render: function(){
		
		return (
			<div>
				<h2> Enter a New Hero in the Index </h2>
				<form className="heroForm" onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="New Hero Name"
					value={this.state.heroName}
					onChange={this.heroNameChange}
				/>
				<input
					type="text"
					placeholder="New Hero Secret Identity"
					value={this.state.realName}
					onChange={this.realNameChange}
				/>
				<input type="submit" value="POST"/>
			</form>
			</div>
		)
	},
});

var App = React.createClass({
	//Setting our state to empty array
	getInitialState: function(){
		return ({data: []});
	},
	// Make an ajax call to the props that were passed in with ReactDOM Render
	// That prop is apiUrl and represents an endpoint in our server.js
	getHeroes: function(){
		$.ajax({
			url: this.props.apiUrl,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.props.apiUrl, status, err.toString());
			}.bind(this)
		})
	},
	//must be named componentDidMount
	componentDidMount: function(){
		this.getHeroes()
		setInterval(this.getHeroes, this.props.timerCalls);
	},
	handleSubmit: function(hero){
		// Take the state data of this component that already exists
		var heroes = this.state.data;
		// Grab the length to use for incrementing ID
		var heroesLength = heroes[heroes.length-1]['id']
		// Add a key called "id" to the hero passed in. Set it to the length +1
		hero.id = this.state.data[heroesLength]+1
		
		// Add the new hero to the existing array of heros
		var newHeroes = heroes.concat([hero]);
		// Set the state data for this component
		this.setState({data: newHeroes});
		// Make an AJAX POST request to the server. In this case it's an app.js file
		// Remember you must use "bind" to bind the THIS from handle submit and not use THIS from within the ajax call
		$.ajax({
			url: this.props.apiUrl,
			dataType: 'json',
			type: "POST",
			data: hero,
			success: function(data){
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err){
				this.setState({data: comments});
				console.error(this.props.apiUrl, status, err.toString())
			}.bind(this),
		});
	},
	removeHeroApp: function(heroPost){
		// Removes any of the heroes that have the same ID as heroPost
		var heroes = this.state.data.filter(function(hero){
			return heroPost.id !== hero.id
		});

		// Edits the App State data with the new "heroes" variable
		this.setState({
			data: heroes
		});
	},
	render: function(){
		return(
			<div>
				<HeroList data={this.state.data} appRemove = {this.removeHeroApp}/>
				<HeroCreate heroSubmit={this.handleSubmit}/>
			</div>
		)
	}
})

export default App



