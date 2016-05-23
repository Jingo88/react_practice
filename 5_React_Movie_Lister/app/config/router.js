import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from '../containers/Main';

const router = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
		</Route>
	</Router>
)

module.exports = router;