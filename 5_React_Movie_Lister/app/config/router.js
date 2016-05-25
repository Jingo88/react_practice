import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from '../containers/Main';
import MovieListContainer from '../containers/MovieListContainer';
import SearchContainer from '../containers/SearchContainer';
import Testing from '../containers/Test';

const router = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={SearchContainer}/>
			<Route path='/movies/:title' component={Testing}/>
		</Route>
	</Router>
)

module.exports = router;