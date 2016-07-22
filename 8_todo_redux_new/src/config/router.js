import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// No need to wrap these in curly brackets{}
// import MainContainer from '../containers/MainContainer'
import HomeContainer from '../containers/HomeContainer'
import PatchMapper from '../actions/dispatch'

import {Provider} from 'react-redux';
import store from '../store'

console.log(store)
console.log(store.getState())

const routes = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={PatchMapper}>
				<IndexRoute component={HomeContainer}>
					
				</IndexRoute>
			</Route>
		</Router>
	</Provider>
)
// console.log('we are in router.js')

export default routes;
