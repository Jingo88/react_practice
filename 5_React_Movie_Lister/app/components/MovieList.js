import React from 'react';

function EachMovie(props){
	// console.log(props)
	return (
		<div>
			{props.data.map(function(movie){
				return movie.Title
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
		: <div>
				<EachMovie data = {props.moviesInfo}/>
			</div>
}

module.exports = MovieList;
