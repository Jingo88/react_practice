// bring in react
var React = require('react');
// Try to stay away from requiring the entire react-router
// Maybe use the es6 way of import {Router, Route, IndexRoute} from 'react-router'
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
// bring in your container components
var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
var ResultsContainer = require('../containers/ResultsContainer');

var Main=require('../components/Main');
var Home=require('../components/Home');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home}/>
			<Route path='playerOne' header="Player One"component={PromptContainer}/>
			<Route path='playerTwo/:playerOne' header="Player Two"component={PromptContainer}/>
			<Route path='battle' component={ConfirmBattleContainer}/>
			<Route path='results' component={ResultsContainer} />
		</Route>
	</Router>
);

module.exports = routes;