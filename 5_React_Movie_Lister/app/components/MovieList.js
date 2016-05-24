import React from 'react'

function MovieList(props){
	console.log(props)
	return (
		<div>
			<h1>We are in the movie list</h1>
			<p>{props.search}</p>
			<p>{props.movieTitle}</p>
		</div>
		
	)	
} 

export default MovieList