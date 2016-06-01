import React from 'react';

// import presentational component
import MovieSearch from '../components/MovieSearch';


const MovieSearchContainer = React.createClass({
	contextTypes:{
		router: React.PropTypes.object.isRequired
	},
	// Make a boolean value called "search". 
	// Will help with loading screen and when to update component
	// Make empty string for the title the user searched
	getInitialState(){
		return {
			search: true,
			movieTitle: ""
		}
	},
	
	handleSubmitMovie(event){
		if (this.state.movieTitle === ""){
			this.setState({
				search: false,
				city: ""
			})
		} else {
			this.context.router.push({
				pathname: '/movies/' + this.state.movieTitle
			})
		}
	},
	handleUpdateMovie(event){
		this.setState({
			movieTitle: event.target.value
		})
	},
	render(){
		return(
			<div>
				<MovieSearch 
					search = {this.state.search}
					onSubmitMovie = {this.handleSubmitMovie}
					onUpdateMovie = {this.handleUpdateMovie}
					movieTitle = {this.state.movieTitle}/>
			</div>
		)
	}
})

export default MovieSearchContainer;