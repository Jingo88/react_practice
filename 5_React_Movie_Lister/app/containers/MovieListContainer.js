import React from 'react';

import MovieList from '../components/MovieList';


const MovieListContainer = React.createClass({
	contextTypes:{
		router: React.PropTypes.object.isRequired
	},
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
				<MovieList 
					search = {this.state.search}
					onSubmitMovie = {this.handleSubmitMovie}
					onUpdateMovie = {this.handleUpdateMovie}
					movieTitle = {this.state.movieTitle}/>
			</div>
		)
	}
})

export default MovieListContainer;