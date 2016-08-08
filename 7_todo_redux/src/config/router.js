import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import store, {history} from '../store'
import MapperContainer from '../containers/MapperContainer';
import ToDoListContainer from '../containers/ToDoListContainer';
import PageTwo from '../containers/Page2'

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={MapperContainer}>
				<IndexRoute component={ToDoListContainer}></IndexRoute>
				<Route path='/testing' component={PageTwo}></Route>
			</Route>
		</Router>
	</Provider>
)

module.exports = router;