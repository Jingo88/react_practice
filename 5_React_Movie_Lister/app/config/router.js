import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';
import MovieListContainer from '../containers/MovieListContainer';

// browser history returns a "Cannot GET /movies" why?
// figure it out later?

// Main component has the nav bar, and will take in children, home and movie list
// Index Route will be the Home Container
// Home container will incorporate the Movie Search Container
// Once a search is done the MovieListContainer will render
// Inside the MovieListContainer will render the MovieDetailsContainer

const router = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={HomeContainer}/>
			<Route path='/movies/:movieTitle' component={MovieListContainer}/>
		</Route>
	</Router>
)

module.exports = router;