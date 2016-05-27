import React from 'react';
import MovieSearchContainer from '../containers/MovieSearchContainer';

var styles = {

}

function Home(props){
	return(
		<div
			className="container">
			<div className="row">
				<h1> Welcome to Movie Lister </h1>
				<MovieSearchContainer/>
			</div>
		</div>
	)
}

module.exports = Home;