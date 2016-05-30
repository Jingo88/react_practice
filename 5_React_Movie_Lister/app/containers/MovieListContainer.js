import React from 'react';
import MovieList from '../components/MovieList';

import { singleSearch, multiSearch} from '../helpers/movieHelpers'; 

const MovieListContainer = React.createClass({
	getInitialState(){
		return{
			loading: true,
			movies: {},
		}
	},

	// Need this function to run the ajax call when the component mounts
	componentDidMount(){
		this.getMovies(this.props.params.movieTitle)
	},

	// Need this function to check for ajax call to omdb api
	componentWillReceiveProps(){
		this.getMovies(this.props.params.movieTitle)
	},

	getMovies(title){
		multiSearch(title)
			.then(function(data){
				this.setState({
					loading: false,
					movies: data
				})
			}.bind(this))
	},
	render(){
		return (
			<MovieList 
				loading = {this.state.loading}
				moviesInfo = {this.state.movies}/>
		)
	}
})

export default MovieListContainer;



