import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import store, {history} from '../store'
import MapperContainer from '../containers/MapperContainer';
import Main from '../components/Main'
import TodoList from '../containers/TodoListContainer';


const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={MapperContainer}>
				<IndexRoute component={TodoList}></IndexRoute>
				<Route component={Main}></Route>
			</Route>
		</Router>
	</Provider>
)

module.exports = router;