import React from 'react';

var styles = {

}

function MoviePoster(props){
	return props.data === "N/A"
		? <img src="http://www.nyctransitforums.com/forums/fcontent/default.png" />
		: <img src={props.data} />
}

function MovieUI(props){
	
	console.log(props)
	return(
		<div>
			<MoviePoster 
				data = {props.data.Poster}/>
			<ul>
				<li>{props.data.Title}</li>
				<li>{props.data.Year}</li>
				<li>{props.data.Type}</li>
			</ul>
		</div>
	)
}

function EachMovie(props){
	
	return (
		<div>
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
		: <div>
				<EachMovie data = {props.moviesInfo}/>
			</div>
}

module.exports = MovieList;
