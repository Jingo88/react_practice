import React from 'react';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from '../components/Main';
import PhotoGrid from '../components/PhotoGrid';
import Single from '../components/Single';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component = {Main}>
			<IndexRoute component={PhotoGrid}></IndexRoute>
			<Route path="/view/:postId" component={Single}></Route>
		</Route>
	</Router>
)

// Instead of making it a class just make it a functional component
// const Router = React.createClass({
// 	render(){
// 		return(

// 		)
// 	}
// })

// export const router;
// export function router;
// export default router;

module.exports = {
	router: router
}