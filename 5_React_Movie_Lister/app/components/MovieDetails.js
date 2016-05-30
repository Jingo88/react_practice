import React from 'react';

function MovieDetails(props){
	
	let movieInfo = props.movieInfo.data
	console.log(movieInfo)

	return props.loading === true
		? <div className="card-reveal">
  			<span className="card-title grey-text text-darken-4">
	  			<div className="preloader-wrapper big active">
			      <div className="spinner-layer spinner-red">
			        <div className="circle-clipper left">
			          <div className="circle"></div>
			        </div>
			        <div className="gap-patch">
			          <div className="circle"></div>
			        </div>
			        <div className="circle-clipper right">
			          <div className="circle"></div>
		        	</div>
		      	</div>
		      </div>
  			<i className="material-icons right">close</i>
  			</span>
			</div>
		: <div className="card-reveal">
  			<span className="card-title grey-text text-darken-4">  			
  				{movieInfo.Title}
  			<i className="material-icons right">close</i>
  			</span>
  			<ul>
  					<li>Genre: {movieInfo.Genre}</li>
	  				<li>Rated: {movieInfo.Rated}</li>
	  				<li>Year: {movieInfo.Year}</li>
	  				<li>Released Date: {movieInfo.Released}</li>
	  				<li>IMDB Rating: {movieInfo.imdbRating}</li>
	  				<li>Runtime: {movieInfo.Runtime}</li>
	  				<li>Type: {movieInfo.Type}</li>
	  			</ul>
	  			<p>{movieInfo.Plot}</p>
	  			<p>{movieInfo.Actors}</p>
	  			<p>{movieInfo.Writer}</p>
	  			<p>{movieInfo.Director}</p>
			</div>
		
}

module.exports = MovieDetails