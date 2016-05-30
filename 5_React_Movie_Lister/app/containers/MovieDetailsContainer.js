import React from "react";
import MovieDetails from "../components/MovieDetails";

import { singleSearch, multiSearch} from '../helpers/movieHelpers';

const MovieDetailsContainer = React.createClass({
	getInitialState(){
		return{
			loading: true,
			movieInfo: {}
		}
	},
	componentDidMount(){
		this.getSingleMovie(this.props.data.Title, this.props.data.Year)
	},
	componentWillReceiveProps(){
		this.getSingleMovie(this.props.data.Title, this.props.data.Year)
	},
	getSingleMovie(title,year){
		singleSearch(title, year)
			.then(function(data){
				this.setState({
					loading: false,
					movieInfo: data
				})
			}.bind(this))
	},

	render(){
		return (
			<MovieDetails 
				movie={this.props.data}
				loading = {this.state.loading}
				movieInfo = {this.state.movieInfo}/>
		)
	}
})

export default MovieDetailsContainer;