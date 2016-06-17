import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// No need to wrap these in curly brackets{}
import MainContainer from '../containers/MainContainer'
import HomeContainer from '../containers/HomeContainer'

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={MainContainer}>
			<IndexRoute component={HomeContainer}>
				
			</IndexRoute>
		</Route>
	</Router>
)

export default routes;
