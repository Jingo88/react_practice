import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';
import MovieListContainer from '../containers/MovieListContainer';

// browser history returns a "Cannot GET /movies" why?
// figure it out later?

const router = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={HomeContainer}/>
			<Route path='/movies/:movieTitle' component={MovieListContainer}/>
		</Route>
	</Router>
)

module.exports = router;