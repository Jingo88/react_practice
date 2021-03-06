//make sure to include es2015 in your presets
//make sure to npm install babel-preset-es2015
import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Provider from react redux allows us to connect our components to the store 
// We use this by wrapping the root component, it will grab all the child components as well
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// wrapping the router in the provider gives it the super powers of the provider to our store
//The history in Router is grabbing our history we exported from store.js
const router = (
	<Provider store={store}>
		<Router history={history}>
	    <Route path="/" component={App}>
	      <IndexRoute component={PhotoGrid}></IndexRoute>
	      <Route path="/view/:postId" component={Single}></Route>
	    </Route>
	  </Router>
	</Provider>
  
)

//render is as "ReactDOM.render"
render(router, document.getElementById('root'));


