import React from "react";
import MovieDetails from "../components/MovieDetails";

import { singleSearch, multiSearch} from '../helpers/movieHelpers';

const MovieDetailsContainer = React.createClass({
	render(){
		return (
			<MovieDetails />
		)
	}
})

export default MovieDetailsContainer;