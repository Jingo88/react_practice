import React from "react";
import MovieDetails from "../components/MovieDetails";

import { singleSearch, multiSearch} from '../helpers/movieHelpers';


	// getSingleMovie(title, year){
	// 	singleSearch(title, year)
	// 		.then(function(data){
	// 			this.setState({
	// 				detail: data
	// 			})
	// 		})
	// },

const MovieDetailsContainer = React.createClass({
	render(){
		return (
			<MovieDetails />
		)
	}
})

export default MovieDetailsContainer;