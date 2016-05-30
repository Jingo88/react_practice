import React from 'react';
import MovieSearchContainer from '../containers/MovieSearchContainer';

var styles = {

}

function Home(props){
	return(
		<div
			className="container">
			<div className="row">
				<div className="col s12 m10 offset-m1">
					<h1> Welcome to Movie Lister </h1>
					<MovieSearchContainer/>
				</div>
			</div>
		</div>
	)
}

module.exports = Home;