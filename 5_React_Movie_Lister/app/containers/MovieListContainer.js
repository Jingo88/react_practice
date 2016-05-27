import React from 'react';
import MovieList from '../components/MovieList';

const MovieListContainer = React.createClass({
	getInitialState(){
		return{
			loading: true,
			movies: {}
		}
	},
	componentDidMount(){
		console.log(this.props.params.movieTitle)
	},
	render(){
		return (
			<MovieList />
		)
	}
})

export default MovieListContainer;