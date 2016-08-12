import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import store, {history} from '../store'
import MapperContainer from '../containers/MapperContainer';
import HomeContainer from '../containers/HomeContainer';
import Main from '../components/Main';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={MapperContainer}>
				<IndexRoute component={HomeContainer}></IndexRoute>
			</Route>
		</Router>
	</Provider>
)

module.exports = router;