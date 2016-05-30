import React from 'react';

function MovieDetails(props){
	console.log(props.movieInfo.data)


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
	  			DOES THIS WORK?
  			
  			<i className="material-icons right">close</i>
  			</span>
			</div>
		
}

// function MovieDetails(props){
// 	return (
// 		<div className="card-reveal">
//   		<span className="card-title grey-text text-darken-4">
//   			{props.data.Title}
  			
//   			<i className="material-icons right">close</i>
//   		</span>
// 		</div>
			
// 	)
// }

module.exports = MovieDetails