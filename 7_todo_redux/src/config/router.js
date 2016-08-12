import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import store, {history} from '../store'
import MapperContainer from '../containers/MapperContainer';
import ToDoListContainer from '../containers/ToDoListContainer';
import GetReddit from '../containers/GetReddit'

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={MapperContainer}>
				<IndexRoute component={ToDoListContainer}></IndexRoute>
				<Route path='/testing' component={GetReddit}></Route>
			</Route>
		</Router>
	</Provider>
)

module.exports = router;