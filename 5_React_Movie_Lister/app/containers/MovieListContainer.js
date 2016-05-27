import React from 'react';
import MovieList from '../components/MovieList';

import { singleSearch, multiSearch} from '../helpers/movieHelpers'; 

const MovieListContainer = React.createClass({
	getInitialState(){
		return{
			loading: true,
			movies: {}
		}
	},
	componentDidMount(){
		console.log(this.props.params.movieTitle)

		multiSearch(this.props.params.movieTitle)
	},
	render(){
		return (
			<MovieList 
				{...this.props}/>
		)
	}
})

export default MovieListContainer;