import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// No need to wrap these in curly brackets{}
import MainContainer from '../containers/MainContainer'
import HomeContainer from '../containers/HomeContainer'

import {Provider} from 'react-redux';
import store from '../store'

const routes = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={MainContainer}>
				<IndexRoute component={HomeContainer}>
					
				</IndexRoute>
			</Route>
		</Router>
	</Provider>
)

export default routes;
