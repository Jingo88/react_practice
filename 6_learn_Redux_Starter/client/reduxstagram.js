//make sure to include es2015 in your presets
//make sure to npm install babel-preset-es2015
import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));





// import router from './config/router';

// render(
// 	router, 
// 	document.getElementById('root')
// );




// var React = require('react')
// var ReactDOM = require('react-dom');

// var css = require('./styles/style.styl')


// ReactDOM.render(
// 	<p>hi</p>,
// 	document.getElementById('root')
// );
