import React from 'react';
import MovieList from '../components/MovieList';

import { singleSearch, multiSearch} from '../helpers/movieHelpers'; 

// make a single movie list container about UI or something
// use component will update and componentdid update...?

const MovieListContainer = React.createClass({
	getInitialState(){
		return{
			loading: true,
			movies: {},
			detail: {}
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

	getSingleMovie(title, year){
		singleSearch(title, year)
			.then(function(data){
				this.setState({
					detail: data
				})
			})
	},
	render(){
		return (
			<MovieList 
				loading = {this.state.loading}
				moviesInfo = {this.state.movies}
				detailInfo = {this.state.detail}/>
		)
	}
})

export default MovieListContainer;



