//make sure to include es2015 in your presets
//make sure to npm install babel-preset-es2015
import React from 'react';

import { render } from 'react-dom';

import css from './styles/style.styl';

render(
	<h1>hello world</h1>, 
	document.getElementById('root')
);




// var React = require('react')
// var ReactDOM = require('react-dom');

// var css = require('./styles/style.styl')


// ReactDOM.render(
// 	<p>hi</p>,
// 	document.getElementById('root')
// );
