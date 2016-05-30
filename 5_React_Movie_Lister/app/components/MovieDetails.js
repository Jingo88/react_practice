import React from 'react';

function MovieDetails(props){
	
	let movieInfo = props.movieInfo.data
	console.log(movieInfo)
	return props.loading === true
		? <div className="card-reveal">
  			<span className="card-title grey-text text-darken-4">
	  			{props.movie.Title}
	  			{props.movie.Year}
	  			{props.movie.Type}
  			
  			<i className="material-icons right">close</i>
  			</span>
			</div>
		: <div className="card-reveal">
  			<span className="card-title grey-text text-darken-4">  			
  				{movieInfo.Title}
  			<i className="material-icons right">close</i>
  			</span>
  			<ul>
	  				<li>Rated: {movieInfo.Rated}</li>
	  				<li>Year: {movieInfo.Year}</li>
	  				<li>Released Date: {movieInfo.Released}</li>
	  				<li>IMDB Rating: {movieInfo.imdbRating}</li>
	  				<li>Runtime: {movieInfo.Runtime}</li>
	  				<li>Type: {movieInfo.Type}</li>
	  			</ul>
	  			<p>{movieInfo.Plot}</p>
			</div>
		
}

module.exports = MovieDetails