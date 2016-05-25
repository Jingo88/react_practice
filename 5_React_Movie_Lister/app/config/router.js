import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from '../containers/Main';
import MovieListContainer from '../containers/MovieListContainer';
import SearchContainer from '../containers/SearchContainer';
import Testing from '../containers/Test';

// browser history returns a "Cannot GET /movies" why?
// figure it out later?

const router = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={SearchContainer}/>
			<Route path='/movies/:movieTitle' component={Testing}/>
		</Route>
	</Router>
)

module.exports = router;