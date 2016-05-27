import React from 'react';

import { singleSearch, multiSearch} from '../helpers/movieHelpers'; 

var styles = {
	posterImage : {
		width: '100%',
		height: '100%'
	}
}

function MovieDetails(props){
	return (
				<div className="card-reveal">
      		<span className="card-title grey-text text-darken-4">
      			movie details
      			
      			<i className="material-icons right">close</i>
      		</span>
    		</div>
			
	)
}

function MoviePoster(props){
	return props.data === "N/A"
		? <img style={styles.posterImage} className="activator" src="http://www.nyctransitforums.com/forums/fcontent/default.png" />
		: <img style={styles.posterImage} className="activator" src={props.data} />
}

function MovieUI(props){
	
	return(
		<div className="col s12 m4">
			<div className="card large">
				<div className="card-image waves-effect waves-block waves-light">
					<MoviePoster 
						data = {props.data.Poster}/>
				</div>

				<div className="card-content">
		      <span className="card-title activator grey-text text-darken-4">
		      	{props.data.Title}
		      	<i className="material-icons right">more_vert</i>
		      </span>
				</div>

				<div className="card-action">
					<a href="#">Add to favorites</a>
					<a href="#">Share</a>
				</div>

				<MovieDetails />
			</div>


		</div>
	)
}

function EachMovie(props){
	
	return (
		<div className="row">
			{props.data.map(function(movie){
				return <MovieUI 
								data={movie}/>
			})}
		</div>
	)
}

function MovieList(props){
	// console.log('MOVIE LIST PRESENTATIONAL')
	console.log(props)
	// console.log(props.moviesInfo)
	// console.log('MOVIE LIST PRESENTATIONAL PART 2')
	return props.loading === true
		? <h1> LOADING </h1>
		: <div className = "container">
				<EachMovie data = {props.moviesInfo}/>
			</div>
}

module.exports = MovieList;
