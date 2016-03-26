import React from "react"

var Hero = React.createClass({
	render: function(){
		var hero = this.props.data
		return(
			<div>
				<h3>The secret identity of {hero.heroName} is {hero.realName}</h3>
			</div>
		)	
	}
});

var HeroList = React.createClass({
	render: function(){
		var heroes = this.props.data.map(function(hero){
			return (
				<div key={hero.id}>
					<Hero data={hero}/>
				</div>
			)
			
		})
		return (
			<div>
				{heroes}
			</div>
		)
	}
});

var HeroEdit = React.createClass({
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
		console.log("WE ARE IN SUBMIT IN APP")
		console.log(hero)
		var heroes = this.state.data;
		console.log(heroes)
		var heroesLength = this.state.data.length -1
		console.log(heroesLength)
		hero.id = this.state.data[heroesLength]["id"] +1
		
		var newHeroes = heroes.concat([hero]);
		console.log(newHeroes)
		this.setState({data: newHeroes});
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
	render: function(){
		return(
			<div>
				<HeroList data={this.state.data} />
				<HeroEdit heroSubmit={this.handleSubmit}/>
			</div>
		)
	}
})

export default App



