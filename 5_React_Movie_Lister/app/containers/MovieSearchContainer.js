import React from 'react';

import MovieSearch from '../components/MovieSearch';


const MovieSearchContainer = React.createClass({
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
		// event.preventDefault()
		
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