import React from 'react';
import { render } from 'react-dom';

// import router from './config/router';


import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './containers/Main';
import MovieListContainer from './containers/MovieListContainer';
import SearchContainer from './containers/SearchContainer';

const router = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={SearchContainer}/>
			<Route path='/movies' component={MovieListContainer}/>
		</Route>
	</Router>
)


render(
	router, 
	document.getElementById('app')
);